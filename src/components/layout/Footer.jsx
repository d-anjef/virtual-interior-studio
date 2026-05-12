import React from 'react';
import { Link } from 'react-router-dom';
import { 
  IoLogoGithub, 
  IoLogoTwitter, 
  IoLogoLinkedin,
  IoLogoInstagram 
} from 'react-icons/io5';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: 'Features', path: '/features' },
      { label: 'Pricing', path: '/pricing' },
      { label: 'Gallery', path: '/gallery' },
      { label: 'Workspace', path: '/workspace' }
    ],
    company: [
      { label: 'About Us', path: '/about' },
      { label: 'Careers', path: '/careers' },
      { label: 'Blog', path: '/blog' },
      { label: 'Contact', path: '/contact' }
    ],
    resources: [
      { label: 'Documentation', path: '/docs' },
      { label: 'Tutorials', path: '/tutorials' },
      { label: 'Support', path: '/support' },
      { label: 'Community', path: '/community' }
    ],
    legal: [
      { label: 'Privacy Policy', path: '/privacy' },
      { label: 'Terms of Service', path: '/terms' },
      { label: 'Cookie Policy', path: '/cookies' },
      { label: 'Licenses', path: '/licenses' }
    ]
  };

  const socialLinks = [
    { icon: <IoLogoGithub />, url: 'https://github.com', label: 'GitHub' },
    { icon: <IoLogoTwitter />, url: 'https://twitter.com', label: 'Twitter' },
    { icon: <IoLogoLinkedin />, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <IoLogoInstagram />, url: 'https://instagram.com', label: 'Instagram' }
  ];

  return (
    <footer className="footer">
      <div className="footer-background">
        <div className="footer-gradient-orb"></div>
      </div>

      <div className="container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-icon">✦</div>
              <span className="logo-text">VIRTUAL STUDIO</span>
            </div>
            <p className="footer-description">
              Create stunning interior designs with our immersive 3D virtual studio.
              Transform your vision into reality.
            </p>
            <div className="footer-social">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className="footer-links-grid">
            <div className="footer-links-column">
              <h4>Product</h4>
              <ul>
                {footerLinks.product.map((link) => (
                  <li key={link.label}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-links-column">
              <h4>Company</h4>
              <ul>
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-links-column">
              <h4>Resources</h4>
              <ul>
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-links-column">
              <h4>Legal</h4>
              <ul>
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Virtual Studio. All rights reserved.
          </p>
          <p className="footer-credits">
            Built with passion using React, Three.js & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;