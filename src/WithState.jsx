import React from 'react'
import { useState } from 'react';
function WithState(Component) {
    const initialState = { data: [] }; // Array to store text-counter pairs

  const [data, setData] = useState(initialState);

  const addData = (text) => {
    setData((prevData) => ({ data: [...prevData.data, { text, count: 0 }] }));
  };

  const updateCount = (text, increment) => {
    setData((prevData) => {
      const newData = [...prevData.data];
      const index = newData.findIndex((entry) => entry.text === text);
      if (index !== -1) {
        newData[index].count += increment;
      }
      return { data: newData };
    });
  };

    return(props)=> (
    <div>
      <Component {...props} addData={addData} updateCount={updateCount} data={data} />
    </div>
  )
}

export default WithState
