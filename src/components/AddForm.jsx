import React, { Component } from 'react';

export class AddForm extends Component {
  state = {
    name: '',
    calories: 0,
    image: '',
  };

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <form onSubmit={() => this.props.submit(this.state)}>
        <div>
          <label className='label'>
            Name:&nbsp;
            <input
              type="text"
              name="name"
              id="name"
              onChange={this.handleChange}
              value={this.state.name}
              className='input'
            />
          </label>
        </div>
        <div>
          <label className='label'>
            Calories:&nbsp;
            <input
              type="number"
              name="calories"
              id="calories"
              onChange={this.handleChange}
              value={this.state.calories}
              className='input'
            />
          </label>
        </div>
        <div>
          <label className='label'>
            url:&nbsp;
            <input
              type="url"
              name="image"
              id="image"
              onChange={this.handleChange}
              value={this.state.image}
              className='input'
            />
          </label>
        </div>
        <button className='button is-'>Submit!</button>
      </form>
    );
  }
}

export default AddForm;
