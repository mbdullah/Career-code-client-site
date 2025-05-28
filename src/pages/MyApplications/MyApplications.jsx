import React, { Suspense } from 'react';
import ApplicationsStats from './ApplicationsStats';
import ApplicationsList from './ApplicationsList';
import useAuth from '../../Hooks/useAuth';
import { myApplicationsPromise } from '../../Api/ApplicationsApi';



const MyApplications = () => {
    const {user} = useAuth();
    return (
        <div>
            <ApplicationsStats></ApplicationsStats>
            <Suspense fallback={"Your Applications Loading..."}>
                <ApplicationsList myApplicationsPromise={myApplicationsPromise(user.email)}></ApplicationsList>
            </Suspense>
        </div>
    );
};

export default MyApplications;