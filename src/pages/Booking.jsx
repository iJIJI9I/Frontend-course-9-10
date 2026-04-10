import { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { trains } from '../data/trains';
import { BookingContext } from '../context/BookingContext';
import { toast } from 'react-toastify';

export default function Booking() {
  const { trainId } = useParams();
  const navigate = useNavigate();
  const { bookings, saveBooking } = useContext(BookingContext);
  
  const train = trains.find(t => t.id === trainId);
  const [activeWagon, setActiveWagon] = useState(train.wagons[0]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [user, setUser] = useState({ name: '', email: '', phone: '' });

  const bookedInCurrentWagon = bookings[`${trainId}-${activeWagon.id}`] || [];

  const toggleSeat = (num) => {
    if (bookedInCurrentWagon.includes(num)) return;
    setSelectedSeats(prev => 
      prev.includes(num) ? prev.filter(s => s !== num) : [...prev, num]
    );
  };

  const handleBooking = (e) => {
    e.preventDefault();
    if (selectedSeats.length === 0) return toast.error("Оберіть місця!");
    
    saveBooking(trainId, activeWagon.id, selectedSeats);
    toast.success("Квитки заброньовано успішно!");
    navigate('/');
  };

  return (
    <div className="container">
      <h2>{train.number}: {train.from} — {train.to}</h2>
      
      <div className="wagon-selector">
        {train.wagons.map(w => (
          <button 
            key={w.id} 
            className={activeWagon.id === w.id ? 'active' : ''}
            onClick={() => {setActiveWagon(w); setSelectedSeats([]);}}
          >
            Вагон {w.id} ({w.type})
          </button>
        ))}
      </div>

      <div className="seat-map">
        {Array.from({ length: activeWagon.seatsCount }, (_, i) => i + 1).map(num => {
          let status = 'free';
          if (bookedInCurrentWagon.includes(num)) status = 'booked';
          else if (selectedSeats.includes(num)) status = 'selected';
          
          return (
            <div key={num} className={`seat ${status}`} onClick={() => toggleSeat(num)}>
              {num}
            </div>
          );
        })}
      </div>

      <form className="booking-form" onSubmit={handleBooking}>
        <input required placeholder="ПІБ" onChange={e => setUser({...user, name: e.target.value})} />
        <input required type="email" placeholder="Email" onChange={e => setUser({...user, email: e.target.value})} />
        <input required type="tel" placeholder="Телефон" onChange={e => setUser({...user, phone: e.target.value})} />
        <button type="submit" className="btn-primary">Забронювати {selectedSeats.length} квитків</button>
      </form>
    </div>
  );
}