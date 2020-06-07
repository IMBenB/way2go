import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false
        }
        this.handelSubmit = this.handelSubmit.bind(this);
        // fetch('http://localhost:5050/', {
        //     method: 'POST',
        //     body: JSON.stringify(),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }

        // })
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
                // console.log('%%%%%%%%%%%%%%%5')
                // console.log(response.results[0].school_name)
                if (response.isOK){
                    this.setState({
                        isLogin: true
                    })
                    console.log('loggeed in')
                    this.props.changeSchoolDetails(response.results)
                }else{
                    console.log('password incorrect')
                    this.setState({
                        isLogin: false
                    })
                    alert('שם משתמש או סיסמא שגויים')
                }
                console.log(response.results)
                // console.log(this.props)
               
            })

        

    }

    render() {
        if (this.state.isLogin) {

            return <Redirect to='/Orders' />
        } else {
            return (
                <div>

                    <form onSubmit={this.handelSubmit}>
                        <select name="title" >
                            <option value="school">school</option>
                            <option value="supplier">supplier</option>
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
const mapStateToProps = (state) => {
    return {
      schoolCityR: state.schoolCityR

}
}
const dispatchToProps = (dispatch) => {
    return {
        changeSchoolDetails: (newSchoolDetails) => { dispatch({ type: 'CHANGE_DETAILS', newSchoolDetails: newSchoolDetails }) }
    }
}


export default connect(mapStateToProps,dispatchToProps)(Login)