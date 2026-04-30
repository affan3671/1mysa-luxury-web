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
        thumbnail: 'https://zpdbjpaatpydeekemqaz.supabase.co/storage/v1/object/public/photos/photo4.webp',
        platform: 'instagram',
        url: 'https://www.instagram.com/reel/DTshLKeCX1x/',
        embedUrl: 'https://www.instagram.com/reel/DTshLKeCX1x/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);',
      },
      {
        id: 'kunafa-yt-1',
        title: 'Making Fresh Kunafa',
        titleHi: 'ताज़ा कुनाफा बनाना',
        thumbnail: 'https://zpdbjpaatpydeekemqaz.supabase.co/storage/v1/object/public/photos/photo10.webp',
        platform: 'youtube',
        url: 'https://www.youtube.com/shorts/Pbi6kuEI3Q8',
        embedUrl: 'https://www.youtube.com/shorts/Pbi6kuEI3Q8',
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
        thumbnail: 'https://zpdbjpaatpydeekemqaz.supabase.co/storage/v1/object/public/photos/photo11.webp',
        platform: 'instagram',
        url: 'https://www.instagram.com/reel/DCgePkJJM_8/',
        embedUrl: 'https://www.instagram.com/reel/DCgePkJJM_8/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);',
      },
      /*{
        id: 'coffee-yt-1',
        title: 'Sand Brewed Coffee',
        titleHi: 'रेत में बनी कॉफी',
        thumbnail: '/images/coffee/Sand_Black_Caffeine_Authentic_Turkish_Coffee.jpg',
        platform: 'youtube',
        url: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID',
        embedUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID',
      },*/
    ],
  },
  {
    category: 'baklava',
    videos: [
      {
        id: 'baklava-ig-1',
        title: 'Fresh Baklava Serving',
        titleHi: 'ताज़ा बकलावा सर्विंग',
        thumbnail: 'https://zpdbjpaatpydeekemqaz.supabase.co/storage/v1/object/public/photos/photo7.webp',
        platform: 'instagram',
        url: 'https://www.instagram.com/reel/DTdXYzBgXb3/',
        embedUrl: 'https://www.instagram.com/reel/DTdXYzBgXb3/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);',
      },
      {
        id: 'baklava-yt-1',
        title: 'Fresh Baklava Serving',
        titleHi: 'ताज़ा बकलावा सर्विंग',
        thumbnail: 'https://zpdbjpaatpydeekemqaz.supabase.co/storage/v1/object/public/photos/photo8.webp',
        platform: 'youtube',
        url: 'https://www.youtube.com/shorts/81qdlh3kryg',
        embedUrl: 'https://www.youtube.com/shorts/81qdlh3kryg',
      },
    ],
  },
];

export const getVideosByCategory = (category: 'coffee' | 'kunafa' | 'baklava') => {
  return categoryVideos.find((cv) => cv.category === category)?.videos || [];
};
