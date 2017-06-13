// export const onSignIn = () => {
  
// };

// export const onSignOut = () => {
//   console.log("handle sign out");
// };

// // pass username and password
// export const auth = (username, password) => {  
//     // console.log(uuid.v4()); 
//     console.log("username = ", username);
//     console.log("password = ", password);
//     axios.post('http://localhost:3001/users', {
//         username: username,
//         password: password
//     })
//     .then(function (response) {
//     console.log(response);
//     global.ID_TOKEN = response.data.id_token;
//     global.ACCCESS_TOKEN = response.data.access_token;
//     console.log("global.ID_Token = ", global.ID_TOKEN);
//     console.log("global.ACCESS_TOKEN = ", global.ACCCESS_TOKEN);
//     })
//     .catch(function (error) {
//     console.log(error);
//     })
// };

import { AsyncStorage } from "react-native";

export const USER_KEY = "auth-demo-key";

export const onSignIn = () => AsyncStorage.setItem(USER_KEY, "true");

export const onSignOut = () => AsyncStorage.removeItem(USER_KEY);

export const isSignedIn = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(USER_KEY)
      .then(res => {
        if (res !== null) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });
};