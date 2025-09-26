import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { useEffect, useState } from 'react';
import Layout from './Layout';
// import { setAccessToken } from './axiosinstance'
import ProtectedRoute from './HOCs/ProtectedRoute';
import HomePage from './Pages/Homepage/HomePage';
import Signup from './Pages/Signup/Signup';
import Signin from './Pages/Signin/Signin';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import axiosInstance, { setAccessToken } from './axiosinstance';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import WordPage from './Pages/WordPage/WordPage';

export default function Router() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [categories, setCategory] = useState([]);

  useEffect(() => {
    axiosInstance.get('/category').then((response) => {
      setCategory(response.data);
    });
  }, []);

  useEffect(() => {
    axiosInstance
      .get('/auth/refresh')
      .then(({ data }) => {
        setUser(data.user);
        setAccessToken(data.accessToken);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  console.log(user, 'user');

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Layout user={user} setUser={setUser} userId={user?.id} />}
        >
          <Route
            path="/"
            element={<HomePage setCategory={setCategory} categories={categories} />}
          />
          {/* <Route
            path="/words"
            element={<WordPage setUser={setUser} categories={categories} user={user} />}
          /> */}
          <Route path="/*" element={<NotFoundPage setUser={setUser} />} />
          <Route element={<ProtectedRoute isAllowed={!user} redirectTo="/signup" />}>
            <Route path="/words/:id" element={<WordPage user={user} />} />
            <Route path="/profile" element={<ProfilePage user={user} />} />
          </Route>
          <Route element={<ProtectedRoute isAllowed={user} redirectTo="/" />}>
            <Route path="/signup" element={<Signup setUser={setUser} />} />
            <Route path="/signin" element={<Signin setUser={setUser} />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
