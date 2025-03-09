import { formatSalary } from '@/lib/utils';
import { Building2, MapPin, Clock, Briefcase } from 'lucide-react';

interface JobCardProps {
  job: {
    title: string;
    company: string;
    location: string;
    type: string;
    salary_min: number;
    salary_max: number;
    experience: string;
    description: string;
  };
}

export function JobCard({ job }: JobCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
          <div className="mt-2 flex items-center text-gray-600">
            <Building2 className="h-4 w-4 mr-2" />
            <span>{job.company}</span>
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="flex items-center text-gray-600">
          <MapPin className="h-4 w-4 mr-2" />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Clock className="h-4 w-4 mr-2" />
          <span>{job.type}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Briefcase className="h-4 w-4 mr-2" />
          <span>{job.experience}</span>
        </div>
        <div className="text-gray-600">
          {formatSalary(job.salary_min)} - {formatSalary(job.salary_max)}
        </div>
      </div>

      <p className="mt-4 text-gray-600 line-clamp-3">{job.description}</p>

      <div className="mt-6">
        <button className="text-blue-600 hover:text-blue-800 font-medium">
          View Details →
        </button>
      </div>
    </div>
  );
}