/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import Splash from './components/Splash';
import TabBar from './components/TabBar';
import HomeView from './views/HomeView';
import MallView from './views/MallView';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mx-auto max-w-md bg-gray-50 min-h-screen relative shadow-2xl overflow-hidden font-sans">
      <AnimatePresence>
        {showSplash && <Splash />}
      </AnimatePresence>

      <div className="h-screen overflow-y-auto pb-24 scroll-smooth">
        {activeTab === 'home' && <HomeView />}
        {activeTab === 'mall' && <MallView />}
        {activeTab === 'community' && <div className="p-8 text-center text-gray-500 mt-20">两江里 内容建设中...</div>}
        {activeTab === 'orders' && <div className="p-8 text-center text-gray-500 mt-20">订单 建设中...</div>}
        {activeTab === 'profile' && <div className="p-8 text-center text-gray-500 mt-20">我的 建设中...</div>}
      </div>

      <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}