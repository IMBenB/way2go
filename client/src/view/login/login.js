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
    handelSubmit(e) {
        let data = {
            name: e.target.name.value,
            password: e.target.password.value,
            title: e.target.title.value
        }
        e.preventDefault()
        fetch('http://localhost:5050/', {
            method: 'POST',
            body: JSON.stringify({ data }),
            headers: {
                'Content-Type': 'application/json'
            }

        })
            .then(res => res.json())
            .then(response => {
                console.log('%%%%%%%%%%%%%%%5')
                console.log(response.results[0].school_name)
                if (response.isOK){
                    this.setState({
                        isLogin: true
                    })
                }else{
                    this.setState({
                        isLogin: false
                    })
                }
                
            })

        

    }

    render() {
        if (this.state.isLogin) {

            return <Redirect to='/Main' />
        } else {
            return (
                <div>

                    <form onSubmit={this.handelSubmit}>
                        <select name="title" >
                            <option value="school">school</option>
                            <option value="supplayer">supplayer</option>
                            <option value="coordinator">coordinator</option>
                            <option value="loby">loby</option>
                        </select>
                        <p> name</p>
                        <input name='name' type="text" placeholder="name" />
                        <p> password</p>
                        <input name='password' type="text" placeholder="password" />
                        <br></br>
                        <button  >send </button>
                    </form>

                </div>
            )
        }
    }
}
export default Login