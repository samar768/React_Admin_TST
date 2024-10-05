import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dropdown = ({ label, lookupCode, onSelect }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        // Fetch the data from the JSON file
        const fetchData = async () => {
            try {
                const response = await axios.get('/static/dropdownData.json');
                const data = response.data;

                // Set items based on the lookupCode prop
                if (data[lookupCode]) {
                    setItems(data[lookupCode]);
                } else {
                    console.error(`No data found for lookupCode: ${lookupCode}`);
                }
            } catch (error) {
                console.error('Error fetching dropdown data:', error);
            }
        };

        fetchData();
    }, [lookupCode]);

    // Handle the change event when selecting an option
    const handleChange = (event) => {
        const selectedItem = items.find(item => item.value === event.target.value);
        if (selectedItem) {
            onSelect(selectedItem);
        }
    };

    return (
        <div className="form-group">
            <label htmlFor="dropdown">{ label }</label>
            <select className="form-control" id="dropdown" onChange={ handleChange }>
                <option value="">-- Select an option --</option>
                { items.length > 0 ? (
                    items.map((item, index) => (
                        <option key={ index } value={ item.value }>
                            { item.label }
                        </option>
                    ))
                ) : (
                    <option disabled>No items available</option>
                ) }
            </select>
        </div>
    );
};

export default Dropdown;
