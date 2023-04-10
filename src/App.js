import {createBrowserHistory} from "history";
import {Router, Switch} from "react-router-dom";
import HomeTemplate from "./templates/homeTemplate/HomeTemplate";
import Home from "./pages/home/Home";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchDataFromApi} from "./utils/api";
import {getApiBanners, getApiConfiguration} from "./redux/stores/homeSlice";
import {API_LINK_BANNER} from "./utils/settings/config";

export const history = createBrowserHistory();

function App() {

    const dispatch = useDispatch();
    const {url} = useSelector(state => state.home);

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
