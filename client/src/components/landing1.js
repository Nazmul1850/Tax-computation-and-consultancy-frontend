
import { Link } from "react-router-dom";
import main from "../assets/images/R.png";
import { useAppContext } from '../context/appContext';

const Landing_1 = () => {
    const {token} = useAppContext();
    const loged = token ? true: false;
    const ConditionalWrapper = ({ condition, wrapper, children }) => 
                                 condition ? wrapper(children) : children;
    return (
        <div className='container page'>
            {/* info */}
            <div className='info'>
            <h1>
                Tax <span>Calculating</span> app
            </h1>
            <p>
            During the 19th century the prevalent idea was that taxes should serve mainly to finance the
            government. In earlier times, and again today, governments have utilized taxation for other than
            merely fiscal purposes. 
            </p>
            {/* <Link to='/register' className='btn btn-hero'>
                Login/Register
            </Link> */}
            <ConditionalWrapper
                condition={loged}
                wrapper= {children => <>
                    <Link to='/' className='btn btn-hero'>
                        Dashboard
                    </Link>
                </>}
            >
                <Link to='/register' className='btn btn-hero'>
                    Login/Register
                </Link>
            </ConditionalWrapper>
            </div>
            <img src={main} alt='job hunt' className='img main-img' />
        </div>
    );
}
export default Landing_1;