import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../ui/GlassCard';
import './StatsWidget.css';

const StatsWidget = ({ icon, label, value, trend, color }) => {
  return (
    <GlassCard hover>
      <div className="stats-widget">
        <div className="stats-icon" style={{ background: color }}>
          {icon}
        </div>
        <div className="stats-content">
          <div className="stats-label">{label}</div>
          <div className="stats-value">{value}</div>
          {trend && (
            <div className={`stats-trend ${trend > 0 ? 'positive' : 'negative'}`}>
              {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}%
            </div>
          )}
        </div>
      </div>
    </GlassCard>
  );
};

export default StatsWidget;