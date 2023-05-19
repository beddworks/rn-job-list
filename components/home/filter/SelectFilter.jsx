import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { SelectList } from "react-native-dropdown-select-list";

const SelectFilter = () => {
  const data = [
    { key: "1", value: "all", label: "All" },
    { key: "2", value: "today", label: "Today" },
    { key: "3", value: "3days", label: "3 Days" },
    { key: "4", value: "week", label: "Week" },
    { key: "5", value: "month", label: "Month" },
  ];

  const [selected, setSelected] = useState("");

  return (
    <View>
      <Text>Date Posted</Text>
      <SelectList
        setSelected={(val) => setSelected(val)}
        data={data}
        save="value"
        search={false}
        defaultOption={{ key: "1", value: "all", label: "All" }}
      />
    </View>
  );
};

export default SelectFilter;

const styles = StyleSheet.create({});
