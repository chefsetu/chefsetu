// Replace this with your actual Google Form URL
export const GOOGLE_FORM_URL = "https://forms.gle/gez6Kmzi6WSHSmBU8";

export const EMPLOYER_FORM_URL = GOOGLE_FORM_URL; // Can be changed later if needed

export const openApplicationForm = () => {
  window.open(GOOGLE_FORM_URL, "_blank");
};

export const openEmployerForm = () => {
  window.open(EMPLOYER_FORM_URL, "_blank");
};