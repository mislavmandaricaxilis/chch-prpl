import React from 'react';
import moment from 'moment';

const About = () => (
    <div>
        Current time: {moment().format()}
    </div>
);

export default About;
