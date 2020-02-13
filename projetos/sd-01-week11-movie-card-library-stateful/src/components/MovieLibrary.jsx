import React, { Component } from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.changeHandlerCheckbox = this.changeHandlerCheckbox.bind(this);
    this.introduceMovie = this.introduceMovie.bind(this);
    this.listFilm = this.listFilm.bind(this);
  }

  changeHandler(event, name) {
    const { value } = event.target;
    this.setState(
      { [name]: value },
    );
  }

  changeHandlerCheckbox(event) {
    this.setState(
      { bookmarkedOnly: event.target.checked },
    );
  }

  introduceMovie(value) {
    const { movies } = this.state;
    this.setState({ movies: [...movies, value] });
  }

  listFilm() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let list = movies;
    if (searchText !== '') {
      list = list.filter(
        (filme) => filme.title.includes(searchText)
        || filme.subtitle.includes(searchText)
        || filme.storyline.includes(searchText),
      );
    }
    if (bookmarkedOnly) {
      list = list.filter((filme) => filme.bookmarked);
    }
    if (selectedGenre !== '') {
      list = list.filter((filme) => filme.genre === selectedGenre);
    }
    return list;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={(event) => this.changeHandler(event, 'searchText')}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={(event) => this.changeHandlerCheckbox(event)}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={(event) => this.changeHandler(event, 'selectedGenre')}
        />
        <MovieList movies={this.listFilm()} />
        <AddMovie onClick={this.introduceMovie} />
      </div>
    );
  }
}

export default MovieLibrary;
