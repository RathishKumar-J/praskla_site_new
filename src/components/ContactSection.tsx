import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Mail, ArrowRight, CheckCircle2, MessageSquare, PhoneCall, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

type FormType = 'none' | 'book-call' | 'email-us';

export default function ContactSection() {
  const [activeForm, setActiveForm] = useState<FormType>('none');
  const [emailPage, setEmailPage] = useState(1);
  const [userType, setUserType] = useState<'client' | 'job-seeker' | null>(null);

  const resetForms = () => {
    setActiveForm('none');
    setEmailPage(1);
    setUserType(null);
  };

  return (
    <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-black">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 100, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-purple-600/10 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
            x: [0, -100, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-blue-600/10 rounded-full blur-[120px]" 
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="liquid-glass-card grid md:grid-cols-[42%_58%] min-h-[700px] rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_32px_120px_rgba(0,0,0,0.5)] relative"
        >
          {/* Left Side: Interactive Column */}
          <div className="p-12 md:p-16 lg:p-20 flex flex-col border-b md:border-b-0 md:border-r border-white/10 bg-white/[0.03] backdrop-blur-3xl relative">
            <div className="relative z-10">
              <div className="mb-16">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-2 text-purple-400 font-bold tracking-[0.2em] uppercase text-xs mb-6"
                >
                  <div className="w-8 h-[1px] bg-purple-400/50" />
                  Connect
                </motion.div>
                <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Touch</span></h2>
                <p className="text-gray-400 text-xl leading-relaxed max-w-sm">Let's collaborate and bring your ideas to life</p>
              </div>

              <div className="relative">
                <AnimatePresence mode="wait">
                  {activeForm === 'none' ? (
                    <motion.div 
                      key="buttons"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                      className="space-y-5"
                    >
                      <Button 
                        onClick={() => setActiveForm('book-call')}
                        className="group w-full h-20 rounded-2xl bg-white text-black hover:bg-white/90 text-xl font-bold transition-all duration-500 shadow-xl shadow-white/5"
                      >
                        <span className="flex items-center justify-center gap-3">
                          <PhoneCall className="w-6 h-6" />
                          Book a call
                        </span>
                        <ArrowRight className="ml-auto w-6 h-6 -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                      </Button>
                      <Button 
                        onClick={() => setActiveForm('email-us')}
                        variant="outline"
                        className="group w-full h-20 rounded-2xl border-white/10 bg-white/[0.02] text-white hover:bg-white/5 hover:border-white/30 text-xl font-bold transition-all duration-500"
                      >
                        <span className="flex items-center justify-center gap-3">
                          <Mail className="w-6 h-6" />
                          Email us
                        </span>
                        <ArrowRight className="ml-auto w-6 h-6 -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                      </Button>
                    </motion.div>
                  ) : activeForm === 'book-call' ? (
                    <motion.div 
                      key="book-call-form"
                      initial={{ opacity: 0, scale: 0.9, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                      className="bg-white/[0.05] border border-white/10 p-8 rounded-[2rem] shadow-2xl backdrop-blur-2xl"
                    >
                      <div className="flex justify-between items-center mb-8">
                        <div>
                          <h3 className="text-2xl font-bold text-white">Book a Call</h3>
                          <div className="h-1 w-12 bg-purple-500 mt-2 rounded-full" />
                        </div>
                        <button onClick={resetForms} className="p-2 bg-white/5 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-all">
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                      
                      <div className="space-y-8 mb-10">
                        <div className="space-y-6">
                          <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                            <div className="p-3 bg-purple-500/10 rounded-xl">
                              <Globe className="w-6 h-6 text-purple-400" />
                            </div>
                            <div>
                              <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">India Office</p>
                              <p className="text-white text-lg font-semibold tracking-tight">+91 95913 10740</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                            <div className="p-3 bg-blue-500/10 rounded-xl">
                              <Globe className="w-6 h-6 text-blue-400" />
                            </div>
                            <div>
                              <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">German Office</p>
                              <p className="text-white text-lg font-semibold tracking-tight">+49 1515 6840 689</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <p className="text-gray-400 text-sm leading-relaxed">Let us know what you need to discuss briefly. We'll get back to you shortly.</p>
                          <Textarea 
                            placeholder="Brief description of what you'd like to discuss..." 
                            className="bg-white/5 border-white/10 rounded-2xl min-h-[120px] focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/10 transition-all placeholder:text-gray-600 p-4"
                          />
                        </div>
                      </div>
                      
                      <Button className="w-full h-16 rounded-2xl bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white font-bold text-lg shadow-lg shadow-purple-900/30 transition-all active:scale-[0.98]">
                        Submit Request
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="email-us-form"
                      initial={{ opacity: 0, scale: 0.9, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                      className="bg-white/[0.05] border border-white/10 p-8 rounded-[2rem] shadow-2xl backdrop-blur-2xl min-h-[480px] flex flex-col"
                    >
                      <div className="flex justify-between items-center mb-8">
                        <div>
                          <h3 className="text-2xl font-bold text-white">Get In Touch</h3>
                          <div className="h-1 w-12 bg-blue-500 mt-2 rounded-full" />
                        </div>
                        <button onClick={resetForms} className="p-2 bg-white/5 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-all">
                          <X className="w-5 h-5" />
                        </button>
                      </div>

                      <div className="flex-1 flex flex-col">
                        <div className="flex items-center gap-2 mb-8">
                          {[1, 2, 3].map(step => (
                            <div key={step} className={cn(
                              "h-1.5 rounded-full transition-all duration-500",
                              emailPage === step ? "w-12 bg-blue-500" : "w-6 bg-white/10",
                              emailPage > step && "bg-blue-500/50"
                            )} />
                          ))}
                          <span className="ml-auto text-blue-400 text-xs font-bold uppercase tracking-widest">Step {emailPage} of 3</span>
                        </div>
                        
                        <AnimatePresence mode="wait">
                          {emailPage === 1 && (
                            <motion.div 
                              key="p1"
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -20 }}
                              className="space-y-5 flex-1"
                            >
                              <div className="space-y-3">
                                <Label className="text-gray-300 ml-1">Your Name *</Label>
                                <Input placeholder="John Doe" className="h-14 bg-white/5 border-white/10 rounded-2xl focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all px-4" />
                              </div>
                              <div className="space-y-3">
                                <Label className="text-gray-300 ml-1">Email Address *</Label>
                                <Input placeholder="john@example.com" type="email" className="h-14 bg-white/5 border-white/10 rounded-2xl focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all px-4" />
                              </div>
                              <div className="flex gap-4 pt-6">
                                <Button onClick={resetForms} variant="ghost" className="flex-1 h-14 rounded-2xl text-gray-400 hover:bg-white/5">Cancel</Button>
                                <Button onClick={() => setEmailPage(2)} className="flex-1 h-14 rounded-2xl bg-white text-black hover:bg-white/90 font-bold shadow-lg shadow-white/5">Next</Button>
                              </div>
                            </motion.div>
                          )}

                          {emailPage === 2 && (
                            <motion.div 
                              key="p2"
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -20 }}
                              className="space-y-6 flex-1"
                            >
                              <p className="text-white font-semibold text-lg mb-4">I am a: *</p>
                              <div className="space-y-4">
                                <button 
                                  onClick={() => setUserType('client')}
                                  className={cn(
                                    "w-full p-6 rounded-2xl border text-left transition-all duration-300 group relative overflow-hidden",
                                    userType === 'client' ? "border-blue-500 bg-blue-500/10" : "border-white/10 bg-white/[0.02] hover:border-white/30"
                                  )}
                                >
                                  <div className="relative z-10">
                                    <p className={cn("text-lg font-bold mb-1 transition-colors", userType === 'client' ? "text-blue-400" : "text-white")}>Client / Business</p>
                                    <p className="text-gray-400 text-sm">I represent a company interested in your services</p>
                                  </div>
                                  {userType === 'client' && <motion.div layoutId="selection-glow" className="absolute inset-0 bg-blue-500/5 blur-xl" />}
                                </button>
                                <button 
                                  onClick={() => setUserType('job-seeker')}
                                  className={cn(
                                    "w-full p-6 rounded-2xl border text-left transition-all duration-300 group relative overflow-hidden",
                                    userType === 'job-seeker' ? "border-blue-500 bg-blue-500/10" : "border-white/10 bg-white/[0.02] hover:border-white/30"
                                  )}
                                >
                                  <div className="relative z-10">
                                    <p className={cn("text-lg font-bold mb-1 transition-colors", userType === 'job-seeker' ? "text-blue-400" : "text-white")}>Job Seeker</p>
                                    <p className="text-gray-400 text-sm">I'm interested in working with your company</p>
                                  </div>
                                  {userType === 'job-seeker' && <motion.div layoutId="selection-glow" className="absolute inset-0 bg-blue-500/5 blur-xl" />}
                                </button>
                              </div>
                              <div className="flex gap-4 pt-6">
                                <Button onClick={() => setEmailPage(1)} variant="ghost" className="flex-1 h-14 rounded-2xl text-gray-400 hover:bg-white/5">Back</Button>
                                <Button 
                                  disabled={!userType}
                                  onClick={() => setEmailPage(3)} 
                                  className="flex-1 h-14 rounded-2xl bg-white text-black hover:bg-white/90 font-bold disabled:opacity-30 disabled:grayscale"
                                >
                                  Next
                                </Button>
                              </div>
                            </motion.div>
                          )}

                          {emailPage === 3 && userType === 'client' && (
                            <motion.div 
                              key="p3c"
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -20 }}
                              className="space-y-4 flex-1"
                            >
                              <div className="space-y-2">
                                <Label className="text-gray-300 ml-1">Company Name *</Label>
                                <Input placeholder="Your company name" className="h-12 bg-white/5 border-white/10 rounded-xl focus:border-blue-500/50 px-4" />
                              </div>
                              <div className="space-y-2">
                                <Label className="text-gray-300 ml-1">Your Role *</Label>
                                <Input placeholder="e.g., CEO, Marketing Manager" className="h-12 bg-white/5 border-white/10 rounded-xl focus:border-blue-500/50 px-4" />
                              </div>
                              <div className="space-y-2">
                                <Label className="text-gray-300 ml-1">Message *</Label>
                                <Textarea placeholder="Tell us about your project requirements..." className="bg-white/5 border-white/10 rounded-xl min-h-[100px] focus:border-blue-500/50 p-4" />
                              </div>
                              <div className="flex gap-4 pt-4">
                                <Button onClick={() => setEmailPage(2)} variant="ghost" className="flex-1 h-14 rounded-2xl text-gray-400">Back</Button>
                                <Button className="flex-[2] h-14 rounded-2xl bg-blue-600 text-white hover:bg-blue-500 font-bold shadow-lg shadow-blue-900/30">Send Message</Button>
                              </div>
                            </motion.div>
                          )}

                          {emailPage === 3 && userType === 'job-seeker' && (
                            <motion.div 
                              key="p3j"
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -20 }}
                              className="space-y-6 flex-1"
                            >
                              <div className="space-y-3">
                                <Label className="text-gray-300 ml-1">Position Type *</Label>
                                <div className="grid grid-cols-2 gap-3">
                                  <button className="h-14 rounded-2xl border border-white/10 bg-white/5 hover:border-blue-500/50 hover:bg-blue-500/5 text-white transition-all font-semibold">Internship</button>
                                  <button className="h-14 rounded-2xl border border-white/10 bg-white/5 hover:border-blue-500/50 hover:bg-blue-500/5 text-white transition-all font-semibold">Full-time</button>
                                </div>
                              </div>
                              <div className="space-y-3">
                                <Label className="text-gray-300 ml-1">Message *</Label>
                                <Textarea placeholder="Tell us about your skills and why you want to join our team..." className="bg-white/5 border-white/10 rounded-2xl min-h-[140px] focus:border-blue-500/50 p-4" />
                              </div>
                              <div className="flex gap-4 pt-4">
                                <Button onClick={() => setEmailPage(2)} variant="ghost" className="flex-1 h-14 rounded-2xl text-gray-400">Back</Button>
                                <Button className="flex-[2] h-14 rounded-2xl bg-blue-600 text-white hover:bg-blue-500 font-bold shadow-lg shadow-blue-900/30">Send Message</Button>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Right Side: Quick Message Column */}
          <div className="p-12 md:p-16 lg:p-20 bg-white/[0.01] backdrop-blur-2xl flex flex-col">
            <div className="max-w-md mx-auto w-full">
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl shadow-lg shadow-purple-500/20">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white tracking-tight">Quick Message</h3>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed">Send us a quick message and we'll get back to you soon.</p>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-3 group">
                  <Label htmlFor="name" className="text-gray-400 ml-1 transition-colors group-focus-within:text-purple-400">Name</Label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    className="h-16 bg-white/[0.03] border-white/10 rounded-2xl focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/10 text-white placeholder:text-gray-700 transition-all px-5"
                  />
                </div>
                
                <div className="space-y-3 group">
                  <Label htmlFor="email" className="text-gray-400 ml-1 transition-colors group-focus-within:text-purple-400">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your@email.com" 
                    className="h-16 bg-white/[0.03] border-white/10 rounded-2xl focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/10 text-white placeholder:text-gray-700 transition-all px-5"
                  />
                </div>

                <div className="space-y-3 group">
                  <Label htmlFor="message" className="text-gray-400 ml-1 transition-colors group-focus-within:text-purple-400">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your project..." 
                    className="min-h-[180px] bg-white/[0.03] border-white/10 rounded-2xl focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/10 text-white placeholder:text-gray-700 transition-all px-5 py-4 resize-none"
                  />
                </div>

                <motion.div
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className="w-full h-20 rounded-[1.25rem] bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600 hover:opacity-90 text-white font-extrabold text-xl shadow-2xl shadow-purple-900/30 transition-all duration-500 border border-white/10">
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
