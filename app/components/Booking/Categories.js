import React from "react";
import { View, Text, StyleSheet } from 'react-native'
import { Button } from "react-native-elements";


export default class Categories extends React.Component {
    render() {
        const { title } = this.props
        return (
            <Button title={title} buttonStyle={styles.category_btn} />
        )
    }
}

const styles = StyleSheet.create({
    category_btn: {
        backgroundColor: "#00b5f5",
        height: 35,
        width: 80,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#fff",
        paddingTop: 6,
        marginLeft: 5,
        marginTop:10
    }
})