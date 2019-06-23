import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

export class DashBoardLayout extends Component {
  componentWillMount() {
    if (!localStorage.getItem('login')) {
      this.props.history.push('/login');
    }
  }

  render() {
    return (
      <div>
        <nav
          id='header'
          className='fixed w-full z-30 top-0 text-white gradient'
        >
          <div className='w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2'>
            <div
              className='pl-4 flex items-center '
              style={{ display: 'flex', flex: 1 }}
            >
              <a
                className='toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl'
                href='#'
                style={{
                  color: '#FFFFFF'
                }}
              >
                {/*Icon from: http://www.potlabicons.com/ */}

                {this.props.history.location.pathname.includes('police')
                  ? 'ACS (Police)'
                  : 'ACS (Hotel)'}
              </a>
            </div>

            {this.props.history.location.pathname === '/' ? (
              <React.Fragment>
                <button
                  id='navAction'
                  onClick={() => this.props.history.push('/booking')}
                  style={{ marginRight: 10 }}
                  className='mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75'
                >
                  Booking
                </button>
              </React.Fragment>
            ) : null}

            {this.props.history.location.pathname === '/bookingdetail' ? (
              <React.Fragment>
                <button
                  id='navAction'
                  onClick={() => this.props.history.goBack()}
                  style={{ marginRight: 10 }}
                  className='mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75'
                >
                  Back
                </button>
              </React.Fragment>
            ) : null}

            {this.props.history.location.pathname === '/booking' ? (
              <React.Fragment>
                <button
                  id='navAction'
                  onClick={() => this.props.history.goBack()}
                  style={{ marginRight: 10 }}
                  className='mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75'
                >
                  Back
                </button>
                <button
                  id='navAction'
                  onClick={() => this.props.history.push('/customer')}
                  style={{ marginRight: 10 }}
                  className='mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75'
                >
                  +
                </button>
              </React.Fragment>
            ) : null}

            {this.props.history.location.pathname === '/customer' ? (
              <React.Fragment>
                <button
                  id='navAction'
                  onClick={() => this.props.history.goBack()}
                  style={{ marginRight: 10 }}
                  className='mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75'
                >
                  Back
                </button>
              </React.Fragment>
            ) : null}

            {this.props.history.location.pathname === '/policehotel' ? (
              <React.Fragment>
                <button
                  id='navAction'
                  onClick={() => this.props.history.goBack()}
                  style={{ marginRight: 10 }}
                  className='mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75'
                >
                  Back
                </button>
              </React.Fragment>
            ) : null}

            {this.props.history.location.pathname === '/policecustomer' ? (
              <React.Fragment>
                <button
                  id='navAction'
                  onClick={() => this.props.history.goBack()}
                  style={{ marginRight: 10 }}
                  className='mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75'
                >
                  Back
                </button>
              </React.Fragment>
            ) : null}

            {this.props.history.location.pathname === '/policebooking' ? (
              <React.Fragment>
                <button
                  id='navAction'
                  onClick={() => this.props.history.goBack()}
                  style={{ marginRight: 10 }}
                  className='mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75'
                >
                  Back
                </button>
              </React.Fragment>
            ) : null}
          </div>
        </nav>
        <div
          style={{
            paddingTop: 70,
            paddingLeft: 10,
            paddingRight: 10,
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default withRouter(DashBoardLayout);
