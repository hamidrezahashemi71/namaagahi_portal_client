import DeleteStructure from "@/app/features/structures/DeleteStructure"
import { DeleteModalContentProps } from "@/app/lib/interfaces"
import DeleteUser from "@/app/features/users/DeleteUser"
import DeleteNote from "@/app/features/note/DeleteNote"
import DeleteBox from "@/app/features/boxes/DeleteBox"
import { AiOutlineClose } from 'react-icons/ai'

const DeleteModalContent = (props: DeleteModalContentProps) => {

    const { handleModal, prop, deleteType } = props

    return (
        <div className="confirm-modal-content">
            <div className="flex justify-between items-center">
                <p className="md:text-2xl text-xl font-bold">تایید حذف</p>
                <AiOutlineClose className="cursor-pointer text-xl hover:text-2xl transition-all" onClick={handleModal}/>
            </div>

            <div className="flex flex-col py-12">
                <div className="py-7 border-[1px] border-x-transparent border-y-[#FA9E93]">
                    <p className="text-xl">آیا از انجام این کار مطمئن هستید؟ این عمل برگشت پذیر نخواهد بود.</p>
                </div>
            </div>

            {
                deleteType === 'user'?
                <DeleteUser
                    user={prop}
                    handleModal={handleModal}
                />
                :
                deleteType === 'user'?
                <DeleteNote
                    note={prop}
                    handleModal={handleModal}
                />
                :
                deleteType === 'structure'?
                <DeleteStructure
                    structure={prop}
                    handleModal={handleModal}
                />
                :
                deleteType === 'box'?
                <DeleteBox 
                    box={prop}
                    handleModal={handleModal}
                />
                : null
            }
            
        </div>
    )
}

export default DeleteModalContent