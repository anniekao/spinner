const CHARS = ["\r|    ", "\r/    ", "\r-    ", "\r\\    ", "\r|    ", "\r/    ", "\r-    ", "\r\\    ", "\r|     "];
let secs = 100;

for (let i = 0; i < CHARS.length; i++) {
  setTimeout(() => {
    process.stdout.write(CHARS[i] + "      ");
  }, secs);
  secs += 200;
}

// while (rotation !== 7) {
//   for (i = 0; i < CHARS.length; i++) {
//     setTimeout(() => {
//       process.stdout.write(CHARS[i] + "      ");
//     }, secs);
//     secs += 200;
//   }
//   if (i === CHARS.length - 1) {
//     i = 0;
//   }
//   rotation++;
// }
