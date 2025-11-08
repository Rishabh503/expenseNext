"use client";

import LiquidEther from "@/app/components/LiquidEther/LiquidEther";
import Shuffle from "@/app/components/Shuffle/Shuffle";
import { SignInButton } from "@clerk/nextjs";

const Home = () => {
  return (
    <>
      <div style={{ width: "100%", height: "100vh", position: "absolute" }}>
        <LiquidEther
          colors={["#32C76A", "#A8FFC1", "#4AD9E8", "#C2FF00", "#B19EEF"]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>
      <div className="font-sans bg-gradient-to-br from-gray-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900/20 text-gray-800 dark:text-gray-200 transition-all duration-300 min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden flex flex-col items-center justify-center text-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-emerald-500/10 via-green-500/5 to-teal-500/10 dark:from-emerald-900/30 dark:via-green-900/20 dark:to-teal-900/30">
          <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
          <div className="relative z-10 max-w-4xl mx-auto w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-gray-100 leading-tight">
              Welcome to{" "}
              
              <Shuffle
                colorFrom='oklch(76.5% 0.177 163.223)'
                colorVia='#ffffff'
                colorTo='oklch(79.2% 0.209 151.711)'
                text="Expense Tracker AI"
                shuffleDirection="right"
                duration={0.50}
                animationMode="evenodd"
                shuffleTimes={2}
                ease="power3.out"
                stagger={0.03}
                threshold={0.1}
                triggerOnce={true}
                triggerOnHover={true}
                respectReducedMotion={true}
              />
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto px-2 sm:px-0">
              Track your expenses, manage your budget, and get AI-powered
              insights to take control of your finances with intelligent
              automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-2 sm:px-0">
              <SignInButton>
                <button className="group relative overflow-hidden bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 hover:from-emerald-700 hover:via-green-600 hover:to-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-200 transform hover:-translate-y-0.5">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Get Started Free
                    <span className="text-lg">→</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                </button>
              </SignInButton>
              <button className="group border-2 border-emerald-500/20 dark:border-emerald-400/20 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold transition-all duration-200 backdrop-blur-sm">
                Learn More
              </button>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto px-2 sm:px-0  ">
              <div className=" backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100/50 dark:border-gray-700/50">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg mb-3 sm:mb-4 mx-auto">
                  <span className="text-white text-base sm:text-lg">🤖</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 text-center">
                  AI Insights
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 text-center">
                  Smart analysis of your spending patterns
                </p>
              </div>
              <div className=" backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100/50 dark:border-gray-700/50">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-green-500 via-teal-500 to-emerald-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg mb-3 sm:mb-4 mx-auto">
                  <span className="text-white text-base sm:text-lg">✨</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 text-center">
                  Auto Categories
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 text-center">
                  Intelligent expense categorization
                </p>
              </div>
              <div className=" backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100/50 dark:border-gray-700/50 sm:col-span-2 md:col-span-1">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-teal-500 via-emerald-500 to-green-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg mb-3 sm:mb-4 mx-auto">
                  <span className="text-white text-base sm:text-lg">📊</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 text-center">
                  Smart Dashboard
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 text-center">
                  Beautiful, intuitive financial overview
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
