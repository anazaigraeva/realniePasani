import React from 'react';
import Card from '../../Components/Cards/Card';
import './HomePage.css';

export default function HomePage({ setCategory, categories }) {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <Card
          key={category.id}
          category={category}
          setCategory={setCategory}
        />
      ))}
    </div>
  );
}
