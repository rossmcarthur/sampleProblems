// Question 2 -- decodeString(s): Given an encoded string, return its
// corresponding decoded string.
//
// The encoding rule is: k[encoded_string], where the encoded_string inside
// the square brackets is repeated exactly k times. Note: k is guaranteed
// to be a positive integer.
//
// For s = "4[ab]", the output should be decodeString(s) = "abababab"
// For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"

// FRINGE: For s = "4[a3[b2[c]]]", the output should be decodeString(s) = 'abccbccbccabccbccbccabccbccbccabccbccbcc'

function collapseString(string) {
  const num = Number(string[0]);
  const str = string.split("]").join("").split("[").join("").slice(1);

  return str.repeat(num);
}

function decodeString(s) {
  if (parseInt(s[0])) {
    const closed = [];

    for (let i = s.length - 1; i > 0; i--) {
      const el = s[i];

      if (el === ']') {
        closed.push(i);
      } else if (el === '[') {
        const newClosed = closed.pop();
        const subStr = collapseString(s[i - 1] + s.slice(i, newClosed)) + s.slice(newClosed + 1);
        const str = s.slice(0, i - 1) + subStr;

        return decodeString(str);
      }
    }
  }

  return s;
}
