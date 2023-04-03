import React from 'react'
import BlogSection from './BlogSection';
import ContactSection from './ContactSection';
import HeroSection from './HeroSection';
import OfferingSection from './OfferingSection';
import TeamSection from './TeamSection';

function Main() {
    return (
        <div>
            <HeroSection />
            <OfferingSection />
            <TeamSection />
            <BlogSection />
            <ContactSection />
        </div>
    )
}

export default Main;