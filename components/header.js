import { useState, useEffect } from 'react';
import { Divider, Typography, Avatar } from '@mui/material';
import { Box } from '@mui/system';

const indices = [
    { name: 'S&P 500', value: '$4,701.70' },
    { name: 'Dow Jones', value: '$36,432.22' },
    { name: 'Nasdaq', value: '$211.69' },
];

const daysOfTheWeek = [
    '',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
];
const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

var today = new Date();
var day = daysOfTheWeek[today.getDay()];
var date = today.getDate();
var month = monthNames[today.getMonth()];
var year = today.getFullYear();

const ProfileBar = ({username}) => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((seconds) => (seconds + 1) % 3);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="py-8 px-4 flex" style={{width: "100%"}}>
            <div className="ml-auto mr-0 flex items-center">
                <div className="flex flex-col items-end pr-8">
                    <div className="text-sm">
                        {day} {month} {date}, {year}
                    </div>
                    <div className="text-lg flex flex-col items-end">
                        <div>
                            {indices[seconds].name} &nbsp;&nbsp; {indices[seconds].value}
                        </div>
                    </div>
                </div>
                <div className="border-l-2 border-gray-200 pl-8 pr-4 py-8 flex items-center gap-2">
                    <Avatar className="w-12 h-12 bg-red-400">
                        {username!=null? username.split(' ').length >= 2
                            ? username.split(' ')[0].substr(0, 1) +
                              username.split(' ')[1].substr(0, 1)
                            : 'XX' : 'XX'}
                    </Avatar>
                    <div>
                        <div className="text-sm text-gray-500">
                            Welcome back
                        </div>
                        <div className="font-medium">{username==null? "User" : username}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileBar;
