import React from 'react'
import { Icons } from '#/icon/icons'

function QueriesView() {
  return (
    <div className='container mx-auto'>
        
        <div className='mt-[23px] flex items-center justify-between'>
                <div><h4 className='text-[26px] text-[#002B48] leading-[39px]'>So’rovnomalar</h4></div>
                <button className='w-[186px] h-[49px] bg-[#00B3A8] rounded-[5px]'><h3 className='text-[#FFFFFF] text-[14px] leading-[21px]'>So’rovnoma qo’shish</h3></button>
        </div>
        <div className=''>
            <div  className='mt-[40px] container mx-auto  cursor-pointer mb-[40px]'>
                    <div className='relative'>
                        <div className='bg-[#D9D9D9] w-full h-[300px] rounded-[16px]'></div>
                        <div className='absolute w-[22px] h-[22px] top-[20px] right-[20px]'><Icons.Pencil700 className="fill-[#979797]"/></div>
                    </div>
                    <p className='text-[16px] leading-[24px] w-full mt-[30px]'>Lorem ipsum dolor sit amet consectetur. Velit integer hac cras dictum vitae proin tellus. Sed dignissim purus posuere volutpat massa vel venenatis venenatis. Porttitor purus consequat egestas sit. Laoreet elit non tristique elit augue ipsum lacus. Senectus elementum quis turpis elit turpis dolor. Ipsum cras velit adipiscing nullam mi tincidunt tincidunt faucibus. Urna interdum imperdiet cras pretium vel adipiscing eu. Aliquam in est placerat neque euismod viverra ac leo. Duis placerat urna eget massa amet.</p>
            </div>
        </div>
        <div className='mt-[60px]'>
            <h4 className='text-[#002B48] text-[18px] leading-[27px]'>Lorem ipsum dolor sit amet</h4>
            <div className='h-full mt-[20px] w-[300px] bg-[#FFFFFF] rounded-[6px] p-3 mb-[40px] overflow-y-visible'>
                <div className='flex items-center p-[8px] mt-[8px] ml-[8px]'>
                    <input type='radio'/>
                    <p className='text-[18px] leading-[27px] text-[#787F95] ml-[10px]'>Lorem ipsum dolor sit</p>
                </div>
                <div className='flex items-center  p-[8px] mt-[8px] ml-[8px]'>
                    <input type='radio'/>
                    <p className='text-[18px] leading-[27px] text-[#787F95] ml-[10px]'>Lorem ipsum dolor sit</p>
                </div>
                <div className='flex items-center  p-[8px] mt-[8px] ml-[8px]'>
                    <input type='radio'/>
                    <p className='text-[18px] leading-[27px] text-[#787F95] ml-[10px]'>Lorem ipsum dolor sit</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default QueriesView