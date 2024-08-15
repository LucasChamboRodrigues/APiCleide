const express = require('express');
const server = express();

server.get('/usuario', (req,res) =>  {
return res.json({usuario: 'Lucas Chambo'})
});

server.listen(3000, () =>{
    console.log('Servidor está funcionando...');
    
});