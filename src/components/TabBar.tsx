import { Home, ShoppingBag, Map, FileText, User } from 'lucide-react';

export default function TabBar({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (t: string) => void }) {
  const tabs = [
    { id: 'home', icon: Home, label: '首页' },
    { id: 'mall', icon: ShoppingBag, label: '商城' },
    { id: 'community', icon: Map, label: '两江里' },
    { id: 'orders', icon: FileText, label: '订单' },
    { id: 'profile', icon: User, label: '我的' },
  ];

  return (
    <div className="absolute bottom-0 left-0 right-0 h-[68px] bg-white border-t border-gray-100 flex items-center justify-around px-2 z-40 pb-safe shadow-[0_-4px_20px_rgba(0,0,0,0.03)]">
      {tabs.map(tab => {
        const isActive = activeTab === tab.id;
        const Icon = tab.icon;
        const isCenter = tab.id === 'community';

        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center justify-center w-14 transition-colors duration-200 ${isActive ? 'text-blue-900' : 'text-gray-400'}`}
          >
            {isCenter ? (
              <div className={`w-14 h-14 rounded-full flex items-center justify-center -mt-8 shadow-lg border-[3px] border-white transition-all duration-300 ${isActive ? 'bg-blue-900 text-white' : 'bg-gray-800 text-white hover:bg-gray-700'}`}>
                <Icon size={24} className={isActive ? 'animate-pulse' : ''} />
              </div>
            ) : (
              <Icon size={22} className={`mb-1 transition-transform duration-200 ${isActive ? 'scale-110' : ''}`} />
            )}
            <span className={`text-[10px] font-medium ${isCenter ? 'mt-1.5' : ''}`}>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}
