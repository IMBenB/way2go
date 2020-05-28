import React, { Component } from 'react';

import './orderForm.css';


class orderForm extends React.Component {
    render() {
        return (
            <div className="formContainer">
                <div>טופס 2 - הזמנה ותיחור של הסעה ייעודית   </div>
                <div> מספר הזמנה______ -ימולא על ידי מנהל המוקד   </div>
                <div className="setAsRow">
                    <div> שם הבית ספר   </div>
                    <div>_________</div>
                    <div> כתובת הבית ספר   </div>
                    <div>_________</div>
                    <div> סמל הבית ספר   </div>
                    <div>_________</div>
                </div>
                <div className="setAsRow">
                    <div> שם  המזמין   </div>
                    <div>_________</div>
                    <div> תפקיד    </div>
                    <div>_________</div>
                    <div> טלפון   </div>
                    <div>_________</div>
                </div>
                <div className="setAsRow">
                    <div > מטרת הנסיעה</div>
                    <select >
                        <option>סיור</option>
                        <option >קורס</option>
                        <option>התנסות</option>
                        <option>אחר</option>
                    </select>
                </div>
                <div className="setAsRow">
                    <div > סוג הזמנה </div>
                    <select >
                        <option>1- חד פעמית ליעד בודד</option>
                        <option >2- חוזרת בימים קבועים בשבוע</option>
                        <option>3- חד פעמית למספר יעדים</option>
                        <option>4- חוזרת למס' יעדים  </option>
                        <option>5- רכב צמוד (באישור מראש של רכז תעשידע) , למשך זמן</option>
                        <option>6- פרויקט /אחרת </option>
                    </select>
                </div>
                <div className="setAsRow">
                    <div> תאריך </div>
                    <div>_________</div>
                    <div>      יום בשבוע :  (בהזמנות מסוג : 1, 3, 5, 6)    </div>
                    <div>_________</div>
                    <div> טלפון   </div>
                    <div>_________</div>
                </div>
            </div>
        )
    }

}
export default orderForm