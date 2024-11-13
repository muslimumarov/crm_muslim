import React, { useState } from "react";
import Input from "@/ui/Input";
import { Icons } from "#/icon/icons";

function InternAddForm() {
  const [selectedFile, setSelectedFile] = useState(null);
  
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(URL.createObjectURL(file)); // Faylni preview qilish uchun
    }
  };

  return (
    <div>
      <div className="z-0">
        <div>
          <div>
            <h4 className="pl-[42px] pt-[22px] text-[26px] leading-[39px] text-[#002B48]">
              Amaliyotchi qo’shish
            </h4>
          </div>
          <div className="relative z-0 pl-[42px] pt-[32px]">
            <Icons.Interns700 className="h-[90px] w-[90px] fill-[#C2C4CA]" />
            <div className="absolute left-[100px] top-[96px] flex h-[31px] w-[31px] cursor-pointer items-center justify-center rounded-full bg-[#FFFFFF]">
              <Icons.Edit400 className="h-[16px] w-[16px] fill-[#002B48]" />
            </div>
          </div>
        </div>

        <div className="pl-[42px] pt-[32px]">
          {/* ISM FAMILIYASI INPUT*/}
          <div className="mb-[16px] flex items-center gap-[40px]">
            <Input placeholder={"Ismi"} icon={Icons.User400} type={"text"} />
            <Input
              placeholder={"Familiyasi"}
              icon={Icons.User400}
              type={"text"}
            />
          </div>

          {/* OTASI VA KALENDAR JOY INPUT*/}
          <div className="flex items-center gap-[40px]">
            <Input
              placeholder={"Otasini ismi"}
              icon={Icons.User400}
              type={"text"}
            />
            <Input
              placeholder={"Tug'ilgan sanasi"}
              icon={Icons.Calendar500}
              type={"text"}
            />
          </div>

          {/* TELEFON RAQAM INPUT*/}
          <div className="mt-[16px] flex items-center gap-[40px]">
            <Input
              phone="yes"
              placeholder={"( _ _ ) _ _ _  _ _  _ _"}
              icon={Icons.Phone400}
              type={"text"}
              mask="( 99 ) 999-99-99"
            />
            <Input
              phone="yes"
              placeholder={"( _ _ ) _ _ _  _ _  _ _"}
              icon={Icons.Phone400}
              type={"text"}
              mask="( 99 ) 999-99-99"
            />
          </div>

          {/* Tugilgan Va Yashash joyi INPUT*/}
          <div className="mt-[16px] flex items-center gap-[40px]">
            <Input
              placeholder={"Tug'ilgan joyi"}
              icon={Icons.LocationPin400}
              type={"text"}
            />
            <Input
              placeholder={"Doimiy yashash joyi"}
              icon={Icons.LocationPin400}
              type={"text"}
            />
          </div>

          {/* Pasport va Jinsi INPUT */}
          <div className="mt-[16px] flex items-center gap-[40px]">
            <Input
              placeholder={"Passport seriya va raqami"}
              icon={Icons.IdCard400}
              type={"text"}
            />
          </div>

          {/*Farzandlar soni INPUT */}
        </div>

        {/** INPUT 2 */}
        <div className="mt-[42px] pl-[42px]">
          <div>
            <h4 className="text-[22px] leading-[33px] text-[#002B48]">
              Ish haqidagi ma’lumotlar
            </h4>
          </div>
          <div className="mt-[40px]">
            {/* MUTAXASISLIK VA ROLI INPUT*/}
            <div className="mt-[16px] flex items-center gap-[40px]">
              <Input icon={Icons.IdCard400} placeholder={"Mutaxassislik"} />
              <Input
                icon={Icons.IdCard400}
                placeholder={"Guruhga biriktirish"}
              />
            </div>

            {/* Oylik VA Is bosh vaqt JOY INPUT*/}
            <div className="mt-[16px] flex items-center gap-[40px]">
              <Input
                placeholder={"Oylik maoshi"}
                icon={Icons.IdCard400}
                type={"text"}
              />
            </div>
          </div>
        </div>

        <div className="ml-[42px] mt-[39px]">
          <div>
            <h4 className="text-[22px] leading-[33px] text-[#002B48]">
              Login va parol
            </h4>
          </div>
          <div className="mt-[36px] flex items-center gap-[40px]">
            <Input placeholder={"Login"} icon={Icons.User400} type={"text"} />
            <Input
              placeholder={"Parol"}
              icon={Icons.Lock400}
              type={"password"}
            />
          </div>
        </div>

        <div className="mb-[84px] mt-[60px] flex items-center justify-end">
          <div className="mr-[662px]">
            <button className="h-[54px] w-[206px] rounded-[5px] border-2 border-[#00B3A8]">
              <h2 className="text-[16px] leading-[19px] text-[#00B3A8]">
                Удалить Данные
              </h2>
            </button>
            <button className="ml-[20px] h-[54px] w-[206px] rounded-[5px] bg-[#00B3A8]">
              <h2 className="text-center text-[16px] leading-[19px] text-[#FFFFFF]">
                Сохранить
              </h2>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InternAddForm;
