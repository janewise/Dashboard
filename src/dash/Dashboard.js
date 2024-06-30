
// // export default Dashboard;
// import React, { useEffect, useState } from 'react';
// import { listenToUserData } from '../firebaseFunctions'; // Import the function to listen for data

// const Dashboard = () => {
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     // Listen for changes in user data
//     listenToUserData((data) => {
//       setUserData(data); // Update state with the received data
//     });
//   }, []);

//   return (
//     <div>
//       <h1>User Data</h1>
//       {userData ? (
//         <ul>
//           {Object.keys(userData).map((userId) => (
//             <li key={userId}>
//               UserID: {userId}, Profit per Hour: {userData[userId].autoIncrement*3600}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default Dashboard;

import React, { useEffect, useState } from 'react';
import { listenToUserData } from '../firebaseFunctions'; // Assuming this function correctly sets up the listener

const Dashboard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const unsubscribe = listenToUserData((data) => {
      setUserData(data); // Update state with the received data
    });

    // Cleanup function (if necessary)
    return () => unsubscribe(); // Ensure to unsubscribe if component unmounts
  }, []);

  return (
    <div>
      <h1>User Data</h1>
      {userData ? (
        <ul>
          {Object.keys(userData).map((userId) => (
            <li key={userId}>
              UserID: {userId}, Profit per Hour: {userData[userId].autoIncrement * 3600}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Dashboard;

