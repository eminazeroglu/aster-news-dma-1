import { FiFeather } from "react-icons/fi";
import AuthorItem from "../components/ui/author-item";
import NewsItem from "../components/ui/news-item";
import Slider from "../components/ui/slider";
import Button from "../components/ui/button";
import { API } from "../utils/api";
import { useEffect } from "react";
import { useFetchNewsAll, useFetchRandomAuthor } from "../hooks/useFetch";
import SkeletonContent from "../components/ui/skeleton-content";
import Section from "../components/ui/section";

function Home() {

    const newsLimit = 6;
    const [newsItems, fetchNewsItems, newsLoading] = useFetchNewsAll();
    const [authors, fetchAuthors, authorLoading] = useFetchRandomAuthor();

    useEffect(() => {
        fetchNewsItems({ limit: newsLimit });
        fetchAuthors(10)
    }, [])

    return (
        <>
            <Section title="Ən çox oxunanlar">
                <div className="grid grid-cols-2 gap-[20px]">
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
                <div className="grid grid-cols-2 gap-[20px]">
                    <NewsItem />
                    <NewsItem />
                    <NewsItem />
                    <NewsItem />
                </div>
                <div className="mt-[44px] flex justify-center">
                    <Button size="lg" rounded={true} property="outline-transparent">
                        Show More
                    </Button>
                </div>
            </div>
        </>
    );
}

export default Home;