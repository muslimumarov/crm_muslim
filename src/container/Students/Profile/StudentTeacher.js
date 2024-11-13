import React from "react";
import { Icons } from "#/icon/icons";

function StudentTeacher() {
  const data = [
    {
      name: "Pulotov Afzal G'ulomjon o'g'li",
      number: "+998 99 555 55 55",
      number2: "+998 99 555 55 55",
      workBrain: "Web dizayner",
      level: "Senior",
      salary: "10 000 000 UZS",
      specialty: "Web Dizayner",
    },
    {
      name: "Pulotov Afzal G'ulomjon o'g'li",
      number: "+998 99 555 55 55",
      number2: "+998 99 555 55 55",
      workBrain: "Web dizayner",
      level: "Senior",
      salary: "10 000 000 UZS",
      specialty: "Web Dizayner",
    },
    {
      name: "Pulotov Afzal G'ulomjon o'g'li",
      number: "+998 99 555 55 55",
      number2: "+998 99 555 55 55",
      workBrain: "Web dizayner",
      level: "Senior",
      salary: "10 000 000 UZS",
      specialty: "Web Dizayner",
    },
    {
      name: "Pulotov Afzal G'ulomjon o'g'li",
      number: "+998 99 555 55 55",
      number2: "+998 99 555 55 55",
      workBrain: "Web dizayner",
      level: "Senior",
      salary: "10 000 000 UZS",
      specialty: "Web Dizayner",
    },
    {
      name: "Pulotov Afzal G'ulomjon o'g'li",
      number: "+998 99 555 55 55",
      number2: "+998 99 555 55 55",
      workBrain: "Web dizayner",
      level: "Senior",
      salary: "10 000 000 UZS",
      specialty: "Web Dizayner",
    },
  ];

  return (
    <div className="mt-10">
      <div className="container mx-auto p-4 px-10 pr-12">
        <div className="scroll-content">
          {" "}
          {/* Gorizontal skroll uchun */}
          <table className="container mx-auto rounded-t-lg bg-white">
            <thead className="bg-[#EEF0F4]">
              <tr>
                <th className="rounded-tl-lg py-5">
                  <input type="checkbox" />
                </th>
                <th className="">
                  <p className="text-[14px] leading-[21px] text-[#787F95]">
                    RASM
                  </p>
                </th>
                <th className="px-0 pr-16">
                  <p className="text-[14px] leading-[21px] text-[#787F95]">
                    F.I.SH
                  </p>
                </th>
                <th className="px-3 py-2">
                  <p className="text-[14px] leading-[21px] text-[#787F95]">
                    Telefon raqam
                  </p>
                </th>
                <th className="px-6 py-3">
                  <p className="text-[14px] leading-[21px] text-[#787F95]">
                    Qo’shimcha telefon raqam
                  </p>
                </th>
                <th className="px-5 py-3">
                  <p className="text-[14px] leading-[21px] text-[#787F95]">
                    Mutaxasisligi
                  </p>
                </th>
                <th className="px-5 py-3">
                  <p className="text-[14px] leading-[21px] text-[#787F95]"></p>
                </th>
                <th className="px-5 py-3">
                  <p className="text-[14px] leading-[21px] text-[#787F95]"></p>
                </th>
                <th className="rounded-tr-lg px-3 py-3 pr-5">
                  <p className="text-[14px] leading-[21px] text-[#787F95]"></p>
                </th>
                <th className="rounded-tr-lg px-4 py-3 pr-5">
                  <p className="text-[14px] leading-[21px] text-[#787F95]"></p>
                </th>
              </tr>
            </thead>
            <tbody className="pl-6 text-gray-700">
              {data.map((item, index) => (
                <tr className="border-b" key={index}>
                  <td className="px-3 py-6">
                    <input type="checkbox" />
                  </td>
                  <td>
                    <div className="ml-4 h-[50px] w-[50px] rounded-full bg-gray-300">
                      <Icons.Interns700 className="fill-[#EAECF1]" />
                    </div>
                  </td>
                  <td className="py-3">
                    <p className="ml-20 w-[135px] text-[16px] leading-[20px] text-[#002B48]">
                      {item.name}
                    </p>
                  </td>
                  <td className="px-7 py-3">
                    <p className="ml-0 text-[16px] leading-[20px] text-[#002B48]">
                      {item.number}
                    </p>
                  </td>
                  <td className="px-4 py-3">
                    <div className="ml-7 flex items-center">
                      <p className="text-[16px] leading-[20px] text-[#002B48]">
                        {item.number2}
                      </p>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="ml-5 flex items-center">
                      <p className="text-[16px] leading-[20px] text-[#002B48]">
                        {item.workBrain}
                      </p>
                    </div>
                  </td>
                  <td className="px-7 py-3">
                    <p className="ml-5 text-[16px] leading-[20px] text-[#002B48]"></p>
                  </td>
                  <td className="px-7 py-3">
                    <p className="ml-16 text-[16px] leading-[20px] text-[#002B48]"></p>
                  </td>
                  <td className="px-4 py-3">
                    <p className="ml-6 text-[16px] leading-[20px] text-[#002B48]"></p>
                  </td>
                  <td className="rounded-br-lg px-4 py-3 text-center">
                    <button className="h-[29px] w-[116px] rounded-[4px] bg-[#00B3A8] text-[14px] text-[#FFFFFF]">
                      Fikr qoldirish
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default StudentTeacher;
