import {
  Text,
  StyleSheet,
  View,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import React, { useState } from "react";
import { Input } from "@rneui/themed";
import { CheckBox } from "@rneui/themed";
import { commonObjectType } from "../types/common";
import { Button } from "@rneui/themed";
import { initialValue } from "../utils/initialValues";

const NewMatch: React.FC = () => {
  const [tossTeam, setTossTeam] = useState<commonObjectType>(initialValue.tossList);
  const [hostTeam, sethostTeam] = useState<string>('');
  const [visitorTeam, setvisitorTeam] = useState<string>('');
  const [optedTeam, setoptedTeam] = useState<commonObjectType>(initialValue.optedTeamList);
  const [overs, setovers] = useState<string>('')

  const styles = StyleSheet.create({
    newMatchWrapper: {
      padding: 0,
      margin: 0,
      flex: 1,
      overflow: "scroll",
    },
    newMatchTitle: {
      fontSize: 15,
      fontFamily: "sans-serif-thin",
      fontWeight: "bold",
      color: "#fc814a",
    },
    newMatchTeams: {
      fontSize: 5,
      borderRadius: 7,
      backgroundColor: "#fff",
      padding: 0,
      marginTop: 5,
      marginBottom: 5,
      marginLeft: 10,
      marginRight: 10,
      alignItems: "flex-start",
      justifyContent: "center",
    },
    font: {
      fontSize: 13,
      fontWeight: "bold",
      color: "black",
      fontFamily: "sans-serif-thin",
    },
    displayRow: {
      flexDirection: "row",
      display: "flex",
    },
    actionItem: {
      display: "flex",
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-around",
      margin: 10,
    },
    actionButton: {
      height: 500,
      width: 150,
      marginVertical: 10,
      marginBottom: 10,
    },
  });

  const tossList: Array<commonObjectType> = [
    {
      label: "Host Team",
      value: "hostTeam",
    },
    {
      label: "Visitor Team",
      value: "visitorTeam",
    },
  ];

  const optedTeamList: Array<commonObjectType> = [
    {
      label: "Bat",
      value: "bat",
    },
    {
      label: "Bowl",
      value: "bowl",
    },
  ];

  return (
    <View style={styles.newMatchWrapper}>
      <View>
        <Text style={styles.newMatchTitle}>Teams</Text>
        <View style={styles.newMatchTeams}>
          <Input
            style={styles.font}
            value={hostTeam}
            onChange={(event: NativeSyntheticEvent<TextInputChangeEventData>) =>
              sethostTeam(event.nativeEvent.text)
            }
            placeholder={"Host Team"}
          ></Input>
          <Input style={styles.font} placeholder={"Visitor Team"}
          value={visitorTeam}
          onChange={(event: NativeSyntheticEvent<TextInputChangeEventData>) =>
            setvisitorTeam(event.nativeEvent.text)
          }></Input>
        </View>
      </View>
      <View>
        <Text style={styles.newMatchTitle}>Toss Won By</Text>
        <View style={styles.newMatchTeams}>
          <View style={styles.displayRow}>
            {tossList?.map((team, index) => (
              <CheckBox
                key={index}
                checked={team.value === tossTeam?.value ?  true :false}
                onPress={() => setTossTeam(team)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title={team.label}
              />
            ))}
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.newMatchTitle}>Opted To</Text>
        <View style={styles.newMatchTeams}>
          <View style={styles.displayRow}>
            {optedTeamList?.map((team, index) => (
              <CheckBox
                key={index}
                checked={team.value === optedTeam?.value ?  true :false}
                onPress={() => setoptedTeam(team)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title={team.label}
              />
            ))}
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.newMatchTitle}>Overs?</Text>
        <View style={styles.newMatchTeams}>
          <Input value={overs}   onChange={(event: NativeSyntheticEvent<TextInputChangeEventData>) =>
              setovers(event.nativeEvent.text)
            }></Input>
        </View>
      </View>
      <View style={styles.actionItem}>
        <Button
          titleStyle={{ fontSize: 16, paddingTop: 10 }}
          title="Advance setting"
          type="clear"
          onPress={()=>console.log('advance setting')}
        />
        <Button
          buttonStyle={{ backgroundColor: "rgba(127, 220, 103, 1)" }}
          containerStyle={styles.actionButton}
          title="Start Match"
          size="md"
          onPress={()=>console.log('start match')}
        />
      </View>
    </View>
  );
};

export default NewMatch;
