const client = require('../db/db.connection');

exports.downloadFiles = (req, res, next) => {
    client.query('select * from promethee', (err, results) => {
        res.send(results);
    });
}

const fs = require('fs');
const extension = '.tif';

exports.downloadFile = (req, res, next) => {
    client.query(`select * from promethee where name = '${req.params.name}';`, (err, results) => {
        if(err)
            throw err;
        if(results.rows.length == 1){
            fs.writeFile(req.params.name + extension, results.rows[0].img, (err) => {
                if(err)
                    throw err;
                console.log('file created');
                res.download(req.params.name + extension);
            });
        } else {
            res.send('Image not found');
        }
    });
}