import './LoginForm.css'
import  imagePath  from '../../images/cust.png'
import { useEffect, useReducer, useState } from 'react';


const passwordReducer = (state, action) => {
    if(action.type === 'input') {
        return {value: action.val, isValid: action.val.length > 6 };
    }
    return {value: '', isValid: false}
}

const LoginForm = (props) => {

    const [username,setUsername] = useState('');
    
    const [isButtonDisabled,setIsButtonDisabled] = useState(true);
    
    const onChangeUsernameHandler = (event) => {
        setUsername(event.target.value)
    }
    
    const[passwordState, dispactchPassword] = useReducer(passwordReducer,{
        value: '',
        isValid: false
    });

    const onChangePasswordHandler = (event) => {
        dispactchPassword({type:'input', val: event.target.value});
    }



    useEffect(() => {
        if(passwordState.isValid) {
            setIsButtonDisabled(false)
        } else {
            setIsButtonDisabled(true)
        }
    },[passwordState.isValid]);

    return (
        <div className='login-form'>
            <div className='login-form-title'>
            <img src={imagePath} alt='not found' className='login-form-title-img' /><h3>&nbsp;Login</h3>
            </div>
            <div className='login-form-body'>
                <input type='text' placeholder='Enter Username' value={username} onChange={onChangeUsernameHandler}/>
                <input type='password' placeholder='Enter Password' value={passwordState.value} onChange={onChangePasswordHandler}/>
                <button disabled={isButtonDisabled}>Login</button>
            </div>
        </div>
    )
};

export default LoginForm;
