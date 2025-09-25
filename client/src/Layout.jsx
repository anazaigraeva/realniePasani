import React from 'react';
import { Outlet } from 'react-router';
import Header from './Components/Header';

export default function Router() {
  return (
    <>
       <Header />
       <main className='container'>
         <Outlet />
       </main>
       {/* <Footer /> */}
    </>
  );
}
