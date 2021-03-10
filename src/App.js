import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Kontak from "./components/Kontak";
import AddKontak from "./components/AddKontak";
import EditKontak from "./components/EditKontak";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-blue-100 w-full">
        <Header />
        <div className="container w-full mx-auto px-4 pt-2 lg:pt-5">
          <Switch>
            <Route path="/" component={Kontak} exact />
            <Route path="/addKontak" component={AddKontak} exact />
            <Route path="/editKontak" component={EditKontak} exact />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
