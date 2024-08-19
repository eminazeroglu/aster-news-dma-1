import { FiFeather } from "react-icons/fi";
import AuthorItem from "../components/ui/author-item";
import NewsItem from "../components/ui/news-item";
import Slider from "../components/ui/slider";
import Button from "../components/ui/button";

function Home() {

    const users = [1, 2, 3, 4, 5, 6, 7, 8]

    return (
        <>
            <div className="grid grid-cols-2 gap-[20px]">
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
            </div>

            <div className="mt-10">
                <Slider
                    items={users}
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