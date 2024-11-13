import { Icons } from '#/icon/icons';
import CustomScroll from '@/ui/CustomScroll';
import Pagination from '@/ui/Pagination';
import Link from 'next/link'
import React, {useState , useRef, useEffect} from 'react'
import ScrollBooster from "scrollbooster";
function GroupsViewTable() {

      const scrollRef = useRef(null);
    
      useEffect(() => {
        const scrollContent = scrollRef.current?.querySelector(".scroll-content");
    
        if (scrollRef.current && scrollContent) {
          const sb = new ScrollBooster({
            viewport: scrollRef.current,
            content: scrollContent,
            direction: "horizontal",
            scrollMode: "transform",
            emulateScroll: true,
          });
    
          return () => {
            if (sb) {
              sb.destroy();
            }
          };
        }
      }, []);


  return (
    <div className='container mx-auto mt-[23px] relative min-h-screen'>
      <div className='flex gap-[30px] absolute right-[230px] top-3'>
           <div className='w-[35px] h-[35px] '> <Icons.ExcelIcon/></div>
            <div className='w-[35px] h-[35px] '><Icons.Arrow800/></div>
            <div className='w-[30px] p-1 flex items-center justify-center h-[30px] bg-white rounded-full'><Icons.Filter400/></div>
        </div>
    <div className='flex items-center justify-between'>
        <h4 className='text-[26px] text-[#002B48] leading-[39px]'>Guruhlar</h4>
        
        <Link href={"/groups/add"}>
            <button className='w-[186px] h-[49px] bg-[#00B3A8] rounded-[5px] Poppins-SemiBold leading-[21px] text-[14px] text-white'>O’quvchi qo’shish</button>
        </Link>
    </div>

    <div
      ref={scrollRef}
      className="relative mt-[30px] w-full overflow-hidden bg-gray-100 pr-12"
    >
      <div className="scroll-content container">
        <table className="rounded-t-lg bg-white  container min-w-[2279px]  table-fixed">
          <thead className="bg-[#EEF0F4]">
            <tr>
              {tableHead.map((item, index) => (
                <th key={index} className=" w-[230px] py-2">
                <p className="uppercase pr-16 pl-5 text-[14px] leading-[21px] w-[270px] text-left text-[#787F95]">
                    {item}
                </p>
              </th>
              ))}
              
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {data.map((item, index) => (
              <tr className="border-b" key={index}>
                <td className="py-3 pl-4">
                  <p className="text-[16px] leading-[20px] text-[#002B48]">
                    {item.name}
                  </p>
                </td>
                <td className="py-3 pl-16">
                  <p className="  text-[16px] leading-[20px] text-[#002B48]">
                    {item.department}
                  </p>
                </td>
                <td className="py-3 pl-9">
                  <p className=" w-[135px] text-[16px] leading-[20px] text-[#002B48]">
                    {item.workStatus}
                  </p>
                </td>
                <td className="py-3 pl-9">
                  <p className=" w-[135px] text-[16px] leading-[20px] text-[#002B48]">
                    {item.alerts}
                  </p>
                </td>
                <td className="pl-9 py-3">
                  <p className="ml-0 text-[16px] leading-[20px] text-[#002B48]">
                    {item.level}
                  </p>
                </td>
                <td className="pr-20 py-3">
                  <div className="ml-9 flex items-center">
                    <p className="text-[16px] leading-[20px] text-[#002B48]">
                      {item.salary}
                    </p>
                  </div>
                </td>
                <td className=" py-3">
                <div className="ml-9 flex items-center w-[108px] border-[#00C98D] border-[1px] bg-[#d8fff3] rounded-[100px] text-center p-1">
                    <p className="text-[16px] leading-[20px] text-[#00C98D] text-center ml-2">
                      {item.specialty}
                    </p>
                  </div>

                
                </td>
                
                <td className="py-3 ">
                <div className="ml-9 flex items-center w-[108px] border-[#FFD233] border-[1px] bg-[#fff6d7] rounded-[100px] text-center p-1">
                    <p className="text-[16px] leading-[20px] text-[#FFD233] text-center ml-2">
                      {item.specialty2}
                    </p>
                  </div>
                </td>
                <td className=" py-3">
                <div className="ml-9 flex items-center w-[108px] border-[#FF0000] border-[1px] bg-[#f3c3c3] rounded-[100px] text-center p-1">
                    <p className="text-[16px] leading-[20px] text-[#FF0000] text-center ml-2">
                      {item.specialty3}
                    </p>
                  </div>
                </td>
              
                <td className=" py-3 pl-9">
                  <p className=" text-[16px] leading-[20px]  text-center w-[101px]">
                    {item.statusBank2}
                  </p>
                </td>
                <td className=" py-3 pl-10">
                  <p className=" text-[16px] leading-[20px] text-center w-[101px]">
                    {item.statusBank3}
                  </p>
                </td>

                <td className=" py-3 pl-5">
                  <div className='w-[108px] h-[32px] border-[1px] rounded-[100px] flex items-center bg-[#e1faf3] justify-center border-[#00C98D] text-[#00C98D] text-[14px] leading-[21px]'>{item.statusBank4}</div>
                </td>
                <td className="rounded-br-lg  py-3 text-center pl-32">
                  <button className="text-back text-[24px] flex gap-4">. . .</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    
    <CustomScroll/>

    <Pagination totalPages={10}/>
   
</div>
  )
}

export default GroupsViewTable

const tableHead = [
  "guruh nomi",
  "o’quvchilar soni",
  "guruh o’qituvchisi",
  "guruh yo’nalishi",
  "boshlangan vaqt",
  "yopilish vaqt",
  "Guruhdan tushadigan umumiy tushum",
  "Guruhdan tushgan tushum",
  "Guruhdan hali tushmagan tushum",
  "guruh bosqichi",
  "Guruhga biriktirilgan xona ",
  "guruh holati",
  ""

] 

const data = [
    {
      name: "Junior web dizayn",
      department: "6",
      workStatus: "Pulatov Afzal",
      alerts: "Web dizayn", // 3 ta ogohlantirish
      level: "28.06.2024",
      salary: "28.10.2024",
      specialty: "10 000 000 ",
      specialty2: "7 000 000",
      specialty3: "3 000 000 ",
      statusBank2: "1-oy",
      statusBank3: "12",
      statusBank4: "Faol",
    },
    {
        name: "Junior web dizayn",
        department: "6",
        workStatus: "Pulatov Afzal",
        alerts: "Web dizayn", // 3 ta ogohlantirish
        level: "28.06.2024",
        salary: "28.10.2024",
        specialty: "10 000 000 ",
        specialty2: "7 000 000",
        specialty3: "3 000 000 ",
        statusBank2: "1-oy",
        statusBank3: "12",
        statusBank4: "Faol",
      },
      {
        name: "Junior web dizayn",
        department: "6",
        workStatus: "Pulatov Afzal",
        alerts: "Web dizayn", // 3 ta ogohlantirish
        level: "28.06.2024",
        salary: "28.10.2024",
        specialty: "10 000 000 ",
        specialty2: "7 000 000",
        specialty3: "3 000 000 ",
        statusBank2: "1-oy",
        statusBank3: "12",
        statusBank4: "Faol",
      },
  ];