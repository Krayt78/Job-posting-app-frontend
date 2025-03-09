import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Search, Filter } from 'lucide-react';

interface FiltersState {
  search: string;
  location: string;
  type: string;
  experience: string;
  salaryMin: string;
  salaryMax: string;
}

interface JobFiltersProps {
  onFiltersChange: (filters: FiltersState) => void;
}

export function JobFilters({ onFiltersChange }: JobFiltersProps) {
  const [filters, setFilters] = useState<FiltersState>({
    search: '',
    location: '',
    type: '',
    experience: '',
    salaryMin: '',
    salaryMax: '',
  });

  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const debounceId = setTimeout(() => {
      onFiltersChange(filters);
    }, 300);

    return () => clearTimeout(debounceId);
  }, [filters, onFiltersChange]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Search Jobs</h2>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <Filter className="h-4 w-4 mr-2" />
          Filters
        </Button>
      </div>

      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <Input
            name="search"
            placeholder="Search by title, company, or keywords"
            className="pl-10"
            value={filters.search}
            onChange={handleInputChange}
          />
        </div>

        {isExpanded && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <Input
              name="location"
              placeholder="Location"
              value={filters.location}
              onChange={handleInputChange}
            />
            <select
              name="type"
              className="h-10 rounded-md border border-gray-300 bg-white px-3"
              value={filters.type}
              onChange={handleInputChange}
            >
              <option value="">Job Type</option>
              <option value="full-time">Full Time</option>
              <option value="part-time">Part Time</option>
              <option value="contract">Contract</option>
              <option value="remote">Remote</option>
            </select>
            <select
              name="experience"
              className="h-10 rounded-md border border-gray-300 bg-white px-3"
              value={filters.experience}
              onChange={handleInputChange}
            >
              <option value="">Experience Level</option>
              <option value="entry">Entry Level</option>
              <option value="mid">Mid Level</option>
              <option value="senior">Senior Level</option>
              <option value="lead">Lead</option>
            </select>
            <Input
              name="salaryMin"
              type="number"
              placeholder="Min Salary"
              value={filters.salaryMin}
              onChange={handleInputChange}
            />
            <Input
              name="salaryMax"
              type="number"
              placeholder="Max Salary"
              value={filters.salaryMax}
              onChange={handleInputChange}
            />
          </div>
        )}
      </div>
    </div>
  );
}