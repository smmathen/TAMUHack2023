import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Text, Dimensions } from "react-native";
import QuestItem from './QuestItem';
import QuestInputField from './QuestInputField';
import Icon from "react-native-vector-icons/FontAwesome"
const { width } = Dimensions.get("window");

export default function QuestItems() {
    const [quests, setQuests] = useState([]);

    const addQuest = (quest) => {
        if (quest == null) return;
        setQuests([...quests, quest]);
    }

    const deleteQuest = (deleteIndex) => {
        setQuests(quests.filter((value, index) => index != deleteIndex));
    }

    const completeQuest = (completeIndex) => {
        alert("Congrats, you completed your quest!")
        setQuests(quests.filter((value, index) => index != completeIndex));
    }

    function addTask() {
        alert("lkshgbaskljhfk");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>QUESTS</Text>
            {/* <Icon name='plus' color={"#F55050"} size={40} onPress={() => addTask()}> </Icon> */}


            <ScrollView style={styles.scrollView}>
                {
                    quests.map((quest, index) => {
                        return (
                            <View key={index} style={styles.questContainer}>
                                <QuestItem index={index + 1} quest={quest} completeQuest={() => completeQuest(index)} deleteQuest={() => deleteQuest(index)} />
                            </View>
                        );
                    })
                }
            </ScrollView>
            <View style={styles.input}>
                <QuestInputField addQuest={addQuest} />

            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    heading: {
        color: '#F55050',
        fontFamily: 'AcademyEngravedLetPlain',
        fontSize: 60,
        fontWeight: '600',
        marginTop: 50,
        marginBottom: 10,
        marginLeft: 20,
        textAlign: 'center'
    },
    scrollView: {
        marginBottom: 70,
    },
    questContainer: {
        marginTop: 20,
    },
    input: {
        position: 'relative',
        bottom: 0,
        width: 400
    },
    plusSign: {
        position: 'absolute',
        bottom: 720,
        right: 17
    }
});