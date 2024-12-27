import React from "react";
import "../index.css";
import suitcase_icon from "../assets/suitcase_icon.svg";
import location_icon from "../assets/location_icon.svg";
import money_icon from "../assets/money_icon.svg";
import profile_icon from "../assets/person_icon.svg";
import moment from "moment";
import SimilarJobCards from "./SimilarJobCards";
import JobOverview from "./JobOverview";
import { jobsData } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const ApplyBox = ({ baseData }) => {
  
  const jobData = baseData[0];
  const navigate = useNavigate();

  return (
    <main className="flex justify-center px-3 sm:px-5 lg:px-10">
      <div className="w-11/12">
        <div
          key={jobData._id}
          className="w-full max-w-7xl flex flex-col h-auto md:h-56 md:flex-row mt-10 bg-blue-50 border-2 rounded-lg border-blue-500 shadow-md"
        >
          <div className="w-full md:w-3/5 p-5 flex items-center md:ml-5">
            <div className="px-5 py-5 w-16 md:w-32 bg-white h-20 md:h-28 flex justify-center items-center rounded-lg border-2">
              <img
                src={jobData.companyId.image}
                className="w-8 md:w-12"
                alt="Company Logo"
              />
            </div>
            <div className="ml-3 md:ml-5">
              <h1 className="text-lg md:text-3xl text-black font-semibold">
                {jobData.title}
              </h1>
              <div className="py-3 md:py-5 flex flex-col md:flex-row items-start md:items-center text-sm gap-3 md:gap-6">
                <div className="flex items-center">
                  <img
                    src={suitcase_icon}
                    alt="Job Icon"
                    className="w-4 h-4"
                  />
                  <p className="ml-2">{jobData.companyId.name}</p>
                </div>
                <div className="flex items-center">
                  <img
                    src={location_icon}
                    alt="Location Icon"
                    className="w-4 h-4 ml-0 md:ml-10"
                  />
                  <p className="ml-2">{jobData.location}</p>
                </div>
                <div className="flex items-center">
                  <img
                    src={profile_icon}
                    alt="Profile Icon"
                    className="w-4 h-4 ml-0 md:ml-10"
                  />
                  <p className="ml-2">{jobData.level}</p>
                </div>
                <div className="flex items-center">
                  <img
                    src={money_icon}
                    alt="Salary Icon"
                    className="w-4 h-4 ml-0 md:ml-10"
                  />
                  <p className="ml-2 w-10">CTC: ${jobData.salary / 1000}K</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-5">
            <button onClick={()=>navigate(`/user-job-portal/${jobData.title}/${jobData._id}`)}
            className="bg-blue-600 text-white px-12 py-3 rounded text-[13px]">
              Apply now
            </button>
            <p className="text-[13px] md:text-[12px] mt-3">
              Posted {moment(jobData.date).fromNow()}
            </p>
          </div>
        </div>
        <div className="w-full sm:grid-flow-col grid">
          <div className="w-5/6 grid grid-row-1 sm:grid-row-2 xl:grid-row-3 mt-10">
            <JobOverview baseData={jobData} />
            
          </div>
          <div className="w-2/6 grid grid-row-1 sm:grid-row-2 xl:grid-row-3 mt-10">
            <SimilarJobCards baseData={baseData[0]} allJobs={jobsData}/>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ApplyBox;
