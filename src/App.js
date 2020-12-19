import React,{ useState } from 'react';
import Layout from './components/Layout';
import DropDownList from './components/DropDownList';

import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => { 
  const[state, setState] = useState({
    selectedItem: '',
  })
     

   const handleChange = (selectedItem) => {
    setState({selectedItem: selectedItem.target.value});
  };

  return (
      <div className="container-fluid">
        <DropDownList handleChange={handleChange}/>
        <Layout selectedItem={state.selectedItem}/></div>
    );
}


export default App;





