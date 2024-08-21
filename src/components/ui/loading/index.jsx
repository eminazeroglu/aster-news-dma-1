import LoadingIcon from "../loading-icon";

function Loading({loading = false, children}) {

    if (!loading)
        return children

    return (
        <div className="text-primary h-[200px] flex items-center justify-center">
            <LoadingIcon/>
        </div>
    );
}

export default Loading;