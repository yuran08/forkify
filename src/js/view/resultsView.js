import View from './View.js';
import previewView from './previewView.js';

class resultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query! Please try again !';
  _message = '';

  _generateMarkup() {
    return this._data.map(reuslt => previewView.render(reuslt, false)).join('');
  }
}

export default new resultsView();
