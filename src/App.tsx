import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { RecipeDetails } from './components/RecipeDetails';
import { RegistrationForm } from './components/RegistrationForm';
import { VideoSection } from './components/VideoSection';
import { Footer } from './components/Footer';
export function App() {
  return <div className="min-h-screen bg-amber-50">
      <Header />
      <main className="w-full">
        <Hero />
        <RecipeDetails />
        <VideoSection />
        <RegistrationForm />
        <Footer />
      </main>
    </div>;
}