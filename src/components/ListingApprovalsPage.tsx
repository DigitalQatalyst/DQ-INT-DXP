import React, { useState } from 'react';
import { ClockIcon, CheckCircleIcon, XCircleIcon, StarIcon, SearchIcon, FilterIcon, ChevronDownIcon } from 'lucide-react';
import { EnhancedTableSection } from './EnhancedTableSection';
import { ListingDetailsDrawer } from './ListingDetailsDrawer';
import { ApproveModal } from './ApproveModal';
import { RejectModal } from './RejectModal';
import { SendBackModal } from './SendBackModal';
// Mock data for listings
const initialListings = [{
  id: '1',
  title: 'Advanced Digital Marketing Course',
  type: 'Courses',
  partner: 'SkillShare Academy',
  category: 'Marketing',
  status: 'Pending',
  submittedOn: '2023-06-14 09:30:45',
  description: 'A comprehensive 8-week course covering all aspects of digital marketing including SEO, content marketing, social media, and paid advertising.',
  price: '$499',
  duration: '8 weeks',
  partnerInfo: {
    name: 'SkillShare Academy',
    contact: 'partner@skillshare.example.com',
    previousSubmissions: 12
  },
  comments: [{
    id: '1',
    author: 'Sarah Johnson',
    text: 'Pricing seems high compared to similar courses.',
    timestamp: '2023-06-14 10:15:22'
  }, {
    id: '2',
    author: 'David Wilson',
    text: 'Course outline looks comprehensive and well-structured.',
    timestamp: '2023-06-14 11:30:45'
  }],
  images: ['https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80']
}, {
  id: '2',
  title: 'Professional Photography Services',
  type: 'Services',
  partner: 'CapturePro Studios',
  category: 'Photography',
  status: 'Approved',
  submittedOn: '2023-06-13 14:22:18',
  description: 'Professional photography services for events, portraits, and commercial projects. Includes editing and digital delivery.',
  price: '$150/hr',
  duration: 'Varies',
  partnerInfo: {
    name: 'CapturePro Studios',
    contact: 'bookings@capturepro.example.com',
    previousSubmissions: 8
  },
  comments: [{
    id: '1',
    author: 'Jessica Lee',
    text: 'Portfolio looks excellent. Approved.',
    timestamp: '2023-06-13 16:45:30'
  }],
  images: ['https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80']
}, {
  id: '3',
  title: 'Tech Startup Conference 2023',
  type: 'Events',
  partner: 'InnovateX',
  category: 'Technology',
  status: 'Pending',
  submittedOn: '2023-06-12 11:05:33',
  description: 'Annual conference for tech startups featuring keynote speakers, workshops, and networking opportunities.',
  price: '$299',
  duration: '2 days',
  partnerInfo: {
    name: 'InnovateX',
    contact: 'events@innovatex.example.com',
    previousSubmissions: 3
  },
  comments: [{
    id: '1',
    author: 'Michael Brown',
    text: 'Need more details about speakers and agenda.',
    timestamp: '2023-06-12 13:20:15'
  }],
  images: ['https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80']
}, {
  id: '4',
  title: 'Comprehensive Business Plan Template',
  type: 'Resources',
  partner: 'BizStrategy Consultants',
  category: 'Business',
  status: 'Rejected',
  submittedOn: '2023-06-11 15:40:22',
  description: 'A detailed business plan template with financial projections, market analysis, and strategy sections.',
  price: '$79',
  duration: 'N/A',
  partnerInfo: {
    name: 'BizStrategy Consultants',
    contact: 'resources@bizstrategy.example.com',
    previousSubmissions: 5
  },
  comments: [{
    id: '1',
    author: 'John Smith',
    text: 'Rejected due to similar resource already available. Too much overlap with existing content.',
    timestamp: '2023-06-11 16:55:10'
  }],
  images: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80']
}, {
  id: '5',
  title: 'Wellness Retreat Weekend',
  type: 'Events',
  partner: 'Serenity Wellness',
  category: 'Health & Wellness',
  status: 'Sent Back',
  submittedOn: '2023-06-10 09:15:40',
  description: 'A weekend retreat focused on mindfulness, yoga, nutrition, and wellness practices.',
  price: '$599',
  duration: '3 days',
  partnerInfo: {
    name: 'Serenity Wellness',
    contact: 'retreats@serenity.example.com',
    previousSubmissions: 2
  },
  comments: [{
    id: '1',
    author: 'Sarah Johnson',
    text: 'Please provide more details about accommodations and meal options.',
    timestamp: '2023-06-10 11:30:25'
  }],
  images: ['https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1220&q=80']
}, {
  id: '6',
  title: 'Mobile App Development Service',
  type: 'Services',
  partner: 'TechNova Solutions',
  category: 'Technology',
  status: 'Pending',
  submittedOn: '2023-06-09 13:45:30',
  description: 'Professional mobile app development services for iOS and Android platforms. Includes design, development, testing, and deployment.',
  price: 'Custom Quote',
  duration: 'Varies',
  partnerInfo: {
    name: 'TechNova Solutions',
    contact: 'projects@technova.example.com',
    previousSubmissions: 7
  },
  comments: [{
    id: '1',
    author: 'David Wilson',
    text: 'Portfolio looks impressive. Waiting for additional verification of past projects.',
    timestamp: '2023-06-09 15:20:10'
  }],
  images: ['https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1101&q=80']
}, {
  id: '7',
  title: 'Financial Planning Workshop',
  type: 'Courses',
  partner: 'Wealth Wisdom',
  category: 'Finance',
  status: 'Approved',
  submittedOn: '2023-06-08 10:10:15',
  description: 'A comprehensive workshop on personal financial planning, investments, retirement strategies, and tax optimization.',
  price: '$199',
  duration: '1 day',
  partnerInfo: {
    name: 'Wealth Wisdom',
    contact: 'workshops@wealthwisdom.example.com',
    previousSubmissions: 4
  },
  comments: [{
    id: '1',
    author: 'Jessica Lee',
    text: 'Well-structured workshop with qualified instructors. Approved.',
    timestamp: '2023-06-08 11:45:30'
  }],
  images: ['https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80']
}, {
  id: '8',
  title: 'Social Media Strategy Guide',
  type: 'Resources',
  partner: 'Digital Marketing Pros',
  category: 'Marketing',
  status: 'Pending',
  submittedOn: '2023-06-07 14:30:20',
  description: 'A comprehensive guide to developing and implementing effective social media strategies for businesses of all sizes.',
  price: '$49',
  duration: 'N/A',
  partnerInfo: {
    name: 'Digital Marketing Pros',
    contact: 'resources@dmpros.example.com',
    previousSubmissions: 9
  },
  comments: [{
    id: '1',
    author: 'Michael Brown',
    text: 'Content looks solid. Checking for any overlap with existing resources.',
    timestamp: '2023-06-07 16:15:40'
  }],
  images: ['https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80']
}];
export const ListingApprovalsPage: React.FC = () => {
  // Use state to manage the listings data
  const [mockListings, setMockListings] = useState(initialListings);
  const [selectedListing, setSelectedListing] = useState<any | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showApproveModal, setShowApproveModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [showSendBackModal, setShowSendBackModal] = useState(false);
  const [listingType, setListingType] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [sortOrder, setSortOrder] = useState('Newest First');
  const [searchQuery, setSearchQuery] = useState('');
  // Summary data calculation based on current listings
  const summaryData = [{
    id: 'pending',
    title: 'Pending Approvals',
    count: mockListings.filter(listing => listing.status === 'Pending').length,
    icon: ClockIcon,
    color: 'bg-amber-100 text-amber-600',
    borderColor: 'border-amber-200'
  }, {
    id: 'approved',
    title: 'Approved This Week',
    count: mockListings.filter(listing => listing.status === 'Approved').length,
    icon: CheckCircleIcon,
    color: 'bg-green-100 text-green-600',
    borderColor: 'border-green-200'
  }, {
    id: 'rejected',
    title: 'Rejected',
    count: mockListings.filter(listing => listing.status === 'Rejected').length,
    icon: XCircleIcon,
    color: 'bg-red-100 text-red-600',
    borderColor: 'border-red-200'
  }, {
    id: 'featured',
    title: 'Featured Listings',
    count: 3,
    icon: StarIcon,
    color: 'bg-blue-100 text-blue-600',
    borderColor: 'border-blue-200'
  }];
  // Filter and sort listings
  const filteredListings = mockListings.filter(listing => {
    // Filter by type
    if (listingType !== 'All' && listing.type !== listingType) return false;
    // Filter by status
    if (statusFilter !== 'All' && listing.status !== statusFilter) return false;
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return listing.title.toLowerCase().includes(query) || listing.partner.toLowerCase().includes(query) || listing.category.toLowerCase().includes(query);
    }
    return true;
  }).sort((a, b) => {
    // Sort by submission date
    const dateA = new Date(a.submittedOn).getTime();
    const dateB = new Date(b.submittedOn).getTime();
    return sortOrder === 'Newest First' ? dateB - dateA : dateA - dateB;
  });
  // Render listing status with appropriate styling
  const renderStatus = (status: string) => {
    const statusStyles: Record<string, string> = {
      Pending: 'bg-amber-100 text-amber-800 border border-amber-200',
      Approved: 'bg-green-100 text-green-800 border border-green-200',
      Rejected: 'bg-red-100 text-red-800 border border-red-200',
      'Sent Back': 'bg-blue-100 text-blue-800 border border-blue-200'
    };
    return <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${statusStyles[status] || 'bg-gray-100 text-gray-800'}`}>
        {status}
      </span>;
  };
  // Render listing type with appropriate styling
  const renderType = (type: string) => {
    const typeStyles: Record<string, string> = {
      Services: 'bg-purple-100 text-purple-800 border border-purple-200',
      Courses: 'bg-blue-100 text-blue-800 border border-blue-200',
      Events: 'bg-orange-100 text-orange-800 border border-orange-200',
      Resources: 'bg-teal-100 text-teal-800 border border-teal-200'
    };
    return <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${typeStyles[type] || 'bg-gray-100 text-gray-800'}`}>
        {type}
      </span>;
  };
  // Format the table data
  const formattedListings = filteredListings.map(listing => ({
    ...listing,
    type: renderType(listing.type),
    status: renderStatus(listing.status)
  }));
  // Table columns definition
  const listingColumns = [{
    key: 'title',
    label: 'Title',
    primary: true
  }, {
    key: 'type',
    label: 'Type'
  }, {
    key: 'partner',
    label: 'Partner'
  }, {
    key: 'category',
    label: 'Category'
  }, {
    key: 'status',
    label: 'Status'
  }, {
    key: 'submittedOn',
    label: 'Submitted On'
  }];
  // Handle row click to open drawer
  const handleRowClick = (listingId: string) => {
    const listing = mockListings.find(item => item.id === listingId);
    if (listing) {
      setSelectedListing(listing);
      setIsDrawerOpen(true);
    }
  };
  // Render expanded content for table row
  const renderExpandedContent = (row: any) => {
    return <div className="p-4 bg-gray-50 rounded-md">
        <h4 className="font-medium text-gray-900 mb-2">Listing Preview</h4>
        <p className="text-gray-700 mb-3">
          {row.description || 'No description available.'}
        </p>
        <div className="flex space-x-4">
          <button className="px-3 py-1.5 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700" onClick={() => handleRowClick(row.id)}>
            View Full Details
          </button>
        </div>
      </div>;
  };
  // Update listing status
  const updateListingStatus = (listingId: string, newStatus: string, comment?: string) => {
    setMockListings(prevListings => prevListings.map(listing => {
      if (listing.id === listingId) {
        const updatedListing = {
          ...listing,
          status: newStatus
        };
        // Add a comment if provided
        if (comment) {
          const newComment = {
            id: `comment-${Date.now()}`,
            author: 'You',
            text: comment,
            timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19)
          };
          updatedListing.comments = [...updatedListing.comments, newComment];
        }
        return updatedListing;
      }
      return listing;
    }));
  };
  // Handle listing actions
  const handleApproveListing = () => {
    if (selectedListing) {
      updateListingStatus(selectedListing.id, 'Approved', 'Listing approved');
      setShowApproveModal(false);
      setIsDrawerOpen(false);
    }
  };
  const handleRejectListing = (reason: string) => {
    if (selectedListing) {
      updateListingStatus(selectedListing.id, 'Rejected', `Rejected: ${reason}`);
      setShowRejectModal(false);
      setIsDrawerOpen(false);
    }
  };
  const handleSendBackListing = (reason: string, comments: string) => {
    if (selectedListing) {
      updateListingStatus(selectedListing.id, 'Sent Back', `Sent back: ${reason} - ${comments}`);
      setShowSendBackModal(false);
      setIsDrawerOpen(false);
    }
  };
  return <div className="p-6 bg-[#F8FAFC] min-h-screen">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Listing Approvals
        </h1>
        <p className="text-gray-600">
          Review and manage partner-submitted listings before publication.
        </p>
      </div>
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {summaryData.map(item => <div key={item.id} className={`bg-white rounded-xl shadow-md p-4 border-l-4 ${item.borderColor}`}>
            <div className="flex items-center">
              <div className={`p-3 rounded-full ${item.color} mr-4`}>
                <item.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">
                  {item.title}
                </h3>
                <p className="text-2xl font-semibold text-gray-900">
                  {item.count}
                </p>
              </div>
            </div>
          </div>)}
      </div>
      {/* Toolbar */}
      <div className="bg-white rounded-xl shadow-md p-4 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input type="text" className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Search listings..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
          </div>
          <div className="flex flex-wrap gap-3">
            <div className="relative inline-block">
              <select className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-8 text-sm leading-5 focus:outline-none focus:ring-blue-500 focus:border-blue-500" value={listingType} onChange={e => setListingType(e.target.value)}>
                <option value="All">All Listing Types</option>
                <option value="Services">Services</option>
                <option value="Courses">Courses</option>
                <option value="Events">Events</option>
                <option value="Resources">Resources</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <ChevronDownIcon className="h-4 w-4" />
              </div>
            </div>
            <div className="relative inline-block">
              <select className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-8 text-sm leading-5 focus:outline-none focus:ring-blue-500 focus:border-blue-500" value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
                <option value="All">All Statuses</option>
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
                <option value="Sent Back">Sent Back</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <ChevronDownIcon className="h-4 w-4" />
              </div>
            </div>
            <div className="relative inline-block">
              <select className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-8 text-sm leading-5 focus:outline-none focus:ring-blue-500 focus:border-blue-500" value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
                <option value="Newest First">Newest First</option>
                <option value="Oldest First">Oldest First</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <ChevronDownIcon className="h-4 w-4" />
              </div>
            </div>
            <button className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
              <FilterIcon className="h-4 w-4 mr-2" />
              More Filters
            </button>
          </div>
        </div>
      </div>
      {/* Listings Table */}
      <EnhancedTableSection title="Listings" columns={listingColumns} data={formattedListings} rowsPerPage={10} renderExpandedContent={renderExpandedContent} data-id="listings-table" />
      {/* Empty State */}
      {filteredListings.length === 0 && <div className="bg-white rounded-xl shadow-md p-8 text-center">
          <div className="mx-auto max-w-md">
            <div className="bg-gray-100 p-6 rounded-full inline-flex items-center justify-center mb-4">
              <FilterIcon className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No listings found for this filter
            </h3>
            <p className="text-gray-500 mb-4">
              Try adjusting your search or filter criteria to find what you're
              looking for.
            </p>
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" onClick={() => {
          setListingType('All');
          setStatusFilter('All');
          setSearchQuery('');
        }}>
              Clear All Filters
            </button>
          </div>
        </div>}
      {/* Listing Details Drawer */}
      {selectedListing && <ListingDetailsDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} listing={selectedListing} onApprove={() => setShowApproveModal(true)} onReject={() => setShowRejectModal(true)} onSendBack={() => setShowSendBackModal(true)} />}
      {/* Action Modals */}
      {selectedListing && <>
          <ApproveModal isOpen={showApproveModal} onClose={() => setShowApproveModal(false)} onConfirm={handleApproveListing} listing={selectedListing} />
          <RejectModal isOpen={showRejectModal} onClose={() => setShowRejectModal(false)} onConfirm={handleRejectListing} listing={selectedListing} />
          <SendBackModal isOpen={showSendBackModal} onClose={() => setShowSendBackModal(false)} onConfirm={handleSendBackListing} listing={selectedListing} />
        </>}
    </div>;
};