process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();

  // process.stdout.write('You typed: ' + cmd);
  process.stdout.write(__dirname);
  process.stdout.write("\nprompt > ");
});
