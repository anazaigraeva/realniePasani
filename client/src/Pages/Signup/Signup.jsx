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
    const response = await axiosInstance.post('/auth/signup', form);
    setUser(response.data.user);
    setAccessToken(response.data.accessToken);
  };

  const changeHandler = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <>
      <h1 >Регистрация</h1><br></br>
      <form onSubmit={submitHandler} >
        <label htmlFor="name">Ваше имя</label><br></br>
        <input
          type="text"
          id="name"
          name="login"
          onChange={changeHandler}
          value={form.login}
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

{
  /* <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Введите логин</Form.Label>
          <Form.Control type="email" placeholder="Введите логин" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Введите Email</Form.Label>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Пароль</Form.Label>
          <Form.Control type="password" placeholder="Введите пароль" />
        </Form.Group>
        <Button variant="primary">Войти</Button>
      </Form> */
}
