import {
  View,
  Text,
  TextInput,
  FlatList,
  Pressable,
  Switch,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NoteCard from "../components/NoteCard";
import { useState } from "react";

export default function NotesListScreen({
  theme,
  isDark,
  setIsDark,
  setCurrentScreen,
  notes,
}: any) {
  const { width } = useWindowDimensions();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNotes = notes.filter(
    (note: any) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.content.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <View style={styles.header}>
        <Text style={[styles.heading, { color: theme.text }]}>NotesBuddy</Text>

        <Switch
          value={isDark}
          onValueChange={() => setIsDark(!isDark)}
          thumbColor={isDark ? "#dad4d4" : "#9de2e3"}
          trackColor={{
            false: "#D1D1D1",
            true: "#4db29c",
          }}
        />
      </View>

      <TextInput
        placeholder="Search notes..."
        placeholderTextColor={theme.subText}
        style={[
          styles.searchInput,
          {
            backgroundColor: theme.input,
            color: theme.text,
            borderColor: theme.border,
          },
        ]}
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <FlatList
        data={filteredNotes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NoteCard
            title={item.title}
            content={item.content}
            date={item.date}
            theme={theme}
          />
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={{ color: theme.subText }}>
              No matching notes found
            </Text>
          </View>
        }
      />

      <Pressable
        style={[styles.fab, { backgroundColor: theme.primary }]}
        onPress={() => setCurrentScreen("create")}
      >
        <Text style={styles.fabText}>+</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 12,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  heading: {
    fontSize: 28,
    fontWeight: "700",
  },

  searchInput: {
    borderWidth: 1,
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 20,
    fontSize: 16,
  },

  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  fab: {
    position: "absolute",
    bottom: 30,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },

  fabText: {
    color: "white",
    fontSize: 28,
    fontWeight: "600",
  },
});
