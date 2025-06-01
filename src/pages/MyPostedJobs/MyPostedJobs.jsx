import React, { Suspense } from 'react';
import useAuth from '../../Hooks/useAuth';
import MyPostedJobsList from './MyPostedJobsList';
import { myPostedJobsByPromise } from '../../Api/JobsApi';


const MyPostedJobs = () => {
    const {user} = useAuth();
    return (
        <div>
            <h2>My Posted Jobs : </h2>
            <Suspense fallback={"Your Posted Jobs are Loading..."}>
               <MyPostedJobsList myPostedJobsByPromise = {myPostedJobsByPromise(user.email)}></MyPostedJobsList>
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;