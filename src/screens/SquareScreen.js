import React from 'react';
import ColorCounter from '../Components/ColorCounter';

import {View, Text, StyleSheet} from 'react-native';

const SquareScreen = () => {
	return (
		<View>
			<ColorCounter color = "Red"/>
			<ColorCounter color = "Green"/>
			<ColorCounter color = "Blue"/>
		</View>
	);
}

const styles = StyleSheet.create({});

export default SquareScreen;