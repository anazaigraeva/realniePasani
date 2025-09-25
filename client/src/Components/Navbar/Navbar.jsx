import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router';
import axiosInstance from '../../axiosinstance';

export default function Navba({ user, setUser }) {


  const signoutHandler = async () => {
    await axiosInstance.delete('/auth/signout');
    setUser(null);
  };

  
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Text>
          <Link to="/">
            <h3>Словарь поколений</h3>
            <h6>Понимай друг друга лучше</h6>
          </Link>
        </Navbar.Text>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            {!user ? (
              <NavLink to="/signin">Войти</NavLink>
            ) : (
              <NavLink to="/profile">{user.login}</NavLink>
            )}
          </Navbar.Text>
          <Navbar.Text>
            {!user ? (
              <NavLink to="/signup">Регистрация</NavLink>
            ) : (
              <NavLink onClick={signoutHandler}>Выйти</NavLink>
            )}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

