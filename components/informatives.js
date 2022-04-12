import { useState } from 'react';
import { Box } from '@mui/system';
import {
    Tabs,
    Tab,
    Typography,
    Divider,
    Table,
    TableContainer,
    TableBody,
    TableRow,
    TableCell,
    TableHead,
    Button,
} from '@mui/material';
import Image from "next/image";
import HomeNewsRow from './webComponents/HomeNewsRow';
import { teal } from '@mui/material/colors';

const newsObj = {
    headlines: [
        {
            title: 'Crypto Startup Wyre Being Acquired by Payments Company Bolt for $1.5 Billion',
            description:
                'FinTech unicorn Bolt has accounced that it will be acquiring crypto startup Wyre. With this acquisition, Bolt has also accnounced that it will be introducing one click crypto payments very soon.',
            src: 'Wall Street Journal',
            date: '04/07/2022',
            time: '8:00 AM',
            url: 'https://www.wsj.com/articles/crypto-startup-wyre-being-acquired-by-payments-company-bolt-for-1-5-billion-11649325602#:~:text=Bolt%20Financial%20Inc.%2C%20a%20payments,billion%2C%20according%20to%20the%20people.',
        },
        {
            title: 'SmartHop Raises $30M to boost trucking fintech products',
            description:
                'SmartHop seeks to revolutionize the trucking industry by using AI to offer smart dispatch services. The company is now worth a total of $46M as it concludes Series B funding.',
            src: 'Techcrunch',
            date: '04/06/2022',
            time: '8:30 AM',
            url: 'https://techcrunch.com/2022/04/06/smarthop-raises-30m-to-boost-trucking-fintech-products/',
        },
    ],
    dailyMovers: [
        {
            asset: 'Meta Platforms',
            ticker: 'FB',
            price: 222.8,
            movement: -13.69,
            marketCap: 605170000000,
        },
        {
            asset: 'Tesla',
            ticker: 'TSLA',
            price: 1022.01,
            movement: -31.68,
            marketCap: 1060000000000,
        },
        {
            asset: 'Coinbase',
            ticker: 'COIN',
            price: 161.24,
            movement: -5.25,
            marketCap: 35340000000,
        },
        {
            asset: 'C4 Therapeutics',
            ticker: 'CCCC',
            price: 11.2,
            movement: -11.58,
            marketCap: 551720000,
        },
    ],
    positionNews: [
        {
            title: 'Shares of EV start-up Lucid rise after executives confirm new reservations, 2022 vehicle production',
            date: '3 Days Ago',
            assets: ['AMD', 'TSLA', 'GM'],
            source: 'CNN',
            href: 'https://www.cnbc.com/2021/11/15/shares-of-ev-start-up-lucid-jump-on-new-reservations-2022-production.html',
        },
        {
            title: 'Game consoles will be harder to find for the holidays than you thought',
            date: '6 Hours Ago',
            assets: ['WMT', 'NTDOY', 'MSFT'],
            source: 'Yahoo Finance',
            href: 'https://finance.yahoo.com/news/the-playstation-5-and-xbox-series-x-harder-to-find-than-you-thought-183507020.html',
        },
        {
            title: 'Nvidia reports record sales and beats on earnings again, sending stock higher',
            date: '1 Hour Ago',
            assets: ['AMD', 'NVDA'],
            source: 'MarketWatch',
            href: 'https://www.marketwatch.com/story/nvidia-stock-rises-as-another-quarter-of-record-sales-top-wall-street-expectations-11637184943?mod=home-page',
        },
        {
            title: 'Google, CME Cloud Partnership Could Upend Tech Investments by Traders',
            date: '5 Hours Ago',
            assets: ['GOOG', 'AMZN', 'MSFT'],
            source: 'Wall Street Journal',
            href: 'https://www.wsj.com/articles/google-cme-cloud-partnership-could-upend-tech-investments-by-traders-11637181101?mod=markets_lead_pos7',
        },
    ],
};

const LinkTab = (props) => {
    return (
        <Tab
            component="a"
            onClick={(event) => {
                event.preventDefault();
            }}
            {...props}
        />
    );
};

