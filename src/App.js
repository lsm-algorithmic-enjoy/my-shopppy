import { Outlet } from "react-router-dom";
import { AuthContextProvider } from "../src/context/AuthContext";
import Navbar from "./components/Navbar";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <Navbar />
        <Outlet />
      </AuthContextProvider>
    </QueryClientProvider>
  );
}
