//单个商品坑位
//doc组件生命周期： http://reactjs.cn/react/docs/working-with-the-browser.html#component-lifecycle

'use strict';

var React = require('react-native');

var {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Text,
  Image,
  View,
  AlertIOS
} = React;

// 组件样式
var styles = StyleSheet.create({
    tabContainer: {
        flex : 1,
        // alignItems: 'center',
        height : 44,
        borderBottomColor : '#eeeeee',
        borderBottomWidth : 1,
        borderTopColor : '#eeeeee',
        borderTopWidth : 1,
        backgroundColor: '#FAFAFA',
    },
    contentStyle : {
        flex : 1,
        flexDirection : 'row', 
        // justifyContent: 'center',
    },
    //

    itemTab :{
        // display : 'i'
        justifyContent: 'center', 
        height : 44,
        paddingLeft : 6,
        paddingRight : 6,
        // backgroundColor : '#cccccc',
        borderBottomWidth : 3,
        borderBottomColor : '#FAFAFA'
    },
    //选中状态
    itemActiveTab : {
        borderBottomWidth : 3,
        borderBottomColor : '#2766cf'
    },

    
    itemText : {
        color : '#757575',
        fontSize : 14,
        
    },

    itemActiveText : {
        color : '#2766cf',
        fontSize : 14,
        fontWeight : '700'
    },

    tabBtn : {
        width : 40,
        height : 44,
        backgroundColor : '#FAFAFA',
        borderLeftWidth : 1,
        borderLeftColor : '#eeeeee',
        borderBottomColor : '#eeeeee',
        borderBottomWidth : 1,
        borderTopColor : '#eeeeee',
        borderTopWidth : 1,
        justifyContent: 'center', alignItems: 'center',
    },
    tabBtnIcon:{
        width : 16,
        height : 16
    }

});

//单个Item
var ItemTab = React.createClass({

    render() {
        var item = this.props.item;
        return(
            <View style={styles.itemTab}>item.text</View>
        );
    }

})

module.exports = React.createClass({

    //默认值
    getDefaultProps() {
        return {
            //url的mock数据在项目根目录data.json
            api : 'https://pages.tmall.com/wow/tmall-3c/act/3294839430594'
        }
    },

    //object在组件被挂载之前调用。
    getInitialState() {
        return {
            dataSource: null,
            activeCatId : 0
        };
    },

    //只调用一次，在render之后调用
    componentDidMount() {
        console.log('componentDidMount')
        this.fetchData();
    },

    //拉取数据
    fetchData() {
        fetch(this.props.api)
            .then((response) => response.json())
            .then((responseData) => {
                console.log(responseData,'responseData')
                //插入第一个“全部”tab
                responseData.list.unshift({
                    code : 0,
                    name : '全部'
                })
                // console.log(responseData.list);
                this.setState({
                    dataSource: responseData.list
                });
          })
          .done();
    },

    //分类切换事件
    handleCateChange(cateId) {
        this.setState({
            activeCatId : cateId
        });
        console.log(this.refs.scrollView);

        //判断下父级是否实现了updateCateItem 方法
        this.props.updateCateItem && this.props.updateCateItem(cateId);
    },

    //打开tabs
    handleOpenTabs() {
        AlertIOS.alert(
            '提示',
            '该功能还没做好哦！！',
            [
              {text: 'Sorry'}
            ]
          )
        console.log('open');
    },

    //渲染单个tab
    renderItems(data) {
        var me = this;
        return data.map(function(item,i){
            //样式修改
            var style = me.state.activeCatId == item.code ? styles.itemActiveTab : {},
                styleTxt = me.state.activeCatId == item.code ? styles.itemActiveText : {};
            return(
                <TouchableWithoutFeedback onPress={() => me.handleCateChange(item.code)}>
                    <View style={[styles.itemTab,style]} key={i}>
                        <Text style={[styles.itemText,styleTxt]}>{item.name}</Text>
                    </View>
                </TouchableWithoutFeedback>
            );
        })
        
    },

    

    

    render() {
        var data = this.state.dataSource || [];
        console.log(data);
        // <View style={{height : 1000,width : 375, backgroundColor : '#eeeeee', position : 'absolute', top : 0, left : 0}}></View>
        return (
            <View style={{flex : 1,flexDirection : 'row'}}>
                <ScrollView ref="scrollView" contentInset={{top: -64}} showsHorizontalScrollIndicator={false} style={styles.tabContainer} contentContainerStyle={styles.contentStyle} horizontal={true}>                 
                    {this.renderItems(data)}
                </ScrollView>
                <TouchableOpacity  onPress={() => this.handleOpenTabs()}>
                    <View style={styles.tabBtn}>
                        <Image style={styles.tabBtnIcon} source={{uri : 'http://gtms04.alicdn.com/tps/i4/TB1TlZwHpXXXXcXXpXXEDhGGXXX-32-32.png'}} />
                    </View>
                </TouchableOpacity>

            </View>
        );
    }


})