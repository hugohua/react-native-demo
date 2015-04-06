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

        return(
            <Home />
        );
    }
});


AppRegistry.registerComponent('App', () => App);
