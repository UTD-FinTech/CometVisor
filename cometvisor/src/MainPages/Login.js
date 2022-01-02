import { Box, TextField, Drawer, Button, CssBaseline, Link, Paper, Grid, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as React from 'react';
import "./login.css";
import { GlassCard } from "../GlassCard";

const theme = createTheme();

const Login = (props) => {
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
                            <img className="photo" src={process.env.PUBLIC_URL + "utdfintechlogo1.png"} />
                            <label className="logoText">
                                Comet
                                <br />
                                Visor
                            </label>
                        </Grid>
                        <img className="welcomePhoto" src={process.env.PUBLIC_URL + "logingraphicblue1.png"} />
                    </Grid>
                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                        <Box className="infoCard"> 
                            <Typography variant="h5" className="loginHeader">
                                Welcome Back,
                            </Typography>
                            <Typography className="lowerLoginHeader">
                                Sign in
                            </Typography>
                            <Box component="form" noValidate sx={{ mt: 1 }}>
                                <TextField
                                    className="textField"
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
                                    className="textField"
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
                                    className="loginButton"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Log In
                                </Button>
                                <Grid item className="noAcc">
                                    <label> Don't have an account? </label>
                                    <Link href="#">
                                        {"Sign Up"}
                                    </Link>
                                </Grid>
                                <Grid item className="noAcc">
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