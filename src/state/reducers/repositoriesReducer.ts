import { Action } from "../action-types";
import {ActionType} from "../actions";



export interface RepositoryState{
    loading:boolean;
    error:string;
    data:string[];

}

const INITIAL_STATE={
    loading:false,
    error:'',
    data:[]
}

export default (state:RepositoryState=INITIAL_STATE,action:Action):RepositoryState=>{

    switch (action.type) {
        case ActionType.SEARCH_REPOSITORIES:
            return {loading:true,data:[],error:''}
            
        case ActionType.SEARCH_REPOSITORIES_SUCCESS:
            return {loading:false,data:action.payload,error:''}   
        case ActionType.SEARCH_REPOSITORIES_ERROR:
            return {loading:false,data:[],error:action.payload}
        default:
           return state;
    }
}