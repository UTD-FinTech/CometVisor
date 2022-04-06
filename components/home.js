import { useState } from 'react';
import styles from './home.module.css';
import { Box } from '@mui/system';
import { teal, pink } from '@mui/material/colors';
import {
    Button,
    Typography,
    ButtonGroup,
    createTheme,
    ThemeProvider,
    Divider,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
} from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
//import { ResponsiveLine } from '@nivo/line';
import ActivityRow from './webComponents/ActivityRow'
import HomeNewsRow from './webComponents/HomeNewsRow';

const theme = createTheme({
    palette: {
        positive: {
            main: teal[500],
        },
        negative: {
            main: pink[500],
        },
    },
});

const large_portfolio_data = [
    { date: 'Nov 10, 2020', price: '272.43' },
    { date: 'Nov 11, 2020', price: '276.48' },
    { date: 'Nov 12, 2020', price: '275.08' },
    { date: 'Nov 13, 2020', price: '276.95' },
    { date: 'Nov 16, 2020', price: '278.96' },
    { date: 'Nov 17, 2020', price: '275.00' },
    { date: 'Nov 18, 2020', price: '271.97' },
    { date: 'Nov 19, 2020', price: '272.94' },
    { date: 'Nov 20, 2020', price: '269.70' },
    { date: 'Nov 23, 2020', price: '268.43' },
    { date: 'Nov 24, 2020', price: '276.92' },
    { date: 'Nov 25, 2020', price: '275.59' },
    { date: 'Nov 27, 2020', price: '277.81' },
    { date: 'Nov 30, 2020', price: '276.97' },
    { date: 'Dec 01, 2020', price: '286.55' },
    { date: 'Dec 02, 2020', price: '287.52' },
    { date: 'Dec 03, 2020', price: '281.85' },
    { date: 'Dec 04, 2020', price: '279.70' },
    { date: 'Dec 07, 2020', price: '285.58' },
    { date: 'Dec 08, 2020', price: '283.40' },
    { date: 'Dec 09, 2020', price: '277.92' },
    { date: 'Dec 10, 2020', price: '277.12' },
    { date: 'Dec 11, 2020', price: '273.55' },
    { date: 'Dec 14, 2020', price: '274.19' },
    { date: 'Dec 15, 2020', price: '275.55' },
    { date: 'Dec 16, 2020', price: '275.67' },
    { date: 'Dec 17, 2020', price: '274.48' },
    { date: 'Dec 18, 2020', price: '276.40' },
    { date: 'Dec 21, 2020', price: '272.79' },
    { date: 'Dec 22, 2020', price: '267.09' },
    { date: 'Dec 23, 2020', price: '268.11' },
    { date: 'Dec 24, 2020', price: '267.40' },
    { date: 'Dec 28, 2020', price: '277.00' },
    { date: 'Dec 29, 2020', price: '276.78' },
    { date: 'Dec 30, 2020', price: '271.87' },
    { date: 'Dec 31, 2020', price: '273.16' },
    { date: 'Jan 04, 2021', price: '268.94' },
    { date: 'Jan 05, 2021', price: '270.97' },
    { date: 'Jan 06, 2021', price: '263.31' },
    { date: 'Jan 07, 2021', price: '268.74' },
    { date: 'Jan 08, 2021', price: '267.57' },
    { date: 'Jan 11, 2021', price: '256.84' },
    { date: 'Jan 12, 2021', price: '251.09' },
    { date: 'Jan 13, 2021', price: '251.64' },
    { date: 'Jan 14, 2021', price: '245.64' },
    { date: 'Jan 15, 2021', price: '251.36' },
    { date: 'Jan 19, 2021', price: '261.10' },
    { date: 'Jan 20, 2021', price: '267.48' },
    { date: 'Jan 21, 2021', price: '272.87' },
    { date: 'Jan 22, 2021', price: '274.50' },
    { date: 'Jan 25, 2021', price: '278.01' },
    { date: 'Jan 26, 2021', price: '282.05' },
    { date: 'Jan 27, 2021', price: '272.14' },
    { date: 'Jan 28, 2021', price: '265.00' },
    { date: 'Jan 29, 2021', price: '258.33' },
    { date: 'Feb 01, 2021', price: '262.01' },
    { date: 'Feb 02, 2021', price: '267.08' },
    { date: 'Feb 03, 2021', price: '266.65' },
    { date: 'Feb 04, 2021', price: '266.49' },
    { date: 'Feb 05, 2021', price: '268.10' },
    { date: 'Feb 08, 2021', price: '266.58' },
    { date: 'Feb 09, 2021', price: '269.45' },
    { date: 'Feb 10, 2021', price: '271.87' },
    { date: 'Feb 11, 2021', price: '270.39' },
    { date: 'Feb 12, 2021', price: '270.50' },
    { date: 'Feb 16, 2021', price: '273.97' },
    { date: 'Feb 17, 2021', price: '273.57' },
    { date: 'Feb 18, 2021', price: '269.39' },
    { date: 'Feb 19, 2021', price: '261.56' },
    { date: 'Feb 22, 2021', price: '260.33' },
    { date: 'Feb 23, 2021', price: '265.86' },
    { date: 'Feb 24, 2021', price: '264.31' },
    { date: 'Feb 25, 2021', price: '254.69' },
    { date: 'Feb 26, 2021', price: '257.62' },
    { date: 'Mar 01, 2021', price: '264.91' },
    { date: 'Mar 02, 2021', price: '259.00' },
    { date: 'Mar 03, 2021', price: '255.41' },
    { date: 'Mar 04, 2021', price: '257.64' },
    { date: 'Mar 05, 2021', price: '264.28' },
    { date: 'Mar 08, 2021', price: '255.31' },
    { date: 'Mar 09, 2021', price: '265.74' },
    { date: 'Mar 10, 2021', price: '264.90' },
    { date: 'Mar 11, 2021', price: '273.88' },
    { date: 'Mar 12, 2021', price: '268.40' },
    { date: 'Mar 15, 2021', price: '273.75' },
    { date: 'Mar 16, 2021', price: '279.28' },
    { date: 'Mar 17, 2021', price: '284.01' },
    { date: 'Mar 18, 2021', price: '278.62' },
    { date: 'Mar 19, 2021', price: '290.11' },
    { date: 'Mar 22, 2021', price: '293.54' },
    { date: 'Mar 23, 2021', price: '290.63' },
    { date: 'Mar 24, 2021', price: '282.14' },
    { date: 'Mar 25, 2021', price: '278.74' },
    { date: 'Mar 26, 2021', price: '283.02' },
    { date: 'Mar 29, 2021', price: '290.82' },
    { date: 'Mar 30, 2021', price: '288.00' },
    { date: 'Mar 31, 2021', price: '294.53' },
    { date: 'Apr 01, 2021', price: '298.66' },
    { date: 'Apr 05, 2021', price: '308.91' },
    { date: 'Apr 06, 2021', price: '306.26' },
    { date: 'Apr 07, 2021', price: '313.09' },
    { date: 'Apr 08, 2021', price: '313.02' },
    { date: 'Apr 09, 2021', price: '312.46' },
    { date: 'Apr 12, 2021', price: '311.54' },
    { date: 'Apr 13, 2021', price: '309.76' },
    { date: 'Apr 14, 2021', price: '302.82' },
    { date: 'Apr 15, 2021', price: '307.82' },
    { date: 'Apr 16, 2021', price: '306.18' },
    { date: 'Apr 19, 2021', price: '302.24' },
    { date: 'Apr 20, 2021', price: '302.65' },
    { date: 'Apr 21, 2021', price: '301.47' },
    { date: 'Apr 22, 2021', price: '296.52' },
    { date: 'Apr 23, 2021', price: '301.13' },
    { date: 'Apr 26, 2021', price: '303.04' },
    { date: 'Apr 27, 2021', price: '303.57' },
    { date: 'Apr 28, 2021', price: '307.10' },
    { date: 'Apr 29, 2021', price: '329.51' },
    { date: 'Apr 30, 2021', price: '325.08' },
    { date: 'May 03, 2021', price: '322.58' },
    { date: 'May 04, 2021', price: '318.36' },
    { date: 'May 05, 2021', price: '315.02' },
    { date: 'May 06, 2021', price: '320.02' },
    { date: 'May 07, 2021', price: '319.08' },
    { date: 'May 10, 2021', price: '305.97' },
    { date: 'May 11, 2021', price: '306.53' },
    { date: 'May 12, 2021', price: '302.55' },
    { date: 'May 13, 2021', price: '305.26' },
    { date: 'May 14, 2021', price: '315.94' },
    { date: 'May 17, 2021', price: '315.46' },
    { date: 'May 18, 2021', price: '309.96' },
    { date: 'May 19, 2021', price: '313.59' },
    { date: 'May 20, 2021', price: '318.61' },
    { date: 'May 21, 2021', price: '316.23' },
    { date: 'May 24, 2021', price: '324.63' },
    { date: 'May 25, 2021', price: '327.79' },
    { date: 'May 26, 2021', price: '327.66' },
    { date: 'May 27, 2021', price: '332.75' },
    { date: 'May 28, 2021', price: '328.73' },
    { date: 'Jun 01, 2021', price: '329.13' },
    { date: 'Jun 02, 2021', price: '329.15' },
    { date: 'Jun 03, 2021', price: '326.04' },
    { date: 'Jun 04, 2021', price: '330.35' },
    { date: 'Jun 07, 2021', price: '336.58' },
    { date: 'Jun 08, 2021', price: '333.68' },
    { date: 'Jun 09, 2021', price: '330.25' },
    { date: 'Jun 10, 2021', price: '332.46' },
    { date: 'Jun 11, 2021', price: '331.26' },
    { date: 'Jun 14, 2021', price: '336.77' },
    { date: 'Jun 15, 2021', price: '336.75' },
    { date: 'Jun 16, 2021', price: '331.08' },
    { date: 'Jun 17, 2021', price: '336.51' },
    { date: 'Jun 18, 2021', price: '329.66' },
    { date: 'Jun 21, 2021', price: '332.29' },
    { date: 'Jun 22, 2021', price: '339.03' },
    { date: 'Jun 23, 2021', price: '340.59' },
    { date: 'Jun 24, 2021', price: '343.18' },
    { date: 'Jun 25, 2021', price: '341.37' },
    { date: 'Jun 28, 2021', price: '355.64' },
    { date: 'Jun 29, 2021', price: '351.89' },
    { date: 'Jun 30, 2021', price: '347.71' },
    { date: 'Jul 01, 2021', price: '354.39' },
    { date: 'Jul 02, 2021', price: '354.70' },
    { date: 'Jul 06, 2021', price: '352.78' },
    { date: 'Jul 07, 2021', price: '350.49' },
    { date: 'Jul 08, 2021', price: '345.65' },
    { date: 'Jul 09, 2021', price: '350.42' },
    { date: 'Jul 12, 2021', price: '353.16' },
    { date: 'Jul 13, 2021', price: '352.09' },
    { date: 'Jul 14, 2021', price: '347.63' },
    { date: 'Jul 15, 2021', price: '344.46' },
    { date: 'Jul 16, 2021', price: '341.16' },
    { date: 'Jul 19, 2021', price: '336.95' },
    { date: 'Jul 20, 2021', price: '341.66' },
    { date: 'Jul 21, 2021', price: '346.23' },
    { date: 'Jul 22, 2021', price: '351.19' },
    { date: 'Jul 23, 2021', price: '369.79' },
    { date: 'Jul 26, 2021', price: '372.46' },
    { date: 'Jul 27, 2021', price: '367.81' },
    { date: 'Jul 28, 2021', price: '373.28' },
    { date: 'Jul 29, 2021', price: '358.32' },
    { date: 'Jul 30, 2021', price: '356.30' },
    { date: 'Aug 02, 2021', price: '351.95' },
    { date: 'Aug 03, 2021', price: '351.24' },
    { date: 'Aug 04, 2021', price: '358.92' },
    { date: 'Aug 05, 2021', price: '362.97' },
    { date: 'Aug 06, 2021', price: '363.51' },
    { date: 'Aug 09, 2021', price: '361.61' },
    { date: 'Aug 10, 2021', price: '361.13' },
    { date: 'Aug 11, 2021', price: '359.96' },
    { date: 'Aug 12, 2021', price: '362.65' },
    { date: 'Aug 13, 2021', price: '363.18' },
    { date: 'Aug 16, 2021', price: '366.56' },
    { date: 'Aug 17, 2021', price: '358.45' },
    { date: 'Aug 18, 2021', price: '355.45' },
    { date: 'Aug 19, 2021', price: '355.12' },
    { date: 'Aug 20, 2021', price: '359.37' },
    { date: 'Aug 23, 2021', price: '363.35' },
    { date: 'Aug 24, 2021', price: '365.51' },
    { date: 'Aug 25, 2021', price: '368.39' },
    { date: 'Aug 26, 2021', price: '364.38' },
    { date: 'Aug 27, 2021', price: '372.63' },
    { date: 'Aug 30, 2021', price: '380.66' },
    { date: 'Aug 31, 2021', price: '379.38' },
    { date: 'Sep 01, 2021', price: '382.05' },
    { date: 'Sep 02, 2021', price: '375.28' },
    { date: 'Sep 03, 2021', price: '376.26' },
    { date: 'Sep 07, 2021', price: '382.18' },
    { date: 'Sep 08, 2021', price: '377.57' },
    { date: 'Sep 09, 2021', price: '378.00' },
    { date: 'Sep 10, 2021', price: '378.69' },
    { date: 'Sep 13, 2021', price: '376.51' },
    { date: 'Sep 14, 2021', price: '376.53' },
    { date: 'Sep 15, 2021', price: '373.92' },
    { date: 'Sep 16, 2021', price: '373.06' },
    { date: 'Sep 17, 2021', price: '364.72' },
    { date: 'Sep 20, 2021', price: '355.70' },
    { date: 'Sep 21, 2021', price: '357.48' },
    { date: 'Sep 22, 2021', price: '343.21' },
    { date: 'Sep 23, 2021', price: '345.96' },
    { date: 'Sep 24, 2021', price: '352.96' },
    { date: 'Sep 27, 2021', price: '353.58' },
    { date: 'Sep 28, 2021', price: '340.65' },
    { date: 'Sep 29, 2021', price: '339.61' },
    { date: 'Sep 30, 2021', price: '339.39' },
    { date: 'Oct 01, 2021', price: '343.01' },
    { date: 'Oct 04, 2021', price: '326.23' },
    { date: 'Oct 05, 2021', price: '332.96' },
    { date: 'Oct 06, 2021', price: '333.64' },
    { date: 'Oct 07, 2021', price: '329.22' },
    { date: 'Oct 08, 2021', price: '330.05' },
    { date: 'Oct 11, 2021', price: '325.45' },
    { date: 'Oct 12, 2021', price: '323.77' },
    { date: 'Oct 13, 2021', price: '324.54' },
    { date: 'Oct 14, 2021', price: '328.53' },
    { date: 'Oct 15, 2021', price: '324.76' },
    { date: 'Oct 18, 2021', price: '335.34' },
    { date: 'Oct 19, 2021', price: '339.99' },
    { date: 'Oct 20, 2021', price: '340.78' },
    { date: 'Oct 21, 2021', price: '341.88' },
    { date: 'Oct 22, 2021', price: '324.61' },
    { date: 'Oct 25, 2021', price: '328.69' },
    { date: 'Oct 26, 2021', price: '315.81' },
    { date: 'Oct 27, 2021', price: '312.22' },
    { date: 'Oct 28, 2021', price: '316.92' },
    { date: 'Oct 29, 2021', price: '323.57' },
    { date: 'Nov 01, 2021', price: '329.98' },
    { date: 'Nov 02, 2021', price: '328.08' },
    { date: 'Nov 03, 2021', price: '331.62' },
    { date: 'Nov 04, 2021', price: '335.85' },
    { date: 'Nov 05, 2021', price: '341.13' },
    { date: 'Nov 08, 2021', price: '338.62' },
    { date: 'Nov 09, 2021', price: '335.37' },
    { date: 'Nov 10, 2021', price: '327.64' },
];

