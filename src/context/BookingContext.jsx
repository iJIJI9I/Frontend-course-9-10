import { createContext, useState, useEffect } from 'react';

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [bookedSeats, setBookedSeats] = useState(() => {
    const saved = localStorage.getItem('bookings');
    return saved ? JSON.parse(saved) : {};
  });

  const confirmBooking = (trainId, seats, userData) => {
    const newBookings = { ...bookedSeats };
    if (!newBookings[trainId]) newBookings[trainId] = [];
    newBookings[trainId].push(...seats);
    
    setBookedSeats(newBookings);
    localStorage.setItem('bookings', JSON.stringify(newBookings));
  };

  return (
    <BookingContext.Provider value={{ bookedSeats, confirmBooking }}>
      {children}
    </BookingContext.Provider>
  );
};