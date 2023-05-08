import React, {useEffect} from 'react';
import { connect, destroyCCP } from 'amazon-connect-streams';
// import 'amazon-connect-streams';

const CCP = () => {
    useEffect(() => {
        const instanceURL = 'https://consz.my.connect.aws/ccp-v2/';
        const containerDiv = document.getElementById('container-div');
        // const URL = `https://localhost:3000/login`
    
        window.connect.core.initCCP(containerDiv, {
          ccpUrl: instanceURL,
          loginPopup: true,
          // loginUrl: URL,
          loginOptions: {
            // username: "johnreycaga-anan",
            // password: "AmazonConnect!2023",
            autoClose: true,
            height: 600,
            width: 400,
            top: 0,
            left: 0,
          },
          region: 'us-east-1',
          softphone: {
            allowFramedSoftphone: true,
            disableRingtone: false,
          },
        });
    
        return () => {
          destroyCCP();
        };
      }, []);
    
      return <div id="container-div" />;
}

export default CCP