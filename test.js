var ffmpeg = require('fluent-ffmpeg');

ffmpeg.ffprobe(`${__dirname}/index.html`, (err, data) => {
  if (err) {
    console.log('ooops!');
    return;
  }
  console.log(data);
});
