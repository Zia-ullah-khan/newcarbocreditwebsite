'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import { Shield, Lock, Eye, Database, Bell, Globe } from 'lucide-react';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-green-50 to-green-100">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              At CarboCredit, we take your privacy seriously. This policy explains how we collect, use, and protect your personal information.
            </p>
            <p className="text-sm text-gray-600">
              Last Updated: December 8, 2024
            </p>
          </div>
        </div>
      </header>

      {/* Privacy Policy Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Shield className="h-6 w-6 mr-2 text-green-600" />
                Introduction
              </h2>
              <Card>
                <CardContent className="p-6">
                  <p className="text-gray-600">
                    This Privacy Policy describes how CarboCredit ("we," "our," or "us") collects, uses, and shares your personal information when you use our website, mobile application, and services (collectively, the "Services"). By using our Services, you agree to the collection and use of information in accordance with this policy.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Database className="h-6 w-6 mr-2 text-green-600" />
                Information We Collect
              </h2>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">Personal Information</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Name and contact information (email address, phone number)</li>
                    <li>Account credentials</li>
                    <li>Payment information</li>
                    <li>Location data (with your permission)</li>
                    <li>Device information and usage data</li>
                    <li>Carbon footprint calculation data</li>
                  </ul>

                  <h3 className="text-xl font-semibold mt-6">Automatically Collected Information</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>IP address and device identifiers</li>
                    <li>Browser type and settings</li>
                    <li>Usage patterns and interaction data</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Eye className="h-6 w-6 mr-2 text-green-600" />
                How We Use Your Information
              </h2>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <p className="text-gray-600">We use your information to:</p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Provide and improve our Services</li>
                    <li>Calculate and track your carbon footprint</li>
                    <li>Process your transactions and rewards</li>
                    <li>Communicate with you about our Services</li>
                    <li>Send you important updates and notifications</li>
                    <li>Analyze and improve our Services</li>
                    <li>Prevent fraud and ensure security</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Data Sharing and Disclosure */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Globe className="h-6 w-6 mr-2 text-green-600" />
                Data Sharing and Disclosure
              </h2>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <p className="text-gray-600">We may share your information with:</p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Service providers and partners who assist in operating our Services</li>
                    <li>Environmental project partners (with your consent)</li>
                    <li>Legal authorities when required by law</li>
                    <li>Other users (only information you choose to make public)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Lock className="h-6 w-6 mr-2 text-green-600" />
                Data Security
              </h2>
              <Card>
                <CardContent className="p-6">
                  <p className="text-gray-600">
                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Your Rights and Choices */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Bell className="h-6 w-6 mr-2 text-green-600" />
                Your Rights and Choices
              </h2>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <p className="text-gray-600">You have the right to:</p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate data</li>
                    <li>Request deletion of your data</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Disable cookies and tracking</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Contact Section */}
            <section className="bg-green-600 text-white py-12 rounded-lg">
              <div className="container mx-auto px-4 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Questions About Our Privacy Policy?</h2>
                <p className="text-lg mb-8 max-w-2xl mx-auto">
                  If you have any questions or concerns about our privacy practices, please don't hesitate to contact us.
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

export default PrivacyPolicyPage;