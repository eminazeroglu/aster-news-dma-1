import DefaultHeader from "../components/common/DefaultHeader";

function DefaultLayout({children}) {
    return (
        <div>
            <DefaultHeader/>
            <div>
                {children}
            </div>
        </div>
    );
}

export default DefaultLayout;