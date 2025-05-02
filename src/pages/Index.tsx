// ProfileCard.jsx
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaGift, FaLinkedin, FaGithub } from 'react-icons/fa';

const ProfileCard = () => {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg text-center mt-10">
      <img
        src="/path/to/avatar.jpg"
        alt="profile"
        className="w-32 h-32 mx-auto rounded-full border-4 border-blue-500 shadow-md hover:scale-105 transition"
      />
      <h2 className="text-2xl font-bold mt-4">بالعربي سيدأحمد</h2>
      <p className="text-gray-500 mt-1">مهندس تقنية معلومات | مطور برمجيات</p>

      <div className="mt-4 text-right space-y-2">
        <p className="flex items-center gap-2 text-blue-500"><FaEnvelope /> belsidahmed8@gmail.com</p>
        <p className="flex items-center gap-2 text-green-600"><FaPhoneAlt /> +213657981739</p>
        <p className="flex items-center gap-2 text-red-500"><FaMapMarkerAlt /> Tlemcen, Algerie</p>
        <p className="flex items-center gap-2 text-purple-600"><FaGift /> مطور برمجيات</p>
      </div>

      <div className="flex justify-center gap-4 mt-4">
        <a href="https://linkedin.com" target="_blank" rel="noopener" className="text-blue-600 hover:scale-110 transition">
          <FaLinkedin size={24} />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener" className="text-gray-800 hover:scale-110 transition">
          <FaGithub size={24} />
        </a>
      </div>

      <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition">
        تحميل السيرة الذاتية
      </button>
    </div>
  );
};

export default ProfileCard;
