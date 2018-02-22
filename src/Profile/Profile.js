import React from 'react';
import moment from 'moment';
import _ from 'lodash';

import Post from './Post';

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
            {_.map(MyPosts, (x) => <Post key={x.id} name={x.name} />)}
        </div>
    </React.Fragment>
);

export default Profile;
