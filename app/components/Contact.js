import React from 'react';
import axios from 'axios';

const Contact = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false,
      sentMsg: false,
      displayMsg: null,
      error: null
    }
  },
  handleMessage: function(e){
    e.preventDefault();
    this.setState({
      isLoading:true
    });
    let userInfo= {
      name: this.refs.name.value,
      email: this.refs.email.value,
      msg: this.refs.msg.value
    }
    axios.post('/sendEmail',userInfo).then((res)=> {
      this.setState({
        isLoading:false,
        sentMsg: true,
        displayMsg: 'Your message was sent!'
      })
    }, () => {
      this.setState({
        isLoading: false,
        sentMsg:true,
        error: true,
        displayMsg: 'Something Went wrong, reload and try again!'
      })
    })
  },
  render() {
    let that = this;
    function renderForm() {
      if (that.state.isLoading) {
        return <div className='loader'>Loading...</div>
      } else {
        if (that.state.sentMsg) {
          return (
            <div>
              <h1>{that.state.displayMsg}</h1>
            </div>
          )
        } else {
          return (
            <form onSubmit={that.handleMessage} className="col s10 offset-s1 ">
              <div className="input-field col s12 m8 offset-m2">
                <input ref='name' id="name" type="text" className="validate"/>
                <label htmlFor="first_name">Name</label>
              </div>
              <div className="input-field col s12 m8 offset-m2">
                <input ref='email' id="email" type="email" className="validate"/>
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-filed col-s12 m8 offset-m2">
                <label htmlFor="textarea1">Message</label>
                <textarea ref='msg' id="textarea1" className="materialize-textarea"></textarea>

              </div>
              <button type='submit' className='waves-effect waves-light btn'>Send Message</button>
            </form>
          )
        }
      }
    };
    return (
      <div id='contact' >
        <div className='contactStory'>
          <h2> Contact Me</h2>
          <div className="part">
            <h5><i className="fa fa-phone " aria-hidden="true"></i> Call: +55 (27) 99528-5511</h5>
          </div>
          <div className="part">
            <h5>
              <i className="fa fa-paper-plane" aria-hidden="true"></i> Email:
              <a href="mailto:andreixoc@hotmail.com"> andreixoc@hotmail.com</a>
            </h5>
          </div>
          <div>
            <h5>Connect</h5>
            <ul>
              <li>
                <a className='github' target='blank_' href="https://github.com/AndreiCalazans"><i className="fa fa-github fa-2x" aria-hidden="true"></i></a>
              </li>
              <li>
                <a className='linkedin' target='blank_' href="https://www.linkedin.com/in/andrei-xavier-de-oliveira-calazans-8b1269115/"><i className="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
              </li>
              <li>
                <a className='twitter' target='blank_' href="https://twitter.com/Andrei_Calazans"><i className="fa fa-twitter fa-2x" aria-hidden="true"></i></a>
              </li>
            </ul>
          </div>

        </div>
        <div className='contactStory'>
          <div>
          <h5>Send me a message</h5>
          <p>I'm available for both contract and freelance work so if there's anything that I can do for you, or if you have
            an idea you would like to discuss, please feel free to get in touch.</p>
          </div>
          {renderForm()}
        </div>
      </div>
    )
  }
});

export default Contact;
