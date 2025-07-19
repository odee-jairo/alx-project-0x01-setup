import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ 
  name, 
  username, 
  email, 
  phone, 
  website, 
  company 
}) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600">@{username}</p>
      </div>
      <div className="space-y-4">
        <p className="text-gray-600">Email: {email}</p>
        <p className="text-gray-600">Phone: {phone}</p>
        <p className="text-gray-600">Website: {website}</p>
        <p className="text-gray-600">Company: {company.name}</p>
      </div>
      <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
        <span>Company Slogan: {company.catchPhrase}</span>
      </div>
    </div>
  );
};

export default UserCard;