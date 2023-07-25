"use client"
import React, { useReducer } from 'react'
import {
    Column,
    Table,
    useReactTable,
    ColumnFiltersState,
    getCoreRowModel,
    getFilteredRowModel,
    getFacetedRowModel,
    getFacetedUniqueValues,
    getFacetedMinMaxValues,
    getPaginationRowModel,
    getSortedRowModel,
    FilterFn,
    flexRender,
  } from '@tanstack/react-table'

  import { rankItem } from '@tanstack/match-sorter-utils'
  import { useEffect, useMemo, useState } from 'react'
  import { AiOutlineDoubleLeft, AiOutlineLeft, AiOutlineDoubleRight, AiOutlineRight } from 'react-icons/ai'

  const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
    const itemRank = rankItem(row.getValue(columnId), value)
    addMeta({ itemRank })
    return itemRank.passed
  }
  
  function Filter({ column, table }: { column: Column<any, unknown>, table: Table<any> }) {
    const firstValue = table
      .getPreFilteredRowModel()
      .flatRows[0]?.getValue(column.id)
  
    const columnFilterValue = column.getFilterValue()
  
    const sortedUniqueValues = useMemo(() =>
        typeof firstValue === 'number'
          ? []
          : Array.from(column.getFacetedUniqueValues().keys()).sort(),
      [column.getFacetedUniqueValues()]
    )
  
    return typeof firstValue === 'number' ? (
      <div>
        <div className="flex gap-2 items-center mt-1">
          <DebouncedInput
            type="number"
            min={Number(column.getFacetedMinMaxValues()?.[0] ?? '')}
            max={Number(column.getFacetedMinMaxValues()?.[1] ?? '')}
            value={(columnFilterValue as [number, number])?.[0] ?? ''}
            onChange={value =>
              column.setFilterValue((old: [number, number]) => [value, old?.[1]])
            }
            placeholder={`حداقل ${
              column.getFacetedMinMaxValues()?.[0]
                ? `(${column.getFacetedMinMaxValues()?.[0]})`
                : ''
            }`}
            className="table-input  w-[65px]"
          />
          <DebouncedInput
            type="number"
            min={Number(column.getFacetedMinMaxValues()?.[0] ?? '')}
            max={Number(column.getFacetedMinMaxValues()?.[1] ?? '')}
            value={(columnFilterValue as [number, number])?.[1] ?? ''}
            onChange={value =>
              column.setFilterValue((old: [number, number]) => [old?.[0], value])
            }
            placeholder={`حداکثر ${
              column.getFacetedMinMaxValues()?.[1]
                ? `(${column.getFacetedMinMaxValues()?.[1]})`
                : ''
            }`}
            className="table-input  w-[65px]"
          />
        </div>
        <div className="h-1" />
      </div>
    ) : (
      <>
        <datalist id={column.id + 'list'}>
          {sortedUniqueValues.slice(0, 5000).map((value: any) => (
            <option value={value} key={value} />
          ))}
        </datalist>
        <DebouncedInput
          type="text"
          value={(columnFilterValue ?? '') as string}
          onChange={value => column.setFilterValue(value)}
          placeholder={`جستجو... (${column.getFacetedUniqueValues().size})`}
          className="table-input w-[65px]"
          list={column.id + 'list'}
        />
        <div className="h-1" />
      </>
    )
  }
  
  function DebouncedInput({
    value: initialValue,
    onChange,
    debounce = 500,
    ...props
  }: {
    value: string | number
    onChange: (value: string | number) => void
    debounce?: number
  } & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>) {
    const [value, setValue] = useState(initialValue)
  
    useEffect(() => {
      setValue(initialValue)
    }, [initialValue])
  
    useEffect(() => {
      const timeout = setTimeout(() => {
        onChange(value)
      }, debounce)
  
      return () => clearTimeout(timeout)
    }, [value])
  
    return (
      <input {...props} value={value} onChange={e => setValue(e.target.value)} />
    )
  }

