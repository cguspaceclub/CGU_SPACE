import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const location = useLocation();
  
  // Default breadcrumbs based on current path
  const getDefaultBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [];
    
    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const name = segment.charAt(0).toUpperCase() + segment.slice(1);
      breadcrumbs.push({ name, path: currentPath });
    });
    
    return breadcrumbs;
  };

  const breadcrumbItems = items || getDefaultBreadcrumbs();

  if (breadcrumbItems.length === 0) return null;

  return (
    <nav className="flex items-center space-x-2 text-sm text-white/60 mb-6" aria-label="Breadcrumb">
      <Link 
        to="/" 
        className="flex items-center hover:text-brand-orange transition-colors duration-200"
        aria-label="Go to home page"
      >
        <Home className="w-4 h-4" />
      </Link>
      
      {breadcrumbItems.map((item, index) => (
        <div key={item.path} className="flex items-center">
          <ChevronRight className="w-4 h-4 mx-2 text-white/40" />
          {index === breadcrumbItems.length - 1 ? (
            <span className="text-white font-medium" aria-current="page">
              {item.name}
            </span>
          ) : (
            <Link
              to={item.path}
              className="hover:text-brand-orange transition-colors duration-200"
            >
              {item.name}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
