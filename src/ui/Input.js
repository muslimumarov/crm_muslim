import { Icons } from '#/icon/icons'
import React from 'react'
import { useState } from 'react'
import InputMask from "react-input-mask";

function Input(
  {
    placeholder, icon: IconComponent,
     type = "text", mask= "",
      phone = "no", inptSelect = "no",
      optionsText = ["Foydalanuvchi jinsi","Erkak", "Ayol"],
      fill = "#787F95"
    }
) {
  


  return (
    <div className='container'>
       <div className="flex items-center border border-[#EEF0F4] rounded-md px-3 py-2 h-[48px] w-full bg-white  focus-within:border-green-500">
                {IconComponent && <IconComponent className={`mr-3 w-[22px] h-[22px] fill-[${fill}]`}/>}
                  {phone === "yes" ? (
                      <span className="Poppins-Regular text-gray-500">+998</span>
                  ) : ""}
                  {inptSelect === "yes" ? (
                    <select className="Poppins-Regular ml-2 w-full border-none bg-transparent text-[#787F95] placeholder-gray-400 outline-none">
                      <option className="text-[16px]" value={optionsText[0]} disabled selected>
                        {optionsText[0]}
                      </option>
                      <option>{optionsText[1]}</option>
                      <option>{optionsText[2]}</option>
                  </select>
                  ) : (
                    <InputMask
                    mask={mask}
                    type={type}
                    placeholder={placeholder}
                    className={` w-full border-none outline-none bg-transparent ml-2 text-gray-700 placeholder-gray-400 Poppins-Regular`}
                  />
                  )}
              </div>
    </div>
  )
}

export default Input