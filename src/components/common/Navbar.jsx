import {useFetchCategories} from "../../hooks/useFetch";
import {useEffect} from "react";
import NavbarNavlink from "./components/NavbarNavlink";
import SkeletonContent from "../ui/skeleton-content";
import useQuery from "hooks/useQuery.jsx";

function Navbar() {

    const [categories, fetchCategories, loading] = useFetchCategories()

    const {category} = useQuery();

    useEffect(() => {
        fetchCategories();
    }, [])

    return (
        <nav className="pr-[17px]">
            <SkeletonContent
                count={10}
                type="category"
                loading={loading}
            >
                {categories.map((menu, index) => (
                    <NavbarNavlink isActive={menu.slug === category} menu={menu} key={index} />
                ))}
            </SkeletonContent>
        </nav>
    );
}

export default Navbar;