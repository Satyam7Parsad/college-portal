// Global Variables and Data
let currentSection = 'home';
let selectedCourse = null;
let selectedYear = null;
let selectedSemester = null;
let selectedSubject = null;

// Course Structure Data
const courseData = {
    bca: {
        name: 'BCA',
        fullName: 'Bachelor of Computer Applications',
        duration: 3,
        subjects: {
            1: {
                1: ['Programming in C', 'Mathematics-I', 'Digital Electronics', 'English Communication', 'Computer Fundamentals'],
                2: ['Programming in C++', 'Mathematics-II', 'Data Structures', 'Database Management', 'Web Technology']
            },
            2: {
                1: ['Java Programming', 'Object Oriented Programming', 'Computer Graphics', 'Statistics', 'Environmental Science'],
                2: ['Software Engineering', 'Computer Networks', 'System Analysis & Design', 'Visual Programming', 'Organizational Behavior']
            },
            3: {
                1: ['Advanced Java', 'Network Programming', 'Mobile Computing', 'E-Commerce', 'Unix/Linux'],
                2: ['Project Work', 'Cyber Security', 'Artificial Intelligence', 'Web Services', 'Internship']
            }
        }
    },
    mca: {
        name: 'MCA',
        fullName: 'Master of Computer Applications',
        duration: 2,
        subjects: {
            1: {
                1: ['Advanced Java Programming', 'Data Structures & Algorithms', 'Database Management Systems', 'Computer Networks', 'Research Methodology'],
                2: ['Software Engineering', 'Web Technologies', 'Operating Systems', 'Theory of Computation', 'Business Communication']
            },
            2: {
                1: ['Machine Learning', 'Cloud Computing', 'Mobile Application Development', 'Data Analytics', 'Cyber Security'],
                2: ['Artificial Intelligence', 'Big Data Analytics', 'IoT Applications', 'Major Project', 'Industrial Training']
            }
        }
    },
    bba: {
        name: 'BBA',
        fullName: 'Bachelor of Business Administration',
        duration: 3,
        subjects: {
            1: {
                1: ['Business Mathematics', 'Principles of Management', 'Business Communication', 'Microeconomics', 'Financial Accounting'],
                2: ['Business Statistics', 'Organizational Behavior', 'Business Environment', 'Macroeconomics', 'Cost Accounting']
            },
            2: {
                1: ['Marketing Management', 'Human Resource Management', 'Financial Management', 'Operations Management', 'Business Research Methods'],
                2: ['Consumer Behavior', 'Training & Development', 'Investment Analysis', 'Supply Chain Management', 'Business Law']
            },
            3: {
                1: ['Strategic Management', 'International Business', 'Entrepreneurship', 'Business Analytics', 'Corporate Governance'],
                2: ['Digital Marketing', 'Change Management', 'Project Management', 'Business Ethics', 'Internship']
            }
        }
    },
    mba: {
        name: 'MBA',
        fullName: 'Master of Business Administration',
        duration: 2,
        subjects: {
            1: {
                1: ['Strategic Management', 'Managerial Economics', 'Financial Accounting for Managers', 'Organizational Behavior', 'Business Research Methods'],
                2: ['Marketing Management', 'Financial Management', 'Operations Management', 'Human Resource Management', 'Business Analytics']
            },
            2: {
                1: ['Advanced Strategic Management', 'International Business', 'Digital Transformation', 'Leadership & Team Management', 'Innovation Management'],
                2: ['Corporate Finance', 'Global Marketing', 'Data Analytics for Business', 'Major Project', 'Management Internship']
            }
        }
    }
};

