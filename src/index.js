import analyzer from './analyzer.js';
console.log(analyzer)
  
const textarea=document.querySelector("textarea");
textarea.addEventListener("input",function() {

  const palabras = document.querySelector('li[data-testid="word-count"]');
  const caracteres = document.querySelector('li[data-testid="character-count"]');
  const espacios = document.querySelector('li[data-testid="no-spaces-count"]');
  const numeros = document.querySelector('li[data-testid="number-count"]');
  const suma = document.querySelector('li[data-testid="number-sum"]');
  const longitud = document.querySelector('li[data-testid="average-word-length"]');

  const characterCount = analyzer.getCharacterCount(textarea.value);
  caracteres.textContent = "caracteres" + characterCount
  
  const CharacterCountExcludingSpaces = analyzer.getCharacterCountExcludingSpaces(textarea.value)
  espacios.textContent = "espacios" + CharacterCountExcludingSpaces


});