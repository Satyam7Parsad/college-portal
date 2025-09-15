// Enhanced Dashboard functionality with full navigation system
document.addEventListener('DOMContentLoaded', function() {
    initializeDashboard();
    setupNavigationListeners();
    setupActivityChart();
    addCardAnimations();
    initializeCoursesData();
    initializeProjectsData();
    initializeQuestionsData();
    initializeEventsData();
});

// Course structure data
const courseData = {
    bca: {
        name: 'BCA',
        duration: 3,
        subjects: {
            1: {
                1: ['Programming in C', 'Mathematics-I', 'Digital Electronics', 'English Communication'],
                2: ['Programming in C++', 'Mathematics-II', 'Data Structures', 'Environmental Studies']
            },
            2: {
                1: ['Java Programming', 'Database Management', 'Computer Networks', 'Software Engineering'],
                2: ['Web Development', 'Operating Systems', 'System Analysis', 'Mobile App Development']
            },
            3: {
                1: ['Advanced Java', 'Computer Graphics', 'Artificial Intelligence', 'Project Management'],
                2: ['Machine Learning', 'Cloud Computing', 'Cyber Security', 'Final Project']
            }
        },
        units: {
            'Programming in C': ['Introduction to C', 'Variables and Data Types', 'Control Structures', 'Functions', 'Arrays and Pointers'],
            'Mathematics-I': ['Calculus', 'Linear Algebra', 'Probability', 'Statistics', 'Discrete Mathematics'],
            'Digital Electronics': ['Number Systems', 'Boolean Algebra', 'Logic Gates', 'Combinational Circuits', 'Sequential Circuits'],
            'Java Programming': ['OOP Concepts', 'Inheritance', 'Polymorphism', 'Exception Handling', 'Collections Framework']
        }
    },
    mca: {
        name: 'MCA',
        duration: 2,
        subjects: {
            1: {
                1: ['Advanced Programming', 'Database Systems', 'Computer Architecture', 'Software Project Management'],
                2: ['Data Mining', 'Network Security', 'Distributed Systems', 'Research Methodology']
            },
            2: {
                1: ['Machine Learning', 'Big Data Analytics', 'Cloud Architecture', 'Advanced Algorithms'],
                2: ['Blockchain Technology', 'IoT Systems', 'Capstone Project', 'Industry Internship']
            }
        },
        units: {
            'Advanced Programming': ['Design Patterns', 'Multithreading', 'Web Services', 'Framework Development', 'Code Optimization'],
            'Database Systems': ['Advanced SQL', 'NoSQL Databases', 'Data Warehousing', 'Database Tuning', 'Distributed Databases']
        }
    },
    bba: {
        name: 'BBA',
        duration: 3,
        subjects: {
            1: {
                1: ['Business Communication', 'Accounting Principles', 'Business Mathematics', 'Organizational Behavior'],
                2: ['Marketing Management', 'Financial Management', 'Human Resource Management', 'Business Law']
            },
            2: {
                1: ['Operations Management', 'Strategic Management', 'International Business', 'Business Analytics'],
                2: ['Digital Marketing', 'Project Management', 'Entrepreneurship', 'Supply Chain Management']
            },
            3: {
                1: ['Corporate Strategy', 'Investment Analysis', 'Leadership Skills', 'Business Ethics'],
                2: ['Consulting Projects', 'Industry Analysis', 'Capstone Project', 'Internship Program']
            }
        },
        units: {
            'Business Communication': ['Written Communication', 'Oral Presentation', 'Business Writing', 'Cross-cultural Communication', 'Digital Communication'],
            'Marketing Management': ['Market Research', 'Consumer Behavior', 'Brand Management', 'Digital Marketing', 'Sales Management']
        }
    },
    mba: {
        name: 'MBA',
        duration: 2,
        subjects: {
            1: {
                1: ['Strategic Management', 'Financial Analysis', 'Operations Research', 'Leadership Development'],
                2: ['Global Business', 'Innovation Management', 'Data Analytics', 'Corporate Governance']
            },
            2: {
                1: ['Advanced Strategy', 'Mergers & Acquisitions', 'Risk Management', 'Consulting Practice'],
                2: ['Executive Leadership', 'Business Transformation', 'Thesis Project', 'Industry Immersion']
            }
        },
        units: {
            'Strategic Management': ['Strategic Planning', 'Competitive Analysis', 'Market Positioning', 'Growth Strategies', 'Change Management'],
            'Financial Analysis': ['Financial Modeling', 'Valuation Methods', 'Risk Assessment', 'Investment Strategy', 'Portfolio Management']
        }
    }
};

