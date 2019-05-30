var App = () => (
  <div>
    <h2>GroceryList</h2>
    <GroceryList groceries={['Kale', 'Cucumbers']} />
  </div>
);

var GroceryList = (props) => (
  <ul>
    {props.groceries.map(item =>
      <GroceryListItem grocery={item} />
    )}
  </ul>
);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    //STATE!!!
    this.state = {
      //TODO
      hover: false
    };
  }

  onListItemHover() {
    this.setState({
      hover: !this.state.hover
    })
  }

  render() {
    var style = {
      fontWeight: this.state.hover ? 'bold' : 'normal'
    };

    return (
      <li style={style} onMouseOver={this.onListItemHover.bind(this)}>{this.props.grocery}</li>
    );
  }
}



ReactDOM.render(<App />, document.getElementById('app'));