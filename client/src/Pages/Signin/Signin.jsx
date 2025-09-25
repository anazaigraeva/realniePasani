import React, { useState } from 'react'
import { Button, Form } from "react-bootstrap";


export default function Signin({setUser}) {
      const [form, setForm] = useState({
        email: "",
        password: "",
      });
  return (
<>
<div><h1>Вход</h1></div>
    <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Вашь Email</Form.Label>
        <Form.Control type="email" placeholder="Введите Email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Пароль</Form.Label>
        <Form.Control type="password" placeholder="Пароль" />
      </Form.Group>
      <Button variant="primary">Войти</Button>
    </Form>
</>
  )
}
