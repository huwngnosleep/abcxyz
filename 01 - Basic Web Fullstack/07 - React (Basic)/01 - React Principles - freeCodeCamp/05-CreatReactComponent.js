class Kitten extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <h1>Hi</h1>
      );
    }
}

// by extending "Component", the Kitten class can access to many React features
// so it use "super()"" to call the constructor function of class "Component"