
// GLOBAL STATE 
const initialState = {
  VeryLost: false,
  SortOfGettingIt: false,
  GettingIt: false,
}


const reducer = (state = initialState, action) => {

  if(action.type == "VERYLOST_COUNTER") {
    return {
      ...state,
      VeryLost: true
    }}
  if(action.type == "SORTOFGETTINGIT_COUNTER") {
    return {
      ...state,
      SortOfGettingIt: true
    }}
    if(action.type == "GETTINGIT_COUNTER") {
      return {
        ...state,
        GettingIt: true
  }}
  if(action.type == "FINANCEBUTTON_COUNTER") {
    return {
      ...state,
      FinanceButton: state.FinanceButton + 1
}}

  return state
}


export default reducer
