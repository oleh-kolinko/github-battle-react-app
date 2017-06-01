import React, {Component} from 'react';

class Battle extends Component{
  constructor(props){
    super(props);
    this.state={
      p1Name:'',
      p2Name:'',
      p1Image:'',
      p2Image:'',

    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(id,username){
    this.setState(()=>{
      let newState = {}
      newState[id+'Name'] = username;
      newState[id+'Name'] = 'https://github.com/' + username + '.png?size=200';
      return newState;
    })
  }
  render(){
    const p1Name = this.state.p1Name;
    const p2Name = this.state.p2Name;
    return(
      <div>
        <div className='row'>
          {
            ! p1Name &&
            <PlayerInput
            id='p1'
            label='Player 1'
            onSubmit={this.handleSubmit}
            />
          }

          {
            ! p2Name &&
            <PlayerInput
            id='p2'
            label='Player 2'
            onSubmit={this.handleSubmit}
            />
          }
        </div>
      </div>
    )
  }
}

class PlayerInput extends Component{
  constructor(props){
    super(props)
    this.state = {
      username: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event){
    var value = event.target.value;

    this.setState(()=>{
      return {
        username: value
      }
    })
  }
  handleSubmit(event){
    event.preventDefault();
    this.props.onSubmit(
      this.props.id,
      this.state.username
    )
  }
  render(){
    return(
      <form className='column' onSubmit={this.handleSubmit}>
        <label className='header' htmlFor='username'>
          {this.props.label}
        </label>
        <input
          id='username'
          placeholder='github username'
          type='text'
          autoComplete='off'
          value={this.state.username}
          onChange={this.handleChange}
        />

        <button
          className='button'
          type='submit'
          disabled={!this.state.username}>
          Submit
        </button>
      </form>
    )
  }
}

export default Battle;
