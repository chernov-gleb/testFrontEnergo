const express = require('express');
const fs = require('fs')
const path = require('path');
const csv = require('csv-parser');
const emplRouter = require('./routes/Employee');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const port = process.env.PORT || 3000;
const app = express();
const publicPath = path.join(__dirname, 'public');

app.use('/api/Employee', emplRouter)
app.use(express.static(publicPath));
app.listen(port, () => {
    console.log('server has been started on port: ' + port)
});


/*
app.get('/Employ', (req,res) => {
    res.json(records1)
    console.log('...запрос');
})


const csvWriter = createCsvWriter({
    path: 'dataBase.csv',
    header: [
        {id: 'firstName', title: 'firstName'},
        {id: 'lastName', title: 'lastName'},
        {id: 'fatherName', title: 'fatherName'},
        {id: 'pos', title: 'pos'},
        {id: 'bDate', title: 'bDate'},
        {id: 'tel', title: 'tel'},
        {id: 'mail', title: 'mail'},
    ]
});

csvWriter.writeRecords(records1)       // returns a promise
    .then(() => {
        console.log('...Done1');
    });
csvWriter.writeRecords(records2)       // returns a promise
    .then(() => {
        console.log('...Done2');
    });
var d = fs.createReadStream('dataBase.csv')
fs.createReadStream('dataBase.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
        return(results);
    });
console.log(d)*/
