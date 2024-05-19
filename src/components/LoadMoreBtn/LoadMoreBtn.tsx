import css from './LoadMoreBtn.module.css';

interface LoadMoreBtn {
    handleLoadMore: () => void;
}

const LoadMoreBtn: React.FC <LoadMoreBtn> = ({ handleLoadMore }) => {
    return (
        <div>
            <button className={css.more} onClick={handleLoadMore}>Load more</button>
        </div>
    );
};

export default LoadMoreBtn;