const DailyData = [
    { time: '8:00 AM', price: '326.45' },
    { time: '8:15 AM', price: '323.70' },
    { time: '8:30 AM', price: '317.25' },
    { time: '8:45 AM', price: '318.56' },
    { time: '9:00 AM', price: '320.45' },
    { time: '9:15 AM', price: '319.35' },
    { time: '9:30 AM', price: '325.67' },
    { time: '9:45 AM', price: '328.95' },
    { time: '10:00 AM', price: '330.12' },
    { time: '10:15 AM', price: '329.54' },
    { time: '10:30 AM', price: '329.19' },
    { time: '10:45 AM', price: '327.40' },
    { time: '11:00 AM', price: '333.33' },
    { time: '11:15 AM', price: '331.87' },
    { time: '11:30 AM', price: '332.94' },
    { time: '11:45 AM', price: '326.89' },
    { time: '12:00 PM', price: '332.49' },
];

const activityData = [
    {
        datetime: 'Nov. 10, 2021',
        limitPrice: 2.26,
        buyOrSell: 'Sell',
        positionEffect: 'Close',
        amount: 226.0,
        asset: 'NET',
        status: 'Filled',
        filled: 'Nov. 10, 2021, 10:48 AM',
        filled_quantity: {
            quantity: 1,
            type: 'contract',
            price: 2.26,
        },
    },
    {
        datetime: 'Nov. 9, 2021',
        buyOrSell: ' Sell',
        amount: 197.96,
        asset: 'NIO',
        status: 'Filled',
        filled: 'Nov. 9, 2021, 1:23 PM',
        filled_quantity: {
            quantity: 3,
            type: 'shares',
            price: 143.32,
        },
    },
    {
        datetime: 'Nov. 9, 2021',
        buyOrSell: 'Buy',
        amount: 281.37,
        asset: 'NET',
        status: 'Filled',
        filled: 'Nov. 9, 2021, 12:37 PM',
        filled_quantity: {
            quantity: 2,
            type: 'shares',
            price: 140.69,
        },
    },
    {
        datetime: 'Nov. 8, 2021',
        buyOrSell: 'Buy',
        amount: 432.96,
        asset: 'NIO',
        status: 'Filled',
        filled: 'Nov. 8, 2021, 8:30 AM',
        filled_quantity: {
            quantity: 4,
            type: 'shares',
            price: 49.46,
        },
    },
];

