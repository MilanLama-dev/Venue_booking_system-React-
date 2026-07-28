import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'

const Confirm = () => {
  const [date, setDate] = useState("")
  const navigate = useNavigate()

  const confirmBooking = () => {
    if(!date){
      alert("Please Select a date")
      return
    }

    alert("Booking Successfull")
    navigate("/my-bookings")
  }

  return (
    <>
      <Navbar />
      <div className='max-w-lg mx-auto py-10'>
        <h1 className='text-3xl font-bold mb-6'>
          <input type="date" className='border p-3 rounded-lg w-full' onChange={(e) => {setDate(e.target.value)}}/>
        </h1>
        <button onClick={confirmBooking} className='mt-5 bg-blue-500 text-white px-6 py-3 rounded-lg'>Confirm Booking</button>
      </div>
    </>
  )
}

export default Confirm