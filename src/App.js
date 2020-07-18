import React, { Component } from 'react';
import Searchbar from './component/Searchbar';
import ImageGallery from './component/ImageGallery';
import apiService from './services/apiServices';
import LoadButton from './component/LoadButton';
import Loader from 'react-loader-spinner';

class App extends Component {
  state = {
    searchMessage: '',
    queryPage: 1,
    imageList: [],
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchMessage !== this.state.searchMessage) this.getImages();
  }

  getImages = () => {
    const { searchMessage, queryPage } = this.state;

    this.setState({ isLoading: true });

    return apiService
      .fetchImages({
        queryString: searchMessage,
        page: queryPage,
      })
      .then(data => {
        this.setState(prevState => {
          return {
            imageList: [...prevState.imageList, ...data],
            queryPage: prevState.queryPage + 1,
          };
        });
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  handleSearchSubmit = message => {
    this.setState({ searchMessage: message });
  };

  handleLoadMoreClick = e => {
    this.getImages().then(() => {
      window.scrollBy({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    });
  };

  render() {
    const { imageList, isLoading } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery imageList={imageList} />
        {imageList.length > 0 && !isLoading && (
          <LoadButton onCLick={this.handleLoadMoreClick} />
        )}
        {isLoading && (
          <Loader
            type="Circles"
            color="#3f51b5"
            height={80}
            width={80}
            className="Loader"
          />
        )}
      </div>
    );
  }
}

export default App;
