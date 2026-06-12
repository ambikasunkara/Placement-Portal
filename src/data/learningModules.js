// Core Learning Modules - Full structured data

export const learningModules = [
  {
    id: 'aptitude',
    title: 'Aptitude & Reasoning',
    icon: '🧮',
    description: 'Master quantitative aptitude, logical reasoning, verbal ability and data interpretation.',
    color: '#6366f1',
    topics: [
      {
        category: 'Quantitative Aptitude',
        items: [
          { name: 'Percentages', desc: 'Concepts, shortcuts and tricks for percentage-based problems.', level: 'Easy' },
          { name: 'Ratio & Proportion', desc: 'Understanding ratios, proportions and their applications.', level: 'Easy' },
          { name: 'Profit & Loss', desc: 'Cost price, selling price, discount and margin calculations.', level: 'Medium' },
          { name: 'Time & Work', desc: 'Efficiency-based problems, pipes and cisterns.', level: 'Medium' },
          { name: 'Time, Speed & Distance', desc: 'Relative speed, trains, boats and streams.', level: 'Medium' },
          { name: 'Simple & Compound Interest', desc: 'Interest calculation formulas and applications.', level: 'Easy' },
        ],
      },
      {
        category: 'Logical Reasoning',
        items: [
          { name: 'Seating Arrangement', desc: 'Linear and circular arrangement puzzles.', level: 'Medium' },
          { name: 'Puzzles', desc: 'Box-based, floor-based and grid puzzles.', level: 'Hard' },
          { name: 'Syllogisms', desc: 'Statement and conclusion based logic problems.', level: 'Medium' },
          { name: 'Blood Relations', desc: 'Family tree and relationship-based questions.', level: 'Easy' },
          { name: 'Coding-Decoding', desc: 'Letter and number coding patterns.', level: 'Medium' },
          { name: 'Direction Sense', desc: 'Distance and direction based problems.', level: 'Easy' },
        ],
      },
      {
        category: 'Verbal Ability',
        items: [
          { name: 'Grammar', desc: 'Tenses, articles, prepositions and common errors.', level: 'Easy' },
          { name: 'Reading Comprehension', desc: 'Passage-based questions and inference building.', level: 'Medium' },
          { name: 'Vocabulary', desc: 'Synonyms, antonyms and word usage.', level: 'Easy' },
          { name: 'Sentence Correction', desc: 'Identify and correct grammatical errors in sentences.', level: 'Medium' },
          { name: 'Para Jumbles', desc: 'Rearranging sentences to form a coherent paragraph.', level: 'Hard' },
        ],
      },
      {
        category: 'Data Interpretation',
        items: [
          { name: 'Tables', desc: 'Analyzing tabular data and answering derived questions.', level: 'Medium' },
          { name: 'Graphs', desc: 'Line graphs, bar graphs and trend analysis.', level: 'Medium' },
          { name: 'Pie Charts', desc: 'Percentage distribution and proportion analysis.', level: 'Easy' },
          { name: 'Caselets', desc: 'Complex data sets requiring multi-step reasoning.', level: 'Hard' },
        ],
      },
    ],
  },
  {
    id: 'coding-dsa',
    title: 'Coding & DSA Track',
    icon: '💻',
    description: 'Build strong programming fundamentals and master data structures & algorithms.',
    color: '#22c55e',
    topics: [
      {
        category: 'Programming Basics',
        items: [
          { name: 'C Language Syntax', desc: 'Variables, data types, operators and control flow in C.', level: 'Easy' },
          { name: 'Java Fundamentals', desc: 'OOP basics, classes, objects and Java syntax.', level: 'Easy' },
          { name: 'Python Essentials', desc: 'Python syntax, lists, dictionaries and functions.', level: 'Easy' },
          { name: 'Loops & Conditionals', desc: 'For, while, do-while loops and if-else logic.', level: 'Easy' },
          { name: 'Functions & Recursion Basics', desc: 'Function definitions, parameters and call stack basics.', level: 'Medium' },
        ],
      },
      {
        category: 'Data Structures',
        items: [
          { name: 'Arrays', desc: '1D, 2D arrays, traversal and manipulation techniques.', level: 'Easy' },
          { name: 'Linked List', desc: 'Singly, doubly and circular linked list operations.', level: 'Medium' },
          { name: 'Stack', desc: 'LIFO structure, applications in expression evaluation.', level: 'Medium' },
          { name: 'Queue', desc: 'FIFO structure, circular queue and deque.', level: 'Medium' },
          { name: 'Hashing', desc: 'Hash maps, collision handling and use cases.', level: 'Medium' },
        ],
      },
      {
        category: 'Algorithms',
        items: [
          { name: 'Sorting Algorithms', desc: 'Bubble, merge, quick and heap sort with complexity analysis.', level: 'Medium' },
          { name: 'Searching Algorithms', desc: 'Linear search, binary search and variants.', level: 'Easy' },
          { name: 'Recursion', desc: 'Recursive problem solving and base case design.', level: 'Medium' },
          { name: 'Backtracking', desc: 'N-Queens, Sudoku solver and subset generation.', level: 'Hard' },
        ],
      },
      {
        category: 'Advanced DSA',
        items: [
          { name: 'Trees', desc: 'Binary trees, BST, traversals and balancing.', level: 'Hard' },
          { name: 'Graphs', desc: 'BFS, DFS, shortest path and graph representations.', level: 'Hard' },
          { name: 'Dynamic Programming', desc: 'Memoization, tabulation and classic DP problems.', level: 'Hard' },
          { name: 'Tries', desc: 'Prefix trees for efficient string searching.', level: 'Hard' },
        ],
      },
      {
        category: 'Practice Platforms',
        items: [
          { name: 'LeetCode-Style Problems', desc: 'Curated set of problems mimicking LeetCode patterns.', level: 'Medium' },
          { name: 'CodeChef-Style Contests', desc: 'Timed contest practice for competitive programming.', level: 'Hard' },
        ],
      },
    ],
  },
  {
    id: 'core-cs',
    title: 'Core CS Subjects',
    icon: '🖥️',
    description: 'Strengthen fundamentals in OS, DBMS, Networks, OOP and Software Engineering.',
    color: '#f59e0b',
    topics: [
      {
        category: 'Operating Systems',
        items: [
          { name: 'Process Management', desc: 'Process states, PCB and context switching.', level: 'Medium' },
          { name: 'Threads', desc: 'Multithreading, concurrency and thread lifecycle.', level: 'Medium' },
          { name: 'CPU Scheduling', desc: 'FCFS, SJF, Round Robin and priority scheduling.', level: 'Medium' },
          { name: 'Deadlocks', desc: 'Deadlock conditions, prevention and avoidance.', level: 'Hard' },
          { name: 'Memory Management', desc: 'Paging, segmentation and virtual memory.', level: 'Medium' },
        ],
      },
      {
        category: 'DBMS',
        items: [
          { name: 'SQL Queries', desc: 'SELECT, JOIN, GROUP BY and subqueries.', level: 'Easy' },
          { name: 'Normalization', desc: '1NF, 2NF, 3NF and BCNF concepts.', level: 'Medium' },
          { name: 'Transactions', desc: 'ACID properties and concurrency control.', level: 'Medium' },
          { name: 'Indexing', desc: 'B-Trees, hashing indexes and query optimization.', level: 'Hard' },
        ],
      },
      {
        category: 'Computer Networks',
        items: [
          { name: 'TCP/IP', desc: 'Protocol stack, addressing and connection handling.', level: 'Medium' },
          { name: 'HTTP & HTTPS', desc: 'Request-response cycle, methods and status codes.', level: 'Easy' },
          { name: 'Routing', desc: 'Routing algorithms and protocols.', level: 'Hard' },
          { name: 'OSI Model', desc: 'Seven layers and their functions.', level: 'Medium' },
        ],
      },
      {
        category: 'OOP Concepts',
        items: [
          { name: 'Inheritance', desc: 'Single, multiple and hierarchical inheritance.', level: 'Easy' },
          { name: 'Polymorphism', desc: 'Method overloading and overriding.', level: 'Medium' },
          { name: 'Encapsulation', desc: 'Data hiding and access modifiers.', level: 'Easy' },
          { name: 'Abstraction', desc: 'Abstract classes and interfaces.', level: 'Medium' },
        ],
      },
      {
        category: 'Software Engineering',
        items: [
          { name: 'SDLC', desc: 'Software development life cycle phases and models.', level: 'Easy' },
          { name: 'Agile Methodology', desc: 'Scrum, sprints and agile principles.', level: 'Medium' },
          { name: 'Software Testing', desc: 'Unit, integration and system testing types.', level: 'Medium' },
        ],
      },
    ],
  },
  {
    id: 'ai-emerging-tech',
    title: 'AI & Emerging Tech',
    icon: '🤖',
    description: 'Explore AI, ML, blockchain, cloud computing and generative AI fundamentals.',
    color: '#ec4899',
    topics: [
      {
        category: 'Artificial Intelligence',
        items: [
          { name: 'AI Basics', desc: 'Introduction to intelligent agents and search algorithms.', level: 'Easy' },
          { name: 'Knowledge Representation', desc: 'Logic-based representation and reasoning.', level: 'Medium' },
        ],
      },
      {
        category: 'Machine Learning',
        items: [
          { name: 'ML Fundamentals', desc: 'Supervised, unsupervised and reinforcement learning.', level: 'Medium' },
          { name: 'Regression & Classification', desc: 'Common ML algorithms and evaluation metrics.', level: 'Medium' },
          { name: 'Neural Networks', desc: 'Basics of perceptrons and deep learning.', level: 'Hard' },
        ],
      },
      {
        category: 'Blockchain',
        items: [
          { name: 'Blockchain Concepts', desc: 'Distributed ledgers, blocks and consensus mechanisms.', level: 'Medium' },
          { name: 'Smart Contracts', desc: 'Self-executing contracts and use cases.', level: 'Hard' },
        ],
      },
      {
        category: 'Cloud Computing',
        items: [
          { name: 'AWS Basics', desc: 'EC2, S3, IAM and core AWS services overview.', level: 'Medium' },
          { name: 'Cloud Deployment Models', desc: 'Public, private, hybrid and multi-cloud.', level: 'Easy' },
        ],
      },
      {
        category: 'Generative AI',
        items: [
          { name: 'Generative AI Basics', desc: 'LLMs, diffusion models and generative architectures.', level: 'Medium' },
          { name: 'Prompt Engineering', desc: 'Techniques for designing effective AI prompts.', level: 'Easy' },
        ],
      },
    ],
  },
  {
    id: 'placement-prep',
    title: 'Placement Preparation',
    icon: '🎯',
    description: 'Resume building, HR interviews, group discussions and mock interview banks.',
    color: '#0ea5e9',
    topics: [
      {
        category: 'Resume Building',
        items: [
          { name: 'ATS Optimization Rules', desc: 'Formatting and keyword tips to pass ATS filters.', level: 'Easy' },
          { name: 'Resume Structure', desc: 'Sections, ordering and content best practices.', level: 'Easy' },
        ],
      },
      {
        category: 'HR Interview Questions',
        items: [
          { name: 'Tell Me About Yourself', desc: 'Crafting a compelling self-introduction.', level: 'Easy' },
          { name: 'Strengths & Weaknesses', desc: 'Framing personal traits positively for interviews.', level: 'Easy' },
          { name: 'Why Should We Hire You', desc: 'Structuring value-proposition answers.', level: 'Medium' },
        ],
      },
      {
        category: 'Group Discussion',
        items: [
          { name: 'GD Topics - Tech', desc: 'AI impact on jobs, automation and tech ethics topics.', level: 'Medium' },
          { name: 'GD Topics - General', desc: 'Social, economic and current affairs topics.', level: 'Medium' },
        ],
      },
      {
        category: 'Mock Interview Bank',
        items: [
          { name: 'Technical Question Bank', desc: 'Commonly asked technical interview questions.', level: 'Hard' },
          { name: 'Behavioral Question Bank', desc: 'STAR method based behavioral questions.', level: 'Medium' },
        ],
      },
    ],
  },
]

export const getModuleById = (id) => learningModules.find((m) => m.id === id)
