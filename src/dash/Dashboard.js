// // src/Dashboard.js
// import React, { useEffect, useState } from 'react';
// import { fetchUserDataFromFirebase } from './firebaseFunctions';

// const Dashboard = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetchUserDataFromFirebase().then(setUsers);
//   }, []);

//   return (
//     <div>
//       <h1>User Dashboard</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Telegram ID</th>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Username</th>
//             <th>Entered At</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map(user => (
//             <tr key={user.id}>
//               <td>{user.telegramId}</td>
//               <td>{user.firstName}</td>
//               <td>{user.lastName}</td>
//               <td>{user.username}</td>
//               <td>{new Date(user.enteredAt.seconds * 1000).toLocaleString()}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Dashboard;
import React, { useEffect, useState } from 'react';
import { listenToUserData } from '../firebaseFunctions'; // Import the function to listen for data

const Dashboard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Listen for changes in user data
    listenToUserData((data) => {
      setUserData(data); // Update state with the received data
    });
  }, []);

  return (
    <div>
      <h1>User Data</h1>
      {userData ? (
        <ul>
          {Object.keys(userData).map((userId) => (
            <li key={userId}>
              UserID: {userId}, Auto Increment: {userData[userId].autoIncrement}
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
