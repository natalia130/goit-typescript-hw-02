import Modal from 'react-modal';
import { Photo } from '../App/App.type';

interface ImageModalProps {
    modalIsOpen: boolean;
    photo: Photo;
    closeModal: () => void;
}

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background: 'transparent',
        border: 'none',
    },
};

if (Modal.defaultStyles.overlay) {
    Modal.defaultStyles.overlay.backgroundColor = "rgba(41, 40, 40, 0.724)";
}
Modal.setAppElement(document.getElementById("root") as HTMLElement);

const ImageModal: React.FC <ImageModalProps> = ({ modalIsOpen, photo, closeModal }) => {
    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Photo Modal"
            shouldCloseOnEsc={true}
            shouldCloseOnOverlayClick={true}
        >
            <img src={photo.urls.regular} alt={photo.alt_description}></img>
        </Modal>
    );
};

export default ImageModal;