// Projects data by course
const projectsData = {
    bca: [
        {
            title: 'E-Commerce Website',
            description: 'Build a comprehensive full-stack e-commerce platform featuring advanced user authentication with role-based access control, dynamic product catalog with search and filtering capabilities, real-time shopping cart functionality, secure payment gateway integration (PayPal, Stripe), order tracking system, inventory management, admin dashboard for product management, email notifications, responsive design for mobile and desktop, and detailed analytics reporting. Technologies: HTML5, CSS3, JavaScript ES6+, PHP 8, MySQL 8.0, Bootstrap 5.',
            tags: ['Web Development', 'PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
            difficulty: 'medium'
        },
        {
            title: 'Student Management System',
            description: 'Develop an enterprise-level student information system with multi-user authentication (Admin, Teacher, Student), comprehensive student profile management, academic record tracking, grade calculation with GPA/CGPA computation, attendance monitoring with biometric integration, course scheduling and timetable management, fee collection and financial reporting, parent-student communication portal, automated report card generation, SMS/Email notification system, and advanced search and filtering capabilities. Built using Java Swing/JavaFX, MySQL database, JDBC connectivity, and JasperReports for documentation.',
            tags: ['Java', 'MySQL', 'JavaFX', 'JDBC', 'JasperReports'],
            difficulty: 'medium'
        },
        {
            title: 'Library Management System',
            description: 'Create a sophisticated digital library management platform with comprehensive book cataloging system using ISBN scanning, member registration with photo ID cards, automated book lending and return workflow, intelligent fine calculation with penalty management, reservation system for popular books, digital catalog search with advanced filters, librarian dashboard with real-time statistics, inventory tracking with low-stock alerts, overdue book notifications via SMS/Email, and comprehensive reporting with charts and analytics. Built using Python 3.9, Tkinter for GUI, SQLite database, PIL for image processing, and matplotlib for data visualization.',
            tags: ['Python', 'Tkinter', 'SQLite', 'PIL', 'Data Visualization'],
            difficulty: 'easy'
        },
        {
            title: 'Online Banking System',
            description: 'Develop a highly secure, enterprise-grade online banking platform with multi-factor authentication (OTP, biometric, security questions), role-based access control (Customer, Manager, Admin), comprehensive account management with multiple account types (Savings, Current, Fixed Deposit), real-time fund transfers with NEFT/RTGS integration, detailed transaction history with advanced search and filtering, loan management system, credit/debit card management, automated statement generation, fraud detection algorithms, session timeout security, encryption for sensitive data, audit trails for all transactions, and compliance with banking regulations. Technologies: Java 17, Spring Boot 3, Spring Security, PostgreSQL, Redis for caching, JWT tokens, and advanced cryptographic libraries.',
            tags: ['Java', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'Redis'],
            difficulty: 'hard'
        },
        {
            title: 'Social Media Platform',
            description: 'Create a social networking site with user profiles, friend connections, post sharing, commenting, and real-time chat functionality using modern web technologies.',
            tags: ['Node.js', 'React', 'MongoDB', 'Socket.io'],
            difficulty: 'hard'
        },
        {
            title: 'Hospital Management System',
            description: 'Develop a comprehensive system for patient registration, doctor scheduling, appointment booking, medical records, and billing management.',
            tags: ['Healthcare', 'Java', 'MySQL', 'Reporting'],
            difficulty: 'medium'
        },
        {
            title: 'Inventory Management System',
            description: 'Build a system to track products, suppliers, purchase orders, sales, and generate inventory reports with low stock alerts and automated reordering.',
            tags: ['Inventory', 'Python', 'Django', 'PostgreSQL'],
            difficulty: 'medium'
        },
        {
            title: 'Online Quiz Platform',
            description: 'Create an interactive quiz system with question banks, timer functionality, automatic scoring, result analysis, and performance tracking for students and teachers.',
            tags: ['Education', 'JavaScript', 'PHP', 'MySQL'],
            difficulty: 'easy'
        },
        {
            title: 'Weather Monitoring System',
            description: 'Develop a system to collect, analyze, and display weather data with predictions, alerts, and historical data visualization using APIs and data processing.',
            tags: ['API Integration', 'Python', 'Data Analysis', 'Visualization'],
            difficulty: 'medium'
        },
        {
            title: 'Task Management Application',
            description: 'Build a collaborative task management tool with project creation, task assignment, progress tracking, deadlines, and team communication features.',
            tags: ['Project Management', 'React', 'Node.js', 'MongoDB'],
            difficulty: 'easy'
        }
    ],
    mca: [
        {
            title: 'Machine Learning Recommendation System',
            description: 'Develop an advanced recommendation engine using collaborative filtering, content-based filtering, and deep learning techniques for personalized user experiences.',
            tags: ['Machine Learning', 'Python', 'TensorFlow', 'Data Science'],
            difficulty: 'hard'
        },
        {
            title: 'Blockchain-based Voting System',
            description: 'Create a secure, transparent, and tamper-proof electronic voting system using blockchain technology with smart contracts and cryptographic security.',
            tags: ['Blockchain', 'Smart Contracts', 'Cryptography', 'Security'],
            difficulty: 'hard'
        },
        {
            title: 'Cloud-based Microservices Architecture',
            description: 'Design and implement a scalable microservices system with containerization, API gateway, service discovery, and cloud deployment using modern DevOps practices.',
            tags: ['Microservices', 'Docker', 'Kubernetes', 'Cloud Computing'],
            difficulty: 'hard'
        },
        {
            title: 'Real-time Data Analytics Dashboard',
            description: 'Build a comprehensive analytics platform that processes streaming data, performs real-time analysis, and provides interactive visualizations and insights.',
            tags: ['Big Data', 'Apache Kafka', 'Elasticsearch', 'React'],
            difficulty: 'hard'
        },
        {
            title: 'AI-powered Chatbot System',
            description: 'Develop an intelligent conversational AI system using natural language processing, intent recognition, and machine learning for customer service automation.',
            tags: ['NLP', 'AI', 'Python', 'TensorFlow', 'Dialog Systems'],
            difficulty: 'hard'
        },
        {
            title: 'Distributed File Storage System',
            description: 'Create a fault-tolerant, scalable distributed storage system with data replication, consistency management, and efficient retrieval mechanisms.',
            tags: ['Distributed Systems', 'Java', 'Network Programming', 'Algorithms'],
            difficulty: 'hard'
        },
        {
            title: 'Computer Vision Object Detection',
            description: 'Implement an advanced object detection and recognition system using deep learning, capable of real-time video processing and multi-class classification.',
            tags: ['Computer Vision', 'Deep Learning', 'OpenCV', 'PyTorch'],
            difficulty: 'hard'
        },
        {
            title: 'Cybersecurity Threat Detection System',
            description: 'Develop an intelligent security system that monitors network traffic, detects anomalies, identifies potential threats, and provides automated response mechanisms.',
            tags: ['Cybersecurity', 'Network Security', 'Machine Learning', 'Python'],
            difficulty: 'hard'
        },
        {
            title: 'IoT-based Smart City Platform',
            description: 'Create an integrated IoT platform for smart city management with sensor data collection, traffic optimization, environmental monitoring, and citizen services.',
            tags: ['IoT', 'Sensors', 'Data Processing', 'Cloud Integration'],
            difficulty: 'hard'
        },
        {
            title: 'Advanced Database Management System',
            description: 'Build a custom database engine with query optimization, transaction management, concurrency control, and advanced indexing mechanisms for high-performance applications.',
            tags: ['Database Systems', 'Algorithms', 'C++', 'Performance Optimization'],
            difficulty: 'hard'
        }
    ],
    bba: [
        {
            title: 'Business Intelligence Dashboard',
            description: 'Create a comprehensive BI dashboard that analyzes business metrics, generates insights, tracks KPIs, and provides interactive reports for strategic decision-making.',
            tags: ['Business Intelligence', 'Data Analysis', 'Visualization', 'Excel'],
            difficulty: 'medium'
        },
        {
            title: 'Customer Relationship Management System',
            description: 'Develop a CRM platform to manage customer interactions, sales pipeline, lead tracking, and customer service with automation and analytics features.',
            tags: ['CRM', 'Sales Management', 'Customer Service', 'Database'],
            difficulty: 'medium'
        },
        {
            title: 'Supply Chain Management Platform',
            description: 'Build a comprehensive SCM system to optimize procurement, inventory management, vendor relationships, and logistics with real-time tracking.',
            tags: ['Supply Chain', 'Logistics', 'Inventory', 'Optimization'],
            difficulty: 'medium'
        },
        {
            title: 'Digital Marketing Campaign Analyzer',
            description: 'Create a tool to plan, execute, and analyze digital marketing campaigns across multiple channels with ROI tracking and performance metrics.',
            tags: ['Digital Marketing', 'Analytics', 'Social Media', 'ROI Analysis'],
            difficulty: 'easy'
        },
        {
            title: 'Human Resource Management System',
            description: 'Develop an HR platform for employee onboarding, performance management, payroll processing, leave management, and organizational development.',
            tags: ['HR Management', 'Employee Relations', 'Payroll', 'Performance'],
            difficulty: 'medium'
        },
        {
            title: 'Financial Planning and Analysis Tool',
            description: 'Build a comprehensive financial planning system with budgeting, forecasting, financial modeling, and variance analysis for business planning.',
            tags: ['Financial Planning', 'Budgeting', 'Forecasting', 'Excel Modeling'],
            difficulty: 'medium'
        },
        {
            title: 'E-commerce Business Model Analysis',
            description: 'Conduct comprehensive analysis of e-commerce business models, market research, competitive analysis, and develop strategic recommendations.',
            tags: ['Business Analysis', 'Market Research', 'Strategy', 'E-commerce'],
            difficulty: 'easy'
        },
        {
            title: 'Startup Business Plan Development',
            description: 'Create a detailed business plan for a startup including market analysis, financial projections, marketing strategy, and operational planning.',
            tags: ['Business Planning', 'Entrepreneurship', 'Financial Modeling', 'Strategy'],
            difficulty: 'easy'
        },
        {
            title: 'Customer Satisfaction Survey System',
            description: 'Design and implement a customer feedback system with survey creation, data collection, analysis, and actionable insights generation.',
            tags: ['Customer Experience', 'Survey Design', 'Data Analysis', 'Reporting'],
            difficulty: 'easy'
        },
        {
            title: 'Brand Management Strategy Project',
            description: 'Develop a comprehensive brand management strategy including brand positioning, messaging, campaign development, and brand equity measurement.',
            tags: ['Brand Management', 'Marketing Strategy', 'Brand Positioning', 'Campaign'],
            difficulty: 'medium'
        }
    ],
    mba: [
        {
            title: 'Corporate Strategic Transformation Plan',
            description: 'Develop a comprehensive strategic transformation plan for a corporation including market analysis, organizational restructuring, and implementation roadmap.',
            tags: ['Strategic Planning', 'Transformation', 'Change Management', 'Leadership'],
            difficulty: 'hard'
        },
        {
            title: 'Merger & Acquisition Analysis',
            description: 'Conduct thorough M&A analysis including due diligence, valuation modeling, synergy assessment, and integration planning for strategic transactions.',
            tags: ['M&A', 'Valuation', 'Due Diligence', 'Financial Modeling'],
            difficulty: 'hard'
        },
        {
            title: 'Digital Transformation Initiative',
            description: 'Lead a digital transformation project for traditional business including technology adoption, process re-engineering, and organizational change management.',
            tags: ['Digital Transformation', 'Technology Strategy', 'Process Improvement', 'Change'],
            difficulty: 'hard'
        },
        {
            title: 'Private Equity Investment Analysis',
            description: 'Perform comprehensive investment analysis for private equity opportunities including market assessment, financial modeling, and risk evaluation.',
            tags: ['Private Equity', 'Investment Analysis', 'Risk Assessment', 'Financial Modeling'],
            difficulty: 'hard'
        },
        {
            title: 'Global Market Entry Strategy',
            description: 'Develop market entry strategy for international expansion including market research, regulatory analysis, partnership strategies, and implementation planning.',
            tags: ['International Business', 'Market Entry', 'Global Strategy', 'Partnerships'],
            difficulty: 'hard'
        },
        {
            title: 'Corporate Innovation Lab',
            description: 'Establish and manage corporate innovation laboratory focusing on emerging technologies, startup partnerships, and internal innovation processes.',
            tags: ['Innovation Management', 'Corporate Venturing', 'Technology', 'Partnerships'],
            difficulty: 'hard'
        },
        {
            title: 'Executive Leadership Development Program',
            description: 'Design and implement leadership development program for senior executives including competency assessment, coaching, and succession planning.',
            tags: ['Leadership Development', 'Executive Coaching', 'Succession Planning', 'HR'],
            difficulty: 'medium'
        },
        {
            title: 'Crisis Management and Business Continuity',
            description: 'Develop comprehensive crisis management framework and business continuity plans for enterprise risk management and operational resilience.',
            tags: ['Crisis Management', 'Risk Management', 'Business Continuity', 'Strategy'],
            difficulty: 'hard'
        },
        {
            title: 'Sustainable Business Model Innovation',
            description: 'Create sustainable business models integrating ESG principles, circular economy concepts, and stakeholder value creation for long-term success.',
            tags: ['Sustainability', 'ESG', 'Business Model Innovation', 'Stakeholder Value'],
            difficulty: 'medium'
        },
        {
            title: 'Advanced Analytics and AI Strategy',
            description: 'Develop enterprise-wide analytics and AI strategy including technology roadmap, organizational capabilities, and value creation opportunities.',
            tags: ['AI Strategy', 'Analytics', 'Technology Strategy', 'Data Science'],
            difficulty: 'hard'
        }
    ]
};

// Important questions data
const questionsData = {
    bca: {
        1: {
            1: {
                'Programming in C': {
                    'Introduction to C': [
                        { question: 'Explain the history and features of C programming language.', marks: 10 },
                        { question: 'Write a program to demonstrate the use of different data types in C.', marks: 15 },
                        { question: 'What are the advantages of C over other programming languages?', marks: 5 }
                    ],
                    'Variables and Data Types': [
                        { question: 'Explain different data types available in C with examples.', marks: 10 },
                        { question: 'Write a program to demonstrate type conversion in C.', marks: 15 }
                    ]
                }
            }
        }
    }
};

// Events data
const eventsData = {
    exams: [
        {
            title: 'Mid-Semester Examination - BCA',
            description: 'Mid-semester exams for all BCA students',
            date: '2024-10-15',
            time: '10:00 AM',
            venue: 'Main Examination Hall'
        },
        {
            title: 'Final Examination - MCA',
            description: 'Final semester exams for MCA final year',
            date: '2024-11-20',
            time: '9:00 AM',
            venue: 'Computer Lab 1 & 2'
        },
        {
            title: 'Practical Examination - Programming',
            description: 'Practical exams for programming subjects',
            date: '2024-10-25',
            time: '2:00 PM',
            venue: 'Programming Lab'
        }
    ],
    sports: [
        {
            title: 'Annual Sports Meet 2024',
            description: 'Inter-college sports competition',
            date: '2024-12-05',
            time: '8:00 AM',
            venue: 'College Sports Ground'
        },
        {
            title: 'Basketball Championship',
            description: 'Intra-college basketball tournament',
            date: '2024-10-30',
            time: '4:00 PM',
            venue: 'Basketball Court'
        },
        {
            title: 'Cricket Tournament',
            description: 'Inter-departmental cricket matches',
            date: '2024-11-10',
            time: '3:00 PM',
            venue: 'Cricket Ground'
        }
    ],
    notices: [
        {
            title: 'Library Timing Change',
            description: 'New library timings: 8:00 AM to 8:00 PM',
            date: '2024-09-20',
            time: 'All Day',
            venue: 'College Library'
        },
        {
            title: 'Fee Submission Deadline',
            description: 'Last date for semester fee submission',
            date: '2024-10-31',
            time: 'By 5:00 PM',
            venue: 'Accounts Office'
        },
        {
            title: 'Workshop on AI and ML',
            description: 'Two-day workshop on Artificial Intelligence',
            date: '2024-11-15',
            time: '10:00 AM',
            venue: 'Seminar Hall'
        }
    ]
};

// Global variables
let selectedCourse = '';
let selectedYear = 0;
let selectedSemester = 0;
let selectedSubject = '';
let selectedUnit = '';

function initializeDashboard() {
    document.body.classList.add('dashboard-loaded');
    animateNumbers();
    showSection('dashboard');
    setupGlobalSearch();
}

function setupGlobalSearch() {
    const searchInput = document.querySelector('.search-container input');
    const searchBtn = document.querySelector('.search-btn');

    function performSearch() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm.length === 0) return;

        // Get the currently active section
        const activeNavItem = document.querySelector('.nav-item.active');
        const currentSection = activeNavItem.querySelector('span').textContent.toLowerCase();

        switch(currentSection) {
            case 'notes':
                searchInNotes(searchTerm);
                break;
            case 'projects':
                searchInProjects(searchTerm);
                break;
            case 'questions':
                searchInQuestions(searchTerm);
                break;
            case 'events':
                searchInEvents(searchTerm);
                break;
            default:
                // Search across all sections
                searchGlobally(searchTerm);
        }
    }

    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

function searchInNotes(searchTerm) {
    // Search in course data
    const results = [];
    Object.keys(courseData).forEach(courseKey => {
        const course = courseData[courseKey];
        if (course.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            results.push({type: 'course', name: course.name, key: courseKey});
        }

        // Search in subjects
        Object.keys(course.subjects).forEach(year => {
            Object.keys(course.subjects[year]).forEach(semester => {
                course.subjects[year][semester].forEach(subject => {
                    if (subject.toLowerCase().includes(searchTerm.toLowerCase())) {
                        results.push({type: 'subject', name: subject, course: courseKey, year: year, semester: semester});
                    }
                });
            });
        });

        // Search in units
        Object.keys(course.units).forEach(subject => {
            course.units[subject].forEach(unit => {
                if (unit.toLowerCase().includes(searchTerm.toLowerCase())) {
                    results.push({type: 'unit', name: unit, subject: subject, course: courseKey});
                }
            });
        });
    });

    showSearchResults(results, searchTerm, 'notes');
}

