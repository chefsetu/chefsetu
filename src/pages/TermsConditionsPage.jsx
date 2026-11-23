import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const termsSections = [
  {
    number: "1",
    title: "Acceptance of Terms",
    paragraphs: [
      "By accessing, browsing or using the ChefSetu website, you agree to these Terms & Conditions and our Privacy Policy. If you do not agree with these terms, please discontinue using our website and services.",
    ],
  },
  {
    number: "2",
    title: "About ChefSetu",
    paragraphs: [
      "ChefSetu is a hospitality and culinary career platform designed to connect chefs, culinary professionals, job seekers, hotels, restaurants, catering companies, recruiters and other hospitality businesses.",
      "ChefSetu provides a platform for job discovery, recruitment communication, business enquiries and related services.",
    ],
  },
  {
    number: "3",
    title: "User Responsibilities",
    intro: "All users must:",
    bullets: [
      "Provide accurate, complete and genuine information.",
      "Avoid submitting false, misleading or fraudulent details.",
      "Use the website only for lawful purposes.",
      "Avoid unauthorised access, hacking or misuse of the website.",
      "Respect the privacy and rights of other users.",
      "Avoid uploading illegal, harmful or misleading content.",
    ],
  },
  {
    number: "4",
    title: "Job Seekers and Candidates",
    paragraphs: [
      "Job seekers are responsible for the accuracy of their resumes, qualifications, experience, contact details and application information.",
      "ChefSetu does not guarantee employment, interviews, selection, salary packages or job placement.",
      "Candidates are responsible for independently verifying employers, job descriptions, salary details, workplace conditions and employment offers before accepting any opportunity.",
    ],
  },
  {
    number: "5",
    title: "Employers, Recruiters and Businesses",
    intro: "Employers and businesses using ChefSetu must:",
    bullets: [
      "Provide genuine business and contact information.",
      "Publish authentic job vacancies.",
      "Provide accurate job descriptions and employment details.",
      "Avoid misleading salary information or fraudulent recruitment activities.",
      "Use candidate information only for legitimate recruitment purposes.",
      "Respect applicable privacy and data protection requirements.",
    ],
    closingParagraphs: [
      "ChefSetu reserves the right to reject, modify, suspend or remove suspicious, misleading or inappropriate job listings and business information.",
    ],
  },
  {
    number: "6",
    title: "Communication and Contact Information",
    paragraphs: [
      "ChefSetu may provide phone numbers, Gmail addresses, email addresses, WhatsApp contact details and other communication channels on its website.",
      "Users may communicate directly with ChefSetu, employers, recruiters and business representatives.",
    ],
    intro: "ChefSetu shall not be responsible for:",
    bullets: [
      "Missed calls or unanswered phone calls.",
      "Delayed, failed or undelivered emails.",
      "Gmail or email delivery failures.",
      "Incorrect contact information submitted by users or third parties.",
      "Miscommunication between job seekers and employers.",
      "Unauthorised or misleading communications from third parties.",
      "Decisions or commitments made by users based on third-party communications.",
    ],
    closingParagraphs: [
      "Users are advised to verify important communications and agreements independently.",
    ],
  },
  {
    number: "7",
    title: "Website Content, Updates and Modifications",
    paragraphs: [
      "ChefSetu reserves the right to update, modify, correct, replace, add or remove website content, job listings, advertisements, business information, contact details, services, features and other materials at any time, with or without prior notice, subject to applicable law and contractual obligations.",
      "We do not guarantee that all website information will always be accurate, complete, current or available.",
    ],
  },
  {
    number: "8",
    title: "Data Loss, Deletion and Technical Issues",
    paragraphs: [
      "ChefSetu takes reasonable steps to maintain website availability and protect information. However, we cannot guarantee uninterrupted operation or that technical issues will never occur.",
    ],
    intro:
      "To the extent permitted by law, ChefSetu shall not be liable for:",
    bullets: [
      "Temporary website downtime or server failures.",
      "Technical errors, software bugs or hosting problems.",
      "Data loss caused by events beyond our reasonable control.",
      "Delayed, incomplete or unsuccessful form submissions.",
      "Unavailability of emails, messages or notifications.",
      "Unauthorised access caused by external attacks despite reasonable security measures.",
      "Loss of information resulting from third-party service failures.",
    ],
    closingParagraphs: [
      "Users are encouraged to retain copies of important resumes, applications, communications and business documents.",
    ],
  },
  {
    number: "9",
    title: "Advertisements and Third-Party Services",
    paragraphs: [
      "ChefSetu may display advertisements, sponsored listings, promotional materials, external links and third-party services.",
      "ChefSetu does not guarantee the accuracy, quality, availability or reliability of third-party advertisements, products or services.",
      "Any transactions, agreements or commitments between users and third parties are their own responsibility unless expressly agreed otherwise by ChefSetu.",
    ],
  },
  {
    number: "10",
    title: "Contracts and Agreements",
    paragraphs: [
      "ChefSetu is not automatically a party to any employment agreement, recruitment contract, business partnership, service agreement, salary arrangement or other contract entered into directly between job seekers, employers, recruiters or businesses.",
      "Any contract, promise, commitment or agreement made between users is their independent responsibility.",
      "ChefSetu shall not be responsible for disputes arising from such agreements unless ChefSetu has expressly entered into the relevant agreement or liability otherwise arises under applicable law.",
    ],
  },
  {
    number: "11",
    title: "No Guarantee of Employment or Business Results",
    intro:
      "ChefSetu operates as a connecting platform and does not guarantee:",
    bullets: [
      "Job placement or employment.",
      "Candidate selection or interview opportunities.",
      "Employer responses.",
      "Salary payments or employment benefits.",
      "Business leads, customers or commercial success.",
      "Accuracy of all third-party job listings.",
    ],
    closingParagraphs: [
      "Users should perform their own verification before entering into any employment or business relationship.",
    ],
  },
  {
    number: "12",
    title: "Limitation of Liability",
    paragraphs: [
      "To the maximum extent permitted by applicable law, ChefSetu shall not be liable for indirect, incidental, special or consequential losses arising from the use of our website, third-party communications, advertisements, recruitment activities or external services.",
      "Nothing in these Terms excludes liability that cannot legally be excluded, including liability arising from fraud, wilful misconduct or applicable statutory obligations.",
    ],
  },
  {
    number: "13",
    title: "Suspension and Termination",
    paragraphs: [
      "ChefSetu reserves the right to restrict, suspend or terminate access to the website or its services where a user violates these Terms & Conditions, engages in fraudulent activity, misuses information or creates risks for other users or the platform.",
    ],
  },
  {
    number: "14",
    title: "Intellectual Property",
    paragraphs: [
      "All website designs, logos, brand names, graphics, text, content and other materials owned by ChefSetu are protected by applicable intellectual property laws.",
      "Users may not reproduce, distribute, copy or commercially exploit such materials without prior written permission.",
    ],
  },
  {
    number: "15",
    title: "Changes to Services and Terms",
    paragraphs: [
      "ChefSetu reserves the right to modify, discontinue, suspend, update or remove any part of its website, features or services at any time.",
      "These Terms & Conditions may also be revised periodically. Updated terms will be published on this page with a revised date.",
    ],
  },
  {
    number: "16",
    title: "Governing Law and Jurisdiction",
    paragraphs: [
      "These Terms & Conditions shall be governed by the laws of India.",
      "Subject to applicable law, courts of competent jurisdiction in Hyderabad, Telangana, India shall have jurisdiction over disputes relating to these Terms.",
    ],
  },
];

const TermsConditionsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 pt-20 pb-16">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-orange-950 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <span className="inline-block px-3.5 py-1 mb-3 text-xs font-bold uppercase tracking-widest text-orange-300 bg-orange-500/20 border border-orange-400/30 rounded-full">
            Platform Rules & Legal Terms
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Terms & Conditions – <span className="text-orange-400">ChefSetu</span>
          </h1>
          <p className="mt-2 text-slate-300 text-sm sm:text-base">
            Last Updated: November 2026
          </p>
        </div>
      </div>

      {/* Full-Width Terms Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-6 sm:p-10">
          <div className="divide-y divide-slate-100">
            {termsSections.map((section) => (
              <section key={section.number} className="py-4 first:pt-0">
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5 flex items-center gap-2">
                  <span className="text-orange-600">{section.number}.</span>
                  <span>{section.title}</span>
                </h2>

                {section.paragraphs && (
                  <div className="space-y-1.5 mb-1.5">
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

                {section.intro && (
                  <p className="text-slate-700 font-medium text-sm sm:text-base leading-relaxed mb-1.5">
                    {section.intro}
                  </p>
                )}

                {section.bullets && (
                  <ul className="space-y-1 pl-4 mb-1.5">
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

                {section.closingParagraphs && (
                  <div className="space-y-1.5 mt-1.5">
                    {section.closingParagraphs.map((text, idx) => (
                      <p
                        key={idx}
                        className="text-slate-600 text-sm sm:text-base leading-relaxed"
                      >
                        {text}
                      </p>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Section 17: Contact Information */}
          <section className="mt-5 bg-orange-50/70 border border-orange-100 rounded-xl p-5 sm:p-6">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
              <span className="text-orange-600">17.</span>
              <span>Contact Information</span>
            </h2>

            <div className="space-y-1 text-sm sm:text-base text-slate-700">
              <p>
                <span className="font-semibold text-slate-900">Website: </span>
                <a
                  href="https://www.chefsetu.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:underline font-medium"
                >
                  www.chefsetu.com
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
              to="/privacy-policy"
              className="text-orange-600 hover:text-orange-700 font-semibold transition-colors"
            >
              Read Privacy Policy →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditionsPage;