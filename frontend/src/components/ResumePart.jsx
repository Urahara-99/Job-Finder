import React from 'react';
import uploadIcon from '../assets/upload.png';

const ResumePart = () => {
  const [upload, setUpload] = React.useState(false);

  function displayUploadIcon() {
    setUpload((prev) => !prev);
  }

  return (
    <div className="mt-10 px-5">
      <div className="w-full md:w-2/5">
        <div>
          <h2 className="text-[17px] font-semibold">Your Resume</h2>
        </div>
        <div className="py-3 gap-3 flex flex-wrap">
          <button className="py-1 px-3 bg-blue-100 text-sky-600 rounded-lg text-sm">
            Resume
          </button>
          <button className="py-1 px-4 bg-slate-100 border border-slate-400 text-slate-500 text-sm rounded-lg">
            Edit
          </button>
          {!upload ? (
            <button
              className="py-1 px-4 border-sky-500 border-2 rounded-lg"
              onClick={displayUploadIcon}
            >
              <img src={uploadIcon} alt="Upload Icon" className="w-6 h-6" />
            </button>
          ) : (
            <div className='w-28 flex'>
            <input type="file" name="file" alt="Upload Icon" />
            <button className='px-6 py-1 text-[13px] bg-emerald-300 text-emerald-900'>Finish</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumePart;