// Project Ideas Data
const projectIdeas = {
    bca: [
        {
            title: 'Student Management System',
            description: 'Create a comprehensive system to manage student records, attendance, and grades using HTML, CSS, JavaScript, and a backend database.',
            difficulty: 'Basic',
            icon: 'fa-graduation-cap',
            technologies: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'PHP'],
            steps: [
                'Design database schema for students, courses, and grades',
                'Create responsive UI with HTML and CSS',
                'Implement CRUD operations with JavaScript',
                'Connect to database using PHP',
                'Add authentication and validation',
                'Test and deploy the application'
            ]
        },
        {
            title: 'E-commerce Website',
            description: 'Build a fully functional online shopping platform with product catalog, shopping cart, and payment integration.',
            difficulty: 'Intermediate',
            icon: 'fa-shopping-cart',
            technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
            steps: [
                'Set up React.js frontend structure',
                'Create product listing and detail pages',
                'Implement shopping cart functionality',
                'Build admin panel for product management',
                'Integrate payment gateway',
                'Deploy using cloud services'
            ]
        },
        {
            title: 'Library Management System',
            description: 'Develop a system to manage library operations including book inventory, member management, and borrowing records.',
            difficulty: 'Basic',
            icon: 'fa-book',
            technologies: ['Java', 'Swing', 'MySQL', 'JDBC'],
            steps: [
                'Design GUI using Java Swing',
                'Create database for books and members',
                'Implement book search functionality',
                'Add borrowing and return features',
                'Generate reports and analytics',
                'Handle overdue notifications'
            ]
        }
    ],
    mca: [
        {
            title: 'Machine Learning Prediction System',
            description: 'Build a predictive analytics system using machine learning algorithms to forecast trends and patterns in business data.',
            difficulty: 'Advanced',
            icon: 'fa-brain',
            technologies: ['Python', 'TensorFlow', 'Pandas', 'Flask', 'NumPy'],
            steps: [
                'Collect and preprocess data',
                'Explore data using visualization tools',
                'Select and train ML models',
                'Evaluate model performance',
                'Create web interface with Flask',
                'Deploy model for real-time predictions'
            ]
        },
        {
            title: 'Blockchain Voting System',
            description: 'Create a secure and transparent voting system using blockchain technology to ensure election integrity.',
            difficulty: 'Advanced',
            icon: 'fa-vote-yea',
            technologies: ['Solidity', 'Web3.js', 'Ethereum', 'React.js'],
            steps: [
                'Design smart contracts in Solidity',
                'Set up Ethereum development environment',
                'Create voter registration system',
                'Implement voting mechanism',
                'Build web interface with React',
                'Test on testnet before deployment'
            ]
        }
    ],
    bba: [
        {
            title: 'Business Analytics Dashboard',
            description: 'Create an interactive dashboard to visualize business metrics, KPIs, and performance indicators for management decision making.',
            difficulty: 'Intermediate',
            icon: 'fa-chart-bar',
            technologies: ['Power BI', 'Excel', 'SQL', 'Python'],
            steps: [
                'Identify key business metrics',
                'Collect data from various sources',
                'Clean and prepare data for analysis',
                'Create interactive visualizations',
                'Design executive summary reports',
                'Set up automated data refresh'
            ]
        },
        {
            title: 'Digital Marketing Campaign Analysis',
            description: 'Analyze the effectiveness of digital marketing campaigns across multiple channels and provide optimization recommendations.',
            difficulty: 'Basic',
            icon: 'fa-bullhorn',
            technologies: ['Google Analytics', 'Excel', 'Social Media APIs'],
            steps: [
                'Set up tracking for all marketing channels',
                'Collect campaign performance data',
                'Calculate ROI and conversion rates',
                'Identify best performing channels',
                'Create optimization recommendations',
                'Present findings to stakeholders'
            ]
        }
    ],
    mba: [
        {
            title: 'Strategic Business Plan',
            description: 'Develop a comprehensive business plan for a startup including market analysis, financial projections, and growth strategy.',
            difficulty: 'Advanced',
            icon: 'fa-strategy',
            technologies: ['Market Research Tools', 'Financial Modeling', 'Business Canvas'],
            steps: [
                'Conduct thorough market research',
                'Define target customer segments',
                'Analyze competitive landscape',
                'Create financial projections',
                'Develop go-to-market strategy',
                'Present to potential investors'
            ]
        },
        {
            title: 'Supply Chain Optimization',
            description: 'Analyze and optimize supply chain operations to reduce costs, improve efficiency, and enhance customer satisfaction.',
            difficulty: 'Advanced',
            icon: 'fa-truck',
            technologies: ['Supply Chain Software', 'Data Analytics', 'Process Mapping'],
            steps: [
                'Map current supply chain processes',
                'Identify bottlenecks and inefficiencies',
                'Analyze supplier performance',
                'Design optimized supply chain model',
                'Calculate cost savings potential',
                'Implement pilot program'
            ]
        }
    ]
};

