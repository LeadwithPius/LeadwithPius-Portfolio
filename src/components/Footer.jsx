import React from 'react';
import TimezoneDisplay from './TimezoneDisplay'; 

export default function Footer() {
  return (
    <footer>
      <div className="footer-content"> 
        
        {/* Timezone component */}
        <TimezoneDisplay /> 
        
        {/* Copyright/Legal Info */}
        <div className="footer-info">
          <p>&copy; 2026 Bruce Pius.
          Chill, it always gets better here</p>
        </div>
        
      </div>
    </footer>
  );
}
