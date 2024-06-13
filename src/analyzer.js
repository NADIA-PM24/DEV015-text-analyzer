const analyzer = {
  getWordCount: (text) => {
    text = text.trim();
    if (text === ' ') return 0;
    return text.split(/\s+/).length;

  },

  getCharacterCount: (text) => {
    console.log(text);
    return text.length;
  },

  getCharacterCountExcludingSpaces: (text) => {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
      if (text[i] === ' ') {
        if (text[i] === ' ') {
          count++;
        }
      }
      return count;
    }
  },

  getAverageWordLength: (text) => {
    console.log(text);
    const words = text.match(/\S+/g) || [];
    const totalLength = words.reduce((total, word) => total + word.length, 0);
    return totalLength / words.length || 0;
  },

  getNumberCount: (text) => {

    let countNumber = 0;
    const cadena = text.split('');
    console.log(countNumber + cadena)

    for (let i = 0; i < (cadena.length); i++) {

      if (isNaN(cadena[i])) {
        countNumber = countNumber + 1
      }
    }

    return countNumber;
  },

  getNumberSum: (text) => {
    return text.sum;


  },
};

export default analyzer;
