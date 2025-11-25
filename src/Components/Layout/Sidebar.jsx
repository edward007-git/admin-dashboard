import React, { useState } from "react";
import {
  ChevronDown,
  Building2,
  LayoutDashboard,
  BarChart3,
  Users,
  Settings,
  Folder,
  ShoppingCart,
  CreditCard,
  Shield,
  MessageSquare,
  FileText,
  HelpCircle,
  Globe,
  Calendar,
} from "lucide-react";

const menuItems = [
  {
    id: "dashboard",
    icon: LayoutDashboard,
    label: "Dashboard",
    badge: "New",
  },
  {
    id: "analytics",
    icon: BarChart3,
    label: "Analytics",
    submenu: [
      { id: "overview", label: "Overview" },
      { id: "reports", label: "Reports" },
      { id: "insights", label: "Insights" },
      { id: "traffic", label: "Traffic" },
    ],
  },
  {
    id: "users",
    icon: Users,
    label: "Users",
    badge: "3.5K",
    submenu: [
      { id: "all-users", label: "All Users" },
      { id: "active-users", label: "Active Users" },
      { id: "inactive-users", label: "Inactive Users" },
      { id: "roles", label: "Roles & Permissions" },
    ],
  },
  {
    id: "transactions",
    icon: CreditCard,
    label: "Transactions",
  },
  {
    id: "messages",
    icon: MessageSquare,
    label: "Messages",
    badge: "12",
  },
  {
    id: "calendar",
    icon: Calendar,
    label: "Calendar",
  },
  {
    id: "reports",
    icon: FileText,
    label: "Reports",
  },
  {
    id: "projects",
    icon: Folder,
    label: "Projects",
    submenu: [
      { id: "all-projects", label: "All Projects" },
      { id: "in-progress", label: "In Progress" },
      { id: "completed", label: "Completed" },
    ],
  },
  {
    id: "orders",
    icon: ShoppingCart,
    label: "Orders",
    submenu: [
      { id: "all-orders", label: "All Orders" },
      { id: "pending", label: "Pending" },
      { id: "completed-orders", label: "Completed" },
      { id: "refunds", label: "Refunds" },
    ],
  },
  {
    id: "billing",
    icon: CreditCard,
    label: "Billing",
    submenu: [
      { id: "invoices", label: "Invoices" },
      { id: "payment-methods", label: "Payment Methods" },
      { id: "transactions", label: "Transactions" },
    ],
  },
  {
    id: "messages-center",
    icon: MessageSquare,
    label: "Messages",
    submenu: [
      { id: "inbox", label: "Inbox" },
      { id: "sent", label: "Sent" },
      { id: "archived", label: "Archived" },
    ],
  },
  {
    id: "documents",
    icon: FileText,
    label: "Documents",
    submenu: [
      { id: "policies", label: "Policies" },
      { id: "guides", label: "Guides" },
      { id: "contracts", label: "Contracts" },
    ],
  },
  {
    id: "support",
    icon: HelpCircle,
    label: "Support",
    submenu: [
      { id: "faq", label: "FAQ" },
      { id: "tickets", label: "Tickets" },
      { id: "contact", label: "Contact Support" },
    ],
  },
  {
    id: "security",
    icon: Shield,
    label: "Security",
    submenu: [
      { id: "activity-log", label: "Activity Log" },
      { id: "roles", label: "Roles" },
      { id: "settings", label: "Security Settings" },
    ],
  },
  {
    id: "settings",
    icon: Settings,
    label: "Settings",
  },
  {
    id: "website",
    icon: Globe,
    label: "Website",
    submenu: [
      { id: "pages", label: "Pages" },
      { id: "blog", label: "Blog" },
      { id: "seo", label: "SEO Settings" },
    ],
  },
];

function Sidebar({ collapsed, onToggle, currentPage, onPageChange }) {
  const [expandeditem, setExpandedItem] = useState(new Set());
  const toggleExpanded = (itemid) => {
    const newExpanded = new Set(expandeditem);
    if (newExpanded.has(itemid)) {
      newExpanded.delete(itemid);
    } else {
      newExpanded.add(itemid);
    }
    setExpandedItem(newExpanded);
  };

  return (
    <div
      className={`${
        collapsed ? "w-20" : "w-72"
      } transition duration-300 ease-in-out 
      bg-white text-slate-700 border-r border-slate-200 flex flex-col relative z-10`}
    >
      {/* Logo */}
      <div className="p-6 border-b border-slate-200">
        <div className="flex items-center space-x-3">
          <button
            className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center"
            onClick={onToggle}
          >
            <Building2 className="w-6 h-6 text-slate-800" />
          </button>
          {!collapsed && (
            <div>
              <h1 className="text-lg font-semibold text-slate-800">
                PrimeDesk
              </h1>
              <p className="text-xs text-slate-500">Admin Panel</p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          const isExpanded = expandeditem.has(item.id);

          return (
            <div key={item.id}>
              <button
                className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? "bg-slate-100 text-slate-900 font-medium"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
                onClick={() => {
                  if (item.submenu) {
                    toggleExpanded(item.id);
                    onPageChange(item.id);
                  } else {
                    onPageChange(item.id);
                  }
                }}
              >
                <div className="flex items-center space-x-3">
                  <Icon className="w-5 h-5" />
                  {!collapsed && (
                    <>
                      <span className="text-sm font-medium">
                        {item.label}
                      </span>
                      {item.badge && (
                        <span
                          className="px-2 py-0.5 text-[10px] rounded-full font-semibold bg-slate-100 text-slate-700"
                        >
                          {item.badge}
                        </span>
                      )}
                    </>
                  )}
                </div>

                {!collapsed && item.submenu && (
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 transition-transform ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>

              {/* Submenu */}
              {!collapsed && item.submenu && isExpanded && (
                <div className="ml-8 mt-2 space-y-1">
                  {item.submenu.map((sub) => (
                    <button
                      key={sub.id}
                      className="w-full text-left text-sm px-3 py-1 rounded text-slate-600 hover:bg-slate-100"
                      onClick={() =>
                        onPageChange && onPageChange(`${item.id}/${sub.id}`)
                      }
                    >
                      {sub.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* User Profile Section */}
      <div className="p-4 border-t border-slate-200">
        <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50">
          <img
            src="https://via.placeholder.com/40"
            alt="User Avatar"
            className="w-10 h-10 rounded-full ring-2 ring-slate-200"
          />
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-800">
                steven mark
              </p>
              <p className="text-xs text-slate-500 truncate">Admin</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
