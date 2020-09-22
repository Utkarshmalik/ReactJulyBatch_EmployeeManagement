import React,{Component,createContext} from 'react';

export const ThemeContext=createContext();


class ThemeContextProvider extends Component
{
    constructor()
    {
        super();
        this.state={               
            language:"Hindi"
        }

    }

    
    render()
    {
        return(
            <ThemeContext.Provider value={{...this.state}}  >
            {this.props.children}
            </ThemeContext.Provider>
        )
    }

}

export default ThemeContextProvider;