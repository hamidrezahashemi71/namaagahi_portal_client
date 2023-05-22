"use client"
import Button from "@/app/components/main/Button"
import Loading from "@/app/components/main/Loading"
import PageTitle from "@/app/components/main/PageTitle"
import Table from "@/app/components/main/Table"
import Modal from "@/app/components/modals/Modal"
import Note from "@/app/components/note/Note"
import { useGetNotesQuery } from "@/app/state & api/notesApiSlice"
import { useState } from "react"


const Tasks = () => {
  const {
    data: notes,
    isLoading,
    isSuccess, 
    isError,
    error
  } = useGetNotesQuery(undefined)

  const [isNewTask, setIsNewTask] = useState(false)

  const handleNewTaskModal = () => setIsNewTask(!isNewTask)

  const notesTableHeadings = ['کاربر', 'عنوان', 'شرح', 'وضعیت','عملیات', 'تاریخ ایجاد', 'تاریخ به روزرسانی']
  
  if(isLoading) return <Loading/>
  if(isError) return <p>{error?.data?.message}</p>
  if(isSuccess){
    const { ids } = notes
    const noteTableContent = ids?.length && ids.map((noteId: string) => <Note key={noteId} noteId={noteId} />)

    return (
      <>
        <PageTitle name={'مدیریت وظایف'}/>
        <Table
          tableContent = {noteTableContent}
          tableHeadings = {notesTableHeadings}
        />
        <Button 
          title="وظیفه جدید"
          onClickHandler={handleNewTaskModal}
        />
         {
          isNewTask && 
            <Modal
              type={'newTask'}
              handleModal={handleNewTaskModal}
            />
        }
      </>
    )
  }
}

export default Tasks