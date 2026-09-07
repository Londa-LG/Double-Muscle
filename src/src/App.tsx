import "./App.css"
import "@mantine/core/styles.css";
import Workout from "./Workout.tsx";
import Dashboard from "./Dashboard.tsx";
import CreateWorkout from "./CreateWorkout.tsx";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter, Routes, Route } from "react-router";

export default function App() {
    return (
      <MantineProvider>
        <BrowserRouter>
          <Routes>
            <Route index  element={<Dashboard />} />
            <Route path="create" element={<CreateWorkout />} />
            <Route path="workout" element={<Workout />} />
          </Routes>
        </BrowserRouter>
      </MantineProvider>
    );
}

