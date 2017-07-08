import suggestions from '../data/suggestions-es';

let pendingSuggestions = suggestions.slice(0);
const suggestionElement = document.querySelector('.suggestion');

function showSuggestion() {
  const suggestionIndex = Math.random() * pendingSuggestions.length;
  const suggestion = pendingSuggestions.splice(suggestionIndex, 1);
  suggestionElement.innerText = suggestion;
}

suggestionElement.addEventListener('click', showSuggestion);
