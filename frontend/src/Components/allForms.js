import React, { useState, useEffect, useContext } from 'react';
import FormContext from '../Context/FormContext';
import { MdDelete } from "react-icons/md";
import ClipLoader from 'react-spinners/ClipLoader';

const FormTable = () => {
    //context apis
    const { getAllForms, allForms, deleteFormDatabase } = useContext(FormContext);


    const [isPlaying, setIsPlaying] = useState(false);
    const [loading, setLoading] = useState(false);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    const getItem = async () => {
        await getAllForms();
    }

    const deleteForm = async ( id ) => {

      setLoading(true);
      const x = await deleteFormDatabase(id);

      if(x === 200)
      {
        await getAllForms();
        setLoading(false);
      }
    }

    useEffect(() => {
        getItem();
    },[])

  return (
    <div className='w-full md:w-auto md:mx-[5%] mt-8 mb-4 p-2 md:p-5 shadow-md rounded-lg border text-[0.9rem]' style={{fontFamily: "Monospace"}}>
      <h2 className='mb-4 p-2 rounded-sm text-gray-600 bg-gray-200 w-fit'>Sound Recording Data</h2>
      <div className='overflow-x-scroll md:overflow-hidden'>
      <table className='w-[150vw] md:w-full'>
        <thead className='w-full'>
          <tr className='w-full flex justify-between text-gray-600 text-xs md:text-lg' >
            <th className='border flex items-center justify-center p-2 tracking-tight leading-none w-[8%] md:w-[5%]'>S.No</th>
            <th className='border flex items-center justify-center p-2 tracking-tight leading-none w-[15%]'>Doctor Name</th>
            <th className='border flex items-center justify-center p-2 tracking-tight leading-none w-[15%]'>Patient Name</th>
            <th className='border flex items-center justify-center p-2 tracking-tight leading-none w-[10%]'>Patient Age</th>
            <th className='border flex items-center justify-center p-2 tracking-tight leading-none w-[15%]'>Recording Date</th>
            <th className='border flex items-center justify-center p-2 tracking-tight leading-none w-[30%]'>Audio</th>
            <th className='border flex items-center justify-center p-2 tracking-tight leading-none w-[10%]'>Remove</th>
          </tr>
        </thead>
        <div className='w-full'>
          {allForms && 
          (allForms.length > 0
            ?
            <div>
              {allForms.map((form,index) => (
                <tr key={form._id} className='w-full flex justify-between items-center h-12 text-gray-600 text-xs md:text-lg'>
                  <div className='border w-[8%] md:w-[5%] p-1 flex items-center justify-center text-center capitalize h-full tracking-tight leading-none'>{index + 1}</div>
                  <div className='border w-[15%] p-1 flex justify-center items-center text-center capitalize h-full tracking-tight leading-none'>{form.doctorName}</div>
                  <div className='border w-[15%] flex items-center justify-center text-center capitalize h-full tracking-tight leading-none'>{form.patientName}</div>
                  <div className='border w-[10%] flex items-center justify-center h-full tracking-tight leading-none'>{form.patientAge}</div>
                  <div className='border w-[15%] flex items-center justify-center h-full tracking-tight leading-none'>{new Date(form.recordingDate).toLocaleDateString()}</div>
                  <audio
                    className='w-[30%] h-full border py-1 px-2'
                    src={form.soundFile}
                    controls
                    autoPlay={false}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  />
                  <div className='border w-[10%] h-full flex justify-center items-center'>
                      {loading
                      ?
                      <div className='w-full h-full rounded-md text-lg font-bold flex justify-center items-center text-gray-600'>
                          <ClipLoader 
                              color="gray"
                              size={20}
                          />
                      </div>
                      :
                      <MdDelete 
                        className='text-xl hover:text-red-500 cursor-pointer hover:scale-[1.1]'
                        onClick={() => {deleteForm(form._id)}}
                        />
                      }
                    </div>
                </tr>
              ))}
              </div>
              :
              <div>

              </div>)}
        </div>
      </table>
      </div>
    </div>
  );
};

export default FormTable;
