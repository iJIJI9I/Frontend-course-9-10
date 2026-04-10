const SeatMap = ({ seatsCount, bookedList, selectedSeats, onSeatClick }) => {
  const seats = Array.from({ length: seatsCount }, (_, i) => i + 1);

  return (
    <div className="seat-grid">
      {seats.map(num => {
        const isBooked = bookedList.includes(num);
        const isSelected = selectedSeats.includes(num);
        
        let statusClass = "seat-free";
        if (isBooked) statusClass = "seat-booked";
        else if (isSelected) statusClass = "seat-selected";

        return (
          <button
            key={num}
            disabled={isBooked}
            className={`seat ${statusClass}`}
            onClick={() => onSeatClick(num)}
          >
            {num}
          </button>
        );
      })}
    </div>
  );
};