import icons from "url:../../img/icons.svg";
import previewView from "./previewView.js";
import View from "./View.js";

class BookmarksView extends View {
  _parentElement = document.querySelector(".bookmarks__list");
  _errorMessage = "No bookmark yet. Find a nice recipe and bookmark it ;)";
  _mesage = "";

  _generateMarkup() {
    return this._data
      .map((bookmark) => previewView.render(bookmark, false))
      .join("");
  }
}

export default new BookmarksView();
