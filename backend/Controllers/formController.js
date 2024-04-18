import dotenv from "dotenv";
dotenv.config({ path: "config/.env" });

import Form from "../Models/form.js";

//get all forms
const getAllForms = async (req, res) => {
    try {
        const forms = await Form.find();
        res.status(200).json(forms);
    }
    catch (err) {
        res.status(500).json({ msg: err.message });
    }
};

//delete form
const deleteForm = async (req, res) => {
    try {
        const id = req.params.id;

        await Form.findByIdAndDelete(id);
        res.status(200).json({msg : "deleted successfully."});
    }
    catch (err) {
        res.status(500).json({ msg: err.message });
    }
};

//new form 
const createForm = async (req, res) => {
    try {
        const { doctorName, patientName, patientAge, recordingDate, fileData } = req.body;

        const newFormData = await Form.create({
            doctorName,
            patientName,
            patientAge,
            recordingDate,
            soundFile: fileData
        });

        res.status(200).json({ msg: "Form data created successfully" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export { createForm, getAllForms, deleteForm }