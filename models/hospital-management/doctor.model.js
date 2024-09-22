import mongoose from "mongoose";

// Suggested code may be subject to a license. Learn more: ~LicenseLog:3086136492.
const doctorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        salary: {
            type: Number,
            required: true
        },
        qualification: {
            type: String,
            required: true
        },
        specialization: {
            type: String,
            required: true
        },
        contactNumber: {
            type: String,
            required: true
        },
        worksInHospital: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Hospital",
                required: true
            }
        ]
    },
    { timestamps: true }
);

export const Doctor = mongoose.model("Doctor", doctorSchema);

