
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast'; // Corrected import path

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', company: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Form data submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. We'll be in touch soon.",
      variant: "default", // 'default' should provide good visual feedback
    });
    setFormData({ name: '', company: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-xl">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
        <Input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="focus:ring-brand-orange focus:border-brand-orange"/>
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
        <Input type="text" name="company" id="company" value={formData.company} onChange={handleChange} required className="focus:ring-brand-orange focus:border-brand-orange"/>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
        <Input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="focus:ring-brand-orange focus:border-brand-orange"/>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Brief message about your needs</label>
        <Textarea name="message" id="message" rows={4} value={formData.message} onChange={handleChange} required  className="focus:ring-brand-orange focus:border-brand-orange"/>
      </div>
      <div>
        <Button type="submit" className="w-full bg-brand-orange text-brand-black hover:bg-opacity-90 py-3 text-lg" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
