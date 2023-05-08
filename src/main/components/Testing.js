// const AWS = require('aws-sdk');
// const connect = new AWS.Connect();

// const listUsers = async () => {
//   const params = {
//     InstanceId: '408781860680',
//     region: 'us-east-1',
//   };
  
//   try {
//     const response = await connect.listUsers(params).promise();
//     console.log(response.Users);
//   } catch (error) {
//     console.error(error);
//   }
// };

// listUsers();
import React, { useEffect } from 'react'
const AWS = require('aws-sdk');
const connect = new AWS.Connect();



const Testing = () => {

  const listUsers = async () => {
    const params = {
      InstanceId: '408781860680',
      // region: 'us-east-1',
    };
    
    try {
      const response = await connect.listUsers(params).promise();
      console.log(response.Users);
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(()=>{
    listUsers();
  }, [])

  return (
    <div>Testing</div>
  )
}

export default Testing