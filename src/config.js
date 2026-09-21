// Replace these with your actual Google Form URLs
export const GOOGLE_FORM_URL = "https://forms.gle/gez6Kmzi6WSHSmBU8";
export const EMPLOYER_FORM_URL = "https://forms.gle/gez6Kmzi6WSHSmBU8"; // Business Registration Form
export const COMPLAINT_FORM_URL = "https://forms.gle/gez6Kmzi6WSHSmBU8"; // Chef Protect / Complaint Form

// 1. Direct Job Seeker Link
export const openApplicationForm = () => {
  window.open(GOOGLE_FORM_URL, "_blank");
};

// 2. Direct Employer Link
export const openEmployerForm = () => {
  window.open(EMPLOYER_FORM_URL, "_blank");
};

// 3. Modal Popup Trigger (Used ONLY in the Navbar)
export const openApplyModal = () => {
  window.dispatchEvent(new Event('open-apply-modal'));
};

// 4. Chef Protect / Complaint Link
export const openComplaintForm = () => {
  window.open(COMPLAINT_FORM_URL, "_blank");
};