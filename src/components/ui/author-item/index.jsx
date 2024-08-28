import { route } from "utils/helper.jsx";
import Button from "../button";

function AuthorItem({item = {}}) {
    return (
        <article className="bg-white dark:bg-gray-800 h-full p-[13px] rounded-[4px] text-center">
            <figure className="size-[70px] overflow-hidden mb-[7px] rounded-full inline-block">
                <img className="size-full object-cover" src={item.photo} alt={item.fullname} />
            </figure>
            <div>
                <h5 title={item.fullname} className="text-[14px] line-clamp-1 font-medium">{item.fullname}</h5>
                <p className="text-[#9CABB7] text-[12px]">{item.agency}</p>
            </div>
            <div className="mt-[7px]">
                <Button to={route('author', {slug: item.slug})} block={true} rounded={true}>
                    Ətraflı
                </Button>
            </div>
        </article>
    );
}

export default AuthorItem;