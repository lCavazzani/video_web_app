import React, {Component} from 'react';
//import ReactDOM from 'react-dom';

class SearchBar extends Component {

    constructor(props){
      super(props);
      this.state = {term: ''};
    }

    render(){
        return (
          <div>
          <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
          Value of input: {this.state.term}
          </div>
        );
    }
    onInputChange(term){
      this.setState({term})
      this.props.onSearchTermChange(term)
    }

}



// const SearchBar = () => {
//   return <input />;
// }

export default SearchBar;
