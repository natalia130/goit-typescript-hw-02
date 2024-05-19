import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';
import { Photo } from '../App/App.type';

interface ImageGalleryProps {
    items: Photo[];
    onSelect: (item: Photo) => void;
}

const ImageGallery: React.FC <ImageGalleryProps> = ({ items, onSelect }) => {
    return (
        <ul className={css.gallery}>
            {items.map((item) => {
                return (
                    <li key={item.id}>
                        <ImageCard
                            data={item}
                            onSelect={onSelect}
                        />
                    </li>
                );
            })}
        </ul>
    );
};

export default ImageGallery;