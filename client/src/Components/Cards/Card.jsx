import React from 'react';

export default function Card({ category }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{category.gen}</Card.Title>
        <Card.Text>{category.description}</Card.Text>
        <button type="button" className="btn btn-primary">
          Изучить
        </button>
      </Card.Body>
    </Card>
  );
}
