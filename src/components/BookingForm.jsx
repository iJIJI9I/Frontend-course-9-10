import { useState } from 'react';

const BookingForm = ({ onSubmit, selectedSeats }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedSeats.length === 0) return alert("Оберіть місця!");
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        required 
        placeholder="Прізвище та ім'я" 
        onChange={e => setFormData({...formData, name: e.target.value})} 
      />
      <input 
        required 
        type="email" 
        placeholder="Email" 
        onChange={e => setFormData({...formData, email: e.target.value})} 
      />
      <button type="submit">Забронювати квитки</button>
    </form>
  );
};