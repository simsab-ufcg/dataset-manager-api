var pg = require("pg");
var connectionURL = process.env.connectionURL || 'postgres://postgres:postgres@localhost:5432/teste';

var client = new pg.Client(connectionURL);

client.connect();

module.exports = client;

var query = client.query("CREATE TABLE IF NOT EXISTS promethee (name text, description text, created_at timestamp, img bytea)", (err, result) => {
    console.log('err', err, 'result', result);
});
// query.on('end', () => {console.log('deu certo'); client.end});

