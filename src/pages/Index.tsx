import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import ResumeDownload from "@/components/ResumeDownload";
import Stats from "@/components/Stats";
import ProjectFilters from "@/components/ProjectFilters";
import Experience from "@/components/Experience";
import ThemeCustomizer from "@/components/ThemeCustomizer";
import Certifications from "@/components/Certifications";
import Timeline from "@/components/Timeline";
import ShareButton from "@/components/ShareButton";
import AnimatedSection from "@/components/AnimatedSection";
import KeyboardShortcutsHelper from "@/components/KeyboardShortcutsHelper";
import { useKeyboardShortcuts } from "@/hooks/useKeyboardShortcuts";

const Index = () => {
  useKeyboardShortcuts();

  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Header />
      <Hero />
      <AnimatedSection animation="fade">
        <Stats />
      </AnimatedSection>
      <AnimatedSection animation="slide-left">
        <About />
      </AnimatedSection>
      {/* <AnimatedSection animation="slide-right">
        <Experience />
      </AnimatedSection> */}
      <AnimatedSection animation="scale">
        <Skills />
      </AnimatedSection>
      <AnimatedSection animation="fade">
        <Certifications />
      </AnimatedSection>
      {/* <AnimatedSection animation="fade">
        <Timeline />
      </AnimatedSection> */}
      {/* <AnimatedSection animation="slide-left">
        <Projects />
      </AnimatedSection> */}
      <ProjectFilters />
      <AnimatedSection animation="slide-right">
        <Testimonials />
      </AnimatedSection>
      <ResumeDownload />
      <AnimatedSection animation="fade">
        <Contact />
      </AnimatedSection>
      <Footer />
      <BackToTop />
      <ShareButton />
      <KeyboardShortcutsHelper />
      <ThemeCustomizer />
    </div>
  );
};

export default Index;