const newsItems = [
    {
        title: 'Shares of EV start-up Lucid rise after executives confirm new reservations, 2022 vehicle production',
        date: '3 Days Ago',
        source: 'CNN',
        href: 'https://www.cnbc.com/2021/11/15/shares-of-ev-start-up-lucid-jump-on-new-reservations-2022-production.html',
    },
    {
        title: 'Game consoles will be harder to find for the holidays than you thought',
        date: '6 Hours Ago',
        source: 'Yahoo Finance',
        href: 'https://finance.yahoo.com/news/the-playstation-5-and-xbox-series-x-harder-to-find-than-you-thought-183507020.html',
    },
    {
        title: 'Nvidia reports record sales and beats on earnings again, sending stock higher',
        date: '1 Hour Ago',
        source: 'MarketWatch',
        href: 'https://www.marketwatch.com/story/nvidia-stock-rises-as-another-quarter-of-record-sales-top-wall-street-expectations-11637184943?mod=home-page',
    },
    {
        title: 'Google, CME Cloud Partnership Could Upend Tech Investments by Traders',
        date: '5 Hours Ago',
        source: 'Wall Street Journal',
        href: 'https://www.wsj.com/articles/google-cme-cloud-partnership-could-upend-tech-investments-by-traders-11637181101?mod=markets_lead_pos7',
    },
];

