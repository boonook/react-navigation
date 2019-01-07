import { observable, action } from "mobx";

class UserStore {
    @observable userInfo;
    @observable text;

    constructor() {
        this.userInfo = "123";
        this.text = "Hello, this is UserPage!!!";
    }

    @action
    getListData = () => {
        fetch(`http://yapi.demo.qunar.com/mock/5228/record/list`)
            .then(
                action("fetchRes", res => {
                    return res.json();
                })
            )
            .then(
                action("fetchSuccess", data => {
                    return (this.userInfo = data);
                })
            )
            .catch(
                action("fetchError", e => {
                    console.log(e.message);
                })
            );
    };
}

const userStore = new UserStore();

export { userStore };