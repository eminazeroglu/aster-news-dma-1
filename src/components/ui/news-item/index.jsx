import { FiPocket, FiShare } from "react-icons/fi";
import { Link } from "react-router-dom";
import { route } from "utils/helper.jsx";
import moment from "moment";
import Skeleton from "../skeleton";
import {useModalContext} from "contexts/ModalContext.jsx";

function NewsItem({ item = {}, skeleton = false }) {
    const {handleModal} = useModalContext();

    return (
        <article className="p-[17px] relative rounded-[4px] dark:bg-gray-800 bg-white shadow-[0px_2px_20px_0px_#0000000A]">
            <Link to={route('view', { slug: item?.slug || 'test' })} className="absolute inset-0 z-10" />
            <div className="flex gap-x-[17px]">
                <div className="flex-1">
                    <h3 className="text-[17px] font-medium mb-[9px] line-clamp-2 leading-[24px]">
                        {skeleton ? (
                            <>
                                <Skeleton className="h-[12px] w-full mb-2" />
                                <Skeleton className="h-[12px] w-1/2" />
                            </>
                        ) : item.title}
                    </h3>
                    <p className="text-[14px] text-[#6A8193] leading-[22px] line-clamp-3">
                        {skeleton ? (
                            <>
                                <Skeleton className="h-[10px] w-full mb-2 mt-2" />
                                <Skeleton className="h-[10px] w-full mb-2" />
                                <Skeleton className="h-[10px] w-1/2 mb-2" />
                            </>
                        ) : item.description}
                    </p>
                </div>
                <figure className="aspect-[1/1] h-[132px] shrink-0 rounded-[4px] overflow-hidden">
                    {skeleton ? (
                        <Skeleton className="h-[132px] w-full mb-2 !rounded-[4px]" />
                    ) : <img className="size-full object-cover" src={item.photo} alt={item.title} />}
                </figure>
            </div>

            <div className="pt-[8px] flex items-center justify-between">
                <div className="text-[#9CABB7] text-[12px] flex items-center gap-x-[8px]">
                    <span>{skeleton ? (
                        <Skeleton className="h-[5px] w-[50px]" />
                    ) : item?.author?.agency}</span>
                    {skeleton ? (
                        <Skeleton className="h-[3px] w-[3px]" />
                    ) : (
                        <span className="text-[6px] text-[#ACD9FC]">●</span>
                    )}
                    <span>{skeleton ? (
                        <Skeleton className="h-[5px] w-[50px]" />
                    ) : moment(item?.published_date).format('DD-MM-YYYY HH:mm')}</span>
                </div>

                <div className="flex relative z-20 items-center gap-x-[25px]">
                    {skeleton ? (
                        <Skeleton className="h-[15px] w-[50px]" />
                    ) : (
                        <button onClick={() => handleModal('share', true, {title: item.title, url: item.seo_link})} className="text-[12px] inline-flex items-center gap-x-[8px] dark:text-blue-300 text-[#0768B5]">
                            <span>
                                <FiShare />
                            </span>
                            <span>Share</span>
                        </button>
                    )}
                    {skeleton ? (
                        <Skeleton className="h-[15px] w-[50px]" />
                    ) : (
                        <button className="text-[12px] inline-flex items-center gap-x-[8px] dark:text-blue-300 text-[#0768B5]">
                            <span>
                                <FiPocket />
                            </span>
                            <span>Ətraflı</span>
                        </button>
                    )}
                </div>
            </div>
        </article >
    );
}

export default NewsItem;