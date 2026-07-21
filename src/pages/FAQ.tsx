import { useMemo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import {
  andamanFaqs,
  faqCategories,
  popularFaqIds,
  FAQ_HERO_IMAGE,
  getCategoryLabel,
  type FAQItem,
} from '../data/faqContent';

const SITE_URL = 'https://luxuryandamans.com';

const relatedGuides = [
  { label: 'Ferry booking guide', href: '/blog/andaman-ferry-booking-guide' },
  { label: 'Permits for foreign tourists', href: '/blog/andaman-permits-foreign-tourists-2026' },
  { label: 'Trip cost calculator', href: '/calculator' },
  { label: 'Travel logistics guide', href: '/guide' },
  { label: 'Tour packages', href: '/packages' },
];

function FaqBlock({ faq, defaultOpen = false }: { faq: FAQItem; defaultOpen?: boolean }) {
  return (
    <details
      id={faq.id}
      open={defaultOpen}
      className="group border-b border-night/10 last:border-b-0"
    >
      <summary className="cursor-pointer list-none py-4 pr-2 flex gap-3 items-start [&::-webkit-details-marker]:hidden">
        <span
          className="mt-1 shrink-0 w-5 h-5 rounded border border-night/20 flex items-center justify-center text-xs text-night/50 group-open:bg-azure group-open:border-azure group-open:text-white"
          aria-hidden
        >
          ?
        </span>
        <span className="font-medium text-night text-base leading-snug group-hover:text-azure transition-colors">
          {faq.question}
        </span>
      </summary>
      <div className="pb-5 pl-8 text-night/75 leading-relaxed text-[15px]">
        {faq.answer}
      </div>
    </details>
  );
}

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredFaqs = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    return andamanFaqs.filter((faq) => {
      const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
      if (!matchesCategory) return false;
      if (!q) return true;
      return (
        faq.question.toLowerCase().includes(q) ||
        faq.answer.toLowerCase().includes(q)
      );
    });
  }, [searchTerm, activeCategory]);

  const groupedFaqs = useMemo(() => {
    if (activeCategory !== 'all') {
      return [{ categoryId: activeCategory, items: filteredFaqs }];
    }
    const groups: { categoryId: string; items: FAQItem[] }[] = [];
    faqCategories
      .filter((c) => c.id !== 'all')
      .forEach((cat) => {
        const items = filteredFaqs.filter((f) => f.category === cat.id);
        if (items.length) groups.push({ categoryId: cat.id, items });
      });
    return groups;
  }, [filteredFaqs, activeCategory]);

  const popularFaqs = useMemo(
    () => popularFaqIds.map((id) => andamanFaqs.find((f) => f.id === id)).filter(Boolean) as FAQItem[],
    []
  );

  // Open matching details when searching
  useEffect(() => {
    if (!searchTerm.trim()) return;
    filteredFaqs.forEach((faq) => {
      const el = document.getElementById(faq.id);
      if (el instanceof HTMLDetailsElement) el.open = true;
    });
  }, [searchTerm, filteredFaqs]);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    name: 'Andaman Islands Travel FAQ — Ferries, Permits, Costs & Safety',
    description:
      'Answers to common questions about Andaman tour planning: Makruzz ferries, RAP permits, trip costs, diving, hotels, and safety. Updated 2026.',
    url: `${SITE_URL}/faq`,
    inLanguage: 'en-IN',
    isPartOf: { '@type': 'WebSite', name: 'Luxury Andamans', url: SITE_URL },
    mainEntity: andamanFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      url: `${SITE_URL}/faq#${faq.id}`,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Andaman Travel FAQ',
    description:
      'Frequently asked questions about visiting the Andaman Islands — flights, ferries, permits, packages, and activities.',
    url: `${SITE_URL}/faq`,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'FAQ', item: `${SITE_URL}/faq` },
      ],
    },
  };

  return (
    <div className="min-h-screen bg-pearl font-sans">
      <SEO
        title="Andaman FAQ: Ferries, Permits, Costs & Safety (2026)"
        description="50+ answered questions about Andaman travel — Makruzz & Nautika ferries, RAP permits, trip costs, scuba diving, hotels, monsoon tips & booking help. Practical answers from a Port Blair team."
        pathname="/faq"
        image={FAQ_HERO_IMAGE}
        keywords="andaman faq, andaman ferry questions, makruzz booking help, andaman permit for foreigners, is andaman safe, andaman trip cost 2026, havelock ferry timing, neil island travel, andaman honeymoon faq, port blair travel tips, restricted area permit andaman"
        targetAudience="all"
        faqData={andamanFaqs.map((f) => ({ question: f.question, answer: f.answer }))}
        structuredData={faqSchema}
        extraStructuredData={[webPageSchema]}
      />
      <Header />

      <main className="page-content pb-16">
        {/* Page header — compact, not full-screen hero */}
        <div className="border-b border-night/10 bg-white">
          <div className="container mx-auto px-4 md:px-8 py-8 md:py-10">
            <nav aria-label="Breadcrumb" className="text-sm text-night/50 mb-6">
              <Link to="/" className="hover:text-azure">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-night">FAQ</span>
            </nav>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <p className="text-sm font-medium text-azure mb-2">Help centre · {andamanFaqs.length} questions</p>
                <h1 className="text-3xl md:text-4xl font-display font-bold text-night leading-tight mb-4">
                  Andaman Travel FAQ
                </h1>
                <p className="text-night/70 text-lg leading-relaxed max-w-xl">
                  Practical answers on ferries, permits, costs, and what to expect — written by our Port Blair team, not copied from generic travel sites.
                </p>
              </div>
              <div className="relative h-48 md:h-56 lg:h-64 rounded-lg overflow-hidden border border-night/10">
                <img
                  src={FAQ_HERO_IMAGE}
                  alt=""
                  className="w-full h-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Toolbar: search + categories */}
        <div className="sticky top-[72px] z-30 bg-pearl/95 backdrop-blur-sm border-b border-night/10">
          <div className="container mx-auto px-4 md:px-8 py-4 space-y-4">
            <label className="block max-w-xl">
              <span className="sr-only">Search questions</span>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-night/40" />
                <input
                  type="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search — e.g. ferry, permit, cost, scuba…"
                  className="w-full pl-10 pr-4 py-2.5 rounded-md border border-night/15 bg-white text-night text-sm focus:outline-none focus:ring-2 focus:ring-azure/30 focus:border-azure"
                />
              </div>
            </label>
            <div className="flex flex-wrap gap-2">
              {faqCategories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium border transition-colors ${
                    activeCategory === cat.id
                      ? 'bg-night text-white border-night'
                      : 'bg-white text-night/70 border-night/15 hover:border-night/30'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-8 py-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left: jump links + related */}
            <aside className="lg:col-span-4 order-2 lg:order-1">
              <nav className="lg:sticky lg:top-44 space-y-8" aria-label="On this page">
                <div className="rounded-lg border border-night/10 bg-white p-5">
                  <h2 className="text-sm font-bold uppercase tracking-wide text-night/50 mb-3">
                    Common questions
                  </h2>
                  <ul className="space-y-2 text-sm">
                    {popularFaqs.map((faq) => (
                      <li key={faq.id}>
                        <a href={`#${faq.id}`} className="text-night/80 hover:text-azure leading-snug block">
                          {faq.question}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {activeCategory === 'all' && !searchTerm && (
                  <div className="rounded-lg border border-night/10 bg-white p-5">
                    <h2 className="text-sm font-bold uppercase tracking-wide text-night/50 mb-3">
                      Jump to topic
                    </h2>
                    <ul className="space-y-2 text-sm">
                      {faqCategories
                        .filter((c) => c.id !== 'all')
                        .map((cat) => (
                          <li key={cat.id}>
                            <a href={`#topic-${cat.id}`} className="text-night/80 hover:text-azure">
                              {cat.name}
                            </a>
                          </li>
                        ))}
                    </ul>
                  </div>
                )}

                <div className="rounded-lg border border-night/10 bg-white p-5">
                  <h2 className="text-sm font-bold uppercase tracking-wide text-night/50 mb-3">
                    Detailed guides
                  </h2>
                  <ul className="space-y-2 text-sm">
                    {relatedGuides.map((link) => (
                      <li key={link.href}>
                        <Link to={link.href} className="text-azure hover:underline">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
            </aside>

            {/* Right: answers */}
            <div className="lg:col-span-8 order-1 lg:order-2">
              {filteredFaqs.length === 0 ? (
                <div className="rounded-lg border border-night/10 bg-white p-10 text-center">
                  <p className="text-night font-medium mb-2">No questions match your search.</p>
                  <p className="text-night/60 text-sm mb-4">Try &quot;ferry&quot;, &quot;permit&quot;, or &quot;cost&quot;.</p>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchTerm('');
                      setActiveCategory('all');
                    }}
                    className="text-sm text-azure hover:underline"
                  >
                    Show all {andamanFaqs.length} questions
                  </button>
                </div>
              ) : (
                <div className="space-y-10">
                  {groupedFaqs.map(({ categoryId, items }) => (
                    <section
                      key={categoryId}
                      id={`topic-${categoryId}`}
                      aria-labelledby={`heading-${categoryId}`}
                    >
                      <h2
                        id={`heading-${categoryId}`}
                        className="text-xl font-display font-bold text-night mb-1 pb-3 border-b-2 border-azure/30"
                      >
                        {getCategoryLabel(categoryId)}
                      </h2>
                      <p className="text-sm text-night/50 mb-4">{items.length} questions</p>
                      <div className="rounded-lg border border-night/10 bg-white px-5 md:px-6">
                        {items.map((faq) => (
                          <FaqBlock
                            key={faq.id}
                            faq={faq}
                            defaultOpen={Boolean(searchTerm.trim())}
                          />
                        ))}
                      </div>
                    </section>
                  ))}
                </div>
              )}

              {/* Contact block — plain, no gradients */}
              <section className="mt-14 rounded-lg border border-night/10 bg-white p-6 md:p-8">
                <h2 className="text-xl font-display font-bold text-night mb-2">
                  Still have a question?
                </h2>
                <p className="text-night/70 mb-6 max-w-lg">
                  WhatsApp or call our Port Blair desk — we answer with specific ferry times and hotel options, not copy-paste replies.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://wa.me/916297576826"
                    className="inline-flex items-center px-5 py-2.5 rounded-md bg-[#25D366] text-white text-sm font-medium hover:opacity-90"
                  >
                    WhatsApp +91 62975 76826
                  </a>
                  <a
                    href="tel:+916297576826"
                    className="inline-flex items-center px-5 py-2.5 rounded-md border border-night/20 text-night text-sm font-medium hover:bg-night/5"
                  >
                    Call us
                  </a>
                  <Link
                    to="/enquiry"
                    className="inline-flex items-center px-5 py-2.5 rounded-md bg-azure text-white text-sm font-medium hover:bg-azure/90"
                  >
                    Send enquiry
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
