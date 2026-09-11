// Replace these with your actual Google Form URLs
export const GOOGLE_FORM_URL = "https://forms.gle/gez6Kmzi6WSHSmBU8";
export const EMPLOYER_FORM_URL = "https://forms.gle/UfGmzagPjiSugZXS9"; 

// 1. Direct Job Seeker Link (Used on Hero, Jobs, Careers, Internships pages)
export const openApplicationForm = () => {
  window.open(GOOGLE_FORM_URL, "_blank");
};

// 2. Direct Employer Link (Used on the 'For Businesses' page)
export const openEmployerForm = () => {
  window.open(EMPLOYER_FORM_URL, "_blank");
};

// 3. Modal Popup Trigger (Used ONLY in the Navbar)
export const openApplyModal = () => {
  window.dispatchEvent(new Event('open-apply-modal'));
};