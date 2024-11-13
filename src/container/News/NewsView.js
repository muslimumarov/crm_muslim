import React from 'react'

function NewsView() {

    const data = [
        {
            title: "Lorem ipsum dolor",
            descriptions: "Lorem ipsum dolor sit amet consectetur. Augue ipsum blandit nullam justo gravida vitae vulputate nisi condimentum. Diam ultrices est ac nunc facilisis lectus malesuada nec. "
        },{
            title: "Lorem ipsum dolor",
            descriptions: "Lorem ipsum dolor sit amet consectetur. Augue ipsum blandit nullam justo gravida vitae vulputate nisi condimentum. Diam ultrices est ac nunc facilisis lectus malesuada nec. "
        },{
            title: "Lorem ipsum dolor",
            descriptions: "Lorem ipsum dolor sit amet consectetur. Augue ipsum blandit nullam justo gravida vitae vulputate nisi condimentum. Diam ultrices est ac nunc facilisis lectus malesuada nec. "
        },{
            title: "Lorem ipsum dolor",
            descriptions: "Lorem ipsum dolor sit amet consectetur. Augue ipsum blandit nullam justo gravida vitae vulputate nisi condimentum. Diam ultrices est ac nunc facilisis lectus malesuada nec. "
        },{
            title: "Lorem ipsum dolor",
            descriptions: "Lorem ipsum dolor sit amet consectetur. Augue ipsum blandit nullam justo gravida vitae vulputate nisi condimentum. Diam ultrices est ac nunc facilisis lectus malesuada nec. "
        },{
            title: "Lorem ipsum dolor",
            descriptions: "Lorem ipsum dolor sit amet consectetur. Augue ipsum blandit nullam justo gravida vitae vulputate nisi condimentum. Diam ultrices est ac nunc facilisis lectus malesuada nec. "
        },
    ]


  return (
    <div className='container mx-auto'>
        <div className='mt-[23px] flex items-center justify-between'>
                <div><h4 className='text-[26px] text-[#002B48] leading-[39px]'>Yangiliklar</h4></div>
                <button className='w-[186px] h-[49px] bg-[#00B3A8] rounded-[5px]'><h3 className='text-[#FFFFFF] text-[14px] leading-[21px]'>Yangilik qo’shish</h3></button>
        </div>
        <div className='grid grid-cols-3 gap-[20px] mb-[50px]'>
            {data.map((item, index) => (
                <div key={index} className='mt-[40px] container mx-auto  cursor-pointer'>
                <div>
                    <div className='bg-[#D9D9D9] w-full h-[200px] rounded-[16px]'></div>
                </div>
                <h4 className='text-[20px] leading-[30px] mt-[20px]'>{item.title}</h4>
                <p className='text-[16px] leading-[24px] w-full mt-[12px]'>{item.descriptions}</p>
            </div>
            ))}
        </div>
    </div>
  )
}

export default NewsView