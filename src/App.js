import React,{ Component } from 'react';
import Layout from './components/Layout';
import DropDownList from './components/DropDownList';

import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component { 
    state = {
      selectedItem: '',
    };  

   handleChange = (selectedItem) => {
    this.setState({selectedItem: selectedItem.target.value});
  };

  render() {
    return (
      <div className="container-fluid">
        <DropDownList handleChange={this.handleChange}/>
        <Layout selectedItem={this.state.selectedItem}/></div>
    );
  }
}


export default App;





