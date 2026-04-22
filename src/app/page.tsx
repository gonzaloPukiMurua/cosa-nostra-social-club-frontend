// Server component — all data fetching happens here at build/request time.
// Each section receives its data as props; no client-side fetching needed.

import Navbar          from '@/components/Navbar';
import Hero            from '@/sections/Hero';
import Menu            from '@/sections/Menu';
import Club            from '@/sections/Club';
import LocationSection from '@/sections/Location';
import Footer          from '@/sections/Footer';

import {
  getMenuItems,
  getSiteSettings,
  getClubSection,
  getHeroSection,
} from '@/lib/sanity';

export const revalidate = 60; // ISR: rebuild page at most every 60 seconds

export default async function CosaNostra() {
  // All fetches run in parallel
  const [menuItems, siteSettings, clubData, heroData] = await Promise.all([
    getMenuItems(),
    getSiteSettings(),
    getClubSection(),
    getHeroSection(),
  ]);

  return (
    <main>
      <Navbar />
      <Hero     data={heroData} contact={siteSettings.contact ?? siteSettings} />
      <Menu     items={menuItems} />
      <Club     data={clubData} />
      <LocationSection
        contact={siteSettings.contact ?? siteSettings}
        hours={siteSettings.hours}
      />
      <Footer />
    </main>
  );
}
