import {useState} from "react";
import firebase from '../lib/firebase';
import nookies from 'nookies';
import { auth } from '../lib/firebaseAdmin';
import { useRouter } from 'next/router';
import {
    Box,
    TextField,
    Drawer,
    Button,
    CssBaseline,
    Link,
    Paper,
    Grid,
    Typography,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as React from 'react';
import styles from './login.module.css';
//import logo from "../public/utdfintechlogo1.png";
//import loginBgnd from "../public/logingraphicblue1.png"
import Image from 'next/image';
import { GlassCard } from '../components/GlassCard';

export const getServerSideProps = async (ctx) => {
    try {
        const cookies = nookies.get(ctx);
        const token = await auth.verifyIdToken(cookies.token);
        return {
            redirect: {
                permanent: false,
                destination: '/dashboard',
            },
            props: {},
        };
    } catch (err) {
        // user not logged in
        return { props: {} };
    }
};

const theme = createTheme();

const Login = (props) => {
    const [isNewUser, setIsNewUser] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handlePassword = e => {setPassword(e.target.value);}
    const handleEmail = e => {setEmail(e.target.value);};
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const handleLoginPassword = e => {setLoginPassword(e.target.value);}
    const handleLoginEmail = e => {setLoginEmail(e.target.value);};
    const registerNewUser = () => {setIsNewUser((prevState) => !prevState)}

    const router = useRouter();

    return (
        <ThemeProvider theme={theme}>
            <Drawer variant="permanent" anchor="left">
                <Grid container component="main" sx={{ height: '100vh' }}>
                    <Grid
                        item
                        xs={false}
                        sm={4}
                        md={7}
                        sx={{
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <Grid
                            item
                            style={{
                                width: '100vw',
                                display: 'flex',
                                flexDirection: 'row',
                            }}
                        >
                            <Image
                                className={styles.photo}
                                alt="logo"
                                src="/utdfintechlogo1.png"
                                height={150}
                                width={150}
                            />
                        </Grid>
                        <Image
                            className={styles.welcomePhoto}
                            src="/logingraphicblue1.png"
                            alt="Bgnd"
                            layout="fill"
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={8}
                        md={5}
                        component={Paper}
                        elevation={6}
                        square
                    >
                        <Box
                            className={
                                styles.infoCard +
                                ' flex flex-col justify-center align-middle place-items-center'
                            }
                        >
                            <div className="text-3xl font-light">
                                Comet Visor
                            </div>
                            <div className="text-1xl font-light">
                                Welcome {isNewUser ? '' : 'back'}
                            </div>
                            {isNewUser ? (
                                <Box component="form" noValidate sx={{ mt: 1 }}>
                                    <TextField
                                        value={email}
                                        className={styles.textField}
                                        margin="normal"
                                        required
                                        id="email"
                                        label="EMAIL ADDRESS"
                                        name="email"
                                        autoComplete="email"
                                        autoFocus
                                        onChange={handleEmail}

                                    />
                                    <br />
                                    <TextField
                                        value={password}
                                        className={styles.textField}
                                        margin="normal"
                                        required
                                        name="password"
                                        label="PASSWORD"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                        onChange={handlePassword}

                                    />
                                    <br />
                                    <TextField
                                        className={styles.textField}
                                        margin="normal"
                                        required
                                        id="first_name"
                                        label="FIRST NAME"
                                        name="First_Name"
                                        autoComplete="First Name"
                                    />
                                    <br />
                                    <TextField
                                        className={styles.textField}
                                        margin="normal"
                                        required
                                        name="Last_Name"
                                        label="LAST NAME"
                                        id="last_name"
                                        autoComplete="Last Name"
                                    />
                                    <br />
                                    <Button
                                        variant="contained"
                                        className={styles.loginButton}
                                        sx={{ mt: 3, mb: 2 }}
                                        onClick={() => {
                                            firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
                                            const login = email;
                                            const pw = password;

                                            firebase
                                                .auth()
                                                .createUserWithEmailAndPassword(login, pw)
                                                .then(({ user }) => {
                                                    return user.getIdToken().then((idToken) => {

                                                    });
                                                })
                                                .then(() => {
                                                    if(firebase.auth().currentUser){
                                                    router.push('/dashboard');
                                                    }
                                                });
                                            return false;

                                        }}
                                    >
                                        Create Account
                                    </Button>
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Typography variant="subtitle1">
                                            Already have an account?
                                        </Typography>
                                        <Button
                                            variant="text"
                                            sx={{ textTransform: 'none' }}
                                            onClick={registerNewUser}
                                        >
                                            <Typography variant="subtitle1">
                                                Sign In
                                            </Typography>
                                        </Button>
                                    </div>
                                </Box>
                            ) : (
                                <Box component="form" noValidate sx={{ mt: 1 }}>
                                    <TextField
                                        value={loginEmail}
                                        className={styles.textField}
                                        margin="normal"
                                        required
                                        id="email"
                                        label="EMAIL ADDRESS"
                                        name="email"
                                        autoComplete="email"
                                        autoFocus
                                        onChange={handleLoginEmail}

                                    />
                                    <br />
                                    <TextField
                                        value={loginPassword}
                                        className={styles.textField}
                                        margin="normal"
                                        required
                                        name="password"
                                        label="PASSWORD"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                        onChange={handleLoginPassword}

                                    />
                                    <br />
                                    <Button
                                        variant="contained"
                                        className={styles.loginButton}
                                        sx={{ mt: 3, mb: 2, mr: 5}}
                                        onClick={() => {
                                            firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
                                            const login = loginEmail;
                                            const pw = loginPassword;
                                            firebase
                                                .auth()
                                                .signInWithEmailAndPassword(login, pw)
                                                .then(({ user }) => {
                                                })
                                                .then(() => {
                                                    if(firebase.auth().currentUser){
                                                    router.push('/dashboard');
                                                    }
                                                });
                                            return false;
                                        }}
                                    >
                                        Log In
                                    </Button>
                                    
                                    <Button
                                        variant="contained"
                                        className={styles.googleLoginButton}
                                        sx={{ mt: 3, mb: 2,}}
                                        onClick={() => {
                                            var provider =
                                                new firebase.auth.GoogleAuthProvider();
                                                firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
                                            firebase
                                                .auth()
                                                .signInWithPopup(provider)
                                                .then((result) => {
                                                    console.log(result.user);
                                                    router.push('/dashboard');
                                                })
                                                .catch((error) => {
                                                    console.error(error);
                                                });
                                        }}
                                    >
                                        Log In With Google
                                    </Button>
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Typography variant="subtitle1">
                                            Don't have an account?
                                        </Typography>
                                        <Button
                                            variant="text"
                                            sx={{ textTransform: 'none' }}
                                            onClick={registerNewUser}
                                        >
                                            <Typography variant="subtitle1">
                                                Sign Up
                                            </Typography>
                                        </Button>
                                    </div>
                                    <div>
                                        <Button
                                            variant="text"
                                            sx={{
                                                textTransform: 'none',
                                                padding: 0,
                                            }}
                                        >
                                            <Typography variant="subtitle1">
                                                Forgot your password?
                                            </Typography>
                                        </Button>
                                    </div>
                                </Box>
                            )}
                        </Box>
                    </Grid>
                </Grid>
            </Drawer>
        </ThemeProvider>
    );
};
export default Login;
