import mongoose from "mongoose";

// Suggested code may be subject to a license. Learn more: ~LicenseLog:3086136492.
const medicalRecordSchema = new mongoose.Schema(
    {

    },
    { timestamps: true }
);

export const MedicalRecord = mongoose.model("MedicalRecord", medicalRecordSchema);

