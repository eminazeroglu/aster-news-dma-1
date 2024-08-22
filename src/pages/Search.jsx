import { queryParamsToObject } from "../utils/helper";

function Search() {

    const {category} = queryParamsToObject()

    console.log(category);
    

    

    return (
        <div>
            <h1>Search Page | {category}</h1>
        </div>
    );
}

export default Search;