// Exercise 1 : Merge Words


function mergeWords(string) {
    if (string === undefined) {
      return '';
    } else {
      return function(nextString) {
        if (nextString === undefined) {
          return string;
        } else {
          return mergeWords(string + ' ' + nextString);
        }
      };
    }
  }

  
  mergeWords('There')('is')('no')('spoon.')(); // Returns: 'There is no spoon.'
