

const express = require('express');
const { access } = require('fs');
const app = express()
const path = require('path');
const {getAccessToken} = require('./service');

app.get("/", (request, response) =>{
    response.sendFile('zaloFile.html', {
        root: path.join(__dirname)
    })
})

// callback request to get authorization code 
app.get("/call-back", async (request, response) =>{
    const {code} = request.query;
    if(code){
        await getAccessToken(code);
        console.log(`save accessToken successfully at ${new Date()}`)
    }
    response.status(200).end()
})

app.listen(3000, () =>{
console.log("App listening on port 3000")
})