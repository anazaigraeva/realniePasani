import React, { useState } from 'react';
import axiosInstance, { setAccessToken } from '../../axiosinstance';
import './Signup.css';

export default function Signup({ setUser }) {
  const [form, setForm] = useState({
    login: '',
    email: '',
    password: '',
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await axiosInstance.post('/auth/signup', form);
    setUser(response.data.user);
    setAccessToken(response.data.accessToken);
  };

  const changeHandler = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="signup-container">
      <h1>Регистрация</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Ваше имя</label>
        <input
          type="text"
          id="name"
          name="login"
          onChange={changeHandler}
          value={form.login}
          required
        />

        <label htmlFor="email">Почта</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={changeHandler}
          value={form.email}
          required
        />

        <label htmlFor="password">Пароль</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={changeHandler}
          value={form.password}
          required
        />

        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
}
