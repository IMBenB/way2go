import React, { Component } from 'react';
import { connect } from 'react-redux'

import './orderForm.css';


class orderForm extends React.Component {
    render() {
        return (
            <div className="formContainer">
                <div>טופס 2 - הזמנה ותיחור של הסעה ייעודית   </div>
                <div className="setAsRow">
                    <div> מספר הזמנה -ימולא על ידי מנהל המוקד   </div>
                    <div>_________</div>
                </div>
                <div className="setAsRow">
                    <div className="title"> שם הבית ספר   </div>
                    <div>_{this.props.schoolName}_</div>
                    <div  className="title"> כתובת הבית ספר   </div>
                    <div>_{this.props.schoolCity}__{this.props.schoolStreet}__{this.props.schoolNumber}_</div>
                    <div  className="title"> סמל הבית ספר   </div>
                    <div>_{this.props.schoolSymbol}_</div>
                </div>
                <div className="setAsRow">
                    <div  className="title"> שם  המזמין   </div>
                    <div >_________</div>
                    <div  className="title"> תפקיד    </div>
                    <div>_________</div>
                    <div  className="title"> טלפון   </div>
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
                    <div> תאריך הסעה </div>
                    <div>_________</div>
                    <div>      יום בשבוע :  (בהזמנות מסוג : 1, 3, 5, 6)    </div>
                    <div>_________</div>
                    <div> טלפון   </div>
                    <div>_________</div>
                </div>
                <div className="setAsRow">
                    <div>שעת איסוף מבית הספר : (חובה להתייצב לפחות 10 דקות לפני שעת האיסוף)</div>
                    <div>_________</div>
                </div>
                <div className="setAsRow">
                    <div>מס' תלמידים ( צפי) : </div>
                    <div>_________</div>
                </div>
                <div>יעד נסיעה</div>
                <div className="destinationTable">
                    <div className="headTable">שם מפעל / מסגרת ההתנסות</div>
                    <div className="headTable">כתובת מלאה (ישוב, רחוב, מס' בית)</div>
                    <div className="headTable">שעת חזרה</div>
                    <div className="headTable">תוספת ק"מ לסבב פנימי (*)</div>
                    <div className="headTable">_________</div>
                    <div className="headTable">_________</div>
                    <div className="headTable">_________</div>
                    <div className="headTable">_________</div>
                    <div className="headTable">_________</div>
                    <div className="headTable">_________</div>
                    <div className="headTable">_________</div>
                    <div className="headTable">_________</div>
                </div>
                <div>(*) עבור סבב פנימי / עצירה במס' תחנות ללא פירוט כל התחנות בטבלה (יש לפרט בהערות)</div>
                <div className="setAsRow">
                    <div>הערות ובקשות מיוחדות</div>
                    <div>_________</div>
                </div>
                <div className="setAsRow">
                    <div>איש קשר לתאום ההסעה: שם פרטי + משפחה </div>
                    <div>_________</div>
                    <div>תפקיד  </div>
                    <div>_________</div>
                    <div>טלפון ישיר  </div>
                    <div>_________</div>
                </div>
            </div>
        )
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