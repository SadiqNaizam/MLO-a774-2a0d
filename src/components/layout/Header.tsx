import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, User } from 'lucide-react';

interface TopHeaderProps {
  className?: string;
  onMenuClick?: () => void; 
  onUserClick?: () => void; 
}

const TopHeader: React.FC<TopHeaderProps> = ({ 
  className,
  onMenuClick,
  onUserClick 
}) => {

  const handleMenuClick = React.useCallback(() => {
    if (onMenuClick) {
      onMenuClick();
    } else {
      // Placeholder action if no handler is provided
      console.log("Menu button clicked"); 
    }
  }, [onMenuClick]);

  const handleUserClick = React.useCallback(() => {
    if (onUserClick) {
      onUserClick();
    } else {
      // Placeholder action if no handler is provided
      console.log("User button clicked"); 
    }
  }, [onUserClick]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-10 flex items-center justify-between px-4 h-[60px] bg-header border-b border-border",
        className
      )}
    >
      {/* Left Section: Represents "IconLeft" */}
      <Button
        variant="ghost"
        size="icon"
        className="bg-iconBackground hover:bg-iconBackground/90 text-foreground/70 rounded-full w-9 h-9"
        onClick={handleMenuClick}
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </Button>

      {/* Right Section: Represents "IconRight" */}
      <Button
        variant="ghost"
        size="icon"
        className="bg-iconBackground hover:bg-iconBackground/90 text-foreground/70 rounded-md w-9 h-9"
        onClick={handleUserClick}
        aria-label="Open user profile"
      >
        <User className="h-5 w-5" />
      </Button>
    </header>
  );
};

export default TopHeader;
