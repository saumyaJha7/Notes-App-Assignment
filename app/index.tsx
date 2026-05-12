import { useColorScheme } from "react-native";
import NotesListScreen from "../screens/NotesListScreen";
import NoteCreateScreen from "@/screens/NoteCreateScreen";
import React from "react";



export default function App() {
  const systemTheme = useColorScheme();

  const [isDark, setIsDark] = React.useState(systemTheme === "dark");

  const theme = isDark ? themes.dark : themes.light;

  const [currentScreen , setCurrentScreen] = React.useState("list");

  const [notes , setNotes] = React.useState([])

  return (
    <>
    { currentScreen === "list" ?
    <NotesListScreen
          theme={theme}
          isDark={isDark}
          setIsDark={setIsDark}
          setCurrentScreen={setCurrentScreen}
          notes={notes}
        />
        : 
        <NoteCreateScreen
          theme={theme}
          setCurrentScreen={setCurrentScreen}
          notes={notes}
          setNotes={setNotes}
        />
    }
    </>
    
  )
}

const themes = {
  light: {
    background: "#F7F7F7",
    card: "#FFFFFF",
    text: "#111111",
    subText: "#666666",
    border: "#E5E5E5",
    input: "#FFFFFF",
    primary: "#8ac1da",
  },
  dark: {
    background: "#121212",
    card: "#1E1E1E",
    text: "#FFFFFF",
    subText: "#AAAAAA",
    border: "#2A2A2A",
    input: "#1A1A1A",
    primary: "#b4dbe5",
  },
};