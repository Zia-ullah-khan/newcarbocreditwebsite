'use client';

import React, { useState, FormEvent, ChangeEvent  } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import { Mail, Phone, MapPin, RefreshCw } from 'lucide-react';
interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
    captchaInput: string;
  }
  
  const ContactPage = () => {
    const [formData, setFormData] = useState<FormData>({
      name: '',
      email: '',
      subject: '',
      message: '',
      captchaInput: ''
    });
    
    const [captcha, setCaptcha] = useState<string>(generateCaptcha());
    
    function generateCaptcha(): string {
      return Math.random().toString(36).slice(2, 8).toUpperCase();
    }
    
    const refreshCaptcha = (): void => {
      setCaptcha(generateCaptcha());
      setFormData(prev => ({ ...prev, captchaInput: '' }));
    };
  
    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
      e.preventDefault();
      if (formData.captchaInput === captcha) {
        // Handle form submission
        console.log('Form submitted:', formData);
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          captchaInput: ''
        });
        refreshCaptcha();
      } else {
        alert('Incorrect captcha. Please try again.');
      }
    };
  
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-green-50 to-green-100">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Have questions about CarboCredit? We're here to help. Reach out to our team and we'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </header>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="md:col-span-1 space-y-8">
              <Card className="p-6">
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-green-600 mt-1" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-600">support@carbocredit.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-green-600 mt-1" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-green-600 mt-1" />
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p className="text-gray-600">123 Green Street<br />San Francisco, CA 94105</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <Card className="p-6">
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Name
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full min-h-32"
                      />
                    </div>
                    
                    {/* Captcha Section */}
                    <div className="space-y-4">
                      <label className="block text-sm font-medium text-gray-700">
                        Please enter the code below
                      </label>
                      <div className="flex items-center space-x-4">
                        <div className="bg-gray-100 p-3 rounded-md font-mono text-lg select-none">
                          {captcha}
                        </div>
                        <Button
                          type="button"
                          variant="outline"
                          onClick={refreshCaptcha}
                          className="p-2"
                        >
                          <RefreshCw className="h-4 w-4" />
                        </Button>
                      </div>
                      <Input
                        name="captchaInput"
                        value={formData.captchaInput}
                        onChange={handleChange}
                        required
                        placeholder="Enter the code"
                        className="max-w-xs"
                      />
                    </div>

                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;