import Axios from "axios";
import {DOMAIN, TOKEN} from "../utils/settings/config";

export class BaseService{

    // put json về backend
    put = (url, model) => {
        return Axios({
            url: `${DOMAIN}/${url}`,
            method: 'PUT',
            data: model,
            headers: {'Authorization': 'Bearer '+ localStorage.getItem(TOKEN)}
        })
    }

    post = (url, model) => {
        return Axios({
            url: `${DOMAIN}/${url}`,
            method: 'POST',
            data: model,
            headers: {'Authorization': 'Bearer '+ localStorage.getItem(TOKEN)}
        })
    }

    get = (url, model) => {
        return Axios({
            url: `${DOMAIN}/${url}`,
            method: 'GET',
            headers: {'Authorization': 'Bearer '+ localStorage.getItem(TOKEN)}
        })
    }

    delete = (url, model) => {
        return Axios({
            url: `${DOMAIN}/${url}`,
            method: 'DELETE',
            headers: {'Authorization': 'Bearer '+ localStorage.getItem(TOKEN)}
        })
    }
}