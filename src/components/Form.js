import React from 'react';


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
  }
  myChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }
  render() {
    return (
      <form>
      <h2>Zdravo {this.state.username} ,drago nam je da ste pokazali interesovanje za naše proizvode.</h2>
      <p>Recite mi svoje ime:</p>
      <input
        type='text'
        onChange={this.myChangeHandler}
      />
      </form>
    );
  }
}

export default Form;


