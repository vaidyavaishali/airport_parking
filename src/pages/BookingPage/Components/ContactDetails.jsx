import React from "react";

const ContactDetails = ({ formData, setFormData, handleContactChange }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
    };

    return (
        <div className="flex justify-center items-center w-full my-6 font-serif">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 space-y-6 w-[95%] mx-auto shadow-md rounded-lg"
            >
                <h3 className="text-2xl font-bold text-center text-orange-600 mb-4">
                    Contact Details
                </h3>

                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                        <label
                            htmlFor="title"
                            className="text-gray-700 font-semibold mb-1 text-left"
                        >
                            Title*
                        </label>
                        <select
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="px-4 py-2 border rounded-md text-left focus:outline-none focus:ring-2 focus:ring-orange-500"
                        >
                            <option value="" disabled>
                                Select Title
                            </option>
                            <option value="Mr">Mr</option>
                            <option value="Ms">Ms</option>
                            <option value="Mrs">Mrs</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label
                            htmlFor="firstName"
                            className="text-gray-700 text-left font-semibold mb-1"
                        >
                            First Name*
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                        <label
                            htmlFor="lastName"
                            className="text-gray-700 text-left font-semibold mb-1"
                        >
                            Last Name*
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label
                            htmlFor="email"
                            className="text-gray-700 text-left font-semibold mb-1"
                        >
                            Email Address*
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                        <label
                            htmlFor="mobileNo"
                            className="text-gray-700 text-left font-semibold mb-1"
                        >
                            Mobile Number*
                        </label>
                        <input
                            type="text"
                            id="mobileNo"
                            name="mobileNo"
                            value={formData.mobileNo}
                            onChange={handleChange}
                            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label
                            htmlFor="people"
                            className="text-gray-700 text-left font-semibold mb-1"
                        >
                            Number of People*
                        </label>
                        <select
                            id="people"
                            name="people"
                            value={formData.people}
                            onChange={handleChange}
                            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </div>
                </div>

              
            </form>
        </div>
    );
};

export default ContactDetails;