function searchInProjects(searchTerm) {
    const activeTab = document.querySelector('.course-tab.active');
    const currentCourse = activeTab ? activeTab.getAttribute('data-course') : 'bca';
    displayProjects(currentCourse, searchTerm);
}

function searchInQuestions(searchTerm) {
    // Filter questions based on search term
    const questionsList = document.getElementById('questions-list');
    questionsList.innerHTML = `<div class="question-card"><div class="question-text">Searching for "${searchTerm}"... Please use the filters above to see specific questions.</div></div>`;
}

function searchInEvents(searchTerm) {
    // Search in events
    const activeTab = document.querySelector('.event-tab.active');
    const currentType = activeTab ? activeTab.getAttribute('data-type') : 'exams';

    const filteredEvents = eventsData[currentType].filter(event =>
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.venue.toLowerCase().includes(searchTerm.toLowerCase())
    );

    displayFilteredEvents(filteredEvents, currentType);
}

function displayFilteredEvents(events, type) {
    const eventsContent = document.getElementById('events-content');
    eventsContent.innerHTML = '';

    events.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';
        eventCard.innerHTML = `
            <div class="event-icon ${type.slice(0, -1)}">
                <i class="fas fa-${getEventIcon(type)}"></i>
            </div>
            <div class="event-details">
                <h4>${event.title}</h4>
                <p>${event.description}</p>
                <div class="event-date">${formatDate(event.date)} at ${event.time}</div>
                <div class="event-date">Venue: ${event.venue}</div>
            </div>
        `;
        eventsContent.appendChild(eventCard);
    });

    if (events.length === 0) {
        eventsContent.innerHTML = '<div class="event-card"><div class="event-details"><h4>No events found</h4><p>No events match your search criteria.</p></div></div>';
    }
}

function showSearchResults(results, searchTerm, section) {
    // For now, just show an alert with results count
    // You could create a dedicated search results page
    if (results.length === 0) {
        alert(`No results found for "${searchTerm}" in ${section}`);
    } else {
        alert(`Found ${results.length} results for "${searchTerm}" in ${section}`);
        console.log('Search results:', results);
    }
}

function searchGlobally(searchTerm) {
    // Search across all sections and show results
    const allResults = {
        notes: [],
        projects: [],
        events: []
    };

    // Search in notes
    searchInNotes(searchTerm);

    alert(`Global search for "${searchTerm}" completed. Check console for details.`);
}

function setupNavigationListeners() {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(navItem => navItem.classList.remove('active'));
            this.classList.add('active');

            const sectionName = this.querySelector('span').textContent.toLowerCase();
            showSection(sectionName);
            addRippleEffect(this);
        });
    });
}

// Global navigation function for onclick handlers
function navigateToSection(sectionName) {
    const navItems = document.querySelectorAll('.nav-item');

    // Remove active class from all nav items
    navItems.forEach(navItem => navItem.classList.remove('active'));

    // Add active class to clicked nav item
    navItems.forEach(navItem => {
        const spanText = navItem.querySelector('span').textContent.toLowerCase();
        if (spanText === sectionName.toLowerCase()) {
            navItem.classList.add('active');
            addRippleEffect(navItem);
        }
    });

    // Show the selected section
    showSection(sectionName);
}

function showSection(sectionName) {
    // Hide all sections
    document.querySelectorAll('.content-section, .main-content').forEach(section => {
        section.style.display = 'none';
    });

    // Show selected section
    if (sectionName === 'dashboard') {
        document.querySelector('.main-content').style.display = 'block';
    } else {
        const targetSection = document.getElementById(`${sectionName}-section`);
        if (targetSection) {
            targetSection.style.display = 'block';

            // Initialize section-specific functionality
            setTimeout(() => {
                if (sectionName === 'notes') {
                    initializeNotesSection();
                    initializeCoursesData(); // Re-initialize course selection
                } else if (sectionName === 'projects') {
                    initializeProjectsSection();
                    initializeProjectsData(); // Re-initialize project tabs
                } else if (sectionName === 'questions') {
                    initializeQuestionsSection();
                    initializeQuestionsData(); // Re-initialize question filters
                } else if (sectionName === 'events') {
                    initializeEventsSection();
                    initializeEventsData(); // Re-initialize event tabs
                }
            }, 50); // Small delay to ensure DOM is ready
        }
    }
}

function initializeCoursesData() {
    // Setup course selection for Notes
    const courseCards = document.querySelectorAll('.course-card');
    courseCards.forEach(card => {
        // Remove existing event listeners by cloning the element
        const newCard = card.cloneNode(true);
        card.parentNode.replaceChild(newCard, card);

        // Add fresh event listener
        newCard.addEventListener('click', function() {
            selectedCourse = this.dataset.course;
            showLinearSelection();
        });
    });
}

// Linear Selection System
function showLinearSelection() {
    // Hide course selection and show linear layout
    document.getElementById('course-selection').style.display = 'none';
    document.getElementById('linear-selection').style.display = 'block';

    // Update breadcrumb
    document.getElementById('breadcrumb-course').textContent = courseData[selectedCourse].name;
    document.getElementById('arrow-semester').style.display = 'inline';
    document.getElementById('breadcrumb-semester').style.display = 'inline';

    // Setup clickable breadcrumbs
    setupBreadcrumbNavigation();

    // Show semester selection in the top area
    showSemesterLevel();
}

function setupBreadcrumbNavigation() {
    const breadcrumbItems = document.querySelectorAll('.breadcrumb-item.clickable');
    breadcrumbItems.forEach(item => {
        item.addEventListener('click', function() {
            const level = this.getAttribute('data-level');
            navigateToLevel(level);
        });
    });
}

function navigateToLevel(level) {
    switch(level) {
        case 'course':
            // Go back to course selection
            initializeNotesSection();
            break;
        case 'semester':
            // Go back to semester selection
            if (selectedCourse) {
                // Hide elements beyond semester
                document.getElementById('arrow-subject').style.display = 'none';
                document.getElementById('breadcrumb-subject').style.display = 'none';
                document.getElementById('arrow-unit').style.display = 'none';
                document.getElementById('breadcrumb-unit').style.display = 'none';
                // Reset selections
                selectedSubject = '';
                selectedUnit = '';
                showSemesterLevel();
            }
            break;
        case 'subject':
            // Go back to subject selection
            if (selectedCourse && selectedYear && selectedSemester) {
                // Hide elements beyond subject
                document.getElementById('arrow-unit').style.display = 'none';
                document.getElementById('breadcrumb-unit').style.display = 'none';
                // Reset unit selection
                selectedUnit = '';
                showSubjectLevel();
            }
            break;
        case 'unit':
            // Go back to subject selection (since unit is now part of subject selection)
            if (selectedCourse && selectedYear && selectedSemester) {
                // Hide unit in breadcrumb
                document.getElementById('arrow-unit').style.display = 'none';
                document.getElementById('breadcrumb-unit').style.display = 'none';
                // Reset unit selection
                selectedUnit = '';
                showSubjectLevel();
            }
            break;
    }
}


function showSemesterLevel() {
    // Hide all other levels
    hideAllLevels();

    const semesterLevel = document.getElementById('semester-level');
    const semesterOptions = document.getElementById('semester-options');

    semesterLevel.style.display = 'block';
    semesterOptions.innerHTML = '';

    // Create semester options for all years combined
    const duration = courseData[selectedCourse].duration;
    for (let year = 1; year <= duration; year++) {
        for (let sem = 1; sem <= 2; sem++) {
            const semesterOption = document.createElement('div');
            semesterOption.className = 'horizontal-option';
            semesterOption.innerHTML = `
                <h4>Year ${year} - Semester ${sem}</h4>
                <p>${getYearDescription(year)} - ${getSemesterDescription(sem)}</p>
            `;
            semesterOption.addEventListener('click', () => {
                selectedYear = year;
                selectedSemester = sem;

                // Update breadcrumb
                document.getElementById('breadcrumb-semester').textContent = `Year ${year} - Semester ${sem}`;
                document.getElementById('arrow-subject').style.display = 'inline';
                document.getElementById('breadcrumb-subject').style.display = 'inline';

                // Show subject selection (semester will disappear)
                showSubjectLevel();
            });
            semesterOptions.appendChild(semesterOption);
        }
    }
}

function hideAllLevels() {
    document.getElementById('semester-level').style.display = 'none';
    document.getElementById('subject-level').style.display = 'none';
    document.getElementById('notes-display').style.display = 'none';
}

function showSubjectLevel() {
    // Hide all other levels
    hideAllLevels();

    const subjectLevel = document.getElementById('subject-level');
    const subjectOptions = document.getElementById('subject-options');

    subjectLevel.style.display = 'block';
    subjectOptions.innerHTML = '';

    const subjects = courseData[selectedCourse].subjects[selectedYear][selectedSemester];
    subjects.forEach(subject => {
        // Create subject card with units
        const subjectCard = document.createElement('div');
        subjectCard.className = 'subject-with-units-card';

        // Get units for this subject
        const units = courseData[selectedCourse].units[subject] || ['Unit 1', 'Unit 2', 'Unit 3', 'Unit 4', 'Unit 5'];

        subjectCard.innerHTML = `
            <div class="subject-name">${subject}</div>
            <div class="units-heading">Units</div>
            <div class="units-row">
                ${units.map((unit, index) => `
                    <div class="unit-number" data-subject="${subject}" data-unit="${unit}" data-unit-number="${index + 1}">
                        ${index + 1}
                    </div>
                `).join('')}
            </div>
        `;

        subjectOptions.appendChild(subjectCard);
    });

    // Add click listeners to unit numbers
    document.querySelectorAll('.unit-number').forEach(unitBtn => {
        unitBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const subject = unitBtn.getAttribute('data-subject');
            const unit = unitBtn.getAttribute('data-unit');
            const unitNumber = unitBtn.getAttribute('data-unit-number');

            selectedSubject = subject;
            selectedUnit = unit;

            // Update breadcrumb
            document.getElementById('breadcrumb-subject').textContent = subject;
            document.getElementById('arrow-unit').style.display = 'inline';
            document.getElementById('breadcrumb-unit').style.display = 'inline';
            document.getElementById('breadcrumb-unit').textContent = `Unit ${unitNumber}`;

            // Show notes directly
            showNotesDisplay();
        });
    });
}


