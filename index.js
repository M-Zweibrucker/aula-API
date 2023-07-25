const express = require('express');
const axios = require('axios');

const app = express();

app.listen('3000');

//metodo GET
//app.route('/').get((req, res) => res.send("hello world!"));

//metodo POST
// app.use(express.json())
// app.route('/').post((req, res) => res.send(req.body));

//metodo PUT
// app.use(express.json())
// let author = 'Matheus';
// app.route('/').get((req, res) => res.send(author));
// app.route('/').put((req, res) => {
//     author = req.body.author;
//     res.send(author)
// })

//metodo DELETE
// app.route('/:identificador').delete((req, res) => {
//     res.send(req.params.identificador)
// })


//body params
// app.use(express.json());
// app.route('/').post( (req, res) => {
//     res.send(req.body);
// })

//route params
// app.route('/:nome').get( (req, res) => res.send(req.params.nome ))

//query params
// app.route('/').get( (req, res) => res.send(req.query));


//consumindo uma api com axios
// app.route('/').get( async (req, res) => {
//     try {
//     const user = await axios.get('https://api.github.com/users/M-Zweibrucker')
//     //res.send(user.data);
//     res.send(`<img src="${user.data.avatar_url}"/>`)

//     } catch (e){
//        console.error(e);
//     }
// })