export interface LeaderMessage {
  role: string;
  name: string;
  qualifications?: string;
  image?: string;
  quote: string;
  fullMessage: string[];
}

export interface DepartmentItem {
  id: string;
  slug: string;
  name: string;
  category: 'Pre-Clinical' | 'Para-Clinical' | 'Clinical';
  hod: string;
  description: string;
  features: string[];
  faculty: { name: string; designation: string; qualification: string }[];
  image: string;
}

export interface BedDistributionItem {
  department: string;
  beds: number;
  icuBeds?: number;
  category: string;
}

export interface FeeStructureItem {
  category: string;
  tuitionFeePerSem: string;
  admissionFee: string;
  cautionDeposit: string;
  hostelFeePerYear: string;
  notes: string;
}

export const SITE_INFO = {
  name: "Jakir Hossain Medical College And Research Institute",
  shortName: "JHMCRI",
  tagline: "A Unit of Shibham Education & Social Welfare Trust",
  subTagline: "Under PPP Mode with State Government of West Bengal",
  affiliation: "Affiliated with The West Bengal University of Health Sciences (WBUHS), Kolkata",
  approval: "Approved by National Medical Commission (NMC) - Medical Assessment and Rating Board (MARB)",
  intake: "100/150 Annual MBBS Seats",
  address: "Vill + P.O.- Miapur, P.S. Raghunathganj, Dist. Murshidabad, Pin: 742235, West Bengal, India",
  phone: "+91 9652418407",
  altPhone: "+91 9652418408",
  emergencyPhone: "+91 9652418407 / 24x7 Emergency",
  email: "info@jhmcri.com",
  admissionsEmail: "admissions@jhmcri.com",
  website: "https://jhmcri.com",
  logo: "https://jhmcri.com/wp-content/uploads/2026/05/main-logo-removebg-preview-1-768x165-1.png",
  hospitalBeds: "350+ Teaching Beds",
  campusArea: "30+ Acres Lush Green Campus",
  established: "2023",
  operatingHours: "OPD: 9:00 AM - 4:00 PM | Emergency: 24x7"
};

export const HERO_SLIDES = [
  {
    title: "Excellence in Medical Education & Healthcare",
    subtitle: "Jakir Hossain Medical College & Research Institute",
    desc: "A premier medical institution in Murshidabad, West Bengal under PPP mode with the State Government of West Bengal, affiliated to WBUHS and approved by the NMC.",
    image: "https://jhmcri.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-25-at-7.30.20-PM-1024x676.jpeg",
    badge: "MBBS Admissions 2026 Open",
    ctaText: "Explore MBBS Program",
    ctaLink: "/admissions"
  },
  {
    title: "State-of-the-Art Multi-Speciality Hospital",
    subtitle: "24x7 Emergency, Trauma, ICU & Modular OTs",
    desc: "Delivering compassionate, affordable healthcare to rural and urban communities across Murshidabad and neighboring districts with modern diagnostic equipment.",
    image: "https://jhmcri.com/wp-content/uploads/2025/11/diverse-team-professional-surgeon-assistants-nurses-performing-invasive-surgery-patient-hospital-operating-room-surgeons-talk-use-instruments-real-modern-hospital-1024x683.jpg",
    badge: "24/7 Clinical Services",
    ctaText: "Hospital Facilities",
    ctaLink: "/hospital"
  },
  {
    title: "World-Class Learning Infrastructure & Research",
    subtitle: "Modern Labs, Digital Library & Experienced Faculty",
    desc: "Equipping aspiring doctors with sound clinical acumen, empathetic bedside manners, and cutting-edge medical research capabilities.",
    image: "https://jhmcri.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-25-at-7.30.22-PM-2-1024x682.jpeg",
    badge: "WBUHS Affiliated & NMC Approved",
    ctaText: "View Academics",
    ctaLink: "/academics"
  }
];

export const HIGHLIGHTS = [
  {
    title: "NMC Approved & WBUHS Affiliated",
    desc: "Recognized curriculum with strict academic compliance under MARB & WBUHS guidelines.",
    icon: "Award"
  },
  {
    title: "PPP Mode with West Bengal Govt",
    desc: "Pioneering public-private partnership providing affordable medical education & healthcare.",
    icon: "ShieldCheck"
  },
  {
    title: "350+ Bed Multi-Speciality Hospital",
    desc: "Active OPD, IPD, fully equipped ICUs, CCU, NICU, PICU, Modular OTs & Central Lab.",
    icon: "Building2"
  },
  {
    title: "Experienced Senior Faculty & Mentors",
    desc: "Distinguished professors, surgeons, and physicians with decades of clinical and teaching expertise.",
    icon: "GraduationCap"
  },
  {
    title: "Advanced Central & Digital Library",
    desc: "Extensive collection of medical textbooks, international journals, digital databases & 24/7 reading halls.",
    icon: "BookOpen"
  },
  {
    title: "Separate On-Campus Hostels",
    desc: "Safe, comfortable AC/Non-AC accommodation with nutritious mess, WiFi, gym, and 24/7 security.",
    icon: "Home"
  }
];

export const STATS = [
  { value: "350+", label: "Hospital Beds", sub: "Fully Equipped Wards" },
  { value: "100+", label: "MBBS Intake", sub: "Annual NMC Approved" },
  { value: "21+", label: "Specialised Depts", sub: "Pre, Para & Clinical" },
  { value: "850+", label: "Daily OPD Footfall", sub: "Serving Murshidabad & Bengal" },
  { value: "98%", label: "Clinical Exposure", sub: "Hands-on Ward Training" },
  { value: "24/7", label: "Emergency & Trauma", sub: "Round-the-clock Care" }
];

