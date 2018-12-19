
// GLOBAL STATE 
const initialState = {
  VeryLost: 0,
  SortOfGettingIt: 0,
  GettingIt: 0,
}


const reducer = (state = initialState, action) => {

  if(action.type == "VERYLOST_COUNTER") {
    return {
      ...state,
      VeryLost: state.VeryLost + 1
    }}
  if(action.type == "SORTOFGETTINGIT_COUNTER") {
    return {
      ...state,
      SortOfGettingIt: state.SortOfGettingIt + 1
    }}
    if(action.type == "GETTINGIT_COUNTER") {
      return {
        ...state,
        GettingIt: state.GettingIt + 1
  }}
  if(action.type == "FINANCEBUTTON_COUNTER") {
    return {
      ...state,
      FinanceButton: state.FinanceButton + 1
}}

  return state
}


export default reducer
