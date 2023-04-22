const { zaloAPI } = require('./api-helper');

async function sendMessage(body) {
    try {
        // lay tu database da luu len  
        const accessToken = ''

        const response = await zaloAPI.sendMessage(accessToken, body);
        if (response.data.error === 0) {
            console.log('send message successfully');
        }
    } catch (error) {
        console.log(error)
    }
}

async function getAllTemplate(){
    try {
        // lay tu database da luu len  
        const accessToken = ''
        const queryParams = {
            offset: 0,
            limit:100,
            status:2
        }
        const response = await zaloAPI.getAllTemplate(accessToken, queryParams);
        return response.data;
    } catch (error) {
        console.log(error)
    }
}

async function getAccessToken(code) {
    try {
        const appId = process.env.ZALO_APP_ID;
        const secretKey = process.env.ZALO_SECRET_KEY;
        const codeVerifier = process.env.CODE_VERIFIER;
        const body ={
            'code': code,
            'app_id': appId,
            'grant_type': 'authorization_code',
            'code_verifier': codeVerifier
        }

        const response = await zaloAPI.getAccessToken(secretKey, body);
        // luu xuong database 
        /*
        data: {
            "access_token": "rusu9g1_D2ZTZBalhd0p9T-5kIgeRqr0gjwiJ9X3H1oFgfrPXWGJ2wokb5g7ALydfQIbR9GXIXoaf89jgrHl8AZ-k7IbJ3O5iSwwLQfoSrFUzueO-mjpUEcieIFB7Lv4uO6G7SOc5bRts-47WMSvUuBArIk4PLivYTAsTxjrJXsHXu5ZinbqFPsCfKxlCdX7-8p-7EaX4c3aZk4Nc2yTGRwwm2og1YzyhOJfSxWaCNkPahvqc34q3PcarKII0I0Fc_BsTkXX4MJfn-0-b5iVLA2in3seNm15sAlL7TK31atRc8mxoZzKVBstf1EN4bHyjBY01RWaS5YTWxm8l1HG0fgslKb7HCI-FwTdDo0",
            "refresh_token": "7A_RofXfadflv_QRfGUSUat1mupqFfL38CxJkuS5aMemzyZgz76M6GQenEhGLvWOPQZFreuWl2rVtyl_xokNUYYhz94nUQ1Jvu7waqjRc5wsi-A_AbRNBilZr_9C9znJmQlMzWDUcdcAgS6yMLd238wNjTOzPknG-kM9XoCTgdA3eiLUXoR2Ws_kl0e0lt_fX7mMUoUB5OkRV2HlB-qHYFO0ErrVuHNy-75pMbZWFxrUMIP2vGf1_sEUAG",
            "expires_in": "90000"
        }
        */ 
    } catch (error) {
        console.log(error)
    }
}

async function refreshAccessToken() {
    try {
        const appId = process.env.ZALO_APP_ID;
        const secretKey = process.env.ZALO_SECRET_KEY;
        // lay tu database da luu len
        const refreshToken = '';
        const body = {
            'refresh_token': refreshToken,
            'grant_type': 'refresh_token',
            'app_id': appId
        }

        const response = await zaloAPI.getAccessToken(secretKey, body);
        const data = response.data;

        // luu xuong database 
        /*
        data: {
            "access_token": "rusu9g1_D2ZTZBalhd0p9T-5kIgeRqr0gjwiJ9X3H1oFgfrPXWGJ2wokb5g7ALydfQIbR9GXIXoaf89jgrHl8AZ-k7IbJ3O5iSwwLQfoSrFUzueO-mjpUEcieIFB7Lv4uO6G7SOc5bRts-47WMSvUuBArIk4PLivYTAsTxjrJXsHXu5ZinbqFPsCfKxlCdX7-8p-7EaX4c3aZk4Nc2yTGRwwm2og1YzyhOJfSxWaCNkPahvqc34q3PcarKII0I0Fc_BsTkXX4MJfn-0-b5iVLA2in3seNm15sAlL7TK31atRc8mxoZzKVBstf1EN4bHyjBY01RWaS5YTWxm8l1HG0fgslKb7HCI-FwTdDo0",
            "refresh_token": "7A_RofXfadflv_QRfGUSUat1mupqFfL38CxJkuS5aMemzyZgz76M6GQenEhGLvWOPQZFreuWl2rVtyl_xokNUYYhz94nUQ1Jvu7waqjRc5wsi-A_AbRNBilZr_9C9znJmQlMzWDUcdcAgS6yMLd238wNjTOzPknG-kM9XoCTgdA3eiLUXoR2Ws_kl0e0lt_fX7mMUoUB5OkRV2HlB-qHYFO0ErrVuHNy-75pMbZWFxrUMIP2vGf1_sEUAG",
            "expires_in": "90000"
        }
        */    
    } catch (error) {
        console.log(error)
    }
}

module.exports = {sendMessage, refreshAccessToken, getAccessToken, getAllTemplate}