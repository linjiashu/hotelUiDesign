import { ChevronRight, Search, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function HomeView() {
  return (
    <div className="flex flex-col">
      {/* 轮播图片 Carousel */}
      <div className="relative w-full h-72 bg-gray-200">
        <img
          src="https://picsum.photos/seed/hotel-resort/800/600"
          alt="Hotel Resort"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
            <div className="w-1.5 h-1.5 rounded-full bg-white opacity-100"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
        </div>
      </div>

      <div className="px-4 py-2 -mt-10 relative z-10">
        <motion.div 
          initial="hidden" animate="visible" variants={sectionVariants} transition={{ duration: 0.4 }}
          className="bg-white rounded-2xl p-4 shadow-lg shadow-gray-200/50 space-y-4"
        >
           {/* 会员专享 Member Banner */}
           <div className="flex items-center justify-between text-sm py-2 border-b border-gray-50">
             <span className="text-gray-700 font-medium">✨ 更多会员专享服务等您来领</span>
             <button className="text-blue-900 font-medium flex items-center bg-blue-50 px-3 py-1 rounded-full text-xs hover:bg-blue-100 transition-colors">
               点击查看 <ChevronRight size={14} className="ml-0.5" />
             </button>
           </div>

           {/* 日历房组件 Date Picker */}
           <div className="flex items-center justify-between pt-2 px-1">
             <div className="cursor-pointer group flex-shrink-0">
               <p className="text-xs text-gray-400 mb-1 group-hover:text-blue-500 transition-colors">入住日期</p>
               <div className="flex items-baseline space-x-1 whitespace-nowrap">
                 <span className="text-lg font-bold text-gray-800">10月24日</span>
                 <span className="text-[11px] text-gray-500">周二</span>
               </div>
             </div>
             <div className="flex-1 text-gray-400 border-b border-gray-200 pb-1 mx-2 md:mx-4 flex items-center justify-center text-xs font-medium min-w-[2rem]">
               1晚
             </div>
             <div className="cursor-pointer group flex-shrink-0 text-right">
               <p className="text-xs text-gray-400 mb-1 group-hover:text-blue-500 transition-colors">离店日期</p>
               <div className="flex items-baseline justify-end space-x-1 whitespace-nowrap">
                 <span className="text-lg font-bold text-gray-800">10月25日</span>
                 <span className="text-[11px] text-gray-500">周三</span>
               </div>
             </div>
           </div>
           
           <button className="w-full bg-blue-900 text-white rounded-full py-3.5 font-medium flex items-center justify-center space-x-2 shadow-md shadow-blue-900/20 active:scale-[0.98] transition-transform">
             <Search size={18} />
             <span>查找酒店</span>
           </button>
        </motion.div>
      </div>

      <div className="px-4 mt-4 space-y-8">
        
        {/* 热门推荐 Hot Recommendations */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={sectionVariants}>
          <div className="flex items-center justify-between mb-3 px-1">
             <h3 className="text-[17px] font-bold text-gray-800">热门推荐</h3>
          </div>
          <div className="flex space-x-3 overflow-x-auto pb-2 scrollbar-hide snap-x">
             {[
               { id: 1, title: '特惠江景房', img: 'https://picsum.photos/seed/room-river/300/300' },
               { id: 2, title: '行政套房', img: 'https://picsum.photos/seed/room-suite/300/300' },
               { id: 3, title: '家庭联通房', img: 'https://picsum.photos/seed/room-family/300/300' }
             ].map((item) => (
                <div key={item.id} className="flex-shrink-0 w-36 rounded-xl overflow-hidden relative shadow-sm border border-gray-100 snap-start">
                   <img src={item.img} alt={item.title} className="w-full h-36 object-cover" referrerPolicy="no-referrer" />
                   <div className="absolute flex flex-col justify-end inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent p-3">
                     <p className="text-white text-sm font-medium">{item.title}</p>
                   </div>
                </div>
             ))}
          </div>
        </motion.section>

        {/* 酒店热搜 Hot Search */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={sectionVariants}>
          <div className="flex items-center justify-between mb-3 px-1">
             <h3 className="text-[17px] font-bold text-gray-800">酒店热搜分类</h3>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {['商务出行', '温泉小憩', '亲子度假', '情侣优选', '周边游目的地', '特价房源'].map((tag) => (
              <span key={tag} className="px-4 py-1.5 bg-gray-100 text-gray-600 rounded-md text-xs font-medium active:bg-gray-200 transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </motion.section>

        {/* 走进大"渝" Destination */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={sectionVariants}>
          <div className="flex items-center justify-between mb-3 px-1">
             <h3 className="text-[17px] font-bold text-gray-800 flex items-center">
               走进大“渝”
             </h3>
             <span className="text-xs text-gray-400 flex items-center pr-1">周边种草 <ChevronRight size={14}/></span>
          </div>
          <div className="grid grid-cols-2 gap-3 h-64">
            <div className="rounded-xl overflow-hidden relative shadow-sm group cursor-pointer">
              <img src="https://picsum.photos/seed/chongqing1/400/600" alt="Chongqing 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <p className="text-sm font-bold leading-tight">洪崖洞夜景打卡</p>
                <div className="flex items-center mt-1 text-[10px] text-white/80">
                  <MapPin size={10} className="mr-0.5" /> 热门地标
                </div>
              </div>
            </div>
            <div className="grid grid-rows-2 gap-3">
              <div className="rounded-xl overflow-hidden relative shadow-sm group cursor-pointer">
                <img src="https://picsum.photos/seed/chongqing2/400/300" alt="Chongqing 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                 <div className="absolute bottom-2 left-2 right-2 text-white">
                    <p className="text-xs font-bold">轻轨穿楼奇观</p>
                 </div>
              </div>
              <div className="rounded-xl overflow-hidden relative shadow-sm group cursor-pointer">
                <img src="https://picsum.photos/seed/chongqing3/400/300" alt="Chongqing 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                 <div className="absolute bottom-2 left-2 right-2 text-white">
                    <p className="text-xs font-bold">老街文化漫步</p>
                 </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 品牌介绍 Brand */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={sectionVariants} className="pb-8">
          <div className="flex items-center justify-between mb-3 px-1">
             <h3 className="text-[17px] font-bold text-gray-800">品牌介绍</h3>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
             <div className="relative h-44 bg-gray-200 flex items-center justify-center cursor-pointer group">
                 <img src="https://picsum.photos/seed/hotel-brand/800/400" alt="Brand Video" className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer"/>
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                      <div className="w-0 h-0 border-t-[7px] border-t-transparent border-l-[11px] border-l-blue-900 border-b-[7px] border-b-transparent ml-1"></div>
                    </div>
                 </div>
             </div>
             <div className="p-4 flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-900 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-inner flex-shrink-0">
                  HN
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-sm">瀚宁高奢度假酒店</p>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-1">匠心服务，尊享越级体验，开启您的非凡探索之旅。</p>
                </div>
             </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
}
