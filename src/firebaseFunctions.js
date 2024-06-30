// // src/firebaseFunctions.js
// import { db } from './firebase';

// export const fetchUserDataFromFirebase = () => {
//   return db.collection('users').get()
//     .then((querySnapshot) => {
//       const users = [];
//       querySnapshot.forEach((doc) => {
//         users.push({ id: doc.id, ...doc.data() });
//       });
//       return users;
//     })
//     .catch((error) => {
//       console.error("Error fetching documents: ", error);
//     });
// };
import { db } from './firebase'; // Assuming this is where your Firebase configuration is imported

const listenToUserData = (callback) => {
  // Reference to the root of your database where users' data is stored
  const usersRef = db.ref('users');

  // Attach a listener to watch for changes in users' data
  usersRef.on('value', (snapshot) => {
    const userData = snapshot.val(); // Retrieve the entire users node
    callback(userData); // Pass the data to your callback function
  });
};

export { listenToUserData };
