/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var chartView = require('./chartView');
var {
  AppRegistry,
  NavigatorIOS,
  StyleSheet,
} = React;

var charts = React.createClass({
  render: function() {
    return (
      <NavigatorIOS 
       style={styles.container}
      initialRoute={{
        title: 'Charts',
        component: chartView ,
      }}/>
    );
  }
});

var styles = StyleSheet.create({
    container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('charts', () => charts);
