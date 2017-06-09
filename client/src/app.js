
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
        <Choices setResults={this.getPizzaPoll.bind(this)} />
        <Results pizzas={this.state.pizzaPoll}/>
      </div>
    );
  }
};

class Choices extends React.Component  {
  constructor(props) {
    super(props)


    this.state = {
    };
    this.state.pizzaType = 'vegan';
  }

  handleChange(e) {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });

    console.log(this.state);
  };
  handleButton(e) {
    this.props.setResults(this.state);
    console.log('button sate',this.state)
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
            <select  name="pizzaType" value="vegan" onChange={(e) => this.handleChange(e)}>
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

var Results = ({pizzas}) => (
  <div>
    <h4>Results</h4>
    {pizzas.map((pizza) =>
        <ResultEntry
          name={pizza.name}
          number={pizza.number}
          pieOrSlice={pizza.pieOrSlice}
          type={pizza.pizzaType}
        />
    )}
  </div>
);


var ResultEntry = ({name,number,pieOrSlice,type}) => (
  <div>
  <h4>{name} wants {number} of {type} {pieOrSlice}</h4>
  </div>
);


ReactDOM.render(<App />, document.getElementById('app'))
