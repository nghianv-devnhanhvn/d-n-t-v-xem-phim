import {createBrowserHistory} from "history";
import {Router, Switch} from "react-router-dom";
import HomeTemplate from "./templates/homeTemplate/HomeTemplate";
import Home from "./pages/home/Home";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {fetchDataFromApi} from "./utils/api";
import {getApiBanners} from "./redux/stores/HomeSlice";
import {API_LINK_BANNER} from "./utils/settings/config";

export const history = createBrowserHistory();

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        fetchApiConfig();
    }, []);

    const fetchApiConfig = () => {
        fetchDataFromApi(API_LINK_BANNER).then((res) => {
            dispatch(getApiBanners(res?.content));
        });
    };

  return (
      <Router history={history}>
          <Switch>
              <HomeTemplate path="/" exact Component={Home} />
              <HomeTemplate path="/home" exact Component={Home} />
          </Switch>
      </Router>
  );
}

export default App;
