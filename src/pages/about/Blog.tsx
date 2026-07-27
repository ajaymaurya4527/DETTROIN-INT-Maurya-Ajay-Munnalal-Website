import React, { useState } from 'react';
import { 
  Calendar, 
  User, 
  Clock, 
  ArrowRight, 
  Tag, 
  Search, 
  Bookmark, 
  Share2,
  Sparkles
} from 'lucide-react';

import { FeatureHighlightSection } from '../../components/FeatureHighlightSection';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

export const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const blogPosts: BlogPost[] = [
    {
      id: 'post-1',
      title: 'How Experiential Learning Shapes Modern Student Problem-Solving Skills',
      excerpt: 'Moving beyond rote learning: explore how project-based science labs and interactive simulations improve student cognitive retention.',
      category: 'Pedagogy',
      author: 'Dr. Rajesh Sharma',
      date: 'Mar 15, 2026',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800',
      featured: true
    },
    {
      id: 'post-2',
      title: 'Balancing Screen Time and Physical Activity for School Children',
      excerpt: 'Practical advice for parents on setting healthy digital boundaries while maintaining curiosity and academic growth at home.',
      category: 'Parenting Guide',
      author: 'Ms. Ananya Roy',
      date: 'Mar 10, 2026',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'post-3',
      title: 'Pavna Wins Regional Robotics & STEM Innovation Championship 2026',
      excerpt: 'Our Middle School STEM team secured the top trophy in Uttar Pradesh for their AI-powered solar tracker project.',
      category: 'Campus News',
      author: 'Editorial Team',
      date: 'Mar 02, 2026',
      readTime: '3 min read',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'post-4',
      title: 'The Role of Sports and Athletics in Building Leadership & Resilience',
      excerpt: 'How regular participation in team sports builds emotional intelligence, grit, and executive leadership habits.',
      category: 'Sports & Wellness',
      author: 'Coach Vikram Singh',
      date: 'Feb 22, 2026',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'post-5',
      title: 'Preparing Students for CBSE Board Exams: A Stress-Free Study Schedule',
      excerpt: 'Effective revision schedules, mindfulness exercises, and subject-specific exam techniques recommended by top teachers.',
      category: 'Exam Prep',
      author: 'Academic Cell',
      date: 'Feb 14, 2026',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800'
    }
  ];

  const categories = ['All', 'Pedagogy', 'Parenting Guide', 'Campus News', 'Sports & Wellness', 'Exam Prep'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(p => p.featured) || blogPosts[0];

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest bg-amber-100 px-3 py-1 rounded-full border border-amber-200 inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Insights & Stories
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Pavna Journal & News
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Stay updated with educational insights, parenting guides, campus achievements, and pedagogical research from our faculty.
          </p>
        </div>

        {/* Featured Blog Banner */}
        {featuredPost && (
          <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden grid lg:grid-cols-12 gap-0 group hover:shadow-2xl transition-all duration-300">
            <div className="lg:col-span-7 relative overflow-hidden min-h-[280px] lg:min-h-[400px]">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-4 left-4 bg-amber-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                Featured Article
              </span>
            </div>

            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span className="font-bold text-blue-950 bg-blue-50 px-2.5 py-1 rounded-md">{featuredPost.category}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {featuredPost.date}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 group-hover:text-blue-950 transition-colors leading-tight">
                  {featuredPost.title}
                </h2>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {featuredPost.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <User className="w-4 h-4 text-amber-500" /> {featuredPost.author}
                </div>

                <button className="inline-flex items-center gap-2 bg-blue-950 hover:bg-amber-500 hover:text-slate-950 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-all shadow-sm">
                  Read Article <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm">
          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-blue-950 text-white shadow-md shadow-blue-950/20'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-blue-950 bg-slate-50"
            />
          </div>
        </div>

        {/* Blog Post Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative overflow-hidden h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-md">
                    {post.category}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-base group-hover:text-blue-950 transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-100 mt-4">
                <span className="text-xs font-semibold text-slate-700">{post.author}</span>
                <span className="text-amber-600 font-bold text-xs inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Subscription Card */}
        <div className="bg-gradient-to-r from-blue-950 to-slate-900 rounded-3xl p-8 sm:p-10 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <h3 className="text-2xl font-black">Subscribe to School Newsletter</h3>
            <p className="text-slate-300 text-xs sm:text-sm">
              Get monthly educational insights, exam tips, and event updates directly delivered to your inbox.
            </p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="flex w-full md:w-auto gap-2">
            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="px-4 py-3 rounded-xl text-xs text-slate-900 focus:outline-none w-full md:w-64"
            />
            <button
              type="submit"
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs px-6 py-3 rounded-xl transition-all whitespace-nowrap shadow-md"
            >
              Subscribe Now
            </button>
          </form>
        </div>
        <FeatureHighlightSection/>

      </div>
    </div>
  );
};