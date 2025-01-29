import {
    IconBriefcase,
    IconMapPin,
    IconPremiumRights,
    IconRecharging,
    IconSearch,
} from "@tabler/icons-react";

const companies = [
    "Amazon",
    "Google",
    "Figma",
    "Meta",
    "Microsoft",
    "Netflix",
    "Oracle",
    "Pinterest",
    "Spotify",
    "Walmart",
    "Slack",
];
export const jobCategory = [
    {
        name: "Arts Design",
        img: "ArtsDesign",
        desc: "Create visual content for branding and media",
        jobs: "1k",
    },
    {
        name: "Content Writing",
        img: "Content Writing",
        desc: "Write and edit content for various platforms",
        jobs: "600",
    },
    {
        name: "Customer Support",
        img: "Customer Support",
        desc: "Assist customers with inquiries and issues",
        jobs: "800",
    },
    {
        name: "Data Entry",
        img: "Data Entry",
        desc: "Input data into systems accurately and efficiently",
        jobs: "4k",
    },
    {
        name: "Digital Marketing",
        img: "DigitalMarketing",
        desc: "Promote brands online with marketing strategies",
        jobs: "1.5k",
    },
    {
        name: "Finance",
        img: "Finance",
        desc: "Manage financial records and transactions",
        jobs: "3k",
    },
    {
        name: "Human Resource",
        img: "HumanResource",
        desc: "Recruit, manage, and support company employees",
        jobs: "700",
    },
    {
        name: "Sales",
        img: "Sales",
        desc: "Sell products and services to customers",
        jobs: "1.2k",
    },
    {
        name: "UI-UX Designer",
        img: "UI-UX Designer",
        desc: "Design user interfaces and enhance user experience",
        jobs: "2.6k",
    },
    {
        name: "Web Developer",
        img: "WebDeveloper",
        desc: "Build and maintain scalable websites for clients",
        jobs: "6k",
    },
];
export const work = [
    {
        name: "Build Your Resume",
        desc: "Create a standout resume with your skills.",
        img: "resume.avif",
    },
    {
        name: "Apply for Job",
        desc: "Find and apply for jobs that match your skills.",
        img: "Applay.avif",
    },
    {
        name: "Get Hired",
        desc: "Connect with employers and start your new job.",
        img: "gethired.avif",
    },
];

export const userAboutUs = [
    {
        name: "Arjun Pullari",
        desc: "This job portal made job search easy and quick. Recommended to all job seekers!",
        rating: 5,
        avatar: "Avatar1.png",
    },
    {
        name: "Gayathri Tadi",
        desc: "I secured a job offer within days of applying. Exceptional user experience and support.",
        rating: 5,
        avatar: "Avatar2.png",
    },
    {
        name: "Dhanush Nammi",
        desc: "Found my dream job within a week! The application process was smooth.",
        rating: 4.5,
        avatar: "Avatar1.png",
    },
    {
        name: "Kowshik Donga",
        desc: "Highly efficient job portal with excellent resources. Helped me land a great position.",
        rating: 4.5,
        avatar: "Avatar1.png",
    },
];

export const footerLinks = [
    { title: "Product", links: ["Find Job", "Find Company", "Find Employee"] },
    {
        title: "Company",
        links: [
            "About Us",
            "Contact Us",
            "Privacy Policy",
            "Terms & Conditions",
        ],
    },
    { title: "Support", links: ["Help & Support", "Feedback", "FAQs"] },
];

export const SearchbarDataForFindJobs = [
    {
        title: "Job Title",
        icon: <IconSearch />,
        options: [
            "Designer",
            "Developer",
            "Product Manager",
            "Marketing Specialist",
            "Data Analyst",
            "Sales Executive",
            "Content Writer",
            "Customer Support",
        ],
    },

    {
        title: "Location",
        icon: <IconMapPin />,
        options: [
            "Delhi",
            "Mumbai",
            "Benguluru",
            "Hydarabad",
            "Chennai",
            "Gurugram",
            "Pune",
            "Kolkata",
        ],
    },

    {
        title: "Experience",
        icon: <IconBriefcase />,
        options: ["Entry Level", "Intermediate", "Expert"],
    },
    {
        title: "Job Type",
        icon: <IconRecharging />,
        options: [
            "Full Time",
            "Part Time",
            "Contract",
            "Freelance",
            "Internship",
        ],
    },
];

