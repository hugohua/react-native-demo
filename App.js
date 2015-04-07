/**
 * Tmall 3c APP
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var Home = require('./Home');


var {
  // Image,
  AppRegistry,
  StyleSheet,
  ScrollView,
  TabBarIOS,
  NavigatorIOS,
  // Text,
  View,
} = React;



var App = React.createClass({

    render() {

        // return(
        //     <Home />
        // );

        return (
          <NavigatorIOS
            style={{flex : 1,backgroundColor: '#000000'}}
            tintColor='#cccccc'
            barTintColor='#cccccc'
            initialRoute={{
              title: '天猫电器城',
              component: Home,
            }}/>
        );

        
    }
});


AppRegistry.registerComponent('App', () => App);
