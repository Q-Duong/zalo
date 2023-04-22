const axios= require('axios');

const zaloAPI = {
    sendMessage: (accessToken, body) => axios.post(
        `${process.env.ZALO_API}/message/template`,
        {
            headers: {
                'access_token': accessToken
            }
        },
        body
    ),
    
    getAccessToken: (secretKey, body) => axios.post(
        `${process.env.AUTH_ZALO_API}/v4/oa/access_token`,
        {
            headers: {
                'secret_key': secretKey
            }
        },
        body
    ),
    getAllTemplate: (accessToken, queryParams) => axios.get(
        `${process.env.AUTH_ZALO_API}/template/all`,
        {
            params: queryParams,
            headers: {
                'access_token': accessToken
            }
        },
    )
}

module.exports = { zaloAPI };