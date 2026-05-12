import React from "react";
import {
  StyleSheet,
  Text,
  Pressable,
  View,
} from "react-native";

type NoteCardProps = {
  title: string;
  content: string;
  date: string;
  theme: any;
};

const NoteCard = ({
  title,
  content,
  date="Today",
  theme,
}: NoteCardProps) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        {
          backgroundColor: theme.card,
          borderColor: theme.border,
          opacity: pressed ? 0.9 : 1,
        },
      ]}
    >
      <View>
        <Text
          numberOfLines={1}
          style={[
            styles.title,
            { color: theme.text },
          ]}
        >
          {title}
        </Text>

        <Text
          numberOfLines={2}
          style={[
            styles.content,
            { color: theme.subText },
          ]}
        >
          {content}
        </Text>

        <Text
          style={[
            styles.date,
            { color: theme.subText },
          ]}
        >
          {date}
        </Text>
      </View>
    </Pressable>
  );
};

export default NoteCard;

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 18,
    padding: 16,
    marginBottom: 16,
    elevation: 3,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 8,
  },

  content: {
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 12,
  },

  date: {
    fontSize: 12,
    fontWeight: "500",
  },
});