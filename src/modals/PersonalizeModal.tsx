import React, { useState, Dispatch, SetStateAction } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

type PersonalizeModalProps = {
  setPersonalizeOpen: Dispatch<SetStateAction<boolean>>;
  setIsTheBoardModalOpen: Dispatch<SetStateAction<boolean>>;
};

const PersonalizeModal = ({
  setPersonalizeOpen,
  setIsTheBoardModalOpen,
}: PersonalizeModalProps) => {
  const dispatch = useDispatch();
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [name, setName] = useState("");


  return (
    <div
      onClick={(e) => {
        if (e.target !== e.currentTarget) {
          return;
        }
        setPersonalizeOpen(false);
        setIsTheBoardModalOpen(false);
      }}
      className="fixed right-0 left-0 top-0 bottom-0 px-2 py-4 overflow-scroll z-50 justify-center items-center flex bg-[#00000080] scrollbar-hide"
    >
      <div className=" scrollbar-hide overflow-y-scroll max-h-[95vh] bg-white dark:bg-[#2b2c37] text-black dark:text-white font-bold shadow-[#364e7e1a] max-w-md mx-auto text-center w-full px-8 py-8 rounded-xl">
        <h1 className=" mb-4">Thank you very much, we would like to get your ideas and style to customize a basket precisely to your taste.</h1>

        <h1 className=" mb-4">Click the button below to text our gift curator</h1>

        <Link
          target="_blank"
          to={"https://wa.me/+2348024015795"}
          className=" flex items-center justify-center text-center hover:bg-transparent duration-500 bg-[#EFF901] h-[49px] px-[30px] rounded-full text-[14px] text-[#245236]"
        >
           Chat with our Gift Curator on WhatsApp
        </Link>

        {/* <div className=' mt-8 flex flex-col space-y-3'>
                    <label htmlFor="" className=' text-sm dark:text-white text-gray-500'>Board Columns</label>
                    {
                        newColumns.map((column, index) => (
                            <div key={index} className=' flex items-center w-full'>
                                <input type="text" className=' bg-transparent flex-grow px-4 py-2 roundedmb
                             text-sm border border-gray-600 outline-none focus:outline-[#735fc7]'  value={column.name}
                                    onChange={(e) => {
                                        onChange(column.id, e.target.value)
                                    }}
                                />

                                <div className='cursor-pointer text-gray-500 m-4' onClick={() => {
                                    onDelete(column.id)
                                }}>
                                    <DeleteOutlineOutlinedIcon />
                                </div>
                            </div>
                        ))
                    }
                </div> */}

        <div>
          {/* <button className=' w-full items-center hover:opacity-75 dark:text-[#635fc7] mt-2 dark:bg-white text-[#635fc7] bg-slate-200 py-2 rounded-full'
                        onClick={() => {
                            setNewColumns((state) => [
                                ...state,
                                { name: '', task: [], id: uuidv4() },
                            ])
                        }}>
                        + Add new column
                    </button> */}

          {/* <button className=' w-full items-center hover:opacity-75 dark:text-white dark:bg-[#635fc7] mt-8 relative text-white bg-[#635fc7] py-2 rounded-full'
                        onClick={
                            () => {
                                const isValid = validate()
                                if (isValid === true) onSubmit(type)
                                setBoardModalOpen(false);
                                setIsTheBoardModalOpen(false);
                            }
                        }>
                        {type === 'add' ? 'Create New Board' : 'Save Changes'}
                    </button> */}
        </div>
      </div>
    </div>
  );
};

export default PersonalizeModal;
