import { Redirect } from "expo-router";
import Onboarding from "./(auth)/welcome";

const Home = () => {

    return <Redirect href="/(auth)/welcome" />
}

export default Home;