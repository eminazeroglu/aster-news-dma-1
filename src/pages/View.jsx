import { useParams } from "react-router-dom";

function View() {

    const {slug} = useParams();

    console.log(slug);
    

    return (  
        <div>
            <h1>View Page</h1>
        </div>
    );
}

export default View;