// Sample Questions Data
const importantQuestions = {
    bca: {
        1: {
            'Programming in C': [
                {
                    question: 'What is the difference between call by value and call by reference in C?',
                    unit: 'Unit 3',
                    difficulty: 'Medium'
                },
                {
                    question: 'Explain the concept of pointers and their applications.',
                    unit: 'Unit 4',
                    difficulty: 'Hard'
                },
                {
                    question: 'Write a program to implement stack using arrays.',
                    unit: 'Unit 5',
                    difficulty: 'Medium'
                }
            ],
            'Mathematics-I': [
                {
                    question: 'Solve the system of linear equations using matrix method.',
                    unit: 'Unit 2',
                    difficulty: 'Medium'
                },
                {
                    question: 'Find the derivative of composite functions.',
                    unit: 'Unit 3',
                    difficulty: 'Easy'
                }
            ]
        }
    },
    mca: {
        1: {
            'Machine Learning': [
                {
                    question: 'Compare supervised and unsupervised learning algorithms.',
                    unit: 'Unit 1',
                    difficulty: 'Medium'
                },
                {
                    question: 'Explain the working of neural networks and backpropagation.',
                    unit: 'Unit 4',
                    difficulty: 'Hard'
                }
            ]
        }
    }
};

// Events Data
const eventsData = {
    tests: [
        {
            title: 'Programming Mid-term Test',
            course: 'BCA',
            date: '2024-02-15',
            time: '10:00 AM',
            duration: '2 hours',
            venue: 'Computer Lab A'
        },
        {
            title: 'Database Quiz',
            course: 'BCA',
            date: '2024-02-20',
            time: '2:00 PM',
            duration: '1 hour',
            venue: 'Room 101'
        },
        {
            title: 'Machine Learning Assignment Review',
            course: 'MCA',
            date: '2024-02-25',
            time: '11:00 AM',
            duration: '3 hours',
            venue: 'Lab B'
        }
    ],
    exams: [
        {
            title: 'BCA Semester 1 Final Exam',
            course: 'BCA',
            date: '2024-03-10',
            time: '9:00 AM',
            duration: '3 hours',
            venue: 'Main Hall'
        },
        {
            title: 'MBA Strategic Management Exam',
            course: 'MBA',
            date: '2024-03-15',
            time: '2:00 PM',
            duration: '3 hours',
            venue: 'Auditorium'
        }
    ],
    sports: [
        {
            title: 'Inter-College Cricket Tournament',
            course: 'All',
            date: '2024-02-28',
            time: '8:00 AM',
            duration: 'Full Day',
            venue: 'Sports Ground'
        },
        {
            title: 'Basketball Championship',
            course: 'All',
            date: '2024-03-05',
            time: '4:00 PM',
            duration: '4 hours',
            venue: 'Basketball Court'
        }
    ]
};

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupNavigation();
    setupEventListeners();
    renderHomeContent();
    renderAllSections();
    initializeCounterAnimation();
    setupScrollAnimations();
}

// Navigation Setup
function setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const sectionName = this.getAttribute('data-section');
            navigateToSection(sectionName);
        });
    });
}

