import { FiFeather } from "react-icons/fi";
import AuthorItem from "../components/ui/author-item";
import NewsItem from "../components/ui/news-item";
import Slider from "../components/ui/slider";
import Button from "../components/ui/button";
import {useCallback, useEffect, useState} from "react";
import { useFetchNewsAll, useFetchRandomAuthor } from "../hooks/useFetch";
import SkeletonContent from "../components/ui/skeleton-content";
import Section from "../components/ui/section";
import {Helmet} from "react-helmet";
import Seo from "components/ui/seo/index.jsx";

function Home() {

    const [page, setPage] = useState(1);
    const [allNewsData, setAllNewsData] = useState([]); 
    const newsLimit = 6;
    const allNewsLimit = 10;
    const [{data: newsItems = []}, fetchNewsItems, newsLoading] = useFetchNewsAll();
    const [{data: allNewsItems = []}, fetchAllNewsItems, allNewsLoading] = useFetchNewsAll();
    const [authors, fetchAuthors, authorLoading] = useFetchRandomAuthor();

    const fetchAllNews = useCallback(() => {
        fetchAllNewsItems({
            limit: allNewsLimit,
            page
        });
    }, [])

    const handlePage = () => {
        setPage(p => p+1)
    }

    useEffect(() => {
        fetchAllNews()
    }, [page])

    useEffect(() => {
        const items = [...allNewsData, ...allNewsItems]
        setAllNewsData(items)
    }, [allNewsItems])

    useEffect(() => {
        fetchNewsItems({ limit: newsLimit });
        fetchAuthors(10)
    }, [])

    return (
        <>
            <Seo
                title={'Aster News / Son Xəbərlər'}
            />
            <Section title="Ən çox oxunanlar">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                    <SkeletonContent loading={newsLoading} type="news" count={newsLimit}>
                        {newsItems.map((item, index) => (
                            <NewsItem key={index} item={item} />
                        ))}
                    </SkeletonContent>
                </div>
            </Section>

            <div className="mt-10">
                <Slider
                    items={authors}
                    title="Creators you should follow"
                    titleIcon={<FiFeather />}
                >
                    {(item) => <AuthorItem item={item} />}
                </Slider>
            </div>

            <div className="mt-[44px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                    <SkeletonContent loading={allNewsLoading} type="news" count={allNewsLimit}>
                        {allNewsData.map((item, index) => (
                            <NewsItem key={index} item={item} />
                        ))}
                    </SkeletonContent>
                </div>
                <div className="mt-[44px] flex justify-center">
                    <Button loading={allNewsLoading} onClick={() => handlePage()} size="lg" rounded={true} property="outline-transparent">
                        Daha çox
                    </Button>
                </div>
            </div>
        </>
    );
}

export default Home;