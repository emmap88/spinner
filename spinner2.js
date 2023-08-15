let i = 0;
while (i < 50000) {
  let char = "";
  switch (i % 4) {
  case 0:
    char = "\r-/";
    break;

  case 1:
    char = "\r--";
    break;
    
  case 2:
    char = "\r\\";
    break;
    
  case 3:
    char = "\r|";
    break;
  }

  setTimeout(() => {
    process.stdout.write(char);
  }, 200 * i);
  i += 1;
}