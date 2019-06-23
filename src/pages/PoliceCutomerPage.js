import React, { Component } from 'react';
import HttpService from '../utils/HttpsService';

export class PoliceCustomerPage extends Component {
  state = {
    hotels: []
  };

  componentDidMount() {
    HttpService.get('/Customer', {}, (err, res) => {
      console.log(err);
      this.setState({ hotels: res.data });
    });
  }

  render() {
    return (
      <div style={{ marginTop: 30 }}>
        <h1>Cutomers</h1>
        {this.state.hotels.map((hotel, i) => {
          return (
            <div key={i} className='text-center py-2 lg:px-4'>
              <div
                style={{ borderRadius: '10px' }}
                className='p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex'
                role='alert'
              >
                <span className='flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3'>
                  New
                </span>
                <span className='font-semibold mr-2 text-left flex-auto'>
                  {`${hotel.name} ${hotel.gender} ${hotel.age} `}
                </span>
                <svg
                  className='fill-current opacity-75 h-4 w-4'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                >
                  <path d='M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z' />
                </svg>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default PoliceCustomerPage;
