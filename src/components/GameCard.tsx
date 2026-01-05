import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { Game } from '@/data/games';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { Button } from '@/components/ui/button';

interface GameCardProps {
  game: Game;
  index: number;
}

const GameCard = ({ game, index }: GameCardProps) => {
  const { addToCart, isInCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const inCart = isInCart(game.id);
  const inWishlist = isInWishlist(game.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!inCart) {
      addToCart(game);
    }
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (inWishlist) {
      removeFromWishlist(game.id);
    } else {
      addToWishlist(game);
    }
  };

  return (
    <Link 
      to={`/game/${game.id}`}
      className="group block animate-fade-in"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="relative overflow-hidden rounded-xl bg-card border border-border/50 transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)] hover:-translate-y-2">
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={game.image}
            alt={game.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
          
          {/* Wishlist Button */}
          <button
            onClick={handleWishlistToggle}
            className={`absolute top-3 right-3 p-2 rounded-lg transition-all duration-300 ${
              inWishlist 
                ? 'bg-accent text-accent-foreground' 
                : 'bg-background/80 text-foreground hover:bg-accent hover:text-accent-foreground'
            }`}
          >
            <Heart className={`w-4 h-4 ${inWishlist ? 'fill-current' : ''}`} />
          </button>

          {/* Genre Badge */}
          <span className="absolute top-3 left-3 px-3 py-1 bg-secondary/90 backdrop-blur-sm text-xs font-semibold rounded-full text-foreground border border-border/50">
            {game.genre}
          </span>

          {/* Sale Badge */}
          {game.originalPrice && (
            <span className="absolute bottom-3 left-3 px-3 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full">
              -{Math.round((1 - game.price / game.originalPrice) * 100)}%
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Title */}
          <h3 className="font-display font-semibold text-foreground text-lg mb-2 line-clamp-1 group-hover:text-primary transition-colors">
            {game.title}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-3">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="text-sm font-medium text-foreground">{game.rating}</span>
            <span className="text-xs text-muted-foreground">/5</span>
          </div>

          {/* Price and Cart */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
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

            <Button
              variant={inCart ? "secondary" : "default"}
              size="sm"
              onClick={handleAddToCart}
              disabled={inCart}
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <ShoppingCart className="w-4 h-4" />
              {inCart ? 'In Cart' : 'Add'}
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;
