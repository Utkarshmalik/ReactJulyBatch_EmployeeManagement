import React,{Component} from 'react';


class temp extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {

        console.log(this.props);
        return (
         <div>
         {this.props.children}
         </div>
        );
    }
}

export default temp;