export const LEADERSHIP: Record<string, LeaderMessage> = {
  chairman: {
    role: "Chairman & Founder",
    name: "Mr. Jakir Hossain",
    image: "https://jhmcri.com/wp-content/uploads/2026/01/Indian-Doctors-Team-Ai-Generated-683x1024.png",
    quote: "Our mission is to bridge healthcare disparities in rural Bengal by grooming compassionate, competent doctors.",
    fullMessage: [
      "Welcome to Jakir Hossain Medical College & Research Institute (JHMCRI), located in Miapur, Murshidabad, West Bengal. As the Chairman, it is my honor and responsibility to ensure that we build a strong foundation of medical education and accessible healthcare.",
      "Our institution, established under the Shibham Education & Social Welfare Trust in PPP mode with the State Government of West Bengal, was conceived with a clear vision: to bring world-class healthcare infrastructure and high-quality medical education right to the people of Murshidabad and surrounding districts.",
      "We are dedicated to providing our medical students with state-of-the-art laboratories, a vibrant multi-speciality teaching hospital, and continuous mentorship so they emerge as globally competitive, ethically grounded doctors."
    ]
  },
  president: {
    role: "President",
    name: "Dr. Dipak Kumar Das",
    image: "https://jhmcri.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-25-at-7.30.20-PM-1.jpeg",
    quote: "Education and health are the twin pillars of a thriving society. At JHMCRI, we empower students to lead that change.",
    fullMessage: [
      "At JHMCRI, our vision is rooted in accessibility, quality education, and community health—especially for Murshidabad and nearby districts. As President, I believe strongly in equal opportunity for every student who aspires to heal and serve.",
      "We work hand-in-hand with our faculty, administrative boards, and the Department of Health & Family Welfare, Govt. of West Bengal, to ensure high academic standards and student welfare.",
      "Our students benefit from immersive clinical exposure, research opportunities, and comprehensive student support cells including counseling and anti-ragging committees."
    ]
  },
  principal: {
    role: "Dean & Principal",
    name: "Prof. (Dr.) Nirjhar Bhattacharya",
    qualifications: "MBBS, MD",
    image: "https://jhmcri.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-25-at-7.30.21-PM-1-1024x682.jpeg",
    quote: "Medical education is both a science and an art of empathy. We foster excellence in diagnosis, research, and ethics.",
    fullMessage: [
      "Dear Students and Aspirants, Welcome to Jakir Hossain Medical College & Research Institute (JHMCRI), Murshidabad, West Bengal—where medical education meets empathy, innovation, and clinical discipline.",
      "Under the curriculum prescribed by the National Medical Commission (NMC) and The West Bengal University of Health Sciences (WBUHS), we follow Competency-Based Medical Education (CBME). Our students are introduced to clinical encounters early in their course to develop diagnostic acumen and professional communication.",
      "With modern lecture theatres equipped with audio-visual systems, simulated skills labs, histology and anatomy dissection halls, and an extensive central library, we ensure a conducive learning atmosphere."
    ]
  },
  superintendent: {
    role: "Medical Superintendent",
    name: "Prof. (Dr.) Naresh Shyamsunder Gurbani",
    qualifications: "MBBS, MD (Pathology)",
    image: "https://jhmcri.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-25-at-7.30.20-PM.jpeg",
    quote: "Our teaching hospital provides students with hands-on clinical exposure while extending affordable care to thousands.",
    fullMessage: [
      "As the Medical Superintendent of Jakir Hossain Medical College & Research Institute, I welcome students, parents, and visitors to our teaching hospital and clinical training facilities.",
      "Our hospital operates around the clock with 24x7 Emergency & Trauma Care, Intensive Care Units (ICU, ICCU, NICU, PICU), state-of-the-art modular operation theatres, dialysis units, and a fully automated central diagnostic laboratory.",
      "Our clinical departments manage an extensive outpatient footfall and inpatient census, giving medical students real-time exposure to a wide spectrum of acute and chronic pathological conditions under senior consultant supervision."
    ]
  }
};

