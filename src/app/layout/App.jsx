import React, { Component, Fragment } from 'react';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';
import EventForm from '../../features/event/EventForm/EventForm';
import EventDetailedPage from '../../features/event/EventDetailed/EventDetailedPage';
import HomePage from '../../features/event/home/HomePage';
import PeopleDashboard from '../../features/event/user/PeopleDashboard/PeopleDashboard'
import UserDetailedPage from '../../features/event/user/UserDetailed/UserDetailedPage';
import SettingsDashboard from '../../features/event/user/Settings/SettingsDashboard';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route path="/" exact component={HomePage} />
        <Route
        path="/(.+)"
        render={() => (
          <Fragment>
            <NavBar />
            <Container className='main'>
              <Route path="/events" exact component={EventDashboard} />
              <Route path="/event/:id" exact component={EventDetailedPage} />
              <Route path="/people" exact component={PeopleDashboard} />
              <Route path="/profile/:id" exact component={UserDetailedPage} />
              <Route path="/settings" exact component={SettingsDashboard} />
              <Route path="/createEvent" exact component={EventForm} />
           </Container>
         </Fragment>
        )}
       />
      </Fragment>
    );
  }
}

export default App;
