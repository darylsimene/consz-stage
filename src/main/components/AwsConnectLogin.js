import React from "react";
import AWS from "aws-sdk";

const connect = new AWS.Connect({
    endpoint: "arn:aws:connect:us-east-1:408781860680:instance/9e4dafb4-fe24-497a-83d8-470ce575ade5",
    region: "us-east-1",
});

connect.listInstances({}, function (err, data) {
    if (err) {
        console.log("Not logged in to Amazon Connect");
        // Redirect the user to the Amazon Connect login page
        // window.location.href = "https://consz.awsapps.com/";
        console.log(err);
    } else {
        console.log("Logged in to Amazon Connect");
        // Do something with the logged in user, such as call an API
    }
});

const connect = require("amazon-connect-streams");

// Check if an agent is logged in
if (connect.core.getAgent().agentId) {
    console.log("An agent is currently logged in.");
} else {
    console.log("No agent is currently logged in.");
}

const connect = require("amazon-connect-streams");

// Initialize the connect.core object
connect.core.initCCP({ ccpUrl: "https://consz.my.connect.aws/connect/ccp" });

// Wait for the CCP to initialize
connect.core.whenConnected(function () {
    // Check if an agent is logged in
    if (connect.core.getAgent().agentId) {
        console.log("An agent is currently logged in.");
    } else {
        console.log("No agent is currently logged in.");
    }
});

const AwsConnectLogin = () => {
    return <div>AwsConnectLogin</div>;
};

export default AwsConnectLogin;