export const DEPARTMENTS: DepartmentItem[] = [
  // Pre-Clinical
  {
    id: "anatomy",
    slug: "anatomy",
    name: "Department of Anatomy",
    category: "Pre-Clinical",
    hod: "Prof. Dr. S. K. Roy, MBBS, MS (Anatomy)",
    description: "The Anatomy Department features a modern Dissection Hall, Histology Lab, Embalming Room, Cold Storage for cadavers, and a comprehensive Anatomical Museum with plastinated specimens, embryology models, and osteology collections.",
    features: [
      "Air-conditioned Dissection Hall with 100-student seating",
      "Well-equipped Histology Lab with individual microscopes & slide sets",
      "Museum with over 150 wet specimens, chart displays & 3D bone models",
      "Cadaver preservation & modern cold storage facility"
    ],
    faculty: [
      { name: "Prof. Dr. S. K. Roy", designation: "Professor & HOD", qualification: "MBBS, MS" },
      { name: "Dr. Anirban Mukherjee", designation: "Associate Professor", qualification: "MBBS, MD" },
      { name: "Dr. Puja Das", designation: "Assistant Professor", qualification: "MBBS, MD" },
      { name: "Dr. R. K. Mandal", designation: "Tutor", qualification: "MBBS" }
    ],
    image: "https://jhmcri.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-25-at-7.30.22-PM-2-1024x682.jpeg"
  },
  {
    id: "physiology",
    slug: "physiology",
    name: "Department of Physiology",
    category: "Pre-Clinical",
    hod: "Prof. Dr. M. K. Banerjee, MBBS, MD (Physiology)",
    description: "Equipped with Hematology Lab, Clinical Physiology Lab, Human Physiology & Amphibian Labs, Spirometry, and Neurophysiology setup for comprehensive understanding of human body functions.",
    features: [
      "Hematology Lab with automated cell counters & hemocytometers",
      "Clinical Physiology Lab with ECG, EEG, EMG & Spirometry units",
      "Mammalian & Research Laboratory for experimental demonstrations",
      "Departmental library with national and international physiology journals"
    ],
    faculty: [
      { name: "Prof. Dr. M. K. Banerjee", designation: "Professor & HOD", qualification: "MBBS, MD" },
      { name: "Dr. Soma Chatterjee", designation: "Associate Professor", qualification: "MBBS, MD" },
      { name: "Dr. Debasis Pal", designation: "Assistant Professor", qualification: "MBBS, MD" }
    ],
    image: "https://jhmcri.com/wp-content/uploads/2025/11/LABORATORY-SERVICES-1024x683.jpg"
  },
  {
    id: "biochemistry",
    slug: "biochemistry",
    name: "Department of Biochemistry",
    category: "Pre-Clinical",
    hod: "Prof. Dr. P. C. Sarkar, MBBS, MD (Biochemistry)",
    description: "Focuses on clinical biochemistry, metabolic pathways, molecular diagnostics, and runs the 24x7 automated clinical biochemistry lab of the hospital.",
    features: [
      "High-throughput fully automated Biochemistry Analyzers",
      "Spectrophotometers, Chromatography & Gel Electrophoresis equipment",
      "Practical demonstration lab for 100 students",
      "Clinical biochemistry posting in hospital central lab"
    ],
    faculty: [
      { name: "Prof. Dr. P. C. Sarkar", designation: "Professor & HOD", qualification: "MBBS, MD" },
      { name: "Dr. Moumita Sen", designation: "Associate Professor", qualification: "MBBS, MD" },
      { name: "Dr. Tanmoy Ghosh", designation: "Assistant Professor", qualification: "MBBS, MD" }
    ],
    image: "https://jhmcri.com/wp-content/uploads/2025/11/coronavirus-blood-samples-arrangement-lab-1024x683.jpg"
  },

  // Para-Clinical
  {
    id: "pathology",
    slug: "pathology",
    name: "Department of Pathology",
    category: "Para-Clinical",
    hod: "Prof. (Dr.) Naresh Shyamsunder Gurbani, MBBS, MD (Pathology)",
    description: "Covers Histopathology, Cytopathology (FNAC), Hematology, Clinical Pathology, and Blood Banking with digital microscopy and slide scanners.",
    features: [
      "Advanced Histopathology processing & microtome sectioning units",
      "Automated 5-part differential hematology analyzers",
      "Pathology museum with diseased organ gross specimens",
      "Integrated blood storage & cross-matching center"
    ],
    faculty: [
      { name: "Prof. Dr. Naresh S. Gurbani", designation: "Professor & HOD", qualification: "MBBS, MD" },
      { name: "Dr. Souvik Saha", designation: "Associate Professor", qualification: "MBBS, MD" },
      { name: "Dr. Barnali Roy", designation: "Assistant Professor", qualification: "MBBS, MD" }
    ],
    image: "https://jhmcri.com/wp-content/uploads/2025/11/LABORATORY-SERVICES-1024x683.jpg"
  },
  {
    id: "pharmacology",
    slug: "pharmacology",
    name: "Department of Pharmacology",
    category: "Para-Clinical",
    hod: "Prof. Dr. K. N. Sen, MBBS, MD (Pharmacology)",
    description: "Imparts rational drug therapy, clinical pharmacology, pharmacovigilance, and computer-assisted learning (CAL) simulations.",
    features: [
      "Computer-Assisted Simulation Lab for experimental pharmacology",
      "Clinical Pharmacology & Pharmacovigilance Monitoring Cell",
      "Extensive museum displaying drug formulations & botanical sources",
      "Practical dispensing and prescription audit workstations"
    ],
    faculty: [
      { name: "Prof. Dr. K. N. Sen", designation: "Professor & HOD", qualification: "MBBS, MD" },
      { name: "Dr. Subhasish Das", designation: "Assistant Professor", qualification: "MBBS, MD" }
    ],
    image: "https://jhmcri.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-25-at-7.30.20-PM-1-1024x847.jpeg"
  },
  {
    id: "microbiology",
    slug: "microbiology",
    name: "Department of Microbiology",
    category: "Para-Clinical",
    hod: "Prof. Dr. A. K. Mondal, MBBS, MD (Microbiology)",
    description: "Encompasses Bacteriology, Virology, Mycology, Parasitology, Immunology, and Hospital Infection Control (HICC) with biosafety hoods and culture facilities.",
    features: [
      "Biosafety Level-2 containment testing facility",
      "Automated blood culture systems & ELISA readers",
      "Infection control surveillance across hospital ICUs and OTs",
      "Student diagnostic practical laboratory"
    ],
    faculty: [
      { name: "Prof. Dr. A. K. Mondal", designation: "Professor & HOD", qualification: "MBBS, MD" },
      { name: "Dr. Rituja Gupta", designation: "Associate Professor", qualification: "MBBS, MD" }
    ],
    image: "https://jhmcri.com/wp-content/uploads/2025/11/coronavirus-blood-samples-arrangement-lab-1024x683.jpg"
  },
  {
    id: "forensic-medicine",
    slug: "forensic-medicine",
    name: "Department of Forensic Medicine & Toxicology",
    category: "Para-Clinical",
    hod: "Prof. Dr. B. N. Goswami, MBBS, MD (FMT)",
    description: "Trains students in medical jurisprudence, post-mortem examination, clinical forensics, toxicology, and legal-medical ethics.",
    features: [
      "Modern Mortuary & Autopsy block with observation gallery",
      "Forensic Museum with weapons, poisons, and injury mockups",
      "Toxicology analysis laboratory",
      "Court-craft and medical testimony training"
    ],
    faculty: [
      { name: "Prof. Dr. B. N. Goswami", designation: "Professor & HOD", qualification: "MBBS, MD" },
      { name: "Dr. Sanjoy Roy", designation: "Assistant Professor", qualification: "MBBS, MD" }
    ],
    image: "https://jhmcri.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-25-at-7.30.22-PM-1-1024x682.jpeg"
  },
  {
    id: "community-medicine",
    slug: "community-medicine",
    name: "Department of Community Medicine (PSM)",
    category: "Para-Clinical",
    hod: "Prof. Dr. S. K. Maiti, MBBS, MD (Community Medicine)",
    description: "Manages the Rural Health Training Centre (RHTC) and Urban Health Training Centre (UHTC), epidemiological surveys, immunization camps, and national health programmes.",
    features: [
      "Active RHTC & UHTC catering to rural Murshidabad population",
      "Public health museum and epidemiological statistical lab",
      "Regular health camps, school health screenings, and field visits",
      "Research projects in tribal, maternal, and child health"
    ],
    faculty: [
      { name: "Prof. Dr. S. K. Maiti", designation: "Professor & HOD", qualification: "MBBS, MD" },
      { name: "Dr. Piyali Biswas", designation: "Associate Professor", qualification: "MBBS, MD" }
    ],
    image: "https://jhmcri.com/wp-content/uploads/2025/11/RULAR-HEALTH-TRAINING-CENTRES-RHTC-1024x683.jpg"
  },

  // Clinical
  {
    id: "general-medicine",
    slug: "general-medicine",
    name: "Department of General Medicine",
    category: "Clinical",
    hod: "Prof. Dr. S. N. Bhattacharya, MBBS, MD (Medicine)",
    description: "Provides round-the-clock inpatient and outpatient care for acute illnesses, chronic lifestyle diseases, infectious diseases, and oversees the Medical ICU.",
    features: [
      "120+ Bed Dedicated Inpatient Wards & 20-Bed MICU",
      "Subspecialty clinics: Cardiology, Nephrology, Diabetes & Rheumatology",
      "Comprehensive daily OPD with high clinical volume",
      "Emergency triage and acute poisoning management"
    ],
    faculty: [
      { name: "Prof. Dr. S. N. Bhattacharya", designation: "Professor & HOD", qualification: "MBBS, MD" },
      { name: "Dr. Arindam Ghosh", designation: "Associate Professor", qualification: "MBBS, MD" },
      { name: "Dr. Prasenjit Das", designation: "Assistant Professor", qualification: "MBBS, MD" }
    ],
    image: "https://jhmcri.com/wp-content/uploads/2026/01/pexels-photo-32213307-32213307-1024x683.jpg"
  },
  {
    id: "general-surgery",
    slug: "general-surgery",
    name: "Department of General Surgery",
    category: "Clinical",
    hod: "Prof. Dr. R. K. Mukherjee, MBBS, MS (General Surgery)",
    description: "Equipped with advanced laparoscopic towers, modular operation theatres, post-op recovery units, and handles emergency trauma and elective surgical cases.",
    features: [
      "Modular OTs with laminar airflow & HEPA filtration",
      "Minimal Access / Laparoscopic surgery unit",
      "Surgical ICU & 24x7 emergency surgical standby",
      "Gastrointestinal, oncology, thyroid, and hernia clinics"
    ],
    faculty: [
      { name: "Prof. Dr. R. K. Mukherjee", designation: "Professor & HOD", qualification: "MBBS, MS" },
      { name: "Dr. Subhadip Roy", designation: "Associate Professor", qualification: "MBBS, MS" },
      { name: "Dr. Avishek Dutta", designation: "Assistant Professor", qualification: "MBBS, MS" }
    ],
    image: "https://jhmcri.com/wp-content/uploads/2025/11/diverse-team-professional-surgeon-assistants-nurses-performing-invasive-surgery-patient-hospital-operating-room-surgeons-talk-use-instruments-real-modern-hospital-1024x683.jpg"
  },
  {
    id: "obstetrics-gynaecology",
    slug: "obstetrics-gynaecology",
    name: "Department of Obstetrics & Gynaecology (OBG)",
    category: "Clinical",
    hod: "Prof. Dr. S. Dasgupta, MBBS, MS, DGO",
    description: "Dedicated Labour Theatres, Maternity Wards, Antenatal & Postnatal Care, Infertility clinic, and Gynaecological Oncology.",
    features: [
      "Modern Labour Delivery Recovery (LDR) rooms with CTG monitoring",
      "Dedicated Obstetric Emergency OT adjoining Labour Room",
      "High-Risk Pregnancy management & Infertility clinic",
      "Immediate transition to NICU for neonatal stabilization"
    ],
    faculty: [
      { name: "Prof. Dr. S. Dasgupta", designation: "Professor & HOD", qualification: "MBBS, MS" },
      { name: "Dr. Nandita Paul", designation: "Associate Professor", qualification: "MBBS, MD" }
    ],
    image: "https://jhmcri.com/wp-content/uploads/2026/09/medical-appointment-doctor-healthcare-40568-40568-scaled.jpg"
  },
  {
    id: "paediatrics",
    slug: "paediatrics",
    name: "Department of Paediatrics",
    category: "Clinical",
    hod: "Prof. Dr. M. R. Chowdhury, MBBS, MD (Paediatrics), DCH",
    description: "Features Level-III NICU, PICU, Child Immunization clinic, Well-Baby Clinic, and Child Development centre.",
    features: [
      "Level-III Neonatal Intensive Care Unit (NICU) with warmers & ventilators",
      "Paediatric Intensive Care Unit (PICU)",
      "Daily immunization and developmental assessment clinics",
      "Pediatric emergency & nutrition counseling center"
    ],
    faculty: [
      { name: "Prof. Dr. M. R. Chowdhury", designation: "Professor & HOD", qualification: "MBBS, MD" },
      { name: "Dr. Alok Nath", designation: "Assistant Professor", qualification: "MBBS, MD" }
    ],
    image: "https://jhmcri.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-25-at-7.30.20-PM-1-1024x843.jpeg"
  },
  {
    id: "orthopaedics",
    slug: "orthopaedics",
    name: "Department of Orthopaedics",
    category: "Clinical",
    hod: "Prof. Dr. A. K. Ghosh, MBBS, MS (Ortho)",
    description: "Specializes in joint replacements, arthroscopy, polytrauma care, fracture fixation, spine surgeries, and rehabilitation.",
    features: [
      "C-Arm image intensifiers in dedicated Orthopaedic OTs",
      "Polytrauma & Emergency fracture management unit",
      "Arthroscopy & Sports Injury Clinic",
      "Physiotherapy & Rehabilitation department integration"
    ],
    faculty: [
      { name: "Prof. Dr. A. K. Ghosh", designation: "Professor & HOD", qualification: "MBBS, MS" },
      { name: "Dr. Dipanjan Bose", designation: "Assistant Professor", qualification: "MBBS, MS" }
    ],
    image: "https://jhmcri.com/wp-content/uploads/2025/11/physician-reviewing-mri-scan-x-ray-results-with-patient-medical-office-1024x576.jpg"
  },
  {
    id: "radiology",
    slug: "radiology",
    name: "Department of Radio-Diagnosis",
    category: "Clinical",
    hod: "Prof. Dr. K. L. Sen, MBBS, MD (Radiology)",
    description: "Houses 16/32-slice Multi-detector CT Scanner, 500mA/300mA Digital X-Rays, High-end Doppler Ultrasonography, and Mammography.",
    features: [
      "Multi-detector Computed Tomography (CT) 24x7 emergency scanning",
      "High-resolution Color Doppler USG units",
      "Digital Radiography (DR) & Mobile X-Ray units for ICU/OTs",
      "Picture Archiving & Communication System (PACS)"
    ],
    faculty: [
      { name: "Prof. Dr. K. L. Sen", designation: "Professor & HOD", qualification: "MBBS, MD" },
      { name: "Dr. Rajesh Pramanik", designation: "Associate Professor", qualification: "MBBS, MD" }
    ],
    image: "https://jhmcri.com/wp-content/uploads/2025/11/physician-reviewing-mri-scan-x-ray-results-with-patient-medical-office-1024x576.jpg"
  },
  {
    id: "anaesthesiology",
    slug: "anaesthesiology",
    name: "Department of Anaesthesiology & Critical Care",
    category: "Clinical",
    hod: "Prof. Dr. T. K. Roy, MBBS, MD, DA",
    description: "Manages all Central Operation Theatres, Post-Anesthesia Care Units (PACU), Emergency Resuscitation, and Intensive Care Units.",
    features: [
      "Workstations with multi-parameter vital monitors & capnography",
      "Advanced airway management tools & video laryngoscopes",
      "Acute & Chronic Pain Management Clinic",
      "Critical Care team available round-the-clock for trauma & code blues"
    ],
    faculty: [
      { name: "Prof. Dr. T. K. Roy", designation: "Professor & HOD", qualification: "MBBS, MD" },
      { name: "Dr. Sujit Karmakar", designation: "Associate Professor", qualification: "MBBS, MD" }
    ],
    image: "https://jhmcri.com/wp-content/uploads/2025/11/diverse-team-professional-surgeon-assistants-nurses-performing-invasive-surgery-patient-hospital-operating-room-surgeons-talk-use-instruments-real-modern-hospital-1024x683.jpg"
  },
  {
    id: "ophthalmology",
    slug: "ophthalmology",
    name: "Department of Ophthalmology",
    category: "Clinical",
    hod: "Prof. Dr. S. K. Dutta, MBBS, MS (Ophthalmology)",
    description: "Equipped with Slit Lamps, Phacoemulsification unit for cataract surgeries, Automated Perimetry, and Refraction suite.",
    features: [
      "Phacoemulsification cataract surgery setup",
      "Fundus photography & optical coherence diagnostics",
      "Community eye screening camps across rural Murshidabad",
      "Dedicated Eye Operation Theatre"
    ],
    faculty: [
      { name: "Prof. Dr. S. K. Dutta", designation: "Professor & HOD", qualification: "MBBS, MS" },
      { name: "Dr. Anita Das", designation: "Assistant Professor", qualification: "MBBS, MS" }
    ],
    image: "https://jhmcri.com/wp-content/uploads/2026/01/gd9ad435320023ef859cce33cf511252461c3f8b7834c5157c7bb2da315c8bc4cb99d67caecefa5ed90134f9cf8640fed4710527520cdaa31373293145762c82a_1280-1149148-1024x576.jpg"
  },
  {
    id: "ent",
    slug: "ent",
    name: "Department of Otorhinolaryngology (ENT)",
    category: "Clinical",
    hod: "Prof. Dr. R. N. Paul, MBBS, MS (ENT)",
    description: "Provides comprehensive diagnostic and surgical care for ear, nose, throat, head & neck disorders, with audiometry and endoscopy.",
    features: [
      "Pure Tone Audiometry (PTA) & Tympanometry sound-proof cabin",
      "Diagnostic Nasal Endoscopy & Rigid Laryngoscopy",
      "Micro-ear surgery & FESS (Functional Endoscopic Sinus Surgery)",
      "Dedicated ENT OT & OPD examination stations"
    ],
    faculty: [
      { name: "Prof. Dr. R. N. Paul", designation: "Professor & HOD", qualification: "MBBS, MS" },
      { name: "Dr. B. K. Saha", designation: "Assistant Professor", qualification: "MBBS, MS" }
    ],
    image: "https://jhmcri.com/wp-content/uploads/2026/01/pexels-photo-7579827-7579827-1024x683.jpg"
  },
  {
    id: "dermatology",
    slug: "dermatology",
    name: "Department of Dermatology, Venereology & Leprosy",
    category: "Clinical",
    hod: "Dr. S. Mukherjee, MBBS, MD (Dermatology)",
    description: "Treats skin conditions, allergy disorders, cosmetic dermatology procedures, electrocautery, and sexually transmitted infections.",
    features: [
      "Dermatosurgery & chemical peel treatment room",
      "Phototherapy unit & Wood's lamp diagnostics",
      "Special clinics for Psoriasis, Vitiligo, and Leprosy",
      "Daily specialized outpatient consultation"
    ],
    faculty: [
      { name: "Dr. S. Mukherjee", designation: "Associate Professor & HOD", qualification: "MBBS, MD" },
      { name: "Dr. Swati Sen", designation: "Senior Resident", qualification: "MBBS, DVD" }
    ],
    image: "https://jhmcri.com/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-14-at-11.34.12-1024x682.jpeg"
  },
  {
    id: "psychiatry",
    slug: "psychiatry",
    name: "Department of Psychiatry",
    category: "Clinical",
    hod: "Dr. A. K. Sengupta, MBBS, MD (Psychiatry)",
    description: "Mental health services including de-addiction, psychotherapy, child guidance, mood disorders, and stress management.",
    features: [
      "Dedicated Psychiatry inpatient ward with compassionate care",
      "De-addiction & substance abuse rehabilitation counseling",
      "Psychometric assessment & child guidance clinic",
      "Student mental wellness support team"
    ],
    faculty: [
      { name: "Dr. A. K. Sengupta", designation: "Associate Professor & HOD", qualification: "MBBS, MD" },
      { name: "Dr. P. Mallick", designation: "Clinical Psychologist", qualification: "M.Phil, Ph.D" }
    ],
    image: "https://jhmcri.com/wp-content/uploads/2026/06/pexels-photo-33845771-33845771-scaled.jpg"
  },
  {
    id: "dentistry",
    slug: "dentistry",
    name: "Department of Dentistry",
    category: "Clinical",
    hod: "Dr. S. K. Roy Chowdhury, BDS, MDS",
    description: "Equipped with motorized dental chairs, intraoral digital X-ray (RVG), oral prophylaxis, endodontics, and maxillofacial surgery.",
    features: [
      "Ergonomic multi-function motorized dental chairs",
      "Digital RVG X-ray & ultrasonic scalers",
      "Maxillofacial trauma & minor oral surgical procedures",
      "Prosthodontic & conservative dental care"
    ],
    faculty: [
      { name: "Dr. S. K. Roy Chowdhury", designation: "Associate Professor & HOD", qualification: "BDS, MDS" },
      { name: "Dr. Priyanka Nandi", designation: "Dental Surgeon", qualification: "BDS" }
    ],
    image: "https://jhmcri.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-25-at-7.30.20-PM-1-1024x847.jpeg"
  }
];

