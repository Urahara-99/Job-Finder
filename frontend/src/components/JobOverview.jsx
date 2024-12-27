import React from 'react'
import { useNavigate } from 'react-router-dom'

const JobOverview = ({baseData}) => {
 
  const navigate = useNavigate();
  return (
        <div>
            <h2><strong>Job Description</strong></h2>
            <div className='gap-4 leading-loose'>
        <div key={baseData._id}
        dangerouslySetInnerHTML={{__html: baseData.description}}
        >    
        </div>
        <button onClick={()=>navigate(`/user-job-portal/${baseData.title}/${baseData._id}`)}
        className="bg-blue-600 text-white px-12 py-3 rounded text-[13px] w-40 mt-10"
        >
              Apply now
            </button>
        </div>
        </div>
       
  )
}

export default JobOverview