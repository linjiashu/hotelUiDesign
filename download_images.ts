import fs from 'fs';
import path from 'path';

const images = [
  { url: 'https://picsum.photos/seed/hotel-resort/800/600', file: 'hotel-resort.jpg' },
  { url: 'https://picsum.photos/seed/room-river/300/300', file: 'room-river.jpg' },
  { url: 'https://picsum.photos/seed/room-suite/300/300', file: 'room-suite.jpg' },
  { url: 'https://picsum.photos/seed/room-family/300/300', file: 'room-family.jpg' },
  { url: 'https://picsum.photos/seed/chongqing1/400/600', file: 'chongqing1.jpg' },
  { url: 'https://picsum.photos/seed/chongqing2/400/300', file: 'chongqing2.jpg' },
  { url: 'https://picsum.photos/seed/chongqing3/400/300', file: 'chongqing3.jpg' },
  { url: 'https://picsum.photos/seed/hotel-brand/800/400', file: 'hotel-brand.jpg' },
  { url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80', file: 'mall-banner.jpg' },
  { url: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=400&q=80', file: 'prod1.jpg' },
  { url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=400&q=80', file: 'prod2.jpg' },
  { url: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=400&q=80', file: 'prod3.jpg' },
  { url: 'https://picsum.photos/seed/luxury-tea/400/400', file: 'prod4.jpg' },
  { url: 'https://picsum.photos/seed/luxury-family/400/400', file: 'prod5.jpg' },
  { url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=400&q=80', file: 'prod6.jpg' },
  { url: 'https://picsum.photos/seed/room-bed/400/400', file: 'fallback-prod1.jpg' },
  { url: 'https://picsum.photos/seed/food-plate/400/400', file: 'fallback-prod2.jpg' },
  { url: 'https://picsum.photos/seed/spa-relax/400/400', file: 'fallback-prod3.jpg' },
  { url: 'https://picsum.photos/seed/tea-cup/400/400', file: 'fallback-prod4.jpg' },
  { url: 'https://picsum.photos/seed/family-kids/400/400', file: 'fallback-prod5.jpg' },
  { url: 'https://picsum.photos/seed/pool-gym/400/400', file: 'fallback-prod6.jpg' }
];

async function run() {
  const pubDir = path.join(process.cwd(), 'public', 'images');
  if (!fs.existsSync(pubDir)) {
     fs.mkdirSync(pubDir, { recursive: true });
  }
  for (const img of images) {
    let dest = path.join(pubDir, img.file);
    if (fs.existsSync(dest)) continue;
    console.log(`Fetching ${img.url} -> ${dest}`);
    try {
      const res = await fetch(img.url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } });
      if (!res.ok) {
         console.error('Failed to grab', img.url, res.status);
         continue;
      }
      const arrayBuffer = await res.arrayBuffer();
      await fs.promises.writeFile(dest, Buffer.from(arrayBuffer));
    } catch(e) {
      console.error('Error fetching', img.url, e);
    }
  }
  console.log("Images downloaded.");
}
run();
