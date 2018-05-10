class App extends React.Component {

	render() {
		return (
		  <div>
		  	<GroceryList groceryItems={['Avocados','Tomatoes','Watermelon','Ground Beef']}/>
		  </div>
		);
	}
};

var GroceryList = (props) => (
			<div>
				<h1>Grocery List</h1>
				<ul>
					{
						props.groceryItems.map((item) => 
							<GroceryListItem item={item}/>
						)
					}
				</ul>
			</div>	
  	);


class GroceryListItem extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			done: false,
			hover: false
		}
	}

	onListItemClick(event) {
    this.setState({
    	done: !this.state.done
    })
  };

  onItemHover(event) {
  	this.setState({
    	hover: !this.state.hover
    });
  };

	render() {

		var style = {
			textDecoration: this.state.done ? 'line-through' : 'none',
			fontWeight: this.state.hover ? 'bold': 'normal'
		}

		return (
			<li style={style} 
				onMouseEnter={this.onItemHover.bind(this)} 
				onMouseLeave={this.onItemHover.bind(this)} 
				onClick={this.onListItemClick.bind(this)}> 
					{this.props.item}
			</li>
		);
	}
}


ReactDOM.render(<App />, document.getElementById("app"));