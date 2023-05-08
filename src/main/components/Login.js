import React, {useState} from 'react';
import axios from 'axios';
import { connect }from "amazon-connect-streams";

const Login = () => {
    const [username, setUsername] = useState('johnreycaga-anan');
    const [password, setPassword] = useState('AmazonConnect!2023');
    const [authToken, setAuthToken] = useState('');

    const instanceURL = 'https://consz.my.connect.aws/ccp-v2/';

    
    const connectOptions = {
      ccpUrl: instanceURL,
      loginPopup: true,
      loginUrl: "https://localhost:3000",
      loginOptions: {
        username: "johnreycaga-anan",
        password: "AmazonConnect!2023",
        autoClose: true,
        height: 600,
        width: 400,
        top: 0,
        left: 0,
      },
      // loginParams: {
      //   username,
      //   password
      // }
    }

    // const handleSubmit = async () => {
    //   try {
    //     await window.connect.core.initCCP(document.getElementById('container-div'), connectOptions)
    //       .then((response) => {
    //         console.log('Connect API Response:', response);
    //       })
    //     console.log('Amazon Connect login successful!');
    //   } catch (error) {
    //     console.error('Amazon Connect login failed!', error);
    //   }
    // };

    const handleSubmit = async () => {
      try {
        window.connect.core.initCCP(document.getElementById('container-div'), connectOptions)
        console.log('Amazon Connect login successful!');
      } catch (error) {
        console.error('Amazon Connect login failed!', error);
      }
    };
    

  return (
    <div>
        <button onClick={handleSubmit}>LOGIN</button>
        <div id="container-div" />
    </div>
  )
}

export default Login