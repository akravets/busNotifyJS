const Recorder = require('node-rtsp-recorder').Recorder
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/camera', (req, res) => {
    let frequency = req.body.cameraFetchFrequency;
    let file = process.cwd() + "/resources/captures/bus.jpg";
    res.sendFile(file);
// var rec = new Recorder({
//     url: 'rtsp://root:azr26p@192.168.1.29:554/stream1',
//     folder: process.cwd() + '/resources/captures',
//     name: 'cam1',
//     type: 'image',
// })

//     rec.captureImage(() => {
//     console.log('Image Captured')
// })

});

app.listen(3001);