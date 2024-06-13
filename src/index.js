import analyzer from './analyzer.js';
  
const textarea=document.querySelector("textarea");
const palabras = document.querySelector('li[data-testid="word-count"]');
const letras = document.querySelector('li[data-testid="character-count"]');
const espacios = document.querySelector('li[data-testid="no-spaces-count"]');
const numeros = document.querySelector('li[data-testid="number-count"]');
const suma = document.querySelector('li[data-testid="number-sum"]');
const longitud = document.querySelector('li[data-testid="average-word-length"]');
textarea.addEventListener("input",function() {

  const wordCount = analyzer.getWordCount(textarea.value);
  palabras.textContent = "Palabras: " + wordCount; 
  
  const characterCount = analyzer.getCharacterCount(textarea.value);
  letras.textContent = "letras" + characterCount;
  
  const characterCountExcludingSpaces = analyzer.getCharacterCountExcludingSpaces(textarea.value);
  espacios.textContent = "espacios" + characterCountExcludingSpaces;

  const numberCount = analyzer.getNumberCount(textarea.value);
  numeros.textContent = "numeros" + numberCount;

  const numberSum = analyzer.getNumberSum(textarea);
  suma.textContent = "suma" + numberSum;

  const averageWordLength = analyzer.getAverageWordLength(textarea.value);
  longitud.textContent = "longitud" + averageWordLength;

}); 

const resetbutton = document.getElementById("reset-button");
resetbutton.addEventListener("click",() => {
  textarea.value = '';

});