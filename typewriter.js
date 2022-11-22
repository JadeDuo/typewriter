
let sentence = "hello there from lighthouse labs";
let time = 0;
sentence += "\n";
for (let i = 0; i < sentence.length; i++) {
  let char = sentence[i];
  setTimeout(() => process.stdout.write(char), time);
  time += 50;
}