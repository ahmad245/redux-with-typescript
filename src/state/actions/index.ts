export interface SearchRepositoriesAction{
    type:ActionType.SEARCH_REPOSITORIES;
}

export interface SearchRepositoriesSuccessAction{
    type:ActionType.SEARCH_REPOSITORIES_SUCCESS;
    payload:string[];
}
export interface SearchRepositoriesErrorAction{
    type:ActionType.SEARCH_REPOSITORIES_ERROR;
    payload:string
}

export enum ActionType{
   SEARCH_REPOSITORIES='search_repositories' ,
   SEARCH_REPOSITORIES_SUCCESS='search_repositories_success',
   SEARCH_REPOSITORIES_ERROR='search_repositories_error'
}