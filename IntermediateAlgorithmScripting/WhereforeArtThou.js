function whatIsInAName(collection, source) {
  const sourceKeys = Object.keys(source);
  console.log(sourceKeys);

  return collection.filter((obj) => {
    for (let i = 0; i < sourceKeys.length; i++) {
      if (!obj.hasOwnProperty(sourceKeys[i]) || obj[sourceKeys[i]] !== source[sourceKeys[i]]) {
        return false;
      }
    }
    return true;
  });
}

// Using every
function whatIsInAName(collection, source) {
  const sourceKeys = Object.keys(source);

  return collection.filter((obj) => sourceKeys.every((key) => obj.hasOwnProperty(key) && obj[key] === source[key]));
}

// Using map
function whatIsInAName(collection, source) {
  const sourceKeys = Object.keys(source);

  // filter the collection with map and reduce
  return collection.filter((obj) =>
    sourceKeys.map((key) => obj.hasOwnProperty(key) && obj[key] === source[key]).reduce((a, b) => a && b)
  );
}
