import React, { use } from 'react';
import { AuthContext } from '../constexts/AuthContext/AuthContext';

const useAuth = () => {
    const authInfo = use(AuthContext);
    return authInfo 
};

export default useAuth;