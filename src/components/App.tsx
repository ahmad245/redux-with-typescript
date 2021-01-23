import React from 'react';
import {stroe} from '../state';
import { Provider } from 'react-redux';
import RepositoriesList from './RepositoriesList';


const  App=()=>(
    <Provider store={stroe} >
        <div className="App">
          <RepositoriesList />
        </div>
    </Provider>
)

export default App;
