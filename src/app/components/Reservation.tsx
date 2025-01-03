"use client";

const ReservationForm = () => {
    return (
        <div className="flex justify-center items-center min-h-24 bg-gradient-to-r from-pink-500 to grey-700 p-6">
            <div className="bg-cyan-800 p-6 rounded-lg shadow-lg max-w-lg w-full">
                <h2 className="text-white text-2xl font-bold text-center mb-6">Make A Reservation</h2>
                <form className="space-y-4">
                    {/* Name Input */}
                    <div>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-3 text-black bg-white rounded-lg shadow-inner focus:ring-2 focus:ring-yellow-400 outline-none"
                        />
                    </div>
                    {/* Email Input */}
                    <div>
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full p-3 text-black bg-white rounded-lg shadow-inner focus:ring-2 focus:ring-yellow-400 outline-none"
                        />
                    </div>
                    {/* Date Picker Input */}
                    <div>
                        <input
                            type="date"
                            className="w-full p-3 text-black bg-white rounded-lg shadow-inner focus:ring-2 focus:ring-yellow-400 outline-none"
                        />
                    </div>
                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-lg shadow-md hover:bg-blue-800 transition duration-300 ease-in-out"
                        >
                            Reserved Table
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ReservationForm;
