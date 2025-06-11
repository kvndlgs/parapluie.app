import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BlogCategoryPage } from './pages/blog/BlogCategoryPage';
import { BlogPostPage } from './pages/blog/BlogPostPage';
import { LearningTopicPage } from '@/pages/learn/LearningTopicPage'; 
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage'
import BlogPage from '@/pages/BlogPage';
import LearnPage from '@/pages/LearnPage'
import { Toaster } from '@/components/ui/toaster';



function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage /> } />
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/blog/category/:categorySlug" element={<BlogCategoryPage />} />
          <Route path="/learn/:topicId" element={<LearningTopicPage />} />
          </Routes>
          <Toaster />
      </Layout>
      </Router>

  );
}


export default App;