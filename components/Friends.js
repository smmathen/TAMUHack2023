import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { SearchBar } from "react-native-elements";


const DATA = [
    {
        id: "1",
        title: "Jeff Bezos",
        level: 340
    },
    {
        id: "2",
        title: "Mr. Google",
        level: 12
    },
    {
        id: "3",
        title: "Walmart Employee",
        level: 1,
    },
    {
        id: "4",
        title: "Reveille",
        level: 10
    },
    {
        id: '5',
        title: 'Bob Bob',
        level: 100
    },
    {
        id: '6',
        title: 'Phillip Ritchey',
        level: 4
    }

];


const Item = ({ title, level }) => {
    return (
        <View style={styles.item}>
            <Text style={styles.text}>{title}</Text>
            <Text style={styles.text}>Level {level}</Text>
        </View >
    );
};

const renderItem = ({ item }) => <Item title={item.title} level={item.level} />;
class Friends extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data: DATA,
            error: null,
            searchValue: "",
        };
        this.arrayholder = DATA;
    }

    searchFunction = (text) => {
        const updatedData = this.arrayholder.filter((item) => {
            const item_data = `${item.title.toUpperCase()})`;
            const text_data = text.toUpperCase();
            return item_data.indexOf(text_data) > -1;
        });
        this.setState({ data: updatedData, searchValue: text });
    };

    render() {
        return (
            <View style={styles.container}>
                <SearchBar
                    placeholder="Search Here..."
                    lightTheme
                    value={this.state.searchValue}
                    onChangeText={(text) => this.searchFunction(text)}
                    autoCorrect={false}
                />
                <FlatList
                    data={this.state.data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            </View>
        );
    }
}

export default Friends;

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        padding: 2,
        borderRadius: '50%'
    },
    item: {
        backgroundColor: "#F48484",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: '50%',
        justifyContent: 'center',
        width: 350
    },
    text: {
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center'
    }
});