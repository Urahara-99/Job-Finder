import React from 'react'
import ResumePart from '../components/ResumePart'
import Navbar from '../components/Navbar'
import JobsAppliedTable from '../components/JobsAppliedTable'

const AppliedJobsPage = () => {
  return (
    <div>
      <Navbar />
      <ResumePart />
      <JobsAppliedTable />
    </div>
    
  )
}

export default AppliedJobsPage