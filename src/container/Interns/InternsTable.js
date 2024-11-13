import Link from "next/link";
import React from "react";
import { Icons } from "#/icon/icons";
import Pagination from "@/ui/Pagination";

const InternsTable = () => {
  const tableHead = [
    "Rasm",
    "F.I.SH",
    "Telefon raqam",
    "Qo’shimcha telefon raqam",
    "Tug’ilgan sanasi",
    "Tug’ilgan joyi",
    "Hozirgi yashash joyi",
    "Mutaxasisligi",
    "Pasport seria qarami",
    "foydalanuvchi roli",
    "Oylik maoshi",
    "Kim tomondan qo'shilgan",
    "Qachon qo'shilgan",
    "Guruhlari soni",
    "Ogohlantirish",
    "Premya",
    "Hodim darajasi",
    "O’quvchilari sonii",
    "Biritgan o’quvchilari soni",
  ];

  return (
    <div className="container relative mx-auto mt-[33px] min-h-screen">
      <div className="flex items-center justify-between">
        <h4 className="text-[26px] leading-[39px] text-[#002B48]">Hodimlar</h4>

        <div className="flex items-center gap-x-10">
          <div className="flex items-center gap-x-8">
            <button>
              <Icons.ExcelIcon className="w-9 fill-slate-500" />
            </button>
            <button>
              <Icons.Download700 className="w-9 fill-slate-500" />
            </button>
            <button className="w-10 rounded-full border-2 border-gray-200/60 bg-white p-2">
              <Icons.Filter400 className="fill-slate-500" />
            </button>
          </div>

          <Link href={"/interns/add"}>
            <button className="Poppins-SemiBold h-[49px] w-[186px] rounded-[5px] bg-[#00B3A8] text-[14px] leading-[21px] text-white">
              Hodim qo’shish
            </button>
          </Link>
        </div>
      </div>

      <div
        onChange={(e) => console.log(e)}
        className="table-wrapper mt-[30px] overflow-x-scroll bg-gray-100"
      >
        <table className="rounded-t-lg bg-white">
          <thead className="bg-[#EEF0F4]">
            <tr className="">
              <th className="rounded-tl-lg py-5 pl-5">
                <input type="checkbox" />
              </th>
              {tableHead.map((item, index) => {
                return (
                  <th key={index} className="py-4">
                    <h4 className="text-nowrap px-14 text-start text-[14px] uppercase text-slate-500">
                      {item}
                    </h4>
                  </th>
                );
              })}
              <th className="rounded-tr-lg"></th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {data.map((item, index) => (
              <tr className="border-b" key={index}>
                <td className="py-4 pl-5">
                  <div className="flex">
                    <input type="checkbox" />
                  </div>
                </td>
                {/* user-img */}
                <td className="px-10 pl-8">
                  <div className="flex aspect-square w-12 items-center justify-center rounded-full border-[3px] border-slate-200/60 bg-slate-200/70">
                    <Icons.User400 className="w-7 fill-slate-500" />
                  </div>
                </td>
                <td className="py-3 pl-14">
                  <Link href="interns/profile/1">
                    <p className="min-w-[140px] max-w-[200px] text-[16px] leading-[20px] text-[#002B48]">
                      {item.name}
                    </p>
                  </Link>
                </td>
                <td className="pl-12">
                  <p className="text-[16px] leading-[20px] text-[#002B48]">
                    {item.department}
                  </p>
                </td>
                <td className="pl-16">
                  <p className="w-[165px] text-[16px] leading-[20px] text-[#002B48]">
                    {item.workStatus}
                  </p>
                </td>
                <td className="pl-20">
                  <p className="w-[135px] text-[16px] leading-[20px] text-[#002B48]">
                    {item.alerts}
                  </p>
                </td>
                <td className="pl-12">
                  <p className="w-[135px] text-[16px] leading-[20px] text-[#002B48]">
                    {item.level}
                  </p>
                </td>
                <td className="pl-9">
                  <div className="ml-9 flex items-center">
                    <p className="w-[135px] text-[16px] leading-[20px] text-[#002B48]">
                      {item.salary}
                    </p>
                  </div>
                </td>
                <td className="pl-1">
                  <p className="ml-2 text-center text-[16px] leading-[20px]">
                    {item.specialty}
                  </p>
                </td>

                <td className="py-3">
                  <p className="ml-2 text-center text-[16px] leading-[20px]">
                    {item.specialty2}
                  </p>
                </td>
                <td className="py-3">
                  <p className="ml-2 text-center text-[16px] leading-[20px]">
                    {item.specialty3}
                  </p>
                </td>

                <td className="py-3 pl-14">
                  <p className="w-[101px] text-center text-[16px] leading-[20px]">
                    {item.statusBank2}
                  </p>
                </td>
                <td className="py-3 pl-24">
                  <p className="w-[101px] text-center text-[16px] leading-[20px]">
                    {item.statusBank3}
                  </p>
                </td>

                <td className="py-3 pl-24">{item.statusBank4}</td>
                <td className="py-3 pl-16">
                  <p className="w-[101px] text-center text-[16px] leading-[20px]">
                    {item.statusBank5}
                  </p>
                </td>
                <td className="cursor-pointer py-3 pl-14">
                  <p className="w-[60px] border-b border-[#ffd233] text-center text-[16px] leading-[20px] text-[#FFD233]">
                    {item.statusBank6}
                  </p>
                </td>
                <td className="py-3 pl-8">
                  <p className="w-[101px] text-center text-[16px] leading-[20px]">
                    {item.statusBank7}
                  </p>
                </td>
                <td className="py-3 pl-14">
                  <p className="w-[101px] text-center text-[16px] leading-[20px]">
                    {item.statusBank8}
                  </p>
                </td>
                <td className="py-3 pl-16">
                  <p className="w-[101px] text-center text-[16px] leading-[20px]">
                    {item.statusBank9}
                  </p>
                </td>
                <td className="py-3 pl-28">
                  <p className="w-[101px] text-center text-[16px] leading-[20px]">
                    {item.statusBank10}
                  </p>
                </td>
                <td className="rounded-br-lg py-3 text-center">
                  <button className="text-blue-500">...</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination totalPages={5} />
    </div>
  );
};

export default InternsTable;

const data = [
  {
    name: "Pulatov Afzal G’ulomjon o’g’li",
    department: "+998 99 555 55 55",
    workStatus: "+998 99 555 55 55",
    alerts: "20.02.2021", // 3 ta ogohlantirish
    level: "Toshkent viloyati Bekobod shahar",
    salary: "Toshkent shahar Yunusobod 7",
    specialty: "Web Dizayner ",
    specialty2: "AA1234567",
    specialty3: "Hodim",
    statusBank2: "10 000 000",
    statusBank3: "Direktor",
    statusBank4: "20.02.2021",
    statusBank5: "2",
    statusBank6: "Hayfsan ",
    statusBank7: "5 000 000 ",
    statusBank8: "Senior",
    statusBank9: "25",
    statusBank10: "48",
  },
  {
    name: "Pulatov Afzal G’ulomjon o’g’li",
    department: "+998 99 555 55 55",
    workStatus: "+998 99 555 55 55",
    alerts: "20.02.2021", // 3 ta ogohlantirish
    level: "Toshkent viloyati Bekobod shahar",
    salary: "Toshkent shahar Yunusobod 7",
    specialty: "Web Dizayner ",
    specialty2: "AA1234567",
    specialty3: "Hodim",
    statusBank2: "10 000 000",
    statusBank3: "Direktor",
    statusBank4: "20.02.2021",
    statusBank5: "2",
    statusBank6: "Hayfsan ",
    statusBank7: "5 000 000 ",
    statusBank8: "Senior",
    statusBank9: "25",
    statusBank10: "48",
  },
  {
    name: "Pulatov Afzal G’ulomjon o’g’li",
    department: "+998 99 555 55 55",
    workStatus: "+998 99 555 55 55",
    alerts: "20.02.2021", // 3 ta ogohlantirish
    level: "Toshkent viloyati Bekobod shahar",
    salary: "Toshkent shahar Yunusobod 7",
    specialty: "Web Dizayner ",
    specialty2: "AA1234567",
    specialty3: "Hodim",
    statusBank2: "10 000 000",
    statusBank3: "Direktor",
    statusBank4: "20.02.2021",
    statusBank5: "2",
    statusBank6: "Hayfsan ",
    statusBank7: "5 000 000 ",
    statusBank8: "Senior",
    statusBank9: "25",
    statusBank10: "48",
  },
  {
    name: "Pulatov Afzal G’ulomjon o’g’li",
    department: "+998 99 555 55 55",
    workStatus: "+998 99 555 55 55",
    alerts: "20.02.2021", // 3 ta ogohlantirish
    level: "Toshkent viloyati Bekobod shahar",
    salary: "Toshkent shahar Yunusobod 7",
    specialty: "Web Dizayner ",
    specialty2: "AA1234567",
    specialty3: "Hodim",
    statusBank2: "10 000 000",
    statusBank3: "Direktor",
    statusBank4: "20.02.2021",
    statusBank5: "2",
    statusBank6: "Hayfsan ",
    statusBank7: "5 000 000 ",
    statusBank8: "Senior",
    statusBank9: "25",
    statusBank10: "48",
  },
  {
    name: "Pulatov Afzal G’ulomjon o’g’li",
    department: "+998 99 555 55 55",
    workStatus: "+998 99 555 55 55",
    alerts: "20.02.2021", // 3 ta ogohlantirish
    level: "Toshkent viloyati Bekobod shahar",
    salary: "Toshkent shahar Yunusobod 7",
    specialty: "Web Dizayner ",
    specialty2: "AA1234567",
    specialty3: "Hodim",
    statusBank2: "10 000 000",
    statusBank3: "Direktor",
    statusBank4: "20.02.2021",
    statusBank5: "2",
    statusBank6: "Hayfsan ",
    statusBank7: "5 000 000 ",
    statusBank8: "Senior",
    statusBank9: "25",
    statusBank10: "48",
  },
  {
    name: "Pulatov Afzal G’ulomjon o’g’li",
    department: "+998 99 555 55 55",
    workStatus: "+998 99 555 55 55",
    alerts: "20.02.2021", // 3 ta ogohlantirish
    level: "Toshkent viloyati Bekobod shahar",
    salary: "Toshkent shahar Yunusobod 7",
    specialty: "Web Dizayner ",
    specialty2: "AA1234567",
    specialty3: "Hodim",
    statusBank2: "10 000 000",
    statusBank3: "Direktor",
    statusBank4: "20.02.2021",
    statusBank5: "2",
    statusBank6: "Hayfsan ",
    statusBank7: "5 000 000 ",
    statusBank8: "Senior",
    statusBank9: "25",
    statusBank10: "48",
  },
  {
    name: "Pulatov Afzal G’ulomjon o’g’li",
    department: "+998 99 555 55 55",
    workStatus: "+998 99 555 55 55",
    alerts: "20.02.2021", // 3 ta ogohlantirish
    level: "Toshkent viloyati Bekobod shahar",
    salary: "Toshkent shahar Yunusobod 7",
    specialty: "Web Dizayner ",
    specialty2: "AA1234567",
    specialty3: "Hodim",
    statusBank2: "10 000 000",
    statusBank3: "Direktor",
    statusBank4: "20.02.2021",
    statusBank5: "2",
    statusBank6: "Hayfsan ",
    statusBank7: "5 000 000 ",
    statusBank8: "Senior",
    statusBank9: "25",
    statusBank10: "48",
  },
  {
    name: "Pulatov Afzal G’ulomjon o’g’li",
    department: "+998 99 555 55 55",
    workStatus: "+998 99 555 55 55",
    alerts: "20.02.2021", // 3 ta ogohlantirish
    level: "Toshkent viloyati Bekobod shahar",
    salary: "Toshkent shahar Yunusobod 7",
    specialty: "Web Dizayner ",
    specialty2: "AA1234567",
    specialty3: "Hodim",
    statusBank2: "10 000 000",
    statusBank3: "Direktor",
    statusBank4: "20.02.2021",
    statusBank5: "2",
    statusBank6: "Hayfsan ",
    statusBank7: "5 000 000 ",
    statusBank8: "Senior",
    statusBank9: "25",
    statusBank10: "48",
  },
];
