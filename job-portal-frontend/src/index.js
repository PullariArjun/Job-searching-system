import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/tiptap/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/notifications/styles.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { Provider } from "react-redux";
import Store from "./Slices/Store";
// import Provider from "@reduxjs/toolkit"

const root = ReactDOM.createRoot(document.getElementById("root"));
const theme = {
    forntFamily: ["poppins", "sans-serif"],
    focusRing: "never",
    primaryColor: "gold",
    primaryShade: 4,
    colors: {
        gold: [
            "#fefce8",
            "#fffbc2",
            "#fff487",
            "#ffe643",
            "#ffd419",
            "#efb903",
            "#ce8f00",
            "#a46504",
            "#884f0b",
            "#734010",
            "#432105",
        ],
        mineShaft: [
            "#f6f6f6",
            "#e7e7e7",
            "#d1d1d1",
            "#b0b0b0",
            "#888888",
            "#6d6d6d",
            "#5d5d5d",
            "#4f4f4f",
            "#454545",
            "#3d3d3d",
            "#2d2d2d",
        ],
    },
};
root.render(
    <MantineProvider
        defaultColorScheme="dark"
        withGlobalStyles
        withNormalizeCSS
        theme={theme}
    >
        <Notifications position="top-center" />
        <Provider store={Store}>
            <App />
        </Provider>
    </MantineProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
