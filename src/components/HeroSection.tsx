import { Sparkles, Zap, Shield } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-primary/30 mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">New Releases Available</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
            Discover Your Next
            <span className="block text-glow text-primary mt-2">Epic Adventure</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
            Explore thousands of games across all genres. From action-packed adventures to strategic RPGs, find your perfect game today.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border/50">
              <Zap className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">Instant Downloads</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border/50">
              <Shield className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium text-foreground">Secure Payments</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border/50">
              <Sparkles className="w-5 h-5 text-yellow-500" />
              <span className="text-sm font-medium text-foreground">Exclusive Deals</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
