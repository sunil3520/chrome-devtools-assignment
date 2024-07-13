import fetchWrapper from "../utils/fetchWrapper";
import * as types from "./actionType";

export const getAllNetworkList = (url) => async (dispatch)=>{
    dispatch({type:types.GET_ALL_NETWORK_REQUEST_PENDING})
    try {
      let  res= await fetchWrapper(url)
      
        dispatch({type:types.GET_ALL_NETWORK_REQUEST_SUCCESS,payload:res})
    } catch (error) {
        dispatch({type:types.GET_ALL_NETWORK_REQUEST_FAILURE})
    }
}