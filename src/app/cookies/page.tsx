'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import { Cookie, List, Clock, Shield, Settings, Bell } from 'lucide-react';

const CookiePolicyPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-green-50 to-green-100">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Cookie Policy
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Learn about how CarboCredit uses cookies and similar technologies to improve your experience on our platform.
            </p>
            <p className="text-sm text-gray-600">
              Last Updated: December 8, 2024
            </p>
          </div>
        </div>
      </header>

      {/* Cookie Policy Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Cookie className="h-6 w-6 mr-2 text-green-600" />
                What Are Cookies?
              </h2>
              <Card>
                <CardContent className="p-6">
                  <p className="text-gray-600">
                    Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences, analyzing how you use our services, and helping with our marketing efforts.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Types of Cookies */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <List className="h-6 w-6 mr-2 text-green-600" />
                Types of Cookies We Use
              </h2>
              <Card>
                <CardContent className="p-6 space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Essential Cookies</h3>
                    <p className="text-gray-600">
                      These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Performance Cookies</h3>
                    <p className="text-gray-600">
                      These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Functionality Cookies</h3>
                    <p className="text-gray-600">
                      These cookies allow the website to remember choices you make and provide enhanced, more personal features.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Targeting Cookies</h3>
                    <p className="text-gray-600">
                      These cookies may be set through our site by our advertising partners to build a profile of your interests and show you relevant advertisements on other sites.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Cookie Duration */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Clock className="h-6 w-6 mr-2 text-green-600" />
                How Long Do Cookies Last?
              </h2>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold">Session Cookies</h3>
                    <p className="text-gray-600">These temporary cookies expire when you close your browser.</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">Persistent Cookies</h3>
                    <p className="text-gray-600">These cookies remain on your device for a specified period or until you delete them manually.</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Cookie Management */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Settings className="h-6 w-6 mr-2 text-green-600" />
                Managing Your Cookie Preferences
              </h2>
              <Card>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">
                    You can control and manage cookies in various ways. Please note that removing or blocking cookies can impact your user experience and parts of our website may no longer be fully accessible.
                  </p>
                  <div className="space-y-4">
                    <h3 className="font-semibold">Browser Controls</h3>
                    <p className="text-gray-600">
                      Most browsers accept cookies automatically, but you can alter your browser settings to decline cookies or be notified when a website sets a cookie.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Privacy and Security */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Shield className="h-6 w-6 mr-2 text-green-600" />
                Privacy and Security
              </h2>
              <Card>
                <CardContent className="p-6">
                  <p className="text-gray-600">
                    We respect your privacy and are committed to protecting your personal information. Our use of cookies complies with applicable data protection laws. For more information about how we protect your privacy, please read our Privacy Policy.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Updates Section */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Bell className="h-6 w-6 mr-2 text-green-600" />
                Updates to This Policy
              </h2>
              <Card>
                <CardContent className="p-6">
                  <p className="text-gray-600">
                    We may update this Cookie Policy from time to time to reflect changes in our practices or for operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Cookie Policy on this page.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Section */}
            <section className="bg-green-600 text-white py-12 rounded-lg">
              <div className="container mx-auto px-4 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Questions About Our Cookie Policy?</h2>
                <p className="text-lg mb-8 max-w-2xl mx-auto">
                  If you have any questions about how we use cookies, please don't hesitate to contact us.
                </p>
                <Button className="bg-white text-green-600 hover:bg-gray-100">
                  Contact Privacy Team
                </Button>
              </div>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CookiePolicyPage;