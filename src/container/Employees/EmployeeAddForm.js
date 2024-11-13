import { Icons } from "#/icon/icons";
import Input from "@/ui/Input";
import React, { useState } from "react";

function EmployeeAddForm() {
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(URL.createObjectURL(file)); // Faylni preview qilish uchun
    }
  };

  return (
    <div className="py-5">
      <div className="container mx-auto px-10">
        <div>
          <div>
            <h4 className="text-3xl text-sky-950">Hodim qo’shish</h4>
          </div>
          <button className="relative z-0 mt-8 aspect-square w-[90px] rounded-full border border-gray-300 bg-gray-200 p-5">
            <Icons.User400 className="fill-slate-500" />
            <div className="absolute bottom-0 right-0 aspect-square w-8 rounded-full bg-white p-2 shadow-[0px_8px_10px_0px_#5A779514]">
              <Icons.Edit400 className="fill-sky-950" />
            </div>
          </button>
        </div>

        <div className="mt-8">
          {/* ISM FAMILIYASI INPUT*/}
          <div className="mb-4 flex items-center gap-10">
            <Input placeholder={"Ismi"} icon={Icons.User400} type={"text"} />
            <Input
              placeholder={"Familiyasi"}
              icon={Icons.User400}
              type={"text"}
            />
          </div>

          {/* OTASI VA KALENDAR JOY INPUT*/}
          <div className="flex items-center gap-10">
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
          <div className="mt-4 flex items-center gap-10">
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
          <div className="mt-4 flex items-center gap-10">
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
          <div className="mt-4 flex items-center gap-10">
            <Input
              placeholder={"Pasport seriyasi"}
              icon={Icons.IdCard400}
              type={"text"}
            />
            <Input inptSelect="yes" icon={Icons.Menu400} />
          </div>

          {/*Farzandlar soni INPUT */}
          <div className="mt-4 flex items-center gap-10">
            <Input
              inptSelect="yes"
              optionsText={["Farzandlari soni", "6", "7", "1"]}
              icon={Icons.Menu400}
            />
          </div>
        </div>

        {/** INPUT 2 */}
        <div className="mt-10">
          <div>
            <h4 className="text-xl leading-[33px] text-sky-950">
              Ish haqidagi ma’lumotlar
            </h4>
          </div>
          <div className="mt-10">
            {/* MUTAXASISLIK VA ROLI INPUT*/}
            <div className="mt-4 flex items-center gap-10">
              <Input
                inptSelect="yes"
                icon={Icons.Menu400}
                optionsText={["Mutaxassislik"]}
              />
              <Input
                inptSelect="yes"
                icon={Icons.Menu400}
                optionsText={["Foydalanuvchi roli"]}
              />
            </div>

            {/* Oylik VA Is bosh vaqt JOY INPUT*/}
            <div className="mt-4 flex items-center gap-10">
              <Input
                placeholder={"Oylik maoshi"}
                icon={Icons.Menu400}
                type={"text"}
              />
              <Input
                inptSelect="yes"
                icon={Icons.Menu400}
                optionsText={["Ish boshlagan vaqti"]}
              />
            </div>

            {/* GURUH BRIK VA ISH GRAFIG INPUT*/}
            <div className="mt-4 flex items-center gap-10">
              <Input
                inptSelect="yes"
                icon={Icons.Menu400}
                optionsText={["Guruhga biriktirish"]}
              />
              <Input
                inptSelect="yes"
                icon={Icons.Menu400}
                optionsText={["Ish grafigi"]}
              />
            </div>

            {/* HODIM DARAJASI joyi INPUT*/}
            <div className="mt-4 flex items-center gap-10">
              <Input
                inptSelect="yes"
                icon={Icons.Menu400}
                optionsText={["Hodim darajasi"]}
              />
            </div>
          </div>
        </div>

        <div className="mt-14 flex items-center gap-10 space-x-4">
          {/* Birinchi yuklash katakchasi */}
          <label
            htmlFor="file-upload"
            className="w-full max-w-[366px] cursor-pointer rounded-lg border-2 border-dashed border-teal-400 bg-teal-50 p-7"
          >
            <input
              id="file-upload"
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />
            <div className="flex flex-col items-center">
              <Icons.FileUpload700 className="w-12 fill-primary" />
              <p className="mt-2 font-semibold text-primary">Fayl yuklash</p>
              <p className="mt-1 text-sm text-primary">
                Yuklayotgan fayl o'lchami 15Mb gacha
              </p>
            </div>
          </label>

          {/* Ikkinchi yuklash katakchasi */}
          <label
            htmlFor="file-upload"
            className="w-full max-w-[366px] cursor-pointer rounded-lg border-2 border-dashed border-teal-400 bg-teal-50 p-7"
          >
            <input
              id="file-upload"
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />
            <div className="flex flex-col items-center">
              <Icons.FileUpload700 className="w-12 fill-primary" />
              <p className="mt-2 font-semibold text-primary">Fayl yuklash</p>
              <p className="mt-1 text-sm text-primary">
                Yuklayotgan fayl o'lchami 15Mb gacha
              </p>
            </div>
          </label>

          {/* Fayl yuklagandan so'ng preview */}
          {selectedFile && (
            <div className="ml-4">
              <p className="text-teal-600">Yuklangan rasm:</p>
              <img
                src={selectedFile}
                alt="Yuklangan rasm"
                className="mt-2 h-64 w-64 object-contain"
              />
            </div>
          )}
        </div>

        <div className="mt-10">
          <div>
            <h4 className="text-xl leading-[33px] text-sky-950">
              Login va parol
            </h4>
          </div>
          <div className="mt-9 flex items-center gap-10">
            <Input placeholder={"Login"} icon={Icons.User400} type={"text"} />
            <Input
              placeholder={"Parol"}
              icon={Icons.Lock400}
              type={"password"}
            />
          </div>
        </div>

        <div className="mb-20 mt-16 flex items-center justify-end">
          <button className="h-[54px] w-[206px] rounded-[5px] border-2 border-[#00B3A8]">
            <h2 className="text-base leading-[19px] text-[#00B3A8]">
              Удалить Данные
            </h2>
          </button>
          <button className="ml-5 h-[54px] w-[206px] rounded-[5px] bg-primary">
            <h2 className="text-center text-base leading-[19px] text-[#FFFFFF]">
              Сохранить
            </h2>
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmployeeAddForm;
