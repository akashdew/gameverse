import { useState, useMemo } from 'react';
import { games, Genre } from '@/data/games';
import GameCard from '@/components/GameCard';
import GenreFilter from '@/components/GenreFilter';
import HeroSection from '@/components/HeroSection';

const Index = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre>('All');

  const filteredGames = useMemo(() => {
    if (selectedGenre === 'All') {
      return games;
    }
    return games.filter(game => game.genre === selectedGenre);
  }, [selectedGenre]);

  return (
    <main className="min-h-screen pt-16">
      <HeroSection />

      <section className="container mx-auto px-4 pb-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
              Browse Games
            </h2>
            <p className="text-muted-foreground">
              {filteredGames.length} games available
            </p>
          </div>
          <GenreFilter selectedGenre={selectedGenre} onGenreChange={setSelectedGenre} />
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredGames.map((game, index) => (
            <GameCard key={game.id} game={game} index={index} />
          ))}
        </div>

        {filteredGames.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No games found in this category.</p>
          </div>
        )}
      </section>
    </main>
  );
};

export default Index;
