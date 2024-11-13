import React from "react";
import Image from "next/image";
import Input from "@/ui/Input";
import LoginImg from "../../public/img/sidebar.png"
import { Icons } from "#/icon/icons";
function Login() {
  return <div className="flex">
    <div className="">
        <Image className="h-[991px] w-[1600px] "  src={LoginImg}/>
    </div>
    <div className="w-full flex flex-col items-center mx-auto">
      <div className="mt-[138px]">
        <h6 className="text-[#002B48] text-[32px] leading-[39.62px]  text-center">Войти</h6>
        <p className="leading-[19px] mt-[12px] text-[#787F95] text-[16px] w-full">Заполните форму ниже, чтобы Войти</p>
      </div>
      <div className="mt-[100px]">
        <div className="max-w-[1300px] min-w-[532px]">
          <Input  fill="#00B3A8" icon={Icons.CheckMarkRounded400} placeholder={"Login"}/>
        </div>
        <div className="mt-[16px]">
           <Input icon={Icons.Lock400} type="password" placeholder={"Login"}/>
            <label className="text-[#787F95] text-[12px]">Количество символов в вашем пароле должно быть не менее 8</label>
        </div>
       <div>
        <button className="w-full bg-[#00B3A8] h-[54px] rounded-[5px] text-[18px] leading-[22px] text-white mt-[208px]">Вход</button>
        <h4 className="text-[#787F95] text-center mt-[16px]">Нет аккаунта? <span className="text-[#00B3A8]">Зарегистрироваться</span></h4>
       </div>
      </div>
    </div>
  </div>;
}

export default Login;