function navigateToSection(sectionName) {
    // Update navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });

    document.querySelector(`[data-section="${sectionName}"]`).classList.add('active');

    // Update content sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });

    document.getElementById(sectionName).classList.add('active');

    currentSection = sectionName;

    // Reset section states when navigating
    if (sectionName === 'notes') {
        resetNotesSection();
    } else if (sectionName === 'project-ideas') {
        resetProjectsSection();
    } else if (sectionName === 'important-questions') {
        resetQuestionsSection();
    }
}

// Event Listeners Setup
function setupEventListeners() {
    // Course selection for notes
    document.querySelectorAll('#course-selection .course-card').forEach(card => {
        card.addEventListener('click', function() {
            const course = this.getAttribute('data-course');
            selectCourse(course);
        });
    });

    // Project course selection
    document.querySelectorAll('#project-course-selection .course-card').forEach(card => {
        card.addEventListener('click', function() {
            const course = this.getAttribute('data-course');
            showProjects(course);
        });
    });

    // Questions course selection
    document.querySelectorAll('#questions-course-selection .course-card').forEach(card => {
        card.addEventListener('click', function() {
            const course = this.getAttribute('data-course');
            showQuestions(course);
        });
    });

    // Event tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const tab = this.getAttribute('data-tab');
            switchEventTab(tab);
        });
    });

    // Global search
    document.getElementById('global-search').addEventListener('input', function() {
        performGlobalSearch(this.value);
    });
}

// Home Content Rendering
function renderHomeContent() {
    // Home content is static in HTML, no dynamic rendering needed
}

// Notes Section Functions
function resetNotesSection() {
    document.getElementById('course-selection').style.display = 'block';
    document.getElementById('year-selection').style.display = 'none';
    document.getElementById('semester-selection').style.display = 'none';
    document.getElementById('subject-selection').style.display = 'none';
    document.getElementById('unit-selection').style.display = 'none';
    document.getElementById('notes-display').style.display = 'none';

    selectedCourse = null;
    selectedYear = null;
    selectedSemester = null;
    selectedSubject = null;
}

function selectCourse(course) {
    selectedCourse = course;
    const courseInfo = courseData[course];

    document.getElementById('course-selection').style.display = 'none';
    document.getElementById('year-selection').style.display = 'block';

    document.getElementById('current-course').textContent = courseInfo.name;

    // Generate year options
    const yearGrid = document.getElementById('year-grid');
    yearGrid.innerHTML = '';

    for (let year = 1; year <= courseInfo.duration; year++) {
        const yearCard = document.createElement('div');
        yearCard.className = 'year-card';
        yearCard.setAttribute('data-year', year);
        yearCard.innerHTML = `<h3>Year ${year}</h3>`;
        yearCard.addEventListener('click', () => selectYear(year));
        yearGrid.appendChild(yearCard);
    }
}

function selectYear(year) {
    selectedYear = year;

    document.getElementById('year-selection').style.display = 'none';
    document.getElementById('semester-selection').style.display = 'block';

    // Generate semester options (2 semesters per year)
    const semesterGrid = document.getElementById('semester-grid');
    semesterGrid.innerHTML = '';

    for (let semester = 1; semester <= 2; semester++) {
        const semesterCard = document.createElement('div');
        semesterCard.className = 'semester-card';
        semesterCard.setAttribute('data-semester', semester);
        semesterCard.innerHTML = `
            <h3>Semester ${semester}</h3>
            <p>Year ${year} - Semester ${semester}</p>
        `;
        semesterCard.addEventListener('click', () => selectSemester(semester));
        semesterGrid.appendChild(semesterCard);
    }
}

function selectSemester(semester) {
    selectedSemester = semester;
    const courseInfo = courseData[selectedCourse];
    const subjects = courseInfo.subjects[selectedYear][semester];

    document.getElementById('semester-selection').style.display = 'none';
    document.getElementById('subject-selection').style.display = 'block';

    // Generate subject options
    const subjectGrid = document.getElementById('subject-grid');
    subjectGrid.innerHTML = '';

    subjects.forEach(subject => {
        const subjectCard = document.createElement('div');
        subjectCard.className = 'subject-card';
        subjectCard.innerHTML = `
            <h3>${subject}</h3>
            <p>Complete study materials and notes</p>
        `;
        subjectCard.addEventListener('click', () => selectSubject(subject));
        subjectGrid.appendChild(subjectCard);
    });
}

