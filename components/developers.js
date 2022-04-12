import {
    Stack,
    Typography,
    Box,
    Tabs,
    Tab,
    Divider,
    Grid,
    Chip,
} from '@mui/material';
import Image from "next/image";

const APIItems = [
    {
        categories: ['Transactions', 'Research'],
        name: 'Sample API 1',
        description: "A quick and general description of the API's functions",
        documentation: {},
        learnMore: {},
    },
    {
        categories: ['Transactions', 'Account'],
        name: 'Sample API 2',
        description: "A quick and general description of the API's functions",
        documentation: {},
        learnMore: {},
    },
    {
        categories: ['Account'],
        name: 'Sample API 3',
        description: "A quick and general description of the API's functions",
        documentation: {},
        learnMore: {},
    },
    {
        categories: ['All'],
        name: 'Sample API 4',
        description: "A quick and general description of the API's functions",
        documentation: {},
        learnMore: {},
    },
];

const Developers = (props) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '5vh',
                width: '70vw',
                marginLeft: '3%',
            }}
        >
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Stack
                    sx={{ width: '45vw', textAlign: 'left', marginRight: '6%' }}
                >
                    <Typography variant="h2" fontWeight={700}>
                        Build it with
                    </Typography>
                    <Typography variant="h2" fontWeight={700}>
                        Comet Visor.
                    </Typography>
                    <Typography variant="h5" sx={{ marginTop: '3%' }}>
                        Want to make your solutions something great with
                        CometVisor? Here are some solutions built using Comet
                        Visor solutions to show you what is possible using our
                        APIs.
                    </Typography>
                </Stack>
                <Image src="/github.png" width="300%" height="300%" />
            </div>
            <Divider
                orientation="horizontal"
                sx={{ width: '100%', marginTop: '2vh' }}
            />
            <Box sx={{ width: '100%', marginTop: '1vh' }}>
                <Tabs aria-label="nav tabs example">
                    <Tab label="All Categories" />
                    <Tab label="Category 1" />
                    <Tab label="Category 2" />
                </Tabs>
            </Box>
            <Divider
                orientation="horizontal"
                sx={{ width: '100%', marginTop: '1vh' }}
            />
            <Box sx={{ width: '100%', marginTop: '3%', marginBottom: '5%' }}>
                <Grid container spacing={4}>
                    {APIItems.map((api, index) => (
                        <Grid key={index} item xs={6}>
                            <Box
                                id="accountCard"
                                sx={{
                                    borderRadius: 3,
                                    height: '23vh',
                                    border: 1,
                                    borderColor: '#e0f2f1',
                                    borderWidth: 3,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'start',
                                    padding: '5%',
                                    paddingBottom: '5%',
                                    background:
                                        'linear-gradient(-152.97deg, rgba(112, 112, 112, 0.2) 0%, rgba(181, 181, 181, 0) 100%);',
                                }}
                            >
                                <Stack direction="row" spacing={1}>
                                    {api.categories ? (
                                        api.categories.map((category) => (
                                            <Chip
                                                label={category}
                                                size="small"
                                            />
                                        ))
                                    ) : (
                                        <div />
                                    )}
                                </Stack>
                                <Typography
                                    variant="h4"
                                    fontWeight={600}
                                    sx={{ marginTop: '2%' }}
                                >
                                    {api.name}
                                </Typography>
                                <Divider
                                    orientation="horizontal"
                                    sx={{ width: '100%', marginTop: '2%' }}
                                />
                                <Typography
                                    variant="subtitle1"
                                    sx={{ marginTop: '2%' }}
                                >
                                    {api.description}
                                </Typography>
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        marginTop: '2%',
                                        height: '2vh',
                                        alignSelf: 'end',
                                        alignItems: 'center',
                                        bottom: '1%',
                                        width: '40%',
                                    }}
                                >
                                    <Typography
                                        variant="subtitle2"
                                    >
                                        Documentation
                                    </Typography>
                                    <Divider
                                        orientation="vertical"
                                        variant="middle"
                                        sx={{
                                            height: '100%',
                                            marginRight: '2%',
                                            marginLeft: '2%',
                                        }}
                                    />
                                    <Typography
                                        variant="subtitle2"
                                    >
                                        Learn More
                                    </Typography>
                                </div>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    );
};

export default Developers;
