import { useState } from 'react';
import { JobFilters } from '@/components/jobs/JobFilters';
import { JobCard } from '@/components/jobs/JobCard';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/Button';

const ITEMS_PER_PAGE = 10;

export function JobBoard() {
  const { user, signOut } = useAuth();
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({});

  // TODO: Replace with actual data from Supabase
  const jobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'Tech Corp',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary_min: 120000,
      salary_max: 180000,
      experience: 'Senior Level',
      description: 'We are looking for a Senior Frontend Developer to join our team...',
    },
    // Add more mock jobs here
  ];

  const totalPages = Math.ceil(jobs.length / ITEMS_PER_PAGE);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Job Board</h1>
        {user ? (
          <div className="flex items-center gap-4">
            <span className="text-gray-600">{user.email}</span>
            <Button variant="outline" onClick={signOut}>
              Sign Out
            </Button>
          </div>
        ) : (
          <Button onClick={() => window.location.href = '/auth'}>
            Sign In
          </Button>
        )}
      </div>

      <JobFilters onFiltersChange={setFilters} />

      <div className="grid gap-6">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-8 flex justify-center gap-2">
          <Button
            variant="outline"
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <span className="flex items-center px-4">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            variant="outline"
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
}