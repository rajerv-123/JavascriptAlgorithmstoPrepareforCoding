function steps(n) {
  for (let row = 1; row <= n; row++) {
    let line = " ";
    for (let column = 1; column <= n; column++) {
      if (column <= row) {
        line += "#";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
}

steps(5);
