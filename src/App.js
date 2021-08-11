import React from 'react';
import foods from './foods.json';
import 'bulma/css/bulma.css';

import AddForm from './components/AddForm';
import FoodBox from './components/FoodBox';
import Search from './components/Search';
import TodaysFood from './components/TodaysFood';
// import Navbar from './components/Navbar';

class App extends React.Component {
  state = {
    foods: foods,
    displayForm: false,
    searchValue: '',
    selectedFood: [],
  };

  handleNewFood = (food) => {
    const copy = this.state.foods.slice();
    copy.push(food);
    this.setState({
      foods: copy,
      displayForm: !this.state.displayForm,
    });
  };

  handleAdd = () => {
    this.setState({
      displayForm: !this.state.displayForm,
    });
  };

  handleSearch = (str) => {
    this.setState({
      searchValue: str,
    });
  };

  handleSelectFood = (food, quantity) => {
    let exist = false;
    const copy = this.state.selectedFood.slice();
    copy.forEach((selected) => {
      if (selected.name === food.name) {
        // console.log('After If', selected.name, selected.quantity, quantity);
        selected['quantity'] = quantity;
        exist = true;
        return selected;
      } else return selected;
    });
    // console.log('copy !', copy);
    if (!exist) {
      food.quantity = quantity;
      copy.push(food);
    }

    this.setState({
      selectedFood: copy,
    });
  };

  handleRemoveSelectedFood = (name) => {
    const copy = this.state.selectedFood.filter(food => food.name !== name)
    this.setState({
      selectedFood: copy,
    })

  }

  render() {
    let filteredFood = null;
    if (this.state.searchValue !== '') {
      filteredFood = this.state.foods.filter((food) => {
        return food.name
          .toLowerCase()
          .includes(this.state.searchValue.toLowerCase());
      });
    } else {
      filteredFood = [...this.state.foods];
    }

    return (
      <>
        <div className="main">
          <div className="columns">
            <Search handleChange={this.handleSearch} />
          </div>
          <div className="columns">
            <button
              onClick={this.handleAdd}
              className="button column is-1 is-offset-1"
              id="addFoodBtn"
            >
              Add food
            </button>
            <div className="column is-4 is-offset-2">
              {filteredFood.map((food) => {
                return (
                  <div key={food.name}>
                    <FoodBox food={food} selectFood={this.handleSelectFood} />
                  </div>
                );
              })}
            </div>
            {this.state.selectedFood.length > 0 && (
              <TodaysFood selectedFood={this.state.selectedFood} removeFood={this.handleRemoveSelectedFood}/>
            )}
          </div>
          {this.state.displayForm && (
            <div className="column is-3" id="form">
              <AddForm submit={this.handleNewFood} />
            </div>
          )}
        </div>
      </>
    );
  }
}

export default App;
