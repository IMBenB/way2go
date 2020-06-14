import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './orderForm.css';




class Orders extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            isRefresh:false
        }


        this.refresh = this.refresh.bind(this);


    }
        refresh = (e) => {
        e.preventDefault();
        // componentDidMount(){
        let schoolName = this.props.schoolName
        // console.log('orders')
        // console.log(schoolName)
        fetch('http://localhost:5050/getOrders', {
            method: 'POST',
            body: JSON.stringify({schoolName}),
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
                    isRefresh:true
                })
                console.log(this.state.orders)




            }).catch(err => {
                console.error(err)
            })

        // console.log('2')
        // console.log(this.state.orders)
        // }
    }
    
    render() {
        return (
            <div>
                {/* {this.state.orders.map((order,index)=>{
                    return <div>{order}</div>
                }
                )} */}
                
                {(this.state.isRefresh)?


                <div>  <button onClick={this.refresh}>רענון</button>   
                <Link to="/orderForm"><button  > עבור לטופס הזמנה  </button></Link>
                {this.state.orders.map((order,index)=>{
                    console.log('in map')
                    console.log(order[index])
                    return <div className="setAsRow"> <div> מספר הזמנה {this.state.orders[index].id} ,  </div><div> שם בית ספר {this.state.orders[index].school_name}  ,  </div><div> שם מזמין {this.state.orders[index].orderby_name},</div><div>  
                     תפקיד המזמין{this.state.orders[index].orderby_position},  </div><div> טלפון המזמין{this.state.orders[index].orderby_phone},  </div><div> מטרת הנסיעה{this.state.orders[index].order_objective},  </div><div>
                     סוג הזמנה {this.state.orders[index].order_type},  </div><div> תאריך נסיעה{this.state.orders[index].ordertravel_date},  </div><div> יום נסיעה{this.state.orders[index].ordertravel_day},  </div><div>
                     שעת נסיעה{this.state.orders[index].ordertravel_time},  </div><div> איסוף בלבד:{this.state.orders[index].pickuponly},  </div><div> מספר תלמידים:{this.state.orders[index].order_students_number},  </div><div>
                     יעד הנסיעה{this.state.orders[index].oredr_destanation},  </div><div> כתובת היעד{this.state.orders[index].order_address},  </div><div> שעת חזרה{this.state.orders[index].order_return_time},  </div><div>
                     הערות: {this.state.orders[index].order_comments},  </div><div> שם איש קשר:{this.state.orders[index].order_contact_name},  </div><div> תפקיד איש קשר{this.state.orders[index].order_contact_position},  </div><div>
                     טלפון איש קשר: {this.state.orders[index].order_contact_phone}, מרחק {this.state.orders[index].distance}</div></div>
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
export default connect(mapStateToProps)(Orders)