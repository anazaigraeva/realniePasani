import React, { useEffect, useState } from 'react';
import Card from '../../Components/Cards/Card';
import './HomePage.css';
import axiosInstance from '../../axiosinstance';

export default function HomePage({ setCategory, categories }) {
  const [top, setTop] = useState([]);

  useEffect(() => {
    axiosInstance.get('/likes/top').then(({ data }) => setTop(data));
  }, []);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '16px' }}>
      <div className="categories-container">
        {categories.map((category) => (
          <Card key={category.id} category={category} setCategory={setCategory} />
        ))}
      </div>
      <aside style={{ padding: '1rem' }}>
        <h3 style={{ marginBottom: '1rem' }}>Топ-10 по лайкам</h3>
        {top.map((row) => (
          <div
            key={row.wordId}
            style={{
              background: '#fff0f5',
              border: '1px solid #f5c2c7',
              borderRadius: 12,
              padding: '8px 12px',
              marginBottom: 8,
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontWeight: 600 }}>{row.Word?.sleng}</span>
              <span>❤️ {Number(row.count)}</span>
            </div>
            <div style={{ opacity: 0.8, fontSize: 13 }}>{row.Word?.description}</div>
          </div>
        ))}
      </aside>
    </div>
  );
}
