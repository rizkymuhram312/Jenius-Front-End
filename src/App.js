import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-background">
      <Header />
      <div className="container mx-auto px-4 pt-40 lg:pt-20">
        <Switch>
          <Route path="/" component={Home} exact />
         

        </Switch>
      </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
