import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Rocket, CheckCircle, AlertCircle } from "lucide-react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Here you would typically send the email to your backend
      console.log('Newsletter signup:', email);
      
      setStatus('success');
      setMessage('Successfully subscribed! Welcome to the CGU Space Club community.');
      setEmail("");
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <Card className="bg-black border-brand-orange/20 backdrop-blur-sm">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-gradient-to-r from-brand-orange to-brand-red rounded-full flex items-center justify-center">
            <Rocket className="w-8 h-8 text-white" />
          </div>
        </div>
        <CardTitle className="text-2xl font-bold text-white">
          Stay Updated with Our Mission
        </CardTitle>
        <p className="text-white/80 mt-2">
          Get the latest updates on our projects, events, and space exploration breakthroughs
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-brand-orange/60 focus:ring-brand-orange/20"
                disabled={status === 'loading'}
              />
            </div>
            <Button
              type="submit"
              disabled={status === 'loading'}
              className="bg-gradient-to-r from-brand-orange to-brand-red hover:from-brand-light-orange hover:to-brand-dark-red text-white font-semibold px-6"
            >
              {status === 'loading' ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Subscribing...
                </div>
              ) : (
                'Subscribe'
              )}
            </Button>
          </div>
          
          {status !== 'idle' && (
            <div className={`flex items-center gap-2 p-3 rounded-lg ${
              status === 'success' 
                ? 'bg-green-500/20 border border-green-500/30' 
                : 'bg-red-500/20 border border-red-500/30'
            }`}>
              {status === 'success' ? (
                <CheckCircle className="w-5 h-5 text-green-400" />
              ) : (
                <AlertCircle className="w-5 h-5 text-red-400" />
              )}
              <span className={`text-sm ${
                status === 'success' ? 'text-green-400' : 'text-red-400'
              }`}>
                {message}
              </span>
            </div>
          )}
        </form>
        
        <p className="text-xs text-white/60 mt-4 text-center">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </CardContent>
    </Card>
  );
}
