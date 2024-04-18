import React, { useState } from "react";
import FormContext from "./FormContext";

const FormState = ( props ) => {
    
    const [allForms, setAllForms] = useState([]);
    const url = process.env.REACT_APP_BACKEND_URL;

    const getAllForms = async () => {
        const response = await fetch(`${url}/form/getAllForms`, {
            method: 'GET',
            headers: {
                'Content-Type': "application/json"
            }
        });
        const json = await response.json();
        
        setAllForms(json);
        return json;
    };

    const deleteFormDatabase = async (id) => {
        const response = await fetch(`${url}/form/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': "application/json"
            }
        });
        
        return response.status;
    };

    const uploadFormDatabase = async (doctorName, patientName, patientAge, recordingDate, fileData) => {console.log(22)
        const response = await fetch(`${url}/form/createForm`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ doctorName, patientName, patientAge, recordingDate, fileData })
        });
        console.log(response)
        
        return response.status;
    };

    return (
        <FormContext.Provider value={{ getAllForms, uploadFormDatabase, allForms, deleteFormDatabase }}>
            {props.children}
        </FormContext.Provider>
    )
}

export default FormState;