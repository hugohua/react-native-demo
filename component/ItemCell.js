//单个商品坑位
//doc组件生命周期： http://reactjs.cn/react/docs/working-with-the-browser.html#component-lifecycle

'use strict';

var React = require('react-native');

var {
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  View,
} = React;

// 组件样式
var styles = StyleSheet.create({
    container: {
    	flex : 1,
    	padding : 10,
        flexDirection: 'row',
        borderBottomColor : '#eeeeee',
        borderBottomWidth : 1,
        backgroundColor: '#ffffff',
    },
    //左侧商品图
    goodImg : {
    	width : 110,
    	height : 110,
    	marginRight: 15
    },
    //右侧商品信息
    goodInfo : {
    	flex : 1,
    	flexDirection : 'column'
    },
    goodTit : {
    	fontSize : 16,
    	height : 40,
    	fontWeight : '700',
    	color : '#000000',
        textAlign: 'left',
        marginTop: 10,
        marginRight: 10,
    },
    // 价格
    goodRow : {
    	flexDirection : 'row',
    	alignItems: 'center',
    	marginTop : 5,
    	marginBottom : 10
    },
    nPrice : {
    	fontSize : 18,
    	fontWeight : '700',
    	marginRight : 10,
    	color : '#c40001'
    },
    yen :{
    	fontSize : 13
    },
    oPrice : {
    	fontSize : 12,
    	color : '#b0b0b0'
    },
    // 购买及按钮
    goodExtra : {
    	flexDirection :'row',
    	alignItems: 'center',
    	justifyContent : 'space-between'
    },
    goodSold : {
    	color : '#b0b0b0'
    },
    goodBtnWarp : {
    	

    	// position : 'absolute',
    	// right : 10,
    	// top : -7,

    	// height : 35,
    	borderWidth : 1,
    	padding : 5,
    	borderColor : '#3164ce',
    	borderRadius : 3
    },
    goodBtn : {
    	color : '#3164ce'
    }

});

module.exports = React.createClass({

	render() {
		var item = this.props.item;
		// console.log(this.props)
		return (
			<TouchableOpacity onPress={this.props.onSelect}>
				<View style={styles.container}>
				
					<Image style={styles.goodImg} source={{uri : 'http:' + item.img}} />
					
					<View style={styles.goodInfo}>

						<Text style={styles.goodTit} numberOfLines={2}>{item.txt}</Text>

						<View style={styles.goodRow}>
							<Text style={styles.nPrice}><Text style={styles.yen}>&yen;</Text> {item.orderprice || item.price}</Text>
							<Text style={styles.oPrice}>&yen;{item.originalprice}</Text>
						</View>
						<View style={styles.goodExtra}>
							<Text style={styles.goodSold}>{item.realMonthSellNum || 0}人已购买</Text>
							<View style={styles.goodBtnWarp}>
								<Text style={styles.goodBtn}>立即购买</Text>
							</View>
							
						</View>
					</View>
					
				</View>
			</TouchableOpacity>
		);
	}


})