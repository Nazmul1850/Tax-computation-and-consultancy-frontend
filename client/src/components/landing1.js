
import main from "../assets/images/R.png"
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Landing_1 = () => {
    // const fetchData = async ()=> {
    //     try {
    //       const response = await fetch("/api/v1/");
    //       const data = await response.json();
    //       console.log(data); 
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    // useEffect(()=>{
    //     fetchData();
    // },[]);

    return (
        <div className='container page'>
            {/* info */}
            <div className='info'>
            <h1>
                Tax <span>Calculating</span> app
            </h1>
            <p>
                I'm baby wayfarers hoodie next level taiyaki brooklyn cliche blue
                bottle single-origin coffee chia. Aesthetic post-ironic venmo,
                quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch
                narwhal.
            </p>
            {/* <Link to='/register' className='btn btn-hero'>
                Login/Register
            </Link> */}
            <Link to='/register' className='btn btn-hero'>
                Login/Register
            </Link>
            </div>
            <img src={main} alt='job hunt' className='img main-img' />
        </div>
    );
}
export default Landing_1;