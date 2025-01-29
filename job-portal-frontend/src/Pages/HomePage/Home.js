import Companies from "./LandingPage/Companies";
import JobCategory from "./LandingPage/JobCategory";
import Landing from "./LandingPage/Landing";
import Subscribe from "./LandingPage/Subscribe";
import UserAboutUs from "./LandingPage/UserAboutUs";
import Working from "./LandingPage/Working";

const Home = () => {
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950">
            <Landing />
            <Companies />
            <JobCategory />
            <Working />
            <UserAboutUs />
            <Subscribe />
        </div>
    );
};
export default Home;