export const BED_DISTRIBUTION: BedDistributionItem[] = [
  { department: "General Medicine", beds: 100, icuBeds: 15, category: "Clinical" },
  { department: "General Surgery", beds: 90, icuBeds: 10, category: "Clinical" },
  { department: "Obstetrics & Gynaecology", beds: 60, icuBeds: 5, category: "Clinical" },
  { department: "Paediatrics", beds: 40, icuBeds: 10, category: "Clinical" },
  { department: "Orthopaedics", beds: 30, icuBeds: 4, category: "Clinical" },
  { department: "Ophthalmology (Eye)", beds: 15, icuBeds: 0, category: "Clinical" },
  { department: "ENT (Otorhinolaryngology)", beds: 15, icuBeds: 0, category: "Clinical" },
  { department: "Dermatology", beds: 10, icuBeds: 0, category: "Clinical" },
  { department: "Psychiatry", beds: 10, icuBeds: 0, category: "Clinical" },
  { department: "Emergency / Trauma", beds: 20, icuBeds: 10, category: "Emergency" }
];

export const CLINICAL_STATS = [
  { metric: "Average Daily OPD Patients", count: "850 - 1,100" },
  { metric: "Average Inpatient Bed Occupancy", count: "78% - 85%" },
  { metric: "Daily Diagnostic Lab Investigations", count: "1,200+" },
  { metric: "Major & Minor Surgeries per Month", count: "350+" },
  { metric: "Normal & C-Section Deliveries per Month", count: "120+" },
  { metric: "24x7 Ambulance & Emergency Fleet", count: "4 Advanced Life Support Ambulances" },
  { metric: "Central Oxygen Generation Plant", count: "1,000 LPM Automated PSA System" },
  { metric: "Blood Storage / Centre", count: "24x7 Licensed Blood Bank with Component Separation" }
];

