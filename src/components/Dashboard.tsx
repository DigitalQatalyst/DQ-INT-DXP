import React from 'react';
export const Dashboard: React.FC = () => {
  return <div className="p-6 bg-[#F8FAFC] min-h-screen">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">
          Welcome to the Processing Center. View your overview and recent
          activities.
        </p>
      </div>
      {/* Dashboard Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Quick Stats Cards */}
        <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Total Listings
          </h3>
          <p className="text-3xl font-bold text-gray-800">247</p>
          <p className="text-sm text-gray-500 mt-2">+12% from last month</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Approval Rate
          </h3>
          <p className="text-3xl font-bold text-gray-800">82%</p>
          <p className="text-sm text-gray-500 mt-2">+3% from last month</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500">
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Active Partners
          </h3>
          <p className="text-3xl font-bold text-gray-800">36</p>
          <p className="text-sm text-gray-500 mt-2">+4 new this month</p>
        </div>
      </div>
      {/* Recent Activity Section */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Recent Activity
        </h3>
        <div className="space-y-4">
          <div className="flex items-start p-3 hover:bg-gray-50 rounded-lg">
            <div className="flex-shrink-0 bg-green-100 rounded-full p-2 mr-3">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">
                Jessica Lee approved "Professional Photography Services"
              </p>
              <p className="text-xs text-gray-500">Today at 10:45 AM</p>
            </div>
          </div>
          <div className="flex items-start p-3 hover:bg-gray-50 rounded-lg">
            <div className="flex-shrink-0 bg-blue-100 rounded-full p-2 mr-3">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">
                Michael Brown commented on "Tech Startup Conference 2023"
              </p>
              <p className="text-xs text-gray-500">Yesterday at 2:20 PM</p>
            </div>
          </div>
          <div className="flex items-start p-3 hover:bg-gray-50 rounded-lg">
            <div className="flex-shrink-0 bg-red-100 rounded-full p-2 mr-3">
              <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">
                John Smith rejected "Comprehensive Business Plan Template"
              </p>
              <p className="text-xs text-gray-500">Yesterday at 11:30 AM</p>
            </div>
          </div>
          <div className="flex items-start p-3 hover:bg-gray-50 rounded-lg">
            <div className="flex-shrink-0 bg-amber-100 rounded-full p-2 mr-3">
              <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">
                Sarah Johnson sent back "Wellness Retreat Weekend" for revisions
              </p>
              <p className="text-xs text-gray-500">June 10, 2023</p>
            </div>
          </div>
        </div>
        <div className="mt-4 text-center">
          <button className="text-sm font-medium text-blue-600 hover:text-blue-800">
            View All Activity
          </button>
        </div>
      </div>
      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
                View Pending Approvals
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
                Manage Partner Accounts
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
                Generate Reports
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
                System Settings
              </a>
            </li>
          </ul>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 md:col-span-2">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Approval Stats
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-medium text-gray-500">
                Approval Time (Avg)
              </h4>
              <p className="text-2xl font-bold text-gray-800">1.2 days</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500">
                Rejection Rate
              </h4>
              <p className="text-2xl font-bold text-gray-800">18%</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500">
                Revisions Requested
              </h4>
              <p className="text-2xl font-bold text-gray-800">27%</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500">
                First-time Approvals
              </h4>
              <p className="text-2xl font-bold text-gray-800">55%</p>
            </div>
          </div>
        </div>
      </div>
    </div>;
};