import React, { useState } from 'react';

const GenderCheck = (onCheckboxChange,selectedGender) => {
    const [selectedGenders, setSelectedGenders] = useState([]);

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;

        if (checked) {
            setSelectedGenders([...selectedGenders, value]);
        } else {
            setSelectedGenders(selectedGenders.filter(gender => gender !== value));
        }

        // Optional: Log the selected genders
        console.log('Selected Genders:', selectedGenders);
    };

    return (
        <div className="flex flex-row gap-3 items-center justify-center p-4 rounded-md">
            <h2 className="text-xl font-semibold">Gender:</h2>
            
            <label className="flex items-center">
                <input
                    type="checkbox"
                    value="Male"
                    checked={selectedGender == "male"}
                    onChange={handleCheckboxChange}
                    className="checkbox checkbox-primary"
                />
                <span className="ml-2">Male</span>
            </label>

            <label className="flex items-center">
                <input
                    type="checkbox"
                    value="Female"
                    checked={selectedGenders.includes('Female')}
                    onChange={handleCheckboxChange}
                    className="checkbox checkbox-primary"
                />
                <span className="ml-2">Female</span>
            </label>
        </div>
    );
};

export default GenderCheck;