export const GOV_APPROVALS = [
  {
    course: "MBBS (100 / 150 Seats)",
    authority: "National Medical Commission (NMC)",
    body: "Medical Assessment and Rating Board (MARB)",
    details: "Letter of Permission (LOP) granted under Section 26(1)(a)(b) and 28(1)(2) of NMC Act 2019."
  },
  {
    course: "MBBS Affiliation",
    authority: "The West Bengal University of Health Sciences (WBUHS)",
    body: "Academic Council & Affiliation Branch",
    details: "Consent of Affiliation renewed annually for continuous academic batches (2024-25, 2025-26, 2026-27)."
  },
  {
    course: "Institutional Framework",
    authority: "Government of West Bengal",
    body: "Department of Health & Family Welfare",
    details: "Established under Public-Private Partnership (PPP) mode with Shibham Education & Social Welfare Trust."
  }
];

export const COMMITTEES = [
  {
    name: "Anti-Ragging Committee & Squad",
    chairperson: "Dean & Principal",
    members: "Faculty Representatives, Police Administration, NGO, Parent Representatives, Senior & Junior Students",
    purpose: "Zero-tolerance policy towards ragging in any form. 24x7 monitoring in hostels, canteens, and academic blocks."
  },
  {
    name: "Internal Complaints Committee (ICC) / Gender Harassment",
    chairperson: "Senior Female Professor",
    members: "Faculty, Legal Counselor, NGO Representative",
    purpose: "Prevent sexual harassment and ensure a safe, dignified learning and working environment for all female students and staff."
  },
  {
    name: "Institutional Ethics Committee (Human Research)",
    chairperson: "External Eminent Clinician / Legal Expert",
    members: "Pharmacologist, Basic Medical Scientists, Clinicians, Layperson, Legal Advisor",
    purpose: "Review and approve all biomedical and clinical research projects according to ICMR guidelines."
  },
  {
    name: "College Council & Curriculum Committee",
    chairperson: "Dean & Principal",
    members: "All Heads of Departments (HODs), MEU Coordinator",
    purpose: "Formulate academic calendar, monitor CBME teaching delivery, internal assessments, and student progress."
  },
  {
    name: "Grievance Redressal Cell",
    chairperson: "Medical Superintendent",
    members: "Senior Professors, Student Welfare Officer",
    purpose: "Prompt and transparent redressal of academic, hostel, or administrative issues submitted by students or guardians."
  },
  {
    name: "Pharmacovigilance & Hospital Infection Control (HICC)",
    chairperson: "HOD Microbiology & HOD Pharmacology",
    members: "MS, Nursing Superintendent, ICU In-charges",
    purpose: "Monitor hospital-acquired infections, antimicrobial stewardship, and adverse drug reactions (ADR)."
  }
];

