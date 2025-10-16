import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AdminSidebar } from './components/AppSidebar';
import { Dashboard } from './components/Dashboard';
import { UsersSection } from './components/UsersSection';
import { ContentSection } from './components/ContentSection';
import { AnalyticsSection } from './components/AnalyticsSection';
import { SettingsSection } from './components/SettingsSection';
import { ListingApprovalsPage } from './components/ListingApprovalsPage';
import { ServiceApprovalsPage } from './components/ServiceApprovalsPage';
import { AuthProvider } from './components/Header';
import { companies } from './utils/mockData';
import { SearchBar } from './components/SearchBar';
import { NotificationsDropdown } from './components/NotificationsDropdown';
import { UserProfileDropdown } from './components/UserProfileDropdown';
import { QuickActionsMenu } from './components/QuickActionsMenu';
const AppContent = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const mockUser = {
    name: 'Admin User',
    email: 'admin@example.com',
    role: 'Administrator'
  };
  return <div className="flex flex-col min-h-screen bg-gray-100">
      <Header toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen}>
        <div className="flex items-center space-x-4">
          <SearchBar />
          <NotificationsDropdown />
          <UserProfileDropdown user={mockUser} />
        </div>
      </Header>
      <div className="flex flex-1">
        <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} activeSection={activeSection} onSectionChange={setActiveSection} onboardingComplete={true} companies={companies} onCompanyChange={id => console.log('Company changed:', id)} onAddNewEnterprise={() => console.log('Add new enterprise')} isLoggedIn={true} />
        <main className="flex-1 overflow-auto">
          {activeSection === 'dashboard' && <Dashboard />}
          {activeSection === 'users' && <UsersSection />}
          {activeSection === 'content' && <ContentSection />}
          {activeSection === 'analytics' && <AnalyticsSection />}
          {activeSection === 'settings' && <SettingsSection />}
          {activeSection === 'listing-approvals' && <ListingApprovalsPage />}
          {activeSection === 'service-approvals' && <ServiceApprovalsPage />}
          {/* Fallback for other sections */}
          {!['dashboard', 'users', 'content', 'analytics', 'settings', 'listing-approvals', 'service-approvals'].includes(activeSection) && <div className="p-6">
              <h1 className="text-2xl font-bold mb-4">
                Section Under Development
              </h1>
              <p>The {activeSection} section is currently being developed.</p>
            </div>}
        </main>
      </div>
      <Footer isLoggedIn={true} />
      <QuickActionsMenu />
    </div>;
};
export function App() {
  return <AuthProvider>
      <AppContent />
    </AuthProvider>;
}