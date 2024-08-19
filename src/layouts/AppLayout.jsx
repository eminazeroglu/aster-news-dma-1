import LeftBlock from "../components/common/LeftBlock";
import Header from "../components/common/Header";
import RightBlock from "../components/common/RightBlock";
import Footer from "../components/common/Footer";

function AppLayout({ children }) {
    return (
        <div className="grid h-full grid-cols-[260px_calc(100%_-_669px)_285px] gap-[45px]">
            <LeftBlock />
            <div className="flex flex-col">
                <Header />
                <div className="flex-1">
                    {children}
                </div>
                <Footer />
            </div>
            <RightBlock />
        </div>
    );
}

export default AppLayout;