import useQuery from "../hooks/useQuery";
import {useEffect, useState} from "react";
import {useFetchCategoryBySlug, useFetchNewsAll} from "../hooks/useFetch.jsx";
import Breadcrumb from "components/ui/breadcrumb/index.jsx";
import SkeletonContent from "components/ui/skeleton-content/index.jsx";
import NewsItem from "components/ui/news-item/index.jsx";
import Paginate from "components/ui/paginate/index.jsx";

function Search() {

    const [currentPage, setCurrentPage] = useState(1)
    const query = useQuery()
    const limit = 10;
    const [response, fetchItems, loading] = useFetchNewsAll()
    const [categoryData, fetchCategory] = useFetchCategoryBySlug()
    const initialBreadcrumbItems = [
        {name: 'Axtarış'},
    ]
    const [breadcrumbItems, setBreadcrumbItems] = useState(initialBreadcrumbItems)

    const fetchData = () => {
        fetchItems({
            ...query,
            limit,
            page: currentPage
        });
    }

    useEffect(() => {
        fetchData()
        fetchCategory(query.category)
    }, [query, currentPage]);

    useEffect(() => {
        if (categoryData?.name) {
            const items = [...breadcrumbItems];
            items[1] = {name: categoryData.name}
            setBreadcrumbItems(items)
        } else {
            setBreadcrumbItems(initialBreadcrumbItems)
        }
    }, [categoryData]);

    return (
        <div>
            <Breadcrumb
                items={breadcrumbItems}
            />

            <div className="grid lg:grid-cols-2 grid-cols-1 gap-[20px] mt-5">
                <SkeletonContent loading={loading} type="news" count={limit}>
                    {response?.data?.map((item, index) => (
                        <NewsItem key={index} item={item}/>
                    ))}
                </SkeletonContent>
            </div>

            {response?.total && (
                <Paginate
                    currentPage={currentPage}
                    totalCount={response?.total}
                    pageSize={limit}
                    onPageChange={page => setCurrentPage(page)}
                />
            )}
        </div>
    );
}

export default Search;