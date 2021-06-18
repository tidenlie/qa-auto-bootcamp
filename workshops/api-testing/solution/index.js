var express = require('express')
var app = express()

app.use(express.json());

const participants = [
  {
    id: 1,
    name: 'Rainers'
  },
  {
    id: 2,
    name: 'Bootcamp Participant 2'
  },
  {
    id: 3,
    name: 'Bootcamp Participant 3'
  }
];

app.get('/', (req, res) => {
  // Ok 200 status code
  res.status(200).send('hello world bootcamp participants');
});

app.get('/api/participants', (req, res) => {
  // Ok 200 status code
  res.status(200).send(participants);
});

app.get('/api/participants/:id', (req, res) => {
  const participant = participants.find(c => c.id === parseInt(req.params.id));
  // Not Found 404 error
  if (!participant) res.status(404).send('No participants were found with the given ID');
  // Ok 200 status code
  res.status(200).send(participant);
});

app.post('/api/participants', (req, res) => {
  if (!req.body.name || req.body.name.length < 3) {
    // Bad Request 400 error
    res.status(400).send('Name is required and should be minimum 3 symbols')
    return;
  }

  const participant = {
    id: participants.length + 1,
    name: req.body.name
  };
  participants.push(participant);
  // Created 201 status code
  res.status(201).send(participant);
});

app.put('/api/participants/:id', (req, res) => {
  const participant = participants.find(c => c.id === parseInt(req.params.id));
  if (!participant) {
    // Not Found 404 error
    res.status(404).send('No participants were found with the given ID');
    return;
  }

  if (!req.body.name || req.body.name.length < 3) {
    // Bad Request 400 error
    res.status(400).send('Name is required and should be minimum 3 symbols')
    return;
  }

  participant.name = req.body.name;
  // Ok 200 status code
  res.status(200).send(participant);
})

app.delete('/api/participants/:id', (req, res) => {
  const participant = participants.find(c => c.id === parseInt(req.params.id));
  if (!participant) {
    // Not Found 404 error
    res.status(404).send("No participants were found with the given ID");
    return;
  }

  const index = participants.indexOf(participant);
  participants.splice(index, 1);

  res.status(200).send(participant);

})

app.listen(8080);
console.log("Running on port 8080");