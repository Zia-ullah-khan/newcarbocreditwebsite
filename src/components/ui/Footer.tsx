import React from 'react';

const Footer = () => {
  const footerLinks = {
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Contact', href: '/contact' }
    ],
    resources: [
      { label: 'Documentation', href: '/docs' },
      { label: 'Support', href: '/contact' }
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/tos' },
      { label: 'Cookie Policy', href: '#' }
    ]
  };

  return (
    <footer className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">CarboCredit</h3>
            <p className="text-gray-600">Making sustainability rewarding</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-600">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-green-600 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-600">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-green-600 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-600">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-green-600 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>© {new Date().getFullYear()} CarboCredit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;