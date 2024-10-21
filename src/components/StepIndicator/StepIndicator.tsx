import { useContext, useEffect, useRef } from "react";
import { View, Text, SectionList } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import SettingsContext from "@contexts/SettingsContext";
import EventSummary from "@components/EventSummary";
import styles, { getLineHeight } from "./styles";

const StepIndicator = ({ steps, navigate }: StepIndicatorProps) => {
  const isFocused = useIsFocused();

  const sectionListRef = useRef<SectionList>(null);

  const { getDateString } = useContext(SettingsContext);

  const sections = Object.entries(steps).map(([title, events], index: number, arr) => ({
    title,
    data: events,
    index: index,
    arr,
  }));

  const scrollToToday = () => {
    const todayDateStr = new Date().toDateString();
    const todaySectionIndex = sections.findIndex(section => new Date(section.title).toDateString() === todayDateStr);

    if (todaySectionIndex !== -1 && sectionListRef.current) {
      sectionListRef.current.scrollToLocation({
        animated: true,
        itemIndex: 0,
        sectionIndex: todaySectionIndex,
      });
    }
  };

  useEffect(() => {
    scrollToToday();
  }, [sections, isFocused]);

  const isCurrent = (title: string) => {
    const today = new Date();
    const date = new Date(title);

    today.setHours(0, 0, 0, 0);
    date.setHours(0, 0, 0, 0);

    return today.getTime() === date.getTime();
  };

  const isUpcoming = (title: string) => {
    const today = new Date();
    const date = new Date(title);

    today.setHours(0, 0, 0, 0);
    date.setHours(0, 0, 0, 0);

    return today.getTime() < date.getTime();
  };

  const getItemLayout = (_: unknown, index: number) => ({
    length: 30,
    offset: 30 * index,
    index,
  });

  const onScrollToIndexFailed = (info: { highestMeasuredFrameIndex: number; index: number }) => {
    const { highestMeasuredFrameIndex } = info;
    if (sectionListRef.current)
      sectionListRef.current.scrollToLocation({
        animated: true,
        itemIndex: Math.max(0, highestMeasuredFrameIndex),
        sectionIndex: info.index,
      });
  };

  return (
    <SectionList
      ref={sectionListRef}
      style={styles.listStyle}
      sections={sections}
      keyExtractor={item => item.id}
      renderItem={item => (
        <View style={styles.step}>
          {
            <EventSummary
              event={item.item}
              navigate={navigate}
            />
          }
        </View>
      )}
      renderSectionHeader={({ section: { title, data, index, arr } }) => (
        <View style={styles.stepContainer}>
          {index !== arr.length - 1 && (
            <View
              style={[
                styles.stepLine,
                getLineHeight(data.length),
                isCurrent(title) || isUpcoming(title) ? styles.upcomingTime : styles.passedTime,
              ]}
            />
          )}
          <View
            style={[
              styles.stepIndicator,
              isCurrent(title) ? styles.currentStep : isUpcoming(title) ? styles.upcomingStep : styles.passedTime,
            ]}
          />
          <Text style={[styles.sectionHeader, isCurrent(title) ? styles.currentTime : undefined]}>
            {isCurrent(title) ? "Today" : getDateString(new Date(title))}
          </Text>
        </View>
      )}
      getItemLayout={getItemLayout}
      onScrollToIndexFailed={onScrollToIndexFailed}
      ListEmptyComponent={<Text style={styles.emptyMessage}>No events available.</Text>}
    />
  );
};

export default StepIndicator;
