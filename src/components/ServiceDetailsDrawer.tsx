import React, { useState } from 'react';
import { XIcon, ChevronRightIcon, MessageSquareIcon, UserIcon, FileTextIcon, CheckCircleIcon, ChevronDownIcon } from 'lucide-react';
type ServiceDetailsDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  service: any;
  onApprove: () => void;
  onReject: () => void;
  onSendBack: () => void;
};
export const ServiceDetailsDrawer: React.FC<ServiceDetailsDrawerProps> = ({
  isOpen,
  onClose,
  service,
  onApprove,
  onReject,
  onSendBack
}) => {
  const [activeTab, setActiveTab] = useState('details');
  const [newComment, setNewComment] = useState('');
  const [taggedUser, setTaggedUser] = useState('');
  const [showTagSuggestions, setShowTagSuggestions] = useState(false);
  if (!isOpen) return null;
  const getStatusStyle = (status: string) => {
    const statusStyles: Record<string, string> = {
      Pending: 'bg-amber-100 text-amber-800 border border-amber-200',
      'Step 2 Pending': 'bg-purple-100 text-purple-800 border border-purple-200',
      Approved: 'bg-green-100 text-green-800 border border-green-200',
      Rejected: 'bg-red-100 text-red-800 border border-red-200',
      'Sent Back': 'bg-blue-100 text-blue-800 border border-blue-200'
    };
    return statusStyles[status] || 'bg-gray-100 text-gray-800';
  };
  const handleAddComment = () => {
    if (!newComment.trim()) return;
    alert(`Comment added: ${newComment}`);
    setNewComment('');
  };
  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setNewComment(value);
    // Check for @ symbol to show tag suggestions
    const lastAtSymbolIndex = value.lastIndexOf('@');
    if (lastAtSymbolIndex !== -1 && lastAtSymbolIndex === value.length - 1) {
      setShowTagSuggestions(true);
      setTaggedUser('');
    } else if (lastAtSymbolIndex !== -1) {
      const potentialTag = value.substring(lastAtSymbolIndex + 1).split(' ')[0];
      setTaggedUser(potentialTag);
      setShowTagSuggestions(!!potentialTag);
    } else {
      setShowTagSuggestions(false);
    }
  };
  const handleTagUser = (username: string) => {
    const lastAtSymbolIndex = newComment.lastIndexOf('@');
    if (lastAtSymbolIndex !== -1) {
      const beforeTag = newComment.substring(0, lastAtSymbolIndex);
      const afterTag = newComment.substring(lastAtSymbolIndex + taggedUser.length + 1);
      setNewComment(`${beforeTag}@${username} ${afterTag}`);
      setShowTagSuggestions(false);
    }
  };
  // Determine the step text based on service type
  const getStepText = () => {
    if (service.type === 'Financial') {
      if (service.status === 'Step 2 Pending') {
        return 'Step 2 of 2 – Compliance Review';
      }
      return 'Step 1 of 2 – Partner Review';
    }
    return 'Step 1 of 1 – Final Review';
  };
  // Render approval flow tracker
  const renderApprovalFlow = () => {
    if (service.type === 'Financial') {
      return <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-500 mb-2">
            Approval Flow
          </h3>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="h-1 w-full bg-gray-200 rounded"></div>
            </div>
            <div className="relative flex justify-between">
              <div className="flex flex-col items-center">
                <div className={`h-6 w-6 rounded-full ${service.status === 'Rejected' ? 'bg-red-500' : 'bg-blue-500'} flex items-center justify-center`}>
                  {service.status === 'Rejected' ? <XIcon className="h-3 w-3 text-white" /> : <CheckCircleIcon className="h-3 w-3 text-white" />}
                </div>
                <span className="mt-2 text-xs font-medium text-gray-500">
                  Step 1: Review
                </span>
              </div>
              <div className="flex flex-col items-center">
                <div className={`h-6 w-6 rounded-full ${service.status === 'Step 2 Pending' || service.status === 'Approved' ? 'bg-blue-500' : 'bg-gray-200'} flex items-center justify-center`}>
                  {service.status === 'Approved' ? <CheckCircleIcon className="h-3 w-3 text-white" /> : <span className="text-xs text-white">2</span>}
                </div>
                <span className="mt-2 text-xs font-medium text-gray-500">
                  Step 2: Compliance
                </span>
              </div>
              <div className="flex flex-col items-center">
                <div className={`h-6 w-6 rounded-full ${service.status === 'Approved' ? 'bg-green-500' : 'bg-gray-200'} flex items-center justify-center`}>
                  {service.status === 'Approved' ? <CheckCircleIcon className="h-3 w-3 text-white" /> : <span className="text-xs text-white">3</span>}
                </div>
                <span className="mt-2 text-xs font-medium text-gray-500">
                  Final
                </span>
              </div>
            </div>
          </div>
        </div>;
    } else {
      return <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-500 mb-2">
            Approval Flow
          </h3>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="h-1 w-full bg-gray-200 rounded"></div>
            </div>
            <div className="relative flex justify-between">
              <div className="flex flex-col items-center">
                <div className={`h-6 w-6 rounded-full ${service.status === 'Rejected' ? 'bg-red-500' : 'bg-blue-500'} flex items-center justify-center`}>
                  {service.status === 'Rejected' ? <XIcon className="h-3 w-3 text-white" /> : <CheckCircleIcon className="h-3 w-3 text-white" />}
                </div>
                <span className="mt-2 text-xs font-medium text-gray-500">
                  Review
                </span>
              </div>
              <div className="flex flex-col items-center">
                <div className={`h-6 w-6 rounded-full ${service.status === 'Approved' ? 'bg-green-500' : 'bg-gray-200'} flex items-center justify-center`}>
                  {service.status === 'Approved' ? <CheckCircleIcon className="h-3 w-3 text-white" /> : <span className="text-xs text-white">2</span>}
                </div>
                <span className="mt-2 text-xs font-medium text-gray-500">
                  Final
                </span>
              </div>
            </div>
          </div>
        </div>;
    }
  };
  // Render financial service details
  const renderFinancialDetails = () => <div>
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-500 mb-2">Description</h3>
        <p className="text-gray-900">{service.description}</p>
      </div>
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-500 mb-2">Eligibility</h3>
        <ul className="list-disc pl-5 text-gray-900">
          {service.eligibility.map((item: string, index: number) => <li key={index}>{item}</li>)}
        </ul>
      </div>
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-500 mb-2">
          Application Requirements
        </h3>
        <ul className="list-disc pl-5 text-gray-900">
          {service.applicationRequirements.map((item: string, index: number) => <li key={index}>{item}</li>)}
        </ul>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-2">
            Processing Time
          </h3>
          <p className="text-gray-900">{service.processingTime}</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-2">Fee / Cost</h3>
          <p className="text-gray-900">{service.fee}</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-2">
            Regulatory Category
          </h3>
          <p className="text-gray-900">{service.regulatoryCategory}</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-2">
            Service Type
          </h3>
          <p className="text-gray-900">{service.type}</p>
        </div>
      </div>
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-500 mb-2">
          Documents Required
        </h3>
        <div className="space-y-2">
          {service.documentsRequired.map((doc: string, index: number) => <div key={index} className="flex items-center p-2 bg-gray-50 rounded-md">
              <FileTextIcon className="w-4 h-4 text-gray-500 mr-2" />
              <span className="text-gray-900">{doc}</span>
              <button className="ml-auto text-blue-600 hover:text-blue-800 text-sm">
                View
              </button>
            </div>)}
        </div>
      </div>
      {renderApprovalFlow()}
    </div>;
  // Render non-financial service details
  const renderNonFinancialDetails = () => <div>
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-500 mb-2">Description</h3>
        <p className="text-gray-900">{service.description}</p>
      </div>
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-500 mb-2">Category</h3>
        <p className="text-gray-900">{service.category}</p>
      </div>
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-500 mb-2">Eligibility</h3>
        <ul className="list-disc pl-5 text-gray-900">
          {service.eligibility.map((item: string, index: number) => <li key={index}>{item}</li>)}
        </ul>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-2">
            Processing Time
          </h3>
          <p className="text-gray-900">{service.processingTime}</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-2">Fee / Cost</h3>
          <p className="text-gray-900">{service.fee}</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-2">
            Expected Outcome
          </h3>
          <p className="text-gray-900">{service.outcome}</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-2">
            Service Type
          </h3>
          <p className="text-gray-900">{service.type}</p>
        </div>
      </div>
      {renderApprovalFlow()}
    </div>;
  // Mock users for tagging
  const suggestedUsers = [{
    username: 'sarah.johnson',
    name: 'Sarah Johnson',
    role: 'Moderator'
  }, {
    username: 'david.wilson',
    name: 'David Wilson',
    role: 'Compliance'
  }, {
    username: 'amanda.chen',
    name: 'Amanda Chen',
    role: 'Compliance'
  }, {
    username: 'robert.chen',
    name: 'Robert Chen',
    role: 'Compliance'
  }];
  return <div className="fixed inset-0 overflow-hidden z-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={onClose}></div>
        <div className="fixed inset-y-0 right-0 max-w-full flex">
          <div className="relative w-screen max-w-2xl">
            <div className="h-full flex flex-col bg-white shadow-xl overflow-y-auto">
              {/* Drawer Header */}
              <div className="px-4 py-6 sm:px-6 border-b border-gray-200">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-lg font-medium text-gray-900">
                      {service.title}
                    </h2>
                    <div className="mt-1 flex flex-col space-y-1">
                      <div className="flex items-center">
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusStyle(service.status)}`}>
                          {service.status}
                        </span>
                        <span className="ml-2 text-sm text-gray-500">
                          Submitted on {service.submittedOn}
                        </span>
                      </div>
                      <div className="flex items-center mt-1">
                        <span className="text-sm font-medium text-gray-700">
                          {getStepText()}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button type="button" className="rounded-md text-gray-400 hover:text-gray-500 focus:outline-none" onClick={onClose}>
                    <span className="sr-only">Close panel</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              {/* Tabs Navigation */}
              <div className="border-b border-gray-200">
                <nav className="flex -mb-px">
                  <button className={`${activeTab === 'details' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-4 border-b-2 font-medium text-sm flex items-center`} onClick={() => setActiveTab('details')}>
                    <FileTextIcon className="w-4 h-4 mr-2" />
                    Details
                  </button>
                  <button className={`${activeTab === 'partner' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-4 border-b-2 font-medium text-sm flex items-center`} onClick={() => setActiveTab('partner')}>
                    <UserIcon className="w-4 h-4 mr-2" />
                    Partner Info
                  </button>
                  <button className={`${activeTab === 'comments' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-4 border-b-2 font-medium text-sm flex items-center`} onClick={() => setActiveTab('comments')}>
                    <MessageSquareIcon className="w-4 h-4 mr-2" />
                    Comments
                  </button>
                </nav>
              </div>
              {/* Tab Content */}
              <div className="flex-1 px-4 py-6 sm:px-6 overflow-auto">
                {activeTab === 'details' && (service.type === 'Financial' ? renderFinancialDetails() : renderNonFinancialDetails())}
                {activeTab === 'partner' && <div>
                    <div className="mb-6">
                      <h3 className="text-sm font-medium text-gray-500 mb-2">
                        Partner Name
                      </h3>
                      <p className="text-gray-900">
                        {service.partnerInfo.name}
                      </p>
                    </div>
                    <div className="mb-6">
                      <h3 className="text-sm font-medium text-gray-500 mb-2">
                        Contact Email
                      </h3>
                      <p className="text-gray-900">
                        {service.partnerInfo.email}
                      </p>
                    </div>
                    <div className="mb-6">
                      <h3 className="text-sm font-medium text-gray-500 mb-2">
                        Partner Tier
                      </h3>
                      <div className="flex items-center">
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${service.partnerInfo.tier === 'Gold' ? 'bg-yellow-100 text-yellow-800 border border-yellow-200' : service.partnerInfo.tier === 'Silver' ? 'bg-gray-100 text-gray-800 border border-gray-200' : 'bg-amber-100 text-amber-800 border border-amber-200'}`}>
                          {service.partnerInfo.tier}
                        </span>
                      </div>
                    </div>
                    <div className="mb-6">
                      <h3 className="text-sm font-medium text-gray-500 mb-2">
                        Total Submissions
                      </h3>
                      <p className="text-gray-900">
                        {service.partnerInfo.totalSubmissions}
                      </p>
                    </div>
                    <div className="mb-6">
                      <h3 className="text-sm font-medium text-gray-500 mb-2">
                        Approval Rate
                      </h3>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-900">
                            {service.partnerInfo.approvalRate}%
                          </span>
                        </div>
                        <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-green-600 h-2.5 rounded-full" style={{
                        width: `${service.partnerInfo.approvalRate}%`
                      }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-6">
                      <h3 className="text-sm font-medium text-gray-500 mb-2">
                        Compliance Notes
                      </h3>
                      <p className="text-gray-900">
                        {service.partnerInfo.complianceNotes}
                      </p>
                    </div>
                    <div>
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
                        View Partner Profile
                        <ChevronRightIcon className="ml-1 w-4 h-4" />
                      </button>
                    </div>
                  </div>}
                {activeTab === 'comments' && <div>
                    <div className="space-y-4 mb-6">
                      {service.comments && service.comments.length > 0 ? service.comments.map((comment: any) => <div key={comment.id} className="bg-gray-50 rounded-lg p-4">
                            <div className="flex justify-between items-start">
                              <div className="flex items-center">
                                <span className="font-medium text-gray-900">
                                  {comment.author}
                                </span>
                                <span className={`ml-2 text-xs px-2 py-1 rounded-full ${comment.role === 'Moderator' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'}`}>
                                  {comment.role}
                                </span>
                              </div>
                              <span className="text-xs text-gray-500">
                                {comment.timestamp}
                              </span>
                            </div>
                            <p className="mt-1 text-gray-700">{comment.text}</p>
                          </div>) : <div className="text-center py-4">
                          <p className="text-gray-500">No comments yet.</p>
                        </div>}
                    </div>
                    <div>
                      <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">
                        Add a review note
                      </label>
                      <div className="relative">
                        <textarea id="comment" rows={3} className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border border-gray-300 rounded-md p-2" placeholder="Add a review note or tag another reviewer..." value={newComment} onChange={handleCommentChange}></textarea>
                        {/* Tag suggestions dropdown */}
                        {showTagSuggestions && <div className="absolute z-10 left-0 mt-1 w-64 bg-white rounded-md shadow-lg">
                            <ul className="py-1 max-h-60 overflow-auto">
                              {suggestedUsers.filter(user => !taggedUser || user.username.toLowerCase().includes(taggedUser.toLowerCase()) || user.name.toLowerCase().includes(taggedUser.toLowerCase())).map(user => <li key={user.username} className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center" onClick={() => handleTagUser(user.username)}>
                                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-2">
                                      {user.name.charAt(0)}
                                    </div>
                                    <div>
                                      <div className="text-sm font-medium">
                                        {user.name}
                                      </div>
                                      <div className="text-xs text-gray-500">
                                        @{user.username}
                                      </div>
                                    </div>
                                    <span className={`ml-auto text-xs px-2 py-0.5 rounded-full ${user.role === 'Moderator' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'}`}>
                                      {user.role}
                                    </span>
                                  </li>)}
                            </ul>
                          </div>}
                      </div>
                      <div className="mt-2 flex justify-end">
                        <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" onClick={handleAddComment}>
                          Add Note
                        </button>
                      </div>
                    </div>
                  </div>}
              </div>
              {/* Drawer Footer */}
              <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                <div className="flex justify-between">
                  <button type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" onClick={onClose}>
                    Cancel
                  </button>
                  <div className="flex space-x-3">
                    <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" onClick={onReject}>
                      Reject
                    </button>
                    <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" onClick={onSendBack}>
                      Send Back
                    </button>
                    <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500" onClick={onApprove}>
                      {service.type === 'Financial' && service.status !== 'Step 2 Pending' ? 'Move to Step 2' : 'Approve'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};