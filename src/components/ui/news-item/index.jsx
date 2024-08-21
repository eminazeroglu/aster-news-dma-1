import { FiPocket, FiShare } from "react-icons/fi";
import { Link } from "react-router-dom";
import { route } from "../../../utils/helper";
import moment from "moment";

function NewsItem({item = {}}) {
    return (
        <article className="p-[17px] relative rounded-[4px] bg-white shadow-[0px_2px_20px_0px_#0000000A]">
            <Link to={route('view', {slug: item?.slug || 'test'})} className="absolute inset-0 z-10"/>
            <div className="flex gap-x-[17px]">
                <div>
                    <h3 className="text-[17px] font-medium mb-[9px] line-clamp-2 leading-[24px]">{item.title}</h3>
                    <p className="text-[14px] text-[#6A8193] leading-[22px] line-clamp-3">{item.description}</p>
                </div>
                <figure className="aspect-[1/1] h-[132px] shrink-0 rounded-[4px] overflow-hidden">
                    <img className="size-full object-cover" src={item.photo} alt={item.title} />
                </figure>
            </div>

            <div className="pt-[8px] flex items-center justify-between">
                <div className="text-[#9CABB7] text-[12px] flex items-center gap-x-[8px]">
                    <span>{item?.author?.agency}</span>
                    <span className="text-[6px] text-[#ACD9FC]">●</span>
                    <span>{moment(item?.published_date).format('DD-MM-YYYY HH:mm')}</span>
                </div>

                <div className="flex relative z-20 items-center gap-x-[25px]">
                    <button className="text-[12px] inline-flex items-center gap-x-[8px] text-[#0768B5]">
                        <span>
                            <FiShare/>
                        </span>
                        <span>Share</span>
                    </button>
                    <button className="text-[12px] inline-flex items-center gap-x-[8px] text-[#0768B5]">
                        <span>
                            <FiPocket/>
                        </span>
                        <span>Ətraflı</span>
                    </button>
                </div>
            </div>
        </article>
    );
}

export default NewsItem;