import suggestionsES from '../data/suggestions-es';
import suggestionsEN from '../data/suggestions-en';

const pendingSuggestions = [];
const suggestionElement = document.querySelector('.suggestion');

function loadPendingSuggestions(suggestions) {
  Array.prototype.push.apply(pendingSuggestions, suggestions);
}

function getNextSuggestion() {
  const suggestionIndex = Math.random() * pendingSuggestions.length;
  return pendingSuggestions.splice(suggestionIndex, 1);
}

function showSuggestion(suggestion){
  suggestionElement.innerText = suggestion;
}

function showNextSuggestion(event) {
  if (!pendingSuggestions.length) {
    loadPendingSuggestions(suggestionsES);
  }
  const suggestion = getNextSuggestion();
  showSuggestion(suggestion);
}

suggestionElement.addEventListener('click', showNextSuggestion);
