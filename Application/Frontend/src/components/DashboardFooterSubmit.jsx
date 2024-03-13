import React, { useState } from 'react';

function DashboardFooterSubmit() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const token = localStorage.getItem('REACT_TOKEN_AUTH_KEY');

    const handleSubmit = async () => {
        try {
            setLoading(true);
            const response = await fetch('http://127.0.0.1:5000/APIs/prompts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${JSON.parse(token)}`
                    // Add any additional headers here
                },
                // Add any data to be sent in the body of the request here
                body: JSON.stringify({}),
            });
            if (!response.ok) {
                throw new Error('Failed to submit data');
            }
            // Handle successful response
            setLoading(false);
            alert('Data submitted successfully');
        } catch (error) {
            // setError(error.message);
            setLoading(false);
            alert('Error: ' + error.message);
        }
    };

    return (
        <div className="Footer">
            <div className="Container-actions">
                <button className='Btn-check-plag'>Check Plag</button>
                <button className='Btn-submit' onClick={handleSubmit} disabled={loading}>
                    {loading ? 'Submitting...' : 'Submit'}
                </button>
                {/* {error && <div>Error: {error}</div>} */}
            </div>
        </div>
    );
}

export default DashboardFooterSubmit;
