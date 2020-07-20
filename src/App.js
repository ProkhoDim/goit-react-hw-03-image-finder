import React, { Component } from 'react';
import Searchbar from './component/Searchbar';
import ImageGallery from './component/ImageGallery';
import apiService from './services/apiServices';
import LoadButton from './component/LoadButton';
import Loader from 'react-loader-spinner';
import Modal from './component/Modal';
import ImageInModal from './component/ImageInModal';

const INIT_STATE = {
  queryPage: 1,
  imageList: [],
};

class App extends Component {
  state = {
    ...INIT_STATE,
    searchMessage: '',
    isLoading: false,
    showModal: false,
    modalImageOptions: {},
    errorMessage: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchMessage !== this.state.searchMessage) this.getImages();
  }

  getImages = () => {
    const { searchMessage, queryPage } = this.state;

    this.setState({ isLoading: true, errorMessage: '' });

    return apiService
      .fetchImages({
        queryString: searchMessage,
        page: queryPage,
      })
      .then(data => {
        data.length > 0
          ? this.setState(prevState => {
              return {
                imageList: [...prevState.imageList, ...data],
                queryPage: prevState.queryPage + 1,
              };
            })
          : this.setState({
              errorMessage: `Nothing's found. Change query and try again. Query: ${searchMessage}`,
              isLoading: false,
            });
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  handleSearchSubmit = message => {
    this.setState({ searchMessage: message, ...INIT_STATE });
  };

  handleLoadMoreClick = () => {
    this.getImages().then(() => {
      window.scrollBy({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    });
  };

  getLargeImage = imageId => {
    this.setState(prevState => ({
      modalImageOptions: {
        ...prevState.imageList.find(({ id }) => id === imageId),
      },
    }));
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const {
      imageList,
      isLoading,
      showModal,
      errorMessage,
      modalImageOptions,
    } = this.state;

    return (
      <div className="App">
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <ImageInModal options={modalImageOptions} />
          </Modal>
        )}

        <Searchbar onSubmit={this.handleSearchSubmit} />

        <ImageGallery imageList={imageList} onImageClick={this.getLargeImage} />

        {!isLoading && errorMessage && (
          <h2>Nothing's found. Change query and try again</h2>
        )}

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
