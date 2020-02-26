import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
	const [password, setName] = useState('');

	return (
		<View>
			<Text>Enter Password:</Text>
			<TextInput 
				style={styles.input}
				autoCapitalize = "none"
				autoCorrect = {false}
				value = {password}
				onChangeText = {(newValue) => setName(newValue) }
			/>
			<Text>Your Password Is: {password}</Text>
			{password.length < 5 ? <Text>Error: Password must be more than 5 characters long</Text> : null}
		</View>
	)
}

const styles = StyleSheet.create({

	input: {
		margin: 20,
		borderColor: 'black',
		borderWidth: 1
	}
});

export default TextScreen;