import './App.css';
import { useState, useEffect } from 'react';
import { fetchPhotosWithQuery } from '../../api/photos-api';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import { Photo, FetchPhotosResponse } from './App.type';

const App: React.FC = () => {

  const [photos, setPhotos] = useState<Photo[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [loadMoreBtn, setLoadMoreBtn] = useState<boolean>(false);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  useEffect(() => {
    if (query == "") {
      return;
    }

    fetchPhotos(query, page);
  }, [query, page]);

  async function fetchPhotos(searchQuery: string, page: number): Promise<void> {
      try {
        setIsError(false);
        setLoadMoreBtn(false);
        setLoading(true);
        const data: FetchPhotosResponse = await fetchPhotosWithQuery(searchQuery, page);
        const totalPages: number = data.total_pages;
        setLoadMoreBtn(totalPages > page);
        setPhotos((prevPhotos) => [...prevPhotos, ...data.results]);
      } catch (error) {
        setIsError(true);
      } finally {
        setLoading(false);
      }
}
  
  const handleSearch = (searchQuery: string): void => {
    setPhotos([]);
    setQuery(searchQuery);
    setPage(1);
  }
  const handleLoadMore = (): void => {
    setPage((prevPage) => prevPage + 1 );
  }

  const openModal = (img: Photo): void => {
    setSelectedPhoto(img);
    setModalIsOpen(true);
  }

  const closeModal = (): void => {
    setModalIsOpen(false);
  }
  
  return (
    <>
      <SearchBar onSearch={handleSearch}></SearchBar>
      {photos.length > 0 && <ImageGallery items={photos} onSelect={openModal}></ImageGallery>}
      {loading && <Loader></Loader>}
      {isError && <ErrorMessage></ErrorMessage>}
      {loadMoreBtn && <LoadMoreBtn handleLoadMore={handleLoadMore}></LoadMoreBtn>}
      {modalIsOpen && selectedPhoto && <ImageModal modalIsOpen={modalIsOpen} closeModal={closeModal} photo={selectedPhoto}></ImageModal>}
    </>
    
  )
}

export default App;
