import 
{ SearchRepositoriesAction, SearchRepositoriesSuccessAction, SearchRepositoriesErrorAction } 
from "../actions";

export type Action=
|SearchRepositoriesAction
|SearchRepositoriesSuccessAction
|SearchRepositoriesErrorAction;



