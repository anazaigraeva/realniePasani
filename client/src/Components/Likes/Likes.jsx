import React, { use } from 'react';

import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useState } from 'react';
import axiosInstance from '../../axiosinstance';

function Likes({ userId, wordId }) {

  console.log(userId, wordId);
  
  const [active, setActive] = useState(false);
  const [likes, setLikes] = useState(null);

  

  const addHandler = () =>
    axiosInstance.post(`/likes`, { userId: userId, wordId: wordId }).then((response) => {
      setLikes(response.data);
    });

  return (
    <>
      <button
        className="likeButton"
        onClick={() => addHandler().then(() => setActive((status) => !status))}
      >
        {active ? '♥' : '♡'}
      </button>
    </>
  );
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default Likes;

// import React from 'react'

// import { useEffect } from 'react';
// import { useParams } from 'react-router';
// import { useState } from 'react';
// import axiosInstance from '../../axiosinstance';

//  function Likes({ userId, wordId}) {
//   const [active, setActive] = useState(false)
//  const [likes, setLikes] = useState(null);

//  const addHandler = () => {
//     if (active) {
//       axiosInstance.delete(`/likes`, {
//         data: { userId: userId, wordId: wordId }
//       }).then((response) => {
//         setLikes(response.data);
//         setActive(false);
//         console.log('Like removed:', response);
//       }).catch((error) => {
//         console.error('Error removing like:', error);
//       });
//     } else {
//       axiosInstance.post(`/likes`, {userId: userId, wordId:wordId}).then((response) =>{
//          setLikes(response.data);
//          console.log(response)})}}

//   return (
//     <>
//       <button className='likeButton' onClick={addHandler}>
//         {active ? '♥' : '♡'}
//       </button>
//     </>
//   )
// }

// export default Likes
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import React from 'react'
// import { useState } from 'react';
// import axiosInstance from '../../axiosinstance';

// function Likes({ userId, wordId }) {
//   const [active, setActive] = useState(false);
//   const [likes, setLikes] = useState(null);

//   const addHandler = () => {
//     if (active) {
//       axiosInstance.delete(`/likes`, {
//         data: { userId: userId, wordId: wordId }
//       }).then((response) => {
//         setLikes(response.data);
//         setActive(false);
//         console.log('Like removed:', response);
//       }).catch((error) => {
//         console.error('Error removing like:', error);
//       });
//     } else {
//       axiosInstance.post(`/likes`, {userId: userId, wordId:wordId})
//         .then((response) => {
//           setLikes(response.data);
//           setActive(true);
//           console.log('Like added:', response);
//         })
//         .catch((error) => {
//           console.error('Error adding like:', error);
//         });
//     }
//   };

//   return (
//     <>
//       <button className='likeButton' onClick={addHandler}>
//         {active ? '♥' : '♡'}
//       </button>
//     </>
//   )
// }

// export default Likes
