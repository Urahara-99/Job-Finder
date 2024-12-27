import React from "react";
import "../index.css";
import { assets } from "../assets/assets";
import {useNavigate} from "react-router-dom";

const SimilarJobCards = ({baseData, allJobs}) => {
  const navigate = useNavigate();
  const similarData = allJobs.filter((jobs)=>
     jobs.companyId._id === baseData.companyId._id && jobs._id !== baseData._id);

  return (
    <div className="w-full grid justify-end px-4 md:px-8 lg:px-16 gap-5">
      <p className="text-lg mb-5 flex">More jobs from {baseData.companyId.name}</p>
      {similarData.map((jobs)=>(
        <div key={jobs._id}>
          <div className="border p-4 shadow rounded w-48 sm:w-72">
        <div className='flex justify-between items-center'>
            <img src={assets.company_icon} alt='' className='h-8'/>
        </div>
        <h3 className='font-medium text-xl mt-2'>{jobs.title}</h3>
        <div className='flex items-center gap-3 mt-2 text-xs sm:grid-flow-row'>
            <p className='bg-blue-50 border border-blue-200 px-4 py-1.5 rounded'>{jobs.location}</p>
            <p className='bg-red-50 border border-red-200 px-4 py-1.5 rounded'>{jobs.level}</p>
        </div>
        <p className='text-gray-500 text-sm mt-2' dangerouslySetInnerHTML={{__html: jobs.description.slice(0,100) }}></p>
        <div className='mt-4 flex gap-4 text-sm'>
            <button onClick={()=>navigate(`/apply-job/${jobs._id}`)} className='bg-blue-600 text-white px-4 py-2 rounded'>Apply now</button>
            <button onClick={()=>navigate(`/apply-job/${jobs._id}`)} className='text-gray-500 border border-gray-500 rounded px-4 py-2'>Learn More</button>
        </div>
    </div>
        </div>
      ))}
    </div>

  )
}

export default SimilarJobCards