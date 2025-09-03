export const mockHospitals = [
  {
    id: 1,
    name: "St. Mary's Medical Center",
    type: "General Hospital",
    rating: 4.8,
    reviewCount: 1247,
    address: "123 Healthcare Blvd, San Francisco, CA 94102",
    phone: "(415) 555-0123",
    website: "https://stmarysmedical.com",
    email: "info@stmarysmedical.com",
    image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=500",
    specialties: ["Cardiology", "Neurology", "Emergency Medicine", "Surgery", "Pediatrics"],
    isOpen24h: true,
    bedCount: 450,
    isVerified: true,
    doctors: 125,
    emergencyServices: true,
    established: 1975,
    accreditation: "Joint Commission Accredited",
    description: "St. Mary's Medical Center has been serving the San Francisco community for over 50 years, providing comprehensive healthcare services with a focus on patient-centered care and medical excellence. Our state-of-the-art facilities and experienced medical team ensure the highest quality of care.",
    services: [
      {
        category: "Emergency Services",
        items: [
          { name: "Emergency Room Visit", price: "$850", description: "24/7 emergency medical care" },
          { name: "Trauma Care", price: "$2,500", description: "Level 1 trauma center services" },
          { name: "Ambulance Service", price: "$1,200", description: "Emergency transport services" }
        ]
      },
      {
        category: "Diagnostic Services",
        items: [
          { name: "MRI Scan", price: "$1,800", description: "Magnetic resonance imaging" },
          { name: "CT Scan", price: "$1,200", description: "Computed tomography scan" },
          { name: "X-Ray", price: "$250", description: "Digital radiography" },
          { name: "Ultrasound", price: "$400", description: "Diagnostic ultrasound imaging" },
          { name: "Blood Work", price: "$150", description: "Comprehensive blood panel" }
        ]
      },
      {
        category: "Surgical Services",
        items: [
          { name: "Heart Surgery", price: "$45,000", description: "Cardiac surgical procedures" },
          { name: "Orthopedic Surgery", price: "$25,000", description: "Bone and joint surgery" },
          { name: "General Surgery", price: "$15,000", description: "Common surgical procedures" },
          { name: "Minimally Invasive Surgery", price: "$18,000", description: "Laparoscopic procedures" }
        ]
      },
      {
        category: "Consultation Services",
        items: [
          { name: "Specialist Consultation", price: "$350", description: "Expert medical consultation" },
          { name: "General Consultation", price: "$200", description: "Primary care consultation" },
          { name: "Follow-up Visit", price: "$150", description: "Post-treatment follow-up" }
        ]
      }
    ],
    facilities: [
      "24/7 Emergency Department",
      "Intensive Care Unit",
      "Operating Theaters",
      "Maternity Ward",
      "Pediatric Unit",
      "Radiology Department",
      "Laboratory",
      "Pharmacy",
      "Cafeteria",
      "Parking Garage"
    ],
    insurance: [
      "Blue Cross Blue Shield",
      "Aetna",
      "Cigna",
      "UnitedHealthcare",
      "Medicare",
      "Medicaid",
      "Kaiser Permanente"
    ]
  },
  {
    id: 2,
    name: "Pacific Heart Institute",
    type: "Specialty Hospital",
    rating: 4.9,
    reviewCount: 892,
    address: "456 Cardiac Drive, Los Angeles, CA 90210",
    phone: "(323) 555-0456",
    website: "https://pacificheart.com",
    email: "contact@pacificheart.com",
    image: "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=500",
    specialties: ["Cardiology", "Cardiac Surgery", "Interventional Cardiology"],
    isOpen24h: false,
    bedCount: 180,
    isVerified: true,
    doctors: 45,
    emergencyServices: false,
    established: 1985,
    accreditation: "American Heart Association Certified",
    description: "The Pacific Heart Institute is a world-renowned cardiac care facility, specializing in advanced heart treatments and pioneering cardiac research. Our team of leading cardiologists provides comprehensive heart care using the latest technology.",
    services: [
      {
        category: "Cardiac Procedures",
        items: [
          { name: "Heart Bypass Surgery", price: "$65,000", description: "Coronary artery bypass grafting" },
          { name: "Angioplasty", price: "$28,000", description: "Balloon angioplasty with stent" },
          { name: "Pacemaker Implant", price: "$35,000", description: "Cardiac pacemaker insertion" },
          { name: "Heart Valve Repair", price: "$55,000", description: "Valve replacement surgery" }
        ]
      },
      {
        category: "Diagnostic Services",
        items: [
          { name: "Cardiac Catheterization", price: "$8,500", description: "Heart catheter procedure" },
          { name: "Echocardiogram", price: "$650", description: "Heart ultrasound" },
          { name: "Stress Test", price: "$450", description: "Cardiac stress testing" },
          { name: "Holter Monitor", price: "$300", description: "24-hour heart monitoring" }
        ]
      },
      {
        category: "Consultation Services",
        items: [
          { name: "Cardiologist Consultation", price: "$450", description: "Specialist heart consultation" },
          { name: "Pre-Surgery Consultation", price: "$300", description: "Pre-operative assessment" },
          { name: "Post-Surgery Follow-up", price: "$250", description: "Post-operative care" }
        ]
      }
    ],
    facilities: [
      "Cardiac Catheterization Lab",
      "Operating Suites",
      "Cardiac ICU",
      "Recovery Rooms",
      "Diagnostic Imaging",
      "Rehabilitation Center",
      "Patient Education Center"
    ],
    insurance: [
      "Blue Cross Blue Shield",
      "Aetna",
      "Cigna",
      "UnitedHealthcare",
      "Medicare"
    ]
  },
  {
    id: 3,
    name: "Children's Healthcare Network",
    type: "Pediatric Hospital",
    rating: 4.7,
    reviewCount: 2156,
    address: "789 Kids Way, Seattle, WA 98101",
    phone: "(206) 555-0789",
    website: "https://childrenshealthcare.com",
    email: "info@childrenshealthcare.com",
    image: "https://images.pexels.com/photos/139398/pexels-photo-139398.jpeg?auto=compress&cs=tinysrgb&w=500",
    specialties: ["Pediatrics", "Neonatology", "Pediatric Surgery", "Child Psychology"],
    isOpen24h: true,
    bedCount: 320,
    isVerified: true,
    doctors: 89,
    emergencyServices: true,
    established: 1990,
    accreditation: "Pediatric Care Excellence Award",
    description: "Children's Healthcare Network is dedicated to providing exceptional medical care for infants, children, and adolescents in a child-friendly environment. Our specialized pediatric team ensures the best possible care for young patients.",
    services: [
      {
        category: "Pediatric Emergency",
        items: [
          { name: "Pediatric ER Visit", price: "$750", description: "Child emergency care" },
          { name: "Pediatric Trauma Care", price: "$2,200", description: "Specialized trauma care for children" },
          { name: "Urgent Pediatric Care", price: "$400", description: "Non-emergency urgent care" }
        ]
      },
      {
        category: "Specialized Care",
        items: [
          { name: "Neonatal ICU", price: "$3,500/day", description: "Intensive care for newborns" },
          { name: "Pediatric Surgery", price: "$18,000", description: "Surgical procedures for children" },
          { name: "Child Psychology Session", price: "$180", description: "Mental health support" },
          { name: "Developmental Assessment", price: "$350", description: "Child development evaluation" }
        ]
      },
      {
        category: "Routine Care",
        items: [
          { name: "Well-Child Visit", price: "$200", description: "Regular health checkup" },
          { name: "Vaccination", price: "$75", description: "Immunization services" },
          { name: "Pediatric Consultation", price: "$250", description: "Specialist consultation" }
        ]
      }
    ],
    facilities: [
      "Pediatric Emergency Department",
      "Neonatal ICU",
      "Pediatric Operating Rooms",
      "Child Life Center",
      "Family Rooms",
      "Playground Area",
      "Pediatric Imaging",
      "School Services"
    ],
    insurance: [
      "Blue Cross Blue Shield",
      "Aetna",
      "Cigna",
      "UnitedHealthcare",
      "Medicare",
      "Medicaid",
      "Children's Health Insurance"
    ]
  },
  {
    id: 4,
    name: "Metro General Hospital",
    type: "Teaching Hospital",
    rating: 4.5,
    reviewCount: 3421,
    address: "321 University Ave, Boston, MA 02115",
    phone: "(617) 555-0321",
    website: "https://metrogeneral.com",
    email: "admissions@metrogeneral.com",
    image: "https://images.pexels.com/photos/305568/pexels-photo-305568.jpeg?auto=compress&cs=tinysrgb&w=500",
    specialties: ["Internal Medicine", "Orthopedics", "Oncology", "Neurology", "Emergency Medicine"],
    isOpen24h: true,
    bedCount: 680,
    isVerified: true,
    doctors: 234,
    emergencyServices: true,
    established: 1962,
    accreditation: "Magnet Hospital Recognition",
    description: "Metro General Hospital is a leading teaching hospital affiliated with Harvard Medical School, providing cutting-edge medical care and training the next generation of physicians. We combine academic excellence with compassionate patient care.",
    services: [
      {
        category: "Emergency & Trauma",
        items: [
          { name: "Level 1 Trauma Care", price: "$4,500", description: "Comprehensive trauma services" },
          { name: "Emergency Room Visit", price: "$900", description: "24/7 emergency medical care" },
          { name: "Critical Care", price: "$2,800/day", description: "Intensive care unit services" }
        ]
      },
      {
        category: "Cancer Treatment",
        items: [
          { name: "Chemotherapy Session", price: "$3,200", description: "Cancer treatment therapy" },
          { name: "Radiation Therapy", price: "$2,800", description: "Targeted radiation treatment" },
          { name: "Oncology Consultation", price: "$400", description: "Cancer specialist consultation" },
          { name: "Tumor Surgery", price: "$35,000", description: "Surgical tumor removal" }
        ]
      },
      {
        category: "Orthopedic Services",
        items: [
          { name: "Joint Replacement", price: "$42,000", description: "Hip or knee replacement surgery" },
          { name: "Arthroscopy", price: "$12,000", description: "Minimally invasive joint surgery" },
          { name: "Fracture Treatment", price: "$8,500", description: "Bone fracture repair" },
          { name: "Physical Therapy", price: "$120/session", description: "Rehabilitation services" }
        ]
      },
      {
        category: "General Services",
        items: [
          { name: "General Consultation", price: "$220", description: "Primary care consultation" },
          { name: "Specialist Referral", price: "$180", description: "Specialist appointment" },
          { name: "Health Screening", price: "$300", description: "Comprehensive health checkup" }
        ]
      }
    ],
    facilities: [
      "Level 1 Trauma Center",
      "Cancer Treatment Center",
      "Stroke Center",
      "Organ Transplant Unit",
      "Medical Education Center",
      "Research Facilities",
      "Rehabilitation Center",
      "Helipad",
      "Conference Centers"
    ],
    insurance: [
      "Blue Cross Blue Shield",
      "Aetna",
      "Cigna",
      "UnitedHealthcare",
      "Medicare",
      "Medicaid",
      "Harvard Pilgrim",
      "Tufts Health Plan"
    ]
  },
  {
    id: 5,
    name: "Wellness Springs Hospital",
    type: "Community Hospital",
    rating: 4.6,
    reviewCount: 756,
    address: "567 Wellness Dr, Austin, TX 78701",
    phone: "(512) 555-0567",
    website: "https://wellnesssprings.com",
    email: "care@wellnesssprings.com",
    image: "https://images.pexels.com/photos/1692693/pexels-photo-1692693.jpeg?auto=compress&cs=tinysrgb&w=500",
    specialties: ["Family Medicine", "Obstetrics", "Orthopedics", "Dermatology"],
    isOpen24h: false,
    bedCount: 220,
    isVerified: true,
    doctors: 67,
    emergencyServices: true,
    established: 1998,
    accreditation: "Community Healthcare Excellence",
    description: "Wellness Springs Hospital is committed to providing personalized, compassionate care to our local community with a focus on preventive medicine and wellness. We believe in treating the whole person, not just the illness.",
    services: [
      {
        category: "Women's Health",
        items: [
          { name: "Prenatal Care", price: "$2,800", description: "Complete pregnancy care package" },
          { name: "Delivery Services", price: "$8,500", description: "Natural birth delivery" },
          { name: "C-Section Delivery", price: "$12,000", description: "Cesarean section delivery" },
          { name: "Gynecological Exam", price: "$280", description: "Annual women's health exam" }
        ]
      },
      {
        category: "Family Medicine",
        items: [
          { name: "Annual Physical", price: "$250", description: "Comprehensive health examination" },
          { name: "Vaccination", price: "$85", description: "Immunization services" },
          { name: "Chronic Disease Management", price: "$180", description: "Ongoing care for chronic conditions" },
          { name: "Preventive Screening", price: "$200", description: "Health screening services" }
        ]
      },
      {
        category: "Dermatology",
        items: [
          { name: "Skin Cancer Screening", price: "$220", description: "Comprehensive skin examination" },
          { name: "Mole Removal", price: "$450", description: "Surgical mole removal" },
          { name: "Dermatology Consultation", price: "$280", description: "Skin condition consultation" },
          { name: "Cosmetic Procedures", price: "$800", description: "Aesthetic dermatology services" }
        ]
      }
    ],
    facilities: [
      "Family Practice Clinic",
      "Women's Health Center",
      "Orthopedic Center",
      "Dermatology Clinic",
      "Urgent Care",
      "Wellness Center",
      "Health Education Center",
      "Outpatient Surgery"
    ],
    insurance: [
      "Blue Cross Blue Shield",
      "Aetna",
      "Cigna",
      "UnitedHealthcare",
      "Medicare",
      "Medicaid",
      "Scott & White Health Plan"
    ]
  },
  {
    id: 6,
    name: "Advanced Neurological Institute",
    type: "Specialty Hospital",
    rating: 4.9,
    reviewCount: 543,
    address: "890 Brain Ave, Chicago, IL 60601",
    phone: "(312) 555-0890",
    website: "https://advancedneuro.com",
    email: "neuro@advancedneuro.com",
    image: "https://images.pexels.com/photos/3279196/pexels-photo-3279196.jpeg?auto=compress&cs=tinysrgb&w=500",
    specialties: ["Neurology", "Neurosurgery", "Spine Surgery", "Epilepsy Treatment"],
    isOpen24h: false,
    bedCount: 150,
    isVerified: true,
    doctors: 38,
    emergencyServices: false,
    established: 1995,
    accreditation: "Neurological Excellence Center",
    description: "The Advanced Neurological Institute is a premier facility specializing in comprehensive neurological care, utilizing the latest technology and treatment methods. We are leaders in brain and spine care innovation.",
    services: [
      {
        category: "Brain Surgery",
        items: [
          { name: "Brain Tumor Surgery", price: "$85,000", description: "Surgical removal of brain tumors" },
          { name: "Aneurysm Repair", price: "$75,000", description: "Brain aneurysm surgical repair" },
          { name: "Deep Brain Stimulation", price: "$95,000", description: "DBS for movement disorders" },
          { name: "Craniotomy", price: "$65,000", description: "Brain surgery procedure" }
        ]
      },
      {
        category: "Spine Surgery",
        items: [
          { name: "Spinal Fusion", price: "$55,000", description: "Vertebrae fusion surgery" },
          { name: "Disc Replacement", price: "$48,000", description: "Artificial disc implantation" },
          { name: "Minimally Invasive Spine Surgery", price: "$35,000", description: "Less invasive spine procedures" },
          { name: "Spinal Decompression", price: "$28,000", description: "Nerve decompression surgery" }
        ]
      },
      {
        category: "Neurological Services",
        items: [
          { name: "Neurological Consultation", price: "$450", description: "Specialist neurological evaluation" },
          { name: "EEG Test", price: "$800", description: "Brain wave monitoring" },
          { name: "EMG Test", price: "$650", description: "Muscle and nerve testing" },
          { name: "Epilepsy Monitoring", price: "$2,500/day", description: "Continuous seizure monitoring" }
        ]
      }
    ],
    facilities: [
      "Neurosurgical Suites",
      "Neurological ICU",
      "Epilepsy Monitoring Unit",
      "Spine Center",
      "Neuroimaging Center",
      "Rehabilitation Unit",
      "Research Laboratory"
    ],
    insurance: [
      "Blue Cross Blue Shield",
      "Aetna",
      "Cigna",
      "UnitedHealthcare",
      "Medicare",
      "Northwestern Medicine"
    ]
  },
  {
    id: 7,
    name: "Riverside Medical Center",
    type: "General Hospital",
    rating: 4.4,
    reviewCount: 1876,
    address: "234 River Road, Miami, FL 33101",
    phone: "(305) 555-0234",
    website: "https://riversidemedical.com",
    email: "info@riversidemedical.com",
    image: "https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&cs=tinysrgb&w=500",
    specialties: ["Emergency Medicine", "Internal Medicine", "Surgery", "Radiology", "Pathology"],
    isOpen24h: true,
    bedCount: 380,
    isVerified: true,
    doctors: 98,
    emergencyServices: true,
    established: 1982,
    accreditation: "Joint Commission Gold Seal",
    description: "Riverside Medical Center provides comprehensive healthcare services to the Miami community with a commitment to excellence, innovation, and compassionate care. Our modern facilities and experienced staff ensure quality medical care.",
    services: [
      {
        category: "Emergency Services",
        items: [
          { name: "Emergency Room Visit", price: "$825", description: "24/7 emergency care" },
          { name: "Fast Track Care", price: "$450", description: "Minor emergency treatment" },
          { name: "Observation Services", price: "$1,200", description: "Short-term monitoring" }
        ]
      },
      {
        category: "Surgical Services",
        items: [
          { name: "General Surgery", price: "$16,500", description: "Common surgical procedures" },
          { name: "Laparoscopic Surgery", price: "$19,000", description: "Minimally invasive surgery" },
          { name: "Outpatient Surgery", price: "$8,500", description: "Same-day surgical procedures" },
          { name: "Robotic Surgery", price: "$25,000", description: "Robot-assisted surgery" }
        ]
      },
      {
        category: "Diagnostic Imaging",
        items: [
          { name: "MRI with Contrast", price: "$2,200", description: "Enhanced MRI imaging" },
          { name: "CT Angiogram", price: "$1,800", description: "Vascular imaging" },
          { name: "Mammography", price: "$320", description: "Breast cancer screening" },
          { name: "Bone Density Scan", price: "$180", description: "Osteoporosis screening" }
        ]
      }
    ],
    facilities: [
      "Emergency Department",
      "Operating Theaters",
      "Intensive Care Unit",
      "Radiology Department",
      "Laboratory Services",
      "Outpatient Clinics",
      "Rehabilitation Center",
      "Cafeteria"
    ],
    insurance: [
      "Blue Cross Blue Shield",
      "Aetna",
      "Cigna",
      "UnitedHealthcare",
      "Medicare",
      "Medicaid",
      "Humana"
    ]
  },
  {
    id: 8,
    name: "Mountain View Orthopedic Hospital",
    type: "Specialty Hospital",
    rating: 4.8,
    reviewCount: 967,
    address: "456 Summit Drive, Denver, CO 80202",
    phone: "(303) 555-0456",
    website: "https://mountainviewortho.com",
    email: "ortho@mountainviewortho.com",
    image: "https://images.pexels.com/photos/1692693/pexels-photo-1692693.jpeg?auto=compress&cs=tinysrgb&w=500",
    specialties: ["Orthopedics", "Sports Medicine", "Physical Therapy", "Pain Management"],
    isOpen24h: false,
    bedCount: 120,
    isVerified: true,
    doctors: 42,
    emergencyServices: false,
    established: 2005,
    accreditation: "Orthopedic Excellence Award",
    description: "Mountain View Orthopedic Hospital specializes in comprehensive bone, joint, and muscle care. Our expert orthopedic surgeons and sports medicine specialists provide world-class treatment for all musculoskeletal conditions.",
    services: [
      {
        category: "Joint Surgery",
        items: [
          { name: "Total Knee Replacement", price: "$45,000", description: "Complete knee joint replacement" },
          { name: "Hip Replacement", price: "$48,000", description: "Total hip joint replacement" },
          { name: "Shoulder Surgery", price: "$32,000", description: "Shoulder joint procedures" },
          { name: "Ankle Surgery", price: "$25,000", description: "Ankle reconstruction surgery" }
        ]
      },
      {
        category: "Sports Medicine",
        items: [
          { name: "ACL Reconstruction", price: "$22,000", description: "Anterior cruciate ligament repair" },
          { name: "Meniscus Repair", price: "$15,000", description: "Knee cartilage surgery" },
          { name: "Rotator Cuff Repair", price: "$18,000", description: "Shoulder tendon repair" },
          { name: "Sports Injury Assessment", price: "$320", description: "Athletic injury evaluation" }
        ]
      },
      {
        category: "Pain Management",
        items: [
          { name: "Epidural Injection", price: "$1,200", description: "Spinal pain relief injection" },
          { name: "Joint Injection", price: "$450", description: "Therapeutic joint injection" },
          { name: "Pain Management Consultation", price: "$350", description: "Chronic pain evaluation" },
          { name: "Physical Therapy Session", price: "$140", description: "Rehabilitation therapy" }
        ]
      }
    ],
    facilities: [
      "Orthopedic Operating Rooms",
      "Sports Medicine Clinic",
      "Physical Therapy Center",
      "Pain Management Center",
      "Imaging Center",
      "Recovery Suites",
      "Rehabilitation Pool"
    ],
    insurance: [
      "Blue Cross Blue Shield",
      "Aetna",
      "Cigna",
      "UnitedHealthcare",
      "Medicare",
      "Kaiser Permanente Colorado"
    ]
  }
];

