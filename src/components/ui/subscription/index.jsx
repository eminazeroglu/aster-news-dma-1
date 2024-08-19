import { FiGift } from "react-icons/fi";
import Button from "../button";

function SubscriptionBox() {

    const handelClick = () => {
        alert('Click');
    }

    return (
        <div className="p-[20px] rounded-[4px] bg-primary text-white">
            <div className="flex whitespace-nowrap items-center gap-x-[15px]">
                <span className="text-[24px]"><FiGift /></span>
                <span className="text-[15px]">Subscribe to Premium</span>
            </div>
            <div className="mt-[13px] flex items-center justify-between">
                <div className="text-[30px] font-bold">
                    $8<small className="text-[15px] font-normal">/m</small>
                </div>

                <Button onClick={handelClick} property="primaryDark" size="lg" rounded={true}>
                    Upgrade
                </Button>
            </div>
        </div>
    );
}

export default SubscriptionBox;