function selectSubject(subject) {
    selectedSubject = subject;

    document.getElementById('subject-selection').style.display = 'none';
    document.getElementById('unit-selection').style.display = 'block';

    document.getElementById('subject-title').textContent = subject;

    // Generate unit options (5 units for each subject)
    const unitGrid = document.getElementById('unit-grid');
    unitGrid.innerHTML = '';

    for (let unit = 1; unit <= 5; unit++) {
        const unitCard = document.createElement('div');
        unitCard.className = 'unit-card';
        unitCard.innerHTML = `<h3>Unit ${unit}</h3>`;
        unitCard.addEventListener('click', () => showNotes(unit));
        unitGrid.appendChild(unitCard);
    }
}

function showNotes(unit) {
    document.getElementById('unit-selection').style.display = 'none';
    document.getElementById('notes-display').style.display = 'block';

    document.getElementById('unit-title').textContent = `${selectedSubject} - Unit ${unit}`;

    // Generate sample notes
    const notesList = document.getElementById('notes-list');
    notesList.innerHTML = '';

    const sampleNotes = [
        {
            title: `${selectedSubject} - Unit ${unit} Lecture Notes`,
            type: 'PDF',
            size: '2.5 MB',
            date: '2024-01-15'
        },
        {
            title: `Unit ${unit} - Practice Problems`,
            type: 'PDF',
            size: '1.8 MB',
            date: '2024-01-12'
        },
        {
            title: `${selectedSubject} - Unit ${unit} Summary`,
            type: 'DOCX',
            size: '985 KB',
            date: '2024-01-10'
        }
    ];

    sampleNotes.forEach(note => {
        const noteItem = document.createElement('div');
        noteItem.className = 'note-item';
        noteItem.innerHTML = `
            <h3>${note.title}</h3>
            <p><strong>Type:</strong> ${note.type}</p>
            <p><strong>Size:</strong> ${note.size}</p>
            <p><strong>Date:</strong> ${note.date}</p>
            <div class="note-actions">
                <button class="note-btn download" onclick="downloadNote('${note.title}')">
                    <i class="fas fa-download"></i> Download
                </button>
                <button class="note-btn" onclick="readNote('${note.title}')">
                    <i class="fas fa-eye"></i> Read
                </button>
            </div>
        `;
        notesList.appendChild(noteItem);
    });
}

// Navigation Functions
function showCourseSelection() {
    resetNotesSection();
}

function showYearSelection() {
    if (selectedCourse) {
        document.getElementById('year-selection').style.display = 'block';
        document.getElementById('semester-selection').style.display = 'none';
        document.getElementById('subject-selection').style.display = 'none';
        document.getElementById('unit-selection').style.display = 'none';
        document.getElementById('notes-display').style.display = 'none';
    }
}

function showSemesterSelection() {
    if (selectedCourse && selectedYear) {
        document.getElementById('semester-selection').style.display = 'block';
        document.getElementById('subject-selection').style.display = 'none';
        document.getElementById('unit-selection').style.display = 'none';
        document.getElementById('notes-display').style.display = 'none';
    }
}

function showSubjectSelection() {
    if (selectedCourse && selectedYear && selectedSemester) {
        document.getElementById('subject-selection').style.display = 'block';
        document.getElementById('unit-selection').style.display = 'none';
        document.getElementById('notes-display').style.display = 'none';
    }
}

function showUnitSelection() {
    if (selectedCourse && selectedYear && selectedSemester && selectedSubject) {
        document.getElementById('unit-selection').style.display = 'block';
        document.getElementById('notes-display').style.display = 'none';
    }
}

