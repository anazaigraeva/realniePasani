import React from 'react';
import { Outlet } from 'react-router';
import Header from './Components/Header';

export default function Layout({user, setUser}) {
  return (
    <>
       <Header user={user} setUser={setUser} />
       <main className='container'>
         <Outlet />
       </main>
       {/* <Footer /> */}
    </>
  );
}
