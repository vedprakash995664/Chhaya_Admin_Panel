import React, { useState } from 'react';
import './StyleCss/Sidebar.css';
import {
  FaHome, FaImage, FaVideo, FaCubes, FaCog, FaUserPlus, FaQuestion,
  FaChevronDown, FaChevronRight, FaFilm, FaVideoSlash, FaYoutube
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Sidebar({ isOpen }) {
  const [isHovered, setIsHovered] = useState(false);
  const [videoDropdownOpen, setVideoDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const menu = [
    { icon: <FaHome />, label: 'Dashboard', path: '/dashboard' },
    { icon: <FaCubes />, label: 'Social Media Manager', path: '/social-media-manager' },
    { icon: <FaImage />, label: 'Calling Team', path: '/callingTeam' },
    {
      icon: <FaVideo />, label: 'Settings', dropdown: [
        { label: 'Zone', icon: <FaFilm />, path: '/settings/zone' },
        { label: '3D Video', icon: <FaVideoSlash />, path: '/settings/3d' },
        { label: '4D Video', icon: <FaYoutube />, path: '/settings/4d' }
      ]
    },
    { icon: <FaCubes />, label: 'Staff Head', path: '/staffHead' },
  ];

  const handleItemClick = (item) => {
    if (item.dropdown) {
      setVideoDropdownOpen(!videoDropdownOpen);
    } else if (item.path) {
      navigate(item.path);
    }
  };

  return (
    <div
      className={`admin-sidebar ${isOpen ? 'open' : 'collapsed'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ul>
        {menu.map((item, i) => (
          <React.Fragment key={i}>
            <li onClick={() => handleItemClick(item)}>
              <span className="admin-icon">{item.icon}</span>
              <span className="admin-label">{item.label}</span>
              {item.dropdown && (
                <span className="dropdown-arrow">
                  {videoDropdownOpen ? <FaChevronDown /> : <FaChevronRight />}
                </span>
              )}
            </li>

            {/* Dropdown Submenu */}
            {item.dropdown && videoDropdownOpen && (
              <ul className="dropdown-menu open">
                {item.dropdown.map((subItem, subIndex) => (
                  <li
                    key={subIndex}
                    className="dropdown-item"
                    onClick={() => navigate(subItem.path)}
                  >
                    <span className="admin-icon">{subItem.icon}</span>
                    <span className="admin-label">{subItem.label}</span>
                  </li>
                ))}
              </ul>
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}
