import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Navbar from './components/views/Navbar'
import CompanyDetail from './components/pages/CompanyDetail'
import CompanyList from './components/pages/CompanyList'
import MainPage from './components/pages/MainPage'
import UploadCompany from './components/pages/UploadCompany'

function App() {
  return (
    <div >
      <Navbar />
      <Switch>
          <Route exact path="/" component={MainPage}/>
          <Route exact path="/UploadCompany" component={UploadCompany} />
          <Route exact path="/product/:productId" component={CompanyDetail} />
          <Route exact path="/Companies" component={CompanyList} />
      </Switch>
    </div>
  );
}

export default App;
