import { Box } from "native-base";
import { NavigationContainer } from "@react-navigation/native";

import { useAuth } from "../hooks/useAuth";
import { SignIn } from "../screens/SignIn";

import { AppRoutes } from "./app.routes";
import { Pools } from "../screens/Pools";

export function Routes() {
  const { user } = useAuth();
  return (
    <Box flex={1} bg="gray.900">
      <NavigationContainer>{<Pools />}</NavigationContainer>
    </Box>
  );
}

// user?.name ? <AppRoutes /> :
