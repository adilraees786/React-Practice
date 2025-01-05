// import React from 'react'

//  const Antdesign = () => {
//   return (
//     <div>
//       <div>
//       <h1 className="text-2xl font-bold">Antdesign</h1>
    
//       </div>
      
//       </div>
//   )
// }

// export default Antdesign;
import React from 'react';
import { Button } from 'antd';
import 'antd/dist/reset.css'; // Ant Design CSS Reset (Antd v5 and above)

const Antdesign = () => (
  <div style={{ padding: '20px' }}>
    <h1>Welcome to Ant Design</h1>
    <Button type="primary">Click Me</Button>
  </div>
);

export default Antdesign;
