"use client"
import useAuth from "@/app/hooks/useAuth"
import PlanBasicInfo from "./PlanBasicInfo"
import PlanStructuresInfo from "./PlanStructuresInfo"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useCreateNewPlanMutation } from "@/app/apiSlices/plansApiSlice"
import { selectAllBoxes, useGetAllBoxesQuery } from "@/app/apiSlices/boxesApiSlice"
import { AddPlanForm, BoxObject, StructurePlanObject } from "@/app/lib/interfaces"
import { useSelector } from "react-redux"
import { useFieldArray, useForm } from "react-hook-form"
import { newPlanDefaultValues } from "@/app/lib/constants"
import { convertToNumber } from "@/app/utilities/convertToNumber"
import { toast } from "react-toastify"
import Link from "next/link"

type Props = {
    mark: string
  }

const NewPlan = (props: Props) => {
    
  const { mark } = props

  const { id } = useAuth()  
  const { push } = useRouter()
  const [discountType, setDiscountType] = useState('percentage')
  const [isChanged, setIsChanged] = useState(false)

  const [createNewPlan, {
    isSuccess,
    isError,
    error
}] = useCreateNewPlanMutation()

useGetAllBoxesQuery(undefined, {
  refetchOnFocus: false,
  refetchOnMountOrArgChange: false,
})
const allBoxes: BoxObject[] = useSelector(state => selectAllBoxes(state) as BoxObject[])

  const createPlanForm = useForm<AddPlanForm>({
    defaultValues: newPlanDefaultValues,
    mode: 'onSubmit'
  })

  const {
    register,
    control,
    handleSubmit,
    formState: {errors},
    setValue,
    watch 
} = createPlanForm
  
  const {
    fields: structuresField,
    append: appendStructure,
    remove: removeStructure
  } = useFieldArray({
    control,
    name: "structures",
  })

  const onSubmit = async(data: any) => {

    const newData = {
      ...data, 
      structures: data.structures.map((structure: StructurePlanObject) => ({
        ...structure,
        monthlyFee: convertToNumber(structure.monthlyFee),
        monthlyFeeWithDiscount: convertToNumber(structure.monthlyFeeWithDiscount),
        discountType: discountType
      }))
    }

    const abc = await createNewPlan({
      userId: id,
      mark: { 
        name: mark,
      },
      initialCustomerId: newData.initialCustomerId,
      finalCustomerId: newData.finalCustomerId,
      projectCodeId: null,
      brand: newData.brand,
      structures: newData.structures,
      totalPackagePrice: newData.totalPackagePrice
    })
      console.log("ABC", abc)
  } 

  if(isError) {
    'status' in error! && error.status === 409 && toast.error('این نام پلن قبلا ثبت شده است')
    'status' in error! && error.status === 400 && toast.error('همه فیلدها را تکمیل کنید')
}

useEffect(() => {
  setIsChanged(true)
}, [watch('structures')])

  if(isSuccess) {
    toast.success(`پلن جدید با موفقیت ساخته شد.`)
    // push('/dashboard/billboard/plans')
  }

  if(!allBoxes[0]) return (
    <div className='flex flex-col justify-center items-center min-h-screen gap-3'>
      <p className='text-xl'>
        برای ایجاد پلن باید سازه ها در باکس ثبت شده باشند. در حال حاضر هیچ باکسی وجود ندارد.
      </p>
      <p>
        برای ایجاد باکس جدید 
        <Link href={'/dashboard/billboard/boxes/createbox'}>
          <span className='text-cyan-300'>
            کلیک کنید
          </span>
        </Link>
      </p>
    </div>
  )
console.log("MARK", mark)
  return (
    <div className='flex flex-col gap-9 justify-center'>
        <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className='w-full flex flex-col gap-9 justify-center'
        >
        <PlanBasicInfo
            page={'create'}
            control={control}
            errors={errors}
        />

        <PlanStructuresInfo
            page={'create'}
            mark={mark}
            control={control}
            errors={errors}
            discountType={discountType}
            convertToNumber={convertToNumber}
            handleDiscountType={(val: string) => setDiscountType(val)}
            setValue={setValue}
            field={structuresField}
            appendStructure={appendStructure}
            removeStructure={removeStructure}
            watch={watch}
            register={register}
            isChanged={isChanged}
        />

        <button className="primaryButton w-1/4 mx-auto">
            افزودن پلن
        </button>
        </form>
    </div>
  )
}

export default NewPlan