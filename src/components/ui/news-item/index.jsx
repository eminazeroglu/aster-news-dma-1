import { FiPocket, FiShare } from "react-icons/fi";
import { Link } from "react-router-dom";
import { route } from "../../../utils/helper";

function NewsItem() {
    return (
        <article className="p-[17px] relative rounded-[4px] bg-white shadow-[0px_2px_20px_0px_#0000000A]">
            <Link to={route('view', {slug: 'test'})} className="absolute inset-0 z-10"/>
            <div className="flex gap-x-[17px]">
                <div>
                    <h3 className="text-[17px] font-medium mb-[9px] line-clamp-2 leading-[24px]">Battlegrounds Mobile India iOS release date</h3>
                    <p className="text-[14px] text-[#6A8193] leading-[22px] line-clamp-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ut ratione quo quam nam alias minus reiciendis quas possimus. Facere doloribus autem vitae id deserunt obcaecati tempora possimus odit! Quas?</p>
                </div>
                <figure className="aspect-[1/1] h-[132px] shrink-0 rounded-[4px] overflow-hidden">
                    <img className="size-full object-cover" src="https://www.figma.com/file/KlGkX78te0wPiCAcnfX1at/image/c6e66b140b20a050ebd24f5d88945e5617785125" alt="" />
                </figure>
            </div>

            <div className="pt-[8px] flex items-center justify-between">
                <div className="text-[#9CABB7] text-[12px] flex items-center gap-x-[8px]">
                    <span>The Mint</span>
                    <span className="text-[6px] text-[#ACD9FC]">●</span>
                    <span>15 mins ago</span>
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
                        <span>Read Later</span>
                    </button>
                </div>
            </div>
        </article>
    );
}

export default NewsItem;