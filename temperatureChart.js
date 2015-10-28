
'use strict';
var React = require('react-native');
var RNChart = require('react-native-chart');
var {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  SwitchIOS
} = React;

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

var xLabels = ['0','1','2','3','4','5','6','7','8','9','10','11'];

var temperaturechart = React.createClass({
    getInitialState() {
    return {
      trueSwitchIsOn: true,
      falseSwitchIsOn: false,
      trueSwitchIsOn1: true,
      falseSwitchIsOn1: false,
    };
  },
    render: function() {
        return(
                <View style={styles.container}>
                    <ScrollView>
                        <View style={styles.singleCardHeart}>
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
                    <View style={styles.rowElements}>
                        <Image source={require("image!add")} style={styles.elementIcon}/>
                        <Text style={styles.rowText} onPress={()=>alert("add a new measurement clicked")}>Add a new measurement</Text>
                    </View>
                    <View style={styles.rowElements}>
                        <Image source={require("image!menu")} style={styles.elementIcon}/>
                        <Text style={styles.rowText} onPress={()=>alert("Show measure table clicked")}>Show measure table</Text>
                    </View>
                    <View style={styles.rowElements}>
                        <Image source={require("image!questions")} style={styles.elementIcon}/>
                        <Text style={styles.rowText} onPress={()=>alert("Help center clicked")}>Help center</Text>
                    </View>
                    <View style={styles.rowElements}>
                        <Text style={styles.rowText}>Normal Area</Text>
                        <View style={styles.switchStyle}>
                        <SwitchIOS onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
                                  
                                  value={this.state.falseSwitchIsOn} ></SwitchIOS>
                    </View>
                    </View>
                    <View style={styles.rowElements}>
                        <Text style={styles.rowText}>Desired Weight</Text>
                        <View style={styles.switchStyle}>
                        <SwitchIOS onValueChange={(value) => this.setState({falseSwitchIsOn1: value})}
                                  
                                  value={this.state.falseSwitchIsOn1} ></SwitchIOS>
                    </View>
                    </View>
                    </ScrollView>
                </View>
            )
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
    rowElements:{
        flex:1,
        flexDirection:"row",
        alignItems:'center',
        marginTop:15,
        marginBottom:13
    },
    rowText:{
        fontSize:16,
        left:5,
        marginRight:20
    },
    switchStyle:{
        flex:1,
        alignItems:"flex-end",
        marginRight:6
    },
    seperator:{
        height:3,
        color:'#71EAB2'
    },
    elementIcon:{
        width:25,
        height:25,
        left:5,
        marginRight:5
    },
});

module.exports= temperaturechart;