// Project Ideas Functions
function resetProjectsSection() {
    document.getElementById('project-course-selection').style.display = 'block';
    document.getElementById('projects-display').style.display = 'none';
}

function showProjects(course) {
    const courseInfo = courseData[course];
    const projects = projectIdeas[course] || [];

    document.getElementById('project-course-selection').style.display = 'none';
    document.getElementById('projects-display').style.display = 'block';

    document.getElementById('project-course-title').textContent = `${courseInfo.name} Projects`;

    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = '';

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <div class="project-header">
                <div class="project-icon">
                    <i class="fas ${project.icon}"></i>
                </div>
                <span class="project-difficulty">${project.difficulty}</span>
            </div>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tech">
                <strong>Technologies:</strong> ${project.technologies.join(', ')}
            </div>
            <button class="note-btn" onclick="viewProjectDetails('${project.title}', '${course}')">
                <i class="fas fa-info-circle"></i> View Details
            </button>
        `;
        projectsGrid.appendChild(projectCard);
    });
}

function showProjectCourseSelection() {
    resetProjectsSection();
}

function viewProjectDetails(projectTitle, course) {
    const project = projectIdeas[course].find(p => p.title === projectTitle);
    if (project) {
        alert(`Project: ${project.title}\n\nSteps:\n${project.steps.map((step, index) => `${index + 1}. ${step}`).join('\n')}`);
    }
}

// Important Questions Functions
function resetQuestionsSection() {
    document.getElementById('questions-course-selection').style.display = 'block';
    document.getElementById('questions-display').style.display = 'none';
}

function showQuestions(course) {
    const courseInfo = courseData[course];

    document.getElementById('questions-course-selection').style.display = 'none';
    document.getElementById('questions-display').style.display = 'block';

    document.getElementById('questions-course-title').textContent = `${courseInfo.name} Questions`;

    // Populate filter dropdowns
    populateQuestionFilters(course);

    // Display all questions for the course
    displayQuestions(course);
}

function populateQuestionFilters(course) {
    const courseInfo = courseData[course];
    const yearFilter = document.getElementById('year-filter');
    const subjectFilter = document.getElementById('subject-filter');

    // Clear existing options
    yearFilter.innerHTML = '<option value="">All Years</option>';
    subjectFilter.innerHTML = '<option value="">All Subjects</option>';

    // Populate years
    for (let year = 1; year <= courseInfo.duration; year++) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = `Year ${year}`;
        yearFilter.appendChild(option);
    }

    // Populate subjects (flatten the semester structure)
    Object.values(courseInfo.subjects).forEach(yearData => {
        Object.values(yearData).forEach(semesterSubjects => {
            semesterSubjects.forEach(subject => {
                const option = document.createElement('option');
                option.value = subject;
                option.textContent = subject;
                subjectFilter.appendChild(option);
            });
        });
    });
}

function displayQuestions(course) {
    const questionsList = document.getElementById('questions-list');
    questionsList.innerHTML = '';

    const courseQuestions = importantQuestions[course] || {};

    Object.keys(courseQuestions).forEach(year => {
        Object.keys(courseQuestions[year]).forEach(subject => {
            const questions = courseQuestions[year][subject];

            questions.forEach((q, index) => {
                const questionItem = document.createElement('div');
                questionItem.className = 'question-item';
                questionItem.innerHTML = `
                    <h3>Question ${index + 1}</h3>
                    <div class="question-meta">
                        <span><i class="fas fa-calendar"></i> Year ${year}</span>
                        <span><i class="fas fa-book"></i> ${subject}</span>
                        <span><i class="fas fa-layer-group"></i> ${q.unit}</span>
                        <span><i class="fas fa-signal"></i> ${q.difficulty}</span>
                    </div>
                    <div class="question-text">${q.question}</div>
                `;
                questionsList.appendChild(questionItem);
            });
        });
    });

    if (questionsList.innerHTML === '') {
        questionsList.innerHTML = '<p>No questions available for this course yet.</p>';
    }
}

function showQuestionsCourseSelection() {
    resetQuestionsSection();
}

// Events Functions
function renderAllSections() {
    renderEvents();
}

function renderEvents() {
    renderEventTab('tests');
    renderEventTab('exams');
    renderEventTab('sports');
}

function renderEventTab(tabType) {
    const eventsList = document.getElementById(`${tabType}-list`);
    const events = eventsData[tabType] || [];

    eventsList.innerHTML = '';

    events.forEach(event => {
        const eventItem = document.createElement('div');
        eventItem.className = 'event-item';
        eventItem.innerHTML = `
            <div class="event-icon">
                <i class="fas ${getEventIcon(tabType)}"></i>
            </div>
            <div class="event-info">
                <h3>${event.title}</h3>
                <p><i class="fas fa-graduation-cap"></i> Course: ${event.course}</p>
                <p><i class="fas fa-clock"></i> ${event.time} (${event.duration})</p>
                <p><i class="fas fa-map-marker-alt"></i> ${event.venue}</p>
            </div>
            <div class="event-date">${formatDate(event.date)}</div>
        `;
        eventsList.appendChild(eventItem);
    });
}

function switchEventTab(tab) {
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-tab="${tab}"]`).classList.add('active');

    // Update tab content
    document.querySelectorAll('.events-tab').forEach(tabContent => {
        tabContent.classList.remove('active');
    });
    document.getElementById(tab).classList.add('active');
}

