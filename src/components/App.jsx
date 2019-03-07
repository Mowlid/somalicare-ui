import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import HomeContainer from '../containers/HomeContainer';
import Donor from './Donor';
import ProfileContainer from '../containers/ProfileContainer';

class App extends React.Component{
    render(){
        return (
           <BrowserRouter>
            <Switch>
                    <Route exact path={'/'} component={HomeContainer}></Route>
                    <Route path={'/donor'} component={Donor}></Route>
                    <Route path={'/profile'} component={ProfileContainer}></Route>
            </Switch>
           </BrowserRouter>
        )
    };
}
export default App;