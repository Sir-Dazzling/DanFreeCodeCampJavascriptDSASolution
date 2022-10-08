function pairElement(str) {
  return str.split("").map((char) => {
    switch (char) {
      case "A":
        return [...char, "T"];
      case "T":
        return [...char, "A"];
      case "C":
        return [...char, "G"];
      case "G":
        return [...char, "C"];
      default:
        return [];
    }
  });
}

// Using Pair lookup
function pairElement(str) {
  var pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };

  return str.split("").map((x) => [x, pairs[x]]);
}
