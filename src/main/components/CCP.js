import React, {useEffect} from 'react';
import { connect, destroyCCP } from 'amazon-connect-streams';
// import 'amazon-connect-streams';

const CCP = () => {
    useEffect(() => {
        const instanceURL = 'https://consz.my.connect.aws/ccp-v2/';
        const containerDiv = document.getElementById('container-div');
    
        window.connect.core.initCCP(containerDiv, {
          ccpUrl: instanceURL,
          loginPopup: true,
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