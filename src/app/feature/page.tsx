'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import { BarChart3, Leaf, Globe, Users, ArrowRight, TreePine, CloudSun, Phone, Smartphone } from 'lucide-react';

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-green-50 to-green-100">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Features & Capabilities
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Discover how CarboCredit empowers you to track, reduce, and offset your carbon footprint while earning rewards for sustainable choices.
            </p>
          </div>
        </div>
      </header>

      {/* Core Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Core Features</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent className="space-y-4">
                <BarChart3 className="h-12 w-12 text-green-600" />
                <h3 className="text-xl font-semibold">Precise Carbon Tracking</h3>
                <p className="text-gray-600">
                  Advanced algorithms calculate your carbon footprint based on daily activities, transportation, energy usage, and consumption patterns.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="space-y-4">
                <TreePine className="h-12 w-12 text-green-600" />
                <h3 className="text-xl font-semibold">Verified Offset Projects</h3>
                <p className="text-gray-600">
                  Support carefully vetted environmental projects worldwide, from reforestation to renewable energy initiatives.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="space-y-4">
                <CloudSun className="h-12 w-12 text-green-600" />
                <h3 className="text-xl font-semibold">Real-time Impact</h3>
                <p className="text-gray-600">
                  See the immediate environmental impact of your choices with our real-time tracking and visualization tools.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Everything You Need</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center">
                <Leaf className="h-6 w-6 mr-2 text-green-600" />
                Personal Impact Dashboard
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Detailed emissions breakdown</li>
                <li>• Progress tracking over time</li>
                <li>• Customizable goals and targets</li>
                <li>• Achievement badges and milestones</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center">
                <Globe className="h-6 w-6 mr-2 text-green-600" />
                Offset Marketplace
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Curated environmental projects</li>
                <li>• Transparent impact reporting</li>
                <li>• Flexible contribution options</li>
                <li>• Project progress updates</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center">
                <Users className="h-6 w-6 mr-2 text-green-600" />
                Community Features
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Group challenges and competitions</li>
                <li>• Shared sustainability goals</li>
                <li>• Social impact feed</li>
                <li>• Community forums and discussions</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center">
                <Smartphone className="h-6 w-6 mr-2 text-green-600" />
                Mobile Experience
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Native iOS and Android apps</li>
                <li>• Offline tracking capabilities</li>
                <li>• Push notifications and reminders</li>
                <li>• Location-based recommendations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Seamless Integrations</h2>
            <p className="text-lg text-gray-600 mb-12">
              Connect CarboCredit with your favorite apps and services for comprehensive carbon tracking.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              <Card className="p-4">
                <CardContent className="text-gray-600">Smart Home Devices</CardContent>
              </Card>
              <Card className="p-4">
                <CardContent className="text-gray-600">Fitness Apps</CardContent>
              </Card>
              <Card className="p-4">
                <CardContent className="text-gray-600">Transport Apps</CardContent>
              </Card>
              <Card className="p-4">
                <CardContent className="text-gray-600">Shopping Platforms</CardContent>
              </Card>
              <Card className="p-4">
                <CardContent className="text-gray-600">Utility Providers</CardContent>
              </Card>
              <Card className="p-4">
                <CardContent className="text-gray-600">Banking Services</CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Start Your Sustainability Journey Today</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of users making a positive impact on the environment with CarboCredit.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-green-600 hover:bg-gray-100">
              Download App
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-green-700">
              Contact Sales
              <Phone className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FeaturesPage;