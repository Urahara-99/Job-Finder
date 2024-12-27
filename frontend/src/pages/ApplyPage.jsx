import React, { useContext, useEffect, useState } from "react";
import "../index.css";
import ApplyBox from "../components/ApplyBox";
import { JobContext } from "../context/JobContext";
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useParams } from "react-router-dom";
import loaderIcon from '../assets/loader.gif'

const ApplyPage = () => {

const {id} = useParams();
const {jobData} = useContext(JobContext);
const [fetchData, setFetchData] = useState(null);

  useEffect(()=>{
    const data = jobData.filter(job=>job._id === id);
    if(data.length !==0)
    {
      setFetchData(data);
    }
  },[id,jobData]);

    return (
      <div>
        <Navbar />
        { fetchData ? 
        ( <ApplyBox baseData={fetchData}/>)   
        : (
        <div className="flex justify-center items-center h-screen">
            <img src={loaderIcon} alt="Loading..." />
        </div>
        )
        }
        <Footer />
        </div>
    );
};

export default ApplyPage;
