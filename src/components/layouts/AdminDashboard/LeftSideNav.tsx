import { Link } from 'react-router-dom';
import Title from '../../typography/Title';
import {
  HomeIcon,
  Bars3Icon,
  BookOpenIcon,
  PowerIcon,
} from '@heroicons/react/24/outline';

const LeftSideNav = () => {
  return (
    <div className="w-52 h-screen bg-white">
      <Title title="Admin Dashboard" className="p-4" style="SectionTitle" />
      <Link className="dashboard-left-nav-link" to="/admin-dashboard">
        <Bars3Icon className="w-6 h-6" />
        Dashboard
      </Link>
      <Link className="dashboard-left-nav-link" to="/admin-dashboard/reports">
        <BookOpenIcon className="w-6 h-6" />
        Reports
      </Link>
      <Link className="dashboard-left-nav-link" to="/">
        <HomeIcon className="w-6 h-6" />
        Landing Page
      </Link>
      <Link
        to="void(0)"
        className="dashboard-left-nav-link !ml-0"
        onClick={() => {
          localStorage.removeItem('token');
          window.location.reload();
        }}
      >
        <PowerIcon className="w-6 h-6" />
        Logout
      </Link>
    </div>
  );
};

export default LeftSideNav;
