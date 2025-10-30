import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import { Timeline } from './Timeline';
import { timelineData } from '../data/timeline';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

export const Hero = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCV = () => {
    alert('CV download functionality - Connect to your hosted CV file');
  };

  return (
    <section id="home" className="min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-20 bg-gradient-to-br from-muted-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 space-y-6 sm:space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-muted-900 leading-tight"
              >
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-accent-700">
                  John Doe
                </span>
              </motion.h1>

              <motion.p
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-lg sm:text-xl lg:text-2xl text-muted-700 font-medium"
              >
                Full Stack Developer & Tech Lead
              </motion.p>

              <motion.p
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-base sm:text-lg text-muted-600 leading-relaxed max-w-xl"
              >
                Passionate about building scalable web applications and mentoring developers.
                20+ years of experience crafting elegant solutions to complex problems.
              </motion.p>
            </div>

            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={handleDownloadCV}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent-600 text-white font-semibold rounded-lg hover:bg-accent-700 transition-all hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2"
              >
                <Download className="w-5 h-5" />
                Download CV
              </button>
              <button
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-accent-600 font-semibold rounded-lg border-2 border-accent-600 hover:bg-accent-50 transition-all hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2"
              >
                <Mail className="w-5 h-5" />
                Get in Touch
              </button>
            </motion.div>

            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="pt-8"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-muted-900 mb-6">My Journey</h2>
              <Timeline data={timelineData} />
            </motion.div>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.95 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="order-1 lg:order-2 flex items-center justify-center"
          >
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* REPLACE THIS PLACEHOLDER WITH YOUR PERSON IMAGE
                  Recommended: PNG with transparent background
                  Size: 800x1000px or similar portrait ratio
                  Optimize: Use WebP format for better performance
                  Path: /placeholder-person.png
              */}
              <div className="relative aspect-[4/5] w-full">
                <img
                  src="/placeholder-person.jpg"
                  alt="John Doe - Full Stack Developer"
                  className="w-full h-full object-contain object-center"
                  loading="eager"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div
                  className="hidden absolute inset-0 bg-gradient-to-br from-accent-100 to-accent-200 rounded-2xl items-center justify-center"
                  aria-hidden="true"
                >
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-4 bg-accent-300 rounded-full flex items-center justify-center">
                      <span className="text-6xl">👤</span>
                    </div>
                    <p className="text-muted-600 text-sm">
                      Replace with your photo
                      <br />
                      /placeholder-person.png
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