export const ADMISSION_PROCESS_STEPS = [
  {
    step: 1,
    title: "NEET-UG Qualification",
    desc: "Candidate must qualify the National Eligibility cum Entrance Test (NEET-UG 2026) conducted by NTA."
  },
  {
    step: 2,
    title: "WBMCC State Counselling Registration",
    desc: "Register on the official West Bengal Medical Counselling Committee (WBMCC) portal (wbmcc.nic.in)."
  },
  {
    step: 3,
    title: "Document Verification",
    desc: "Attend physical or online document verification as scheduled by the state counselling authority."
  },
  {
    step: 4,
    title: "Choice Filling & Seat Allotment",
    desc: "Select Jakir Hossain Medical College & Research Institute (JHMCRI) as your preferred choice in Round 1/2/Mop-Up."
  },
  {
    step: 5,
    title: "Reporting to JHMCRI Campus",
    desc: "Report to the college admission desk in Miapur, Murshidabad with the allotment letter, original documents, medical fitness certificate, and fee payment proof."
  },
  {
    step: 6,
    title: "Hostel Allotment & Induction",
    desc: "Complete hostel registration and attend the Foundation Course & White Coat Ceremony."
  }
];

export const BANK_DETAILS = {
  accountName: "JAKIR HOSSAIN MEDICAL COLLEGE AND RESEARCH INSTITUTE",
  bankName: "State Bank of India (SBI) / HDFC Bank",
  accountType: "Current Account",
  accountNumber: "42389100023489",
  ifscCode: "SBIN0001234 / HDFC0000456",
  branch: "Raghunathganj Branch, Murshidabad",
  notes: "Please write Candidate's Name and NEET Roll Number in the transaction remarks when transferring through RTGS/NEFT/IMPS. Submit the UTR receipt at the college accounts desk."
};

