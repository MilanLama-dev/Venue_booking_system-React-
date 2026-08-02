import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'

const Confirm = () => {
  const [date, setDate] = useState("")
  const navigate = useNavigate()

  const venue = JSON.parse(localStorage.getItem("selectedVenue"))

  if(!venue){
    navigate("/venues")
    return null
  }

  const confirmBooking = () => {
    if(!date){
      alert("Please Select a date")
      return
    }

  const bookings = JSON.parse(localStorage.getItem("booking")) || []
  
  const alreadyBooked = bookings.find(
    (b) => b.id === venue.id && b.bookingDate === date
  )

  if(alreadyBooked){
    alert("This venue has already been booked for that date.")
    return
  }

  const booking = {
    ...venue,
    bookingDate : date,
    status:"Confirmed",
  }

  bookings.push(booking)

  localStorage.setItem("booking",JSON.stringify(bookings))

    alert("Booking Successfull")
    navigate("/my-bookings")
  }

  return (
    <>
      <Navbar />
      <div className='bg-gray-100 min-h-screen flex items-center justify-center'>
        <div className='bg-white shadow-xl rounded-2xl p-10 w-full max-w-lg'>
          <h1 className='text-3xl font-bold text-center text-blue-600'>Confirm Booking</h1>
          <p className='text-center text-gray-500 mt-2 mb-8'>Choose your booking date below.</p>
          <label className='block mb-2 font-semibold'>Booking Date</label>
          <input type="date" min={new Date().toISOString().split("T")[0]} value={date} onChange={(e) => {setDate(e.target.value)}} className='w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none'/>
          <button onClick={confirmBooking} className='w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition'>Confirm Booking</button>
        </div>
      </div>
    </>
  )
}

export default Confirm