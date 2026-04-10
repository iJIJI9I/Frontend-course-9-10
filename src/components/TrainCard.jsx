import { Link } from 'react-router-dom';
import { Train, Clock, ArrowRight } from 'lucide-react';

export default function TrainCard({ train }) {
  return (
    <div className="train-card">
      <div className="train-header">
        <Train size={20} />
        <span>Потяг {train.number}</span>
      </div>
      <div className="route-info">
        <div className="point">
          <strong>{train.from}</strong>
          <p>{new Date(train.departure).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
        </div>
        <ArrowRight className="divider" />
        <div className="point">
          <strong>{train.to}</strong>
          <p>{new Date(train.arrival).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
        </div>
      </div>
      <div className="footer">
        <span><Clock size={16} /> {train.duration}</span>
        <Link to={`/booking/${train.id}`} className="btn-primary">Вибрати</Link>
      </div>
    </div>
  );
}