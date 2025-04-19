// src/routers/AdminDashboardRouter.tsx
import AdminDashboardLayout from '../components/layouts/AdminDashboard/AdminDashboardLayout';
import DashboardPage from '../pages/AdminDashboard/DashboardPage';
import ReportsPage from '../pages/AdminDashboard/ReportsPage';

const adminDashboardRoutes = {
  path: '/admin-dashboard',
  element: <AdminDashboardLayout />, 
  children: [
    {
      index: true,
      element: <DashboardPage />, 
    },
    {
      path: 'reports',
      element: <ReportsPage />, 
    },
  ],
};

// Export the configuration object
export default adminDashboardRoutes;