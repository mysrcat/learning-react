import React from "react"
import ReactDOM from "react-dom"
import SeasonDisplay from "./SeasonDisplay"
import Spinner from "./Spinner"

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = { latitude: null, errorMessage: "" }
  }

  componentDidMount() {
    // Good place to do data-loading
    console.log("My component was rendered to the screen")
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ latitude: position.coords.latitude }),
      (error) => this.setState({ errorMessage: error.message })
    )
  }

  componentDidUpdate() {
    // Good place to do more data-loading when state/props change
    console.log("My component was just updated - it rerendered!")
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.latitude) {
      return <div>Error: {this.state.errorMessage}</div>
    }

    if (!this.state.errorMessage && this.state.latitude) {
      return (
        <div>
          <SeasonDisplay latitude={this.state.latitude} />
        </div>
      )
    }

    return (
      <div>
        <Spinner message="Please accept location request" />
      </div>
    )
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>
  }
}

ReactDOM.render(<App />, document.querySelector("#root"))
