import React,{Component} from 'react';

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state ={
      term:''
    };
  }
  render(){
    return(
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event=>{
            this.props.onSearchVideo(event.target.value);
            this.setState({term:event.target.value});
          }}/>
      </div>
    );
  }
  onInputChange(event){
    //console.log(event.target.value);
    console.log(event);
  }
}
//const SearchBar = ()=>{
//  return (<input />);
//};

export default SearchBar;