export const RichTextContent =
    "<h4>About The Job</h4><p>Write description here...</p><h4>Responsibilities</h4><ul><li>Add responsibilities here </li></ul><h4>Qualifications and Skill Sets</h4><ul><li>Add required qualification and skill set here...</li></ul>";

export const SearchbarDataForFindTalents = [
    {
        title: "Job Title",
        icon: <IconSearch />,
        options: [
            "Designer",
            "Developer",
            "Product Manager",
            "Marketing Specialist",
            "Data Analyst",
            "Sales Executive",
            "Content Writer",
            "Customer Support",
        ],
    },

    {
        title: "Location",
        icon: <IconMapPin />,
        options: [
            "Delhi",
            "New York",
            "San Francisco",
            "London",

            "Berlin",
            "Tokyo",
            "Sydney",
            "Toronto",
        ],
    },

    {
        title: "Skills",
        icon: <IconRecharging />,
        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Angular",
            "Node.js",
            "Python",
            "Java",
            "Ruby",
            "PHP",
            "SQL",
            "MongoDB",
            "PostgreSQL",
            "Git",
            "API Development",
            "Testing and Debugging",
            "Agile Methodologies",
            "DevOps",
            "AWS",
            "Azure",
            "Google Cloud",
        ],
    },
];

export const JobDescriptionData = [
    {
        name: "Location",
        icon: <IconMapPin className="h-4/5 w-4/5" stroke={1.5} />,
        value: "New York",
        id:"location",
    },

    {
        name: "Experience",
        icon: <IconBriefcase className="h-4/5 w-4/5" stroke={1.5} />,
        value: "Expert",
        id:"experience"
    },

    {
        name: "Salary",
        icon: <IconPremiumRights className="h-4/5 w-4/5" stroke={1.5} />,
        value: "48 LPA",
        id:"packageOffered"
    },

    {
        name: "Job Type",
        icon: <IconRecharging className="h-4/5 w-4/5" stroke={1.5} />,
        value: "Full Time",
        id:"jobType"
    },
];

export const AboutCompanyData = {
    Name: "Google",

    Overview:
        "Google is a global leader in technology, specializing in internet-related services and products. Our mission is to organize the world's information and make it universally accessible and useful. Founded by Larry Page and Sergey Brin, Google has grown into one of the most influential companies in the world, providing innovative tools and services that help billions of people across the globe.",

    Industry: "Internet, Software & Technology Services",

    Website: "https://www.google.com",

    Size: "100,000+ Employees",

    Headquarters: "Mountain View, California, United States",

    Specialties: [
        "Search Engine",

        "Online Advertising",

        "Cloud Computing",

        "Software",

        "Hardware",

        "AI & Machine Learning",

        "Mobile Operating Systems",

        "Consumer Electronics",
    ],
};

export const JobDescriptionSkillsData = [
    "React",
    "SpringBoot",
    "Hibernate",
    "MYSQL",
    "PostegureSQL",
    "Python",
    "Django",
    "Spring",
    "Express",
    "Springboot",
    "PostegureSQL",
    "Python",
    "Django",
    "Spring",
    "Express",
    "Springboot",
];

export const JobDescriptionPageDesc =
    "<h4>About The Job</h4><p>Write description here...</p><h4>Responsibilities</h4><ul><li>Add responsibilities here </li></ul><h4>Qualifications and Skill Sets</h4><ul><li>Add required qualification and skill set here...</li></ul>";

export default companies;
