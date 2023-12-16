import './PageWrapper.css';

// import LoginPageWrapper from './Login/LoginPageWrapper';
import Dashboard from './Dashboard/Dashboard';


const PageWrapper = () => {
    return (
        <div className="page-wrapper">
            {/* <LoginPageWrapper /> */}
            <Dashboard />
        </div>
    )
}

export default PageWrapper;