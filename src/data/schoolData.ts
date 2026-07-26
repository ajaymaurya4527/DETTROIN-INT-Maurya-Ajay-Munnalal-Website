export interface Facility {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface AcademicProgram {
  title: string;
  grade: string;
  description: string;
}

export const schoolInfo = {
  name: "Pavna International School",
  tagline: "Nurturing Mind, Body, and Soul for Global Leadership",
  location: "Aligarh, Uttar Pradesh",
  stats: [
    { label: "Acres Campus", value: "20+" },
    { label: "Student-Teacher Ratio", value: "15:1" },
    { label: "Extracurricular Clubs", value: "30+" },
    { label: "Board Affiliation", value: "CBSE" },
  ],
  academics: [
    {
      title: "Pre-Primary Wing",
      grade: "Nursery - UKG",
      description: "Play-based experiential learning designed to ignite curiosity and foundational literacy.",
    },
    {
      title: "Primary & Middle School",
      grade: "Grades 1 - 8",
      description: "Inquiry-led curriculum focusing on core academics, STEM education, and holistic growth.",
    },
    {
      title: "Senior Secondary",
      grade: "Grades 9 - 12",
      description: "Rigorous academic preparation in Science, Commerce, and Humanities with career counseling.",
    },
  ],
  facilities: [
    {
      title: "Olympic-Standard Sports",
      description: "State-of-the-art turf fields, swimming pool, basketball courts, and indoor sports arena.",
    },
    {
      title: "Advanced STEM Labs",
      description: "Modern Robotics, Physics, Chemistry, and Computer labs equipped with cutting-edge tech.",
    },
    {
      title: "Creative Arts Center",
      description: "Dedicated spaces for music, dance, theater, and visual arts to foster creative expression.",
    },
    {
      title: "Smart Classrooms",
      description: "Digitally enabled interactive classrooms to enhance visual and active learning.",
    },
  ],
};