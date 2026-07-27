import React from 'react'
import { Link } from 'react-router-dom'
import { venues } from '../data/venues'
import Navbar from '../components/Navbar'

const Venue = () => {
  return (
    <>
    <Navbar />
    <div className='max-w-6xl mx-auto py-10 px-6'>
      <h1 className='text-3xl font-bold mb-8'>
        Available Venues
      </h1>
      <div className='grid md:grid-cols-3 gap-8'>
        {venues.map((venue) => (
          <div key={venue.id} className='bg-white rounded-xl shadow'>
            <img 
            src={venue.image}
            alt={venue.name}
            className='w-full h-52 object-cover'/>
            <div className='p-5'>
              <h2 className='text-xl font-semibold'>{venue.name}</h2>
              <p>Capacity: {venue.capacity}</p>
              <p>Location: {venue.location}</p>
              <Link to={`/venue/${venue.id}`} className='text-blue-600 font-semibold'>View Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Venue