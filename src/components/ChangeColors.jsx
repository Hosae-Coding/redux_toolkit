import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeColor } from '../components/features/theme';

const ChangeColors = () => {
   const dispach = useDispatch();
   const [color, SetColor] = useState('');
   return (
      <div>
         <input type="text" onChange={(e) => SetColor(e.target.value)} />
         <button
            onClick={() => {
               dispach(changeColor(color));
            }}
         >
            Change Color
         </button>
      </div>
   );
};

export default ChangeColors;
