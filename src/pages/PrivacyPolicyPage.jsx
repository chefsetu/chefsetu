import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const sections = [
  {
    number: "1",
    title: "Introduction",
    paragraphs: [
      "Welcome to ChefSetu. We respect the privacy of our website visitors, job seekers, chefs, employers, recruiters and business partners. This Privacy Policy explains how we collect, use, store, share and protect information when you visit or use our website and services.",
    ],
  },
  {
    number: "2",
    title: "Information We Collect",
    intro: "We may collect the following information:",
    bullets: [
      "Full name and contact details.",
      "Mobile numbers and Gmail/email addresses.",
      "Resume, CV and professional profiles.",
      "Educational qualifications and work experience.",
      "Job application and employment-related information.",
      "Company names, business details and employer information.",
      "Messages, enquiries, feedback and other information submitted through our website.",
      "Technical information such as IP address, browser type, device information and website usage data.",
    ],
  },
  {
    number: "3",
    title: "How We Use Your Information",
    intro: "We may use collected information for:",
    bullets: [
      "Providing job opportunities and recruitment-related services.",
      "Connecting chefs and job seekers with employers.",
      "Responding to business enquiries and customer requests.",
      "Communicating through phone calls, emails, Gmail and WhatsApp.",
      "Managing job applications and business registrations.",
      "Sharing relevant candidate information with prospective employers when appropriate.",
      "Sending service updates, announcements and promotional information where permitted.",
      "Improving our website, services and user experience.",
      "Preventing fraud, misuse and unauthorised activities.",
    ],
  },
  {
    number: "4",
    title: "Sharing of Personal Information",
    paragraphs: [
      "ChefSetu may share relevant information with employers, recruiters, business partners and service providers when necessary to provide our services.",
      "We do not sell personal information to third parties for their independent marketing purposes.",
      "Users should understand that when they voluntarily share their contact information or apply for a job, relevant details may be accessible to the intended recipient.",
    ],
  },
  {
    number: "5",
    title: "Phone Numbers and Email Communication",
    paragraphs: [
      "ChefSetu may display official business contact numbers and email addresses on its website for communication purposes.",
      "Users may contact us for job opportunities, business enquiries, recruitment assistance, partnerships and other services.",
      "We are not responsible for communication failures, delayed responses, incorrect messages or actions taken by third parties using contact details available on our website, except where liability cannot legally be excluded.",
    ],
  },
  {
    number: "6",
    title: "Third-Party Services and External Links",
    paragraphs: [
      "Our website may contain links to external websites, advertisements, social media platforms, employer websites and third-party services.",
      "ChefSetu does not control the privacy practices, security, accuracy or content of external platforms. Users are encouraged to review the privacy policies of those services before sharing personal information.",
    ],
  },
  {
    number: "7",
    title: "Data Security",
    paragraphs: [
      "We take reasonable measures to protect user information against unauthorised access, disclosure, modification, misuse or loss.",
      "However, no internet-based platform, email service or electronic communication system can guarantee complete security.",
    ],
  },
  {
    number: "8",
    title: "Data Retention and Deletion",
    paragraphs: [
      "We may retain user information for as long as necessary to provide our services, maintain business records, resolve disputes and comply with applicable legal obligations.",
      "Users may request correction, updating or deletion of their personal information by contacting us.",
      "We will process such requests in accordance with applicable laws. Certain information may need to be retained where legally required.",
    ],
  },
  {
    number: "9",
    title: "Cookies and Website Analytics",
    paragraphs: [
      "ChefSetu may use cookies, analytics tools and similar technologies to understand website traffic, improve performance and enhance user experience.",
      "Users may manage cookies through their browser settings. Where required, appropriate consent will be obtained.",
    ],
  },
  {
    number: "10",
    title: "Advertisements and Promotional Content",
    paragraphs: [
      "ChefSetu may display advertisements, promotional content, business listings and third-party offers.",
      "We are not responsible for the products, services, claims, offers or commitments made by third-party advertisers. Users should independently verify such information before making decisions.",
    ],
  },
  {
    number: "11",
    title: "Changes to Privacy Policy",
    paragraphs: [
      "ChefSetu reserves the right to modify, update, add or remove provisions of this Privacy Policy at any time.",
      "Changes will be published on this page with an updated revision date. Users are encouraged to review this page periodically.",
    ],
  },
];

const PrivacyPolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 pt-20 pb-16">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-orange-950 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <span className="inline-block px-3.5 py-1 mb-3 text-xs font-bold uppercase tracking-widest text-orange-300 bg-orange-500/20 border border-orange-400/30 rounded-full">
            Legal & Data Protection
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Privacy Policy – <span className="text-orange-400">ChefSetu</span>
          </h1>
          <p className="mt-2 text-slate-300 text-sm sm:text-base">
            Last Updated: November 2026
          </p>
        </div>
      </div>

      {/* Full-Width Policy Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-6 sm:p-10">
          <div className="divide-y divide-slate-100">
            {sections.map((section) => (
              <section key={section.number} className="py-4 first:pt-0">
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5 flex items-center gap-2">
                  <span className="text-orange-600">{section.number}.</span>
                  <span>{section.title}</span>
                </h2>

                {section.intro && (
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-1.5">
                    {section.intro}
                  </p>
                )}

                {section.paragraphs && (
                  <div className="space-y-1.5">
                    {section.paragraphs.map((text, idx) => (
                      <p
                        key={idx}
                        className="text-slate-600 text-sm sm:text-base leading-relaxed"
                      >
                        {text}
                      </p>
                    ))}
                  </div>
                )}

                {section.bullets && (
                  <ul className="space-y-1 pl-4">
                    {section.bullets.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-slate-600 text-sm sm:text-base leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {/* Section 12: Contact Information */}
          <section className="mt-5 bg-orange-50/70 border border-orange-100 rounded-xl p-5 sm:p-6">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
              <span className="text-orange-600">12.</span>
              <span>Contact Information</span>
            </h2>

            <div className="space-y-1 text-sm sm:text-base text-slate-700">
              <p>
                For privacy-related questions, requests or complaints, contact:
              </p>
              <p>
                <span className="font-semibold text-slate-900">Website: </span>
                <a
                  href="https://chefsetu.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:underline font-medium"
                >
                  https://chefsetu.com
                </a>
              </p>
              <p>
                <span className="font-semibold text-slate-900">Email: </span>
                <a
                  href="mailto:chefsetu.com@gmail.com"
                  className="text-orange-600 hover:underline font-medium"
                >
                  chefsetu.com@gmail.com
                </a>
              </p>
              <p className="pt-2 italic font-semibold text-slate-800">
                ChefSetu – Connecting Culinary Talent with Opportunities.
              </p>
            </div>
          </section>

          {/* Bottom Cross-Link */}
          <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-sm">
            <Link
              to="/"
              className="text-slate-600 hover:text-orange-600 font-semibold transition-colors"
            >
              ← Back to Home
            </Link>
            <Link
              to="/terms-and-conditions"
              className="text-orange-600 hover:text-orange-700 font-semibold transition-colors"
            >
              Read Terms & Conditions →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;