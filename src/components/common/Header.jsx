import {FiSearch} from "react-icons/fi";
import menus from "../../router/menus";
import {Link} from "react-router-dom";
import {route} from "utils/helper.jsx";
import {useEffect, useState} from "react";
import {useFetchNewsAll} from "hooks/useFetch.jsx";
import Scrollbar from "components/ui/scrollbar/index.jsx";
import {useClickAway, useDebounce} from "@uidotdev/usehooks";
import LoadingIcon from "components/ui/loading-icon/index.jsx";

function Header() {

    const [text, setText] = useState('')
    const [{data: items = []}, fetchItems, loading] = useFetchNewsAll();
    const [searchResult, setSearchResult] = useState([])
    const debouncedSearchTerm = useDebounce(text, 300);

    useEffect(() => {
        if (text.trim()) {
            fetchItems({
                title: text,
                limit: 7
            })
        } else {
            setSearchResult([])
        }
    }, [debouncedSearchTerm]);

    useEffect(() => {
        if (items.length > 0) {
            setSearchResult(items)
        }
    }, [items])

    return (
        <header className="py-[15px] flex items-center justify-between">
            <div className="relative">
                <div className="bg-[#ECF5F8] flex items-center w-[400px]">
                    <input onChange={e => setText(e.target.value)} value={text} type="text"
                           placeholder="Search for news.."
                           className="bg-transparent h-[46px] px-[8px] flex-1 outline-none placeholder:text-[#A7B9C4]"/>
                    <span className="inline-flex size-[46px] items-center justify-center">
                        {loading ? <LoadingIcon size={16}/> : <FiSearch/>}
                    </span>
                </div>
                {searchResult.length > 0 && (
                    <div className="absolute top-full bg-white border border-gray-200 left-0 right-0 z-[999]">
                        <Scrollbar>
                            <ul className="divide-y max-h-[350px]">
                                {searchResult.map((item, index) => (
                                    <li key={index} className="p-2 flex items-center relative gap-x-2 text-[14px]">
                                        <Link to={'/'} className="absolute inset-0 z-10"/>
                                        <figure className="size-[40px] shrink-0 rounded-full overflow-hidden">
                                            <img className="size-full object-cover" src={item.photo} alt=""/>
                                        </figure>
                                        <div>
                                            <span>{item.title}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Scrollbar>
                    </div>
                )}
            </div>
            <div className="flex">
                {menus.map((menu, index) => (
                    <Link to={route(menu.route)} key={index} className="inline-flex text-[14px] whitespace-nowrap gap-x-2 h-[46px] px-2 items-center">
                        <span>{menu.icon}</span>
                        <span>{menu.name}</span>
                    </Link>
                ))}
            </div>
        </header>
    );
}

export default Header;