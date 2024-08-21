import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'
import classNames from 'classnames';

function Scrollbar({className, children}) {
    return (
        <PerfectScrollbar>
            <div className={classNames([
                className || '',
                {
                    
                }
            ])}>
                {children}
            </div>
        </PerfectScrollbar>
    );
}

export default Scrollbar;