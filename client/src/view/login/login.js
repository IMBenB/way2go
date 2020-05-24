import React, { Component } from 'react';
class Login extends React.Component {
render() {
    return(
        <div>
                    <form >
                        
                        <p>רשום שמך:</p>
                        <input
                         
                            name="yourName" type="text" placeholder="שם" />
                        <p>הכנס סיסמה</p>
                        <input
                        name="phone" type="text" placeholder="טלפון" />
                        <br></br>
                        <button type="submit" value="שלח טופס">שלח טופס</button>
                    </form>

                </div>
    )
}
}
export default Login