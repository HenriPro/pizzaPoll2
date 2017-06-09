
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      pizzaPoll: []
    };
  }

  getPizzaPoll(pollObj){

    this.setState({pizzaPoll : this.state.pizzaPoll.concat([pollObj])});
    console.log('pizzapoll', this.state);
  }

  render() {
    return (
      <div>
        <Choices />
        <Results/>
      </div>
    );
  }
};

class Choices extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {
    };
  }

  handleChange(e) {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
    console.log(e.target.name);

    console.log(this.state);
  };
  handleButton(e) {
    console.log(this.state)
  }

  render() {
    return (
        <div>
          <h4>Choices</h4>
          <form>
            <label>
              Name:
              <input name="name" type="text"  onChange={(e) => this.handleChange(e)} />
            </label>
            <select  name="pizzaType" onChange={(e) => this.handleChange(e)}>
             <option name="pizzaType" value="vegan">VEGAN!!</option>
             <option name="pizzaType" value="veggie">Veggie</option>
             <option name="pizzaType" value="cheese">Cheese</option>
             <option name="pizzaType" value="combo">Combo</option>
             <option name="pizzaType" value="pepperoni">Pepperoni</option>
            </select>
              <div className="radio">
                 <label>Whole Pizza</label>
                 <input id="pie"
                              type="radio"
                              value="pie"
                              name="pieOrSlice"
                              onChange={(e) => this.handleChange(e)}
                              checked={this.state.pieOrSlice === 'pie'} />
                 <label>Slice</label>
                 <input id="slice"
                              type="radio"
                              value="slice"
                              name="pieOrSlice"
                              onChange={(e) => this.handleChange(e)}
                              checked={this.state.pieOrSlice === 'slice'} />

              </div>
              <label>
                Number of Slices or Pizzas:
                <input name="number" type="number" onChange={(e) => this.handleChange(e)} />
              </label>
          </form>
          <button onClick={(e) => this.handleButton(e)}>Submit</button>

        </div>
    );
  }
}

var Results = ({prop}) => (
  <div>
    <h4>results</h4>
  </div>
);


ReactDOM.render(<App />, document.getElementById('app'))
