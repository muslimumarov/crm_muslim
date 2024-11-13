import React from "react";

function EmployeeGroups() {
  return (
    <div className="py-10">
      <div className="container mx-auto px-10">
        <div>
          <table className="container rounded-t-lg bg-white">
            <thead className="bg-[#EEF0F4]">
              <tr className="rounded-t-lg py-6">
                <th className="rounded-tl-lg py-[15px] pr-8">
                  <input type="checkbox" />
                </th>
                <th>
                  <h4 className="text-left text-base uppercase text-[#787F95]">
                    Guruh nomi
                  </h4>
                </th>
                <th>
                  <h4 className="pr-32 text-left text-base uppercase text-[#787F95]">
                    O’quvchilar soni
                  </h4>
                </th>
                <th></th>
                <th></th>
                <th className="rounded-tr-lg"></th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b-2">
                <td className="px-4 py-4">
                  <input type="checkbox" />
                </td>
                <td className="px-4 py-4">
                  <p className="text-base leading-[20px] text-[#002B48]">
                    Junior web design
                  </p>
                </td>
                <td className="px-4 py-3">
                  <p className="text-base leading-[20px] text-[#002B48]">6</p>
                </td>
                <td className="px-4 py-3"></td>
                <td className="px-4 py-3"></td>
                <td className="rounded-br-lg px-4 py-3 text-center">
                  <button className="text-2xl text-[#C2C4CA]">...</button>
                </td>
              </tr>
              <tr className="border-b-2">
                <td className="px-4 py-4">
                  <input type="checkbox" />
                </td>
                <td className="px-4 py-3">
                  <p className="text-base leading-[20px] text-[#002B48]">
                    Bu men
                  </p>
                </td>
                <td className="px-4 py-3">
                  <p className="text-base leading-[20px] text-[#002B48]">6</p>
                </td>
                <td className="px-4 py-3"></td>
                <td className="px-4 py-3"></td>
                <td className="rounded-br-lg px-4 py-3 text-center">
                  <button className="text-2xl text-[#C2C4CA]">...</button>
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-4">
                  <input type="checkbox" />
                </td>
                <td className="px-4 py-3">
                  <p className="text-base leading-[20px] text-[#002B48]">
                    Bu men
                  </p>
                </td>
                <td className="px-4 py-3">
                  <p className="text-base leading-[20px] text-[#002B48]">6</p>
                </td>
                <td className="px-4 py-3"></td>
                <td className="px-4 py-3"></td>
                <td className="rounded-br-lg px-4 py-3 text-center">
                  <button className="text-2xl text-[#C2C4CA]">...</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="container mb-5 mt-16 flex items-center justify-end">
          <button className="h-[54px] w-[206px] rounded-[5px] bg-primary">
            <h4 className="text-base leading-[24px] text-white">Qo’shish</h4>
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmployeeGroups;