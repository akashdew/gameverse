import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, ShoppingCart, Heart, Calendar, Building2, Monitor, Tag } from 'lucide-react';
import { games } from '@/data/games';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

const GameDetails = () => {
  const { id } = useParams<{ id: string }>();
  const game = games.find(g => g.id === id);
  
  const { addToCart, isInCart } = useCart();
  const { addToWishlist, isInWishlist } = useWishlist();

  if (!game) {
    return (
      <main className="min-h-screen pt-24 container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-2xl font-display font-bold text-foreground mb-4">Game Not Found</h1>
          <Link to="/">
            <Button variant="default">
              <ArrowLeft className="w-4 h-4" />
              Back to Store
            </Button>
          </Link>
        </div>
      </main>
    );
  }

  const inCart = isInCart(game.id);
  const inWishlist = isInWishlist(game.id);

  const handleAddToCart = () => {
    addToCart(game);
    toast({
      title: "Added to Cart",
      description: `${game.title} has been added to your cart.`,
    });
  };

  const handleAddToWishlist = () => {
    addToWishlist(game);
    toast({
      title: "Added to Wishlist",
      description: `${game.title} has been added to your wishlist.`,
    });
  };

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Image */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <img
          src={game.image}
          alt={game.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 pb-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Store
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Title & Rating */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20">
                  {game.genre}
                </span>
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <span className="font-semibold text-foreground">{game.rating}</span>
                </div>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                {game.title}
              </h1>
            </div>

            {/* Description */}
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {game.description}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {game.tags.map(tag => (
                <span 
                  key={tag}
                  className="px-3 py-1.5 bg-secondary text-muted-foreground text-sm rounded-lg border border-border/50"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Screenshots */}
            {game.screenshots.length > 0 && (
              <div className="space-y-4">
                <h2 className="font-display text-xl font-semibold text-foreground">Screenshots</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {game.screenshots.map((screenshot, index) => (
                    <div key={index} className="rounded-xl overflow-hidden border border-border/50">
                      <img
                        src={screenshot}
                        alt={`${game.title} screenshot ${index + 1}`}
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Purchase Card */}
              <div className="glass rounded-2xl p-6 border border-border/50 glow-border">
                {/* Price */}
                <div className="mb-6">
                  {game.price === 0 ? (
                    <span className="text-3xl font-bold text-primary">Free to Play</span>
                  ) : (
                    <div className="flex items-baseline gap-3">
                      <span className="text-3xl font-bold text-foreground">${game.price.toFixed(2)}</span>
                      {game.originalPrice && (
                        <span className="text-lg text-muted-foreground line-through">
                          ${game.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Buttons */}
                <div className="space-y-3">
                  <Button 
                    variant="gaming" 
                    size="lg" 
                    className="w-full"
                    onClick={handleAddToCart}
                    disabled={inCart}
                  >
                    <ShoppingCart className="w-5 h-5" />
                    {inCart ? 'Already in Cart' : 'Add to Cart'}
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full"
                    onClick={handleAddToWishlist}
                    disabled={inWishlist}
                  >
                    <Heart className={`w-5 h-5 ${inWishlist ? 'fill-accent text-accent' : ''}`} />
                    {inWishlist ? 'In Wishlist' : 'Add to Wishlist'}
                  </Button>
                </div>
              </div>

              {/* Game Info */}
              <div className="glass rounded-2xl p-6 border border-border/50 space-y-4">
                <h3 className="font-display font-semibold text-foreground">Game Info</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Building2 className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Developer:</span>
                    <span className="text-foreground">{game.developer}</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-sm">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Release:</span>
                    <span className="text-foreground">{new Date(game.releaseDate).toLocaleDateString()}</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-sm">
                    <Tag className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Genre:</span>
                    <span className="text-foreground">{game.genre}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-border/50">
                  <div className="flex items-center gap-2 text-sm mb-2">
                    <Monitor className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Platforms:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {game.platforms.map(platform => (
                      <span 
                        key={platform}
                        className="px-2 py-1 bg-secondary text-xs text-foreground rounded"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GameDetails;
