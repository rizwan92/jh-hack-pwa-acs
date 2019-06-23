import React, { Component } from 'react';
import uuid from 'uuid-v4';
import HttpService from '../utils/HttpsService';
import { withRouter } from 'react-router-dom';
import { withAlert } from 'react-alert';

export class BookingPage extends Component {
  state = {
    email: 'email',
    customers: [],
    customerId: '',
    searches: []
  };

  componentDidMount() {
    HttpService.get('/Customer', {}, (err, res) => {
      console.log(err);
      this.setState({ customers: res.data });
    });
  }

  onSearch = () => {
    const { email } = this.state;
    HttpService.get(`/Customer?query=${email}`, {}, (err, res) => {
      console.log(err);
      console.log(res);
    });
  };

  onSubmit = event => {
    event.preventDefault();
    const { customerId } = this.state;
    if (customerId === '') {
      this.props.alert.show('Please Select Customer', {
        timeout: 2000,
        type: 'danger'
      });
      return;
    }
    const bookingId = makeid(6);
    const data = {
      $class: 'org.atithi.app.Booking',
      bookingId: bookingId,
      institute: 'org.atithi.app.Institute#123',
      customer: `org.atithi.app.Customer#${customerId}`,
      policeId: 'String'
    };
    console.log(data);
    HttpService.post('/Booking', JSON.stringify(data), (err, res) => {
      if (err) {
        this.props.alert.show('Cant make Booking Now', {
          timeout: 1500,
          type: 'danger'
        });
        return;
      }
      console.log(res);
      if (res.status === 200) {
        this.props.alert.show('Booking Successful', {
          timeout: 2000,
          type: 'success',
          onClose: () => {
            this.props.history.goBack();
          }
        });
      }
    });
  };

  onChange = e => this.setState({ customerId: e.target.value });

  render() {
    return (
      <div style={{ marginTop: 50 }}>
        <h2>Make Bookings</h2>
        <form onSubmit={e => this.onSubmit(e)} className='w-full max-w-lg '>
          {/* <div className='bg-white my-4 shadow p-8 rounded-lg'>
            <div className='flex items-center mb-4'>
              <h2 className='text-lg'>Email of cutomer</h2>
            </div>
            <div className='w-full'>
              <div className='flex'>
                <input
                  type='text'
                  id='payment'
                  className='w-5/6 flex-1 text-sm bg-grey-light text-grey-darkest rounded-l p-3 focus:outline-none'
                  placeholder='Search'
                />
              </div>
            </div>
          </div> */}

          <div
            className='inline-block relative w-64'
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <select
              onChange={e => this.onChange(e)}
              className='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
            >
              <option value=''>Select Customers</option>
              {this.state.customers.map((cust, i) => {
                return (
                  <option key={i} value={cust.customerId}>
                    {cust.name}
                  </option>
                );
              })}
            </select>
            <div
              style={{ display: 'flex', justifyContent: 'center' }}
              className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'
            >
              <svg
                className='fill-current h-4 w-4'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
              >
                <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
              </svg>
            </div>
          </div>
          <div
            style={{ display: 'flex', justifyContent: 'center' }}
            className='inline-block relative w-64'
          >
            <button
              id='navAction'
              type='submit'
              className=' gradient mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withAlert()(withRouter(BookingPage));

function makeid(length) {
  var result = '';
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
