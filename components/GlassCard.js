import { useTheme } from '@emotion/react';
import { Box, BoxProps, createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
    glass: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        backgroundImage:
            'linear-gradient(to bottom right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))',
        backdropFilter: `blur(7px)`,
        boxShadow: '10px 10px 10px rgba(30, 30, 30, 0.1)',
        borderLeft: 'solid 1px rgba(255, 255, 255, 0.3)',
        borderYop: 'solid 1px rgba(255, 255, 255, 0.8)',
    },
});

export function GlassCard() {
    const classes = useTheme()();
    return <Box className={theme.glass} />;
}
