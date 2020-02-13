import React, { Component } from 'react';

class SearchBar extends Component {
  addTopForm() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label htmlFor="include-the-text">
        Inclui o texto
        <input
          id="include-the-text"
          type="text"
          value={searchText}
          onChange={onSearchTextChange}
        />
      </label>
    );
  }

  showFavorites() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <label htmlFor="include-the-favorities">
        Mostrar somente favoritos
        <input
          id="include-the-favorities"
          type="checkbox"
          checked={bookmarkedOnly}
          onChange={onBookmarkedChange}
        />
      </label>
    );
  }

  render() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form>
        {this.addTopForm()}
        {this.showFavorites()}
        <label htmlFor="include-genre">
          Filtrar por gênero
          <select id="include-genre" value={selectedGenre} onChange={onSelectedGenreChange}>
            <option value="">Todos</option>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;
