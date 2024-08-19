import { Link } from "react-router-dom";
import SubscriptionBox from "../ui/subscription";
import Navbar from "./Navbar";
import { route } from "../../utils/helper";

function LeftBlock() {
    return (
        <div>
            <aside className="fixed w-[260px]">
                <div className="py-[20px] px-[30px]">
                    <Link to={route('home')} className="flex items-center gap-[15px]">
                        <img src="/logo.svg" alt="" />
                        <span className="text-primaryDark text-[18px] font-bold">Aster News</span>
                    </Link>
                </div>
                <Navbar />

                <div className="px-[17px]">
                    <SubscriptionBox />
                </div>
            </aside>
        </div>
    );
}

export default LeftBlock;