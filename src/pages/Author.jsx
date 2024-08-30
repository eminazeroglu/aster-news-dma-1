import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchAuthorBySlug, useFetchNewsByAuthor } from "../hooks/useFetch";
import Alert from "../components/ui/alert";
import Card from "../components/ui/card";
import Loading from "../components/ui/loading"
import Badge from "../components/ui/badge";
import SkeletonContent from "../components/ui/skeleton-content";
import NewsItem from "../components/ui/news-item";
import Paginate from "../components/ui/paginate";

function Author() {

    const [currentPage, setCurrentPage] = useState(1)
    const { slug } = useParams();
    const [author, fetchAuthor, loading] = useFetchAuthorBySlug();
    const [response, fetchNews, newsLoading] = useFetchNewsByAuthor();
    const newsLimit = 10;

    useEffect(() => {
        fetchAuthor(slug)
    }, [slug])

    useEffect(() => {
        if (author?.slug) {
            fetchNews(author.slug, {
                limit: newsLimit,
                page: currentPage
            })
        }
    }, [author, currentPage])


    return (
        <Loading loading={loading}>
            {!author && (
                <Card>
                    <div>
                        <Alert type="danger">
                            Axtardığınız müəllif tapılmadı
                        </Alert>
                    </div>
                </Card>
            )}
            {author && (
                <div>

                    <div className="p-3 flex items-center justify-between bg-white dark:bg-gray-800 shadow-theme rounded-lg">
                        <div className="flex items-center gap-x-3">
                            <figure className="size-[60px] overflow-hidden rounded-full">
                                <img className="size-full object-cover" src={author.photo} alt="" />
                            </figure>
                            <div>
                                <h4 className="font-semibold">{author.fullname}</h4>
                                <p className="text-[#9CABB7] text-[14px]">{author.agency}</p>
                            </div>
                        </div>
                        <div>
                            {response?.total && (
                                <Badge size="lg">
                                    <b>Xəbər sayı:</b> <span>{response?.total}</span>
                                </Badge>
                            )}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-[20px] mt-4">
                        <SkeletonContent loading={newsLoading} type="news" count={newsLimit}>
                            {response?.data?.map((item, index) => (
                                <NewsItem key={index} item={item} />
                            ))}
                        </SkeletonContent>
                    </div>

                    {response?.total && (
                        <Paginate
                            currentPage={currentPage}
                            totalCount={response?.total}
                            pageSize={newsLimit}
                            onPageChange={page => setCurrentPage(page)}
                        />
                    )}
                </div>
            )}
        </Loading>
    );
}

export default Author;