let video = document.getElementById("video");
let audio = document.getElementById("audio");

let playButton = document.getElementById("play");
let pauseButton = document.getElementById("pause");
let stopButton = document.getElementById("stop");
let muteButton = document.getElementById("mute");
let unmuteButton = document.getElementById("unmute");
let volumeControl = document.getElementById("volume");
playButton.addEventListener("click", () => {
  video.play();
  audio.play();
});
pauseButton.addEventListener("click", () => {
  video.pause();
  audio.pause();
});
stopButton.addEventListener("click", () => {
  video.pause();
  audio.pause();
  video.currentTime = 0;
  audio.currentTime = 0;
});
muteButton.addEventListener("click", () => {
  video.muted = true;
  audio.muted = true;
});
unmuteButton.addEventListener("click", () => {
  video.muted = false;
  audio.muted = false;
});
volumeControl.addEventListener("input", () => {
  video.volume = volumeControl.value;
  audio.volume = volumeControl.value;
});
video.addEventListener("loadedmetadata", () => {
  volumeControl.max = video.volume;
});
audio.addEventListener("loadedmetadata", () => {
  volumeControl.max = audio.volume;
});
video.addEventListener("timeupdate", () => {
  console.log(`Video current time: ${video.currentTime}`);
});
audio.addEventListener("timeupdate", () => {
  console.log(`Audio current time: ${audio.currentTime}`);
});
video.addEventListener("ended", () => {
  console.log("Video playback ended.");
});
audio.addEventListener("ended", () => {
  console.log("Audio playback ended.");
});
video.addEventListener("error", (e) => {
  console.error("Video error:", e);
});
audio.addEventListener("error", (e) => {
  console.error("Audio error:", e);
});
