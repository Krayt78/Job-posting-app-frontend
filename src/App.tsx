import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthForm } from '@/components/auth/AuthForm';
import { JobBoard } from '@/pages/JobBoard';
import { AuthProvider } from '@/contexts/AuthContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen bg-gray-100">
          <Routes>
            <Route path="/auth" element={<AuthForm />} />
            <Route path="/" element={<JobBoard />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;