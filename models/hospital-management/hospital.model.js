import mongoose from "mongoose";

// Suggested code may be subject to a license. Learn more: ~LicenseLog:3086136492.
const hospitalSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        zipCode: {
            type: String,
            required: true
        },
        contactNumber: {
            type: String,
            required: true
        },
        specialization: [
            {
                type: String,
                required: true
            }
        ]
        
    },
    { timestamps: true }
);

export const Hospital = mongoose.model("Hospital", hospitalSchema);

