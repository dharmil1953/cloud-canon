import Link from 'next/link';
import settings from '@/_data/settings.json';

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/about" className="text-base text-gray-500 hover:text-gray-900">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-base text-gray-500 hover:text-gray-900">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-base text-gray-500 hover:text-gray-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Social
            </h3>
            <ul className="mt-4 space-y-4">
              {Object.entries(settings.social_links).map(([platform, url]) => (
                <li key={platform}>
                  <a
                    href={url}
                    className="text-base text-gray-500 hover:text-gray-900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {platform.charAt(0).toUpperCase() + platform.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <p className="text-base text-gray-500">
              {settings.footer_text}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}