import React from 'react'
import Navbar from '../components/Navbar'
import { venues } from '../data/venues'
import { useNavigate, useParams } from 'react-router-dom'

const VenueDetails = () => {
  const {id} = useParams()
  const navigate = useNavigate()

  const venue = venues.find((v) => v.id == parseInt(id))

  if(!venue){
    return(
      <>
      <Navbar />
      <div className='max-w-4xl mx-auto py-20 px-6 text-center'>
        <h1 className='text-4xl font-bold text-red-500'>Venue not found</h1>
      </div>
      </>
    )
  }

  const handleBooking = () => {
    navigate("/confirm")
  }

  return (
    <>
    <Navbar />
    <div className='bg-gray-100 min-h-screen py-12'>
      <div className='max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden'>
        <img src={venue.image} alt={venue.name} className='w-full h-96 object-cover rounded-2xl'/>
        <div className='p-8'>
          <h1 className='text-3xl font-bold text-gray-700'>{venue.name}</h1>
          <p className='text-gray-500 mt-2'>{venue.description}</p>
          <div className='grid md:grid-cols-3 gap-6 mt-8 text-center'>
            <div className='bg-blue-50 rounded-xl p-5'>
              <h3 className='font-semibold text-blue-600'>Location</h3>
              <p>{venue.location}</p>
            </div>
            <div className='bg-blue-50 rounded-xl p-5'>
              <h3 className='font-semibold text-blue-600'>Capacity</h3>
              <p>{venue.capacity}</p>
            </div>
            <div className='bg-blue-50 rounded-xl p-5'>
              <h3 className='font-semibold text-blue-600'>Price</h3>
              <p>{venue.price}</p>
            </div>
          </div>
          <button onClick={handleBooking} className='mt-10 w-full bg-blue-600 text-white px-6 py-4 rounded-lg hover:bg-blue-700 font-semibold '>Book Now</button>
        </div>
      </div>
      
    </div>
    </>
  )
}

export default VenueDetails