import NewsItem from "../news-item";

function SkeletonContent({ loading = false, children, count, type }) {

    const array = Array.from(Array(count).keys())

    if (!loading) return children;

    return (
        <>
            {array.map((index) => (
                <div key={index}>
                    {type === 'news' && <NewsItem skeleton={true} />}
                </div>
            ))}
        </>
    );
}

export default SkeletonContent;