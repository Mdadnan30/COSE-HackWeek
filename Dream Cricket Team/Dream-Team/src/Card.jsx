import React, { useState } from 'react';
import './index.css';

function Card({ name, stats, details, img, type }) {
  const [modalOpen, setModalOpen] = useState(false);

  // Convert stats object to array if needed
  const statsArr = Array.isArray(stats)
    ? stats
    : Object.entries(stats).map(([label, value]) => ({ label, value }));

  // Function to render player type label
  const renderPlayerTypeLabel = () => {
    switch(type) {
      case 'batsman':
        return 'BAT';
      case 'bowler':
        return 'BOWL';
      case 'all-rounder':
        return 'AR';
      default:
        return '';
    }
  };

  return (
    <>
      <div
        className="custom-cricket-card badge-shape card-hoverable"
        onClick={() => setModalOpen(true)}
        tabIndex={0}
        role="button"
        aria-haspopup="dialog"
        aria-expanded={modalOpen}
        style={{ cursor: 'pointer' }}
      >
        <svg
          className="card-svg-bg"
          width="384"
          height="543"
          viewBox="0 0 384 543"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="bgGradient" cx="50%" cy="50%" r="80%">
              <stop offset="0%" stopColor="#2e7d32" />
              <stop offset="100%" stopColor="#145214" />
            </radialGradient>
            <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1976d2" />
              <stop offset="100%" stopColor="#0d47a1" />
            </linearGradient>
            <linearGradient id="goldBorder" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffe082" />
              <stop offset="100%" stopColor="#bfa14a" />
            </linearGradient>
          </defs>
          {/* Badge shape path */}
          <path
            d="M24,60 Q32,12 96,6 Q192,0 288,6 Q352,12 360,60 Q384,140 384,240 Q384,480 192,543 Q0,480 0,240 Q0,140 24,60 Z"
            fill="url(#bgGradient)"
            stroke="url(#goldBorder)"
            strokeWidth="10"
          />
        </svg>
        
        {/* Player Type Label */}
        <div className="player-type-label-container">
          <span className="player-type-label">{renderPlayerTypeLabel()}</span>
        </div>
        
        <div className="card-content">
          <img className="card-image" src={img} alt="profile" />
          <div className="card-info">
            <h2 className="card-title">{name}</h2>
            <div className="card-stats">
              {statsArr.map((stat) => (
                <div className="stat" key={stat.label}>
                  <span className="stat-label">{stat.label}</span>
                  <span className="stat-value">{stat.value}</span>
                </div>
              ))}
            </div>
            <div className="expand-indicator">Click for more details</div>
          </div>
        </div>
      </div>
      {modalOpen && (
        <div className="card-modal-overlay" role="dialog" aria-modal="true">
          <div className="card-modal">
            <button className="modal-close-btn" onClick={() => setModalOpen(false)} aria-label="Close details">&times;</button>
            <img className="modal-profile-image" src={img} alt="profile" />
            <h2 className="modal-title">{name}</h2>
            <div className="modal-stats">
              {statsArr.map((stat) => (
                <div className="modal-stat" key={stat.label}>
                  <span className="modal-stat-label">{stat.label}</span>
                  <span className="modal-stat-value">{stat.value}</span>
                </div>
              ))}
            </div>
            <div className="modal-details">
              <ul>
                {details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Card;