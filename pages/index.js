import firebase from '../lib/firebase';
import nookies from "nookies";
import {auth} from "../lib/firebaseAdmin";
import {useRouter} from 'next/router';
import { Box, TextField, Drawer, Button, CssBaseline, Link, Paper, Grid, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as React from 'react';
import styles from "./login.module.css";
// import logo from "../public/utdfintechlogo1.png";
// import loginBgnd from "../public/logingraphicblue1.png"
import Image from "next/image"
import { GlassCard } from "../components/GlassCard";

export const getServerSideProps = async (ctx) => {
    try {
        const cookies = nookies.get(ctx);
        const token = await auth.verifyIdToken(cookies.token);
        return {
            redirect: {
                permanent: false,
                destination: "/dashboard",
            },
            props: {}
        };
    } catch (err) {
        // user not logged in
        return {props: {}};
    }
}

const theme = createTheme();

const Login = (props) => {
    const router = useRouter();

    return (
        <ThemeProvider theme={theme}>
            <Drawer
                variant="permanent"
                anchor="left"
            >
                <Grid container component="main" sx={{ height: '100vh' }}>
                    <Grid item
                        xs={false}
                        sm={4}
                        md={7}
                        sx={{
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <Grid item
                            style={{
                                width: "100vw",
                                height: "13vh",
                                display: "flex",
                                flexDirection: "row",
                            }}
                        >
                            <Image className={styles.photo} alt="logo"
                                   src="/utdfintechlogo1.png"
                                   height={100}
                                   width={100}
                            />
                            <label className={styles.logoText}>
                                Comet
                                <br />
                                Visor
                            </label>
                        </Grid>
                        <img className={styles.welcomePhoto} alt="Bgnd" />
                    </Grid>
                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square >
                        <Box className={styles.infoCard}> 
                            <Typography variant="h5" className={styles.loginHeader}>
                                Welcome Back,
                            </Typography>
                            <Typography className={styles.lowerLoginHeader}>
                                Sign in
                            </Typography>
                            <Box component="form" noValidate sx={{ mt: 1 }}>
                                <TextField
                                    className={styles.textField}
                                    margin="normal"
                                    required
                                    id="email"
                                    label="EMAIL ADDRESS"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                />
                                <br />
                                <TextField
                                    className={styles.textField}
                                    margin="normal"
                                    required
                                    name="password"
                                    label="PASSWORD"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                                <br />
                                <Button
                                    type="submit"
                                    variant="contained"
                                    className={styles.loginButton}
                                    sx={{ mt: 3, mb: 2 }}
                                    onClick={() => {
                                        var provider = new firebase.auth.GoogleAuthProvider();
                                        firebase.auth()
                                            .signInWithPopup(provider)
                                            .then((result) => {
                                                console.log(result.user);
                                                router.push("/dashboard")
                                            }).catch((error) => {
                                            console.error(error);
                                        });}}
                                >
                                    Log In
                                </Button>

                                <Grid item className={styles.noAcc}>
                                    <label> Don't have an account? </label>
                                    <Link href="#">
                                        {"Sign Up"}
                                    </Link>
                                </Grid>
                                <Grid item className={styles.noAcc}>
                                    <Grid item xs>
                                        <Link href="#">
                                            Forgot your password?
                                        </Link>
                                    </Grid>
                                </Grid>

                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Drawer>
        </ThemeProvider>
    );
}
export default Login;
