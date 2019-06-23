import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import DashBoardLayout from './layouts/DashBoardLayout';
import SwitchWithSlide from './SwitchWithSlide';
import DashboardPage from './pages/DashboardPage';
import BookingPage from './pages/BookingPage';
import CreateCustomerPage from './pages/CreateCustomerPage';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import BookingDetailPage from './pages/BookingDetailPage';
import AuthPage from './pages/AuthPage';
import PolicePage from './pages/PolicePage';
import PoliceHotelPage from './pages/PoliceHotelPage';
import PoliceCustomerPage from './pages/PoliceCutomerPage';
import PoliceBookingPage from './pages/PoliceBookingPage';

const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
};
export class App extends Component {
  state = {
    animate: true
  };

  render() {
    const SwitchComponent = this.state.animate ? SwitchWithSlide : Switch;

    return (
      <AlertProvider template={AlertTemplate} {...options}>
        <SwitchComponent>
          <Route exact path='/' component={DashBoard} />
          <Route exact path='/booking' component={Booking} />
          <Route exact path='/customer' component={Customer} />
          <Route exact path='/bookingdetail' component={BookingDetail} />
          <Route exact path='/login' component={Auth} />
          <Route exact path='/police' component={Police} />
          <Route exact path='/policehotel' component={PoliceHotel} />
          <Route exact path='/policecustomer' component={PoliceCustomer} />
          <Route exact path='/policebooking' component={PoliceBooking} />
        </SwitchComponent>
      </AlertProvider>
    );
  }
}

export default App;

const DashBoard = () => {
  return (
    <DashBoardLayout>
      <DashboardPage />
    </DashBoardLayout>
  );
};

const Booking = () => {
  return (
    <DashBoardLayout>
      <BookingPage />
    </DashBoardLayout>
  );
};

const Customer = () => {
  return (
    <DashBoardLayout>
      <CreateCustomerPage />
    </DashBoardLayout>
  );
};

const BookingDetail = () => {
  return (
    <DashBoardLayout>
      <BookingDetailPage />
    </DashBoardLayout>
  );
};

const Auth = () => {
  return (
    <DashBoardLayout>
      <AuthPage />
    </DashBoardLayout>
  );
};

const Police = () => {
  return (
    <DashBoardLayout>
      <PolicePage />
    </DashBoardLayout>
  );
};

const PoliceHotel = () => {
  return (
    <DashBoardLayout>
      <PoliceHotelPage />
    </DashBoardLayout>
  );
};

const PoliceCustomer = () => {
  return (
    <DashBoardLayout>
      <PoliceCustomerPage />
    </DashBoardLayout>
  );
};

const PoliceBooking = () => {
  return (
    <DashBoardLayout>
      <PoliceBookingPage />
    </DashBoardLayout>
  );
};