function getEventIcon(eventType) {
    const icons = {
        tests: 'fa-clipboard-check',
        exams: 'fa-file-alt',
        sports: 'fa-trophy'
    };
    return icons[eventType] || 'fa-calendar';
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric'
    });
}

// Utility Functions
function downloadNote(noteTitle) {
    showToast(`Downloading ${noteTitle}...`, 'success');
    // Simulate download
    setTimeout(() => {
        showToast(`${noteTitle} downloaded successfully!`, 'success');
    }, 2000);
}

function readNote(noteTitle) {
    showToast(`Opening ${noteTitle} for reading...`, 'info');
}

function performGlobalSearch(query) {
    if (query.length < 3) return;

    // Simulate search functionality
    console.log(`Searching for: ${query}`);
    // In a real application, this would search through courses, notes, projects, etc.
}

function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${getToastColor(type)};
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 10000;
        font-weight: 600;
        animation: slideInRight 0.3s ease;
    `;
    toast.textContent = message;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

function getToastColor(type) {
    const colors = {
        success: '#10b981',
        error: '#ef4444',
        warning: '#f59e0b',
        info: '#3b82f6'
    };
    return colors[type] || colors.info;
}

// Counter Animation
function initializeCounterAnimation() {
    const counters = document.querySelectorAll('.counter');
    const observerOptions = {
        threshold: 0.7
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                animateCounter(counter, target);
                observer.unobserve(counter);
            }
        });
    }, observerOptions);

    counters.forEach(counter => {
        observer.observe(counter);
    });
}

function animateCounter(counter, target) {
    const duration = 2000; // 2 seconds
    const startTime = performance.now();
    const startValue = 0;

    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function for smooth animation
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(easeOutCubic * target);

        counter.textContent = current.toLocaleString();

        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            counter.textContent = target.toLocaleString();
        }
    }

    requestAnimationFrame(updateCounter);
}

// Smooth Scrolling Functions
function scrollToStats() {
    document.getElementById('stats-section').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '-50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    const animatedElements = document.querySelectorAll('.stat-card, .quick-card, .floating-card');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// Add CSS for toast animations and scroll animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }

    @keyframes slideInUp {
        from {
            transform: translateY(30px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    .animate-in {
        animation: slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }

    /* Initial state for animated elements */
    .stat-card,
    .quick-card {
        opacity: 0;
        transform: translateY(30px);
    }

    .stat-card.animate-in,
    .quick-card.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);