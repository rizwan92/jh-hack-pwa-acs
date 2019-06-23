import React, { Component } from 'react';
import uuid from 'uuid-v4';
import HttpService from '../utils/HttpsService';
import { withRouter } from 'react-router-dom';
import { withAlert } from 'react-alert';

export class CreateCustomerPage extends Component {
  state = {
    name: '',
    email: '',
    gender: '',
    age: '',
    idproof: ''
  };

  onSubmit = event => {
    event.preventDefault();

    const { name, email, age, gender, idproof } = this.state;
    const customerId = idproof;

    HttpService.post(
      '/Customer',
      {
        $class: 'org.atithi.app.Customer',
        customerId,
        email,
        name,
        gender,
        age
      },
      (err, res) => {
        if (err) {
          this.props.alert.show('Id Proof Already exist', {
            timeout: 1500,
            type: 'danger'
          });
        } else {
          if (res.status === 200) {
            this.props.alert.show('User Added', {
              timeout: 1500,
              type: 'success',
              onClose: () => {
                this.props.history.goBack();
                console.log('closed');
              }
            });
          }
        }
      }
    );
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div style={{ marginTop: 50 }}>
        <h2>Add Customer</h2>
        <form onSubmit={e => this.onSubmit(e)} className='w-full max-w-lg'>
          <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-first-name'
            >
              Id Proof Number
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
              type='text'
              name='idproof'
              placeholder='Id Proof Number'
              onChange={e => this.onChange(e)}
              value={this.state.idproof}
            />
          </div>
          <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-first-name'
            >
              Name
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
              type='text'
              name='name'
              placeholder='Customer Name'
              onChange={e => this.onChange(e)}
              value={this.state.name}
            />
          </div>
          <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-first-name'
            >
              Email
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
              type='email'
              name='email'
              placeholder='Customer Email'
              onChange={e => this.onChange(e)}
              value={this.state.email}
            />
          </div>
          <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-first-name'
            >
              Gender
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
              type='text'
              name='gender'
              placeholder='Customer Gender'
              onChange={e => this.onChange(e)}
              value={this.state.gender}
            />
          </div>
          <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-first-name'
            >
              Age
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
              type='text'
              name='age'
              placeholder='Customer Age'
              onChange={e => this.onChange(e)}
              value={this.state.age}
            />
          </div>
          <button
            id='navAction'
            type='submit'
            className=' gradient mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75'
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default withAlert()(withRouter(CreateCustomerPage));
