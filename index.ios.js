/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//import Index  from './pages/index.js';

import Index from './pages/index.js';
import React, { PropTypes,Component } from 'react';
import {
 AppRegistry,
 StyleSheet,
 NavigatorIOS,
 Text,
 Alert,
 View,
 ScrollView,
} from 'react-native';

export default class Component_UI extends Component {  render() {
	return (
      <NavigatorIOS
			style={{flex:1}}
			initialRoute={{component: Index, title: '列表',passProps: {},}}
			/>
	);
}}

//ES6
class Video extends React.Component {
	state = {
		loopRemaining: this.this.props.maxLoops,
	};

	constructor(props) {
		super(props);
		this.state = {
			loopRemaining: this.props.maxLoops
		}
	}

	static defaultProps = {
		autoPlay: false,
		maxLoops: 10
	};
	static propTypes = {
		autoPlay: PropTypes.bool.isRequired,
		maxLoops: PropTypes.number.isRequired,
		posterFrameSrc: PropTypes.string.isRequired,
		videoSrc: PropTypes.string.isRequired
	};
 // 注意这里有分号
    render() {
        return (
            <View />
        );
    } // 注意这里既没有分号也没有逗号
}

class List extends Component {
	render() {
		return (
       <ScrollView style={styles.flex}>
         <View style={styles.list_item}>
           <Text style={styles.list_item_font} onPress={this.goTo.bind(this)}>
             Swift - 滑块（UISlider）的用法
           </Text>
         </View>
         <View style={styles.list_item}>
           <Text style={styles.list_item_font} onPress={this.goTo.bind(this)}>
             Swift - 告警框（UIAlertView）的用法
           </Text>
         </View>
         <View style={styles.list_item}>
           <Text style={styles.list_item_font} onPress={this.goTo.bind(this)}>
             Swift - 选择框（UIPickerView）的用法
           </Text>
         </View>
       </ScrollView>
		);
	}
	goTo(){
		this.refs.nav.push({
			component: Detail,
			title: '详情',
			rightButtonTitle: '收藏',
			onRightButtonPress: function(){
				Alert.alert('点击了收藏按钮。');
			}
		});
	}
 }
 
class Detail extends Component {
	render() {
		return (
       <ScrollView>
         <Text>这个是详情页。欢迎访问hangge.com</Text>
       </ScrollView>
		);
	}
 }
  
const styles = StyleSheet.create({
	flex:{
		flex: 1,
	},
	list_item:{
		height:40,
		marginLeft:10,
		marginRight:10,
		borderBottomWidth:1,
		borderBottomColor: '#ddd',
		justifyContent: 'center'
	},
	list_item_font:{
		fontSize:16
	}
});

AppRegistry.registerComponent('Component_UI', () => Component_UI);
