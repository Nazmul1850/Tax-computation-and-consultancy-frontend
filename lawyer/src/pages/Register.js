
import {useState, useEffect} from 'react'
import {Logo,FormRow,Alert} from '../components'
import Wrapper from '../assets/wrappers/RegisterPage';
import { useAppContext } from '../context/appContext';

import { useNavigate } from 'react-router-dom';

const initialState = {
    name:'',
    email:'',
    password:'',
    isMember:true
}

const Register = () => {
    const [values, setValues] = useState(initialState);
    const navigate = useNavigate();
    const {lawyer, isLoading, showAlert, displayAlert, loginLawyer} = useAppContext();


    const handleChange = (e) => {
        setValues({...values, [e.target.name]:e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const { name, email, password, isMember } = values
        if (!email || !password || (!isMember && !name)) {
            displayAlert()
            return
        }
        const currentUser = {name, email, password}
        console.log(currentUser);
        loginLawyer(currentUser);

    }
    useEffect(()=>{
        if(lawyer) {
            setTimeout(()=>{
                navigate('/')
            },1000)
        }
    },[lawyer,navigate]);
    
      
    return (
        <Wrapper className='full-page'>
            <form className='form' onSubmit={onSubmit}>
                <Logo/>
                <div className='title'> T <span>C</span> <small>&</small> C</div>
                <h3>{values.isMember ? 'Login' : 'Register'}</h3>
                {showAlert && <Alert />}
                
                {!values.isMember && (
                    <FormRow
                        type='text'
                        name='name'
                        value={values.name}
                        handleChange={handleChange}
                    />
                )}
                <FormRow
                    type='email'
                    name='email'
                    value={values.email}
                    handleChange={handleChange}
                />
                <FormRow
                    type='password'
                    name='password'
                    value={values.password}
                    handleChange={handleChange}
                />

                <button type='submit' className='btn btn-block' disabled={isLoading}>
                submit
                </button>
                <p>
                    Please Log in as a Lawyer   
                </p>
            </form>
        </Wrapper>
    );
}

export default Register;