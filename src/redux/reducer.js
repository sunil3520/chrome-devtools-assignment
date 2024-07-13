import * as types from "./actionType"

const initialState = {
    isLoading:false,
    isError:false,
    netoworkRequestDetails:null
};

export const reducer = (state=initialState,{type,payload}) =>{
    switch (type) {
        case types.GET_ALL_NETWORK_REQUEST_PENDING:
            return {...state,isLoading:true}
        case types.GET_ALL_NETWORK_REQUEST_SUCCESS:
            return {...state,isLoading:false,netoworkRequestDetails:payload}
        case types.GET_ALL_NETWORK_REQUEST_FAILURE:
            return {...state,isError:true}
        default:
            return state;
    }
}