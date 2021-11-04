import './App.css';
import Nav from "./components/navbar/Nav";
import {Route} from "react-router-dom";
import {routes} from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="app">
        <Nav/>
        {
            routes.map(route =>
                (<Route
                    exact={route.exact}
                    path={route.path}
                    component={route.component}/>))
        }
    </div>
  );
}

export default App;
