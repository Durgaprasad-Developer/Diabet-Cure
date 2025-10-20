<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GlucoTrack - AI-Powered Glucose Monitoring</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        
        * {
            font-family: 'Inter', sans-serif;
            scroll-behavior: smooth;
        }
        
        .gradient-text {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        .floating {
            animation: floating 3s ease-in-out infinite;
        }
        
        @keyframes floating {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
        }
        
        .glow {
            box-shadow: 0 0 40px rgba(102, 126, 234, 0.4);
        }
        
        .card-hover {
            transition: all 0.3s ease;
        }
        
        .card-hover:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        .blob {
            position: absolute;
            border-radius: 50%;
            filter: blur(80px);
            opacity: 0.25;
            animation: blob 7s infinite;
            z-index: 0;
        }
        
        @keyframes blob {
            0%, 100% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        .fade-in {
            animation: fadeIn 0.6s ease-in;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
    </style>
</head>
<body class="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-x-hidden">
    <!-- Animated Background Blobs -->
    <div class="blob w-72 h-72 sm:w-96 sm:h-96 bg-purple-400 top-0 left-0"></div>
    <div class="blob w-72 h-72 sm:w-96 sm:h-96 bg-blue-400 bottom-0 right-0" style="animation-delay: 2s;"></div>
    
    <!-- Navigation -->
    <nav class="fixed w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16 sm:h-20">
                <div class="flex items-center gap-2 sm:gap-3">
                    <div class="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                        <span class="text-white font-bold text-lg sm:text-xl">G</span>
                    </div>
                    <span class="text-xl sm:text-2xl font-bold gradient-text">GlucoTrack</span>
                </div>
                <div class="hidden md:flex items-center gap-8">
                    <a href="#features" class="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
                    <a href="#how-it-works" class="text-gray-600 hover:text-blue-600 transition-colors">How It Works</a>
                    <a href="#pricing" class="text-gray-600 hover:text-blue-600 transition-colors">Pricing</a>
                    <a href="#testimonials" class="text-gray-600 hover:text-blue-600 transition-colors">Reviews</a>
                </div>
                <button onclick="window.location.href='#pricing'" class="px-4 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg sm:rounded-xl font-semibold hover:shadow-lg transition-all text-sm sm:text-base">
                    Get Started
                </button>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="relative pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div class="max-w-7xl mx-auto relative z-10">
            <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div class="text-center lg:text-left fade-in">
                    <div class="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-100 rounded-full mb-4 sm:mb-6">
                        <span class="text-blue-600 font-semibold text-xs sm:text-sm">🎉 AI-Powered Insights</span>
                    </div>
                    <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                        Take Control of Your
                        <span class="gradient-text block mt-2">Glucose Levels</span>
                    </h1>
                    <p class="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
                        Track, analyze, and optimize your diabetes management with AI-powered insights. Get personalized recommendations in seconds.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                        <button onclick="window.location.href='#pricing'" class="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all glow text-sm sm:text-base">
                            Start Free Trial
                        </button>
                        <button class="px-6 sm:px-8 py-3 sm:py-4 bg-white border-2 border-gray-200 rounded-xl font-semibold hover:border-blue-600 transition-all text-sm sm:text-base">
                            Watch Demo
                        </button>
                    </div>
                    <div class="flex flex-wrap items-center gap-4 sm:gap-6 mt-6 sm:mt-8 justify-center lg:justify-start text-sm">
                        <div class="flex items-center gap-2">
                            <svg class="w-4 h-4 sm:w-5 sm:h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                            </svg>
                            <span class="text-gray-600">No credit card required</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <svg class="w-4 h-4 sm:w-5 sm:h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                            </svg>
                            <span class="text-gray-600">14-day free trial</span>
                        </div>
                    </div>
                </div>
                <div class="relative floating hidden lg:block">
                    <div class="bg-white rounded-3xl shadow-2xl p-6 transform rotate-3">
                        <img src="https://via.placeholder.com/600x400/667eea/ffffff?text=Dashboard+Preview" alt="Dashboard" class="rounded-2xl w-full">
                    </div>
                    <div class="absolute -bottom-10 -left-10 bg-white rounded-2xl shadow-xl p-4 transform -rotate-6">
                        <div class="flex items-center gap-3">
                            <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                <span class="text-2xl">✓</span>
                            </div>
                            <div>
                                <p class="font-semibold text-gray-900">Normal Range</p>
                                <p class="text-sm text-gray-500">125 mg/dL</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Stats Section -->
    <section class="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-white/30 backdrop-blur-sm relative z-10">
        <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                <div class="text-center">
                    <div class="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-2">10k+</div>
                    <div class="text-sm sm:text-base text-gray-600">Active Users</div>
                </div>
                <div class="text-center">
                    <div class="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-2">1M+</div>
                    <div class="text-sm sm:text-base text-gray-600">Readings Logged</div>
                </div>
                <div class="text-center">
                    <div class="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-2">98%</div>
                    <div class="text-sm sm:text-base text-gray-600">Satisfaction Rate</div>
                </div>
                <div class="text-center">
                    <div class="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-2">24/7</div>
                    <div class="text-sm sm:text-base text-gray-600">Support Available</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm relative z-10">
        <div class="max-w-7xl mx-auto">
            <div class="text-center mb-12 sm:mb-16">
                <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                    Powerful Features for
                    <span class="gradient-text">Better Health</span>
                </h2>
                <p class="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                    Everything you need to monitor and manage your glucose levels effectively
                </p>
            </div>

            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                <div class="bg-white rounded-2xl p-6 sm:p-8 shadow-lg card-hover">
                    <div class="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                        <svg class="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                        </svg>
                    </div>
                    <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Real-Time Tracking</h3>
                    <p class="text-sm sm:text-base text-gray-600">Log your glucose readings instantly with our intuitive interface. Track pre and post-meal values effortlessly.</p>
                </div>

                <div class="bg-white rounded-2xl p-6 sm:p-8 shadow-lg card-hover">
                    <div class="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                        <svg class="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                        </svg>
                    </div>
                    <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">AI-Powered Reports</h3>
                    <p class="text-sm sm:text-base text-gray-600">Get intelligent insights and personalized recommendations based on your glucose patterns and trends.</p>
                </div>

                <div class="bg-white rounded-2xl p-6 sm:p-8 shadow-lg card-hover">
                    <div class="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                        <svg class="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"/>
                        </svg>
                    </div>
                    <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Visual Analytics</h3>
                    <p class="text-sm sm:text-base text-gray-600">Beautiful charts and graphs that make it easy to understand your glucose trends at a glance.</p>
                </div>

                <div class="bg-white rounded-2xl p-6 sm:p-8 shadow-lg card-hover">
                    <div class="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                        <svg class="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                        </svg>
                    </div>
                    <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Smart Alerts</h3>
                    <p class="text-sm sm:text-base text-gray-600">Receive timely notifications when your readings are out of range or when it's time to log.</p>
                </div>

                <div class="bg-white rounded-2xl p-6 sm:p-8 shadow-lg card-hover">
                    <div class="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                        <svg class="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                        </svg>
                    </div>
                    <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Share with Doctor</h3>
                    <p class="text-sm sm:text-base text-gray-600">Export detailed reports and share them directly with your healthcare provider for better care.</p>
                </div>

                <div class="bg-white rounded-2xl p-6 sm:p-8 shadow-lg card-hover">
                    <div class="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                        <svg class="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                        </svg>
                    </div>
                    <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Mobile First</h3>
                    <p class="text-sm sm:text-base text-gray-600">Access your data anywhere, anytime. Fully responsive design for all your devices.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- How It Works Section -->
    <section id="how-it-works" class="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="max-w-7xl mx-auto">
            <div class="text-center mb-12 sm:mb-16">
                <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                    Simple Steps to
                    <span class="gradient-text">Better Health</span>
                </h2>
                <p class="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                    Get started in minutes and take control of your diabetes management
                </p>
            </div>

            <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                <div class="text-center">
                    <div class="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                        <span class="text-2xl sm:text-3xl font-bold text-white">1</span>
                    </div>
                    <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Sign Up</h3>
                    <p class="text-sm sm:text-base text-gray-600">Create your free account in seconds. No credit card required.</p>
                </div>

                <div class="text-center">
                    <div class="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                        <span class="text-2xl sm:text-3xl font-bold text-white">2</span>
                    </div>
                    <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Log Readings</h3>
                    <p class="text-sm sm:text-base text-gray-600">Record your glucose levels before and after meals with ease.</p>
                </div>

                <div class="text-center">
                    <div class="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-pink-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                        <span class="text-2xl sm:text-3xl font-bold text-white">3</span>
                    </div>
                    <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Get AI Insights</h3>
                    <p class="text-sm sm:text-base text-gray-600">Receive personalized recommendations based on your data.</p>
                </div>

                <div class="text-center">
                    <div class="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                        <span class="text-2xl sm:text-3xl font-bold text-white">4</span>
                    </div>
                    <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Stay Healthy</h3>
                    <p class="text-sm sm:text-base text-gray-600">Track your progress and achieve your health goals.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials" class="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm relative z-10">
        <div class="max-w-7xl mx-auto">
            <div class="text-center mb-12 sm:mb-16">
                <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                    Loved by
                    <span class="gradient-text">Thousands</span>
                </h2>
                <p class="text-base sm:text-lg md:text-xl text-gray-600">
                    See what our users have to say
                </p>
            </div>

            <div class="grid md:grid-cols-3 gap-6 sm:gap-8">
                <div class="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
                    <div class="flex gap-1 mb-4">
                        <span class="text-yellow-400">⭐</span>
                        <span class="text-yellow-400">⭐</span>
                        <span class="text-yellow-400">⭐</span>
                        <span class="text-yellow-400">⭐</span>
                        <span class="text-yellow-400">⭐</span>
                    </div>
                    <p class="text-sm sm:text-base text-gray-600 mb-4">
                        "GlucoTrack has completely changed how I manage my diabetes. The AI insights are incredibly accurate and helpful!"
                    </p>
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full"></div>
                        <div>
                            <p class="font-semibold text-sm sm:text-base">Sarah Johnson</p>
                            <p class="text-xs sm:text-sm text-gray-500">Type 2 Diabetes</p>
                        </div>
                    </div>
                </div>

                <div class="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
                    <div class="flex gap-1 mb-4">
                        <span class="text-yellow-400">⭐</span>
                        <span class="text-yellow-400">⭐</span>
                        <span class="text-yellow-400">⭐</span>
                        <span class="text-yellow-400">⭐</span>
                        <span class="text-yellow-400">⭐</span>
                    </div>
                    <p class="text-sm sm:text-base text-gray-600 mb-4">
                        "The mobile app is so easy to use. I can track my readings anywhere and the reports help my doctor understand my patterns."
                    </p>
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-600 rounded-full"></div>
                        <div>
                            <p class="font-semibold text-sm sm:text-base">Michael Chen</p>
                            <p class="text-xs sm:text-sm text-gray-500">Type 1 Diabetes</p>
                        </div>
                    </div>
                </div>

                <div class="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
                    <div class="flex gap-1 mb-4">
                        <span class="text-yellow-400">⭐</span>
                        <span class="text-yellow-400">⭐</span>
                        <span class="text-yellow-400">⭐</span>
                        <span class="text-yellow-400">⭐</span>
                        <span class="text-yellow-400">⭐</span>
                    </div>
                    <p class="text-sm sm:text-base text-gray-600 mb-4">
                        "Best glucose tracking app I've used. The analytics are detailed yet simple to understand. Highly recommended!"
                    </p>
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full"></div>
                        <div>
                            <p class="font-semibold text-sm sm:text-base">Emily Rodriguez</p>
                            <p class="text-xs sm:text-sm text-gray-500">Pre-diabetic</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Pricing Section -->
    <section id="pricing" class="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="max-w-7xl mx-auto">
            <div class="text-center mb-12 sm:mb-16">
                <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4"></h2>