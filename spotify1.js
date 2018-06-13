// Question 1 -- sortByStrings(s,t): Sort the letters in the string s
// by the order they occur in the string t. You can assume t will not
// have repetitive characters. For s = "weather" and t = "therapyw",
// the output should be sortByString(s, t) = "theeraw". For s = "good"
// and t = "odg", the output should be sortByString(s, t) = "oodg".

function countLetters(string) {
  let count = {};

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    if (count[char]) {
      count[char] += 1;
    } else {
      count[char] = 1;
    }
  }

  return count;
}

function sortByStrings(s, t) {
  let sorted = '';
  let count = countLetters(s);

  for (let i = 0; i < t.length; i++) {
    const char = t[i];

    sorted += char.repeat(count[char]);
  }

  return sorted;
}
