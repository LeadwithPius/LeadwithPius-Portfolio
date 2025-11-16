import React from 'react';
// Changed the import path to match your file name: timezone_display.jsx
import TimezoneDisplay from './timezone_display'; 

export default function Footer() {
  return (
    <footer>
      <div className="footer-content"> 
        
        {/* Timezone component */}
        <TimezoneDisplay /> 
        
        {/* Copyright/Legal Info */}
        <div className="footer-info">
          <p>&copy; 2025 Bruce Pius. All rights reserved.</p>
          <p style={{fontSize: '0.8rem', marginTop: '0.5rem'}}>Built with React & Vite, Deployed on Netlify.</p>
        </div>
        
      </div>
    </footer>
  );
}