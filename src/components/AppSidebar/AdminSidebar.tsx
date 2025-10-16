import React, { useEffect, useState, useRef } from 'react';
import { X, ChevronDown, Info, Lock, Home, Users, UserCheck, Package, FolderOpen, MapPin, TrendingUp, CheckCircle, FileCheck, Flag, Shield, BarChart3, Activity, FileText, MessageSquare, HelpCircle, Settings, Check } from 'lucide-react';
interface Company {
  id: string;
  name: string;
  role: string;
  isActive?: boolean;
  badge?: string;
}
interface AdminSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
  activeSection?: string;
  onSectionChange?: (sectionId: string) => void;
  onboardingComplete?: boolean;
  companies?: Company[];
  onCompanyChange?: (companyId: string) => void;
  onAddNewEnterprise?: () => void;
  isLoggedIn?: boolean;
  'data-id'?: string;
}
export const AdminSidebar: React.FC<AdminSidebarProps> = ({
  isOpen = true,
  onClose,
  activeSection = 'dashboard',
  onSectionChange,
  onboardingComplete = false,
  companies = [],
  onCompanyChange,
  onAddNewEnterprise,
  isLoggedIn = true,
  'data-id': dataId
}) => {
  const [tooltipItem, setTooltipItem] = useState<string | null>(null);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const [focusedMenuIndex, setFocusedMenuIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  if (!isLoggedIn) {
    return null;
  }
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setCompanyDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;
      const menuItems = getAdminMenuItems().filter((item: any) => item.category !== 'category');
      switch (event.key) {
        case 'Escape':
          if (companyDropdownOpen) {
            setCompanyDropdownOpen(false);
          } else {
            onClose?.();
          }
          break;
        case 'ArrowDown':
          event.preventDefault();
          setFocusedMenuIndex(prev => {
            const next = prev < menuItems.length - 1 ? prev + 1 : 0;
            menuItemsRef.current[next]?.focus();
            return next;
          });
          break;
        case 'ArrowUp':
          event.preventDefault();
          setFocusedMenuIndex(prev => {
            const next = prev > 0 ? prev - 1 : menuItems.length - 1;
            menuItemsRef.current[next]?.focus();
            return next;
          });
          break;
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, companyDropdownOpen, onClose]);
  const getAdminMenuItems = () => {
    const items: any[] = [];
    if (!onboardingComplete) {
      items.push({
        id: 'onboarding',
        label: 'Platform Setup',
        icon: <Settings size={20} />
      });
    } else {
      items.push({
        id: 'dashboard',
        label: 'Dashboard',
        icon: <Home size={20} />
      });
    }
    items.push({
      id: 'user-management',
      label: 'USER MANAGEMENT',
      category: 'category'
    }, {
      id: 'users',
      label: 'Users',
      icon: <Users size={20} />
    }, {
      id: 'partners',
      label: 'Partners',
      icon: <UserCheck size={20} />
    }, {
      id: 'enterprises',
      label: 'Enterprises',
      icon: <Package size={20} />
    }, {
      id: 'content-data',
      label: 'CONTENT & DATA',
      category: 'category'
    }, {
      id: 'business-directory',
      label: 'Business Directory',
      icon: <FolderOpen size={20} />
    }, {
      id: 'zones-clusters',
      label: 'Zones & Clusters',
      icon: <MapPin size={20} />
    }, {
      id: 'growth-areas',
      label: 'Growth Areas',
      icon: <TrendingUp size={20} />
    }, {
      id: 'marketplace-approvals',
      label: 'MARKETPLACE APPROVALS',
      category: 'category'
    }, {
      id: 'listing-approvals',
      label: 'Listing Approvals',
      icon: <CheckCircle size={20} />
    }, {
      id: 'content-approvals',
      label: 'Content Approvals',
      icon: <FileCheck size={20} />
    }, {
      id: 'community-moderation',
      label: 'COMMUNITY MODERATION',
      category: 'category'
    }, {
      id: 'moderation-reports',
      label: 'Moderation Reports',
      icon: <Flag size={20} />
    }, {
      id: 'community-admin',
      label: 'Community Admin',
      icon: <Shield size={20} />
    }, {
      id: 'analytics-monitoring',
      label: 'ANALYTICS & MONITORING',
      category: 'category'
    }, {
      id: 'platform-analytics',
      label: 'Platform Analytics',
      icon: <BarChart3 size={20} />,
      subItems: [
        { id: 'market-internal', label: 'Market (Internal)' },
        { id: 'market-external', label: 'Market (External)' },
      ],
    }, 
    {
      id: 'strategic-analytics',
      label: 'Strategic Analytics',
      icon: <BarChart3 size={20} />,
      subItems: [
        { id: 'strategic-internal', label: 'Strategic (Internal)' },
        { id: 'strategic-external', label: 'Strategic (External)' },
      ],
    },
    {
      id: 'operational-analytics',
      label: 'Operational Analytics',
      icon: <BarChart3 size={20} />,
      subItems: [
        { id: 'operational-internal', label: 'Operational (Internal)' },
        { id: 'operational-external', label: 'Operational (External)' },
      ],
    },
    {
      id: 'activity-logs',
      label: 'Activity Logs',
      icon: <Activity size={20} />
    }, {
      id: 'reports',
      label: 'Reports',
      icon: <FileText size={20} />
    }, {
      id: 'support',
      label: 'SUPPORT',
      category: 'category'
    }, {
      id: 'support-tickets',
      label: 'Support Tickets',
      icon: <MessageSquare size={20} />
    }, {
      id: 'help-center',
      label: 'Help Center',
      icon: <HelpCircle size={20} />
    });
    return items;
  };
  const [expandedMenus, setExpandedMenus] = useState<string[]>([]);

  useEffect(() => {
    const activeParent = getAdminMenuItems().find(item => item.subItems?.some((subItem: any) => subItem.id === activeSection));
    if (activeParent && !expandedMenus.includes(activeParent.id)) {
      setExpandedMenus(prev => [...prev, activeParent.id]);
    }
  }, [activeSection]);

  const toggleMenu = (id: string) => {
    setExpandedMenus(prev => prev.includes(id) ? prev.filter(menuId => menuId !== id) : [...prev, id]);
  };

  return <div className={`fixed lg:static inset-y-0 left-0 z-30 w-64 bg-gray-50 border-r border-gray-200 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} lg:w-60 overflow-y-auto`} data-id={dataId}>
      <div className="p-4 border-b border-gray-200">
        <div className="flex justify-between items-center mb-3">
          <button className="lg:hidden text-gray-500" onClick={onClose}>
            <X size={20} />
          </button>
        </div>
        <div className="relative" ref={dropdownRef}>
          <button className="w-full flex items-center justify-between text-left p-3 rounded-md hover:bg-gray-100 transition-colors" onClick={() => setCompanyDropdownOpen(!companyDropdownOpen)} onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setCompanyDropdownOpen(!companyDropdownOpen);
          }
        }}>
            <div className="flex-1 min-w-0">
              <h2 className="text-blue-800 font-bold text-lg leading-tight truncate">
                Platform Admin
              </h2>
              <span className="text-xs text-gray-500 font-medium mt-0.5 block">
                Super Admin
              </span>
            </div>
            <ChevronDown size={18} className={`text-gray-500 transition-transform ml-2 flex-shrink-0 ${companyDropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          {companyDropdownOpen && <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50">
              <div className="py-1">
                <button className="w-full px-3 py-2 text-left text-sm hover:bg-gray-50 flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-gray-900 truncate">
                      Platform Admin
                    </div>
                    <div className="text-xs text-gray-500">Super Admin</div>
                  </div>
                  <Check size={16} className="text-blue-600" />
                </button>
              </div>
            </div>}
        </div>
      </div>
      {!onboardingComplete && <div className="bg-amber-50 p-3 m-3 rounded-md border border-amber-200">
          <div className="flex items-start">
            <Info size={16} className="text-amber-500 mt-0.5 mr-2 flex-shrink-0" />
            <p className="text-xs text-amber-700">
              Complete the platform setup to unlock all administrative sections.
            </p>
          </div>
        </div>}
      <nav className="py-2">
        {getAdminMenuItems().map((item: any, index: number) => {
        if (item.category === 'category') {
          return <div key={item.id} className="px-4 pt-6 pb-2">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-200 pb-2">
                  {item.label}
                </div>
              </div>;
        }
        const isDisabled = !onboardingComplete && item.id !== 'onboarding';
        const isActive = activeSection === item.id;
        const hasSubItems = item.subItems && item.subItems.length > 0;
        const isExpanded = expandedMenus.includes(item.id);

        const menuItemIndex = getAdminMenuItems().filter((i: any) => i.category !== 'category').findIndex((i: any) => i.id === item.id);
        return <div key={item.id}>
          <div ref={el => menuItemsRef.current[menuItemIndex] = el} className={`flex items-center px-4 py-3 relative transition-colors ${isActive ? 'bg-blue-700 text-white' : isDisabled ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-200 cursor-pointer'}`} onClick={() => hasSubItems ? toggleMenu(item.id) : !isDisabled && onSectionChange?.(item.id)} onMouseEnter={() => isDisabled && setTooltipItem(item.id)} onMouseLeave={() => setTooltipItem(null)} onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            hasSubItems ? toggleMenu(item.id) : !isDisabled && onSectionChange?.(item.id);
          }
        }} tabIndex={0} role="button" aria-label={`Navigate to ${item.label}`} aria-disabled={isDisabled}>
              <span className="w-8 flex items-center justify-center flex-shrink-0">
                {isDisabled && !isActive ? <div className="relative">
                    {item.icon}
                    <Lock size={10} className="absolute -top-1 -right-1 text-gray-400" />
                  </div> : item.icon}
              </span>
              <span className="flex-1 ml-3">{item.label}</span>
              {hasSubItems && <ChevronDown size={16} className={`text-gray-500 transition-transform ml-2 flex-shrink-0 ${isExpanded ? 'rotate-180' : ''}`} />}
              {tooltipItem === item.id && <div className="absolute left-full ml-2 bg-gray-800 text-white text-xs py-2 px-3 rounded-md w-48 z-50">
                  Complete platform setup to unlock this section
                  <div className="absolute top-1/2 -left-1 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-gray-800"></div>
                </div>}
            </div>
            {isExpanded && hasSubItems && (
              <div className="pl-8">
                {item.subItems.map((subItem: any) => (
                  <div key={subItem.id} className={`flex items-center px-4 py-2 relative transition-colors ${activeSection === subItem.id ? 'text-blue-700' : 'text-gray-600 hover:bg-gray-200 cursor-pointer'}`} onClick={(e) => { e.stopPropagation(); !isDisabled && onSectionChange?.(subItem.id);}}>
                    <span className="flex-1 ml-3">{subItem.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>;
      })}
      </nav>
    </div>;
};