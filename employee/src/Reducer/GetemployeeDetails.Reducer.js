import {constants} from '../constants';

export default function getEmployeeDetailsReducer(state = {}, action) {
    console.log('rdcr', state);

    switch(action.type){
        case constants.API_REQUEST:
            return{
                ...state
            }

        case constants.API_SUCCESS:
            return{
                ...state,
                data : action.data
            }

        case constants.API_FAILURE:
            return {
                ...state
            }

        case constants.API_ID_REQUEST:
            return {
                ...state
            }
            
        case constants.API_ID_FAILURE:
            return {
                ...state
            }

        case constants.API_ID_SUCCESS:
                console.log('rdcr'+state);
                return {
                    
                    ...state,
                    empData : action.data,
                    isClicked : true
                }
        
            case constants.API_PUT_ID_REQUEST:
                return {
                    ...state
                }
                
            case constants.API_PUT_ID_FAILURE:
                return {
                    ...state
                }
    
            case constants.API_PUT_ID_SUCCESS:
                    return {
                        
                        ...state,
                    }

        case "IsClickToogle": {
            return {
                ...state,
                isClicked : !state.isClicked
            }
        }

        case "ClickExecuted" : {
            return { 
            ...state,
            isClicked : true,
            }
        }
        
        default:
            return state
        }
}