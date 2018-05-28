import { createStore } from 'redux';
const reducer = (state,action) =>{

  if(action.type === "GET_CARD"){
    return{
      ...state,
      card:action.data,
      loading: action.loading
    }
  }
  return state;
}
export default createStore(reducer,{card: [] });
