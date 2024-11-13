import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Icons } from "#/icon/icons";
import Pagination from "@/ui/Pagination";
import { Archieve } from "../../../pages/api/data";
import Image from "next/image";

const ArchieveTable = () => {
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
    "Foydalanuvchi roli",
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

  const [data, setData] = useState(null);

  useEffect(() => {
    setData(Archieve.getArchieveTable(0, 10));
  }, []);

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

          <Link href={"/employees/add"}>
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
          {/* TABLE HEAD */}
          <thead className="bg-[#EEF0F4]">
            <tr>
              {tableHead.map((item, index) => {
                return (
                  <th key={index} className="py-4 pr-10 first:pl-8">
                    <h4 className="w-full text-nowrap pr-10 text-start text-[14px] uppercase text-slate-500">
                      {item}
                    </h4>
                  </th>
                );
              })}
              <th></th>
            </tr>
          </thead>

          {/* TABLE BODY */}
          <tbody className="text-gray-700">
            {data?.map((item, index) => (
              <tr className="border-b" key={index}>
                {/* image */}
                <td className="pl-8 pr-10">
                  <div className="relative aspect-square w-12 overflow-hidden rounded-full bg-slate-200/70">
                    <div className="flex h-full w-full items-center justify-center rounded-full border-[3px] border-slate-200/60">
                      <Icons.User400 className="w-7 fill-slate-500" />
                    </div>
                    {item?.image && (
                      <Image
                        src={item?.image}
                        height={1000}
                        width={1000}
                        alt=""
                        className="absolute inset-0 h-full w-full"
                      />
                    )}
                  </div>
                </td>

                {/* full_name */}
                <td className="py-3 pr-10">
                  <Link href={`employees/profile/${item?.id}`}>
                    <p className="min-w-[140px] max-w-[200px] text-base leading-[1.4] text-sky-950">
                      {item?.full_name}
                    </p>
                  </Link>
                </td>

                {/* phone_number */}
                <td className="py-3 pr-10">
                  <p className="text-nowrap text-base leading-[1.4] text-sky-950">
                    {item?.phone_number}
                  </p>
                </td>

                {/* secondary_phone_number */}
                <td className="py-3 pr-10">
                  <p className="text-nowrap text-base leading-[1.4] text-sky-950">
                    {item?.secondary_phone_number}
                  </p>
                </td>

                {/* dob */}
                <td className="py-3 pr-10">
                  <p className="text-nowrap text-base leading-[1.4] text-sky-950">
                    {getDottedDateString(item?.dob)}
                  </p>
                </td>

                {/* place_of_birth */}
                <td className="py-3 pr-10">
                  <p className="min-w-[141px] max-w-[200px] text-base leading-[1.4] text-sky-950">
                    {item?.place_of_birth}
                  </p>
                </td>

                {/* address */}
                <td className="py-3 pr-10">
                  <p className="min-w-[141px] max-w-[200px] text-base leading-[1.4] text-sky-950">
                    {item?.address}
                  </p>
                </td>

                {/* specialization */}
                <td className="py-3 pr-10">
                  <p className="text-base leading-[1.4] text-sky-950">
                    {item?.specialization}
                  </p>
                </td>

                {/* passport_series */}
                <td className="py-3 pr-10">
                  <p className="text-nowrap text-base leading-[1.4] text-sky-950">
                    {item?.passport_series}
                  </p>
                </td>

                {/* role */}
                <td className="py-3 pr-10">
                  <p className="text-base leading-[1.4] text-sky-950">
                    {item?.role}
                  </p>
                </td>

                {/* salary */}
                <td className="py-3 pr-10">
                  <p className="text-base leading-[1.4] text-sky-950">
                    {Intl.NumberFormat("fe-FE").format(item?.salary)}
                  </p>
                </td>

                {/* created_by */}
                <td className="py-3 pr-10">
                  <p className="text-base leading-[1.4] text-sky-950">
                    {item?.created_by}
                  </p>
                </td>

                {/* created_at */}
                <td className="py-3 pr-10">
                  <p className="text-nowrap text-base leading-[1.4] text-sky-950">
                    {getDottedDateString(item?.created_at)}
                  </p>
                </td>

                {/* group_count */}
                <td className="py-3 pr-10">
                  <p className="text-base leading-[1.4] text-sky-950">
                    {item?.group_count}
                  </p>
                </td>

                {/* warning */}
                <td className="py-3 pr-10">
                  <p className="text-base leading-[1.4] text-yellow-400 underline">
                    {item?.warning}
                  </p>
                </td>

                {/* bonus */}
                <td className="py-3 pr-10">
                  <p className="text-base leading-[1.4] text-sky-950">
                    {Intl.NumberFormat("fe-FE").format(item?.bonus)}
                  </p>
                </td>

                {/* level */}
                <td className="py-3 pr-10">
                  <p className="text-base leading-[1.4] text-sky-950">
                    {item?.level}
                  </p>
                </td>

                {/* students_count */}
                <td className="py-3 pr-10">
                  <p className="text-base leading-[1.4] text-sky-950">
                    {item?.students_count}
                  </p>
                </td>

                {/* graduates_count */}
                <td className="py-3 pr-10">
                  <p className="text-base leading-[1.4] text-sky-950">
                    {item?.graduates_count}
                  </p>
                </td>

                {/* OPTIONS_BTN */}
                <td className="relative pr-5">
                  <button className="option">
                    <Icons.Options400 className="w-6 stroke-gray-400" />
                  </button>
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

export default ArchieveTable;

function getDottedDateString(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${day}.${month}.${year}`;
}
