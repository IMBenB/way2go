import React, { Component } from 'react';
import {  Link } from 'react-router-dom';
class Orders extends React.Component {
    render() {
        return (
            <Link to="/orderForm"><button  > עבור לטופס הזמנה  </button></Link>
        )
    }

}
export default Orders