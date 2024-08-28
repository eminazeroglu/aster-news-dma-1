import { Link } from "react-router-dom";
import SubscriptionBox from "../ui/subscription";
import Navbar from "./Navbar";
import { route } from "../../utils/helper";
import Scrollbar from "../ui/scrollbar";

function LeftBlock() {
    return (
        <div>
            <aside className="fixed w-[260px] hidden lg:block">
                <div className="py-[20px] px-[30px]">
                    <Link to={route('home')} className="flex items-center gap-[15px]">
                        <img src="/logo.svg" alt="" />
                        <span className="text-primaryDark dark:text-white text-[18px] font-bold">Aster News</span>
                    </Link>
                </div>

                <Scrollbar className="h-[calc(100vh_-_75px)]">
                    <div className="pb-10">
                        <Navbar />

                        <div className="px-[17px]">
                            <SubscriptionBox />
                        </div>
                    </div>
                </Scrollbar>
            </aside>
        </div>
    );
}

export default LeftBlock;