const TableComponent = (props: any) => {

  const { columns, data } = props

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [globalFilter, setGlobalFilter] = useState('')
  const rerender = useReducer(() => ({}), {})[1]
  
  const table = useReactTable({
      data,
      columns,
      filterFns: {
        fuzzy: fuzzyFilter,
      },
      state: {
        columnFilters,
        globalFilter,
      },
      onColumnFiltersChange: setColumnFilters,
      onGlobalFilterChange: setGlobalFilter,
      globalFilterFn: fuzzyFilter,
      getCoreRowModel: getCoreRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      getFacetedRowModel: getFacetedRowModel(),
      getFacetedUniqueValues: getFacetedUniqueValues(),
      getFacetedMinMaxValues: getFacetedMinMaxValues(),
      debugTable: true,
      debugHeaders: true,
      debugColumns: false,
    })

  return (
    <>
    <div className="p-2">
    <div>
      <DebouncedInput
        value={globalFilter ?? ''}
        onChange={value => setGlobalFilter(String(value))}
        className="table-input"
        placeholder="جستجو در کل جدول ..."
      />
    </div>
    <div className="h-2" />
    <div className="relative overflow-x-auto scroll-smooth no-scrollbar mt-5 max-w-full">
      <table className="w-full text-sm text-right text-gray-500 dark:text-gray-500">
        <thead className="table-heading text-center">
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => {
                return (
                  <th key={header.id} colSpan={header.colSpan}  className="px-2">
                    {header.isPlaceholder ? null : (
                      <>
                        <div
                          {...{
                            className: header.column.getCanSort()
                              ? 'cursor-pointer select-none'
                              : '',
                            onClick: header.column.getToggleSortingHandler(),
                          }}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {{
                            asc: ' 🔼',
                            desc: ' 🔽',
                          }[header.column.getIsSorted() as string] ?? null}
                        </div>
                        {header.column.getCanFilter() ? (
                          <div>
                            <Filter column={header.column} table={table} />
                          </div>
                        ) : null}
                      </>
                    )}
                  </th>
                )
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row, index) => {
            return (
              <tr key={row.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
                {row.getVisibleCells().map(cell => {
                  return (
                    <>
                    <td key={cell.id} >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                    </>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>

  <div className="h-2" />
    {/* <button onClick={() => rerender()}>Force Rerender</button> */}
  </div>
  </div>
    <div className="flex items-center gap-2">
      <button
        className={`${!table.getCanPreviousPage()? 'bg-gray-400' : 'bg-white'} border rounded p-1 text-black`}
        onClick={() => table.setPageIndex(0)}
        disabled={!table.getCanPreviousPage()}
      >
        <AiOutlineDoubleRight />
      </button>
      <button
        className={`${!table.getCanPreviousPage()? 'bg-gray-400' : 'bg-white'} border rounded p-1 text-black`}
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        <AiOutlineRight />
      </button>
      <button
        className={`${!table.getCanNextPage()? 'bg-gray-400' : 'bg-white'} border rounded p-1 text-black`}
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        <AiOutlineLeft />
      </button>
      <button
        className={`${!table.getCanNextPage()? 'bg-gray-400' : 'bg-white'} border rounded p-1 text-black`}
        onClick={() => table.setPageIndex(table.getPageCount() - 1)}
        disabled={!table.getCanNextPage()}
      >
        <AiOutlineDoubleLeft />
      </button>
      <span className="flex items-center gap-1">
        <div>صفحه</div>
        <strong>
          {table.getState().pagination.pageIndex + 1} از{' '}
          {table.getPageCount()}
        </strong>
      </span>
      <span className="flex items-center gap-1">
        | برو به صفحه:
        <input
          type="number"
          defaultValue={table.getState().pagination.pageIndex + 1}
          onChange={e => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0
            table.setPageIndex(page)
          }}
          className="table-input w-[65px]"
        />
      </span>
      <select
      className='select select-bordered table-input'
        value={table.getState().pagination.pageSize}
        onChange={e => {
          table.setPageSize(Number(e.target.value))
        }}
      >
        {[10, 20, 30, 40, 50].map(pageSize => (
          <option key={pageSize} value={pageSize} className='text-black'>
            نمایش {pageSize}
          </option>
        ))}
      </select>
    </div>
  </>
  )
}

export default TableComponent