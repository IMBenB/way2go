import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false
        }
        this.handelSubmit = this.handelSubmit.bind(this);
    }
    handelSubmit(e){
        e.preventDefault()
this.setState({
    isLogin:true
})
console.log('print')
    }

    render() {
        if (this.state.isLogin) {

            return <Redirect to='/Main' />
        }else{
        return (
            <div>
                <div>11111111</div>
               <div>`${this.state.isLogin}`</div>
               <div>000000000</div>
                <form onClick={this.handelSubmit}>

                    <p> name</p>
                    <input

                         type="text" placeholder="name" />
                    <p> password</p>
                    <input
                       type="text" placeholder="password" />
                    <br></br>
                    <button  >send </button>
                </form>

            </div>
        )}
    }
}
export default Login