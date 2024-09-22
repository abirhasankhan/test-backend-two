import mongoose from "mongoose";

// Suggested code may be subject to a license. Learn more: ~LicenseLog:3086136492.
const patientSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        gender: {
            type: String,
            enum: ["male", "female", "other"],
            required: true
        },
        contactNumber: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        diagonsedWith: {
            type: String,
            required: true
        },
        bloodGroup: {
            type: String,
            enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
            required: true
        },
        admittedIn: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hospital",
            required: true
        }
    },
    { timestamps: true }
);

export const Patient = mongoose.model("Patient", patientSchema);

