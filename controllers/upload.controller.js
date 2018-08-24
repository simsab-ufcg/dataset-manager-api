var EasyFtp = require ("easy-ftp");
var ftp = new EasyFtp();

exports.updateFiles = (req, res, next) => {
    res.status(200).send('Hello world!');
}

exports.connectFtp = (req, res, next) => {
    var config = req.body;
    ftp.connect(config);

    ftp.upload("opa.txt", "/home/filipetrm/Desktop/novo_nome.txt", function(err){
        if (err) throw err;
        ftp.close();
    });

    res.status(201).send('deu certo');
    
}
