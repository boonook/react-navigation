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

* 4、一般我们会自己单独定义一个头部组件,修改头部在安卓与`IOS`统一样式[](参考代码见)
    * 使用方式

        ```javascript
        export default class BookList extends Component {
            static navigationOptions = ({ navigation }) => {
                return {
                    header: () => null, // 隐藏头部  
                }
            }
            render() {
                return (
                    <View>
                        <Text>我是书籍列表</Text>
                    </View>
                )
            }
        }
        ```
        ```javascript
        export default class BookDetail extends Component {
            static navigationOptions = ({ navigation }) => {
                return {
                    header: () => <HeaderCom backgEvent={()=>navigation.goBack()} title="书籍详细页面"/>, //使用自己定义的头部
                }
            }
            render() {
                return (
                    <View>
                        <Text>我的书籍详细页面</Text>
                    </View>
                )
            }
        }
        ```
* 5、关于`navigation`相关的属性及方法(在浏览器上调试打印出来的)

    ![这里写图片描述](http://img.blog.csdn.net/20171119130008698?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQva3VhbmdzaHAxMjg=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
    
* 6、进行页面跳转(从书籍列表到书籍详细页面)
    
    ```javascript
    export default class BookList extends Component {
        static navigationOptions = ({ navigation }) => {
            return {
                header: () => null, // 隐藏头部
            }
        }
        render() {
            const { navigate } = this.props.navigation;
            return (
                <View>
                    <Text>我是书籍列表</Text>
                    <Button title="按钮" onPress={()=>navigate('BookDetail')}/>
                </View>
            )
        }
    }
    ```
    
* 7、页面之间跳转传递数据
    * 1、传递参数

        ```javascript
        <Button title="按钮" onPress={()=>navigate('BookDetail',{ bookId: '10000' })}/>
        ```
        
    * 2、接收参数

        ```javascript
        <Text>接收到的ID:{this.props.navigation.state.params.bookId}</Text>
        ```
        
* 8、一般手机`App`都有一个引导页面,多少时间进入到主页

    ```javascript
    ...
    componentDidMount(){
        const { navigate} = this.props.navigation;
        ToastAndroid.show('1s后进入主页', ToastAndroid.SHORT);
        setTimeout(()=>{
            navigate('BookList')
        },1000);
    }
    ...
    ```

### 四、关于`TabNavigator`的使用(简单使用一个带文字的)

* 1、定义一个`TabBar`

    ```javascript
    import MoveList from './../components/MoveList';
    import BookList from './../components/BookList';
    import { TabNavigator } from "react-navigation";
    const TabBar = TabNavigator({
        图书: { screen: BookList },
        电影: { screen: MoveList }
    },{
        tabBarPosition: 'bottom', // 修改导航的位置
        tabBarOptions: {
            activeTintColor: 'red', // 选中文字的颜色
            pressColor: 'green',  // 手指按下的背景色
            style:{
                backgroundColor: '#fff', // 导航的背景色
                borderTopWidth:1,
                borderColor:'#ddd',
            },
            labelStyle:{ // 设置文字的样式
                fontSize: 24,
                color:'#333'
            }
        }
    });
    
    export default TabBar;
    ```
    
* 2、使用`TabBar`

    ```javascript
    import { StackNavigator } from 'react-navigation';
    import BookList from './pages/components/BookList';
    import BookDetail from './pages/components/BookDetail';
    import Leading from './pages/components/Leading';
    import TabBar from './pages/common/TabBar';
    // 定义一个StackNavigator
    const App = StackNavigator({
        Leading:{screen:Leading},
        BookList:{screen:TabBar},
        BookDetail:{screen:BookDetail}
    })
    
    export default App;
    ```
    
### 五、`TabBar`使用图标加文字的形式展示(终极版)
* 1、定义`TabBar`组件

    ```javascript
    /*
     * @Author: 水痕 
     * @Date: 2017-11-17 20:56:31 
     * @Last Modified by: 水痕
     * @Last Modified time: 2017-11-17 21:45:23
     * @version:1.0
     * @describe:定义一个tab的切换的路由
     */
    import MoveList from './../components/MoveList';
    import BookList from './../components/BookList';
    import Message from './../components/Message';
    // 引入TabNavigator组件
    import { TabNavigator } from "react-navigation";
    // 这个似乎要必须引入
    import React,{ Component} from 'react';
    import {
        StyleSheet,
        Image,
    } from 'react-native';
    const TabBar = TabNavigator({
        BookList: { 
            screen: BookList, // 对应组件
            navigationOptions: {
                tabBarLabel: '书籍', // 底部显示的文字
                tabBarIcon: ({ tintColor }) => {
                    // tintColor传递进来的是颜色，选中的颜色,那么图标颜色也要换
                    return <Image source={require('./../../images/book.png')}  style={[styles.tabBarImage,{tintColor: tintColor}]}/>
                }
            }
        },
        MoveList: { 
            screen: MoveList,
            navigationOptions: {
                tabBarLabel: '电影',
                tabBarIcon: ({tintColor}) => {
                    return <Image style={[styles.tabBarImage,{tintColor: tintColor}]} source={require('./../../images/move.png')}/>
                },
            }
        },
        Message: { 
            screen: Message,
            navigationOptions: {
                tabBarLabel: '消息',
                tabBarIcon: ({tintColor}) => {
                    return <Image style={[styles.tabBarImage,{tintColor: tintColor}]} source={require('./../../images/message.png')}/>
                },
            }
        },
    },{
        animationEnabled: true, // 切换tab的时候是否要动画
        tabBarPosition: 'bottom', // 导航的位置
        swipeEnabled: true, // 是否可以手指滑动,默认是true
        backBehavior: 'none', // 是否后退按钮导致选项卡切换到初始选项卡？如果是，将initialroute，否则没有。默认initialroute行为
        lazy:true,// 是否在需要时临时渲染选项卡，而不是提前渲染它们。（即懒加载）
        tabBarOptions: { // 关于tab的样式
            activeTintColor: '#f00', // 选中的颜色
            inactiveTintColor: '#333', // 不选中的颜色
            showIcon: true, // 是否显示小图标
            inactiveBackgroundColor:'#fff',
            indicatorStyle: {
                height: 0,
            },
            style: { // 可以设置tab的各种样式
                backgroundColor: '#fff', // 底部tab的背景颜色
                height:60, // 高度
                borderTopWidth:1,
                borderColor:'#ddd',
            },
            tabStyle: { // 设置底部图标的样式
                height: 56,
                marginTop:10,
            },
            labelStyle: { // 设置文字的样式
                fontSize: 12,
            },
            pressColor: 'gray', // 点击的时候光圈
            pressOpacity: 0.8, // 光圈的透明度
            upperCaseLabel: false, // 如果是英文的情况默认会转换为大写
        },
    });
    
    export default TabBar;
    
    // 定义样式
    const styles = StyleSheet.create({
        tabBarImage: {
            width: 24,
            height: 24,
        }
    })
    ```
    
* 2、使用跟上面的一样的

    ```javascript
    ...
    // 定义一个StackNavigator
    const App = StackNavigator({
        Leading:{screen:Leading},
        BookList:{screen:TabBar}, // 直接在第一个进入页面中使用TabBar就可以
        BookDetail:{screen:BookDetail}
    })
    ...
    ```
    
* 3、更多参数介绍[请参考](https://reactnavigation.org/docs/navigators/tab)
* 4、运行手机效果(本来录制gif效果,但是同步到电脑不动,只能将就)

    ![这里写图片描述](http://img.blog.csdn.net/20171119130158231?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQva3VhbmdzaHAxMjg=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
### 六、`DrawerNavigator`的使用
* 1、引入

    ```javascript
    import { DrawerNavigator } from 'react-navigation';
    ```
    
* 2、使用

    ```javascript
    // 定义一个侧边导航的
    const Message = DrawerNavigator({
        Drawer: {
            screen: Drawer, // 使用组件
        },
    },{
        drawerWidth: 200, // 侧边的宽度
        drawerPosition: 'left', // 从哪里打开,默认是左边
        contentComponent: (props)=><DrawerLeft {...props}/>, // 侧边的组件(注意必须传递参数进去,否则进行页面跳转拿不到navigate)
    })
    export default Message;
    ```
    
* 3、运行效果

    ![这里写图片描述](http://img.blog.csdn.net/20171119130215500?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQva3VhbmdzaHAxMjg=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
    
* 4、美中不足的(上面多了这个返回的,目前我还没能力在本组件中处理)

    ![这里写图片描述](http://img.blog.csdn.net/20171119130230822?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQva3VhbmdzaHAxMjg=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
    
* 5、处理方式(在`StackNavigator`配置参数)
![这里写图片描述](http://img.blog.csdn.net/20171119130306133?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQva3VhbmdzaHAxMjg=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

	![这里写图片描述](http://img.blog.csdn.net/20171119130317878?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQva3VhbmdzaHAxMjg=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

### 七、整体运行效果
![这里写图片描述](http://img.blog.csdn.net/20171119130404410?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQva3VhbmdzaHAxMjg=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

---
###欢迎加入群聊，我们一起探讨前端技术栈
> 群号:560285778

![这里写图片描述](http://img.blog.csdn.net/20171008104715122?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQva3VhbmdzaHAxMjg=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
"# react-native" 
"# react-native" 
"# react-native" 
"# react-native" 
"# react-native" 
"# react-native" 
"# reacy-navigation-self" 
"# react-navigation" 