const Informatives = (props) => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'end',
                marginRight: '3%',
                marginLeft: '3%',
                width: '70vw',
            }}
        >
            <Box sx={{ width: '70vw' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="nav tabs example"
                    centered
                >
                    <LinkTab label="Market News" href="/news" />
                    <LinkTab label="Student Loans" href="/loans" />
                    <LinkTab label="Financial Literacy" href="/literacy" />
                </Tabs>
            </Box>
            <Box
                id="accountCard"
                sx={{
                    marginTop: '3vh',
                    width: '70vw',
                    height: '55vh',
                    borderRadius: 10,
                    border: 1,
                    borderColor: '#e0f2f1',
                    borderWidth: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'start',
                    background:
                        'linear-gradient(-152.97deg, rgba(112, 112, 112, 0.2) 0%, rgba(181, 181, 181, 0) 100%);',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'start',
                        marginRight: '5%',
                        marginLeft: '5%',
                        marginTop: '3%',
                        width: '90%',
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{ marginLeft: '5%', marginBottom: '2%' }}
                    >
                        Headlines
                    </Typography>
                    <Divider
                        orientation="horizontal"
                        sx={{ width: '100%', marginBottom: '0.5%' }}
                    />
                    {newsObj.headlines.map((headline) => (
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'start',
                                width: '96%',
                                height: '40%',
                                marginLeft: '2%',
                                marginTop: '3%',
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    width: '70%',
                                    alignItems: 'start',
                                }}
                            >
                                <Typography
                                    variant="h5"
                                    align="left"
                                    fontWeight={800}
                                >
                                    {headline.title}
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    align="left"
                                    sx={{ marginTop: '2%' }}
                                >
                                    {headline.description}
                                </Typography>
                                <Typography
                                    variant="caption"
                                    sx={{ marginTop: '2%' }}
                                >
                                    {headline.src} &nbsp;&nbsp;| &nbsp;&nbsp;
                                    {headline.date}
                                </Typography>
                            </div>
                            <Image
                                src="/Bolt_Logo.jpeg"
                                width="260"
                                height="130%"
                                style={{
                                    borderColor: teal[500],
                                    borderWidth: '10%',
                                }}
                            />
                        </div>
                    ))}
                </div>
            </Box>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: '5%',
                    marginBottom: '5%',
                }}
            >
                <Box
                    id="accountCard"
                    sx={{
                        width: '30vw',
                        height: '75vh',
                        marginRight: '2vw',
                        borderRadius: 10,
                        border: 1,
                        borderColor: '#e0f2f1',
                        borderWidth: 3,
                        background:
                            'linear-gradient(-152.97deg, rgba(112, 112, 112, 0.2) 0%, rgba(181, 181, 181, 0) 100%);',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'start',
                            marginRight: '5%',
                            marginLeft: '5%',
                            marginTop: '5%',
                            width: '90%',
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{ marginLeft: '5%', marginBottom: '2%' }}
                        >
                            Daily Movers
                        </Typography>
                        <Divider
                            orientation="horizontal"
                            sx={{ width: '100%' }}
                        />
                        <TableContainer>
                            <Table
                                style={{
                                    minWidth: '100%',
                                    marginTop: '1%',
                                    marginBottom: '4%',
                                }}
                                aria-label="simple table"
                            >
                                <TableHead>
                                    <TableRow>
                                        <TableCell
                                            align="right"
                                            style={{ fontWeight: 700 }}
                                        >
                                            Asset
                                        </TableCell>
                                        <TableCell
                                            align="right"
                                            style={{ fontWeight: 700 }}
                                        >
                                            Value
                                        </TableCell>
                                        <TableCell
                                            align="right"
                                            style={{ fontWeight: 700 }}
                                        >
                                            Daily Movement
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {newsObj.dailyMovers.map((row) => (
                                        <TableRow>
                                            <TableCell
                                                align="right"
                                                style={{ fontWeight: 700 }}
                                            >
                                                {row.asset}
                                            </TableCell>
                                            <TableCell
                                                align="right"
                                                style={{ fontWeight: 700 }}
                                            >
                                                ${row.price}
                                            </TableCell>
                                            <TableCell
                                                align="right"
                                                style={{
                                                    fontWeight: 700,
                                                    color:
                                                        row.movement > 0
                                                            ? 'green'
                                                            : 'red',
                                                }}
                                            >
                                                {(
                                                    (100 * row.movement) /
                                                    (row.price - row.movement)
                                                ).toFixed(2)}
                                                %
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <Button variant="text" sx={{ marginTop: '2%' }}>
                            View More
                        </Button>
                    </div>
                </Box>
                <Box
                    id="accountCard"
                    sx={{
                        width: '38vw',
                        height: '75vh',
                        borderRadius: 10,
                        border: 1,
                        borderColor: '#e0f2f1',
                        borderWidth: 3,
                        background:
                            'linear-gradient(-152.97deg, rgba(112, 112, 112, 0.2) 0%, rgba(181, 181, 181, 0) 100%);',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'start',
                            marginRight: '5%',
                            marginLeft: '5%',
                            marginTop: '4%',
                            width: '90%',
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{ marginLeft: '5%', marginBottom: '2%' }}
                        >
                            Position News
                        </Typography>
                        <Divider
                            orientation="horizontal"
                            sx={{ width: '100%' }}
                        />
                        <Box>
                            {[0, 1, 2]
                                .map((x) => newsObj.positionNews[x])
                                .map((news) => (
                                    <HomeNewsRow news={news} />
                                ))}
                        </Box>
                        <div
                            style={{
                                display: 'flex',
                                width: '100%',
                                justifyContent: 'center',
                            }}
                        >
                            <Button
                                variant="text"
                                href="/research"
                                sx={{ marginTop: '2%' }}
                            >
                                View More
                            </Button>
                        </div>
                    </div>
                </Box>
            </div>
        </div>
    );
};

export default Informatives;
