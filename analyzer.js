const analyzer = {
  getWordCount: (text) => {
    text = text.trim();
    if (text === '') return 0;
    return text.split(/\s+/).length;

  },

  getCharacterCount: (text) => {
    
    return text.length;
    
  },

  getCharacterCountExcludingSpaces: (text) => {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
      if (text[i]!== ' ') {
  
        count++;
      }
      
      
    }
    return count;
  },

  getAverageWordLength: (text) => {
    console.log(text);
    const words = text.match(/\S+/g) || [];
    const totalLength = words.reduce((total, word) => total + word.length, 0);
    return totalLength / words.length || 0;
  },

  getNumberCount: (text) => {

    let countNumber = 0;
    for (let i = 0; i < (text.length); i++) {
      if (text[i] >= '0' && text[i] <= '9') {

        countNumber++;
      }
    }

    return countNumber;
  },

  getNumberSum: (text) =>{
    console.log(text)
    const numbers = text.split(' ');
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      const number = parseFloat(numbers[i]);
      if (!isNaN(number)) {
        sum += number;
      }

    }

    console.log("Suma números:", sum);
    return sum;
  }

};

export default analyzer