export const mockMedicalStores = [
  {
    id: 1,
    name: "HealthPlus Pharmacy",
    type: "Chain Pharmacy",
    rating: 4.6,
    reviewCount: 324,
    address: "456 Market St, San Francisco, CA 94102",
    phone: "(415) 555-0456",
    website: "https://healthplus.com",
    email: "info@healthplus.com",
    image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=500",
    services: ["Prescription Filling", "Vaccinations", "Health Screenings", "Medical Supplies"],
    isOpen24h: true,
    isVerified: true,
    established: 1995,
    description: "HealthPlus Pharmacy is your trusted neighborhood pharmacy providing comprehensive pharmaceutical services and health products with expert consultation.",
    products: [
      {
        category: "Prescription Medications",
        items: [
          { name: "Generic Medications", price: "$15-50", description: "Cost-effective generic prescriptions" },
          { name: "Brand Name Medications", price: "$25-150", description: "Original brand medications" },
          { name: "Specialty Medications", price: "$100-500", description: "Specialized treatment medications" }
        ]
      },
      {
        category: "Over-the-Counter",
        items: [
          { name: "Pain Relief", price: "$8-25", description: "Aspirin, ibuprofen, acetaminophen" },
          { name: "Cold & Flu", price: "$12-30", description: "Cough drops, decongestants, fever reducers" },
          { name: "Vitamins & Supplements", price: "$15-60", description: "Daily vitamins and health supplements" }
        ]
      },
      {
        category: "Medical Supplies",
        items: [
          { name: "Blood Pressure Monitor", price: "$45-120", description: "Digital BP monitoring devices" },
          { name: "Diabetic Supplies", price: "$25-80", description: "Glucose meters, test strips, lancets" },
          { name: "First Aid Kits", price: "$20-50", description: "Complete first aid supplies" }
        ]
      }
    ],
    facilities: [
      "Drive-Through Service",
      "Consultation Room",
      "Vaccination Station",
      "Medical Equipment Rental",
      "Insurance Processing",
      "Free Delivery Service"
    ],
    insurance: [
      "Blue Cross Blue Shield",
      "Aetna",
      "Cigna",
      "UnitedHealthcare",
      "Medicare",
      "Medicaid"
    ]
  },
  {
    id: 2,
    name: "MediCare Plus",
    type: "Independent Pharmacy",
    rating: 4.8,
    reviewCount: 189,
    address: "789 Health Ave, Los Angeles, CA 90210",
    phone: "(323) 555-0789",
    website: "https://medicareplus.com",
    email: "contact@medicareplus.com",
    image: "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=500",
    services: ["Prescription Filling", "Compounding", "Health Consultations", "Medical Equipment"],
    isOpen24h: false,
    isVerified: true,
    established: 2008,
    description: "MediCare Plus is a family-owned pharmacy specializing in personalized pharmaceutical care and custom medication compounding with a focus on patient wellness.",
    products: [
      {
        category: "Compounded Medications",
        items: [
          { name: "Custom Formulations", price: "$50-200", description: "Personalized medication preparations" },
          { name: "Pediatric Compounds", price: "$40-120", description: "Child-friendly medication forms" },
          { name: "Veterinary Compounds", price: "$30-100", description: "Pet medication preparations" }
        ]
      },
      {
        category: "Health & Wellness",
        items: [
          { name: "Nutritional Counseling", price: "$75", description: "Professional nutrition guidance" },
          { name: "Medication Therapy Management", price: "$100", description: "Comprehensive medication review" },
          { name: "Health Screenings", price: "$25-50", description: "Blood pressure, cholesterol checks" }
        ]
      },
      {
        category: "Medical Equipment",
        items: [
          { name: "Mobility Aids", price: "$50-300", description: "Wheelchairs, walkers, canes" },
          { name: "CPAP Supplies", price: "$100-400", description: "Sleep apnea equipment" },
          { name: "Compression Garments", price: "$40-150", description: "Medical compression wear" }
        ]
      }
    ],
    facilities: [
      "Compounding Laboratory",
      "Private Consultation Room",
      "Medical Equipment Fitting",
      "Insurance Verification",
      "Home Delivery",
      "Medication Synchronization"
    ],
    insurance: [
      "Blue Cross Blue Shield",
      "Aetna",
      "Cigna",
      "UnitedHealthcare",
      "Medicare",
      "Medicaid",
      "Kaiser Permanente"
    ]
  },
  {
    id: 3,
    name: "QuickCare Pharmacy",
    type: "Express Pharmacy",
    rating: 4.4,
    reviewCount: 567,
    address: "234 Express Blvd, Seattle, WA 98101",
    phone: "(206) 555-0234",
    website: "https://quickcarepharmacy.com",
    email: "service@quickcarepharmacy.com",
    image: "https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=500",
    services: ["Fast Prescription Filling", "Online Ordering", "Mobile App", "Curbside Pickup"],
    isOpen24h: false,
    isVerified: true,
    established: 2015,
    description: "QuickCare Pharmacy focuses on convenience and speed, offering digital prescription management and rapid fulfillment services for busy professionals and families.",
    products: [
      {
        category: "Express Services",
        items: [
          { name: "15-Minute Prescription Fill", price: "$5 fee", description: "Rapid prescription processing" },
          { name: "Online Prescription Refill", price: "Free", description: "Digital refill requests" },
          { name: "Curbside Pickup", price: "Free", description: "Contactless medication pickup" }
        ]
      },
      {
        category: "Health Products",
        items: [
          { name: "COVID-19 Test Kits", price: "$15-25", description: "At-home testing kits" },
          { name: "Personal Care Items", price: "$5-40", description: "Health and hygiene products" },
          { name: "Baby Care Products", price: "$10-35", description: "Infant health and care items" }
        ]
      },
      {
        category: "Digital Services",
        items: [
          { name: "Medication Reminders", price: "Free", description: "SMS and app notifications" },
          { name: "Drug Interaction Checker", price: "Free", description: "Safety verification service" },
          { name: "Prescription History", price: "Free", description: "Digital medication records" }
        ]
      }
    ],
    facilities: [
      "Express Pickup Window",
      "Mobile App Integration",
      "Online Ordering System",
      "Automated Dispensing",
      "Digital Consultation",
      "Prescription Delivery"
    ],
    insurance: [
      "Blue Cross Blue Shield",
      "Aetna",
      "Cigna",
      "UnitedHealthcare",
      "Medicare",
      "Medicaid",
      "Express Scripts"
    ]
  }
];

