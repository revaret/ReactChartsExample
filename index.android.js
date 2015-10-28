/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var RNChart = require('react-native-chart');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var chartData = [
    {
        name:'BarChart',
        type:'bar',
        color:'purple',
        widthPercent:0.6,
        data:[
            30, 1, 1, 2, 3, 5, 21, 13, 21, 34, 55, 30
        ]
    },
    {
        name:'LineChart',
        color:'gray',
        lineWidth:2,
        showDataPoint:false,
        data:[
            10, 12, 14, 25, 31, 52, 41, 31, 52, 66, 22, 11
        ]
    }
];

var xLabels = ['0','1','2','3','4','5','6','7','8','9','10','11'];

var charts = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
                <RNChart style={styles.chart}
                    chartData={chartData}
                    verticalGridStep={5}
                    xLabels={xLabels}>
                </RNChart>
            </View>
    );
  }
});

var styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white',
    },
    chart: {
        position: 'absolute', top: 16, left: 4, bottom: 4,right: 16
    }
});

AppRegistry.registerComponent('charts', () => charts);
