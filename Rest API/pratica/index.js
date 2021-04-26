const express = require('express');
const server = express();
server.use(express.json());

const usuarios = [];

server.post('/usuarios', (req, res) => {
  const nome = req.body.nome;
  const idade = req.body.idade;
  const id = usuarios.length + 1;
  const cursos = [];

  usuarios.push({
    id,
    nome,
    idade,
    cursos,
  });

  return res.status(201).json(usuarios);
});

server.get('/usuarios', (req, res) => {
  return res.status(200).json(usuarios);
});

server.put('/usuarios/:id', (req, res) => {
  const id = req.params.id;
  const idade = req.body.idade;

  usuarios[id - 1].idade = idade;

  return res.status(201).json(usuarios);
});

server.delete('/usuarios/:id', (req, res) => {
  const id = req.params.id;

  let indice = -1;

  usuarios.map((usuario, index) => {
    if (usuario.id === Number(id)) {
      indice = index;
    }
    return usuario;
  });

  if (indice === -1) {
    return res.status(400).json({ error: 'Não existe nenhum usuario com esse identificador! ' });
  }

  usuarios.splice(indice, 1);

  return res.status(200).send();
});

/*
    Listar os cursos 
*/
server.get('/usuarios/:id/cursos', (req, res) => {
  // TODO implementar
});

/*
    Incluir um curso 
*/
server.post('/usuarios/:id', (req, res) => {
  // TODO implementar
});

/*
    Alterar um curso 
*/
server.put('/usuarios/:id', (req, res) => {
  // TODO implementar
});

/*
    Deletar um curso 
*/
server.delete('/usuarios/:id', (req, res) => {
  // TODO implementar
});

server.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000/ ');
});
