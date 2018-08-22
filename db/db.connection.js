var pg = require("pg");
var connectionURL = process.env.connectionURL || 'postgres://simsab:s1ms4b@localhost:5432/teste';

var client = new pg.Client(connectionURL);

client.connect();

var query = client.query("CREATE TABLE IF NOT EXISTS users(id SERIAL PRIMARY KEY, username VARCHAR(30) NOT NULL UNIQUE, password VARCHAR(30) NOT NULL)");
query.on('end', () => {console.log('deu certo'); client.end});

