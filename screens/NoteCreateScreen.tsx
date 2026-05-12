import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

const NoteCreateScreen = ({ theme, setCurrentScreen , notes , setNotes }: any) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const currentDate = new Date();

  const formattedDate =
    currentDate.toLocaleDateString(
      "en-GB",
      {
        day: "numeric",
        month: "short",
        year: "numeric",
      }
    );

  const handlePress = () => {
    const updatedNotes = [
      ...notes,
      {
        id: notes.length + 1,
        title,
        content,
        date : formattedDate
      },
    ];
    setNotes(updatedNotes)
    setCurrentScreen("list")
  };

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: theme.background,
        },
      ]}
    >
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ImageBackground
          source={require("../assets/bg-2.jpeg")}
          style={styles.header}
          imageStyle={styles.headerImage}
        >
          <View style={styles.headerTop}>
            <Pressable
              style={[
                styles.backButton,
                {
                  backgroundColor: theme.card,
                },
              ]}
              onPress={() => setCurrentScreen("list")}
            >
              <Text
                style={{
                  color: theme.text,
                }}
              >
                Back
              </Text>
            </Pressable>

            <Pressable
              onPress={handlePress}
              style={[
                styles.saveButton,
                {
                  backgroundColor: theme.primary,
                },
              ]}
            >
              <Text style={styles.saveText}>Save</Text>
            </Pressable>
          </View>

          <Text style={styles.headerTitle}>Create Note</Text>
        </ImageBackground>

        <View style={styles.content}>
          <TextInput
            placeholder="Note Title"
            placeholderTextColor={theme.subText}
            style={[
              styles.titleInput,
              {
                backgroundColor: theme.input,
                color: theme.text,
                borderColor: theme.border,
              },
            ]}
            value={title}
            onChangeText={setTitle}
          />

          <TextInput
            placeholder="Start writing..."
            placeholderTextColor={theme.subText}
            multiline
            textAlignVertical="top"
            style={[
              styles.contentInput,
              {
                backgroundColor: theme.input,
                color: theme.text,
                borderColor: theme.border,
              },
            ]}
            value={content}
            onChangeText={setContent}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default NoteCreateScreen;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },

  container: {
    flex: 1,
  },

  header: {
    height: 220,
    paddingHorizontal: 20,
    paddingTop: 20,
    justifyContent: "space-between",
  },

  headerImage: {
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },

  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  backButton: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 14,
  },

  saveButton: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 14,
  },

  saveText: {
    color: "white",
    fontWeight: "600",
  },

  headerTitle: {
    color: "white",
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 24,
  },

  content: {
    flex: 1,
    padding: 20,
  },

  titleInput: {
    borderWidth: 1,
    borderRadius: 16,

    paddingHorizontal: 16,
    paddingVertical: 14,

    fontSize: 18,
    fontWeight: "600",

    marginBottom: 20,
  },

  contentInput: {
    flex: 1,

    borderWidth: 1,
    borderRadius: 18,

    paddingHorizontal: 16,
    paddingVertical: 16,

    fontSize: 16,
    lineHeight: 24,
  },
});
