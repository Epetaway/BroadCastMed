"use client";

import { useState } from 'react';
import { contactInfo } from '@/data/site';
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-4xl font-bold tracking-tight">Get In Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Interested in collaborating on a healthcare technology project? 
            I&apos;d love to discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Let&apos;s Connect</h2>
              <p className="text-muted-foreground leading-relaxed">
                Whether you&apos;re looking for a front-end developer with healthcare 
                experience, want to discuss a CMS project, or need help with 
                responsive email campaigns, I&apos;m here to help.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center space-x-4 p-4 border border-healthcare-primary/20 rounded-lg hover:bg-healthcare-primary/5 transition-colors group"
              >
                <div className="w-12 h-12 bg-healthcare-primary/10 rounded-full flex items-center justify-center group-hover:bg-healthcare-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-healthcare-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-muted-foreground">{contactInfo.email}</p>
                </div>
              </a>

              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 border border-healthcare-primary/20 rounded-lg hover:bg-healthcare-primary/5 transition-colors group"
              >
                <div className="w-12 h-12 bg-healthcare-primary/10 rounded-full flex items-center justify-center group-hover:bg-healthcare-primary/20 transition-colors">
                  <Linkedin className="w-6 h-6 text-healthcare-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">LinkedIn</h3>
                  <p className="text-muted-foreground">Professional networking</p>
                </div>
              </a>

              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 border border-healthcare-primary/20 rounded-lg hover:bg-healthcare-primary/5 transition-colors group"
              >
                <div className="w-12 h-12 bg-healthcare-primary/10 rounded-full flex items-center justify-center group-hover:bg-healthcare-primary/20 transition-colors">
                  <Github className="w-6 h-6 text-healthcare-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">GitHub</h3>
                  <p className="text-muted-foreground">Code repositories</p>
                </div>
              </a>

              <div className="flex items-center space-x-4 p-4 border border-muted rounded-lg">
                <div className="w-12 h-12 bg-muted/50 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-muted-foreground">{contactInfo.location}</p>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-muted/30 rounded-lg p-6 space-y-4">
              <h3 className="text-lg font-semibold">Current Availability</h3>
              <p className="text-muted-foreground">
                I&apos;m currently available for new projects and consulting opportunities. 
                I typically respond to inquiries within 24 hours.
              </p>
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground">• Healthcare CMS development</p>
                <p className="text-muted-foreground">• Enterprise email template creation</p>
                <p className="text-muted-foreground">• Front-end consulting & code review</p>
                <p className="text-muted-foreground">• Accessibility audits & improvements</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Send a Message</h2>
            
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center space-y-4">
                <CheckCircle className="w-12 h-12 text-green-600 mx-auto" />
                <h3 className="text-lg font-semibold text-green-900">Message Sent!</h3>
                <p className="text-green-700">
                  Thank you for reaching out. I&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-muted rounded-md focus:outline-none focus:ring-2 focus:ring-healthcare-primary focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-muted rounded-md focus:outline-none focus:ring-2 focus:ring-healthcare-primary focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-muted rounded-md focus:outline-none focus:ring-2 focus:ring-healthcare-primary focus:border-transparent"
                    placeholder="Project discussion, collaboration opportunity, etc."
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-3 py-2 border border-muted rounded-md focus:outline-none focus:ring-2 focus:ring-healthcare-primary focus:border-transparent"
                    placeholder="Tell me about your project, timeline, and any specific requirements..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-healthcare-primary text-white rounded-lg hover:bg-healthcare-primary/90 transition-colors"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </button>
                
                <p className="text-xs text-muted-foreground text-center">
                  By sending this message, you agree to receive a response via email. 
                  Your information will not be shared with third parties.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}