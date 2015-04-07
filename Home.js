/**
 * Tmall 3c Fp Page
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var ItemList = require('./component/ItemList');
var Tabs = require('./component/Tabs');
var Cat = require('./component/Cat');
var Promotion = require('./component/Promotion');
var CloverSlider = require('./component/CloverSlider');

var {
  ScrollView,
  View,
} = React;



module.exports =  React.createClass({

    //object在组件被挂载之前调用。
    getInitialState() {
        return {
            cateId : 0
        };
    },

    //更新分类ID
    handleUpdateList(cateId) {
        this.setState({
            cateId : cateId
        })
    },


    //渲染头部
    renderHeader() {
        return (
          <View style={{height : 25,backgroundColor : '#2964dd'}} />
        );
    },



  

      //test
      renderTest : function(){
        return (
          <TabBarIOS>
            <TabBarIOS.Item title="React Native" selected={true} icon={require('image!cart')}>
              <NavigatorIOS />
            </TabBarIOS.Item>
           
          </TabBarIOS>
        );
      },


    render() {
        var cateId = this.state.cateId;
        return (
            <View style={{flex : 1}}>
                {/*{this.renderHeader()}*/}
                <ScrollView stickyHeaderIndices={[4]} >
                    <CloverSlider />
                    <Cat />
                    <Promotion />
                    <View style={{height : 4, backgroundColor : '#F2F2F2'}} />
                    <Tabs updateCateItem={this.handleUpdateList} />
                    <ItemList cateId={cateId} />
                </ScrollView>  
            </View>
        );
    }
});

