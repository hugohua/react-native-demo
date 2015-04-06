//首页分类模块

'use strict';

var React = require('react-native');

var {
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  View,
} = React;

//cat 数据
var MockData = [{
  img : 'http://gtms02.alicdn.com/tps/i2/TB1hbkyHpXXXXboXXXXcy0wIpXX-70-70.png',
  text : '手机圈儿',
  link : 'http://3c.m.tmall.com'                      
},{
  img : 'http://gtms01.alicdn.com/tps/i1/TB13zsxHpXXXXX8XpXXcy0wIpXX-70-70.png',
  text : '发现好玩',
  link : 'http://3c.m.tmall.com'                      
},{
  img : 'http://gtms01.alicdn.com/tps/i1/TB1wpUtHpXXXXb1XVXXcy0wIpXX-70-70.png',
  text : '我爱我家',
  link : 'http://3c.m.tmall.com'                      
},{
  img : 'http://gtms03.alicdn.com/tps/i3/TB14NwyHpXXXXaUXXXXcy0wIpXX-70-70.png',
  text : '生活圈儿',
  link : 'http://3c.m.tmall.com'                      
},{
  img : 'http://gtms04.alicdn.com/tps/i4/TB1ODktHpXXXXXZXVXXcy0wIpXX-70-70.png',
  text : '试用中心',
  link : 'http://3c.m.tmall.com'                      
}];

// 组件样式
var styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom : 10,
        paddingLeft : 5,
        paddingRight: 5,
        backgroundColor : '#eeeeee'
    },
    boxImg : {
        width : 35,
        height: 35,
        marginBottom : 10
    },
    boxItem: {
        flex: 1,
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: 2
    },
    boxText: {
        color : '#333333',
        fontSize : 12
    }

});

module.exports = React.createClass({

    renderItems(data) {
        return data.map(function(items,i){
            return (
                <View style={styles.boxItem}>
                    <Image key={i} source={{uri : items.img}} style={styles.boxImg} />
                    <Text style={styles.boxText}>{items.text}</Text>
                 </View>
              )
            })
    },

	render() {
		return (
            <View style={styles.box} >
                {this.renderItems(MockData)}
            </View>
        )

	}


})