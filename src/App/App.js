import {
  Switch,
  Route,
  HashRouter,
} from "react-router-dom/cjs/react-router-dom";
import { TopBar } from "../common/TopBar";
import { Home } from "../features/Home/home";
import { Contact } from "../features/Contact/contact";
import { Portfolio } from "../features/Portfolio/portfolio";
import { About } from "../features/About/about";

function App() {
  return (
    <>
      <HashRouter>
        <TopBar />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
