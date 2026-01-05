export interface Game {
  id: string;
  title: string;
  genre: string;
  rating: number;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  developer: string;
  releaseDate: string;
  platforms: string[];
  tags: string[];
  screenshots: string[];
}

export const games: Game[] = [
  {
    id: "1",
    title: "Cyber Legends 2077",
    genre: "Action",
    rating: 4.8,
    price: 59.99,
    originalPrice: 79.99,
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop",
    description: "Immerse yourself in a dystopian future where humanity and technology collide. Navigate through neon-lit streets, engage in intense combat, and uncover a conspiracy that threatens the very fabric of reality.",
    developer: "NeonForge Studios",
    releaseDate: "2024-03-15",
    platforms: ["PC", "PlayStation 5", "Xbox Series X"],
    tags: ["Open World", "Cyberpunk", "Story Rich"],
    screenshots: [
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=450&fit=crop",
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&h=450&fit=crop"
    ]
  },
  {
    id: "2",
    title: "Dragon's Realm: Odyssey",
    genre: "RPG",
    rating: 4.9,
    price: 49.99,
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&h=400&fit=crop",
    description: "Embark on an epic journey through mystical lands filled with ancient dragons, powerful magic, and legendary treasures. Your choices shape the fate of kingdoms.",
    developer: "Mythic Arts",
    releaseDate: "2024-01-20",
    platforms: ["PC", "PlayStation 5", "Xbox Series X", "Nintendo Switch"],
    tags: ["Fantasy", "Open World", "Character Customization"],
    screenshots: [
      "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=800&h=450&fit=crop"
    ]
  },
  {
    id: "3",
    title: "Speed Rivals",
    genre: "Racing",
    rating: 4.5,
    price: 39.99,
    originalPrice: 49.99,
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=600&h=400&fit=crop",
    description: "Feel the adrenaline rush as you race through stunning environments in the most realistic racing simulation ever created. Customize your dream cars and dominate the tracks.",
    developer: "Velocity Games",
    releaseDate: "2024-02-28",
    platforms: ["PC", "PlayStation 5", "Xbox Series X"],
    tags: ["Simulation", "Multiplayer", "Competitive"],
    screenshots: []
  },
  {
    id: "4",
    title: "Champions League 2024",
    genre: "Sports",
    rating: 4.3,
    price: 54.99,
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&h=400&fit=crop",
    description: "Experience the thrill of the world's most prestigious football competition. Manage your team, train players, and lead them to glory on the international stage.",
    developer: "SportMax Interactive",
    releaseDate: "2024-04-10",
    platforms: ["PC", "PlayStation 5", "Xbox Series X", "Nintendo Switch"],
    tags: ["Football", "Management", "Multiplayer"],
    screenshots: []
  },
  {
    id: "5",
    title: "Shadow Assassin",
    genre: "Action",
    rating: 4.7,
    price: 44.99,
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop",
    description: "Master the art of stealth and become the ultimate assassin. Navigate through ancient temples, modern cities, and uncover the secrets of a hidden order.",
    developer: "Stealth Works",
    releaseDate: "2023-11-15",
    platforms: ["PC", "PlayStation 5", "Xbox Series X"],
    tags: ["Stealth", "Action-Adventure", "Single Player"],
    screenshots: []
  },
  {
    id: "6",
    title: "Mystic Quest Online",
    genre: "RPG",
    rating: 4.6,
    price: 0,
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b2b0a?w=600&h=400&fit=crop",
    description: "Join millions of players in this free-to-play MMORPG. Explore vast lands, defeat powerful bosses, and forge alliances with players from around the world.",
    developer: "Galaxy Games",
    releaseDate: "2023-08-01",
    platforms: ["PC"],
    tags: ["MMO", "Free to Play", "Co-op"],
    screenshots: []
  },
  {
    id: "7",
    title: "Turbo Drift Championship",
    genre: "Racing",
    rating: 4.4,
    price: 29.99,
    image: "https://images.unsplash.com/photo-1493238792000-8113da705763?w=600&h=400&fit=crop",
    description: "Master the art of drifting in this high-octane racing experience. Compete in underground racing circuits and become the drift king.",
    developer: "Nitro Studios",
    releaseDate: "2024-01-05",
    platforms: ["PC", "PlayStation 5", "Xbox Series X"],
    tags: ["Arcade", "Multiplayer", "Drift"],
    screenshots: []
  },
  {
    id: "8",
    title: "Basketball Pro 2024",
    genre: "Sports",
    rating: 4.2,
    price: 49.99,
    originalPrice: 59.99,
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&h=400&fit=crop",
    description: "Take to the court in the most authentic basketball simulation. Build your legacy, dominate the league, and become a basketball legend.",
    developer: "Hoops Entertainment",
    releaseDate: "2024-03-01",
    platforms: ["PC", "PlayStation 5", "Xbox Series X", "Nintendo Switch"],
    tags: ["Basketball", "Career Mode", "Multiplayer"],
    screenshots: []
  },
  {
    id: "9",
    title: "Starship Commander",
    genre: "Action",
    rating: 4.8,
    price: 39.99,
    image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=600&h=400&fit=crop",
    description: "Command your fleet across the galaxy in this epic space adventure. Engage in tactical battles, explore uncharted planets, and save humanity from extinction.",
    developer: "Cosmos Interactive",
    releaseDate: "2024-02-14",
    platforms: ["PC", "PlayStation 5"],
    tags: ["Space", "Strategy", "Sci-Fi"],
    screenshots: []
  },
  {
    id: "10",
    title: "Legend of the Ancients",
    genre: "RPG",
    rating: 4.9,
    price: 59.99,
    image: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=600&h=400&fit=crop",
    description: "Discover the secrets of a forgotten civilization in this breathtaking action RPG. Wield ancient powers, defeat mythical creatures, and restore balance to the world.",
    developer: "Ancient Studios",
    releaseDate: "2024-04-20",
    platforms: ["PC", "PlayStation 5", "Xbox Series X"],
    tags: ["Action RPG", "Open World", "Mythology"],
    screenshots: []
  },
  {
    id: "11",
    title: "Street Racer X",
    genre: "Racing",
    rating: 4.3,
    price: 34.99,
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&h=400&fit=crop",
    description: "Own the streets in this intense urban racing game. Customize your ride, build your reputation, and become the ultimate street racing champion.",
    developer: "Urban Speed Studios",
    releaseDate: "2023-12-10",
    platforms: ["PC", "PlayStation 5", "Xbox Series X"],
    tags: ["Street Racing", "Customization", "Underground"],
    screenshots: []
  },
  {
    id: "12",
    title: "Tennis Masters Tour",
    genre: "Sports",
    rating: 4.1,
    price: 44.99,
    image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=600&h=400&fit=crop",
    description: "Compete in the world's most prestigious tennis tournaments. Perfect your skills, unlock legendary players, and claim the grand slam.",
    developer: "Ace Sports",
    releaseDate: "2024-05-01",
    platforms: ["PC", "PlayStation 5", "Xbox Series X", "Nintendo Switch"],
    tags: ["Tennis", "Career", "Realistic"],
    screenshots: []
  }
];

export const genres = ["All", "Action", "RPG", "Sports", "Racing"] as const;
export type Genre = typeof genres[number];
