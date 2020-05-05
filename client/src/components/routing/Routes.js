import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '../auth/Login';
import Register from '../auth/Register';
import DoctorLogin from '../auth/DoctorLogin';
import DoctorRegister from '../auth/DoctorRegister';
import Alert from '../layout/Alert';
import Dashboard from '../dashboard/Dashboard';
import DoctorDashboard from '../dashboard/DoctorDashboard';
import PrivateRoute from '../routing/PrivateRoute';
import DoctorPrivateRoute from '../routing/DoctorPrivateRoute';
import Doctors from '../home/Doctors';
import Book from '../patient/Book';
import Consult from '../patient/Consult';
import Check from '../doctor/Check';
import ViewConsult from '../patient/ViewConsult';
import NotFound from '../layout/NotFound';

const Routes = () => {
  return (
    <section className='container'>
      <Alert />
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/doctor-register' component={DoctorRegister} />
        <Route exact path='/doctor-login' component={DoctorLogin} />
        <Route exact path='/home' component={Doctors} />
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <DoctorPrivateRoute
          exact
          path='/doctor-dashboard'
          component={DoctorDashboard}
        />
        <PrivateRoute exact path='/book/:d_id' component={Book} />
        <PrivateRoute exact path='/consult/:d_id' component={Consult} />
        <DoctorPrivateRoute
          exact
          path='/check-patient/:c_id'
          component={Check}
        />
        <PrivateRoute
          exact
          path='/view-consult/:cp_id'
          component={ViewConsult}
        />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