/*

GRAPH CODE:

PORTFOLIO BALANCE:

<ResponsiveLine
                        data={[
                            {
                                id: 'Account',
                                color: '#009688',
                                data: data,
                            },
                        ]}
                        margin={{ right: 110, bottom: 50, left: 60 }}
                        xScale={{ type: 'point' }}
                        yScale={{
                            type: 'linear',
                            min: 'auto',
                            max: graphMax,
                        }}
                        colors={color}
                        yFormat=" >-.2f"
                        axisTop={null}
                        axisRight={null}
                        axisBottom={null}
                        axisLeft={null}
                        height={260}
                        curve="natural"
                        layers={['lines', 'points', 'mesh']}
                        pointSize={1}
                        pointColor={{ theme: 'background' }}
                        pointBorderWidth={1}
                        pointBorderColor={{ from: 'serieColor' }}
                        pointLabelYOffset={-12}
                        useMesh={true}
                        legends={[
                            {
                                effects: [
                                    {
                                        on: 'hover',
                                        style: {
                                            itemBackground:
                                                'rgba(0, 0, 0, .03)',
                                            itemOpacity: 1,
                                        },
                                    },
                                ],
                            },
                        ]}
                    />

*/ 

const Home = (props) => {
    const [timeframe, setTimeframe] = useState('1D');
    const changeDaily = () => {
        setTimeframe('1D');
    };

    const changeWeekly = () => {
        setTimeframe('1W');
    };

    const changeMonthly = () => {
        setTimeframe('1M');
    };

    const changeThreeMonthly = () => {
        setTimeframe('3M');
    };

    const changeAnnualy = () => {
        setTimeframe('1Y');
    };

    const data = [];

    if (timeframe === '1D') {
        for (const dataPoint of DailyData) {
            console.log(dataPoint);
            data.push({
                x: dataPoint.time,
                y: parseFloat(dataPoint.price),
            });
        }
        console.log(data);
    } else {
        if (timeframe === '1W') {
            for (const dataPoint of large_portfolio_data.slice(
                large_portfolio_data.length - 8,
                large_portfolio_data.length
            )) {
                data.push({
                    x: dataPoint.date,
                    y: parseFloat(dataPoint.price),
                });
            }
        } else if (timeframe === '1M') {
            for (const dataPoint of large_portfolio_data.slice(
                large_portfolio_data.length - 31,
                large_portfolio_data.length
            )) {
                data.push({
                    x: dataPoint.date,
                    y: parseFloat(dataPoint.price),
                });
            }
        } else if (timeframe === '3M') {
            for (const dataPoint of large_portfolio_data.slice(
                large_portfolio_data.length - 93,
                large_portfolio_data.length
            )) {
                data.push({
                    x: dataPoint.date,
                    y: parseFloat(dataPoint.price),
                });
            }
        } else if (timeframe === '1Y') {
            for (const dataPoint of large_portfolio_data.slice(
                0,
                large_portfolio_data.length
            )) {
                data.push({
                    x: dataPoint.date,
                    y: parseFloat(dataPoint.price),
                });
            }
        }
    }

    const findMax = [];

    for (const dataPoint of data) {
        findMax.push(Math.round(dataPoint.y));
    }
    console.log(findMax);
    const valueMax = Math.max(...findMax);
    const graphMax = Math.ceil(valueMax * 1.01);
    console.log(graphMax);

    let positive = true;
    let color = teal[500];

    if (data[0].y > data[data.length - 1].y) {
        positive = false;
        color = pink[500];
    }

    return (
        <div
            className="flex flex-col align-end mx-8"

        >
            <div className="rounded-3xl border-2 border-gray-200 flex flex-col p-8"
                id={styles.accountCard}
            >
                <ThemeProvider theme={theme}>
                    <div className="text-gray-600 font-light text-2xl">
                        Invest Value
                    </div>
                    <div className="text-5xl font-light tracking-tight">
                        ${DailyData[DailyData.length - 1].price}
                    </div>
                    <div className="flex flex-row mt-2">
                        {positive ?
                            <ArrowDropUpIcon className="text-green-500" /> :
                            <ArrowDropDownIcon className="text-red-500" />
                        }
                        <div className={positive ? "text-green-500" : "text-red-500"}>
                            {Math.abs(
                                data[0].y - data[data.length - 1].y
                            ).toFixed(2)}{' '}
                            (
                            {(
                                ((data[data.length - 1].y - data[0].y) /
                                    data[data.length - 1].y) *
                                100
                            ).toFixed(2)}
                            %)
                        </div>
                    </div>
                    <h6>Portfolio balance goes here</h6>
                    <div className="flex flex-row-reverse">
                        <div className="grid grid-cols-5 divide-x divide-green-600 divide-x-2 text-green-600 text-center">
                            <div onClick={changeDaily} className="mx-2">
                                1D
                            </div>
                            <div onClick={changeWeekly}>
                                1W
                            </div>
                            <div onClick={changeMonthly}>
                                1M
                            </div>
                            <div onClick={changeThreeMonthly}>
                                3M
                            </div>
                            <div onClick={changeAnnualy}>
                                1Y
                            </div>
                        </div>
                    </div>
                </ThemeProvider>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: '5%',
                    marginBottom: '5%',
                }}
            >
                <Box
                    id={styles.accountCard}
                    sx={{
                        width: '30vw',
                        height: '75vh',
                        marginRight: '2vw',
                        borderRadius: 10,
                        border: 1,
                        borderColor: '#e0f2f1',
                        borderWidth: 3,
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
                            Activity
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
                                            style={{ fontWeight: 700 }}
                                        ></TableCell>
                                        <TableCell
                                            align="right"
                                            style={{ fontWeight: 700 }}
                                        >
                                            Date/Time
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
                                            Buy/Sell
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {activityData.map((row) => (
                                        <ActivityRow
                                            key={row.datetime + row.amount}
                                            row={row}
                                        />
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </Box>
                <Box
                    id={styles.accountCard}
                    sx={{
                        width: '38vw',
                        height: '75vh',
                        borderRadius: 10,
                        border: 1,
                        borderColor: '#e0f2f1',
                        borderWidth: 3,
                    }}
                    className="overflow-y-scroll overflow-x-hidden"
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
                            News
                        </Typography>
                        <Divider
                            orientation="horizontal"
                            sx={{ width: '100%' }}
                        />
                        <Box>
                            {newsItems.map((news) => (
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

export default Home;
