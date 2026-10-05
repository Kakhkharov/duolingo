"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Heart,
  LineChart,
  MapPin,
  Music,
  Send,
  Sparkles,
  Star,
  Users,
  Video,
  Volume2,
} from "lucide-react";

export default function HomePage() {
  const [activeNav, setActiveNav] = useState("Home");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 4, width: 72 });
  const navRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  // Navigation items: English, smooth scroll
  const navItems = [
    { name: "Home", href: "#" },
    { name: "Courses", href: "#courses" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const activeIndex = navItems.findIndex((item) => item.name === activeNav);
    const activeEl = navRefs.current[activeIndex];
    if (activeEl) {
      setIndicatorStyle({
        left: activeEl.offsetLeft,
        width: activeEl.offsetWidth,
      });
    }
  }, [activeNav]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    name: string
  ) => {
    setActiveNav(name);
    if (href.startsWith("#")) {
      e.preventDefault();
      if (href === "#") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  // Age Groups: 8-11, 11-13, 13-16
  const ageGroups = [
    {
      age: "Ages 8 – 11",
      badge: "Little Explorers",
      icon: "🐣",
      title: "Playful Basics & Visuals",
      tagline: "Sensory-friendly learning with playful games & songs.",
      borderColor: "border-amber-300 hover:border-amber-400",
      bgGradient: "from-amber-100/70 via-amber-50/40 to-white",
      pillBg: "bg-amber-200/80 text-amber-900 border-amber-300",
      btnClass: "bg-amber-400 hover:bg-amber-500 text-amber-950 shadow-[0_4px_0_#d97706]",
      tag: "🌱 Sensory & Playful",
      highlights: [
        { icon: "🎨", label: "Visual Flashcards", desc: "Animals & phonics" },
        { icon: "🎵", label: "Sing-Along Tunes", desc: "Gentle melody taps" },
        { icon: "🧸", label: "Zero-Stress Pacing", desc: "Easy restful flow" },
      ],
    },
    {
      age: "Ages 11 – 13",
      badge: "Curious Adventurers",
      icon: "🚀",
      title: "Quests & Rhythm Beats",
      tagline: "Interactive stories & beat games that keep spirits high.",
      borderColor: "border-sky-300 hover:border-sky-400",
      bgGradient: "from-sky-100/70 via-sky-50/40 to-white",
      pillBg: "bg-sky-200/80 text-sky-900 border-sky-300",
      btnClass: "bg-sky-500 hover:bg-sky-600 text-white shadow-[0_4px_0_#0284c7]",
      tag: "⚡ Gamified & Dynamic",
      highlights: [
        { icon: "🎯", label: "3-Choice Quizzes", desc: "Duolingo-style quests" },
        { icon: "🥁", label: "Rhythm & Tempo", desc: "Clapping & percussion" },
        { icon: "🎉", label: "Confetti Rewards", desc: "Teacher mascot cheers" },
      ],
    },
    {
      age: "Ages 13 – 16",
      badge: "Creative Champions",
      icon: "🌟",
      title: "Dialogue & Soundscapes",
      tagline: "Real conversation confidence & creative music chords.",
      borderColor: "border-purple-300 hover:border-purple-400",
      bgGradient: "from-purple-100/70 via-purple-50/40 to-white",
      pillBg: "bg-purple-200/80 text-purple-900 border-purple-300",
      btnClass: "bg-purple-600 hover:bg-purple-700 text-white shadow-[0_4px_0_#7c3aed]",
      tag: "🔥 Expressive & Sharp",
      highlights: [
        { icon: "💬", label: "Real Dialogues", desc: "English & Russian fluency" },
        { icon: "🎧", label: "Melody & Chords", desc: "Songwriting & sounds" },
        { icon: "🧠", label: "Smart Adaptability", desc: "Flexible daily goals" },
      ],
    },
  ];

  // The 3 Core Subjects / Courses (With Cartoon Mascots, Flags & Creative Piano Keys)
  const courses = [
    {
      title: "English Language",
      tag: "10 Interactive Lessons",
      badgeIcon: "🇬🇧",
      badgeLabel: "UK Flag • Paddington",
      image: "/course-english.jpg",
      mascot: "Paddington Bear with UK Flag in London",
      desc: "Join Britain's beloved bear in London! Learn English through fun 3-choice interactive quizzes, animated story clips, and colorful memory flashcards.",
      price: "FREE",
      popular: false,
      accent: "from-blue-500 to-indigo-600",
      borderColor: "border-blue-400",
      bgCard: "bg-blue-50/50",
      btnStyle: "bg-[#4343d5] text-white hover:bg-blue-700 shadow-[0_4px_0_#2e2bc2]",
      features: [
        "10 bite-sized, interactive lessons",
        "Duolingo-style 3-choice questions",
        "Cheering teacher mascots & voice audio",
        "Vocabulary agenda & Lumosity-like games",
        "Repeats questions until fully mastered",
      ],
    },
    {
      title: "Russian Language",
      tag: "10 Interactive Lessons",
      badgeIcon: "🇷🇺",
      badgeLabel: "Russian Flag • Masha",
      image: "/course-russian.jpg",
      mascot: "Masha & The Bear with Russian Flag",
      desc: "Delightful Russian adventures with Masha & the Bear! Master Cyrillic letters, cheerful vocabulary games, story videos, and confidence-boosting quizzes.",
      price: "FREE",
      popular: true,
      accent: "from-emerald-500 to-teal-600",
      borderColor: "border-emerald-400",
      bgCard: "bg-emerald-50/50",
      btnStyle: "bg-emerald-600 text-white hover:bg-emerald-700 shadow-[0_4px_0_#047857]",
      features: [
        "10 step-by-step personalized lessons",
        "Fun 3-answer interactive quiz format",
        "Gentle AI pace based on student comfort",
        "Illustrated flashcards & pronunciation clips",
        "Encouraging mascot feedback at every step",
      ],
    },
    {
      title: "Music Classes",
      tag: "10 Therapeutic Lessons",
      badgeIcon: "🎹",
      badgeLabel: "Creative Piano Keys",
      image: "/course-music.jpg",
      mascot: "Magical Rainbow Piano Keys & Notes",
      desc: "Creative piano & therapeutic melody classes! Play with whimsical rainbow piano keys, cheerful rhythms, instrument sounds, and soothing sing-along songs.",
      price: "FREE",
      popular: false,
      accent: "from-amber-500 to-orange-600",
      borderColor: "border-amber-400",
      bgCard: "bg-amber-50/50",
      btnStyle: "bg-amber-600 text-white hover:bg-amber-700 shadow-[0_4px_0_#b45309]",
      features: [
        "10 uplifting musical therapy lessons",
        "Interactive rainbow piano & rhythm games",
        "Curated joyful YouTube music videos",
        "Melody games that soothe and inspire",
        "Special badges celebrating musical milestones",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#fcfdff] text-slate-900 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-amber-200 selection:text-amber-900">
      {/* 🌟 1. FIXED HEADER */}
      <header className="fixed top-0 left-0 right-0 w-full z-50 bg-[#fcfdff]/90 backdrop-blur-md border-b-2 border-slate-200/60 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo Brand: No outer rectangle, colors match logo */}
          <Link href="/" className="flex items-center gap-2.5 select-none cursor-pointer group">
            <Image
              alt="Hospital School Logo"
              className="rounded-xl object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-sm"
              height={42}
              priority
              src="/logo.png"
              width={42}
            />
            <span className="font-['Outfit',sans-serif] text-2xl font-black tracking-tight text-slate-900">
              Hospital{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600">
                School
              </span>
            </span>
          </Link>

          {/* Dynamic Sliding Pill Navigation */}
          <nav className="hidden md:flex relative items-center bg-slate-100/80 p-1.5 rounded-full border border-slate-200/70 shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)] backdrop-blur-md">
            <span
              className="absolute top-1.5 bottom-1.5 bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] z-0"
              style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
            />
            {navItems.map((item, idx) => (
              <a
                key={item.name}
                ref={(el) => {
                  navRefs.current[idx] = el;
                }}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href, item.name)}
                className={`relative text-[15px] px-5 py-1.5 z-10 transition-colors duration-300 rounded-full select-none font-bold ${
                  activeNav === item.name
                    ? "text-[#4343d5]"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Telegram Admin Link */}
            <a
              href="https://t.me/jasminaa_2"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 border-2 border-[#4343d5]/30 text-[#4343d5] hover:border-[#4343d5]/85 hover:shadow-[0_0_15px_rgba(67,67,213,0.3)] font-bold text-[14px] px-4 py-2 rounded-full hover:bg-[#4343d5]/5 transition-all active:translate-y-px cursor-pointer"
            >
              <Send className="size-4" />
              <span>Contact Admin</span>
            </a>

            {/* JOIN Button -> Platform Entrance */}
            <Link
              href="/platform"
              className="relative group bg-gradient-to-r from-[#4343d5] to-purple-600 text-white text-[14px] px-6 py-2.5 rounded-full font-black shadow-[0_4px_14px_0_rgba(67,67,213,0.39)] hover:shadow-[0_0_25px_rgba(67,67,213,0.7)] hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2 overflow-hidden cursor-pointer"
            >
              <span className="relative z-10 tracking-wider">JOIN</span>
              <ArrowRight className="size-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </header>

      {/* 🚀 MAIN CONTENT */}
      <main className="pt-20">
        {/* 🎈 HERO SECTION */}
        <section className="relative overflow-hidden pt-12 pb-20 lg:py-24">
          {/* Playful background glows */}
          <div className="absolute top-10 left-1/4 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Big, Friendly, Childlike Headlines */}
              <div className="lg:col-span-7 flex flex-col items-start text-left">
                {/* Project Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 border-2 border-amber-300 shadow-xs mb-6">
                  <Sparkles className="size-4 text-amber-600" />
                  <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-amber-800">
                    Education Beyond Cancer Initiative
                  </span>
                </div>

                {/* Big Main Title */}
                <h1 className="font-['Outfit',sans-serif] text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
                  Joyful, AI-Powered Learning for{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4343d5] via-purple-600 to-pink-500">
                    Hospitalized Children
                  </span>
                </h1>

                {/* Friendly explanation */}
                <p className="text-lg sm:text-xl font-medium text-slate-600 leading-relaxed mb-8 max-w-2xl">
                  Hospital schooling shouldn't be limited to just basic reading and math. We bring
                  interactive <strong>English</strong>, <strong>Russian</strong>, and{" "}
                  <strong>Music therapy</strong> right to pediatric wards with cheerleading mascots,
                  adaptive AI personalization, and warm human teachers.
                </p>

                {/* Call to Actions */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                  <Link
                    href="/platform"
                    className="inline-flex items-center justify-center gap-2 bg-[#4343d5] hover:bg-indigo-600 text-white font-black text-lg px-8 py-4 rounded-2xl shadow-[0_6px_0_#2e2bc2] hover:-translate-y-0.5 active:translate-y-1 active:shadow-none transition-all cursor-pointer"
                  >
                    <span>Start Learning Free 🚀</span>
                  </Link>

                  <a
                    href="#courses"
                    onClick={(e) => handleNavClick(e, "#courses", "Courses")}
                    className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-900 font-black text-lg px-7 py-4 rounded-2xl shadow-[0_6px_0_#d97706] hover:-translate-y-0.5 active:translate-y-1 active:shadow-none transition-all cursor-pointer"
                  >
                    <span>Explore Courses 🎵</span>
                  </a>
                </div>

                {/* Cheerful Badges */}
                <div className="mt-10 flex flex-wrap items-center gap-6 text-sm font-bold text-slate-700">
                  <div className="flex items-center gap-2 bg-emerald-100/80 px-3.5 py-1.5 rounded-full border border-emerald-300">
                    <CheckCircle2 className="size-4 text-emerald-600" />
                    <span>100% Free Forever</span>
                  </div>
                  <div className="flex items-center gap-2 bg-sky-100/80 px-3.5 py-1.5 rounded-full border border-sky-300">
                    <Heart className="size-4 text-rose-500 fill-rose-500" />
                    <span>Built for Hospital Kids</span>
                  </div>
                  <div className="flex items-center gap-2 bg-purple-100/80 px-3.5 py-1.5 rounded-full border border-purple-300">
                    <Star className="size-4 text-amber-500 fill-amber-500" />
                    <span>Ages 8 to 16</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Cheerful Mascot & Visual Hero Card */}
              <div className="lg:col-span-5 relative flex justify-center">
                <div className="relative w-full max-w-md bg-gradient-to-b from-sky-100 via-indigo-50 to-purple-100 p-6 rounded-3xl border-4 border-white shadow-2xl overflow-hidden">
                  {/* Cheerful speech bubble from mascot */}
                  <div className="relative bg-white rounded-2xl p-4 shadow-md border-2 border-indigo-100 mb-6 flex items-start gap-3">
                    <div className="text-2xl">🌟</div>
                    <div>
                      <p className="font-black text-indigo-950 text-base">
                        &quot;You are doing amazing today!&quot;
                      </p>
                      <p className="text-xs font-semibold text-slate-500">
                        Cheering Teacher Mascot • Ready for Lesson 1
                      </p>
                    </div>
                  </div>

                  {/* Hero SVG illustration */}
                  <div className="relative h-64 sm:h-72 w-full flex items-center justify-center">
                    <Image
                      alt="Happy children learning"
                      className="object-contain drop-shadow-md"
                      fill
                      priority
                      src="/hero.svg"
                    />
                  </div>

                  {/* Bottom Interactive Mini-Preview */}
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 mt-4 border border-indigo-100 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-black uppercase text-indigo-700 tracking-wider">
                        Duolingo-Style Quiz
                      </span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-full">
                        3 Choices
                      </span>
                    </div>
                    <p className="text-sm font-bold text-slate-800 mb-3">
                      Select the happy musical note:
                    </p>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-slate-100 hover:bg-slate-200 text-xs font-bold py-2 rounded-xl text-center cursor-pointer transition-colors">
                        🎹 Piano
                      </div>
                      <div className="bg-emerald-500 text-white text-xs font-black py-2 rounded-xl text-center shadow-[0_2px_0_#047857] scale-105">
                        🎵 Melody
                      </div>
                      <div className="bg-slate-100 hover:bg-slate-200 text-xs font-bold py-2 rounded-xl text-center cursor-pointer transition-colors">
                        🎺 Trumpet
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 🧩 2. THE PROBLEM, WHY, & THE SOLUTION */}
        <section className="py-20 bg-slate-50/80 border-y border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center mb-16">
              <span className="text-[#4343d5] font-black uppercase tracking-[0.15em] text-xs mb-3 bg-[#4343d5]/10 px-4 py-1.5 rounded-full border border-[#4343d5]/20">
                Our Heart & Mission
              </span>
              <h2 className="font-['Outfit',sans-serif] text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4">
                Why Education Beyond Cancer?
              </h2>
              <p className="max-w-2xl text-slate-600 font-medium text-base sm:text-lg">
                Children fighting serious illnesses deserve rich creative horizons, not just
                rudimentary lessons.
              </p>
              <div className="w-16 h-1.5 bg-[#4343d5] rounded-full mt-3" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1: The Problem */}
              <div className="bg-rose-50/70 border-3 border-rose-200 rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:-translate-y-1 hover:shadow-md transition-all">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-rose-200/80 flex items-center justify-center text-2xl mb-6 shadow-inner">
                    🏥
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider text-rose-600 bg-rose-100 px-3 py-1 rounded-full">
                    The Problem
                  </span>
                  <h3 className="font-['Outfit',sans-serif] text-2xl font-black text-slate-900 mt-4 mb-3">
                    Hospital Schooling is Limited
                  </h3>
                  <p className="text-slate-700 font-medium text-sm leading-relaxed">
                    Most hospital schools only cover basic reading and basic arithmetic. When
                    children spend months in medical care, they miss out on learning foreign
                    languages, music, and the arts that bring hope and joy.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-rose-200/70 text-xs font-bold text-rose-800">
                  ⚠️ Children feel isolated from creative subjects.
                </div>
              </div>

              {/* Card 2: Why? */}
              <div className="bg-amber-50/70 border-3 border-amber-200 rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:-translate-y-1 hover:shadow-md transition-all">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-amber-200/80 flex items-center justify-center text-2xl mb-6 shadow-inner">
                    ❓
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
                    Why Does This Happen?
                  </span>
                  <h3 className="font-['Outfit',sans-serif] text-2xl font-black text-slate-900 mt-4 mb-3">
                    Massive Personalization Needed
                  </h3>
                  <p className="text-slate-700 font-medium text-sm leading-relaxed">
                    Every child in a hospital has different therapy times, fatigue levels, and
                    moods. Governments and hospitals simply cannot train and hire hundreds of
                    specialized language and music teachers for each pediatric ward.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-amber-200/70 text-xs font-bold text-amber-800">
                  ⚙️ High cost &amp; severe teacher shortages.
                </div>
              </div>

              {/* Card 3: The Solution */}
              <div className="bg-emerald-50/70 border-3 border-emerald-200 rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:-translate-y-1 hover:shadow-md transition-all">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-emerald-200/80 flex items-center justify-center text-2xl mb-6 shadow-inner">
                    💡
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                    The Solution
                  </span>
                  <h3 className="font-['Outfit',sans-serif] text-2xl font-black text-slate-900 mt-4 mb-3">
                    AI Personalization + Loving Teachers
                  </h3>
                  <p className="text-slate-700 font-medium text-sm leading-relaxed">
                    Our AI automatically adapts the pace, difficulty, and interest to each child,
                    repeating questions until they master them. Meanwhile, a few dedicated teachers
                    facilitate the room and give vital human warmth and encouragement!
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-emerald-200/70 text-xs font-bold text-emerald-800">
                  ✨ Perfect harmony of technology and human care.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 🎯 3. AGE GROUPS (8-11, 11-13, 13-16) */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-orange-600 font-black uppercase tracking-[0.15em] text-xs mb-3 bg-orange-100 px-4 py-1.5 rounded-full border border-orange-200">
              Personalized by Age
            </span>
            <h2 className="font-['Outfit',sans-serif] text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4">
              Divided Into 3 Tailored Age Groups
            </h2>
            <p className="max-w-2xl text-slate-600 font-medium text-base sm:text-lg">
              The platform automatically adjusts difficulty, cartoon visuals, and materials to match
              the child&apos;s exact developmental stage.
            </p>
            <div className="w-16 h-1.5 bg-orange-400 rounded-full mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {ageGroups.map((group, idx) => (
              <div
                key={idx}
                className={`group relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between bg-gradient-to-b ${group.bgGradient} border-2 sm:border-3 ${group.borderColor} hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl`}
              >
                <div>
                  {/* Top Bar: Age & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-['Outfit',sans-serif] text-2xl sm:text-[26px] font-black text-slate-900 tracking-tight">
                      {group.age}
                    </span>
                    <span className={`text-xs font-black px-3 py-1 rounded-full border shadow-xs flex items-center gap-1.5 ${group.pillBg}`}>
                      <span className="text-sm">{group.icon}</span>
                      <span>{group.badge}</span>
                    </span>
                  </div>

                  {/* Creative Header & Tagline */}
                  <div className="mb-5">
                    <h3 className="font-['Outfit',sans-serif] text-xl font-black text-slate-900 mb-1.5">
                      {group.title}
                    </h3>
                    <p className="text-slate-600 font-semibold text-xs sm:text-sm">
                      {group.tagline}
                    </p>
                  </div>

                  {/* Highlights Mini-Tiles */}
                  <div className="space-y-2.5 mb-6">
                    {group.highlights.map((item, hIdx) => (
                      <div
                        key={hIdx}
                        className="flex items-center gap-3 p-2.5 rounded-2xl bg-white/85 border border-slate-200/80 shadow-xs hover:bg-white hover:border-slate-300 transition-all"
                      >
                        <div className="size-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-lg shrink-0 shadow-inner">
                          {item.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-black text-slate-900 text-xs sm:text-sm truncate">
                            {item.label}
                          </p>
                          <p className="text-[11px] font-semibold text-slate-500 truncate">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Section: Tag & 3D CTA Button */}
                <div className="pt-4 border-t border-slate-200/70 flex flex-col gap-3">
                  <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 text-center">
                    {group.tag}
                  </div>
                  <Link
                    href="/platform"
                    className={`w-full py-3.5 rounded-2xl font-black text-sm text-center transition-all transform active:translate-y-1 active:shadow-none flex items-center justify-center gap-2 cursor-pointer ${group.btnClass}`}
                  >
                    <span>Explore Lessons</span>
                    <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 🎮 4. HOW IT WORKS (DUOLINGO-STYLE + AI ANALYTICS + TEACHER ADMIN) */}
        <section id="how-it-works" className="py-20 bg-gradient-to-b from-indigo-50/60 via-purple-50/40 to-white border-t border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center mb-16">
              <span className="text-[#4343d5] font-black uppercase tracking-[0.15em] text-xs mb-3 bg-[#4343d5]/10 px-4 py-1.5 rounded-full border border-[#4343d5]/20">
                Child-Friendly &amp; Playful
              </span>
              <h2 className="font-['Outfit',sans-serif] text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4">
                How It Works: Fun, Simple &amp; Caring
              </h2>
              <p className="max-w-2xl text-slate-600 font-medium text-base sm:text-lg">
                Big writings, colorful buttons, and cheerful teacher mascots that make every minute
                in the hospital feel like a playful adventure.
              </p>
              <div className="w-16 h-1.5 bg-[#4343d5] rounded-full mt-3" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Feature 1: Duolingo 3 Answers */}
              <div className="bg-white rounded-3xl p-6 border-2 border-indigo-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-[#4343d5] flex items-center justify-center font-black text-xl mb-4">
                    🎯
                  </div>
                  <h3 className="font-['Outfit',sans-serif] text-xl font-black text-slate-900 mb-2">
                    3-Choice Quizzes
                  </h3>
                  <p className="text-slate-600 text-sm font-medium leading-relaxed">
                    Duolingo-style classes where students pick the correct answer from 3 big,
                    colorful options. Never overwhelming, always fun!
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-indigo-600">
                  🎉 Instant cheerful sounds &amp; points
                </div>
              </div>

              {/* Feature 2: Cheering Mascots */}
              <div className="bg-white rounded-3xl p-6 border-2 border-amber-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center font-black text-xl mb-4">
                    🦁
                  </div>
                  <h3 className="font-['Outfit',sans-serif] text-xl font-black text-slate-900 mb-2">
                    Cheering Mascots
                  </h3>
                  <p className="text-slate-600 text-sm font-medium leading-relaxed">
                    Cute cartoon teacher mascots celebrate every correct answer, saying &quot;Good
                    job!&quot;, &quot;You are a superstar!&quot;, and giving high-fives.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-amber-600">
                  ⭐ Continuous positive reinforcement
                </div>
              </div>

              {/* Feature 3: 10 Lessons, Video, Flashcards */}
              <div className="bg-white rounded-3xl p-6 border-2 border-emerald-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-black text-xl mb-4">
                    📚
                  </div>
                  <h3 className="font-['Outfit',sans-serif] text-xl font-black text-slate-900 mb-2">
                    10 Lessons &amp; Flashcards
                  </h3>
                  <p className="text-slate-600 text-sm font-medium leading-relaxed">
                    10 rich lessons per subject featuring YouTube links, word memorization agendas,
                    and Lumosity-style brain flashcard games.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-emerald-600">
                  🔄 Repeats questions until mastered
                </div>
              </div>

              {/* Feature 4: AI Progress & Teacher Admin Panel */}
              <div className="bg-white rounded-3xl p-6 border-2 border-purple-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center font-black text-xl mb-4">
                    📊
                  </div>
                  <h3 className="font-['Outfit',sans-serif] text-xl font-black text-slate-900 mb-2">
                    Teacher Admin Panel
                  </h3>
                  <p className="text-slate-600 text-sm font-medium leading-relaxed">
                    AI analyzes each child&apos;s progress in charts, providing teacher accounts
                    with tips on who needs rest, motivation, or praise.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-purple-600">
                  📈 Visual metrics &amp; teacher guidance
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 💳 5. COURSES SECTION (Tariflar sectioni Courses ga o'zgartirildi, narxlar FREE, Ishtirok etish -> /platform) */}
        <section id="courses" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 scroll-mt-24">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-[#4343d5] font-black uppercase tracking-[0.15em] text-xs mb-3 bg-[#4343d5]/10 px-4 py-1.5 rounded-full border border-[#4343d5]/20">
              100% Free Educational Packages
            </span>
            <h2 className="font-['Outfit',sans-serif] text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-[#4343d5] to-purple-600 pb-2 drop-shadow-sm">
              Our 3 Special Courses
            </h2>
            <p className="max-w-xl text-slate-600 font-medium text-base sm:text-lg">
              English, Russian, and Music — packed with 10 personalized lessons, memory flashcards,
              and video clips.
            </p>
            <div className="w-16 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course, i) => (
              <div
                key={i}
                className={`bg-white rounded-3xl border-3 ${course.borderColor} overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col relative group`}
              >
                {course.popular && (
                  <div className="absolute top-4 right-4 bg-emerald-600 text-white text-xs font-black px-3.5 py-1 rounded-full z-20 shadow-md">
                    Most Popular 🌟
                  </div>
                )}

                {/* 🎨 Top Course Card Image with Flag & Cartoon Mascot */}
                <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-100">
                  <Image
                    alt={course.mascot}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 33vw"
                    src={course.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />

                  {/* Top Flag / Badge Floating Pill */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full shadow-md border border-white/60">
                    <span className="text-base">{course.badgeIcon}</span>
                    <span className="text-[11px] font-black uppercase tracking-wider text-slate-800">
                      {course.badgeLabel}
                    </span>
                  </div>

                  {/* Bottom Title on Image */}
                  <div className="absolute bottom-3.5 left-5 right-5 z-10">
                    <span className="text-[10px] font-black uppercase tracking-wider bg-white/25 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/30 text-white mb-1.5 inline-block">
                      {course.tag}
                    </span>
                    <h3 className="font-['Outfit',sans-serif] text-2xl font-black text-white drop-shadow-md leading-tight">
                      {course.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-slate-600 font-medium text-xs leading-relaxed mb-5">
                      {course.desc}
                    </p>

                    <div className="flex items-baseline gap-2 mb-6 pb-4 border-b border-slate-100">
                      <span className="text-4xl font-black text-slate-950 tracking-tight">
                        {course.price}
                      </span>
                      <span className="text-xs font-bold text-emerald-600 uppercase">
                        For Hospital Kids
                      </span>
                    </div>

                    <div className="space-y-3 mb-8">
                      {course.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                          <CheckCircle2 className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Join Course button -> /platform */}
                  <Link
                    href="/platform"
                    className={`w-full block text-center py-3.5 rounded-xl font-black text-sm transition-all hover:opacity-95 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer ${course.btnStyle}`}
                  >
                    Start {course.title} ➔
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 🌟 6. CHEERING MASCOT BANNER */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 rounded-3xl p-8 sm:p-12 text-slate-950 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 border-4 border-amber-300">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-3xl flex items-center justify-center text-4xl shadow-md shrink-0">
                🦁
              </div>
              <div>
                <span className="text-xs font-black uppercase tracking-wider bg-white/40 px-3 py-1 rounded-full text-slate-900">
                  Every Child Is a Superstar
                </span>
                <h3 className="font-['Outfit',sans-serif] text-2xl sm:text-3xl font-black mt-2 mb-1">
                  &quot;You can do anything! Learning is your superpower!&quot;
                </h3>
                <p className="font-bold text-sm text-slate-900/80">
                  Join hundreds of brave hospital kids having fun, singing, and learning languages
                  today.
                </p>
              </div>
            </div>

            <Link
              href="/platform"
              className="bg-white hover:bg-slate-100 text-slate-900 font-black text-base px-8 py-4 rounded-2xl shadow-[0_4px_0_#b45309] hover:-translate-y-0.5 active:translate-y-1 transition-all shrink-0 cursor-pointer"
            >
              Start Free Today 🚀
            </Link>
          </div>
        </section>
      </main>

      {/* 📞 7. CONTACT & FOOTER */}
      <footer id="contact" className="bg-white border-t border-slate-200/60 pt-16 pb-8 relative overflow-hidden scroll-mt-24">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#4343d5]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 relative z-10">
            {/* Column 1: Brand Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2.5 select-none mb-4">
                <Image
                  alt="Hospital School Logo"
                  className="rounded-lg object-contain drop-shadow-sm"
                  height={32}
                  src="/logo.png"
                  width={32}
                />
                <span className="font-['Outfit',sans-serif] text-2xl font-black tracking-tight text-slate-900">
                  Hospital{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600">
                    School
                  </span>
                </span>
              </div>

              <p className="text-slate-500 text-sm max-w-sm mb-6 leading-relaxed">
                <strong>Education Beyond Cancer</strong> — Bringing foreign languages, joyful
                music, and AI personalization into pediatric hospital wards so every child thrives.
              </p>

              {/* Chat with Admin -> Telegram */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                <a
                  href="https://t.me/jasminaa_2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-[#4343d5]/20 bg-[#4343d5]/5 text-[#4343d5] hover:bg-[#4343d5] hover:text-white hover:shadow-[0_0_20px_rgba(67,67,213,0.5)] transition-all font-bold text-sm px-5 py-2.5 rounded-full cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Send className="size-4" />
                  <span>Chat with Admin</span>
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="font-bold text-slate-900 mb-4 text-sm">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    onClick={(e) => handleNavClick(e, "#", "Home")}
                    className="text-sm text-slate-500 hover:text-[#4343d5] transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4343d5]/50" />
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#courses"
                    onClick={(e) => handleNavClick(e, "#courses", "Courses")}
                    className="text-sm text-slate-500 hover:text-[#4343d5] transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4343d5]/50" />
                    Courses
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, "#contact", "Contact")}
                    className="text-sm text-slate-500 hover:text-[#4343d5] transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4343d5]/50" />
                    Contact
                  </a>
                </li>
                <li>
                  <Link
                    href="/platform"
                    className="text-sm text-[#4343d5] font-bold hover:underline flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4343d5]" />
                    Join Platform (JOIN)
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact & Address */}
            <div>
              <h4 className="font-bold text-slate-900 mb-4 text-sm">Contact &amp; Location</h4>
              <ul className="space-y-4">
                <li className="group flex items-start gap-3 text-slate-500">
                  <MapPin className="size-5 text-[#4343d5] p-1 bg-[#4343d5]/10 rounded-lg shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider mb-0.5 text-slate-400">
                      Location
                    </p>
                    <p className="text-sm font-semibold text-slate-800 leading-snug">
                      Presidential School in Termez, Surxondaryo Region, Republic of Uzbekistan
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-200/60 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-500 relative z-10">
            <span>© 2026 Hospital School — Education Beyond Cancer. All rights reserved.</span>
            <div className="flex items-center gap-6">
              <Link href="/platform" className="hover:text-[#4343d5] transition-colors">
                Platform
              </Link>
              <a href="#contact" className="hover:text-[#4343d5] transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
