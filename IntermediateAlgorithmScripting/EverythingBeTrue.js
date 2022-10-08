function truthCheck(collection, pre) {
  return collection.every((element) => element[pre]);
}
