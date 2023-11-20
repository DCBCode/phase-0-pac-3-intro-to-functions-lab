function shout(string) {
  // todo
}
function shout(string) {
  return string;
}
"Hello!".toUpperCase(); // 'HELLO!'
function shout(string) {
  return string.toUpperCase();
}
function whisper(string) {
  return string.toLowerCase();
}
console.log(whisper("Hello World")); // Output: hello world
function logShout(string) {
  console.log(string.toUpperCase());
}
logShout("hello world"); // Output: HELLO WORLD
function logWhisper(string) {
  console.log(string.toLowerCase());
}
logWhisper("HELLO WORLD"); // Output: hello world
function sayHiToHeadphonedRoommate(string) {
  if (string === string.toLowerCase()) {
    return "I can't hear you!";
  } else if (string === string.toUpperCase()) {
    return "YES INDEED!";
  } else if (string === "Let's have dinner together!") {
    return "I would love to!";
  }
}console.log(sayHiToHeadphonedRoommate("hello")); // Output: I can't hear you!
console.log(sayHiToHeadphonedRoommate("HELLO")); // Output: YES INDEED!
console.log(sayHiToHeadphonedRoommate("Let's have dinner together!")); // Output: I would love to!