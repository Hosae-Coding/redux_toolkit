import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
   const user = useSelector((state) => state.user.value);
   const themeColor = useSelector((state) => state.theme.value);
   return (
      <div style={{ color: themeColor }}>
         <h1>ProfilePage</h1>
         <p>Name: {user.name}</p>
         <p>age:{user.age}</p>
         <p>email:{user.email}</p>
      </div>
   );
};

export default Profile;