function showNotesDisplay() {
    // Hide all selection levels and show only notes
    hideAllLevels();

    const notesDisplay = document.getElementById('notes-display');
    const notesContent = document.getElementById('notes-content');

    notesDisplay.style.display = 'block';
    notesContent.innerHTML = '';

    // Comprehensive notes for each unit
    const notesCollection = [
        {
            title: `${selectedUnit} - Complete Study Notes`,
            content: `Comprehensive study material covering all key concepts, definitions, and theoretical aspects of ${selectedUnit}. Perfect for examination preparation with detailed explanations and examples.`,
            type: 'PDF',
            size: '2.5 MB',
            pages: '45 pages'
        },
        {
            title: `${selectedUnit} - Practice Questions & Solutions`,
            content: `Extensive collection of practice questions with step-by-step solutions. Includes previous year questions, mock tests, and difficulty-wise categorized problems to enhance your problem-solving skills.`,
            type: 'PDF',
            size: '1.8 MB',
            pages: '30 pages'
        },
        {
            title: `${selectedUnit} - Video Lectures Series`,
            content: `HD video lectures explaining complex concepts with visual demonstrations, real-world examples, and interactive problem-solving sessions. Watch anytime, anywhere.`,
            type: 'Video',
            size: '850 MB',
            duration: '4.5 hours'
        },
        {
            title: `${selectedUnit} - Quick Revision Notes`,
            content: `Concise revision material perfect for last-minute preparation. Contains important formulas, key points, diagrams, and memory tricks for quick recall during exams.`,
            type: 'PDF',
            size: '950 KB',
            pages: '15 pages'
        },
        {
            title: `${selectedUnit} - Assignment & Projects`,
            content: `Practical assignments and project ideas related to ${selectedUnit}. Includes coding examples, case studies, and hands-on exercises to strengthen practical understanding.`,
            type: 'PDF',
            size: '3.2 MB',
            pages: '25 pages'
        },
        {
            title: `${selectedUnit} - Important Questions Bank`,
            content: `Curated collection of most important questions likely to appear in examinations. Organized by difficulty level and marks distribution for strategic preparation.`,
            type: 'PDF',
            size: '1.2 MB',
            pages: '20 pages'
        }
    ];

    notesCollection.forEach(note => {
        const noteCard = document.createElement('div');
        noteCard.className = 'note-card';

        const fileInfo = note.type === 'Video' ?
            `<div style="font-size: 12px; color: #666; margin-bottom: 8px;"><i class="fas fa-video"></i> ${note.size} • ${note.duration}</div>` :
            `<div style="font-size: 12px; color: #666; margin-bottom: 8px;"><i class="fas fa-file-pdf"></i> ${note.size} • ${note.pages}</div>`;

        noteCard.innerHTML = `
            <div class="note-title">${note.title}</div>
            ${fileInfo}
            <div class="note-content">${note.content}</div>
            <div class="note-actions">
                <button class="note-btn btn-download" onclick="downloadFile('${note.title}', '${note.type}')">
                    <i class="fas fa-download"></i> Download ${note.type}
                </button>
                <button class="note-btn btn-view" onclick="viewOnline('${note.title}', '${note.type}')">
                    <i class="fas fa-eye"></i> Read Online
                </button>
            </div>
        `;
        notesContent.appendChild(noteCard);
    });
}

function initializeNotesSection() {
    // Reset to course selection
    document.getElementById('course-selection').style.display = 'block';
    document.getElementById('linear-selection').style.display = 'none';

    // Reset selections
    selectedCourse = '';
    selectedYear = 0;
    selectedSemester = 0;
    selectedSubject = '';
    selectedUnit = '';

    // Hide all breadcrumb elements except course
    document.getElementById('arrow-semester').style.display = 'none';
    document.getElementById('breadcrumb-semester').style.display = 'none';
    document.getElementById('arrow-subject').style.display = 'none';
    document.getElementById('breadcrumb-subject').style.display = 'none';
    document.getElementById('arrow-unit').style.display = 'none';
    document.getElementById('breadcrumb-unit').style.display = 'none';

    // Hide all level containers
    hideAllLevels();
}

function initializeProjectsData() {
    const courseTabs = document.querySelectorAll('.course-tab');
    courseTabs.forEach(tab => {
        // Remove existing event listeners by cloning the element
        const newTab = tab.cloneNode(true);
        tab.parentNode.replaceChild(newTab, tab);

        // Add fresh event listener
        newTab.addEventListener('click', function() {
            const allTabs = document.querySelectorAll('.course-tab');
            allTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            displayProjects(this.dataset.course);
        });
    });
}

function initializeProjectsSection() {
    displayProjects('bca'); // Default to BCA projects
}

function displayProjects(course, searchTerm = '') {
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = '';

    let projects = projectsData[course] || [];

    // Filter projects based on search term
    if (searchTerm) {
        projects = projects.filter(project =>
            project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
        );
    }

    projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';

        const isLongDescription = project.description.length > 200;
        const truncatedDescription = isLongDescription ? project.description.substring(0, 200) + '...' : project.description;

        projectCard.innerHTML = `
            <h4>${project.title}</h4>
            <div class="project-description ${isLongDescription ? 'truncated' : ''}" id="desc-${course}-${index}">
                ${isLongDescription ? truncatedDescription : project.description}
            </div>
            ${isLongDescription ? `<button class="read-more-btn" data-course="${course}" data-index="${index}" data-expanded="false">Read More</button>` : ''}
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
            </div>
            <div class="project-difficulty difficulty-${project.difficulty}">${project.difficulty.toUpperCase()}</div>
        `;
        projectsGrid.appendChild(projectCard);
    });

    // Add read more functionality
    document.querySelectorAll('.read-more-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const course = this.getAttribute('data-course');
            const index = this.getAttribute('data-index');
            const isExpanded = this.getAttribute('data-expanded') === 'true';
            const descElement = document.getElementById(`desc-${course}-${index}`);
            const project = projectsData[course][index];

            if (isExpanded) {
                // Collapse
                descElement.innerHTML = project.description.substring(0, 200) + '...';
                descElement.className = 'project-description truncated';
                this.textContent = 'Read More';
                this.setAttribute('data-expanded', 'false');
            } else {
                // Expand to show full project with mini sections
                showFullProjectView(course, index, project);
                this.textContent = 'Read Less';
                this.setAttribute('data-expanded', 'true');
            }
        });
    });
}

function showFullProjectView(course, index, project) {
    const descElement = document.getElementById(`desc-${course}-${index}`);

    // Create mini project sections based on project type
    const miniProjects = generateMiniProjects(project, course);

    descElement.innerHTML = `
        <div class="project-description expanded">
            ${project.description}
        </div>
        <div class="mini-projects-section" style="margin-top: 20px;">
            <h5 style="color: #1976d2; margin-bottom: 15px; font-size: 16px;">📋 Project Components & Build Guide</h5>
            ${miniProjects.map((mini, idx) => `
                <div class="mini-project-card" style="background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 8px; padding: 15px; margin-bottom: 12px;">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px;">
                        <h6 style="color: #495057; margin: 0; font-size: 14px; font-weight: 600;">${mini.title}</h6>
                        <span style="background: #e3f2fd; color: #1976d2; padding: 2px 8px; border-radius: 12px; font-size: 11px;">${mini.type}</span>
                    </div>
                    <p style="color: #6c757d; font-size: 13px; line-height: 1.4; margin: 8px 0;">${mini.description}</p>
                    <div style="display: flex; gap: 6px; flex-wrap: wrap;">
                        <button class="mini-project-btn" onclick="readAboutProject('${project.title}', '${mini.title}', '${course}')"
                                style="background: #fff3e0; color: #e65100; border: 1px solid #ffcc02; padding: 4px 8px; border-radius: 5px; font-size: 11px; cursor: pointer;">
                            <i class="fas fa-info-circle"></i> About
                        </button>
                        <button class="mini-project-btn" onclick="readMiniProject('${project.title}', '${mini.title}', '${course}', ${idx})"
                                style="background: #e3f2fd; color: #1976d2; border: 1px solid #bbdefb; padding: 4px 8px; border-radius: 5px; font-size: 11px; cursor: pointer;">
                            <i class="fas fa-book-open"></i> Guide
                        </button>
                        <button class="mini-project-btn" onclick="downloadMiniProject('${project.title}', '${mini.title}', '${course}')"
                                style="background: #e8f5e8; color: #2e7d32; border: 1px solid #c8e6c9; padding: 4px 8px; border-radius: 5px; font-size: 11px; cursor: pointer;">
                            <i class="fas fa-download"></i> Download
                        </button>
                    </div>
                </div>
            `).join('')}
        </div>
    `;

    descElement.className = 'project-description expanded';
}

function generateMiniProjects(project, course) {
    // Generate relevant mini-projects based on the main project
    const baseProjects = [
        {
            title: "Project Setup & Architecture",
            type: "Setup",
            description: "Complete guide for setting up development environment, project structure, and basic architecture design."
        },
        {
            title: "Database Design & Implementation",
            type: "Database",
            description: "Database schema design, table creation, relationships, and data modeling for the project."
        },
        {
            title: "Core Features Development",
            type: "Development",
            description: "Step-by-step implementation of main features with code examples and best practices."
        },
        {
            title: "User Interface & Design",
            type: "Frontend",
            description: "UI/UX design principles, responsive layouts, and user-friendly interface development."
        },
        {
            title: "Testing & Deployment",
            type: "DevOps",
            description: "Testing strategies, debugging techniques, and deployment procedures for production."
        }
    ];

    // Add course-specific mini projects
    if (course === 'mba') {
        baseProjects.push({
            title: "Business Analysis & Strategy",
            type: "Business",
            description: "Market analysis, business model canvas, financial projections, and strategic planning."
        });
    } else if (course === 'bca' || course === 'mca') {
        baseProjects.push({
            title: "Advanced Programming Techniques",
            type: "Programming",
            description: "Advanced coding patterns, optimization techniques, and performance improvements."
        });
    }

    return baseProjects;
}

function initializeQuestionsData() {
    const questionSelects = document.querySelectorAll('.filter-select');
    questionSelects.forEach(select => {
        // Remove existing event listeners by cloning the element
        const newSelect = select.cloneNode(true);
        select.parentNode.replaceChild(newSelect, select);

        // Add fresh event listener
        newSelect.addEventListener('change', updateQuestionFilters);
    });

    // Setup cascading dropdowns with fresh elements
    setTimeout(setupQuestionCascading, 100);
}

function initializeQuestionsSection() {
    // Reset filters and display
    document.getElementById('questions-list').innerHTML = '<div class="question-card"><div class="question-text">Please select filters to view important questions</div></div>';
}

function setupQuestionCascading() {
    const courseSelect = document.getElementById('question-course');
    const yearSelect = document.getElementById('question-year');
    const semesterSelect = document.getElementById('question-semester');
    const subjectSelect = document.getElementById('question-subject');
    const unitSelect = document.getElementById('question-unit');

    courseSelect.addEventListener('change', function() {
        const selectedCourse = this.value;
        if (selectedCourse) {
            populateYearOptions(yearSelect, selectedCourse);
            clearSelect(semesterSelect);
            clearSelect(subjectSelect);
            clearSelect(unitSelect);
        } else {
            clearSelect(yearSelect);
            clearSelect(semesterSelect);
            clearSelect(subjectSelect);
            clearSelect(unitSelect);
        }
    });

    yearSelect.addEventListener('change', function() {
        const selectedCourse = courseSelect.value;
        const selectedYear = this.value;
        if (selectedCourse && selectedYear) {
            populateSemesterOptions(semesterSelect);
            clearSelect(subjectSelect);
            clearSelect(unitSelect);
        }
    });

    semesterSelect.addEventListener('change', function() {
        const selectedCourse = courseSelect.value;
        const selectedYear = yearSelect.value;
        const selectedSemester = this.value;
        if (selectedCourse && selectedYear && selectedSemester) {
            populateSubjectOptions(subjectSelect, selectedCourse, selectedYear, selectedSemester);
            clearSelect(unitSelect);
        }
    });

    subjectSelect.addEventListener('change', function() {
        const selectedCourse = courseSelect.value;
        const selectedSubject = this.value;
        if (selectedCourse && selectedSubject) {
            populateUnitOptions(unitSelect, selectedCourse, selectedSubject);
        }
    });
}

function populateYearOptions(yearSelect, course) {
    const duration = courseData[course].duration;
    yearSelect.innerHTML = '<option value="">Select Year</option>';
    for (let i = 1; i <= duration; i++) {
        yearSelect.innerHTML += `<option value="${i}">Year ${i}</option>`;
    }
}

