// User data
export const userData = [{
  id: '1',
  name: 'John Smith',
  email: 'john.smith@example.com',
  role: 'Admin',
  status: 'Active',
  lastLogin: '2023-06-15'
}, {
  id: '2',
  name: 'Sarah Johnson',
  email: 'sarah.j@example.com',
  role: 'Editor',
  status: 'Active',
  lastLogin: '2023-06-14'
}, {
  id: '3',
  name: 'Michael Brown',
  email: 'm.brown@example.com',
  role: 'Viewer',
  status: 'Inactive',
  lastLogin: '2023-05-20'
}, {
  id: '4',
  name: 'Jessica Lee',
  email: 'jessica@example.com',
  role: 'Editor',
  status: 'Active',
  lastLogin: '2023-06-13'
}, {
  id: '5',
  name: 'David Wilson',
  email: 'd.wilson@example.com',
  role: 'Admin',
  status: 'Active',
  lastLogin: '2023-06-15'
}];
// Columns for user table
export const userColumns = [{
  key: 'name',
  label: 'Name',
  primary: true
}, {
  key: 'email',
  label: 'Email'
}, {
  key: 'role',
  label: 'Role'
}, {
  key: 'status',
  label: 'Status'
}, {
  key: 'lastLogin',
  label: 'Last Login'
}];
// Content data
export const contentData = [{
  id: '1',
  title: 'Homepage Banner',
  type: 'Banner',
  status: 'Published',
  author: 'John Smith',
  lastModified: '2023-06-14'
}, {
  id: '2',
  title: 'About Us Page',
  type: 'Page',
  status: 'Draft',
  author: 'Sarah Johnson',
  lastModified: '2023-06-13'
}, {
  id: '3',
  title: 'Summer Promotion',
  type: 'Campaign',
  status: 'Published',
  author: 'Michael Brown',
  lastModified: '2023-06-10'
}, {
  id: '4',
  title: 'Product Catalog',
  type: 'Page',
  status: 'Published',
  author: 'Jessica Lee',
  lastModified: '2023-06-08'
}, {
  id: '5',
  title: 'Newsletter Template',
  type: 'Email',
  status: 'Draft',
  author: 'David Wilson',
  lastModified: '2023-06-12'
}];
// Columns for content table
export const contentColumns = [{
  key: 'title',
  label: 'Title',
  primary: true
}, {
  key: 'type',
  label: 'Type'
}, {
  key: 'status',
  label: 'Status'
}, {
  key: 'author',
  label: 'Author'
}, {
  key: 'lastModified',
  label: 'Last Modified'
}];
// Analytics data
export const analyticsData = [{
  id: '1',
  metric: 'Page Views',
  value: '125,430',
  change: '+5.2%',
  period: 'Last 30 days'
}, {
  id: '2',
  metric: 'Unique Visitors',
  value: '45,872',
  change: '+3.8%',
  period: 'Last 30 days'
}, {
  id: '3',
  metric: 'Conversion Rate',
  value: '3.2%',
  change: '+0.5%',
  period: 'Last 30 days'
}, {
  id: '4',
  metric: 'Avg. Session Duration',
  value: '2m 45s',
  change: '-0.3%',
  period: 'Last 30 days'
}, {
  id: '5',
  metric: 'Bounce Rate',
  value: '42.1%',
  change: '-1.5%',
  period: 'Last 30 days'
}];
// Columns for analytics table
export const analyticsColumns = [{
  key: 'metric',
  label: 'Metric',
  primary: true
}, {
  key: 'value',
  label: 'Value'
}, {
  key: 'change',
  label: 'Change'
}, {
  key: 'period',
  label: 'Period'
}];
// Settings data
export const settingsData = [{
  id: '1',
  setting: 'Email Notifications',
  value: 'Enabled',
  lastUpdated: '2023-06-10',
  updatedBy: 'John Smith'
}, {
  id: '2',
  setting: 'Two-Factor Authentication',
  value: 'Required',
  lastUpdated: '2023-06-05',
  updatedBy: 'David Wilson'
}, {
  id: '3',
  setting: 'API Access',
  value: 'Limited',
  lastUpdated: '2023-05-28',
  updatedBy: 'Sarah Johnson'
}, {
  id: '4',
  setting: 'Data Retention',
  value: '90 days',
  lastUpdated: '2023-06-01',
  updatedBy: 'Michael Brown'
}, {
  id: '5',
  setting: 'User Registration',
  value: 'Approval Required',
  lastUpdated: '2023-06-12',
  updatedBy: 'Jessica Lee'
}];
// Columns for settings table
export const settingsColumns = [{
  key: 'setting',
  label: 'Setting',
  primary: true
}, {
  key: 'value',
  label: 'Value'
}, {
  key: 'lastUpdated',
  label: 'Last Updated'
}, {
  key: 'updatedBy',
  label: 'Updated By'
}];
// Tab sections data
export const dashboardTabs = [{
  id: '1',
  title: 'Overview',
  completion: 100,
  mandatoryCompletion: {
    percentage: 100
  }
}, {
  id: '2',
  title: 'Recent Activity',
  completion: 100,
  mandatoryCompletion: {
    percentage: 100
  }
}, {
  id: '3',
  title: 'Notifications',
  completion: 100,
  mandatoryCompletion: {
    percentage: 100
  }
}];
export const usersTabs = [{
  id: '1',
  title: 'All Users',
  completion: 100,
  mandatoryCompletion: {
    percentage: 100
  }
}, {
  id: '2',
  title: 'Admins',
  completion: 100,
  mandatoryCompletion: {
    percentage: 100
  }
}, {
  id: '3',
  title: 'Pending Approvals',
  completion: 75,
  mandatoryCompletion: {
    percentage: 50
  }
}];
export const contentTabs = [{
  id: '1',
  title: 'All Content',
  completion: 100,
  mandatoryCompletion: {
    percentage: 100
  }
}, {
  id: '2',
  title: 'Published',
  completion: 100,
  mandatoryCompletion: {
    percentage: 100
  }
}, {
  id: '3',
  title: 'Drafts',
  completion: 85,
  mandatoryCompletion: {
    percentage: 70
  }
}, {
  id: '4',
  title: 'Archived',
  completion: 100,
  mandatoryCompletion: {
    percentage: 100
  }
}];
export const analyticsTabs = [{
  id: '1',
  title: 'Traffic Overview',
  completion: 100,
  mandatoryCompletion: {
    percentage: 100
  }
}, {
  id: '2',
  title: 'User Engagement',
  completion: 90,
  mandatoryCompletion: {
    percentage: 80
  }
}, {
  id: '3',
  title: 'Conversion Metrics',
  completion: 85,
  mandatoryCompletion: {
    percentage: 70
  }
}];
export const settingsTabs = [{
  id: '1',
  title: 'General',
  completion: 100,
  mandatoryCompletion: {
    percentage: 100
  }
}, {
  id: '2',
  title: 'Security',
  completion: 90,
  mandatoryCompletion: {
    percentage: 85
  }
}, {
  id: '3',
  title: 'Integrations',
  completion: 70,
  mandatoryCompletion: {
    percentage: 50
  }
}, {
  id: '4',
  title: 'Notifications',
  completion: 80,
  mandatoryCompletion: {
    percentage: 75
  }
}];
// Company data for sidebar
export const companies = [{
  id: '1',
  name: 'Main Organization',
  role: 'Admin',
  isActive: true,
  badge: 'Primary'
}, {
  id: '2',
  name: 'Partner Company',
  role: 'Editor',
  badge: 'Secondary'
}, {
  id: '3',
  name: 'Client Organization',
  role: 'Viewer',
  badge: ''
}];