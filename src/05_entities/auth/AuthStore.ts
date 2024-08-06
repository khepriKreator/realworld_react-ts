import {makeAutoObservable} from "mobx";
import {Models_LoginUser} from "../../06_shared/api";

const initialState: Models_LoginUser = {
    email: null,
    password: null,
}
export class Auth {
    constructor() {
        makeAutoObservable(this)
    }


}