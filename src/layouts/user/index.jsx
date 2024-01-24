import React from "react";
import {Routes, Route, Navigate, useLocation} from "react-router-dom";
import Navbar from "../../components/UserPanel/navbar/index.jsx";
import Sidebar from "../../components/UserPanel/sidebar";
import routes from "../../components/UserPanel/sidebar/routes.jsx";
import NavbarJavad from "../../components/navbar/navbar.jsx";
import Chat from "../../components/chat/chat.jsx";

export default function User(props) {
    const {...rest} = props;
    const location = useLocation();
    const [open, setOpen] = React.useState(true);
    const [currentRoute, setCurrentRoute] = React.useState("");

    React.useEffect(() => {
        window.addEventListener("resize", () =>
            window.innerWidth < 1200 ? setOpen(false) : setOpen(true)
        );
    }, []);
    React.useEffect(() => {
        getActiveRoute(routes);
    }, [location.pathname]);

    const getActiveRoute = (routes) => {
        let activeRoute = "Main Dashoard";
        for (let i = 0; i < routes.length; i++) {
            if (
                window.location.href.indexOf(
                    routes[i].layout + "/" + routes[i].path
                ) !== -1
            ) {
                setCurrentRoute(routes[i].name);
            }
        }
        return activeRoute;
    };
    const getActiveNavbar = (routes) => {
        let activeNavbar = false;
        for (let i = 0; i < routes.length; i++) {
            if (
                window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
            ) {
                return routes[i].secondary;
            }
        }
        return activeNavbar;
    };
    const getRoutes = (routes) => {
        return routes.map((prop, key) => {
            if (prop.layout === "/user") {
                return (
                    <Route path={`/${prop.path}`} element={prop.component} key={key}/>
                );
            } else {
                return null;
            }
        });
    };

    return (
        <div className="flex h-auto w-full">
            <Sidebar open={open} onClose={() => setOpen(false)} className="w-fit"/>
            {/* Navbar & Main Content */}
            <div className="dark:!bg-navy-900 h-full w-full bg-gray-900">
                {/* Main Content */}
                <main
                    className={`mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px]`}
                >
                    {/* Routes */}
                    <div className="h-full">
                        <NavbarJavad className="w-full"/>
                        <Navbar
                            onOpenSidenav={() => setOpen(true)}
                            logoText={"Horizon UI Tailwind React"}
                            brandText={currentRoute}
                            secondary={getActiveNavbar(routes)}
                            {...rest}
                        />
                        <div className="pt-5s mx-auto mb-auto h-full relative min-h-[84vh] p-2 md:pr-2">
                            <Routes>
                                {getRoutes(routes)}
                                <Route path="my-coaches/chat/:id" element={<Chat />} />

                                <Route
                                    path="/"
                                    element={<Navigate to="/user/profile" replace/>}
                                />
                            </Routes>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
