import React from 'react'
import BlogSection from './BlogSection';
import ContactSection from './ContactSection';
import HeroSection from './HeroSection';
import OfferingSection from './OfferingSection';
import TeamSection from './TeamSection';

function Main() {
    return (
        <div
            className='w-[90vw] flex flex-col gap-4 items-center'
        >
            <HeroSection />
            <OfferingSection />
            <TeamSection />
            <BlogSection />
            <ContactSection />
        </div>
    )
}

export default Main;
