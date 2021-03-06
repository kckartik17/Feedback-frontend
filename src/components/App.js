import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveryNew</h2>;
const Landing = () => <h2>Landing</h2>;

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <div className="container">
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
