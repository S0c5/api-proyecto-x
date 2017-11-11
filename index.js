const express = require('express');
const app     = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/login', (req, res) => {
    let {email, password} = req.body;
    
    if(email === 'pepe@gmail.com' && password === '1234'){
        res.status(200).json({message: 'successfull'})
    }else{
        res.status(401).json({message: 'invalid credentials'})
    }
    
});


if(require.main == module){
    app.listen(process.env.PORT || 3000, (err) => {
        console.log('[+] app listening at port 3000');
    });
}else {
    module.exports = app;
}



