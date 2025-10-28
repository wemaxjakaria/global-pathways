"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react"
import { useRef, useState } from "react"

export function Contact() {
  const ref = useRef(null)
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setSubmitMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setSubmitMessage('Thank you! Your message has been sent successfully. We will get back to you within 24 hours.')
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        })
      } else {
        setSubmitStatus('error')
        setSubmitMessage(data.error || 'Failed to send message. Please try again.')
      }
    } catch (error) {
      setSubmitStatus('error')
      setSubmitMessage('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-accent/30 to-primary/20 z-10" />
        <img src="/modern-office-consultation-room-with-desk-and-comf.jpg" alt="Consultation office" className="w-full h-full object-cover" />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Get in touch with us today for a free consultation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <Card className="h-full border-2 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Send us a message</h3>
                
                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <p className="text-green-800">{submitMessage}</p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <p className="text-red-800">{submitMessage}</p>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">First Name *</label>
                      <Input 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="John" 
                        className="bg-background" 
                        required 
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Last Name *</label>
                      <Input 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Doe" 
                        className="bg-background" 
                        required 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Email *</label>
                    <Input 
                      name="email"
                      type="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com" 
                      className="bg-background" 
                      required 
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Phone</label>
                    <Input 
                      name="phone"
                      type="tel" 
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 000-0000" 
                      className="bg-background" 
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Message *</label>
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your education goals..." 
                      className="bg-background min-h-32" 
                      required 
                    />
                  </div>
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-auto bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-6">
                <Card className="border-2 hover:border-primary/50 transition-colors bg-white/90 backdrop-blur-sm">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">Phone</div>
                      <div className="text-muted-foreground">01858-149958</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary/50 transition-colors bg-white/90 backdrop-blur-sm">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">Email</div>
                      <div className="text-muted-foreground">globalpathwaysinfobd@gmail.com</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary/50 transition-colors bg-white/90 backdrop-blur-sm">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">Office</div>
                      <div className="text-muted-foreground">7th floor-563,ECB Chottor.</div>
                      <div className="text-muted-foreground">Dhaka Cantonment ,Dhaka-1206.</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Card className="bg-primary/10 border-2 border-primary/30 backdrop-blur-md">
              <CardContent className="p-8 text-center">
                <h4 className="text-xl font-bold text-foreground mb-2">Office Hours</h4>
                <p className="text-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-foreground">Saturday: 10:00 AM - 4:00 PM</p>
                <p className="text-foreground">Sunday: Closed</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
