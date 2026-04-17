import { Coffee, Gift, Utensils, Zap, ShoppingBag, Plus, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function MallView() {
  const categories = [
    { icon: Coffee, title: '客房套餐', color: 'bg-stone-100 text-stone-700' },
    { icon: Gift, title: '积分商城', color: 'bg-stone-100 text-stone-700' },
    { icon: Utensils, title: '餐饮美食', color: 'bg-stone-100 text-stone-700' },
    { icon: Zap, title: '限时秒杀', color: 'bg-amber-50 text-amber-700' }, // Special highlight
  ];

  const products = [
    { id: 1, title: '双人豪华江景房套票含双早', price: '899', original: '1299', sold: 342, img: '/images/prod1.jpg', fallback: '/images/fallback-prod1.jpg' },
    { id: 2, title: '星级云端自助海鲜晚餐', price: '298', original: '398', sold: 891, img: '/images/prod2.jpg', fallback: '/images/fallback-prod2.jpg' },
    { id: 3, title: '尊享90分钟热石SPA体验', price: '399', original: '599', sold: 124, img: '/images/prod3.jpg', fallback: '/images/fallback-prod3.jpg' },
    { id: 4, title: '行政酒廊双人英式下午茶', price: '168', original: '228', sold: 456, img: '/images/prod4.jpg', fallback: '/images/fallback-prod4.jpg' },
    { id: 5, title: '周末特惠亲子主题房升级券', price: '199', original: '299', sold: 89, img: '/images/prod5.jpg', fallback: '/images/fallback-prod5.jpg' },
    { id: 6, title: 'VIP恒温泳池健身房月卡', price: '299', original: '499', sold: 231, img: '/images/prod6.jpg', fallback: '/images/fallback-prod6.jpg' },
  ];

  return (
    <div className="flex flex-col bg-stone-50 pb-12">
      {/* 顶部 Banner - Editorial luxury feel */}
      <div className="w-full h-64 relative bg-stone-900">
        <img
          src="/images/mall-banner.jpg"
          alt="Mall Banner"
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-transparent to-stone-900/40"></div>
        <div className="absolute top-10 left-6 right-6 text-white text-center">
          <p className="text-[10px] tracking-[0.3em] font-medium uppercase text-stone-300 mb-2">Boutique & Services</p>
          <h2 className="text-3xl font-serif tracking-wide drop-shadow-lg text-amber-50">瀚宁精选商城</h2>
        </div>
      </div>

      <div className="px-4 relative z-10 -mt-12">
        
        {/* 独立入口 Categories - Elegant glass/card */}
        <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-5 mb-8">
          <div className="grid grid-cols-4 gap-2">
            {categories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <motion.div 
                  initial="hidden" animate="visible" variants={itemVariants} transition={{ delay: i * 0.1 }}
                  key={i} className="flex flex-col items-center space-y-3 cursor-pointer group"
                >
                  <div className={`w-[3.25rem] h-[3.25rem] rounded-full flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1 ${cat.color} ${cat.title === '限时秒杀' ? 'shadow-inner' : ''}`}>
                    <Icon size={22} className={cat.title === '限时秒杀' ? 'text-amber-600' : 'text-stone-600'} strokeWidth={1.5} />
                  </div>
                  <span className={`text-[11px] font-medium transition-colors ${cat.title === '限时秒杀' ? 'text-amber-700' : 'text-stone-600 group-hover:text-stone-900'}`}>{cat.title}</span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 热卖推荐 Top Sales - Minimalist layout */}
        <section>
          <div className="flex items-end justify-between mb-5 px-1">
            <h3 className="text-xl font-serif text-stone-800 flex items-center tracking-wide">
              <Sparkles size={18} className="text-amber-500 mr-2" strokeWidth={1.5} />
              甄选特惠
            </h3>
            <span className="text-[11px] text-stone-500 font-medium tracking-wider uppercase border border-stone-200 px-2 py-1 rounded">Top Picks</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {products.map((item, i) => (
              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-20px" }} variants={itemVariants} transition={{ delay: (i%2) * 0.1 }}
                key={item.id} className="bg-white rounded-[1.25rem] overflow-hidden shadow-[0_4px_24px_rgb(0,0,0,0.03)] flex flex-col group cursor-pointer hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300"
              >
                <div className="relative h-44 bg-stone-100 overflow-hidden">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    onError={(e) => { (e.target as HTMLImageElement).src = item.fallback; }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                    referrerPolicy="no-referrer" 
                  />
                  {/* Chic luxury tag */}
                  {i < 2 && (
                    <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-md px-2 py-1 rounded-sm text-[9px] tracking-wider text-amber-100 font-medium uppercase border border-stone-700/50">
                      Popular
                    </div>
                  )}
                </div>
                
                <div className="p-3.5 flex flex-col flex-1">
                  <h4 className="text-[13px] font-medium text-stone-800 line-clamp-2 mb-3 leading-relaxed">{item.title}</h4>
                  
                  <div className="mt-auto">
                    <div className="flex items-center justify-between mt-1 mb-1">
                       <span className="text-stone-400 text-[10px] line-through font-mono">¥{item.original}</span>
                       <span className="text-stone-400 text-[9px]">售出 {item.sold}</span>
                    </div>
                    <div className="flex items-end justify-between border-t border-stone-100 pt-3 mt-2">
                       <div className="flex items-baseline space-x-0.5">
                         <span className="text-stone-900 text-[11px] font-bold">¥</span>
                         <span className="text-stone-900 text-lg font-serif tracking-tight">{item.price}</span>
                       </div>
                       
                       <div className="bg-stone-900 w-7 h-7 rounded-full flex items-center justify-center text-white shadow-md active:scale-95 transition-transform">
                          <Plus size={14} strokeWidth={2} />
                       </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
