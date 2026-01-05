import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Trash2, ArrowRight } from 'lucide-react';
import { useWishlist } from '@/context/WishlistContext';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

const Wishlist = () => {
  const { items, removeFromWishlist } = useWishlist();
  const { addToCart, isInCart } = useCart();

  const handleAddToCart = (game: typeof items[0]) => {
    addToCart(game);
    toast({
      title: "Added to Cart",
      description: `${game.title} has been added to your cart.`,
    });
  };

  const handleRemove = (gameId: string, title: string) => {
    removeFromWishlist(gameId);
    toast({
      title: "Removed from Wishlist",
      description: `${title} has been removed from your wishlist.`,
    });
  };

  if (items.length === 0) {
    return (
      <main className="min-h-screen pt-24 container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center py-16">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-secondary flex items-center justify-center">
            <Heart className="w-10 h-10 text-muted-foreground" />
          </div>
          <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Your Wishlist is Empty
          </h1>
          <p className="text-muted-foreground mb-8">
            Save games you're interested in to your wishlist and never miss a deal.
          </p>
          <Link to="/">
            <Button variant="gaming" size="lg">
              Browse Games
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-24 container mx-auto px-4 pb-16">
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
          My Wishlist
        </h1>
        <p className="text-muted-foreground">
          {items.length} {items.length === 1 ? 'game' : 'games'} saved
        </p>
      </div>

      {/* Wishlist Items */}
      <div className="grid gap-4">
        {items.map((game, index) => {
          const inCart = isInCart(game.id);
          
          return (
            <div 
              key={game.id}
              className="glass rounded-xl border border-border/50 overflow-hidden animate-fade-in hover:border-primary/30 transition-colors"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex flex-col sm:flex-row">
                {/* Image */}
                <Link to={`/game/${game.id}`} className="sm:w-48 flex-shrink-0">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-40 sm:h-full object-cover hover:opacity-80 transition-opacity"
                  />
                </Link>

                {/* Content */}
                <div className="flex-1 p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex-1">
                    <Link to={`/game/${game.id}`}>
                      <h3 className="font-display text-lg font-semibold text-foreground hover:text-primary transition-colors mb-1">
                        {game.title}
                      </h3>
                    </Link>
                    <p className="text-sm text-muted-foreground mb-2">{game.genre}</p>
                    <div className="flex items-baseline gap-2">
                      {game.price === 0 ? (
                        <span className="text-lg font-bold text-primary">Free</span>
                      ) : (
                        <>
                          <span className="text-lg font-bold text-foreground">${game.price.toFixed(2)}</span>
                          {game.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through">
                              ${game.originalPrice.toFixed(2)}
                            </span>
                          )}
                        </>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    <Button
                      variant={inCart ? "secondary" : "default"}
                      onClick={() => handleAddToCart(game)}
                      disabled={inCart}
                    >
                      <ShoppingCart className="w-4 h-4" />
                      {inCart ? 'In Cart' : 'Add to Cart'}
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleRemove(game.id, game.title)}
                      className="text-muted-foreground hover:text-destructive"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Wishlist;
