/* 
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

*/

function translatePigLatin(str) {
  const consonantRegex = /^[^aeiou]+/;
  const consonants = str.match(consonantRegex);
  return consonants ? str.replace(consonants, "").concat(consonants + "ay") : str + "way";
}
