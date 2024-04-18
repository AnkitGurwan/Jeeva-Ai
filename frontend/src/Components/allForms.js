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
    <div className='mt-8 mb-4 mx-[2%] md:mx-[5%] p-5 shadow-md rounded-lg border text-[0.9rem]' style={{fontFamily: "Monospace"}}>
      <h2 className='mb-4 p-2 rounded-sm text-gray-600 bg-gray-200 w-fit'>Sound Recording Data</h2>
      <table className='w-full'>
        <thead className='w-full'>
          <tr className='w-full flex justify-between text-gray-600' >
            <th className='border p-2 w-[5%]'>S.No</th>
            <th className='border p-2 w-[15%]'>Doctor Name</th>
            <th className='border p-2 w-[15%]'>Patient Name</th>
            <th className='border p-2 w-[10%]'>Patient Age</th>
            <th className='border p-2 w-[15%]'>Recording Date</th>
            <th className='border p-2 w-[30%]'>Audio</th>
            <th className='border p-2 w-[10%]'>Remove</th>
          </tr>
        </thead>
        <div className='w-full'>
          {allForms && 
          (allForms.length > 0
            ?
            <div>
              {allForms.map((form,index) => (
                <tr key={form._id} className='w-full flex justify-between items-center h-12 text-gray-600 font-Manrope'>
                  <div className='border w-[5%] flex items-center justify-center capitalize h-full'>{index + 1}</div>
                  <div className='border w-[15%] flex justify-center items-center capitalize h-full'>{form.doctorName}</div>
                  <div className='border w-[15%] flex items-center justify-center capitalize h-full'>{form.patientName}</div>
                  <div className='border w-[10%] flex items-center justify-center h-full'>{form.patientAge}</div>
                  <div className='border w-[15%] flex items-center justify-center h-full'>{new Date(form.recordingDate).toLocaleDateString()}</div>
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
  );
};

export default FormTable;
