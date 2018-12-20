>在reactNative官方文档中提供一个第三方的路由包[参考文档](https://reactnavigation.org/docs/intro/),`reactNative`官方仅仅是简单的介绍了下[官方跳转地址](http://reactnative.cn/docs/0.50/navigation.html#content)

### 一、手机`App`开发过程中常见的路由方式
* 1、`TabNavigator`关于`Tab`切换的到(类似选项卡功能)
* 2、`StackNavigator`普通的从一个页面跳转到另外一个页面
* 3、`DrawerNavigator`类似`QQ`左侧导航的效果

### 二、安装`react-navigation`
* 1、安装

    ```javascript
    npm install --save react-navigation
    ```
    
### 三、关于`StackNavigator`的使用

* 1、入口组件中引入

    ```javascript
    import { StackNavigator } from 'react-navigation';
    ```
    
* 2、创建一个`StackNavigator`

    ```javascript
    import { StackNavigator } from 'react-navigation';
    import BookList from './pages/components/BookList';
    import BookDetail from './pages/components/BookDetail';
    // 定义一个StackNavigator
    const App = StackNavigator({
        BookList:{screen:BookList}, // 默认会进入第一个路由视图中
        BookDetail:{screen:BookDetail}
    })
    
    export default App;
    ```
    
* 3、默认会生成一个头部导航的,关于参数的介绍
    * initialRouteName：设置堆栈的默认屏幕。必须匹配路由配置的关键之一。
    * initialRouteParams：初始路径参数
    * navigationOptions ：屏幕的默认导航选项
    * paths：一个映射覆盖设置在路由配置的路径视觉选项：
    * mode：定义呈现和转换的样式
    * card：使用标准的iOS和Android屏幕转换。这是默认值。
    * modal：使屏幕从底部滑动，这是一种常见的IOS模式。只在iOS上工作，对Android没有影响。
    * headerMode：指定如何呈现标题。
    * float：渲染一个标头，停留在顶部的动画作为屏幕的变化。这是IOS上常见的模式。
    * screen：每个屏幕都有一个附加到它的页眉，页眉与屏幕一起淡入淡出。这是Android上常见的模式。
    * none：不渲染标题
    * cardStyle：使用此道具可覆盖或扩展堆栈中单个卡的默认样式。
    * transitionConfig：函数返回覆盖默认屏幕转换的对象。
    * onTransitionStart：当卡片转换动画即将开始时被调用的函数。
    * onTransitionEnd：函数在卡片转换动画完成后调用。
    * title：字符串，可以作为一个 headertitle 和 tabbarlabel 回退
    * header：React组件或一个传递HeaderProps参数并返回一个React组件的函数，显示一个标题。设置为null隐藏头部
    * headerTitle：标头使用的字符串或React组件。默认为场景标题
    * headerRight显示在头部右侧的react组件
    * headerLeft显示在头部左侧的react组件
    * headerStyle
    * header的样式对象
    * headerTitleStyle
    * title组件的样式对象
    * headerBackTitleStyle返回标题的样式对象
    * headerTintColor标题颜色 
