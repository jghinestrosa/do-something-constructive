import suggestionsES from '../data/suggestions-es';
import suggestionsEN from '../data/suggestions-en';

if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(function(registration) {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }).catch(function(err) {
      console.log('ServiceWorker registration failed: ', err);
    });
}

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
    loadPendingSuggestions(suggestionsEN);
  }
  const suggestion = getNextSuggestion();
  showSuggestion(suggestion);
}

document.body.addEventListener('click', showNextSuggestion);
