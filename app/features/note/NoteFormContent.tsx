import { NoteFormProps } from "@/app/lib/interfaces"

const NoteFormContent = (props: NoteFormProps) => {

    const {
        title, 
        text,
        userId,
        completed,
        onTitleChange,
        onTextChange,
        onCompletedChange,
        onUserIdChange,
        options,
        isError,
    } = props

  return (
    <div className="flex flex-col pt-12 pb-7">
        <label htmlFor="title">عنوان</label>
        <input
            type="text"
            placeholder="عنوان وظیفه محوله"
            id="title"
            value={title}
            autoComplete="off"
            onChange={onTitleChange}
            className={`${isError && 'border-rose-700'} form-input`}
        />

        <label className="mt-7" htmlFor="text">عنوان</label>
        <textarea
            placeholder="شرح وظیفه محوله"
            id="text"
            value={text}
            autoComplete="off"
            onChange={onTextChange}
            className={`${isError && 'border-rose-700'} form-input`}
        />

        <label className="mt-7" htmlFor="status">وضعیت</label>
            <div className='flex items-center gap-3'>
                <input
                    id='status'
                    name='status'
                    type='checkbox'
                    // checked={completed}
                    onChange={onCompletedChange}
                    className='mt-1 p-3 w-4 h-4 text-blue-600 bg-gray-100 outline-none border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                />
                <p>تمام شده</p>
            </div>
            
        <label className="mt-7" htmlFor="note-username">انتخاب کاربر:</label>
            <select
                id="note-username"
                name="username"
                className="outline-none text-sm text-center rounded-xl p-3 mt-1 text-gray-700 bg-gray-200"
                value={userId}
                onChange={onUserIdChange}
            >
                {options}
            </select>
    </div>
  )
}

export default NoteFormContent