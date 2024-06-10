/* eslint-disable no-unused-vars */
const analyzer = {  
  getWordCount: (text) =>{
    console.log(text);
    return text.length;
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCount: (text) =>{
    console.log(text);
    return text.length;
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCountExcludingSpaces: (text) =>{
    console.log(text);
    for (let i = 0; i < text.length; i++) {
      if (/\w/.test(text[i])) {
        console.log (text[i])
      }
    }


    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (text) =>{
    console.log(text);
    return text.length;   
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) =>{
    console.log(text)
    return text.length;
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) =>{
    console.log(text);
    return text.sum;
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};

export default analyzer;
