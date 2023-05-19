import { useState, useCallback, useMemo, useRef } from "react";
import { View, Text, SafeAreaView, StatusBar } from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS, icons, images, SIZES } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";
import { ScrollView } from "react-native-gesture-handler";
import BottomSheet from "@gorhom/bottom-sheet";
import Filter from "../components/home/filter/Filter";

const Home = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["25%", "50%", "75%", "100%"], []);
  const handleOpenBottomSheet = () => {
    bottomSheetRef.current.collapse();
  };

  return (
    <SafeAreaView style={{ flex: 1, BackgroundColor: COLORS.lightWhite }}>
      <StatusBar hidden={true} />
      <Stack.Screen
        options={{~
          headerShown: false,
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome
            search={search}
            setSearch={setSearch}
            handleOpenBottomSheet={handleOpenBottomSheet}
            handleClick={() => {
              if (search) {
                router.push(`/search/${search}`);
              }
            }}
          />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        opacity={1}
      >
        <Filter />
      </BottomSheet>
    </SafeAreaView>
  );
};

export default Home;