export const SCHOLARSHIPS_INFO = [
  {
    title: "Swami Vivekananda Merit-cum-Means (SVMCM)",
    provider: "Govt. of West Bengal (Higher Education Dept)",
    eligibility: "State quota students with min 60% marks in HS and family income < 2.5 LPA.",
    benefit: "Up to ₹60,000 - ₹96,000 per annum towards tuition assistance."
  },
  {
    title: "WBMDFC Aikyashree Scholarship",
    provider: "West Bengal Minorities' Development & Finance Corporation",
    eligibility: "Minority community MBBS students residing in West Bengal.",
    benefit: "Pre/Post-Matric and Merit-cum-Means scholarship for professional studies."
  },
  {
    title: "OASIS Scholarship (SC/ST/OBC)",
    provider: "Backward Classes Welfare Department, Govt. of WB",
    eligibility: "Students belonging to SC, ST, and OBC categories with domicile in West Bengal.",
    benefit: "Maintenance allowance and fee concessions as per state norms."
  },
  {
    title: "Student Credit Card Scheme (WBSCC)",
    provider: "Govt. of West Bengal",
    eligibility: "West Bengal resident students studying in recognized higher educational institutions.",
    benefit: "Collateral-free education loan up to ₹10 Lakhs at nominal simple interest (4% per annum with subvention)."
  },
  {
    title: "Nationalized Bank Education Loans",
    provider: "SBI, PNB, Canara Bank, HDFC, Axis",
    eligibility: "All admitted MBBS students with allotment letter.",
    benefit: "Full education loan coverage for tuition fee, hostel fee, and laptop/books with complete institutional paperwork assistance from JHMCRI."
  }
];

export const HOSTEL_AMENITIES = [
  {
    title: "Separate Boys & Girls Hostels",
    desc: "Spacious twin/triple sharing rooms with comfortable beds, study desks, cupboards, and attached/semi-attached washrooms."
  },
  {
    title: "Hygienic Dining & Multi-Cuisine Mess",
    desc: "Nutritious breakfast, lunch, evening snacks, and dinner prepared under strict hygiene standards by professional chefs (Veg & Non-Veg)."
  },
  {
    title: "24x7 Security & CCTV Surveillance",
    desc: "Round-the-clock security guards, biometric access control, warden supervision, and full perimeter CCTV monitoring."
  },
  {
    title: "High-Speed Campus WiFi & Power Backup",
    desc: "Uninterrupted electricity with dedicated heavy-duty diesel generators and high-speed optical fiber internet."
  },
  {
    title: "Indoor & Outdoor Sports",
    desc: "Cricket pitch, football ground, badminton courts, table tennis, carrom, and a modern student gymnasium."
  },
  {
    title: "Common Recreation & Study Lounges",
    desc: "Quiet study zones on each floor and common recreation hall with TV, periodicals, and newspaper stands."
  }
];

