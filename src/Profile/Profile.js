import React from 'react';
import moment from 'moment';
import _ from 'lodash';

const MyPosts = [
    {
        id: 1,
        name: 'Post prvi'
    },
    {
        id: 2,
        name: 'Post drugi'
    },
    {
        id: 3,
        name: 'Post treci'
    }
];

const Profile = () => (
    <React.Fragment>
        <div>
            Current time: {moment().format()}
        </div>
        <div>
            {_.map(MyPosts, (x) => <div key={x.id}>{x.name}</div>)}
        </div>
    </React.Fragment>
);

export default Profile;
