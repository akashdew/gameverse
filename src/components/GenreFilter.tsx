import { genres, Genre } from '@/data/games';
import { Gamepad2, Swords, Sparkles, Trophy, Car } from 'lucide-react';

interface GenreFilterProps {
  selectedGenre: Genre;
  onGenreChange: (genre: Genre) => void;
}

const genreIcons: Record<Genre, React.ReactNode> = {
  'All': <Gamepad2 className="w-4 h-4" />,
  'Action': <Swords className="w-4 h-4" />,
  'RPG': <Sparkles className="w-4 h-4" />,
  'Sports': <Trophy className="w-4 h-4" />,
  'Racing': <Car className="w-4 h-4" />,
};

const GenreFilter = ({ selectedGenre, onGenreChange }: GenreFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {genres.map((genre) => (
        <button
          key={genre}
          onClick={() => onGenreChange(genre)}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 ${
            selectedGenre === genre
              ? 'bg-primary text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.4)]'
              : 'bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground border border-border/50 hover:border-primary/30'
          }`}
        >
          {genreIcons[genre]}
          {genre}
        </button>
      ))}
    </div>
  );
};

export default GenreFilter;
