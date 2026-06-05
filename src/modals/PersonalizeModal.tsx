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
        <h1 className=" mb-4">
          Got something specific in mind? We'd love to hear your ideas and bring
          your custom vision to life!
        </h1>

        <h1 className=" mb-4">
          ​Click below to text our Gift Curator and get started.
        </h1>

        <Link
          target="_blank"
          to={"https://wa.me/+2348024015795"}
          className=" flex items-center justify-center text-center hover:bg-transparent duration-500 bg-[#EFF901] h-[49px] px-[30px] rounded-full text-[14px] text-[#245236]"
        >
           Design Yours via WhatsApp
        </Link>
        <div></div>
      </div>
    </div>
  );
};

export default PersonalizeModal;
