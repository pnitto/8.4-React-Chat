var App = React.createClass({
  propTypes: {
    recipes: React.PropTypes.array.isRequired
  },
  render(){
  return (
    <div>
      <ul>
        {
          this.props.recipes.map((r) => <Recipe recipe={r} key={r.id}/>)
        }
      </ul>
    </div>
  );
  }
});

var Recipe = React.createClass({
  propTypes: {
  recipe : React.PropTypes.object.isRequired
},

render(){
  return (
    <li>
    <h1>{this.props.recipe.Name}</h1>
    <ul>
      {this.props.recipe.ingredients.map((a) => {
        return (
          <li key={a.id}>
          <h1>{a.name}</h1>
          <h3>{a.qty}</h3>
          <h1>{a.unit}</h1>
          </li>
        )
      })
    }
    </ul>
  </li>
);
}
})
export default {App};
