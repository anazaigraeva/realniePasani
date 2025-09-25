import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

export default function Signup({ setUser }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  //   const submitHandler = async (e) => {
  //     e.preventDefault();
  //     const response = await axios.post("/auth", form);
  //     setUser(response.data.user);
  //     setAccessToken(response.data.accessToken);
  //   };

  //   const changeHandler = (e) =>
  //     setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <>
    <div><h1>Регистрация</h1></div>
      <Form>
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
      </Form>

      {/* <h1 className={styles.title}>Регистрация</h1>
      <form onSubmit={submitHandler} className={styles.form}>
        <label htmlFor="name">Ваше имя</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={changeHandler}
          value={form.name}
        />
        <label htmlFor="email">Почта</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={changeHandler}
          value={form.email}
        />
        <label htmlFor="password">Пароль</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={changeHandler}
          value={form.password}
        />
        <button type="submit">Зарегистрироваться</button>
      </form> */}
    </>
  );
}
