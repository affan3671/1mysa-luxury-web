export interface CategoryVideo {
  id: string;
  title: string;
  titleHi: string;
  thumbnail: string;
  platform: 'instagram' | 'youtube';
  url: string;
  embedUrl?: string;
}

export interface CategoryVideos {
  category: 'coffee' | 'kunafa' | 'baklava';
  videos: CategoryVideo[];
}

// Add your Instagram Reels and YouTube video links here
export const categoryVideos: CategoryVideos[] = [
  {
    category: 'kunafa',
    videos: [
      {
        id: 'kunafa-ig-1',
        title: 'Kunafa Cheese Pull',
        titleHi: 'कुनाफा चीज़ पुल',
        thumbnail: '/images/kunafa/lotus-biscoff-kunafa.jpg',
        platform: 'instagram',
        url: 'https://www.instagram.com/reel/YOUR_REEL_ID/',
        embedUrl: 'https://www.instagram.com/reel/YOUR_REEL_ID/embed/',
      },
      {
        id: 'kunafa-ig-2',
        title: 'Making Fresh Kunafa',
        titleHi: 'ताज़ा कुनाफा बनाना',
        thumbnail: '/images/kunafa/honey-syrup-kunafa.jpg',
        platform: 'instagram',
        url: 'https://www.instagram.com/reel/YOUR_REEL_ID_2/',
        embedUrl: 'https://www.instagram.com/reel/YOUR_REEL_ID_2/embed/',
      },
      {
        id: 'kunafa-yt-1',
        title: 'Complete Kunafa Recipe',
        titleHi: 'पूर्ण कुनाफा रेसिपी',
        thumbnail: '/images/kunafa/pista_kunafa.jpg',
        platform: 'youtube',
        url: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID',
        embedUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID',
      },
    ],
  },
  {
    category: 'coffee',
    videos: [
      {
        id: 'coffee-ig-1',
        title: 'Turkish Coffee Art',
        titleHi: 'तुर्की कॉफी कला',
        thumbnail: '/images/coffee/Sand_Caffeine_Infused_Turkish_Coffee.jpg',
        platform: 'instagram',
        url: 'https://www.instagram.com/reel/YOUR_REEL_ID/',
        embedUrl: 'https://www.instagram.com/reel/YOUR_REEL_ID/embed/',
      },
      {
        id: 'coffee-yt-1',
        title: 'Sand Brewed Coffee Process',
        titleHi: 'रेत में बनी कॉफी प्रक्रिया',
        thumbnail: '/images/coffee/Sand_Black_Caffeine_Authentic_Turkish_Coffee.jpg',
        platform: 'youtube',
        url: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID',
        embedUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID',
      },
    ],
  },
  {
    category: 'baklava',
    videos: [
      {
        id: 'baklava-ig-1',
        title: 'Fresh Baklava Making',
        titleHi: 'ताज़ा बकलावा बनाना',
        thumbnail: '/images/baklava/pyramid_baklava.jpg',
        platform: 'instagram',
        url: 'https://www.instagram.com/reel/YOUR_REEL_ID/',
        embedUrl: 'https://www.instagram.com/reel/YOUR_REEL_ID/embed/',
      },
      {
        id: 'baklava-yt-1',
        title: 'Baklava Layers Tutorial',
        titleHi: 'बकलावा परतें ट्यूटोरियल',
        thumbnail: '/images/baklava/cashew_square_baklava.jpg',
        platform: 'youtube',
        url: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID',
        embedUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID',
      },
    ],
  },
];

export const getVideosByCategory = (category: 'coffee' | 'kunafa' | 'baklava') => {
  return categoryVideos.find((cv) => cv.category === category)?.videos || [];
};
