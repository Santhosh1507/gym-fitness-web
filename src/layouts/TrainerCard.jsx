import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";

const TrainerCard = (props) => {
  return (
    <div className=" flex flex-col items-center gap-3 pt-8 w-full md:w-1/4 bg-[#222] rounded-xl hover:scale-105 duration-150">
      <div className=" w-3/4 hover:scale-110 duration-150">
        <img className=" rounded-lg" src={props.img} alt="img" />
      </div>
      <div>
        <h1 className=" text-xl font-semibold py-2 text-center hover:scale-110 duration-150">{props.name}</h1>
        <div className=" flex flex-row justify-between py-4 gap-4">
          <BsInstagram size={25} className=" hover:text-[#e53961] cursor-pointer hover:scale-110 duration-150" />
          <BsFacebook size={25} className=" hover:text-[#4267B2] cursor-pointer hover:scale-110 duration-150" />
          <RiTwitterXFill size={25} className="cursor-pointer hover:scale-110 duration-150" />
        </div>
      </div>
    </div>
  );
};

export default TrainerCard;
