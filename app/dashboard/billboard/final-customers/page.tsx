"use client"
import { selectAllFinalCustomers, selectFinalCustomerById, useGetAllFinalCustomersQuery } from "@/app/apiSlices/finalCustomerApiSlice"
import PageTitle from "@/app/components/main/PageTitle"
import Tooltip from "@/app/components/main/Tooltip"
import ConfirmModal from "@/app/components/modals/ConfirmModal"
import CreateUpdateModal from "@/app/components/modals/CreateUpdateModal"
import TableComponent from "@/app/components/table/TableComponent"
import Loading from "@/app/features/loading/Loading"
import useAuth from "@/app/hooks/useAuth"
import { FinalCustomerObject } from "@/app/lib/interfaces"
import { EntityId } from "@reduxjs/toolkit"
import { ColumnDef } from "@tanstack/react-table"
import moment from "jalali-moment"
import { useEffect, useMemo, useState } from "react"
import { AiFillDelete, AiFillEdit } from "react-icons/ai"
import { useSelector } from "react-redux"


const FinalCustomers = () => {

    const { isAdmin, isMaster } = useAuth()

    const {
        isLoading,
        isError,
      } = useGetAllFinalCustomersQuery(undefined, { 
        refetchOnFocus: false,
        refetchOnMountOrArgChange: false
      }) 

    const allFinallCustomers: FinalCustomerObject[] = useSelector(state => selectAllFinalCustomers(state) as FinalCustomerObject[])
    const [data, setData] = useState<FinalCustomerObject[] | unknown>([])
    const [isDeleteFinalCustomer, setIsDeleteFinalCustomer] = useState<boolean>(false)
    const [isEditFinalCustomer, setIsEditFinalCustomer] = useState<boolean>(false)
    const [finalCustomerId, setFinalCustomerId] = useState<string | any | EntityId>('')
    const handleDeleteFinalCustomer = () => setIsDeleteFinalCustomer(!isDeleteFinalCustomer)
    const handleEditFinalCustomer = () => setIsEditFinalCustomer(!isEditFinalCustomer)
    const finalCustomer: FinalCustomerObject  = useSelector(state => selectFinalCustomerById(state, finalCustomerId) as FinalCustomerObject)


    useEffect(() => {
        setData(allFinallCustomers)
    }, [allFinallCustomers])

    const columns = useMemo<ColumnDef<FinalCustomerObject, any>[]>(() => {
        return(
          [
            {
              header: 'جدول مشتریان نهایی',
              columns: [
                {
                  accessorKey: "_id",
                  accessorFn: row => row.id,
                  id: '_id',
                  cell: info => null,
                  header: () => null,
                },
                {
                  accessorKey: 'username',
                  accessorFn: row => row.username,
                  id: 'کاربر ایجاد کننده',
                  cell: info => info.getValue(),
                  header: () => <span>کاربر ایجاد کننده</span>,
                },
                {
                  accessorFn: row => row.agentName,
                  id: 'نام نماینده',
                  cell: info => {
                    return (
                        <p>{!info.getValue()? "تعیین نشده" : info.getValue()}</p>
                    )
                  },
                  header: () => <span>نام نماینده</span>,
                },
                {
                  accessorFn: row => row.post,
                  id: 'پست سازمانی',
                  cell: info => {
                    return (
                        <p>{!info.getValue()? "تعیین نشده" : info.getValue()}</p>
                    )
                  },
                  header: () => <span>پست سازمانی</span>,
                },
                {
                  accessorFn: row => row.companyName,
                  id: 'نام شرکت',
                  cell: info => {
                    return (
                        <p>{!info.getValue()? "تعیین نشده" : info.getValue()}</p>
                    )
                  },
                  header: () => <span>نام شرکت</span>,
                },
                {
                  accessorFn: row => row.ecoCode,
                  id: 'کد اقتصادی',
                  cell: info => {
                    return (
                        <p>{!info.getValue()? "تعیین نشده" : info.getValue()}</p>
                    )
                  },
                  header: () => <span>کد اقتصادی</span>,
                },
                {
                  accessorFn: row => row.regNum,
                  id: 'شماره ثبت',
                  cell: info => {
                    return (
                        <p>{!info.getValue()? "تعیین نشده" : info.getValue()}</p>
                    )
                  },
                  header: () => <span>شماره ثبت</span>,
                },
                {
                  accessorFn: row => row.nationalId,
                  id: 'شناسه ملی',
                  cell: info => {
                    return (
                        <p>{!info.getValue()? "تعیین نشده" : info.getValue()}</p>
                    )
                  },
                  header: () => <span>شناسه ملی</span>,
                },
                {
                  accessorFn: row => row.address,
                  id: 'آدرس',
                  cell: info => {
                    return (
                        <Tooltip tooltipText={info.getValue() && info.getValue()} orientation='left'>
                            <p>{!info.getValue()? "تعیین نشده" : `${info.getValue().slice(0,8)}...`}</p>
                        </Tooltip>
                    )
                  },
                  header: () => <span>آدرس</span>,
                },
                {
                    accessorFn: row => row.postalCode,
                    id: 'کد پستی',
                    cell: info => {
                      return (
                          <p>{!info.getValue()? "تعیین نشده" : info.getValue()}</p>
                      )
                    },
                    header: () => <span>کد پستی</span>,
                },
                {
                    accessorFn: row => row.phone,
                    id: 'تلفن',
                    cell: info => {
                      return (
                          <p>{!info.getValue()? "تعیین نشده" : info.getValue()}</p>
                      )
                    },
                    header: () => <span>تلفن</span>,
                },
                {
                  id: 'عملیات',
                  header: () => <span>عملیات</span>,
                  cell: (info) => {
                    const row = info.row.original
                    return (
                      <>
                      {isMaster || isAdmin ?
                        <td className="px-6 flex items-center justify-center gap-5" onClick={() => setFinalCustomerId(row.id)}>
                          <div className="flex items-center p-1 border-[1px] border-[#737373] rounded-md cursor-pointer gap-3">
                            <AiFillEdit
                              className="text-black dark:text-white hover:scale-125 transition-all"
                              size={20}
                              onClick={handleEditFinalCustomer}
                            />
                            <AiFillDelete
                              className="text-black dark:text-white hover:scale-125 transition-all"
                              size={20}
                              onClick={handleDeleteFinalCustomer}
                            />
                          </div>
                        </td>
                        :
                        <>
                          <td>دسترسی محدود شده</td>
                        </>
                    }
                      </>
                    )}
                },
                {
                  id: 'تاریخ ایجاد',
                  header: () => <span>تاریخ ایجاد</span>,
                  cell: (info) => {
                    const createdAt = info.getValue()
                    return (
                      <div className='flex justify-center'>
                        <td className="px-6">{moment(createdAt).format('jYYYY/jM/jD')}</td>
                      </div>
                    )}
                },
                {
                  id: 'تاریخ ویرایش',
                  header: () => <span>تاریخ ویرایش</span>,
                  cell: (info) => {
                    const updatedAt = info.getValue()
                    return (
                      <div className='flex justify-center'>
                        <td className="px-6">{moment(updatedAt).format('jYYYY/jM/jD')}</td>
                      </div>
                    )}
                },
              ],
            }
          ]
        )
      },
      []
    )

    // console.log("allFinallCustomers", allFinallCustomers)
    console.log("isEditFinalCustomer", isEditFinalCustomer)
    if(isLoading) return <Loading />
    if(isError) return (

        <div className='flex flex-col justify-center items-center min-h-screen gap-3'>
          <p className='text-xl'>
            هیچ مشتری نهایی وجود ندارد
          </p>
        </div>
    )

    return (
        <>
            <PageTitle name={'مشتریان نهایی'} />
            <TableComponent 
                columns={columns}
                data={data}
            />
          {
            isEditFinalCustomer && 
            <CreateUpdateModal 
                prop={finalCustomer} 
                handleModal={handleEditFinalCustomer}
                type={'editFinalCustomer'}
            />
          }
          {
            isDeleteFinalCustomer && 
            <ConfirmModal 
                prop={finalCustomer} 
                handleModal={handleDeleteFinalCustomer}
                type={'delete'}
                deleteType="finalCustomer"
            />
          }
        </>
    )
}

export default FinalCustomers