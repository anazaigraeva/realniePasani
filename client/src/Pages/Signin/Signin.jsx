import React, { useState } from "react";
import { useNavigate } from "react-router";
import axiosInstance from "../../axiosinstance";

export default function Login({setUser}) {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await axiosInstance.post("/auth/login", form);
    setUser(response.data.user)
    navigate('/')
  };

  const changeHandler = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div>
      <h1>Вход в учетную запись</h1>
      <form onSubmit={submitHandler}>
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
        <button type="submit">Войти</button>
      </form>
    </div>
  );
}
