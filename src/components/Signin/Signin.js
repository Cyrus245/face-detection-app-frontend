// import React from "react";

// const Signin = ({ onRouteChange }) => {
//   return (
//     <div>
//       <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center">
//         <main>
//           <div>
//             <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
//               <legend className="f1 fw6 ph0 mh0">Sign In</legend>
//               <div className="mt3">
//                 <label className="db fw6 lh-copy f6" htmlFor="email-address">
//                   Email
//                 </label>
//                 <input
//                   className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
//                   type="email"
//                   name="email-address"
//                   id="email-address"
//                 />
//               </div>
//               <div className="mv3">
//                 <label className="db fw6 lh-copy f6" htmlFor="password">
//                   Password
//                 </label>
//                 <input
//                   className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
//                   type="password"
//                   name="password"
//                   id="password"
//                 />
//               </div>
//             </fieldset>
//             <div className="">
//               <input
//                 onClick={() => onRouteChange("home")}
//                 className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib center"
//                 type="submit"
//                 value="Sign in"
//               />
//             </div>
//             <div className="lh-copy mt3">
//               <p
//                 onClick={() => onRouteChange("register")}
//                 className="f6 link dim black db center pointer"
//               >
//                 Register
//               </p>
//             </div>
//           </div>
//         </main>
//       </article>
//     </div>
//   );
// };

// export default Signin;

import axios from "axios";
import React, { Component } from "react";

export default class Signin extends Component {
  constructor(props) {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  onEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  onPasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  onSubmitSignin = async () => {
    try {
      const result = await axios.post("http://localhost:3001/signin", {
        email: this.state.email,
        password: this.state.password,
      });

      if (result.data.id) {
        this.props.loadUser(result.data);
        this.props.onRouteChange("home");
      }
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { onRouteChange } = this.props;
    return (
      <div>
        <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center">
          <main>
            <div>
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="email-address">
                    Email
                  </label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="email"
                    name="email-address"
                    id="email-address"
                    onChange={this.onEmailChange}
                  />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="password"
                    name="password"
                    id="password"
                    onChange={this.onPasswordChange}
                  />
                </div>
              </fieldset>
              <div className="">
                <input
                  onClick={this.onSubmitSignin}
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib center"
                  type="submit"
                  value="Sign in"
                />
              </div>
              <div className="lh-copy mt3">
                <p
                  onClick={() => onRouteChange("register")}
                  className="f6 link dim black db center pointer"
                >
                  Register
                </p>
              </div>
            </div>
          </main>
        </article>
      </div>
    );
  }
}
