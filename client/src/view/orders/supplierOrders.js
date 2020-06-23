import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './orderForm.css';




class Supplier extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            isRefresh: false
        }


        //     this.refresh = this.refresh.bind(this);


        // }
        //     refresh = (e) => {
        //     e.preventDefault();

        let schoolName = this.props.schoolName

        fetch('http://localhost:5050/getOrders', {
            method: 'POST',
            body: JSON.stringify(),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.isOK) {
                    this.setState({
                        data: data.doc


                    })
                } else {
                    console.dir(data.error)
                }

                console.log('from server')

                this.setState({
                    orders: data.results,
                    isRefresh: true
                })
                console.log(this.state.orders)




            }).catch(err => {
                console.error(err)
            })


    }

    render() {
        return (
            <div>
                {/* {this.state.orders.map((order,index)=>{
                    return <div>{order}</div>
                }
                )} */}

                {(this.state.isRefresh) ?


                    <div>  
                        {/* <button onClick={this.refresh}>רענון</button> */}
                        <Link to="/orderForm"><button  > עבור לטופס הזמנה  </button></Link>
                        <div className="orderTable tableHeader">
                            <div className="border"> מספר הזמנה </div>
                            <div className="border"> שם בית ספר </div>
                            <div className="border"> שם מזמין </div>
                            <div className="border"> תפקיד המזמין</div>
                            <div className="border"> טלפון המזמין</div>
                            <div className="border"> מטרת הנסיעה</div>
                            <div className="border">סוג הזמנה </div>
                            <div className="border"> תאריך נסיעה</div>
                            <div className="border"> יום נסיעה</div>
                            <div className="border"> שעת נסיעה</div>
                            <div className="border"> איסוף בלבד</div>
                            <div className="border"> מספר תלמידים</div>
                            <div className="border"> יעד הנסיעה</div>
                            <div className="border"> כתובת היעד</div>
                            <div className="border"> שעת חזרה</div>
                            <div className="border"> הערות</div>
                            <div className="border"> שם איש קשר</div>
                            <div className="border"> תפקיד איש קשר</div>
                            <div className="border">טלפון איש קשר</div>
                            <div className="border">מרחק ליעד</div>
                            <div className="border">ספק</div>
                            <div className="border">מחיר </div>
                            <div className="border"> סטטוס הזמנה </div>
                        </div>
                        {this.state.orders.map((order, index) => {
                            console.log('in map')
                            console.log(order[index])
                            if ((this.state.orders[index].supplier_name == this.props.schoolName) && (this.state.orders[index].status ==`אושר, ממתין לאישור ספק`)){
                                return <div className="orderTable">
                                    <div className="border">{this.state.orders[index].id}   </div>
                                    <div className="border">{this.state.orders[index].school_name}    </div>
                                    <div className="border">{this.state.orders[index].orderby_name}</div>
                                    <div className="border">{this.state.orders[index].orderby_position}  </div>
                                    <div className="border">{this.state.orders[index].orderby_phone}</div>
                                    <div className="border">{this.state.orders[index].order_objective} </div>
                                    <div className="border">{this.state.orders[index].order_type}  </div>
                                    <div className="border">{this.state.orders[index].ordertravel_date}  </div>
                                    <div className="border">{this.state.orders[index].ordertravel_day} </div>
                                    <div className="border">{this.state.orders[index].ordertravel_time} </div>
                                    <div className="border">{this.state.orders[index].pickuponly}</div>
                                    <div className="border">{this.state.orders[index].order_students_number}  </div>
                                    <div className="border">{this.state.orders[index].order_destanation} </div>
                                    <div className="border">{this.state.orders[index].order_address}</div>
                                    <div className="border">{this.state.orders[index].order_return_time}</div>
                                    <div className="border">{this.state.orders[index].order_comments} </div>
                                    <div className="border">{this.state.orders[index].order_contact_name}</div>
                                    <div className="border">{this.state.orders[index].order_contact_position}</div>
                                    <div className="border">{this.state.orders[index].order_contact_phone}</div>
                                    <div className="border"> {this.state.orders[index].distance}</div>
                                    <div className="border"> {this.state.orders[index].supplier_name}</div>
                                    <div className="border"> {this.state.orders[index].supplier_price}</div>
                                    <div className="border">{this.state.orders[index].status}</div>
                                </div>
                            }
                        }

                        )}</div>


                    : <div><button onClick={this.refresh}>רענון</button>
                        <Link to="/orderForm"><button  > עבור לטופס הזמנה  </button></Link></div>}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        schoolName: state.schoolNameR

    }
}
export default connect(mapStateToProps)(Supplier)