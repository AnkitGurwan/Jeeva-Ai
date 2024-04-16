import React, { useState } from 'react';

const HomeComponent = () => {
    const [formData, setFormData] = useState({
        doctorName: '',
        patientName: '',
        patientAge: '',
        recordingDate: '',
        soundFile: null
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFormData({ ...formData, soundFile: file });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setFormData({
        doctorName: '',
        patientName: '',
        patientAge: '',
        recordingDate: '',
        soundFile: null
        });
    };

    return (
        <div className="max-w-md mx-auto my-8 p-4 bg-gray-100 shadow-md rounded-md">
            <h2 className="text-xl font-semibold mb-4">Sound Recording Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-2">
                <label htmlFor="doctorName" className="mb-1">Doctor's Name:</label>
                <input
                    type="text"
                    id="doctorName"
                    name="doctorName"
                    value={formData.doctorName}
                    onChange={handleChange}
                    className="w-full capitalize mt-1 px-3 py-2 border border-gray-300 rounded-md outline-none text-gray-600"
                    required
                    autoFocus
                />
                </div>
                <div className="mb-2">
                <label htmlFor="patientName" className="mb-1">Patient's Name:</label>
                <input
                    type="text"
                    id="patientName"
                    name="patientName"
                    value={formData.patientName}
                    onChange={handleChange}
                    className="w-full capitalize mt-1 px-3 py-2 border border-gray-300 rounded-md outline-none text-gray-600"
                    required
                />
                </div>
                <div className="mb-2">
                <label htmlFor="patientAge" className="mb-1">Patient's Age:</label>
                <input
                    type="number"
                    id="patientAge"
                    name="patientAge"
                    value={formData.patientAge}
                    onChange={handleChange}
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md outline-none text-gray-600"
                    required
                />
                </div>
                <div className="mb-2">
                <label htmlFor="recordingDate" className="mb-1">Recording Date:</label>
                <input
                    type="date"
                    id="recordingDate"
                    name="recordingDate"
                    value={formData.recordingDate}
                    onChange={handleChange}
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md outline-none text-gray-600"
                    required
                />
                </div>
                <div className="mb-4">
                <label htmlFor="soundFile" className="mb-1">Upload Sound File:</label>
                <input
                    type="file"
                    id="soundFile"
                    name="soundFile"
                    accept="audio/*"
                    onChange={handleFileChange}
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md outline-none text-gray-600"
                    required
                />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>
            </form>
        </div>
  );
}

export default HomeComponent;
