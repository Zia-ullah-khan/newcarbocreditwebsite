'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import { Scale, FileText, AlertCircle, History, ThumbsUp, Mail } from 'lucide-react';

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-green-50 to-green-100">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Please read these terms carefully before using CarboCredit's services. By using our platform, you agree to be bound by these terms.
            </p>
            <p className="text-sm text-gray-600">
              Last Updated: December 8, 2024
            </p>
          </div>
        </div>
      </header>

      {/* Terms Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Agreement */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Scale className="h-6 w-6 mr-2 text-green-600" />
                Agreement to Terms
              </h2>
              <Card>
                <CardContent className="p-6">
                  <p className="text-gray-600">
                    By accessing or using CarboCredit's services, including our website, mobile application, and carbon tracking tools (collectively, the "Services"), you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our Services.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Service Description */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <FileText className="h-6 w-6 mr-2 text-green-600" />
                Description of Services
              </h2>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <p className="text-gray-600">CarboCredit provides:</p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Carbon footprint tracking and analysis tools</li>
                    <li>Environmental impact assessment services</li>
                    <li>Carbon offset project participation opportunities</li>
                    <li>Rewards program for sustainable actions</li>
                    <li>Educational resources about environmental sustainability</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* User Responsibilities */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <AlertCircle className="h-6 w-6 mr-2 text-green-600" />
                User Responsibilities
              </h2>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <p className="text-gray-600">Users must:</p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Provide accurate information when using our Services</li>
                    <li>Maintain the security of their account credentials</li>
                    <li>Comply with all applicable laws and regulations</li>
                    <li>Respect the intellectual property rights of CarboCredit</li>
                    <li>Not misuse or attempt to manipulate our reward system</li>
                    <li>Not engage in any fraudulent activities</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Data Usage */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <History className="h-6 w-6 mr-2 text-green-600" />
                Data Usage and Storage
              </h2>
              <Card>
                <CardContent className="p-6">
                  <p className="text-gray-600">
                    We collect and store data necessary for providing our Services, including personal information, usage data, and carbon footprint calculations. Our use of this data is governed by our Privacy Policy. By using our Services, you consent to such data collection and storage.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Acceptable Use */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <ThumbsUp className="h-6 w-6 mr-2 text-green-600" />
                Acceptable Use
              </h2>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <p className="text-gray-600">You agree not to:</p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Use the Services for any illegal purposes</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Interfere with other users' access to the Services</li>
                    <li>Upload malicious code or content</li>
                    <li>Impersonate other users or entities</li>
                    <li>Share account access with unauthorized users</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Contact Section */}
            <section className="bg-green-600 text-white py-12 rounded-lg">
              <div className="container mx-auto px-4 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Questions About Our Terms?</h2>
                <p className="text-lg mb-8 max-w-2xl mx-auto">
                  If you have any questions about these Terms of Service, please contact our legal team.
                </p>
                <Button className="bg-white text-green-600 hover:bg-gray-100">
                  <Mail className="h-4 w-4 mr-2" />
                  Contact Legal Team
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

export default TermsOfServicePage;