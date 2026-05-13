export interface CourseModule {
  title: string;
  desc: string;
}

export interface CourseData {
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  modules: CourseModule[];
  whatYouWillLearn: string[];
  whoIsThisFor: string[];
  bonus: string[];
  liveClassInfo: string;
  placementGuidance: string[];
  mentor: {
    name: string;
    role: string;
    bio: string[];
    image: string;
    whyLearnFromMe: string[];
  };
  image: string;
  startingDate?: string;
  type?: 'recorded' | 'hybrid' | 'live';
  paymentUrl?: string;
}

export const coursesData: Record<string, CourseData> = {
  python: {
    title: "Python Mastery: Zero to DSA in Benglish!",
    subtitle: "Master Python from basics to advanced AI & Machine Learning libraries.",
    description: "Welcome to the Ultimate Python Live Course — entirely in Benglish! Whether you are from Arts, Commerce, or Science, this course is designed to take you from \"Dada, kichu bujhi na\" to \"Bro, code ta patha, debug kore dichhi!\"",
    duration: "11 Weeks (2.5 Months)",
    price: "₹1,200",
    originalPrice: "₹1,800",
    discount: "33% OFF",
    type: 'live',
    liveClassInfo: "Saturday and Sunday both, 8 PM to 9 PM.",
    startingDate: "Batch 2 is starting from May 16",
    paymentUrl: "https://pages.razorpay.com/python-online-course",
    modules: [
      { title: "Python Setup & Logic Building", desc: "Weeks 1-3: Variables, Operators, Logic Building (If/Else, Loops). Base strong toh shob strong!" },
      { title: "Data Structures & Mastering Tools", desc: "Weeks 4-6: Functions, Strings, Lists, Tuples, Sets & Dictionaries." },
      { title: "Object Oriented Programming", desc: "Week 7: File Handling & OOPs (The pro stuff)." },
      { title: "Interview Crackers: DSA", desc: "Weeks 8-10: Stack, Queue, Linked List." },
      { title: "Final Project & Roadmap", desc: "Week 11: Building real stuff and planning ahead." }
    ],
    whatYouWillLearn: [
      "100% Bangla Explanation: Complex logic explained in the language you think in.",
      "Full LIVE Interaction: 2 Classes per week. Ask doubts instantly.",
      "Zero to Hero Roadmap: From print('Hello World') to algorithms.",
      "Placement Ready: Master skills for TCS, Wipro, Cognizant, etc.",
      "Hands-on Projects: Build real applications."
    ],
    whoIsThisFor: [
      "College students (B.Tech, BCA, BSc, B.Com)",
      "Anyone starting their coding journey",
      "Students preparing for placements/internships"
    ],
    bonus: [
      "Access to private student WhatsApp group",
      "Lifetime access to video lectures",
      "Doubt support",
      "Notes updates",
      "Project guidance"
    ],
    placementGuidance: [
      "Resume guidance",
      "Project ideas & help",
      "Career roadmap",
      "Placement preparation tips",
      "GitHub profile help"
    ],
    mentor: {
      name: "H. Goswami",
      role: "Educator & Software Engineer | CEP on AI ML IIT Delhi",
      bio: [
        "Experienced software development professional",
        "Simplifying complex topics like pointers and data structures",
        "Empowering students to gain confidence and ace interviews"
      ],
      image: "/ceo-raw.jpg",
      whyLearnFromMe: [
        "Practical over theoretical approach",
        "Real-life examples for every concept",
        "Friend-like teaching style, not a textbook",
        "Ei course e Python tomar favourite subject hoye jabe"
      ]
    },
    image: "/hero_bengali.png"
  },
  java: {
    title: "Java Programming Course in Benglish",
    subtitle: "Learn Java from Zero to Hero — in Simple Benglish!",
    description: "Are you a college or school student struggling with Java? Confused in classes? Want to understand Java easily and practically? This is a fully structured, beginner-friendly Java course in Benglish, designed specially for college students of West Bengal.",
    duration: "2 Months",
    startingDate: "Currently, Batch 2 is running",
    price: "₹499",
    originalPrice: "₹699",
    discount: "16% OFF",
    type: 'recorded',
    liveClassInfo: "Sunday 7 PM to 8 PM.",
    paymentUrl: "https://pages.razorpay.com/java-online-course",
    modules: [
      { title: "Java Foundations", desc: "Introduction to Java, Objects, Classes, and OOP concepts." },
      { title: "Logic & Control", desc: "Data Types, Operators, Conditional Logic, and Loops." },
      { title: "Advanced Functions", desc: "User-defined functions, Number Theory, Arrays, and Strings." },
      { title: "DSA Fundamentals", desc: "Sorting, Searching, Stack, Queue, and Linked Lists." },
      { title: "Enterprise Concepts", desc: "Inheritance, Exception Handling, Interfaces, and Collection Framework." }
    ],
    whatYouWillLearn: [
      "High Quality Video Lectures covering entire Java fundamentals",
      "Handwritten Notes + Practice Materials",
      "Completion Certificate after an online exam",
      "Lifetime access to all videos and future updates"
    ],
    whoIsThisFor: [
      "BTech / BCA / MCA students",
      "Diploma Computer Science students",
      "College students preparing for placement",
      "Students struggling to understand classroom Java"
    ],
    bonus: [
      "Access to private student WhatsApp group",
      "Lifetime access to video lectures",
      "Doubt support",
      "Notes updates",
      "Project guidance"
    ],
    placementGuidance: [
      "Resume guidance",
      "Project ideas & help",
      "Career roadmap",
      "Placement preparation tips",
      "GitHub profile help"
    ],
    mentor: {
      name: "H. Goswami",
      role: "Educator & Software Engineer | CEP on AI ML IIT Delhi",
      bio: [
        "Experienced software development professional",
        "Simplifying complex topics for beginners",
        "Empowering students to ace technical interviews"
      ],
      image: "/ceo-raw.jpg",
      whyLearnFromMe: [
        "Practical and real-life examples",
        "Student-verified easy teaching style",
        "Learning from a friend, not a textbook",
        "Ei course e Java tomar favourite subject hoye jabe"
      ]
    },
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200"
  },
  'c-programming': {
    title: "C Programming Course in Benglish",
    subtitle: "Master C Programming in your mother tongue – Benglish!",
    description: "Ei course ta tomader jonyo! This is a fully structured, beginner-friendly C Programming course in Benglish, designed specially for college students of West Bengal. It combines weekend online classes with pre-recorded video lectures.",
    duration: "2 Months",
    price: "₹499",
    originalPrice: "₹699",
    discount: "16% OFF",
    type: 'hybrid',
    liveClassInfo: "Online live class at every Saturday 7 PM to 8 PM.",
    startingDate: "Currently, Batch 5 is running",
    paymentUrl: "https://pages.razorpay.com/c-programming-course-in-bangla",
    modules: [
      { title: "C Basics & Logic", desc: "Variables, operators, data types, and if/else conditions." },
      { title: "Loops & Arrays", desc: "while, do-while, for loops, and hands-on coding with Arrays & Strings." },
      { title: "Algorithms & Logic", desc: "Searching, Sorting, and Logic-building practice problems." },
      { title: "Core Mastery", desc: "Pointers, Structures, Recursion, and memory management." },
      { title: "Data Structures", desc: "Stack, Queue, Linked Lists, Dynamic Arrays, and File Handling." }
    ],
    whatYouWillLearn: [
      "Pre-recorded video lectures (25 Hours+) – learn at your own pace",
      "Bengali explanations + simple English keywords",
      "Solving Placement exam coding questions",
      "Handwritten Notes + Practice Materials",
      "Completion Certificate after online exam"
    ],
    whoIsThisFor: [
      "BTech / BCA / MCA students",
      "Diploma Computer Science students",
      "Anyone who wants to learn C from scratch in Benglish",
      "Students struggling to understand classroom C programming"
    ],
    bonus: [
      "Access to private student WhatsApp group",
      "Lifetime access to video lectures",
      "Doubt support",
      "Notes updates",
      "Project guidance"
    ],
    placementGuidance: [
      "Resume guidance",
      "Project ideas & help",
      "Career roadmap",
      "Placement preparation tips",
      "GitHub profile help"
    ],
    mentor: {
      name: "H. Goswami",
      role: "Educator & Software Engineer",
      bio: [
        "Experienced software development professional",
        "Specializes in simplifying pointers and data structures",
        "Empowering students to gain confidence"
      ],
      image: "/ceo-raw.jpg",
      whyLearnFromMe: [
        "Practical, example-led teaching",
        "Easy to understand explanations",
        "Friend-like teaching atmosphere",
        "Ei course e C tomar favourite subject hoye jabe"
      ]
    },
    image: "/c_course.png"
  }
};
