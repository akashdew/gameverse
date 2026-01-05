import { Link } from 'react-router-dom';
import { ShoppingCart, Trash2, Plus, Minus, ArrowRight, CreditCard } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  const handleRemove = (gameId: string, title: string) => {
    removeFromCart(gameId);
    toast({
      title: "Removed from Cart",
      description: `${title} has been removed from your cart.`,
    });
  };

  const handleCheckout = () => {
    toast({
      title: "Order Placed!",
      description: "Thank you for your purchase. Your games are now available.",
    });
    clearCart();
  };

  const subtotal = getCartTotal();
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  if (items.length === 0) {
    return (
      <main className="min-h-screen pt-24 container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center py-16">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-secondary flex items-center justify-center">
            <ShoppingCart className="w-10 h-10 text-muted-foreground" />
          </div>
          <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Your Cart is Empty
          </h1>
          <p className="text-muted-foreground mb-8">
            Add some games to your cart and start your gaming adventure.
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
          Shopping Cart
        </h1>
        <p className="text-muted-foreground">
          {items.length} {items.length === 1 ? 'item' : 'items'} in your cart
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item, index) => (
            <div 
              key={item.game.id}
              className="glass rounded-xl border border-border/50 overflow-hidden animate-fade-in hover:border-primary/30 transition-colors"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex flex-col sm:flex-row">
                {/* Image */}
                <Link to={`/game/${item.game.id}`} className="sm:w-40 flex-shrink-0">
                  <img
                    src={item.game.image}
                    alt={item.game.title}
                    className="w-full h-32 sm:h-full object-cover hover:opacity-80 transition-opacity"
                  />
                </Link>

                {/* Content */}
                <div className="flex-1 p-4 sm:p-5">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div>
                      <Link to={`/game/${item.game.id}`}>
                        <h3 className="font-display text-lg font-semibold text-foreground hover:text-primary transition-colors mb-1">
                          {item.game.title}
                        </h3>
                      </Link>
                      <p className="text-sm text-muted-foreground">{item.game.genre}</p>
                    </div>

                    <div className="text-right">
                      <p className="text-lg font-bold text-foreground">
                        ${(item.game.price * item.quantity).toFixed(2)}
                      </p>
                      {item.quantity > 1 && (
                        <p className="text-sm text-muted-foreground">
                          ${item.game.price.toFixed(2)} each
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Quantity & Remove */}
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="secondary"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.game.id, item.quantity - 1)}
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="w-10 text-center font-medium text-foreground">
                        {item.quantity}
                      </span>
                      <Button
                        variant="secondary"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.game.id, item.quantity + 1)}
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRemove(item.game.id, item.game.title)}
                      className="text-muted-foreground hover:text-destructive"
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 glass rounded-2xl p-6 border border-border/50 glow-border">
            <h2 className="font-display text-xl font-semibold text-foreground mb-6">
              Order Summary
            </h2>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal</span>
                <span className="text-foreground">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Tax (10%)</span>
                <span className="text-foreground">${tax.toFixed(2)}</span>
              </div>
              <div className="h-px bg-border/50" />
              <div className="flex justify-between text-lg font-bold">
                <span className="text-foreground">Total</span>
                <span className="text-primary">${total.toFixed(2)}</span>
              </div>
            </div>

            <Button 
              variant="gaming" 
              size="lg" 
              className="w-full"
              onClick={handleCheckout}
            >
              <CreditCard className="w-5 h-5" />
              Proceed to Checkout
            </Button>

            <p className="text-xs text-muted-foreground text-center mt-4">
              Secure checkout powered by GameVerse
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;
