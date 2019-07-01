import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

export class PolicePage extends Component {
  render() {
    return (
      <div>
        <div>
          <div
            className='w-full '
            onClick={() => this.props.history.push('/policehotel')}
          >
            <div className='bg-white border rounded shadow p-2'>
              <div className='flex flex-row items-center'>
                <div className='flex-shrink pr-4'>
                  <div className='rounded p-3 bg-green-600'>
                    <i className='fa fa-wallet fa-2x fa-fw fa-inverse' />
                  </div>
                </div>
                <div className='flex-1 text-right md:text-center'>
                  <h5 className='font-bold uppercase text-gray-500'>Hotels</h5>
                  <h3 className='font-bold text-3xl'>3</h3>
                </div>
              </div>
            </div>
          </div>
          <div
            className='w-full '
            onClick={() => this.props.history.push('/policecustomer')}
          >
            <div className='bg-white border rounded shadow p-2'>
              <div className='flex flex-row items-center'>
                <div className='flex-shrink pr-4'>
                  <div className='rounded p-3 bg-orange-600'>
                    <i className='fas fa-users fa-2x fa-fw fa-inverse' />
                  </div>
                </div>
                <div className='flex-1 text-right md:text-center'>
                  <h5 className='font-bold uppercase text-gray-500'>
                    Visitors
                  </h5>
                  <h3 className='font-bold text-3xl'>14</h3>
                </div>
              </div>
            </div>
          </div>
          <div
            className='w-full '
            onClick={() => this.props.history.push('/policebooking')}
          >
            <div className='bg-white border rounded shadow p-2'>
              <div className='flex flex-row items-center'>
                <div className='flex-shrink pr-4'>
                  <div className='rounded p-3 bg-yellow-600'>
                    <i className='fas fa-user-plus fa-2x fa-fw fa-inverse' />
                  </div>
                </div>
                <div className='flex-1 text-right md:text-center'>
                  <h5 className='font-bold uppercase text-gray-500'>
                    Compliance
                  </h5>
                  <h3 className='font-bold text-3xl'>14</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(PolicePage);
