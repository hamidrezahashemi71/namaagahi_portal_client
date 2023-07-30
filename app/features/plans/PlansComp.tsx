"use client"
import { selectAllPlans, selectPlanById, useGetAllPlansQuery } from '@/app/features/plans/plansApiSlice'
import CreateUpdateModal from '@/app/components/modals/CreateUpdateModal'
import TableComponent from '@/app/components/table/TableComponent'
import ConfirmModal from '@/app/components/modals/ConfirmModal'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import Loading from '@/app/features/loading/Loading'
import { useEffect, useMemo, useState } from 'react'
import { InitialCustomerObject, PlanObject } from '@/app/lib/interfaces'
import { ColumnDef } from '@tanstack/react-table'
import Status from '@/app/components/main/Status'
import { EntityId } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import useAuth from '@/app/hooks/useAuth'
import PageTitle from '@/app/components/main/PageTitle'
import moment from 'jalali-moment'
import Link from 'next/link'
import { selectAllBoxes, useGetAllBoxesQuery } from '@/app/features/boxes/boxesApiSlice'
import { selectAllInitialCustomers, useGetAllInitialCustomersQuery } from '../initialCustomers/initialCustomersApiSlice'

const PlansComp = (props: any) => {

    const { page } = props

    const { isAdmin, isMediaManager } = useAuth()
  
    const { 
      isLoading,
      isError,
    } = useGetAllPlansQuery(undefined, {
      refetchOnFocus: false,
      refetchOnMountOrArgChange: false
    })

    useGetAllInitialCustomersQuery(undefined, { 
        refetchOnFocus: false, 
        refetchOnMountOrArgChange: false
    })  
  
    useGetAllBoxesQuery(undefined, {
      refetchOnFocus: false,
      refetchOnMountOrArgChange: false,
    })

    const [planId, setPlanId] = useState<string | any | EntityId>('')
    const [customer, setCustomer] = useState<InitialCustomerObject | any>()
    const allPlans: PlanObject[] | unknown = useSelector(state => selectAllPlans(state))
    const plan: PlanObject | any = useSelector(state => selectPlanById(state, planId!))
    const allInitialCustomers = useSelector(state => selectAllInitialCustomers(state))
    const [isEditPlan, setIsEditPlan] = useState(false)
    const [isDeletePlan, setIsDeletePlan] = useState(false)
    const handleEditPlan = () => setIsEditPlan(!isEditPlan)
    const handleDeletePlan = () => setIsDeletePlan(!isDeletePlan)
    const [data, setData] = useState<PlanObject[] | unknown>([])

    useEffect(() =>{
        setData(allPlans)
      }, [allPlans])
      
      useEffect(() =>{
        setCustomer(allInitialCustomers.find((customer: any) => customer.id === plan?.customerName))
      }, [planId])

    const columns = useMemo<ColumnDef<PlanObject, any>[]>(() => {
        return(
          [
            {
              header: 'جدول پلن ها',
              footer: props => props.column.id,
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
                  accessorFn: row => row.name,
                  id: 'نام پلن',
                  cell: info => info.getValue(),
                  header: () => <span>نام پلن</span>,
                },
                {
                  accessorFn: row => row.customerName,
                  id: 'مشتری',
                  cell: info => {
                    return(
                        <td className="px-6 py-4">{customer}</td>

                    )
                  },
                  header: () => <span>نام مشتری</span>,
                },
                {
                  accessorFn: row => row.brand,
                  id: 'برند',
                  cell: info => info.getValue(),
                  header: () => <span>برند</span>,
                },
                {
                  accessorFn: row => row.structures,
                  id: 'تعداد سازه ها',
                  cell: info => info.getValue().length,
                  header: () => <span>تعداد سازه</span>,
                },
                {
                  accessorFn: row => row.status,
                  id: 'وضعیت',
                  cell: info => {
                    const status = info.getValue();
                    return(
                        <td className="px-6 py-4">
                        {status === 'suggested'?
                        <Status
                            status = {'پیشنهادی '}
                            bgColor = {'#e8ac05'}
                            textColor = {'#0a541e'}
                        />
                        : status === 'done'?
                        <Status
                            status = {'تایید شده'}
                            bgColor = {'#439400'}
                            textColor = {'#2e030c'}
                        /> : status === 'rejected' &&
                        <Status
                        status = {'رد شده'}
                        bgColor = {'#942300'}
                        textColor = {'#ffc5b3'}
                    />
                    }
                    </td>
                    ) 
                  },
                  header: () => <span>وضعیت</span>,
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
                    console.log("updatedAt", updatedAt)
                    return (
                    <div className='flex justify-center'>
                      <td className="px-6">{moment(updatedAt).format('jYYYY/jM/jD')}</td>
                    </div>
                    )}
                },
                {
                  id: 'عملیات',
                  header: () => <span>عملیات</span>,
                  cell: (info) => {
                    const row = info.row.original;
                    return (
                      <div className="px-6 py-4 flex items-center gap-2" onClick={() => setPlanId(row.id)}>
                          {isMediaManager && page === 'all' ?
                          <>
                              <AiFillEdit 
                                  className="text-black dark:text-white hover:scale-125 transition-all p-1 border-[1px] border-[#737373] rounded-md cursor-pointer" size={20}
                                  onClick={handleEditPlan}
                              />
                          
                              <AiFillDelete 
                                  className="text-orange-600 dark:text-white hover:scale-125 transition-all p-1 border-[1px] border-[#737373] rounded-md cursor-pointer" size={20}
                                  onClick={handleDeletePlan}    
                              />
                          </>
                          : page === 'all' &&
                          <p>دسترسی محدود</p>
                          }
                          {page === 'my' &&
                          <>
                              <AiFillEdit 
                                  className="text-black dark:text-white hover:scale-125 transition-all p-1 border-[1px] border-[#737373] rounded-md" size={20}
                                  onClick={handleEditPlan}
                              />
                          
                              <AiFillDelete 
                                  className="text-orange-600 dark:text-white hover:scale-125 transition-all p-1 border-[1px] border-[#737373] rounded-md" size={20}
                                  onClick={handleDeletePlan}    
                              />
                          </>
                          }
                      </div>
                    )}
                },
                {
                    id: 'مشاهده',
                    header: () => <span></span>,
                    cell: ({row}) => {
                      return (
                        <Link href={`/dashboard/billboard/plans/${row.original.id}`} target="_blank">
                            <td className=" cursor-pointer transition-all">
                                <Status
                                    status = {'مشاهده '}
                                    bgColor = {'#34ebc9'}
                                    textColor = {'#0a541e'}
                                />
                            </td>
                        </Link>
                      )}
                  },
              ],
            }
          ]
        )
      },
      []
    )

    if(isLoading) return <Loading />
  
    if(isError) return (
    
      <div className='flex flex-col justify-center items-center min-h-screen gap-3'>
        <p className='text-xl'>هیچ پلنی وجود ندارد</p>
      </div>
    )
    
  return (
    <>
        <PageTitle name={'پلن ها'} /> 
        <TableComponent 
            columns={columns}
            data={data}
        />
        {
            isDeletePlan && 
            <ConfirmModal 
            prop={plan} 
            handleModal={handleDeletePlan}
            type={'delete'} 
            deleteType="plan"
            /> 
        }
        {
            isEditPlan &&  
            <CreateUpdateModal 
            prop={plan}
            handleModal={handleEditPlan}
            type={'editPlan'}
            />
        }
    </>
  )
}

export default PlansComp