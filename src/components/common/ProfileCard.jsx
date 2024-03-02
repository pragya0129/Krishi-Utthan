import React from 'react'

const ProfileCard = ({name, profile, year,tech, image}) => {
  return (
    <div className='flex gap-12 h-[350px]  justify-center shadow-lg shadow-blue-400 rounded-lg bg-[#152d45a2] mb-14
    '>
        <div className='flex  gap-7  justify-center items-center w-[400px] '>
            {/* Left section */}
            <div className=' h-[12rem] w-[12rem] object-contain rounded-full overflow-y-hidden ml-4'>

                {/* Image */}
                <img src={image}/>
            </div>

            {/* Right section */}
            <div className='mr-3'>
                <p className='text-[20px] font-bold text-yellow-500'> <span className=''> {name}</span></p>
                <p className='text-[16px] font-bold '> {profile}</p>
                <p className='text-[20px] font-semibold mt-2'> {year}</p>
                <p className='text-[20px] font-semibold'> {tech}</p>
            </div>

        </div>
    </div>
  )
}

export default ProfileCard