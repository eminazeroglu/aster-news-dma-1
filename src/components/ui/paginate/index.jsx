import './index.css'
import classNames from "classnames";
import { usePagination, DOTS } from "../../../hooks/usePagination";
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const Paginate = (props) => {
    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
        className
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
        window.scrollTo(0, 0)
    };

    const handlePageClick = (pageNumber) => {
        window.scrollTo(0, 0)
        onPageChange(pageNumber)
    }

    const onPrevious = () => {
        onPageChange(currentPage - 1);
        window.scrollTo(0, 0)
    };

    let lastPage = paginationRange[paginationRange.length - 1];

    return (
        <div className="flex items-center justify-center">
            <ul
                className={classNames("pagination-container", { [className]: className })}
            >
                <li
                    className={classNames("pagination-item", {
                        disabled: currentPage === 1
                    })}
                    onClick={currentPage === 1 ? () => {} : onPrevious}
                >
                    <div>
                        <FiArrowLeft/>
                    </div>
                </li>
                {paginationRange.map((pageNumber, index) => {
                    if (pageNumber === DOTS) {
                        return <li key={index} className="pagination-item dots">&#8230;</li>;
                    }

                    return (
                        <li
                            key={index}
                            className={classNames("pagination-item", {
                                selected: pageNumber === currentPage
                            })}
                            onClick={() => handlePageClick(pageNumber)}
                        >
                            {pageNumber}
                        </li>
                    );
                })}
                <li
                    className={classNames({
                        'pagination-item': true,
                        'disabled': currentPage >= lastPage
                    })}
                    onClick={currentPage >= lastPage ? () => {} : onNext}
                >
                    <div>
                        <FiArrowRight/>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Paginate;
