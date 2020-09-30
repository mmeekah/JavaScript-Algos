// Create a function that returns a boolean whether the string is a 
// strict palindrome. For "a x a" or "racecar", return true. 
// Do not ignore spaces, punctuation and capitalization:
//  if given "Dud" or "oho!", return false.


function isPalindrome(str) {
    var len = Math.floor(str.length / 2);
    for (var i = 0; i < len; i++)
      if (str[i] !== str[str.length - i - 1])
        return false;
    return true;
  }

console.log(isPalindrome("oho!"))