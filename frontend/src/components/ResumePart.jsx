import React from 'react'
import uploadIcon from '../assets/upload.png'

const ResumePart = () => {
  
  const [upload, setUpload] = React.useState(false);

  function displayUploadIcon() {
    setUpload(prev=>!prev)
  }
  return (
    <div className='mt-10 w-full grid-flow-row ml-20'>
        <div className='w-2/5'>
            <div>
                <h2 className='text-[17px] font-semibold'>Your Resume</h2>
            </div>
            <div className='py-3 gap-3 flex'>
                <button className='py-1 px-3 bg-blue-100 text-sky-600 rounded-lg text-sm'>resume</button>
                <button className='py-1 px-4 bg-slate-100 border border-slate-400 text-slate-500 text-sm rounded-lg'>Edit</button>
                { upload ? null : 
                <button className='py-1 px-4 border-sky-500 border-2 rounded-lg'
                onClick={displayUploadIcon}>
            <img src={uploadIcon} alt="Upload Icon" className="w-6 h-6" />
          </button>}
          { upload ? <input
                type="file"
                name='file'
                src={uploadIcon} alt="Upload Icon"/> 
              : null }
          </div>
        </div>
    </div>

  )
}

export default ResumePart