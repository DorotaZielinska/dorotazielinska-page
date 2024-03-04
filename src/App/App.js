import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom";
import { TopBar } from "../common/TopBar";
import { Home } from "../features/Home/home";
import { Contact } from "../features/Contact/contact";
import { Portfolio } from "../features/Portfolio/portfolio";
import { About } from "../features/About/about";

function App() {
  return (
    <>
      <BrowserRouter>
        <TopBar />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
