import { IconBriefcase, IconBell, IconSettings } from "@tabler/icons-react";
import { Button, Indicator } from "@mantine/core";
import NavLinks from "./NavLinks";
import { Link, useLocation } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../Services/ProfileService";
import { setProfile } from "../Slices/ProfileSlice";
import { useEffect } from "react";

const Header = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    useEffect(() => {
        getProfile(user.id)
            .then((data) => {
                dispatch(setProfile(data));
            })
            .catch((error) => {
                console.log(error);
            });
        // eslint-disable-next-line
    }, []);
    return (
        location.pathname !== "/sign-up" &&
        location.pathname !== "/login" && (
            <div className="w-full bg-mine-shaft-950 h-20 px-6 text-white flex justify-between items-center">
                <div className="flex gap-3 items-center cursor-pointer">
                    <IconBriefcase className="h-10 w-10" stroke={1.25} />
                    <div className="text-4xl font-semibold">iJOBS</div>
                </div>
                {NavLinks()}
                <div className="flex gap-3 items-center justify-between">
                    {user ? <ProfileMenu />: <Link to={"/login"}><Button variant="subtle" color="gold.4" >Login</Button></Link>}
                    {/* <div className="bg-mine-shaft-900 p-1.5 rounded-full">
                        <IconSettings stroke={2} />
                    </div> */}
                    <div className="bg-mine-shaft-900 p-1.5 rounded-full">
                        <Indicator color="yellow" offset={6} size={9}>
                            <IconBell stroke={1.5} />
                        </Indicator>
                    </div>
                </div>
            </div>
        )
    );
};
export default Header;
