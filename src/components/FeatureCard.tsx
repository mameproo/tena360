import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: typeof LucideIcon;
  title: string;
  description: string;
  link?: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  link,
  className = ""
}) => {
  const CardContent = (
    <div className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary-200 group cursor-pointer ${className}`}>
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <div className="bg-primary-100 p-3 rounded-lg group-hover:bg-primary-200 transition-colors">
            <Icon className="h-6 w-6 text-primary-600" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 text-sm mt-1">{description}</p>
        </div>
      </div>
    </div>
  );

  if (link) {
    return (
      <a href={link} className="block">
        {CardContent}
      </a>
    );
  }

  return CardContent;
};

export default FeatureCard;