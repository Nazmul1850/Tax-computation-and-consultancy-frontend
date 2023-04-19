import logo from "../assets/images/tax-rates.png"
import Wrapper from "../assets/wrappers/Logo";
import { Link } from "react-router-dom";


const Logo = () => {
    return (
        <Wrapper>
                <Link to='/home'>
                    <img src={logo} alt="TaxComputation Consultation " className='logo' />
                </Link>
        </Wrapper>
    );
}
export default Logo;