export const mockServices = [
  {
    id: 1,
    name: "Home Healthcare Services",
    type: "Healthcare Service",
    rating: 4.7,
    reviewCount: 234,
    address: "Service Area: San Francisco Bay Area",
    phone: "(415) 555-0987",
    website: "https://homehealthcare.com",
    email: "care@homehealthcare.com",
    image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=500",
    specialties: ["Nursing Care", "Physical Therapy", "Medical Equipment", "Elderly Care"],
    isOpen24h: true,
    isVerified: true,
    established: 2010,
    description: "Professional home healthcare services bringing quality medical care directly to your home with certified nurses and therapists.",
    serviceOfferings: [
      {
        category: "Nursing Services",
        items: [
          { name: "Skilled Nursing Visit", price: "$120/visit", description: "Professional nursing care at home" },
          { name: "Medication Management", price: "$80/visit", description: "Medication administration and monitoring" },
          { name: "Wound Care", price: "$100/visit", description: "Professional wound treatment" }
        ]
      },
      {
        category: "Therapy Services",
        items: [
          { name: "Physical Therapy", price: "$150/session", description: "In-home physical rehabilitation" },
          { name: "Occupational Therapy", price: "$140/session", description: "Daily living skills therapy" },
          { name: "Speech Therapy", price: "$130/session", description: "Communication and swallowing therapy" }
        ]
      },
      {
        category: "Support Services",
        items: [
          { name: "Personal Care Assistant", price: "$25/hour", description: "Daily living assistance" },
          { name: "Companion Care", price: "$20/hour", description: "Social support and companionship" },
          { name: "Medical Equipment Rental", price: "$50-200/month", description: "Hospital beds, wheelchairs, oxygen" }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Mobile Diagnostic Services",
    type: "Diagnostic Service",
    rating: 4.5,
    reviewCount: 156,
    address: "Service Area: Greater Los Angeles",
    phone: "(323) 555-0654",
    website: "https://mobilediagnostics.com",
    email: "book@mobilediagnostics.com",
    image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=500",
    specialties: ["Mobile X-Ray", "Ultrasound", "EKG", "Blood Draw"],
    isOpen24h: false,
    isVerified: true,
    established: 2018,
    description: "Bringing diagnostic services directly to your location with state-of-the-art mobile equipment and certified technicians.",
    serviceOfferings: [
      {
        category: "Imaging Services",
        items: [
          { name: "Mobile X-Ray", price: "$200", description: "Portable X-ray imaging at your location" },
          { name: "Mobile Ultrasound", price: "$350", description: "Ultrasound imaging services" },
          { name: "Mobile EKG", price: "$150", description: "Heart rhythm monitoring" }
        ]
      },
      {
        category: "Laboratory Services",
        items: [
          { name: "Blood Draw", price: "$50", description: "Professional blood collection" },
          { name: "Urine Collection", price: "$25", description: "Sample collection service" },
          { name: "Rapid Testing", price: "$75", description: "Quick diagnostic tests" }
        ]
      }
    ]
  }
];