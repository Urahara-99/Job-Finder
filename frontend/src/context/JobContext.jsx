import React from 'react'
import { jobsData } from "../assets/assets" 
import { createContext } from 'react';

export const JobContext = createContext();

export const JobProvider = ({ children }) => {

    const [jobData, setJobData] = React.useState(jobsData)

    return (
        <JobContext.Provider value={{ jobData }}>
            {children}
        </JobContext.Provider>
    );
    
};
