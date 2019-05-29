var App = () => (
  <div>
    <h2>GroceryList</h2>
    <GroceryList />
  </div>
);

var GroceryList = () => (
  <ul>
    <li>Kale</li>
    <li>Cucumbers</li>
  </ul>
);



ReactDOM.render(<App />, document.getElementById('app'));