import CreateUpdateModal from "@/app/components/modals/CreateUpdateModal"
import { selectUserById, useGetUsersQuery } from "@/app/features/users/usersApiSlice"
import ConfirmModal from "@/app/components/modals/ConfirmModal"
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { UserObject } from "@/app/lib/interfaces"
import Status from "@/app/components/main/Status"
import { useSelector } from "react-redux"
import { useState } from "react"
import Image from "next/image"
import useAuth from "@/app/hooks/useAuth"

const User = ({ userId }: { userId: string }) => {

    const { isAdmin } = useAuth()

    const {
        data: users, 
        isLoading,
        isSuccess,
        isError,
      } = useGetUsersQuery(undefined, { 
        refetchOnFocus: false,
        refetchOnMountOrArgChange: false
      }) 

    const user: UserObject | any = useSelector(state => selectUserById(state, userId))

    const [isEditUser, setIsEditUser] = useState(false)
    const [isDeleteUser, setIsDeleteUser] = useState(false)
    
    if(user) { 

        const handleEditUser = () => setIsEditUser(!isEditUser)
        const handleDeleteUser = () => setIsDeleteUser(!isDeleteUser)

        return (
        <>
            <tr 
                key={user._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
                <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                    <Image
                        src={user.avatar}
                        alt="avatar"
                        width={35}
                        height={35}
                    />
                </th>
                
                <td className="px-6 py-4">{user.name}</td>
                <td className="px-6 py-4">{user.username}</td>
                <td className="px-6 py-4">
                    {user?.roles.includes("ادمین") ? 
                        <p>ادمین</p> : 
                        user?.roles.includes("مدیررسانه") ? 
                        <p>مدیر رسانه</p> : 
                        <p>پذیرشگر</p> 
                    }
                </td>
                    {isAdmin ?
                    <>
                        <td className="px-6 py-4 flex items-center gap-5">
                            <div className="flex items-center p-1 border-[1px] border-[#737373] rounded-md cursor-pointer">
                                <AiFillEdit 
                                    className="text-black dark:text-white hover:scale-125 transition-all" size={20}
                                    onClick={handleEditUser}
                                />
                            </div>
                            <div className="flex justify-center items-center p-1 border-[1px] border-[#737373] rounded-md cursor-pointer">
                                <AiFillDelete 
                                    className="text-orange-600 dark:text-white hover:scale-125 transition-all" size={20}
                                    onClick={handleDeleteUser}    
                                />
                            </div> 
                        </td>
                        <td className="px-6 py-4">
                            {user.active? 
                            <Status 
                                status = {'فعال'} 
                                bgColor = {'#a8edbb'}
                                textColor = {'#0a541e'}
                            />
                            : 
                            <Status
                                status = {'غیرفعال'}
                                bgColor = {'#d96f85'}
                                textColor = {'#2e030c'}
                            />    
                        }
                        </td>
                    </>
                    :
                    <>
                        <td>دسترسی محدود شده</td>
                        <td>دسترسی محدود شده</td>
                    </>
                    }
            </tr>

            {
                isDeleteUser && 
                    <ConfirmModal 
                        prop={user} 
                        handleModal={handleDeleteUser}
                        type={'delete'}
                        deleteType="user"
                    />
            }

            {
                isEditUser && 
                    <CreateUpdateModal 
                        type={'editUser'}
                        handleModal={handleEditUser} 
                        prop={user}
                    />
            }
        </>
        )
    } else return null
}

export default User