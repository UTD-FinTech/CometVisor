import React, {useEffect, useState} from "react";
import nookies from "nookies";
import {auth} from "../lib/firebaseAdmin";
import {useAuth} from '../lib/use-auth';
import {useRouter} from 'next/router';
import Home from "../components/home";
import Accounts from "../components/accounts";
import Informatives from "../components/informatives";
import InvestmentResearch from "../components/investmentResearch";
import BlackLittermanModel from "../components/blackLittermanModel";
import Developers from "../components/developers";
import Settings from "../components/settings";
import Header from "../components/header";
import {
    Drawer,
    Typography,
    List,
    ListItem,
    ListItemButton,
    createTheme,
    ThemeProvider,
    ListItemIcon,
    Divider,
} from '@mui/material';
import { pink } from '@mui/material/colors';
import LogoutIcon from '@mui/icons-material/Logout';
import styles from "./dashboard.module.css";

const theme = createTheme({
    components: {
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    borderRadius: 30,
                    paddingTop: 3,
                    paddingBottom: 3,
                },
            },
            defaultProps: {
                disablepadding: "true",
            },
        },
        MuiTypography: {
            defaultProps: {
                variant: 'h6',
            },
        },
    },
});

export const getServerSideProps = async (ctx) => {
    try {
        const cookies = nookies.get(ctx);
        const token = await auth.verifyIdToken(cookies.token);
        // the user is authenticated
        return {
            props: {cookies: cookies},
        };
    } catch (err) {
        // user not logged in
        return {
            redirect: {
                permanent: false,
                destination: "/",
            },
            props: {}
        };
    }
};

const fetcher = async (...args) => {
    const res = await fetch(...args);
    return res.json();
};



