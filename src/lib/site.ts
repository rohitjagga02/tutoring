export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "/contact" }
];

export const basePath = (path: string) => {
  const base = import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL.slice(0, -1)
    : import.meta.env.BASE_URL;

  if (path === "/") {
    return `${base}/`;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalizedPath}/`;
};

export const assetPath = (path: string) => {
  const base = import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL.slice(0, -1)
    : import.meta.env.BASE_URL;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalizedPath}`;
};

export const subjectList = [
  "SAT Math, SAT Reading & Writing",
  "ACT, SSAT (NY), other standardized tests",
  "High school math up to AP Calculus BC",
  "Contest math basics for AMC, MathCounts, and AIME",
  "Select science and programming courses"
];

export const contactFields = [
  "Student name",
  "Parent/guardian name",
  "Email or phone",
  "Student grade",
  "Subject(s)",
  "SAT/ACT/AP test date (if applicable)",
  "Current score or grade (if relevant)",
  "Target score or goal",
  "Preferred days/times",
  "Anything else I should know?"
];
