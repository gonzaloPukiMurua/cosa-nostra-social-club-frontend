// ─────────────────────────────────────────────────────────────
//  Sanity data-fetching helpers
//  Each function returns typed data and gracefully falls back
//  to content.ts if Sanity is not yet configured.
// ─────────────────────────────────────────────────────────────
import { createClient } from '@sanity/client';
import imageUrlBuilder  from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { sanityConfig } from '@/sanity/config';

// Fallback content used when Sanity is not configured
import {
  MENU_ITEMS, CLUB, HERO, CONTACT, HOURS, FOOTER,
  type MenuItem,
} from '@/content';

// ── Client ───────────────────────────────────────────────────
const isSanityConfigured = Boolean(sanityConfig.projectId);

export const client = isSanityConfigured
  ? createClient(sanityConfig)
  : null;

// ── Image URL builder ────────────────────────────────────────
const builder = client ? imageUrlBuilder(client) : null;

export function urlFor(source: SanityImageSource) {
  if (!builder) return { url: () => source as string };
  return builder.image(source);
}

// ── Type: Sanity image field ─────────────────────────────────
export type SanityImage = {
  asset: { _ref: string };
  hotspot?: { x: number; y: number };
};

// ── Fetchers ─────────────────────────────────────────────────

export async function getMenuItems(): Promise<MenuItem[]> {
  if (!client) return MENU_ITEMS;
  try {
    const data = await client.fetch<MenuItem[]>(`
      *[_type == "menuItem"] | order(order asc) {
        name, description, price, category, badge,
        "image": image.asset->url
      }
    `);
    return data.length ? data : MENU_ITEMS;
  } catch {
    return MENU_ITEMS;
  }
}

export async function getSiteSettings() {
  if (!client) return { contact: CONTACT, hours: HOURS };
  try {
    const data = await client.fetch(`
      *[_type == "siteSettings"][0] {
        phone, phoneTel, whatsapp, whatsappDisplay,
        instagram, instagramHandle, facebook,
        address, city, province,
        googleMapsUrl, googleMapsEmbed, hours
      }
    `);
    return data ?? { contact: CONTACT, hours: HOURS };
  } catch {
    return { contact: CONTACT, hours: HOURS };
  }
}

export async function getClubSection() {
  if (!client) return CLUB;
  try {
    const data = await client.fetch(`
      *[_type == "clubSection"][0] {
        label,
        "bodyCopy": [bodyCopy1, bodyCopy2],
        "photos": photos[] {
          "src": image.asset->url,
          alt, caption
        },
        pillars
      }
    `);
    return data ?? CLUB;
  } catch {
    return CLUB;
  }
}

export async function getHeroSection() {
  if (!client) return HERO;
  try {
    const data = await client.fetch(`
      *[_type == "heroSection"][0] {
        headline, headlineAccent, headlineSuffix,
        subheadline, ctaPrimary, ctaSecondary,
        "backgroundImage": backgroundImage.asset->url
      }
    `);
    return data ?? HERO;
  } catch {
    return HERO;
  }
}
