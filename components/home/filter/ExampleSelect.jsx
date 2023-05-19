import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import {
  Dropdown,
  GroupDropdown,
  MultiselectDropdown,
} from "sharingan-rn-modal-dropdown";

export const data = [
  {
    value: "1",
    label: "Tiger Nixon",
    employee_salary: "320800",
    employee_age: "61",
    avatarSource: {
      uri: "https://img.icons8.com/color/344/circled-user-male-skin-type-5.png",
    },
  },
  {
    value: "2",
    label: "Garrett Winters",
    employee_salary: "170750",
    employee_age: "63",
    avatarSource: {
      uri: "https://img.icons8.com/color/344/circled-user-male-skin-type-5.png",
    },
  },
  {
    value: "3",
    label: "Ashton Cox",
    employee_salary: "86000",
    employee_age: "66",
    avatarSource: {
      uri: "https://img.icons8.com/color/344/circled-user-male-skin-type-5.png",
    },
  },
  {
    value: "4",
    label: "Cedric Kelly",
    employee_salary: "433060",
    employee_age: "22",
    avatarSource: {
      uri: "https://img.icons8.com/color/344/circled-user-male-skin-type-5.png",
    },
  },
];

const ExampleSelect = () => {
  const [valueMS, setValueMS] = useState([]);
  const [valueSS, setValueSS] = useState("");
  const [valueGS, setValueGS] = useState("");
  const onChangeMS = (value) => {
    setValueMS(value);
  };
  const onChangeSS = (value) => {
    setValueSS(value);
  };
  const onChangeGS = (value) => {
    setValueGS(value);
  };

  return (
    <View style={styles.container}>
      <Dropdown
        label="Simple dropdown"
        data={data}
        value={valueSS}
        onChange={onChangeSS}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    marginLeft: 20,
    marginRight: 20,
    flex: 1,
  },
});

export default ExampleSelect;
