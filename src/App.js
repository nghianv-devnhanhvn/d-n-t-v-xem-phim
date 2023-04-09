import {createBrowserHistory} from "history";
import {Router, Switch} from "react-router-dom";
import HomeTemplate from "./templates/homeTemplate/HomeTemplate";
import Home from "./pages/home/Home";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchDataFromApi} from "./utils/api";
import {getApiConfiguration} from "./redux/stores/homeSlice";

export const history = createBrowserHistory();

function App() {

    const dispatch = useDispatch();
    const {url} = useSelector(state => state.home);

    useEffect(() => {
        fetchApiConfig();
    }, []);

    const fetchApiConfig = () => {
        fetchDataFromApi("/configuration").then((res) => {
            // console.log(res);

            const url = {
                backdrop: res.images.secure_base_url + "original",
                poster: res.images.secure_base_url + "original",
                profile: res.images.secure_base_url + "original",
            };

            dispatch(getApiConfiguration(url));
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
