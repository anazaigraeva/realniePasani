import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axiosInstance, { setAccessToken } from '../../axiosinstance';

export default function Signup({ setUser }) {
  const [form, setForm] = useState({
    login: '',
    email: '',
    password: '',
  });

    const submitHandler = async (e) => {
      e.preventDefault();
      const response = await axiosInstance.post("/auth", form);
      setUser(response.data.user);
      setAccessToken(response.data.accessToken);
    };

    const changeHandler = (e) =>
      setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <>
      <h1 >Регистрация</h1><br></br>
      <form onSubmit={submitHandler} >
        <label htmlFor="name">Ваше имя</label><br></br>
        <input
          type="text"
          id="name"
          name="name"
          onChange={changeHandler}
          value={form.name}
        /><br></br>
        <label htmlFor="email">Почта</label><br></br>
        <input
          type="email"
          id="email"
          name="email"
          onChange={changeHandler}
          value={form.email}
        /><br></br>
        <label htmlFor="password">Пароль</label><br></br>
        <input
          type="password"
          id="password"
          name="password"
          onChange={changeHandler}
          value={form.password}
        /><br></br>
        <button type="submit">Зарегистрироваться</button>
      </form>
    </>
  );
}
