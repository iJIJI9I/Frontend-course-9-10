import { createContext, useState, useEffect } from 'react';

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState(() => {
    const saved = localStorage.getItem('uz_bookings');
    return saved ? JSON.parse(saved) : {};
  });

  const saveBooking = (trainId, wagonId, seats) => {
    const key = `${trainId}-${wagonId}`;
    const newBookings = {
      ...bookings,
      [key]: [...(bookings[key] || []), ...seats]
    };
    setBookings(newBookings);
    localStorage.setItem('uz_bookings', JSON.stringify(newBookings));
  };

  return (
    <BookingContext.Provider value={{ bookings, saveBooking }}>
      {children}
    </BookingContext.Provider>
  );
};