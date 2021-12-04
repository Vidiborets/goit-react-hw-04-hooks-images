import {useEffect, useState } from 'react';
import fetchImages from './api/apiservice';
import Searchbar from './components/Searchbar';
import Modal from './components/Modal';
import Container from './components/Container';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Fallback from './components/Loader/Loader';
import Message from './components/Message';

const App = () => {
    const [images, setImages] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const [largeImage, setLargeImage] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!searchQuery) return;
        
        onSearchImage()
        //eslint-disable-next-line
    }, [searchQuery]);

    const onSearchImage = async() => {
        setIsLoading(true);

    try {
      const { hits } = await fetchImages(searchQuery, currentPage);

      setImages(prev => [...prev, ...hits]);

      setCurrentPage(prevPage => prevPage + 1);

      if (currentPage !== 1) {
        scrollOnLoad();
      }
    } catch (error) {
      console.log('Smth wrong with App fetch', error);
      setError({ error });
    } finally {
      setIsLoading(false);
    }
  };

    const onLargeImage = (fullImageUrl) => {
        setLargeImage(fullImageUrl);
        setShowModal(true)
    };

    const toogleModal = () => {
        setShowModal(prevModal => !prevModal);
    };

    const scrollOnLoad = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
        });
    };
       const onShowImage = (query) => {
        setSearchQuery(query)
        setCurrentPage(1)
        setImages([])
    };

    const needToShowLoadMore = images.length > 0 && images.length >= 12;

    return (
        <Container>
            {error && <h1>{error.message}</h1>}
            <Searchbar onSearch={onShowImage} />
            {images.length < 1 &&
                <Message>
                    <h2>Please search your pictures</h2>
                    <p>Search form is emply</p>
                </Message>}
            <ImageGallery images={images} onClick={onLargeImage} />
            {showModal && (
                <Modal onClose={toogleModal}>
                    <img src={largeImage} alt='' />
                </Modal>
            )}
            {needToShowLoadMore && <Button onClick={onSearchImage} />}
            {isLoading && <Fallback />}
        </Container>
    );
};

export default App;







