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

    // Sample notes for demonstration
    const sampleNotes = [
        {
            title: `${selectedUnit} - Lecture Notes`,
            content: `Comprehensive lecture notes covering all topics in ${selectedUnit}. Includes detailed explanations, examples, and practice problems.`,
            type: 'PDF'
        },
        {
            title: `${selectedUnit} - Practice Questions`,
            content: `Set of practice questions with solutions to help you prepare for examinations and improve understanding.`,
            type: 'PDF'
        },
        {
            title: `${selectedUnit} - Video Lectures`,
            content: `Recorded video lectures explaining key concepts with visual demonstrations and real-world examples.`,
            type: 'Video'
        }
    ];

    sampleNotes.forEach(note => {
        const noteCard = document.createElement('div');
        noteCard.className = 'note-card';
        noteCard.innerHTML = `
            <div class="note-title">${note.title}</div>
            <div class="note-content">${note.content}</div>
            <div class="note-actions">
                <button class="note-btn btn-download">
                    <i class="fas fa-download"></i> Download ${note.type}
                </button>
                <button class="note-btn btn-view">
                    <i class="fas fa-eye"></i> View Online
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
                // Expand
                descElement.innerHTML = project.description;
                descElement.className = 'project-description expanded';
                this.textContent = 'Read Less';
                this.setAttribute('data-expanded', 'true');
            }
        });
    });
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

    sampleQuestions.forEach(q => {
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
    const modal = document.getElementById('loginModal');
    if (e.target === modal) {
        hideLoginModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        hideLoginModal();
    }
});