function populateSemesterOptions(semesterSelect) {
    semesterSelect.innerHTML = '<option value="">Select Semester</option>';
    semesterSelect.innerHTML += '<option value="1">Semester 1</option>';
    semesterSelect.innerHTML += '<option value="2">Semester 2</option>';
}

function populateSubjectOptions(subjectSelect, course, year, semester) {
    const subjects = courseData[course].subjects[year][semester];
    subjectSelect.innerHTML = '<option value="">Select Subject</option>';
    subjects.forEach(subject => {
        subjectSelect.innerHTML += `<option value="${subject}">${subject}</option>`;
    });
}

function populateUnitOptions(unitSelect, course, subject) {
    const units = courseData[course].units[subject] || ['Unit 1', 'Unit 2', 'Unit 3', 'Unit 4', 'Unit 5'];
    unitSelect.innerHTML = '<option value="">Select Unit</option>';
    units.forEach((unit, index) => {
        unitSelect.innerHTML += `<option value="${unit}">Unit ${index + 1}</option>`;
    });
}

function clearSelect(selectElement) {
    selectElement.innerHTML = '<option value="">' + selectElement.querySelector('option').textContent + '</option>';
}

function updateQuestionFilters() {
    const course = document.getElementById('question-course').value;
    const year = document.getElementById('question-year').value;
    const semester = document.getElementById('question-semester').value;
    const subject = document.getElementById('question-subject').value;
    const unit = document.getElementById('question-unit').value;

    if (course && year && semester && subject && unit) {
        displayQuestions(course, year, semester, subject, unit);
    }
}

function displayQuestions(course, year, semester, subject, unit) {
    const questionsList = document.getElementById('questions-list');
    questionsList.innerHTML = '';

    // Sample questions for demonstration
    const sampleQuestions = [
        { question: `Explain the key concepts of ${unit} in ${subject}`, marks: 10 },
        { question: `Write a detailed note on ${unit} with practical examples`, marks: 15 },
        { question: `Compare and contrast different approaches in ${unit}`, marks: 20 },
        { question: `Solve the following problem related to ${unit}`, marks: 25 },
        { question: `Analyze the importance of ${unit} in modern applications`, marks: 15 }
    ];

    sampleQuestions.forEach((q, index) => {
        const questionCard = document.createElement('div');
        questionCard.className = 'question-card';
        questionCard.innerHTML = `
            <div class="question-text">${q.question}</div>
            <div class="question-meta">
                <span>Course: ${course.toUpperCase()}</span>
                <span>Year: ${year}</span>
                <span>Semester: ${semester}</span>
                <span class="question-marks">${q.marks} Marks</span>
            </div>
            <div style="margin-top: 15px; display: flex; gap: 10px;">
                <button class="note-btn btn-download" onclick="downloadQuestions('${course}', '${year}', '${semester}', '${subject}', '${unit}')">
                    <i class="fas fa-download"></i> Download PDF
                </button>
                <button class="note-btn btn-view" onclick="viewQuestionsOnline('${course}', '${year}', '${semester}', '${subject}', '${unit}')">
                    <i class="fas fa-eye"></i> View Online
                </button>
            </div>
        `;
        questionsList.appendChild(questionCard);
    });
}

function initializeEventsData() {
    const eventTabs = document.querySelectorAll('.event-tab');
    eventTabs.forEach(tab => {
        // Remove existing event listeners by cloning the element
        const newTab = tab.cloneNode(true);
        tab.parentNode.replaceChild(newTab, tab);

        // Add fresh event listener
        newTab.addEventListener('click', function() {
            const allTabs = document.querySelectorAll('.event-tab');
            allTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            displayEvents(this.dataset.type);
        });
    });
}

function initializeEventsSection() {
    displayEvents('exams'); // Default to exams
}

function displayEvents(type) {
    const eventsContent = document.getElementById('events-content');
    eventsContent.innerHTML = '';

    const events = eventsData[type] || [];
    events.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';
        eventCard.innerHTML = `
            <div class="event-icon ${type.slice(0, -1)}">
                <i class="fas fa-${getEventIcon(type)}"></i>
            </div>
            <div class="event-details">
                <h4>${event.title}</h4>
                <p>${event.description}</p>
                <div class="event-date">${formatDate(event.date)} at ${event.time}</div>
                <div class="event-date">Venue: ${event.venue}</div>
            </div>
        `;
        eventsContent.appendChild(eventCard);
    });
}

function getEventIcon(type) {
    const icons = {
        exams: 'graduation-cap',
        sports: 'futbol',
        notices: 'bullhorn'
    };
    return icons[type] || 'calendar';
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function getYearDescription(year) {
    const descriptions = {
        1: 'Foundation year with basic concepts',
        2: 'Intermediate level with specialized subjects',
        3: 'Advanced level with industry projects'
    };
    return descriptions[year] || 'Academic year';
}

function getSemesterDescription(semester) {
    return semester === 1 ? 'First half of academic year' : 'Second half of academic year';
}

// Keep existing functions for dashboard functionality
function setupActivityChart() {
    const canvas = document.getElementById('activityChart');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);
    drawActivityChart(ctx, width, height);
}

function drawActivityChart(ctx, width, height) {
    const dataPoints = [20, 35, 30, 45, 40, 60, 55, 70, 65, 75, 70, 80];
    const pointSpacing = width / (dataPoints.length - 1);

    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, 'rgba(52, 152, 219, 0.3)');
    gradient.addColorStop(1, 'rgba(52, 152, 219, 0.05)');

    ctx.beginPath();
    ctx.moveTo(0, height);

    dataPoints.forEach((point, index) => {
        const x = index * pointSpacing;
        const y = height - (point / 100) * height;
        if (index === 0) {
            ctx.lineTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    });

    ctx.lineTo(width, height);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();

    ctx.beginPath();
    dataPoints.forEach((point, index) => {
        const x = index * pointSpacing;
        const y = height - (point / 100) * height;
        if (index === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    });

    ctx.strokeStyle = '#3498db';
    ctx.lineWidth = 2;
    ctx.stroke();

    dataPoints.forEach((point, index) => {
        const x = index * pointSpacing;
        const y = height - (point / 100) * height;

        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#3498db';
        ctx.fill();
    });
}

function animateNumbers() {
    const numbers = document.querySelectorAll('.amount, .stats-value .number');
    numbers.forEach(numberEl => {
        const finalValue = parseFloat(numberEl.textContent.replace(/[^0-9.-]+/g, ''));
        animateValue(numberEl, 0, finalValue, 1500);
    });
}

function animateValue(element, start, end, duration) {
    const range = end - start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));

    let current = start;
    const timer = setInterval(() => {
        current += increment;
        element.textContent = formatNumber(current);
        if (current === end) {
            clearInterval(timer);
        }
    }, stepTime);
}

function formatNumber(num) {
    if (num >= 1000) {
        return num.toLocaleString();
    }
    return num.toString();
}

function addCardAnimations() {
    const cards = document.querySelectorAll('.dashboard-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
            this.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
        });
    });
}

function addRippleEffect(element) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);

    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = '50%';
    ripple.style.top = '50%';
    ripple.style.transform = 'translate(-50%, -50%)';
    ripple.classList.add('ripple');

    if (!document.querySelector('#ripple-styles')) {
        const style = document.createElement('style');
        style.id = 'ripple-styles';
        style.textContent = `
            .ripple {
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.3);
                transform-origin: center;
                animation: ripple-animation 0.6s ease-out;
                pointer-events: none;
            }
            @keyframes ripple-animation {
                from {
                    transform: translate(-50%, -50%) scale(0);
                    opacity: 1;
                }
                to {
                    transform: translate(-50%, -50%) scale(2);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    element.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
}

// Login Modal Functions
function showLoginModal() {
    const modal = document.getElementById('loginModal');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    // Setup auth tab functionality
    setupAuthTabs();
}

function hideLoginModal() {
    const modal = document.getElementById('loginModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function setupAuthTabs() {
    const authTabs = document.querySelectorAll('.auth-tab');
    const authForms = document.querySelectorAll('.auth-form');

    authTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabType = this.getAttribute('data-tab');

            // Remove active class from all tabs and forms
            authTabs.forEach(t => t.classList.remove('active'));
            authForms.forEach(f => f.classList.remove('active'));

            // Add active class to clicked tab and corresponding form
            this.classList.add('active');
            document.getElementById(tabType + 'Form').classList.add('active');
        });
    });

    // Setup form submissions
    setupFormSubmissions();
}

function setupFormSubmissions() {
    const loginForm = document.querySelector('#loginForm form');
    const signupForm = document.querySelector('#signupForm form');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="text"]').value;
            const password = this.querySelector('input[type="password"]').value;

            // Simulate login
            setTimeout(() => {
                alert('Login successful! Welcome to EduHub.');
                hideLoginModal();
            }, 1000);
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);

            // Simulate signup
            setTimeout(() => {
                alert('Account created successfully! You can now login.');
                // Switch to login tab
                document.querySelector('.auth-tab[data-tab="login"]').click();
            }, 1000);
        });
    }
}

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    const loginModal = document.getElementById('loginModal');
    const notesModal = document.getElementById('notesViewerModal');

    if (e.target === loginModal) {
        hideLoginModal();
    }
    if (e.target === notesModal) {
        hideNotesViewer();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        hideLoginModal();
        hideNotesViewer();
    }
});

// Notes download and view functions
function downloadFile(title, type) {
    // Generate realistic file content
    const fileName = title.replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '_');
    const extension = type === 'Video' ? 'mp4' : 'pdf';

    // Create downloadable content
    let content = '';
    if (type === 'PDF') {
        content = generatePDFContent(title);
    } else if (type === 'Video') {
        // For video, we'll simulate download
        showNotification(`Downloading ${title}...`, 'success');
        setTimeout(() => {
            showNotification(`${title} downloaded successfully! (Video file simulation)`, 'success');
        }, 2000);
        return;
    }

    // Create blob and download link for PDF content
    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${fileName}.txt`; // Using .txt for demo (would be .pdf in real implementation)

    // Show download notification
    showNotification(`Downloading ${title}...`, 'success');

    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);

    // Show success notification
    setTimeout(() => {
        showNotification(`${title} downloaded successfully!`, 'success');
    }, 1000);
}

function viewOnline(title, type) {
    // Open content in modal viewer
    if (type === 'Video') {
        showVideoPlayer(title);
    } else {
        showNotesViewer(title, type);
    }
}

