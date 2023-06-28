import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const CURRENT_TIME_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe, {
  loop: true,
  fullscreen: true,
  quality: '1080p',
});
const getCurrentTime = function (currentTime) {
  const seconds = currentTime.seconds;
  localStorage.setItem(CURRENT_TIME_KEY, JSON.stringify(seconds));
};

player.on('timeupdate', throttle(getCurrentTime, 1000));

player.setCurrentTime(JSON.parse(localStorage.getItem(CURRENT_TIME_KEY)) || 0);

console.log(time);

//player.on('play', function () {
//  console.log('played the video!');
//});

//player.getVideoTitle().then(function (title) {
//// console.log('title:', title);
//});

//const onPlay = function (data) {
// /data is an object containing properties specific to that event
//};

////player.on('play', onPlay);

//player.on('eventName', function (data) {
// duration: 61.857;
// percent: 0;
// seconds: 0;
//});
//player
// .setCurrentTime(30.456)
// .then(function (seconds) {
//   // seconds = the actual time that the player seeked to
// })
//.catch(function (error) {
// switch (error.name) {
// case 'RangeError':
//  duration: 1000;
// percent: 0;
// seconds: 0;
// break;

// default:
// some other error occurred
//  break;
// }
// });
//
