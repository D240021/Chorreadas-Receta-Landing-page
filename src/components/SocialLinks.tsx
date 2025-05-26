import React from 'react';
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from 'lucide-react';
interface SocialLinksProps {
  brand: 'donpepe' | 'elguche';
  className?: string;
}
export function SocialLinks({
  brand,
  className = ''
}: SocialLinksProps) {
  const links = {
    donpepe: [{
      icon: <FacebookIcon size={20} />,
      url: 'https://facebook.com/donpepe',
      label: 'Facebook Don Pepe'
    }, {
      icon: <InstagramIcon size={20} />,
      url: 'https://instagram.com/donpepe',
      label: 'Instagram Don Pepe'
    }, {
      icon: <TwitterIcon size={20} />,
      url: 'https://twitter.com/donpepe',
      label: 'Twitter Don Pepe'
    }],
    elguche: [{
      icon: <FacebookIcon size={20} />,
      url: 'https://facebook.com/elguche',
      label: 'Facebook elguche.com'
    }, {
      icon: <InstagramIcon size={20} />,
      url: 'https://instagram.com/elguche',
      label: 'Instagram elguche.com'
    }, {
      icon: <YoutubeIcon size={20} />,
      url: 'https://youtube.com/elguche',
      label: 'YouTube elguche.com'
    }]
  };
  const socialLinks = links[brand];
  return <div className={`flex space-x-4 ${className}`}>
      {socialLinks.map((link, index) => <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center bg-amber-100 text-amber-800 hover:bg-amber-800 hover:text-amber-100 transition-colors" aria-label={link.label}>
          {link.icon}
        </a>)}
    </div>;
}