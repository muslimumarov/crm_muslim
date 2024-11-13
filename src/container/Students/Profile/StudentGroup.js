import React from "react";

function StudentGroup() {
  const tableHeader = ["Guruh nomi", "O’quvchilar soni"];
  const data = [
    { group: "Junior web design", students: 6, teacher: "Afzal Pulatov" },
    { group: "Bu Men", students: 6, teacher: "Afzal Pulatov" },
    { group: "Chere", students: 6, teacher: "Afzal Pulatov" },
  ];

  return (
    <div className="mt-10">
      <div className="container mx-auto px-10">
        <div className="overflow-x-auto">
          {/* TABLE-HEAD */}
          <table className="container mx-auto rounded-t-lg bg-white">
            <thead className="bg-[#EEF0F4]">
              <tr>
                <th className="rounded-tl-lg py-[15px] pr-[30px]">
                  <input type="checkbox" />
                </th>
                {tableHeader.map((item, index) => {
                  return (
                    <th key={index}>
                      <h4 className="text-left text-[14px] uppercase text-[#787F95]">
                        {item}
                      </h4>
                    </th>
                  );
                })}
              </tr>
            </thead>

            {/* TABLE-BODY */}
            <tbody className="text-gray-700">
              <tr className="border-b-2">
                <td className="px-4 py-4">
                  <input type="checkbox" />
                </td>
                <td className="px-4 py-4">
                  <p className="text-[16px] leading-[20px] text-[#002B48]">
                    Junior web design
                  </p>
                </td>
                <td className="px-4 py-3">
                  <p className="text-[16px] leading-[20px] text-[#002B48]">6</p>
                </td>
                <td className="px-4 py-3"></td>
                <td className="px-4 py-3"></td>
                <td className="rounded-br-lg px-4 py-3 text-center">
                  <button className="text-[24px] text-[#C2C4CA]">...</button>
                </td>
              </tr>
              <tr className="border-b-2">
                <td className="px-4 py-4">
                  <input type="checkbox" />
                </td>
                <td className="px-4 py-3">
                  <p className="text-[16px] leading-[20px] text-[#002B48]">
                    Bu men
                  </p>
                </td>
                <td className="px-4 py-3">
                  <p className="text-[16px] leading-[20px] text-[#002B48]">6</p>
                </td>
                <td className="px-4 py-3"></td>
                <td className="px-4 py-3"></td>
                <td className="rounded-br-lg px-4 py-3 text-center">
                  <button className="text-[24px] text-[#C2C4CA]">...</button>
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-4">
                  <input type="checkbox" />
                </td>
                <td className="px-4 py-3">
                  <p className="text-[16px] leading-[20px] text-[#002B48]">
                    Bu men
                  </p>
                </td>
                <td className="px-4 py-3">
                  <p className="text-[16px] leading-[20px] text-[#002B48]">6</p>
                </td>
                <td className="px-4 py-3"></td>
                <td className="px-4 py-3"></td>
                <td className="rounded-br-lg px-4 py-3 text-center">
                  <button className="text-[24px] text-[#C2C4CA]">...</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* QO'SHISH BUTTON */}
        <div className="container mb-[20px] mt-[61px] flex items-center justify-end">
          <button className="h-[54px] w-[206px] rounded-[5px] bg-[#00B3A8]">
            <h4 className="text-[16px] leading-[24px] text-white">Qo’shish</h4>
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudentGroup;
