import React, { useEffect, useState } from 'react'
import axiosInstance from '../../axiosinstance';

export default function HomePage() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axiosInstance.get('/userId').then((response) => {
      setUser(response.data);
    });
  }, []);

  return (
    <>
      {user.map((users) => (
        <Card key={users.id} users={users} />
      ))}
    </>
  );
}

