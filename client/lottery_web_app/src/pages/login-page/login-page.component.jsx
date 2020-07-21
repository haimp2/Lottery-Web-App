import React from 'react';
import './login-page.styles.css';

const LoginPage = (props) => {


    let name = '';

    const onNameChange = (event)=> {
        name = event.target.value;
    }

    const onSumbit = ()=>{
        localStorage.setItem('name', name);
    }


    return (

        <div class={`lg-container ${props.display}`}>
            <div class="slider">
                <div class="bg"></div>
                <div class="form">
                    <form>
                        <div class="user-box">
                            <input type="text" name="username" required="" class="input" onChange={onNameChange} />
                            <label class="label">User Name:</label>
                        </div>
                        <br /><br />
                        <button type="submit" class="sendButton" onClick={onSumbit} >Login</button>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default LoginPage;