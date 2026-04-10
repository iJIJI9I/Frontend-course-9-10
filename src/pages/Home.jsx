import { useState } from 'react';
import { trains } from '../data/trains';
import TrainCard from '../components/TrainCard';

export default function Home() {
  const [search, setSearch] = useState('');

  const filteredTrains = trains.filter(t => 
    t.to.toLowerCase().includes(search.toLowerCase()) || 
    t.number.includes(search)
  );

  return (
    <div className="container">
      <h1>Пошук рейсів</h1>
      <input 
        className="search-input"
        placeholder="Куди (напр. Харків)..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="train-list">
        {filteredTrains.map(t => <TrainCard key={t.id} train={t} />)}
      </div>
    </div>
  );
}