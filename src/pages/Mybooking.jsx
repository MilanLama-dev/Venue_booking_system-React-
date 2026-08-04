import React from 'react'
import Navbar from '../components/Navbar'

const Mybooking = () => {
  const booking = JSON.parse(localStorage.getItem("booking")) || [];

  const cancelBooking = (id, bookingDate) => {
    const updateBooking = booking.filter(
      (b) => !(b.id === id && b.bookingDate === bookingDate)
    )
    localStorage.setItem("booking", JSON.stringify(updatedBooking));
    window.location.reload();
  };

  return (
    <>
      <Navbar />

      <div className="bg-gray-100 min-h-screen py-12">
        <div className="max-w-5xl mx-auto px-6">

          <h1 className="text-4xl font-bold mb-8">
            My Booking
          </h1>

          {booking.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-lg p-10 text-center">
              <h2 className="text-2xl font-semibold">
                No Bookings Yet
              </h2>

              <p className="text-gray-500 mt-2">
                Book a venue to see it here.
              </p>
            </div>
          ) : (
            booking.map((bookings) => (
            <div key={`${bookings.id}-${bookings.bookingDate}`}
             className="bg-white rounded-2xl shadow-xl overflow-hidden">

              <img
                src={bookings.image}
                alt={bookings.name}
                className="w-full h-72 object-cover"
              />

              <div className="p-8">

                <h2 className="text-3xl font-bold">
                  {bookings.name}
                </h2>

                <p className="mt-4">
                  <strong>Location:</strong> {bookings.location}
                </p>

                <p>
                  <strong>Capacity:</strong> {bookings.capacity} People
                </p>

                <p>
                  <strong>Price:</strong> ${bookings.price}
                </p>

                <p>
                  <strong>Booking Date:</strong> {bookings.bookingDate}
                </p>

                <div className="mt-4">
                  <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
                    {bookings.status}
                  </span>
                </div>

                <button
                  onClick={cancelBooking(bookings.id, bookings.bookingDate)}
                  className="mt-8 w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg"
                >
                  Cancel Booking
                </button>

              </div>

            </div>
            ))
          )}

        </div>
      </div>
    </>
  );
};


export default Mybooking