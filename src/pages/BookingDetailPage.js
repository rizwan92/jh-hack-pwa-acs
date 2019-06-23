import React, { Component } from 'react';
import uuid from 'uuid-v4';
import HttpService from '../utils/HttpsService';
import { withRouter } from 'react-router-dom';
import { withAlert } from 'react-alert';

export class BookingDetailPage extends Component {
  state = {
    bookingDetail: null,
    cutomerDetail: null
  };

  componentDidMount() {
    const { book, cutomerId } = this.props.location.state;
    HttpService.get(`/Customer/${cutomerId}`, {}, (err, res) => {
      console.log(res);
      console.log(err);
      this.setState({ cutomerDetail: res.data, bookingDetail: book });
    });
  }

  render() {
    const { cutomerDetail, bookingDetail } = this.state;
    if (!cutomerDetail && !bookingDetail) {
      return null;
    }
    console.log(cutomerDetail);
    console.log(bookingDetail);
    return (
      <div style={{ marginTop: 50 }}>
        <div
          className='max-w-sm rounded overflow-hidden shadow-lg'
          style={{ width: '100vh' }}
        >
          <div className='px-6 py-4'>
            <div className='font-bold text-xl mb-2'>Booking Details</div>
            <div className='font-lite text-xl mb-2'>{cutomerDetail.name}</div>
            <p className='text-gray-700 text-base'>{cutomerDetail.email}</p>
            <p className='text-gray-700 text-base'>Purpose :Tourism</p>
          </div>
          <div className='px-6 py-4'>
            <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
              age : {cutomerDetail.age}
            </span>
            <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
              sex : {cutomerDetail.gender}
            </span>
            <p style={{ margin: 10 }}>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700'>
                IdProof : {cutomerDetail.customerId}
              </span>
            </p>
            <button
              id='navAction'
              onClick={() => {
                HttpService.delete(
                  `/Booking/${bookingDetail.bookingId}`,
                  {},
                  (err, res) => {
                    console.log(err);
                    console.log(res);
                    if (err) {
                      console.log(err);
                      this.props.alert.show('Cant Delete ', {
                        timeout: 1500,
                        type: 'danger'
                      });
                      return;
                    }
                    this.props.alert.show('Booking Deleted', {
                      timeout: 1500,
                      type: 'danger',
                      onClose: () => {
                        this.props.history.goBack();
                        console.log('closed');
                      }
                    });
                  }
                );
              }}
              style={{ marginRight: 10, backgroundColor: '#E94948' }}
              className=' mx-auto lg:mx-0 hover:underline  text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-2 px-2 shadow opacity-75'
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withAlert()(withRouter(BookingDetailPage));
