import "./App.css"
import "@mantine/core/styles.css";
import '@mantine/charts/styles.css';
import Home from "./Home.tsx";
import Workout from "./Workout.tsx";
import CreateWorkout from "./CreateWorkout.tsx";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter, Routes, Route } from "react-router";

export default function App() {
    return (
      <MantineProvider>
        <BrowserRouter>
          <Routes>
            <Route index  element={<Home />} />
            <Route path="create" element={<CreateWorkout />} />
            <Route path="workout" element={<Workout />} />
          </Routes>
        </BrowserRouter>
      </MantineProvider>
    );
}

