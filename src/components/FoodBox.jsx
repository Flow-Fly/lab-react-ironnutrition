import React from 'react';
import 'bulma/css/bulma.css';

class FoodBox extends React.Component {
  state = {
    quantity: 0,
  };

  handleChange = (e) => {
    if (e.target.value === 0) return;
    this.setState({
      quantity: e.target.value,
    });
  };

  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.food.image} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.food.name}</strong> <br />
                <small>{this.props.food.calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number"
                  onChange={this.handleChange}
                  value={this.state.quantity}
                  min='0'
                />
              </div>
              <div className="control">
                <button
                  className="button is-info"
                  onClick={() =>
                    this.props.selectFood(this.props.food, this.state.quantity)
                  }
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default FoodBox;
