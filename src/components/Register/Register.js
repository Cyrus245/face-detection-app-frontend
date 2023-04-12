import React, { useState } from "react";
import axios from "axios";

function Register({ onRouteChange, loadUser }) {
  const [registration, setRegistration] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onEmailChange = (e) => {
    setRegistration({
      ...registration,
      email: e.target.value,
    });
  };

  const onPasswordChange = (e) => {
    setRegistration({
      ...registration,
      password: e.target.value,
    });
  };

  const onNameChange = (e) => {
    setRegistration({
      ...registration,
      name: e.target.value,
    });
  };
  const onSubmitRegistration = async () => {
    const { name, email, password } = registration;

    try {
      const user = await axios.post("http://localhost:3001/register", {
        name,
        email,
        password,
      });

      console.log(user);
      if (user) {
        loadUser(user.data[0]);
        onRouteChange("home");
      }
    } catch (e) {
      console.log("no input");
    }
  };

  return (
    <div>
      <div>
        <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center">
          <main>
            <div>
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f1 fw6 ph0 mh0">Register</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="email-address">
                    Name
                  </label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="text"
                    name="name"
                    id="name"
                    onChange={onNameChange}
                    required
                  />
                </div>

                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="email-address">
                    Email
                  </label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="email"
                    name="email-address"
                    id="email-address"
                    onChange={onEmailChange}
                    required
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
                    onChange={onPasswordChange}
                    required
                  />
                </div>
              </fieldset>
              <div className="">
                <input
                  // onClick={() => onRouteChange("home")}
                  onClick={onSubmitRegistration}
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib center mv3"
                  type="submit"
                  value="Register"
                />
              </div>
            </div>
          </main>
        </article>
      </div>
    </div>
  );
}

export default Register;

// import axios from "axios";
// import React, { Component } from "react";

// export default class Register extends Component {
//   constructor(props) {
//     super();
//     this.state = {
//       name: "",
//       email: "",
//       password: "",
//     };
//   }

//   onNameChange = (e) => {
//     this.setState({
//       name: e.target.value,
//     });
//   };

//   onEmailChange = (e) => {
//     this.setState({
//       email: e.target.value,
//     });
//   };

//   onPasswordChange = (e) => {
//     this.setState({
//       password: e.target.value,
//     });
//   };

//   onSubmitRegistration = async () => {
//     console.log(this.state);
//     try {
//       const user = await axios.post("http://localhost:3001/register", {
//         name: this.state.name,
//         email: this.state.email,
//         password: this.state.password,
//       });
//       console.log(user);
//       if (user) {
//         this.props.loadUser(user);
//         this.props.onRouteChange("home");
//       }
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   render() {
//     return (
//       <div>
//         <div>
//           <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center">
//             <main>
//               <div>
//                 <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
//                   <legend className="f1 fw6 ph0 mh0">Register</legend>
//                   <div className="mt3">
//                     <label
//                       className="db fw6 lh-copy f6"
//                       htmlFor="email-address"
//                     >
//                       Name
//                     </label>
//                     <input
//                       className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
//                       type="text"
//                       name="name"
//                       id="name"
//                       onChange={this.onNameChange}
//                     />
//                   </div>

//                   <div className="mt3">
//                     <label
//                       className="db fw6 lh-copy f6"
//                       htmlFor="email-address"
//                     >
//                       Email
//                     </label>
//                     <input
//                       className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
//                       type="email"
//                       name="email-address"
//                       id="email-address"
//                       onChange={this.onEmailChange}
//                     />
//                   </div>
//                   <div className="mv3">
//                     <label className="db fw6 lh-copy f6" htmlFor="password">
//                       Password
//                     </label>
//                     <input
//                       className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
//                       type="password"
//                       name="password"
//                       id="password"
//                       onChange={this.onPasswordChange}
//                     />
//                   </div>
//                 </fieldset>
//                 <div className="">
//                   <input
//                     onClick={this.onSubmitRegistration}
//                     className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib center mv3"
//                     type="submit"
//                     value="Register"
//                   />
//                 </div>
//               </div>
//             </main>
//           </article>
//         </div>
//       </div>
//     );
//   }
// }
