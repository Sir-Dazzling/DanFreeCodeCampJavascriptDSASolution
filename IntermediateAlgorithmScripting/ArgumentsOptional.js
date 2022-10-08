function addTogether(...args) {
  console.log("hey ", args);

  if (!args.every((value) => typeof value === "number")) {
    return undefined;
  }

  return args.length > 1 ? args.reduce((prev, current) => prev + current) : (num) => num + args[0];
}
