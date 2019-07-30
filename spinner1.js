// const CHARS = ['|', '/', '-', '\\'];
// let secs = 100;
// let i = 0;
// let j = 0

// while (i !== 8) {
//   for (j = 0; j < CHARS.length; j++) {
//     setTimeout(() => {
//       process.stdout.write("\r" + CHARS[0] + "    ");
//     }, secs);
//   }
//   if (j === CHARS.length) {
//     j = 0;
//   };
//   secs += 200;
//   i++;
// }



setTimeout(() => {
  process.stdout.write("\r/    ");
}, 300);

setTimeout(() => {
  process.stdout.write("\r-    ");
}, 500);

setTimeout(() => {
  process.stdout.write("\r\\    ");
}, 700);

setTimeout(() => {
  process.stdout.write("\r|    ");
}, 900);

setTimeout(() => {
  process.stdout.write("\r/    ");
}, 1100);

setTimeout(() => {
  process.stdout.write("\r-    ");
}, 1300);

setTimeout(() => {
  process.stdout.write("\r\\    ");
}, 1500);

setTimeout(() => {
  process.stdout.write("\r|    ");
}, 1700);