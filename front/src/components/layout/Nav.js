import React from 'react';
import { Link } from "react-router-dom";
import '../../index.css';

export default function Nav () {
  return (
    <nav>
      <ul>
        <li><Link to="/">Homepage</Link></li>
        <li><Link to="/about">A propos de moi</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/contact">Contact</Link></li>      
      </ul>
    </nav>
  )
}
