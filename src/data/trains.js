export const trains = [
  {
    id: '722',
    number: '722К "Інтерсіті+"',
    from: 'Київ',
    to: 'Харків',
    departure: '2025-05-10T06:45:00',
    arrival: '2025-05-10T11:35:00',
    duration: '4г 50хв',
    wagons: [
      { id: 1, type: 'Клас 1', seatsCount: 30 },
      { id: 2, type: 'Клас 2', seatsCount: 40 }
    ]
  },
  {
    id: '091',
    number: '091К "Нічний Експрес"',
    from: 'Київ',
    to: 'Львів',
    departure: '2025-05-11T22:37:00',
    arrival: '2025-05-12T06:20:00',
    duration: '7г 43хв',
    wagons: [
      { id: 1, type: 'Купе', seatsCount: 36 },
      { id: 2, type: 'Люкс', seatsCount: 18 }
    ]
  }
];