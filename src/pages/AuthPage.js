import React, { Component } from 'react';
import HttpService from '../utils/HttpsService';
import { withRouter } from 'react-router-dom';
import { withAlert } from 'react-alert';
import uuid from 'uuid-v4';

export class AuthPage extends Component {
  state = {
    email: '',
    password: '',
    cpassword: '',
    name: '',
    signup: false
  };

  onSubmit = e => {
    e.preventDefault();
    const { email, password, cpassword, signup, name } = this.state;
    if (email === '') {
      this.props.alert.show('Please type Email', {
        timeout: 1500,
        type: 'danger'
      });
      return;
    }
    if (password === '') {
      this.props.alert.show('Please type Password', {
        timeout: 1500,
        type: 'danger'
      });
      return;
    }
    if (signup) {
      if (name === '') {
        this.props.alert.show('Please Enter Name', {
          timeout: 1500,
          type: 'danger'
        });
        return;
      }
      if (password !== cpassword) {
        this.props.alert.show('Password Does not match', {
          timeout: 1500,
          type: 'danger'
        });
        return;
      }
      const instituteId = uuid();
      const data = {
        $class: 'org.atithi.app.Institute',
        instituteId: instituteId,
        email: email,
        name: name,
        type: 'Hotel',
        policeId: 'String'
      };
      HttpService.post('/Institute', data, (err, res) => {
        if (err) {
          this.props.alert.show('Something Went Wront', {
            timeout: 1500,
            type: 'danger'
          });
          return;
        }
        if (res.status === 200) {
          this.props.alert.show('Singup Successful', {
            timeout: 1500,
            type: 'success',
            onClose: () => {
              this.setState({ signup: false });
            }
          });
        }
      });
    } else {
      HttpService.get('/Institute', {}, (err, res) => {
        if (err) {
          this.props.alert.show('Something Went Wront', {
            timeout: 1500,
            type: 'danger'
          });
          return;
        }
        const findUser = res.data.find(user => user.email === email);
        if (findUser) {
          localStorage.setItem('login', findUser);
          this.props.alert.show('Login Successful', {
            timeout: 1500,
            type: 'success',
            onClose: () => {
              this.props.history.push('/');
            }
          });
        }
      });
    }
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <div className='w-full' style={{ width: '100%' }}>
          <form onSubmit={e => this.onSubmit(e)} className='w-full max-w-sm'>
            {this.state.signup ? (
              <div className='md:flex md:items-center mb-6'>
                <div className='md:w-1/3'>
                  <label
                    className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
                    htmlFor='inline-full-name'
                  >
                    Name
                  </label>
                </div>
                <div className='md:w-2/3'>
                  <input
                    className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                    name='name'
                    value={this.state.name}
                    onChange={e => this.onChange(e)}
                    type='text'
                    placeholder='Name'
                  />
                </div>
              </div>
            ) : null}
            <div className='md:flex md:items-center mb-6'>
              <div className='md:w-1/3'>
                <label
                  className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
                  htmlFor='inline-full-name'
                >
                  Email
                </label>
              </div>
              <div className='md:w-2/3'>
                <input
                  className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                  name='email'
                  value={this.state.email}
                  onChange={e => this.onChange(e)}
                  type='email'
                  placeholder='Email'
                />
              </div>
            </div>
            <div className='md:flex md:items-center mb-6'>
              <div className='md:w-1/3'>
                <label
                  className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
                  htmlFor='inline-username'
                >
                  Password
                </label>
              </div>
              <div className='md:w-2/3'>
                <input
                  className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                  name='password'
                  value={this.state.password}
                  onChange={e => this.onChange(e)}
                  type='password'
                  placeholder='******************'
                />
              </div>
            </div>

            {this.state.signup ? (
              <div className='md:flex md:items-center mb-6'>
                <div className='md:w-1/3'>
                  <label
                    className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
                    htmlFor='inline-username'
                  >
                    Confirm Password
                  </label>
                </div>
                <div className='md:w-2/3'>
                  <input
                    className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                    name='cpassword'
                    value={this.state.cpassword}
                    onChange={e => this.onChange(e)}
                    type='cpassword'
                    placeholder='******************'
                  />
                </div>
              </div>
            ) : null}
            <div className='md:flex md:items-center'>
              <div className='md:w-1/3' />
              <div className='md:w-2/3'>
                <button
                  className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
                  type='submit'
                >
                  {this.state.signup ? 'SignUp ' : 'Sign In '}
                </button>
                <a
                  onClick={() => this.setState({ signup: !this.state.signup })}
                  style={{ margin: 10 }}
                >
                  {this.state.signup ? 'Sign In ?' : 'SignUp ?'}
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withAlert()(withRouter(AuthPage));
