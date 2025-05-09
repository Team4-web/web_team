'use client';
import { useState } from 'react';
import WorkshopCard from './WorkshopCard';
import { workshops as allWorkshops } from '../data/workshops';

export default function WorkshopGrid() {
  const [filters, setFilters] = useState({ category: 'All', artist: 'All', price: 'All' });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filtered = allWorkshops.filter((w) => {
    const { category, artist, price } = filters;
    const catMatch = category === 'All' || w.category === category;
    const artMatch = artist === 'All' || w.artist === artist;
    const priceMatch = price === 'All' ||
      (price === '0-50' && w.price <= 50) ||
      (price === '51-150' && w.price > 50 && w.price <= 75) ||
      (price === '150-2000' && w.price > 75);

    return catMatch && artMatch && priceMatch;
  });

  return (
    <div className="container">
      <h2 className="text-xl font-semibold mb-4">Abstract</h2>

      <div className="flex gap-4 flex-wrap mb-6">
        <select name="category" onChange={handleChange} className="border p-2">
          <option value="All">All Categories</option>
          <option value="Монгол зураг">Монгол зураг</option>
          <option value="Чимэглэлийн">Sculpting</option>
          <option value="Абстракт">Абстракт</option>
          <option value="Цуврал">Цуврал</option>
        </select>
        <select name="artist" onChange={handleChange} className="border p-2">
          <option value="All">All Artists</option>
          <option value="О.Доржготов">О.Доржготов</option>
          <option value="Д.Дуулал">Д.Дуулал</option>
          <option value="Ш.Тамир">Ш.Тамир</option>
          <option value="Г.Лхагвасүрэн">Г.Лхагвасүрэн</option>
          <option value="Б.Энхтуяа">Б.Энхтуяа</option>
        </select>
        <select name="price" onChange={handleChange} className="border p-2">
          <option value="All">All Prices</option>
          <option value="0-50">$0 - $50</option>
          <option value="51-150">$51 - $150</option>
          <option value="150-2000">$150 - $2000</option>
        </select>
      </div>

      <div className="flex flex-wrap gap-6">
        {filtered.length > 0 ? (
          filtered.map(w => <WorkshopCard key={w.id} workshop={w} />)
        ) : (
          <p>Илэрц олдсонгүй</p>
        )}
      </div>
    </div>
  );
}