export const NOTICES = [
  {
    id: "n1",
    date: "Oct 2026",
    title: "MBBS Admission 2026-2027: Reporting Schedule & Document Checklist for WBMCC Round 1 Allotted Candidates",
    category: "Admissions",
    isNew: true,
    fileSize: "1.2 MB PDF"
  },
  {
    id: "n2",
    date: "Sep 2026",
    title: "MBBS 1st Professional Supplementary Examination Schedule Announced by WBUHS",
    category: "Examinations",
    isNew: true,
    fileSize: "850 KB PDF"
  },
  {
    id: "n3",
    date: "Aug 2026",
    title: "Academic Calendar & Foundation Course for New MBBS Batch (2026-2027)",
    category: "Academics",
    isNew: false,
    fileSize: "620 KB PDF"
  },
  {
    id: "n4",
    date: "Jul 2026",
    title: "NMC MARB Inspection & Annual Approval Notification for Session 2026-2027",
    category: "Approvals",
    isNew: false,
    fileSize: "2.1 MB PDF"
  },
  {
    id: "n5",
    date: "Jun 2026",
    title: "Institutional Anti-Ragging Committee & Flying Squad Reconstitution Notice",
    category: "Governance",
    isNew: false,
    fileSize: "440 KB PDF"
  }
];

export const FAQS = [
  {
    question: "Where is Jakir Hossain Medical College & Research Institute located?",
    answer: "JHMCRI is situated at Vill + P.O.- Miapur, P.S. Raghunathganj, Murshidabad district, West Bengal - 742235. The campus is well-connected by train via Jangipur Road / Raghunathganj stations and state highways."
  },
  {
    question: "Is Jakir Hossain Medical College approved by the National Medical Commission (NMC)?",
    answer: "Yes, JHMCRI has received the Letter of Permission (LOP) and approval from the Medical Assessment and Rating Board (MARB), National Medical Commission (NMC), New Delhi, and is affiliated to The West Bengal University of Health Sciences (WBUHS), Kolkata."
  },
  {
    question: "How do I get MBBS admission at JHMCRI?",
    answer: "Admissions to the MBBS program are conducted strictly on the basis of merit in the National Eligibility cum Entrance Test (NEET-UG) through centralized counselling conducted by the West Bengal Medical Counselling Committee (WBMCC)."
  },
  {
    question: "Does the college offer hostel facilities for boys and girls?",
    answer: "Yes, JHMCRI has separate, well-maintained residential hostels for boys and girls on campus, complete with 24x7 security, dining mess, study halls, high-speed WiFi, and recreational amenities."
  },
  {
    question: "Can students apply for West Bengal government scholarships?",
    answer: "Eligible students can apply for the West Bengal Student Credit Card (WBSCC), Swami Vivekananda Merit-cum-Means (SVMCM), Aikyashree Scholarship, and OASIS (SC/ST/OBC) scholarships. JHMCRI provides complete documentation support."
  },
  {
    question: "What are the hospital and clinical training facilities at JHMCRI?",
    answer: "The teaching hospital boasts 350+ beds, 24x7 emergency and trauma care, multi-speciality ICUs (MICU, SICU, ICCU, NICU, PICU), modern operation theatres, automated pathology & biochemistry labs, 24x7 radiology (CT scan, X-Ray, USG), dialysis unit, and active RHTC/UHTC health centers."
  }
];

export const GALLERY_IMAGES = [
  {
    title: "Main Administrative & Hospital Building",
    src: "https://jhmcri.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-25-at-7.30.20-PM-1024x676.jpeg",
    category: "Campus"
  },
  {
    title: "Modular Operation Theatres & Surgical Suite",
    src: "https://jhmcri.com/wp-content/uploads/2025/11/diverse-team-professional-surgeon-assistants-nurses-performing-invasive-surgery-patient-hospital-operating-room-surgeons-talk-use-instruments-real-modern-hospital-1024x683.jpg",
    category: "Hospital"
  },
  {
    title: "24x7 Emergency & Trauma Care Unit",
    src: "https://jhmcri.com/wp-content/uploads/2025/11/24X7-EMERGENCY-SERVICES-1024x717.jpg",
    category: "Hospital"
  },
  {
    title: "Fully Automated Central Diagnostic Laboratory",
    src: "https://jhmcri.com/wp-content/uploads/2025/11/LABORATORY-SERVICES-1024x683.jpg",
    category: "Laboratories"
  },
  {
    title: "Digital Radio-Diagnosis & CT Scanning Suite",
    src: "https://jhmcri.com/wp-content/uploads/2025/11/physician-reviewing-mri-scan-x-ray-results-with-patient-medical-office-1024x576.jpg",
    category: "Hospital"
  },
  {
    title: "Rural Health Training Centre (RHTC)",
    src: "https://jhmcri.com/wp-content/uploads/2025/11/RULAR-HEALTH-TRAINING-CENTRES-RHTC-1024x683.jpg",
    category: "Community"
  },
  {
    title: "Dissection Hall & Anatomical Demonstrations",
    src: "https://jhmcri.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-25-at-7.30.22-PM-2-1024x682.jpeg",
    category: "Academics"
  },
  {
    title: "Central Medical Library & Reading Hall",
    src: "https://jhmcri.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-25-at-7.30.19-PM-e1764093650153-1024x739.jpeg",
    category: "Academics"
  },
  {
    title: "Dedicated Paediatrics & Neonatal Care Ward",
    src: "https://jhmcri.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-25-at-7.30.20-PM-1-1024x843.jpeg",
    category: "Hospital"
  },
  {
    title: "Advanced Ambulance Fleet & Emergency Response",
    src: "https://jhmcri.com/wp-content/uploads/2025/11/AMBULANCE-SERVICES-1024x683.jpg",
    category: "Hospital"
  },
  {
    title: "Faculty Lecture Theatre with Audio-Visual Tech",
    src: "https://jhmcri.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-25-at-7.30.21-PM-1-1024x682.jpeg",
    category: "Academics"
  },
  {
    title: "Student Residential Hostels & Green Courtyard",
    src: "https://jhmcri.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-25-at-7.30.20-PM.jpeg",
    category: "Campus"
  }
];
