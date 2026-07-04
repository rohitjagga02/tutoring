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

export const credentialHighlights = [
  "1600 SAT scorer",
  "UPenn graduate",
  "5+ years of tutoring experience",
  "SAT/ACT + high school math"
];

export const subjectList = [
  "SAT Math",
  "SAT Reading and Writing",
  "ACT prep",
  "Algebra 1",
  "Algebra 2",
  "Geometry",
  "Precalculus",
  "AP Calculus AB/BC",
  "Biology and selected high school science"
];

export const contactFields = [
  "Student name",
  "Parent/guardian name",
  "Email",
  "Phone (optional)",
  "Student grade",
  "School (optional)",
  "Subject(s)",
  "SAT/ACT/AP test date (if applicable)",
  "Current score or grade (if relevant)",
  "Target score or goal",
  "Preferred days/times",
  "Online or in-person preference",
  "Anything else I should know?"
];
