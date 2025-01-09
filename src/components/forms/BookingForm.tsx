import { motion } from "framer-motion";

interface BookingFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingForm = ({ isOpen, onClose }: BookingFormProps) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl sm:p-4 md:p-6 lg:p-8"
      >
        <h2 className="text-2xl font-serif mb-4 sm:text-lg md:text-xl lg:text-2xl">
          Booking Now
        </h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">First Name</label>
            <input
              type="text"
              className="border rounded-md w-full p-2 sm:p-1 md:p-2 lg:p-3"
              placeholder="Enter your first name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Last Name</label>
            <input
              type="text"
              className="border rounded-md w-full p-2 sm:p-1 md:p-2 lg:p-3"
              placeholder="Enter your last name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              className="border rounded-md w-full p-2 sm:p-1 md:p-2 lg:p-3"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              className="border rounded-md w-full p-2 sm:p-1 md:p-2 lg:p-3"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Address</label>
            <textarea
              className="border rounded-md w-full p-2 sm:p-1 md:p-2 lg:p-3"
              rows={4}
              placeholder="Enter your address"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Wedding Date
            </label>
            <input
              type="date"
              className="border rounded-md w-full p-2 sm:p-1 md:p-2 lg:p-3"
              placeholder="Enter your wedding date"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Number of Guests
            </label>
            <input
              type="number"
              className="border rounded-md w-full p-2 sm:p-1 md:p-2 lg:p-3"
              placeholder="Enter the number of guests"
            />
          </div>
          <div className="flex flex-wrap justify-center sm:justify-start md:justify-center lg:justify-center xl:justify-center">
            <button
              type="submit"
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300 mb-2 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0"
            >
              Submit
            </button>
            <button
              type="button"
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-300 sm:ml-2 md:ml-2 lg:ml-2 xl:ml-2"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default BookingForm;
