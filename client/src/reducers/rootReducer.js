const initState = {
    schoolNameR: 'ברנר',
    schoolCityR: 'כפר סבא',
    schoolStreetR: 'זאב',
    schoolNumberR: '56',
    schoolSymbolR: '666'
}


const rootReducer = (state = initState, action) => {
    if (action.type === 'CHANGE_DETAILS') {
        console.log(action.newSchoolDetails[0].name)
        return {
            schoolNameR: action.newSchoolDetails[0].name,
            schoolCityR: action.newSchoolDetails[0].city,
            schoolStreetR: action.newSchoolDetails[0].street,
            schoolNumberR: action.newSchoolDetails[0].number,
            schoolSymbolR: action.newSchoolDetails[0].symbol,
           
        }
    }

    return state;
}

export default rootReducer