const AuthenticatedPage = (props) => {
    const auth = useAuth();
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState("Home");

    const switchPage = () => {
        switch(currentPage) {
            case 'Home': return <Home />;
            case 'Accounts': return <Accounts />;
            case 'Black Litterman Model' : return <BlackLittermanModel />; 
            case 'Informatives': return <Informatives />;
            case 'Investments & Research': return <InvestmentResearch />;
            case 'Developers': return <Developers />;
            case 'Settings': return <Settings />;
        }
    }

    const Tab = (tabProps) => {
        return (
            <div>
                <button
                    className="text-lg outline-0 py-2 px-4 rounded-xl bg-gradient-to-r hover:from-blue-500 hover:to-green-400"
                    onClick={(e) => {
                        setCurrentPage(tabProps.name)
                    }}
                >
                    {tabProps.name}
                </button>
            </div>
        )
    }

    return (
        <div className="flex">
            <div className="sticky h-screen top-0 flex flex-col w-1/4 p-4 align-middle">
                <div className="my-8 border-r-2 border-gray-300 h-full flex-1 flex justify-center flex-col">
                    <Tab name="Home" />
                    <Tab name="Accounts" />
                    <Tab name ="Black Litterman Model" />
                    <Tab name="Informatives" />
                    <Tab name="Investments & Research" />
                    <Tab name="Developers" />
                    <Tab name="Settings" />
                    <button onClick={() => {
                        auth.signout().then(_ => router.push("/"));
                    }} className="focus:outline-none flex text-left m-4 text-red-400">
                        <LogoutIcon />
                    </button>
                </div>
            </div>
            <div className="">
                <Header username={auth.user ? auth.user.displayName : "User"}/>
                {switchPage()}
            </div>
        </div>
    );

    // return (
    //     <div>
    //         <ThemeProvider theme={theme}>
    //             <Drawer
    //                 variant="permanent"
    //                 anchor="left"
    //                 PaperProps={{
    //                     style: {
    //                         backgroundColor: 'transparent',
    //                         boxShadow: 'none',
    //                         borderColor: 'transparent',
    //                     },
    //                 }}
    //             >
    //                 <div
    //                     style={{
    //                         height: '90vh',
    //                         width: '22vw',
    //                         display: 'flex',
    //                         alignItems: 'center',
    //                     }}
    //                 >
    //                     <List style={{ marginLeft: '5%', marginRight: '5%' }}>
    //                         <ListItem
    //                             id={styles.menuItem}
    //                             onClick={(e) => {
    //                                 setCurrentPage('Home');
    //                             }}
    //                             sx={{
    //                                 '&:hover': {
    //                                     '& .sectionLabel': { color: 'white' },
    //                                 },
    //                             }}
    //                         >
    //                             <ListItemButton className="sectionButton">
    //                                 <Typography
    //                                     className="sectionLabel"
    //                                     sx={{ color: 'black' }}
    //                                 >
    //                                     Home
    //                                 </Typography>
    //                             </ListItemButton>
    //                         </ListItem>
    //                         <ListItem
    //                             id={styles.menuItem}
    //                             onClick={(e) => {
    //                                 setCurrentPage('Accounts');
    //                             }}
    //                             sx={{
    //                                 '&:hover': {
    //                                     '& .sectionLabel': { color: 'white' },
    //                                 },
    //                             }}
    //                         >
    //                             <ListItemButton className="sectionButton">
    //                                 <Typography
    //                                     className="sectionLabel"
    //                                     sx={{ color: 'black' }}
    //                                 >
    //                                     Accounts
    //                                 </Typography>
    //                             </ListItemButton>
    //                         </ListItem>
    //                         <ListItem
    //                             id={styles.menuItem}
    //                             onClick={(e) => {
    //                                 setCurrentPage('Developers');
    //                             }}
    //                             sx={{
    //                                 '&:hover': {
    //                                     '& .sectionLabel': { color: 'white' },
    //                                 },
    //                             }}
    //                         >
    //                             <ListItemButton className="sectionButton">
    //                                 <Typography
    //                                     className="sectionLabel"
    //                                     sx={{ color: 'black' }}
    //                                 >
    //                                     Developers
    //                                 </Typography>
    //                             </ListItemButton>
    //                         </ListItem>
    //                         <ListItem
    //                             id={styles.menuItem}
    //                             onClick={(e) => {
    //                                 setCurrentPage('Settings');
    //                             }}
    //                             sx={{
    //                                 '&:hover': {
    //                                     '& .sectionLabel': { color: 'white' },
    //                                 },
    //                             }}
    //                         >
    //                             <ListItemButton className="sectionButton">
    //                                 <Typography
    //                                     className="sectionLabel"
    //                                     sx={{ color: 'black' }}
    //                                 >
    //                                     Settings
    //                                 </Typography>
    //                             </ListItemButton>
    //                         </ListItem>
    //                         <ListItem
    //                             id={styles.menuItem}
    //                             onClick={(e) => {
    //                                 setCurrentPage('Investments & Research');
    //                             }}
    //                             sx={{
    //                                 '&:hover': {
    //                                     '& .sectionLabel': { color: 'white' },
    //                                 },
    //                             }}
    //                         >
    //                             <ListItemButton className="sectionButton">
    //                                 <Typography
    //                                     className="sectionLabel"
    //                                     sx={{ color: 'black' }}
    //                                 >
    //                                     Investments & Research
    //                                 </Typography>
    //                             </ListItemButton>
    //                         </ListItem>
    //                         <ListItem
    //                             id={styles.menuItem}
    //                             onClick={(e) => {
    //                                 setCurrentPage('Informatives');
    //                             }}
    //                             sx={{
    //                                 '&:hover': {
    //                                     '& .sectionLabel': { color: 'white' },
    //                                 },
    //                             }}
    //                         >
    //                             <ListItemButton className="sectionButton">
    //                                 <Typography
    //                                     className="sectionLabel"
    //                                     sx={{ color: 'black' }}
    //                                 >
    //                                     Informatives
    //                                 </Typography>
    //                             </ListItemButton>
    //                         </ListItem>
    //                     </List>
    //                     <Divider
    //                         orientation="vertical"
    //                         variant="middle"
    //                         flexItem
    //                         sx={{
    //                             marginLeft: '6%',
    //                             marginRight: '6%',
    //                             marginTop: '5vh',
    //                             height: '90vh',
    //                         }}
    //                     />
    //                 </div>
    //                 <div
    //                     style={{
    //                         marginLeft: '3vw',
    //                         marginRight: '5%',
    //                     }}
    //                 >
    //                     <div
    //                         className={styles.button}
    //                         onClick={() => {
    //                             auth.signout().then((_) => router.push('/'));
    //                         }}
    //                     >
    //                         <Typography
    //                             sx={{ color: pink[500] }}
    //                         >
    //                             Sign out
    //                         </Typography>
    //                         <div className={styles.btnTwo}>
    //                             <ListItemIcon
    //                                 sx={{ color: pink[500] }}
    //                             >
    //                                 <LogoutIcon />
    //                             </ListItemIcon>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </Drawer>
    //         </ThemeProvider>
    //         <Header />
    //         {switchPage()}
    //     </div>
    // );
};

export default AuthenticatedPage;