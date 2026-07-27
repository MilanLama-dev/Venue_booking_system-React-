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
      <div className='max-w-4xl mx-auto py-10 px-6'>
        <h1 className='text-3xl font-bold'>Venue not found</h1>
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
    <div className='max-w-4xl mx-auto py-10 px-6'>
      <img src={venue.image} alt={venue.name} className='w-full h-96 '/>
      <h1>{venue.name}</h1>
      <div>
        <p><strong>Location:</strong>{venue.location}</p>
        <p><strong>Capacity:</strong>{venue.capacity}</p>
        <p><strong>Price:</strong>{venue.price}</p>
      </div>
      <p></p>
      <button onClick={handleBooking}>Book Now</button>
    </div>
    </>
  )
}

export default VenueDetails