import React, { Component } from 'react'
import css from "./css/NavBarSimple.module.css"
import NavBarChild from './NavBarChild'

export class NavBarForm extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn: true,
    }
  }


  handleClick = () => {
    this.setState((prevState) => ({
        isLoggedIn: prevState.isLoggedIn ? false: true
    }), () => console.log(this.state.isLoggedIn))
  }


  render() {
    return (
      <div className={css.NavBar}>
        <h1>IronKid</h1>
        {/* {
          this.state.isLoggedIn ? 
            <button onClick={() => this.handleClick()}>Login</button>
           :
           <form>
              <label htmlFor='username'>Username:</label>
              <input placeholder='username' id='username'/>

              <label htmlFor='password'>Password:</label>
              <input placeholder='********' id='password'/>
              <button onClick={() => this.handleClick()}>Submit</button>
           </form>
        } */}

        <NavBarChild 
          isLoggedIn={this.state.isLoggedIn}
          handleClick={this.handleClick}
        />
      </div>
    )
  }
}

export default NavBarForm