import mongoose from 'mongoose';

const FormSchema = new mongoose.Schema({
    doctorName: {
        type: String,
        required: true
    },
    patientName: {
        type: String,
        required: true
    },
    patientAge: {
        type: Number,
        required: true
    },
    recordingDate: {
        type: Date,
        required: true
    },
    soundFile: {
        type: String, // You can store the link of file
        required: true
    }
});

const Form = mongoose.model("Form", FormSchema);
export default Form;