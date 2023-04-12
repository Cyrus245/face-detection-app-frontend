import React, { Component } from "react";
import ParticlesBackground from "./components/ParticlesBackgound/ParticlesBackground";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import "./App.css";
import Signin from "./components/Signin/Signin";
import Register from "./components/Register/Register";
import Copyright from "./components/Copyright/Copyright";
import axios from "axios";

const intialState = {
  input: "",
  imageUrl: "",
  box: {},
  route: "signin",
  isSignedIn: false,
  user: {
    id: "",
    name: "",
    email: "",
    password: "",
    entries: 0,
    joined: "",
  },
};

export default class App extends Component {
  constructor() {
    super();
    this.state = intialState;
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        password: data.hashedPassword,
        entries: data.entries,
        joined: data.joined,
      },
    });
  };

  faceCalculate = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputImage");
    const width = image.width;
    const height = image.height;

    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };

  faceLocation(box) {
    this.setState({ box: box });
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ input: value });
  };

  onRouteChange = (route) => {
    if (route === "signout") {
      this.setState(intialState);
    } else if (route === "home") {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };

  onSubmit = async () => {
    this.setState({ imageUrl: this.state.input });
    const result = await axios.post("http://localhost:3001/imgurl", {
      imageUrl: this.state.input,
    });

    if (result) {
      const imageResult = await axios.post("http://localhost:3001/images", {
        id: this.state.user.id,
      });

      this.setState(
        Object.assign(this.state.user, {
          entries: imageResult.data[0].entries,
        })
      );
    }

    this.faceLocation(this.faceCalculate(result.data));

    // const USER_ID = "dh45vwq6u4j7";
    // const PAT = "20dde3f0f1ef4995bf62a4146c1fd824";
    // const APP_ID = "my-first-application";
    // const MODEL_ID = "face-detection";
    // const MODEL_VERSION_ID = "45fb9a671625463fa646c3523a3087d5";
    // const IMAGE_URL = this.state.input;

    // const raw = JSON.stringify({
    //   user_app_id: {
    //     user_id: USER_ID,
    //     app_id: APP_ID,
    //   },
    //   inputs: [
    //     {
    //       data: {
    //         image: {
    //           url: IMAGE_URL,
    //         },
    //       },
    //     },
    //   ],
    // });

    // const requestOptions = {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     Authorization: "Key " + PAT,
    //   },
    //   body: raw,
    // };

    // fetch(
    //   "https://api.clarifai.com/v2/models/" +
    //     MODEL_ID +
    //     "/versions/" +
    //     MODEL_VERSION_ID +
    //     "/outputs",
    //   requestOptions
    // )
    //   .then((response) => response.json())
    //   .then(async (result) => {
    //     console.log(result);
    // if (result) {
    //   const imageResult = await axios.post("http://localhost:3001/images", {
    //     id: this.state.user.id,
    //   });

    //   this.setState(
    //     Object.assign(this.state.user, {
    //       entries: imageResult.data[0].entries,
    //     })
    //   );
    // }

    // this.faceLocation(this.faceCalculate(result));
    //   })
    //   .catch((error) => console.log("error", error));
  };

  render() {
    return (
      <div>
        <ParticlesBackground />
        <Navigation
          onRouteChange={this.onRouteChange}
          isSignedIn={this.state.isSignedIn}
        />

        {this.state.route === "home" ? (
          <div>
            <Logo />
            <Rank
              name={this.state.user.name}
              entries={this.state.user.entries}
            />
            <ImageLinkForm
              handleChange={this.handleChange}
              onSubmit={this.onSubmit}
            />
            <FaceRecognition
              box={this.state.box}
              imageUrl={this.state.imageUrl}
            />
          </div>
        ) : this.state.route === "signin" ? (
          <Signin onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
        ) : (
          <Register
            onRouteChange={this.onRouteChange}
            loadUser={this.loadUser}
          />
        )}

        <Copyright />
      </div>
    );
  }
}
