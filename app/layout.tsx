'use client';

import localFont from "next/font/local";
import "./globals.css";
import React, { createContext, useContext, useEffect, useState } from 'react';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});



import { DarkModeContext } from './hooks/useDarkMode';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggle = () => {
    setDark(d => {
      const newVal = !d;
      if (newVal) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return newVal;
    });
  };

  return (
    <html lang="id" className={dark ? 'dark' : ''}>
      <body className="bg-white dark:bg-[#0F172A] transition-colors duration-300">
        <DarkModeContext.Provider value={{dark, toggle}}>
          {children}
        </DarkModeContext.Provider>
      </body>
    </html>
  );
}
