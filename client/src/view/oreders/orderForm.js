import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';



import './orderForm.css';


class orderForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOrder: false
        }
        this.formSubmit = this.formSubmit.bind(this);

    }

    formSubmit = (e) => {
        e.preventDefault();
        let orderData = {
            schoolName: this.props.schoolName,
            schoolCity: this.props.schoolCity,
            schoolStreet: this.props.schoolStreet,
            schoolNumber: this.props.schoolNumber,
            schoolSymbol: this.props.schoolSymbol,
            orderName: e.target.orderName.value,
            orderPosition: e.target.orderPosition.value,
            orderPhone: e.target.orderPhone.value,
            orderObjective: e.target.orderObjective.value,
            orderType: e.target.orderType.value,
            orderDate: e.target.orderDate.value,
            orderDay: e.target.orderDay.value,
            orderPickuponly: e.target.orderPickuponly.value,
            orderTime: e.target.orderTime.value,
            orderStudents: e.target.orderStudents.value,
            orderTripA: e.target.orderTripA.value,
            orderAddressA: e.target.orderAddressA.value,
            orderReturnTimeA: e.target.orderReturnTimeA.value,
            distanceA: e.target.distanceA.value,
            orderTripB: e.target.orderTripB.value,
            orderAddressB: e.target.orderAddressB.value,
            orderReturnTimeB: e.target.orderReturnTimeB.value,
            orderComments: e.target.orderComments.value,
            orderContact: e.target.orderContact.value,
            orderContactPosition: e.target.orderContactPosition.value,
            orderContactPhone: e.target.orderContactPhone.value



        }
        // console.log(orderData);
        fetch('http://localhost:5050/orderForm', {
            method: 'POST',
            body: JSON.stringify({ orderData }),
            headers: {
                'Content-Type': 'application/json'
            }

        }).then(res => res.json())
            .then(response => {
                if (response.isOK) {
                    // console.log(response.body)
                    this.setState({
                        isOrder: true
                    })

                }

            })
    }

    render() {
        if (this.state.isOrder) {

            return <Redirect to='/Orders' />
        } else {
            return (
                <div className="formContainer" >
                    <form onSubmit={this.formSubmit}>
                        <div>טופס 2 - הזמנה ותיחור של הסעה ייעודית   </div>
                        <div className="setAsRow">
                            <div> מספר הזמנה -ימולא על ידי מנהל המוקד   </div>
                            <div>_________</div>
                        </div>
                        <div className="setAsRow">
                            <div className="title"> שם הבית ספר   </div>
                            <div>_{this.props.schoolName}_</div>
                            <div className="title"> כתובת הבית ספר   </div>
                            <div>_{this.props.schoolCity}__{this.props.schoolStreet}__{this.props.schoolNumber}_</div>
                            <div className="title"> סמל הבית ספר   </div>
                            <div>_{this.props.schoolSymbol}_</div>
                        </div>
                        <div className="setAsRow">
                            <div className="title"> שם  המזמין:   </div>
                            <input name="orderName" type="text" placeholder="שם המזמין" />
                            <div className="title"> תפקיד:    </div>
                            <input name="orderPosition" type="text" placeholder="תפקיד " />
                            <div className="title"> טלפון:   </div>
                            <input name="orderPhone" type="number" placeholder="טלפון " />
                        </div>
                        <div className="setAsRow">
                            <div > מטרת הנסיעה</div>
                            <select name="orderObjective">
                                <option>סיור</option>
                                <option >קורס</option>
                                <option>התנסות</option>
                                <option>אחר</option>
                            </select>
                        </div>
                        <div className="setAsRow">
                            <div > סוג הזמנה </div>
                            <select name="orderType">
                                <option>1- חד פעמית ליעד בודד</option>
                                <option >2- חוזרת בימים קבועים בשבוע</option>
                                <option>3- חד פעמית למספר יעדים</option>
                                <option>4- חוזרת למס' יעדים  </option>
                                <option>5- רכב צמוד (באישור מראש של רכז תעשידע) , למשך זמן</option>
                                <option>6- פרויקט /אחרת </option>
                            </select>
                        </div>
                        <div className="setAsRow">
                            <div> תאריך הסעה </div>
                            <input name="orderDate" type="date" placeholder="תאריך " />
                            <div>      יום בשבוע :  (בהזמנות מסוג : 1, 3, 5, 6)    </div>
                            <select name="orderDay">
                                <option>א</option>
                                <option>ב</option>
                                <option>ג</option>
                                <option>ד</option>
                                <option>ה</option>
                                <option>ו</option>
                                <option>ש</option>
                            </select>
                            <div> איסוף בלבד </div>
                            <select name="orderPickuponly">
                                <option>לא</option>
                                <option>כן</option>
                            </select>
                        </div>
                        <div className="setAsRow">
                            <div>שעת איסוף מבית הספר : (חובה להתייצב לפחות 10 דקות לפני שעת האיסוף)</div>
                            <input name="orderTime" type="time" placeholder="שעה " />
                        </div>
                        <div className="setAsRow">
                            <div>מס' תלמידים ( צפי) : </div>
                            <input name="orderStudents" type="number" placeholder="תלמידים " />
                        </div>
                        <div>יעד נסיעה</div>
                        <div className="destinationTable">
                            <div className="headTable">שם מפעל / מסגרת ההתנסות</div>
                            <div className="headTable">כתובת מלאה (ישוב, רחוב, מס' בית)</div>
                            <div className="headTable">שעת חזרה</div>
                            <div className="headTable">מרחק</div>

                            <input className="headTable" name="orderTripA" type="text" placeholder=" " />
                            <input className="headTable" name="orderAddressA" type="text" placeholder=" " />
                            <input className="headTable" name="orderReturnTimeA" type="time" placeholder=" " />
                            <input className="headTable" name="distanceA" type="number" placeholder=" " />
                            <input className="headTable" name="orderTripB" type="text" placeholder=" " />
                            <input className="headTable" name="orderAddressB" type="text" placeholder=" " />
                            <input className="headTable" name="orderReturnTimeB" type="time" placeholder=" " />
                            <input className="headTable" name="distanceB" type="number" placeholder=" " />



                        </div>
                        <div>(*) עבור סבב פנימי / עצירה במס' תחנות ללא פירוט כל התחנות בטבלה (יש לפרט בהערות)</div>
                        <div className="setAsRow">
                            <div>הערות ובקשות מיוחדות</div>
                            <input name="orderComments" type="text" placeholder="הערות " />
                        </div>
                        <div className="setAsRow">
                            <div>איש קשר לתאום ההסעה: שם פרטי + משפחה </div>
                            <input name="orderContact" type="text" placeholder="איש קשר " />
                            <div>תפקיד  </div>
                            <input name="orderContactPosition" type="text" placeholder="תפקיד " />
                            <div>טלפון ישיר  </div>
                            <input name="orderContactPhone" type="text" placeholder="טלפון " />
                        </div>
                        
                            <button>שלח</button>
                       

                    </form>
                    {/* <Link to="/"><button  > עבור לתחילת הרשמה   </button></Link> */}
                </div>
            )
        }
    }

}

const mapStateToProps = (state) => {
    return {
        schoolName: state.schoolNameR,
        schoolCity: state.schoolCityR,
        schoolStreet: state.schoolStreetR,
        schoolNumber: state.schoolNumberR,
        schoolSymbol: state.schoolSymbolR
    }
}

export default connect(mapStateToProps)(orderForm)