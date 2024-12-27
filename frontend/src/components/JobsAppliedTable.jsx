import React from 'react';
import companyIcon from '../assets/accenture_logo.png';

const JobsAppliedTable = () => {
  return (
    <div className="w-9/12 mt-5 justify-center px-5">
      <div>
        <h2 className="text-[17px] font-semibold mb-5">Jobs Applied</h2>
        <div className="overflow-x-auto border-gray-300 border-2 rounded-lg">
          <table className="w-full md:w-[900px] border-separate border-spacing-x-4 text-left border-gray-950">
            <thead>
              <tr className="text-[15px]">
                <th className="px-4 py-3">Company</th>
                <th className="px-4 py-3">Job Title</th>
                <th className="px-4 py-3">Location</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-[14px] border-b border-gray-300">
                <td className="px-4 py-5 flex items-center gap-2">
                  <img src={companyIcon} alt="Company Logo" className="w-10" />
                  <p>Accenture</p>
                </td>
                <td className="px-4 py-5">Fullstack Developer</td>
                <td className="px-4 py-5">Bangalore</td>
                <td className="px-4 py-5">22 Aug, 2024</td>
                <td className="px-4 py-5">
                <div className='px-1 py-1 bg-red-200 justify-center flex rounded-sm text-red-800'>
                    Rejected
                    </div>
                </td>
              </tr>
              <tr className="text-[15px] border-b border-gray-300">
                <td className="px-4 py-5 flex items-center gap-2">
                  <img src={companyIcon} alt="Company Logo" className="w-10" />
                  <p>Google</p>
                </td>
                <td className="px-4 py-5">Marketing Manager</td>
                <td className="px-4 py-5">London</td>
                <td className="px-4 py-5">15 Oct, 2024</td>
                <td className="px-4 py-5">
                  <div className='px-1 py-1 bg-green-200 justify-center flex rounded-sm text-green-800'>
                    Accepted
                    </div>
                  </td>
              </tr>
              <tr className="text-[15px] border-b border-gray-300">
                <td className="px-4 py-5 flex items-center gap-2">
                  <img src={companyIcon} alt="Company Logo" className="w-10" />
                  <p>Meta</p>
                </td>
                <td className="px-4 py-5">Marketing Manager</td>
                <td className="px-4 py-5">London</td>
                <td className="px-4 py-5">15 Oct, 2024</td>
                <td className="px-4 py-5">
                  <div className='px-1 py-1 bg-blue-200 justify-center flex rounded-sm text-blue-800'>
                    Pending
                    </div>
                  </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default JobsAppliedTable;
