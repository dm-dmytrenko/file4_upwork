import React, { useEffect, useState } from 'react';

interface StatusBarProps {
  scrollRef: React.RefObject<HTMLDivElement>;  // Reference to the scrollable content
  thumbImage: string;  // Path to the image for the status indicator
}

const StatusBar: React.FC<StatusBarProps> = ({ scrollRef, thumbImage }) => {
  const [indicatorPosition, setIndicatorPosition] = useState(0);  // State for the indicator position

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      const scrollableHeight = scrollHeight - clientHeight;
      const position = (scrollTop / scrollableHeight) * 100;  // Scroll position as a percentage
      setIndicatorPosition(position);  // Update the indicator position
    }
  };

  useEffect(() => {
    const current = scrollRef.current;
    if (current) {
      current.addEventListener('scroll', handleScroll);  // Attach scroll listener
      return () => current.removeEventListener('scroll', handleScroll);  // Cleanup on unmount
    }
  }, [scrollRef]);  // Dependency on scrollRef

  return (
    <div className="status-bar">
      <div
        className="status-indicator"
        style={{
          top: `${indicatorPosition}%`,  // Adjust indicator based on scroll position
          backgroundImage: `url(${thumbImage})`,  // Set the background image
        }}
      >
        {/* Indicator with image */}
      </div>
    </div>
  );
};

export default StatusBar;