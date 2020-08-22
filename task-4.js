function formatString(string, maxLength = 40) {
  // Write code under this line
  const long = string.split("");
  if (long.length < maxLength) {
    string = maxLength;
    return long.join("");
  } else if ((long.length = maxLength)) {
    return long.join("").slice(0, 40) + "...";
    string > maxLength;
  }
  return long.join("");
}

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// 'Curabitur ligula sapien, tincidunt non.'

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// 'Vestibulum facilisis, purus nec pulvinar...'

console.log(
  formatString("Vestibulum facilisis, purus nec pulvinar iaculis.", 30)
);
