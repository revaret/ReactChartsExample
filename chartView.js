'use strict';

var React = require('react-native');
var RNChart = require('react-native-chart');
var Weight= require('./weightChart')
var Temperature = require('./temperatureChart')
var Pulse = require('./pulseChart')
var {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  View,
} = React;

var WeightchartData = [
    {
        name:'BarChart',
        type:'bar',
        color:'white',
        widthPercent:0.6,
        data:[
            30, 1, 1, 2, 3, 5, 21, 13, 21, 34, 55, 30
        ]
    },
    {
        name:'LineChart',
        color:'white',
        lineWidth:2,
        showDataPoint:false,
        data:[
            10, 12, 14, 25, 31, 52, 41, 31, 52, 66, 22, 11
        ]
    }
];

var TemperaturechartData = [
    {
        name:'BarChart',
        type:'bar',
        color:'white',
        widthPercent:0.6,
        data:[
            1, 2, 3, 1, 5, 5, 8, 9
        ]
    },
    {
        name:'LineChart',
        color:'white',
        lineWidth:2,
        showDataPoint:false,
        data:[
            5, 5, 5, 5, 6, 6, 7, 7, 7, 7, 8, 9
        ]
    }
];
var PulsechartData = [
    {
        name:'LineChart',
        color:'white',
        lineWidth:2,
        showDataPoint:false,
        data:[
            1, 2,1, 2.5,1,0.5, 1.5,1, 3,1, 0.5, 2,1, 3,1, 0.5, 3,1, 3,
        ]
    }
];

var xLabels = ['0','1','2','3','4','5','6','7','8','9','10','11'];

var chartView = React.createClass({
  render: function() {
    return (
        <View style={styles.container}>
        <ScrollView>
            <View style={styles.singleCardHeart}>
                <Text style={styles.headerText} onPress={()=>this._onPressWeight()}>Weight</Text>
                <View style={{alignItems:'center',backgroundColor:'#23A669',marginBottom:10}} >
                    <RNChart style={styles.chart}
                        chartData={WeightchartData}
                        xLabels={xLabels}
                        showDataPoint='true'
                        showAxis='true'
                        animationDuration={1.2}
                        showYAxisLabels='false'
                        showGrid='true'
                        >
                    </RNChart>
                </View>
            </View>
            <View style={styles.singleCardTemp}>
                <Text style={styles.headerText} onPress={()=>this._onPressTemperature()}>Temperature</Text>
                <View style={{alignItems:'center',backgroundColor:'#23A669',marginBottom:10}}>
                    <RNChart style={styles.chart}
                        chartData={TemperaturechartData}
                        xLabels={xLabels}
                        showDataPoint='true'
                        showAxis='true'
                        showYAxisLabels='false'
                        showGrid='true'
                        labelTextColor='white'
                        animationDuration={1.2}
                        >
                    </RNChart>
                </View>
            </View>
             <View style={styles.singleCardPulse}>
                <Text style={styles.headerText} onPress={()=>this._onPressPulse()}>Pulse</Text>
                <View style={{alignItems:'center',backgroundColor:'#23A669',marginBottom:10}}>
                    <RNChart style={styles.chart}
                        type="line"
                        chartData={PulsechartData}
                        xLabels={xLabels}
                        showDataPoint='true'
                        showAxis='true'
                        showYAxisLabels='false'
                        showGrid='true'
                        labelTextColor='white'
                        animationDuration={1.2}
                        >
                    </RNChart>
                </View>
            </View>
            </ScrollView>
        </View>
    );
  },
  
  _onPressWeight:function(){
    this.props.navigator.push({
        title:'Weight',
        component:Weight
    });
  },

  _onPressTemperature:function(){
    this.props.navigator.push({
        title:'Temperature',
        component:Temperature
    });
  },

   _onPressPulse:function(){
    this.props.navigator.push({
        title:'Pulse',
        component:Pulse
    });
  }
});

var styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: 'white',
        //marginTop:55
    },
    singleCardHeart:{
        flex:1,
        //marginTop:10,
        backgroundColor: '#71EAB2',
    },
    singleCardTemp:{
        flex:1,
        marginTop:4,
        backgroundColor: '#71EAB2',
    },
    singleCardPulse:{
        flex:1,
        marginTop:4,
        backgroundColor: '#71EAB2',
    },
    headerText:{
        fontSize:25,
        color:'white',
        top:8,
        left:2,
        fontWeight: 'bold',
        marginBottom:8,
        fontFamily:'Copperplate-Light'
    },
    chart: {
        top: 16, 
        left: 4, 
        bottom: 4,
        right: 16,
        height:150,
        width:250,
        marginBottom:40
    },
});

module.exports= chartView;
