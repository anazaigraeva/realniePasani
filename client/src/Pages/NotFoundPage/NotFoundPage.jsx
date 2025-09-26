import React from 'react';
import { useNavigate } from 'react-router';
import './NotFoundPage.css';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <h1>Ага! Попався!</h1>
      <img
        src="/public/PixVerse_V5_Image_Text_720P_plese_do_some_very.gif"
        alt="Ага! Попався! GIF"
        className="notfound-gif"
      />
      <button className="home-btn" onClick={() => navigate('/')}>
        Вернуться на главную
      </button>
    </div>
  );
}
