import logo from "../assets/images/tax-rates.png"
import Wrapper from "../assets/wrappers/Logo";


const Logo = () => {
    return (
        <Wrapper>
            <img src={logo} alt="TaxComputation Consultation " className='logo'></img>
        </Wrapper>
    );
}
export default Logo;