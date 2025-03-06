import React from 'react'

const Card = ({data}) => {
  const {name,city,email}=data;
  console.log(name);
  
  
  
  return (
    <div>
      <div className='h-screen w-full bg-neutral-100 p-3'>
        <div className=' w-50 bg-neutral-200 rounded-md flex flex-col text-start p-5'>
          <h1 className='capitalize text-2xl font-bold'>Name:{name}</h1>
          <h3> <span className='font-bold'>City:</span> {city}</h3>
          <h3> <span className='font-bold'>Email:</span> {email}</h3>
        </div>
      </div>
      
    </div>
  )
}

export default Card