function showNotesViewer(title, type) {
    const modal = document.getElementById('notesViewerModal');
    const titleElement = document.getElementById('notesViewerTitle');
    const contentElement = document.getElementById('notesViewerContent');

    // Show course name in the title
    const courseName = courseData[selectedCourse]?.name || 'Course';
    titleElement.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
            <span>${title}</span>
            <span style="background: #e3f2fd; color: #1976d2; padding: 4px 12px; border-radius: 20px; font-size: 14px; font-weight: 600;">
                ${courseName}
            </span>
        </div>
    `;

    // Generate content based on title and type
    const content = generatePDFContent(title);
    contentElement.innerHTML = `
        <div style="font-family: 'Inter', sans-serif; line-height: 1.6; color: #333;">
            ${content}
        </div>
    `;

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function hideNotesViewer() {
    const modal = document.getElementById('notesViewerModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function showVideoPlayer(title) {
    const modal = document.getElementById('notesViewerModal');
    const titleElement = document.getElementById('notesViewerTitle');
    const contentElement = document.getElementById('notesViewerContent');

    // Show course name in the title
    const courseName = courseData[selectedCourse]?.name || 'Course';
    titleElement.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
            <span>${title}</span>
            <span style="background: #e3f2fd; color: #1976d2; padding: 4px 12px; border-radius: 20px; font-size: 14px; font-weight: 600;">
                ${courseName}
            </span>
        </div>
    `;
    contentElement.innerHTML = `
        <div style="text-align: center; padding: 40px;">
            <div style="background: #000; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
                <i class="fas fa-play-circle" style="font-size: 80px; color: #fff; margin-bottom: 20px;"></i>
                <h3 style="color: #fff; margin-bottom: 10px;">Video Player</h3>
                <p style="color: #ccc;">Playing: ${title}</p>
            </div>
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; text-align: left;">
                <h4>Video Content Description:</h4>
                <p>This video lecture covers comprehensive topics related to ${selectedUnit || 'the selected unit'}.
                   The content includes detailed explanations, practical examples, and step-by-step demonstrations
                   to help students understand complex concepts effectively.</p>
                <ul style="margin-top: 15px;">
                    <li>Interactive explanations with visual aids</li>
                    <li>Real-world examples and case studies</li>
                    <li>Problem-solving techniques</li>
                    <li>Key concepts and formulas</li>
                    <li>Practice exercises and solutions</li>
                </ul>
            </div>
        </div>
    `;

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function generatePDFContent(title) {
    // Generate realistic educational content based on the title
    const unit = selectedUnit || 'Selected Unit';
    const subject = selectedSubject || 'Subject';

    return `
        <h1 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">${title}</h1>

        <div style="background: #e3f2fd; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1976d2; margin: 0 0 10px 0;">📚 Course Information</h3>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Unit:</strong> ${unit}</p>
            <p><strong>Document Type:</strong> Study Material</p>
        </div>

        <h2 style="color: #1976d2; margin-top: 30px;">🎯 Learning Objectives</h2>
        <ul style="line-height: 1.8;">
            <li>Understand the fundamental concepts of ${unit}</li>
            <li>Apply theoretical knowledge to practical problems</li>
            <li>Analyze different approaches and methodologies</li>
            <li>Develop problem-solving skills</li>
            <li>Prepare for examinations and assessments</li>
        </ul>

        <h2 style="color: #1976d2; margin-top: 30px;">📖 Content Overview</h2>
        <p>This comprehensive study material covers all essential topics within ${unit}. The content is structured
        to provide a systematic understanding of the subject matter, starting from basic concepts and progressing
        to advanced applications.</p>

        <h3 style="color: #1565c0; margin-top: 25px;">Key Topics Covered:</h3>
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 15px 0;">
            <ol style="line-height: 1.8;">
                <li><strong>Introduction and Fundamentals</strong>
                    <ul style="margin-top: 5px;">
                        <li>Basic definitions and terminology</li>
                        <li>Historical background and evolution</li>
                        <li>Scope and applications</li>
                    </ul>
                </li>
                <li><strong>Core Concepts and Principles</strong>
                    <ul style="margin-top: 5px;">
                        <li>Theoretical foundations</li>
                        <li>Mathematical models and formulations</li>
                        <li>Key algorithms and processes</li>
                    </ul>
                </li>
                <li><strong>Practical Applications</strong>
                    <ul style="margin-top: 5px;">
                        <li>Real-world case studies</li>
                        <li>Industry implementations</li>
                        <li>Problem-solving techniques</li>
                    </ul>
                </li>
                <li><strong>Advanced Topics</strong>
                    <ul style="margin-top: 5px;">
                        <li>Current research trends</li>
                        <li>Emerging technologies</li>
                        <li>Future developments</li>
                    </ul>
                </li>
            </ol>
        </div>

        <h2 style="color: #1976d2; margin-top: 30px;">💡 Important Formulas and Concepts</h2>
        <div style="background: #fff3e0; padding: 20px; border-radius: 8px; border-left: 4px solid #ff9800;">
            <p><strong>Key Formula 1:</strong> Mathematical representation of core principle</p>
            <p><strong>Key Formula 2:</strong> Calculation methodology for problem solving</p>
            <p><strong>Key Formula 3:</strong> Optimization and efficiency measures</p>
        </div>

        <h2 style="color: #1976d2; margin-top: 30px;">🔍 Sample Problems and Solutions</h2>
        <div style="background: #e8f5e8; padding: 20px; border-radius: 8px;">
            <h4>Problem 1:</h4>
            <p>A comprehensive problem related to ${unit} that demonstrates practical application of concepts.</p>
            <h4>Solution:</h4>
            <p>Step-by-step solution approach with detailed explanations and calculations.</p>
        </div>

        <h2 style="color: #1976d2; margin-top: 30px;">📝 Summary and Key Points</h2>
        <ul style="line-height: 1.8; background: #f3e5f5; padding: 20px; border-radius: 8px;">
            <li>Comprehensive understanding of ${unit} fundamentals</li>
            <li>Practical application of theoretical concepts</li>
            <li>Problem-solving methodologies and techniques</li>
            <li>Industry relevance and real-world applications</li>
            <li>Preparation for advanced topics and examinations</li>
        </ul>

        <div style="background: #ffebee; padding: 15px; border-radius: 8px; margin-top: 30px; border-left: 4px solid #f44336;">
            <h3 style="color: #c62828; margin: 0 0 10px 0;">📋 Examination Tips</h3>
            <ul style="margin: 0;">
                <li>Focus on understanding concepts rather than memorization</li>
                <li>Practice numerical problems regularly</li>
                <li>Review previous year question papers</li>
                <li>Create summary notes for quick revision</li>
                <li>Discuss difficult topics with peers and instructors</li>
            </ul>
        </div>

        <hr style="margin: 30px 0; border: none; border-top: 2px solid #e0e0e0;">

        <p style="text-align: center; color: #666; font-style: italic;">
            This study material is designed to enhance your understanding of ${unit}.<br>
            For additional resources and clarifications, contact your course instructor.
        </p>
    `;
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 12px 20px;
        background: ${type === 'success' ? '#27ae60' : type === 'error' ? '#e74c3c' : '#3498db'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 10001;
        font-weight: 500;
        transform: translateX(400px);
        transition: transform 0.3s ease;
    `;
    notification.textContent = message;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Animate out and remove
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Important Questions download and view functions
function downloadQuestions(course, year, semester, subject, unit) {
    const fileName = `Important_Questions_${course.toUpperCase()}_Year${year}_Sem${semester}_${subject.replace(/\s+/g, '_')}`;
    const content = generateQuestionsContent(course, year, semester, subject, unit);

    // Create blob and download link
    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${fileName}.txt`; // Using .txt for demo

    // Show download notification
    showNotification(`Downloading Important Questions...`, 'success');

    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);

    // Show success notification
    setTimeout(() => {
        showNotification(`Important Questions downloaded successfully!`, 'success');
    }, 1000);
}

function viewQuestionsOnline(course, year, semester, subject, unit) {
    const title = `Important Questions - ${subject} (${unit})`;
    const modal = document.getElementById('notesViewerModal');
    const titleElement = document.getElementById('notesViewerTitle');
    const contentElement = document.getElementById('notesViewerContent');

    // Show course name in the title
    const courseName = course.toUpperCase();
    titleElement.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
            <span style="font-size: 18px;">${title}</span>
            <span style="background: #e3f2fd; color: #1976d2; padding: 4px 12px; border-radius: 20px; font-size: 14px; font-weight: 600;">
                ${courseName}
            </span>
        </div>
    `;

    // Generate questions content
    const content = generateQuestionsContent(course, year, semester, subject, unit);
    contentElement.innerHTML = `
        <div style="font-family: 'Inter', sans-serif; line-height: 1.6; color: #333;">
            ${content}
        </div>
    `;

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function generateQuestionsContent(course, year, semester, subject, unit) {
    // Generate comprehensive question paper content
    return `
        <h1 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px; text-align: center;">
            Important Questions - ${subject}
        </h1>

        <div style="background: #e3f2fd; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1976d2; margin: 0 0 10px 0;">📋 Examination Details</h3>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                <p><strong>Course:</strong> ${course.toUpperCase()}</p>
                <p><strong>Year:</strong> ${year}</p>
                <p><strong>Semester:</strong> ${semester}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Unit:</strong> ${unit}</p>
                <p><strong>Total Time:</strong> 3 Hours</p>
            </div>
        </div>

        <div style="background: #fff3e0; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #e65100; margin: 0 0 10px 0;">⚠️ Instructions</h3>
            <ul style="margin: 5px 0;">
                <li>Answer ALL questions from Section A (Short Answer Questions)</li>
                <li>Answer ANY FOUR questions from Section B (Long Answer Questions)</li>
                <li>All questions carry equal marks unless specified</li>
                <li>Use of calculator is permitted</li>
                <li>Draw neat diagrams wherever necessary</li>
            </ul>
        </div>

        <h2 style="color: #1976d2; margin-top: 30px; border-bottom: 1px solid #ddd; padding-bottom: 5px;">
            Section A - Short Answer Questions (2 marks each)
        </h2>

        <ol style="line-height: 2;">
            <li>Define the basic concepts of ${unit} and explain their significance.</li>
            <li>List the key features and characteristics of ${unit}.</li>
            <li>What are the advantages and disadvantages of implementing ${unit}?</li>
            <li>Explain the relationship between ${unit} and other related concepts.</li>
            <li>Write short notes on the applications of ${unit} in real-world scenarios.</li>
            <li>Compare and contrast different approaches used in ${unit}.</li>
            <li>What are the common challenges faced while working with ${unit}?</li>
            <li>Explain the evolution and historical development of ${unit}.</li>
        </ol>

        <h2 style="color: #1976d2; margin-top: 30px; border-bottom: 1px solid #ddd; padding-bottom: 5px;">
            Section B - Long Answer Questions (10 marks each)
        </h2>

        <ol style="line-height: 2;">
            <li>
                <strong>Comprehensive Analysis (10 marks)</strong><br>
                Provide a detailed explanation of ${unit} including its theoretical foundations,
                practical implementations, and current industry trends. Support your answer with
                suitable examples and diagrams.
            </li>

            <li>
                <strong>Problem Solving (10 marks)</strong><br>
                Solve the following complex problem related to ${unit}:<br>
                <em>Given a practical scenario involving ${unit}, design and implement a comprehensive
                solution. Explain your approach, methodology, and justify your design decisions.</em>
            </li>

            <li>
                <strong>Comparative Study (10 marks)</strong><br>
                Compare and contrast different methodologies and approaches used in ${unit}.
                Discuss their strengths, weaknesses, and suitable application areas. Provide
                examples to support your analysis.
            </li>

            <li>
                <strong>Case Study Analysis (10 marks)</strong><br>
                Analyze a real-world case study related to ${unit}. Identify the challenges,
                solutions implemented, and outcomes achieved. Suggest alternative approaches
                and improvements.
            </li>

            <li>
                <strong>Future Trends and Developments (10 marks)</strong><br>
                Discuss the current research trends and future developments in ${unit}.
                Explain emerging technologies, innovations, and their potential impact on
                the field. Include your predictions for the next 5-10 years.
            </li>

            <li>
                <strong>Implementation Project (10 marks)</strong><br>
                Design and propose a comprehensive project based on ${unit}. Include project
                objectives, methodology, timeline, resource requirements, expected outcomes,
                and evaluation criteria.
            </li>
        </ol>

        <h2 style="color: #1976d2; margin-top: 30px; border-bottom: 1px solid #ddd; padding-bottom: 5px;">
            Section C - Practical Questions (15 marks each)
        </h2>

        <ol style="line-height: 2;">
            <li>
                <strong>Hands-on Implementation (15 marks)</strong><br>
                Write a complete program/solution to demonstrate the practical application of ${unit}.
                Include proper documentation, comments, and test cases. Explain the logic and
                working of your solution.
            </li>

            <li>
                <strong>System Design (15 marks)</strong><br>
                Design a complete system incorporating the principles of ${unit}. Draw system
                architecture diagrams, explain components, interfaces, and data flow. Justify
                your design choices.
            </li>
        </ol>

        <div style="background: #e8f5e8; padding: 20px; border-radius: 8px; margin: 30px 0;">
            <h3 style="color: #2e7d32; margin: 0 0 15px 0;">📚 Recommended Study Materials</h3>
            <ul style="margin: 0;">
                <li>Course textbook chapters related to ${unit}</li>
                <li>Reference books and research papers</li>
                <li>Online tutorials and video lectures</li>
                <li>Previous year question papers</li>
                <li>Laboratory manuals and practical exercises</li>
                <li>Industry case studies and white papers</li>
            </ul>
        </div>

        <div style="background: #f3e5f5; padding: 20px; border-radius: 8px; margin: 30px 0;">
            <h3 style="color: #7b1fa2; margin: 0 0 15px 0;">💡 Exam Preparation Tips</h3>
            <ul style="margin: 0;">
                <li>Create a comprehensive study schedule covering all topics</li>
                <li>Practice numerical problems and case studies regularly</li>
                <li>Form study groups for discussion and doubt clarification</li>
                <li>Prepare concise notes for quick revision</li>
                <li>Take mock tests to assess your preparation level</li>
                <li>Focus on understanding concepts rather than rote learning</li>
                <li>Stay updated with current industry trends and developments</li>
            </ul>
        </div>

        <hr style="margin: 30px 0; border: none; border-top: 2px solid #e0e0e0;">

        <p style="text-align: center; color: #666; font-style: italic;">
            <strong>Important:</strong> This question paper is for practice purposes.<br>
            For official examinations, refer to the approved syllabus and question pattern.<br>
            <strong>All the Best for your Examinations!</strong>
        </p>
    `;
}

// Mini Project functions
function readMiniProject(projectTitle, miniTitle, course, index) {
    const title = `${miniTitle} - ${projectTitle}`;
    const modal = document.getElementById('notesViewerModal');
    const titleElement = document.getElementById('notesViewerTitle');
    const contentElement = document.getElementById('notesViewerContent');

    // Show course name in the title
    const courseName = course.toUpperCase();
    titleElement.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
            <span style="font-size: 16px;">${title}</span>
            <span style="background: #e3f2fd; color: #1976d2; padding: 4px 12px; border-radius: 20px; font-size: 14px; font-weight: 600;">
                ${courseName}
            </span>
        </div>
    `;

    // Generate comprehensive mini project content
    const content = generateMiniProjectContent(projectTitle, miniTitle, course, index);
    contentElement.innerHTML = `
        <div style="font-family: 'Inter', sans-serif; line-height: 1.6; color: #333;">
            ${content}
        </div>
    `;

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function downloadMiniProject(projectTitle, miniTitle, course) {
    const fileName = `${miniTitle.replace(/\s+/g, '_')}_${projectTitle.replace(/\s+/g, '_')}_${course.toUpperCase()}`;

    // Create comprehensive downloadable package
    const aboutContent = generateAboutProjectContent(projectTitle, miniTitle, course);
    const guideContent = generateMiniProjectContent(projectTitle, miniTitle, course, 0);
    const resourcesContent = generateResourcesContent(projectTitle, miniTitle, course);

    const fullContent = `
==========================================
${miniTitle.toUpperCase()} - COMPLETE PACKAGE
==========================================
Main Project: ${projectTitle}
Course: ${course.toUpperCase()}
Generated on: ${new Date().toLocaleDateString()}

==========================================
PART 1: ABOUT & OVERVIEW
==========================================

${aboutContent}

==========================================
PART 2: IMPLEMENTATION GUIDE
==========================================

${guideContent}

==========================================
PART 3: ADDITIONAL RESOURCES
==========================================

${resourcesContent}

==========================================
END OF DOCUMENT
==========================================
    `;

    // Create blob and download link
    const blob = new Blob([fullContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${fileName}_COMPLETE_PACKAGE.txt`;

    // Show download notification
    showNotification(`Preparing ${miniTitle} complete package...`, 'info');

    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);

    // Show success notification
    setTimeout(() => {
        showNotification(`${miniTitle} complete package downloaded successfully!`, 'success');
    }, 1000);
}

function generateMiniProjectContent(projectTitle, miniTitle, course, index) {
    return `
        <h1 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            ${miniTitle} - Implementation Guide
        </h1>

        <div style="background: #e3f2fd; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1976d2; margin: 0 0 10px 0;">📋 Project Information</h3>
            <p><strong>Main Project:</strong> ${projectTitle}</p>
            <p><strong>Component:</strong> ${miniTitle}</p>
            <p><strong>Course:</strong> ${course.toUpperCase()}</p>
            <p><strong>Difficulty Level:</strong> Intermediate to Advanced</p>
        </div>

        <h2 style="color: #1976d2; margin-top: 30px;">🎯 Objectives</h2>
        <ul style="line-height: 1.8;">
            <li>Understand the key concepts and requirements for ${miniTitle}</li>
            <li>Learn step-by-step implementation process</li>
            <li>Gain practical experience with industry-standard tools</li>
            <li>Apply best practices and design patterns</li>
            <li>Complete a working component for the main project</li>
        </ul>

        <h2 style="color: #1976d2; margin-top: 30px;">📚 Prerequisites</h2>
        <div style="background: #fff3e0; padding: 15px; border-radius: 8px; border-left: 4px solid #ff9800;">
            <ul style="margin: 0;">
                <li>Basic understanding of ${course === 'mba' ? 'business concepts and project management' : 'programming fundamentals'}</li>
                <li>Familiarity with ${course === 'mba' ? 'market analysis and strategic planning' : 'database concepts and web development'}</li>
                <li>Access to required development tools and software</li>
                <li>Understanding of project requirements and scope</li>
            </ul>
        </div>

        <h2 style="color: #1976d2; margin-top: 30px;">🔧 Implementation Steps</h2>

        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 15px 0;">
            <h3 style="color: #1565c0;">Step 1: Planning and Analysis</h3>
            <ul style="line-height: 1.8;">
                <li>Define specific requirements for ${miniTitle}</li>
                <li>Analyze dependencies and integration points</li>
                <li>Create detailed design documentation</li>
                <li>Set up development timeline and milestones</li>
            </ul>
        </div>

        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 15px 0;">
            <h3 style="color: #1565c0;">Step 2: Environment Setup</h3>
            <ul style="line-height: 1.8;">
                <li>Install and configure required development tools</li>
                <li>Set up project structure and directories</li>
                <li>Initialize version control system</li>
                <li>Configure development and testing environments</li>
            </ul>
        </div>

        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 15px 0;">
            <h3 style="color: #1565c0;">Step 3: Core Development</h3>
            <ul style="line-height: 1.8;">
                <li>Implement basic functionality and core features</li>
                <li>Follow coding standards and best practices</li>
                <li>Add proper error handling and validation</li>
                <li>Write comprehensive documentation</li>
            </ul>
        </div>

        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 15px 0;">
            <h3 style="color: #1565c0;">Step 4: Testing and Optimization</h3>
            <ul style="line-height: 1.8;">
                <li>Perform unit testing and integration testing</li>
                <li>Optimize performance and resource usage</li>
                <li>Debug and fix identified issues</li>
                <li>Conduct user acceptance testing</li>
            </ul>
        </div>

        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 15px 0;">
            <h3 style="color: #1565c0;">Step 5: Integration and Deployment</h3>
            <ul style="line-height: 1.8;">
                <li>Integrate with other project components</li>
                <li>Prepare deployment packages and documentation</li>
                <li>Set up production environment</li>
                <li>Deploy and monitor the implementation</li>
            </ul>
        </div>

        <h2 style="color: #1976d2; margin-top: 30px;">💡 Key Technologies & Tools</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin: 20px 0;">
            ${generateTechStack(course, miniTitle).map(tech => `
                <div style="background: #e8f5e8; padding: 15px; border-radius: 8px; text-align: center;">
                    <h4 style="color: #2e7d32; margin: 0 0 8px 0;">${tech.name}</h4>
                    <p style="color: #388e3c; font-size: 13px; margin: 0;">${tech.purpose}</p>
                </div>
            `).join('')}
        </div>

        <h2 style="color: #1976d2; margin-top: 30px;">📋 Deliverables</h2>
        <div style="background: #e3f2fd; padding: 20px; border-radius: 8px;">
            <ul style="line-height: 1.8; margin: 0;">
                <li>✅ Fully functional ${miniTitle} implementation</li>
                <li>✅ Comprehensive documentation and user guide</li>
                <li>✅ Test cases and testing results</li>
                <li>✅ Source code with proper comments</li>
                <li>✅ Deployment guide and configuration files</li>
                <li>✅ Performance analysis and optimization report</li>
            </ul>
        </div>

        <h2 style="color: #1976d2; margin-top: 30px;">🚀 Next Steps</h2>
        <div style="background: #f3e5f5; padding: 20px; border-radius: 8px;">
            <p><strong>After completing this component:</strong></p>
            <ul style="line-height: 1.8;">
                <li>Integrate with other project modules</li>
                <li>Conduct comprehensive system testing</li>
                <li>Prepare for final project presentation</li>
                <li>Document lessons learned and improvements</li>
                <li>Plan for future enhancements and scaling</li>
            </ul>
        </div>

        <hr style="margin: 30px 0; border: none; border-top: 2px solid #e0e0e0;">

        <p style="text-align: center; color: #666; font-style: italic;">
            <strong>Success Tip:</strong> Break down complex tasks into smaller, manageable chunks.<br>
            Focus on understanding concepts before implementation, and don't hesitate to seek help when needed.<br>
            <strong>Good luck with your ${miniTitle} implementation!</strong>
        </p>
    `;
}

function generateTechStack(course, miniTitle) {
    const baseTech = [
        { name: "Git", purpose: "Version Control" },
        { name: "Documentation", purpose: "Project Docs" }
    ];

    if (course === 'mba') {
        return [
            { name: "Excel/Sheets", purpose: "Data Analysis" },
            { name: "PowerBI", purpose: "Visualization" },
            { name: "Project Management", purpose: "Planning Tools" },
            ...baseTech
        ];
    } else {
        return [
            { name: "Database", purpose: "Data Storage" },
            { name: "Framework", purpose: "Development" },
            { name: "Testing Tools", purpose: "Quality Assurance" },
            ...baseTech
        ];
    }
}

// Read About Project function
function readAboutProject(projectTitle, miniTitle, course) {
    const title = `About: ${miniTitle}`;
    const modal = document.getElementById('notesViewerModal');
    const titleElement = document.getElementById('notesViewerTitle');
    const contentElement = document.getElementById('notesViewerContent');

    // Show course name in the title
    const courseName = course.toUpperCase();
    titleElement.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
            <span style="font-size: 16px;">${title}</span>
            <span style="background: #e3f2fd; color: #1976d2; padding: 4px 12px; border-radius: 20px; font-size: 14px; font-weight: 600;">
                ${courseName}
            </span>
        </div>
    `;

    // Generate about project content
    const content = generateAboutProjectContent(projectTitle, miniTitle, course);
    contentElement.innerHTML = `
        <div style="font-family: 'Inter', sans-serif; line-height: 1.6; color: #333;">
            ${content}
        </div>
    `;

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function generateAboutProjectContent(projectTitle, miniTitle, course) {
    return `
        <h1 style="color: #e65100; border-bottom: 2px solid #ff9800; padding-bottom: 10px;">
            ${miniTitle} Overview
        </h1>

        <div style="background: #fff3e0; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #ff9800;">
            <h3 style="color: #e65100; margin: 0 0 10px 0;">📋 Component Information</h3>
            <p><strong>Main Project:</strong> ${projectTitle}</p>
            <p><strong>Component:</strong> ${miniTitle}</p>
            <p><strong>Course:</strong> ${course.toUpperCase()}</p>
            <p><strong>Importance:</strong> Essential building block</p>
        </div>

        <h2 style="color: #e65100; margin-top: 30px;">🔍 What is ${miniTitle}?</h2>
        <p style="background: #f5f5f5; padding: 20px; border-radius: 8px; font-size: 16px; line-height: 1.7;">
            ${miniTitle} is a critical component of ${projectTitle} that focuses on ${getComponentPurpose(miniTitle)}.
            This component ensures ${getComponentBenefit(miniTitle)} and provides the foundation for successful project implementation.
        </p>

        <h2 style="color: #e65100; margin-top: 30px;">🎯 Why is it Important?</h2>
        <div style="background: #e8f5e8; padding: 20px; border-radius: 8px;">
            <ul style="line-height: 1.8;">
                <li><strong>Foundation:</strong> Provides essential groundwork for the entire ${projectTitle}</li>
                <li><strong>Quality Assurance:</strong> Ensures high standards and best practices implementation</li>
                <li><strong>Scalability:</strong> Enables future growth and feature additions</li>
                <li><strong>Maintainability:</strong> Makes the project easy to update and modify</li>
                <li><strong>Professional Standards:</strong> Follows industry-standard practices and patterns</li>
            </ul>
        </div>

        <h2 style="color: #e65100; margin-top: 30px;">📊 Key Features & Benefits</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px; margin: 20px 0;">
            ${getComponentFeatures(miniTitle).map(feature => `
                <div style="background: #fff; border: 2px solid #ffcc02; border-radius: 8px; padding: 15px; text-align: center;">
                    <div style="font-size: 24px; margin-bottom: 10px;">${feature.icon}</div>
                    <h4 style="color: #e65100; margin: 0 0 8px 0;">${feature.name}</h4>
                    <p style="color: #666; font-size: 13px; margin: 0;">${feature.description}</p>
                </div>
            `).join('')}
        </div>

        <h2 style="color: #e65100; margin-top: 30px;">🛠️ What You'll Learn</h2>
        <div style="background: #e3f2fd; padding: 20px; border-radius: 8px;">
            <ul style="line-height: 1.8;">
                <li>How to properly implement ${miniTitle} in ${projectTitle}</li>
                <li>Best practices and industry standards for ${miniTitle}</li>
                <li>Common pitfalls and how to avoid them</li>
                <li>Integration techniques with other project components</li>
                <li>Performance optimization strategies</li>
                <li>Testing and debugging approaches</li>
            </ul>
        </div>

        <h2 style="color: #e65100; margin-top: 30px;">⏰ Time Investment</h2>
        <div style="background: #f3e5f5; padding: 20px; border-radius: 8px;">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
                <div style="text-align: center;">
                    <h4 style="color: #7b1fa2; margin: 0;">Learning Time</h4>
                    <p style="font-size: 18px; font-weight: 600; color: #7b1fa2; margin: 5px 0;">2-4 hours</p>
                </div>
                <div style="text-align: center;">
                    <h4 style="color: #7b1fa2; margin: 0;">Implementation</h4>
                    <p style="font-size: 18px; font-weight: 600; color: #7b1fa2; margin: 5px 0;">4-8 hours</p>
                </div>
                <div style="text-align: center;">
                    <h4 style="color: #7b1fa2; margin: 0;">Testing & Debug</h4>
                    <p style="font-size: 18px; font-weight: 600; color: #7b1fa2; margin: 5px 0;">2-3 hours</p>
                </div>
            </div>
        </div>

        <h2 style="color: #e65100; margin-top: 30px;">🎓 Skill Level Required</h2>
        <div style="background: #ffebee; padding: 20px; border-radius: 8px; border-left: 4px solid #f44336;">
            <p><strong>Beginner Level:</strong> Basic understanding of ${course === 'mba' ? 'business concepts' : 'programming fundamentals'}</p>
            <p><strong>Tools Needed:</strong> ${getRequiredTools(course, miniTitle).join(', ')}</p>
            <p><strong>Prerequisites:</strong> Completion of previous project components (if any)</p>
        </div>

        <hr style="margin: 30px 0; border: none; border-top: 2px solid #e0e0e0;">

        <div style="text-align: center; background: #fff3e0; padding: 20px; border-radius: 8px; border: 2px solid #ffcc02;">
            <h3 style="color: #e65100; margin: 0 0 10px 0;">Ready to Get Started?</h3>
            <p style="color: #666; margin: 0;">Click the "Guide" button to access the step-by-step implementation tutorial,<br>
            or "Download" to get all the resources offline!</p>
        </div>
    `;
}

function getComponentPurpose(miniTitle) {
    const purposes = {
        'Project Setup & Architecture': 'establishing the foundational structure and development environment',
        'Database Design & Implementation': 'creating efficient data storage and management systems',
        'Core Features Development': 'building the main functionality and business logic',
        'User Interface & Design': 'creating intuitive and responsive user experiences',
        'Testing & Deployment': 'ensuring quality and preparing for production release',
        'Business Analysis & Strategy': 'analyzing market needs and strategic planning',
        'Advanced Programming Techniques': 'implementing sophisticated coding patterns and optimizations'
    };
    return purposes[miniTitle] || 'implementing essential project functionality';
}

function getComponentBenefit(miniTitle) {
    const benefits = {
        'Project Setup & Architecture': 'proper project organization and maintainable code structure',
        'Database Design & Implementation': 'efficient data handling and optimal performance',
        'Core Features Development': 'robust functionality and reliable business logic',
        'User Interface & Design': 'excellent user experience and accessibility',
        'Testing & Deployment': 'bug-free operation and smooth production deployment',
        'Business Analysis & Strategy': 'strategic clarity and market-driven decisions',
        'Advanced Programming Techniques': 'optimized performance and scalable solutions'
    };
    return benefits[miniTitle] || 'successful project implementation';
}

function getComponentFeatures(miniTitle) {
    const features = {
        'Project Setup & Architecture': [
            { icon: '🏗️', name: 'Structure', description: 'Organized project layout' },
            { icon: '⚙️', name: 'Configuration', description: 'Environment setup' },
            { icon: '📁', name: 'Organization', description: 'File management' }
        ],
        'Database Design & Implementation': [
            { icon: '🗄️', name: 'Schema', description: 'Data structure design' },
            { icon: '🔗', name: 'Relations', description: 'Table relationships' },
            { icon: '⚡', name: 'Performance', description: 'Query optimization' }
        ],
        'Core Features Development': [
            { icon: '⚙️', name: 'Logic', description: 'Business rules' },
            { icon: '🔧', name: 'Functions', description: 'Core operations' },
            { icon: '🎯', name: 'Features', description: 'User requirements' }
        ],
        'User Interface & Design': [
            { icon: '🎨', name: 'Design', description: 'Visual appeal' },
            { icon: '📱', name: 'Responsive', description: 'Mobile friendly' },
            { icon: '🖱️', name: 'Interactive', description: 'User engagement' }
        ],
        'Testing & Deployment': [
            { icon: '🧪', name: 'Testing', description: 'Quality assurance' },
            { icon: '🚀', name: 'Deploy', description: 'Production ready' },
            { icon: '🔍', name: 'Debug', description: 'Issue resolution' }
        ]
    };
    return features[miniTitle] || [
        { icon: '💡', name: 'Innovation', description: 'Creative solutions' },
        { icon: '🎯', name: 'Efficiency', description: 'Optimized approach' },
        { icon: '🔧', name: 'Practical', description: 'Real-world application' }
    ];
}

function getRequiredTools(course, miniTitle) {
    if (course === 'mba') {
        return ['Computer', 'Internet', 'Office Suite', 'Project Management Tools'];
    }
    return ['Code Editor', 'Database Software', 'Development Environment', 'Version Control'];
}

function generateResourcesContent(projectTitle, miniTitle, course) {
    return `
ADDITIONAL RESOURCES FOR ${miniTitle.toUpperCase()}
==================================================

📚 LEARNING MATERIALS
---------------------
• Official documentation and tutorials
• Video course recommendations
• Best practices guide
• Industry case studies
• Sample code repositories

🛠️ DEVELOPMENT TOOLS
--------------------
${getRequiredTools(course, miniTitle).map(tool => `• ${tool}`).join('\n')}

📖 REFERENCE LINKS
------------------
• Official documentation: https://docs.example.com
• Community forums: https://community.example.com
• GitHub repositories: https://github.com/examples
• Stack Overflow discussions
• YouTube tutorials and walkthroughs

🎯 PRACTICE EXERCISES
--------------------
• Exercise 1: Basic ${miniTitle} implementation
• Exercise 2: Advanced feature integration
• Exercise 3: Performance optimization
• Exercise 4: Error handling and debugging
• Exercise 5: Real-world application scenarios

📋 CHECKLISTS
-------------
Pre-Development Checklist:
□ Environment setup completed
□ Required tools installed
□ Dependencies configured
□ Project structure created
□ Version control initialized

Development Checklist:
□ Core functionality implemented
□ Error handling added
□ Code documented
□ Unit tests written
□ Integration tests passed

Deployment Checklist:
□ Code reviewed and approved
□ Performance optimized
□ Security checks completed
□ Documentation updated
□ Deployment environment ready

🔧 TROUBLESHOOTING GUIDE
-----------------------
Common Issues and Solutions:

Issue: Environment setup problems
Solution: Check system requirements and dependencies

Issue: Code compilation errors
Solution: Verify syntax and imports

Issue: Performance bottlenecks
Solution: Profile code and optimize critical paths

Issue: Integration failures
Solution: Check API compatibility and data formats

📊 SUCCESS METRICS
------------------
• Completion time: Track your progress
• Code quality: Maintain high standards
• Test coverage: Aim for comprehensive testing
• Performance benchmarks: Meet target metrics
• User feedback: Gather and incorporate feedback

🎓 NEXT STEPS AFTER COMPLETION
------------------------------
1. Integrate with other project components
2. Conduct comprehensive testing
3. Optimize for production deployment
4. Document lessons learned
5. Plan for future enhancements
6. Share knowledge with team members

📞 SUPPORT & COMMUNITY
---------------------
• Join our Discord community: [Link]
• Follow us on social media: [Links]
• Subscribe to our newsletter: [Link]
• Submit feedback and suggestions: [Link]
• Report bugs and issues: [Link]

Remember: Learning is a journey, not a destination. Take your time,
practice regularly, and don't hesitate to ask for help when needed!

Good luck with your ${miniTitle} implementation! 🚀
    `;
}