import React from 'react'
import DonutChartWithStates from '@/ui/Diagramma'
import { useState } from 'react'
import YearlyStats from '../Dashboard/YearlyStats'
import StatistikaYearly from '@/ui/StatistikaYearly'
import { Icons } from '#/icon/icons'
function Payment() {
    const [total, setTotal] = useState(0)
    const [ isDiagramma, setDiagramma] = useState("windows")
  return (
    <div className='ml-[42px] mt-[23px]'>
        {/* <div>
            <h4 className='text-[#002B48] text-[26px] leading-[39px]'>To’lovlar</h4>
        </div>
       {isDiagramma === "windows" ? (
        <>
        <div className='relative container mx-auto'>
              <div className='flex items-center justify-center absolute top-[110px] right-[20px] z-50 gap-[20px]'>
                <div onClick={() => setDiagramma("windows")} className='w-[38px] h-[38px] bg-white  rounded-[29px] border-[1px] flex items-center justify-center cursor-pointer'><Icons.WindowsIcon className='w-[20px] h-[20px]'/></div>
                <div onClick={() => setDiagramma("table")} className='w-[38px] h-[38px] bg-white  rounded-[29px] border-[1px] flex items-center justify-center cursor-pointer'><Icons.Menu400 className='w-[20px] h-[20px]'/></div>
              </div>
              <div className='relative'>
                <DonutChartWithStates type={"tolov"}  onTotalChange={setTotal} />
              </div>
      </div>
        <StatistikaYearly type='tolov'/>
        </>
       ) : (
        <h1>A</h1>
       )} */}
    </div>
  )
}

export default Payment