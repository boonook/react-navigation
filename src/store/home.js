import { observable, action } from "mobx";

class HomeStore {
    @observable text; // 注册变量，使其成为可检测的
    @observable num;

    constructor() {
        this.num = 0; // 初始化变量，可以定义默认值
        this.text = "Hello, this is homePage!!!";
    }

    @action  // 方法推荐用箭头函数的形式
    plus = () => {
        this.num += 1;
    };

    @action
    minus = () => {
        this.num -= 1;
    };
}

const homeStore = new HomeStore();

export { homeStore };