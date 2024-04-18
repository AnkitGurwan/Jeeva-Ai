import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import fire from '../config/firebase';
import FormContext from '../Context/FormContext';
import ClipLoader from "react-spinners/ClipLoader";

const HomeComponent = () => {

    //context apis
    const { uploadFormDatabase, getAllForms } = useContext(FormContext);

    //defined states
    const [formData, setFormData] = useState({
        doctorName: '',
        patientName: '',
        patientAge: '',
        recordingDate: '',
        soundFile: null
    });
    const [loading, setLoading] = useState(false);

    //handler state changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };


    //specifically handle file upload
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFormData({ ...formData, soundFile: file });
    };

    //submit handler
    const handleSubmit = (e) => {
        e.preventDefault();

        if(formData.soundFile === "")
        {
            toast.error("No audio file Selected", {
                position: 'top-center'
            });
            return;
        }
        
        setLoading(true);
        
        const uploadFileRef = fire.storage().ref(`uploads/jeeva/${ formData.soundFile.name}`);
        
        uploadFileRef.put(formData.soundFile).on("state_changed", (snapshot) => {
            const progress = Math.round(
            (snapshot.bytesTransferred/ snapshot.totalBytes) * 100
            );
        },
        (error)=>{
            console.log(error)
        },
            async () => {
                const fileData = await uploadFileRef.getDownloadURL();
                
                const x = await uploadFormDatabase(formData.doctorName, formData.patientName, formData.patientAge, formData.recordingDate, fileData);

                if(x === 200)
                {
                    setLoading(false);
                    setFormData({
                        doctorName: '',
                        patientName: '',
                        patientAge: '',
                        recordingDate: '',
                        soundFile: null
                    });
                    await getAllForms();
                    toast.success("Information added Successfully", {
                        position: 'top-center'
                    });
                }
                else
                {
                    toast.error("Couldn't upload at the moment.", {
                        position: 'top-center'
                    });
                }
                setLoading(false);
        });
    };


    return (
        <div className="max-w-md mx-auto my-6 p-5 bg-gray-100 shadow-md rounded-md">
            <h2 className="text-lg font-semibold mb-4">Sound Recording Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-2">
                    <div className="text-sm mb-1">Doctor's Name:</div>
                    <input
                        type="text"
                        id="doctorName"
                        name="doctorName"
                        value={formData.doctorName}
                        onChange={handleChange}
                        className="w-full capitalize mt-1 px-3 py-1 border border-gray-300 rounded-md outline-none text-gray-600"
                        required
                        autoFocus
                    />
                </div>
                <div className="mb-2">
                    <div className="text-sm mb-1">Patient's Name:</div>
                    <input
                        type="text"
                        id="patientName"
                        name="patientName"
                        value={formData.patientName}
                        onChange={handleChange}
                        className="w-full capitalize mt-1 px-3 py-1 border border-gray-300 rounded-md outline-none text-gray-600"
                        required
                    />
                </div>
                <div className="mb-2">
                    <div className="text-sm mb-1">Patient's Age:</div>
                    <input
                        type="number"
                        id="patientAge"
                        name="patientAge"
                        value={formData.patientAge}
                        onChange={handleChange}
                        className="w-full mt-1 px-3 py-1 border border-gray-300 rounded-md outline-none text-gray-600"
                        min="0"
                        required
                    />
                </div>
                <div className="mb-2">
                    <div className="mb-1 text-sm">Recording Date:</div>
                    <input
                        type="date"
                        id="recordingDate"
                        name="recordingDate"
                        value={formData.recordingDate}
                        onChange={handleChange}
                        className="w-full mt-1 px-3 py-1 border border-gray-300 rounded-md outline-none text-gray-600"
                        required
                    />
                </div>
                <div className="mb-4">
                    <div className="text-sm mb-1">Upload Sound File:</div>
                    <input
                        type="file"
                        id="formData.soundFile"
                        name="formData.soundFile"
                        accept="audio/*"
                        onChange={handleFileChange}
                        className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md outline-none text-gray-600"
                        required
                    />
                </div>
                {loading
                ?
                <div className='w-full px-3 h-10 rounded-md text-lg font-semibold flex justify-center items-center bg-blue-500 text-white shadow-[0_4px_9px_-4px_#3b71ca]'>
                    <ClipLoader 
                        color="white"
                        size={25}
                    />
                    <div className='pl-2'>Saving...</div>
                </div>
                :
                <button type="submit" className="w-full h-10 text-lg font-semibold bg-blue-500 text-white px-4 rounded-md hover:bg-blue-600">Submit</button>
                }
            </form>
        </div>
  );
}

export default HomeComponent;
