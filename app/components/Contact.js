import React from 'react';


const Contact = React.createClass({
  render() {
    return (
      <div id='contact' >
        <div className='contactStory'>
          <h2> Contact Me</h2>
          <div className="part">
            <h5><i className="fa fa-phone " aria-hidden="true"></i> Call</h5>
            <h5>+55 (27) 99528-5511</h5>
          </div>
          <div className="part">
            <h5><i className="fa fa-paper-plane" aria-hidden="true"></i> Email</h5>
            <h5><a href="mailto:andreixoc@hotmail.com">andreixoc@hotmail.com</a></h5>
          </div>
          <div>
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
          <form action="/sendEmail" method='POST' className="col s10 offset-s1 ">
          <div className="input-field col s12 m8 offset-m2">
            <input id="name" type="text" className="validate"/>
            <label htmlFor="first_name">Name</label>
          </div>
          <div className="input-field col s12 m8 offset-m2">
            <input id="email" type="email" className="validate"/>
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-filed col-s12 m8 offset-m2">
            <label htmlFor="textarea1">Message</label>
            <textarea id="textarea1" className="materialize-textarea"></textarea>

          </div>
          <button type='submit' className='waves-effect waves-light btn'>Send Message</button>
        </form>
        </div>
      </div>
    )
  }
});

export default Contact;
