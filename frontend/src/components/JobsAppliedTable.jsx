import React from 'react'
import companyIcon from '../assets/accenture_logo.png'

const JobsAppliedTable = () => {
  return (
    <div className='w-full mt-5 justify-center ml-20'>
      <div>
         <h2 className='text-[17px] font-semibold mb-5'>Jobs Applied</h2>
         <div className="overflow-hidden rounded-lg border border-gray-300">
  <table className="w-full border-separate border-spacing-x-4 text-left">
    <thead className="bg-gray-100">
      <tr className="text-[15px]">
        <th className="px-4 py-3">Company</th>
        <th className="px-4 py-3">Job Title</th>
        <th className="px-4 py-3">Location</th>
        <th className="px-4 py-3">Date</th>
        <th className="px-4 py-3">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr className="text-[15px]">
        <td className="px-4 py-5 flex items-center gap-2">
          <img src={companyIcon} alt="Company Logo" className="w-10" />
          <p>Accenture</p>
        </td>
        <td className="px-4 py-5">Fullstack Developer</td>
        <td className="px-4 py-5">Bangalore</td>
        <td className="px-4 py-5">22 Aug, 2024</td>
        <td className="px-4 py-5">Pending</td>
      </tr>
      <tr className="text-[15px]">
        <td className="px-4 py-5 flex items-center gap-2">
          <img src={companyIcon} alt="Company Logo" className="w-10" />
          <p>Accenture</p>
        </td>
        <td className="px-4 py-5">Fullstack Developer</td>
        <td className="px-4 py-5">Bangalore</td>
        <td className="px-4 py-5">22 Aug, 2024</td>
        <td className="px-4 py-5">Pending</td>
      </tr>
    </tbody>
  </table>
</div>




      </div>
    </div>
  )
}

export default JobsAppliedTable