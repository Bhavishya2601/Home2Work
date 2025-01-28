import React, { useState } from "react";
import axios from "axios";

const Upload = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!file) {
            alert("Please select an image."); // More user-friendly alert
            return;
        }

        const formData = new FormData();
        formData.append("image", file); // Ensure key matches server-side

        try {
            const response = await axios.post("http://127.0.0.1:5000/generate_recommendations", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            alert("File uploaded successfully! Recommendations: " + response.data.recommendations); 
            // Display recommendations to the user

        } catch (error) {
            console.error("Error uploading file:", error);
            alert("An error occurred while uploading the image.");
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-lg">
                <h1 className="text-3xl font-bold text-teal-600 mb-6 text-center">
                    Upload Details
                </h1>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                            Upload File
                        </label>
                        <input
                            type="file"
                            className="w-full px-4 py-3 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none"
                            onChange={handleFileChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-teal-600 text-white py-3 px-6 rounded-lg font-medium text-lg hover:bg-teal-700 transition-all"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Upload;
