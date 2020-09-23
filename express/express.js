const express = require('express');
const app = express();
const fs = require('fs')
// const formidable = require('formidable');
app.use(express.raw());


app.post('/', (req, res) => {
    // new formidable.IncomingForm().parse(req, (err, fields, files) => {
    //     if (err) {
    //         console.error('Error', err)
    //         throw err
    //     }
    //     // console.log('Fields', fields)
    //     // console.log('Files', files)
    //     for (const file of Object.entries(files)) {
    //         console.log(file)
    //     }
    // })

    console.log(req.body);
    fs.writeFileSync('./image.png', req.body);

    res.send('Got it');
})

const port = 3000;


app.listen(port, '0.0.0.0', () => console.log(`Hello world app listening on port ${port}!`))