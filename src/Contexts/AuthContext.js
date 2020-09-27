import React ,{Component,createContext} from 'react';

export const AuthContext=createContext();



class AuthContextProvider extends Component
{

  constructor()
  {
    super();

    this.state={
      user:null
    }
  }

  onLogin(userName)
  {
    this.setState({user:userName})
  }

  onLogout()
  {
    this.setState({user:null})
  }

  render()
  {
    return(
      <AuthContext.Provider value={{...this.state,onLogin:this.onLogin.bind(this),onLogout:this.onLogout.bind(this)}} >
        {this.props.children}
      </AuthContext.Provider>
    )
  }


}


export default AuthContextProvider;