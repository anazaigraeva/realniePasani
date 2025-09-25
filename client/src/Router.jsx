import axios from 'axios';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { useEffect, useState } from 'react';
import Layout from './Layout';
// import { setAccessToken } from './axiosinstance'
import ProtectedRoute from './HOCs/ProtectedRoute';
import HomePage from './Pages/Homepage/HomePage';
import Signup from './Pages/Signup/Signup';
import Signin from './Pages/Signin/Signin';

export default function Router() {
  const [user, setUser] = useState(null);
  // const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //     axios.get('/api/auth/refresh').then(({data}) => {
  //         setUser(data.user);
  //         setAccessToken(data.accessToken);
  //     }).finally(() => setLoading(false))
  //     }, []);

  // if (loading) {
  //     return <div>Загрузка...</div>
  // }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route element={<ProtectedRoute isAllowed={!user} redirectTo="/" />}>
            <Route path="/signup" element={<Signup setUser={setUser} />} />
            <Route path='/signin' element={<Signin setUser={setUser}/>} /> импортировать signin, если будет одна страница то убрать
          </Route>
          {/* <Route path='/profile' element={

              <ProtectedRoute isAllowed={user} redirectTo="/signup">
                <Profile user={user} />
              </ProtectedRoute>
            }
        /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
