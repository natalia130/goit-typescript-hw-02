import css from './ImageCard.module.css';
import { Photo } from '../App/App.type.ts';

interface ImageCardProps {
    data: Photo;
    onSelect: (img: Photo) => void;
}

const ImageCard: React.FC <ImageCardProps> = ({ data, onSelect }) => {

    const onImgClick = () => {
        onSelect(data);
    }

    return (
        <div>
            <img className={css.image} src={data.urls.small} alt={data.alt_description} onClick={onImgClick} />
        </div>
    );
};

export default ImageCard;