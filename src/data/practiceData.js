// Practice System mock data

export const dailyPracticeQuestions = [
  { id: 1, question: 'If 20% of a number is 50, what is the number?', options: ['200', '250', '300', '150'], answer: '250', difficulty: 'Easy', topic: 'Percentages' },
  { id: 2, question: 'A train running at 60 km/h crosses a pole in 9 seconds. What is the length of the train?', options: ['150 m', '180 m', '200 m', '120 m'], answer: '150 m', difficulty: 'Medium', topic: 'Time, Speed & Distance' },
  { id: 3, question: 'What is the time complexity of binary search?', options: ['O(n)', 'O(log n)', 'O(n^2)', 'O(1)'], answer: 'O(log n)', difficulty: 'Easy', topic: 'Algorithms' },
  { id: 4, question: 'Which data structure uses LIFO order?', options: ['Queue', 'Stack', 'Linked List', 'Tree'], answer: 'Stack', difficulty: 'Easy', topic: 'Data Structures' },
  { id: 5, question: 'In DBMS, which normal form removes transitive dependency?', options: ['1NF', '2NF', '3NF', 'BCNF'], answer: '3NF', difficulty: 'Medium', topic: 'DBMS' },
  { id: 6, question: 'Choose the correctly punctuated sentence.', options: ['Its a nice day.', "It's a nice day.", 'Its an nice day.', "Its' a nice day."], answer: "It's a nice day.", difficulty: 'Easy', topic: 'Grammar' },
  { id: 7, question: 'Find the odd one out: Apple, Banana, Carrot, Mango', options: ['Apple', 'Banana', 'Carrot', 'Mango'], answer: 'Carrot', difficulty: 'Easy', topic: 'Logical Reasoning' },
  { id: 8, question: 'Which protocol operates at the application layer?', options: ['TCP', 'IP', 'HTTP', 'ARP'], answer: 'HTTP', difficulty: 'Medium', topic: 'Computer Networks' },
  { id: 9, question: 'Which sorting algorithm has the best average case of O(n log n) and is stable?', options: ['Quick Sort', 'Merge Sort', 'Bubble Sort', 'Selection Sort'], answer: 'Merge Sort', difficulty: 'Medium', topic: 'Algorithms' },
  { id: 10, question: 'A graph with no cycles and connected is called a:', options: ['Tree', 'Cycle Graph', 'Bipartite Graph', 'Complete Graph'], answer: 'Tree', difficulty: 'Hard', topic: 'Graphs' },
  { id: 11, question: 'What does ACID stand for in DBMS transactions?', options: ['Atomicity, Consistency, Isolation, Durability', 'Access, Control, Identity, Data', 'Atomic, Concurrent, Isolated, Data', 'None of these'], answer: 'Atomicity, Consistency, Isolation, Durability', difficulty: 'Medium', topic: 'DBMS' },
  { id: 12, question: 'If A is the brother of B, and B is the sister of C, then A is C\'s:', options: ['Father', 'Brother', 'Uncle', 'Cousin'], answer: 'Brother', difficulty: 'Medium', topic: 'Blood Relations' },
  { id: 13, question: 'Which keyword is used to inherit a class in Java?', options: ['implements', 'extends', 'inherits', 'super'], answer: 'extends', difficulty: 'Easy', topic: 'OOP Concepts' },
  { id: 14, question: 'A shopkeeper marks an item 20% above cost price and gives a 10% discount. What is his profit %?', options: ['8%', '10%', '12%', '6%'], answer: '8%', difficulty: 'Hard', topic: 'Profit & Loss' },
  { id: 15, question: 'Which of the following is not a valid HTTP method?', options: ['GET', 'POST', 'FETCH', 'DELETE'], answer: 'FETCH', difficulty: 'Easy', topic: 'Computer Networks' },
]

export const mockTests = [
  {
    id: 'tcs',
    name: 'TCS Mock Test',
    company: 'TCS',
    duration: 60,
    totalQuestions: 30,
    sections: ['Quantitative Aptitude', 'Logical Reasoning', 'Verbal Ability', 'Coding'],
    difficulty: 'Medium',
    description: 'Simulates the TCS NQT pattern with aptitude, reasoning, verbal and coding sections.',
  },
  {
    id: 'infosys',
    name: 'Infosys Mock Test',
    company: 'Infosys',
    duration: 75,
    totalQuestions: 35,
    sections: ['Quantitative Aptitude', 'Logical Reasoning', 'Verbal Ability', 'Pseudocode', 'Coding'],
    difficulty: 'Medium',
    description: 'Covers Infosys InfyTQ style questions including pseudocode and programming concepts.',
  },
  {
    id: 'wipro',
    name: 'Wipro Mock Test',
    company: 'Wipro',
    duration: 60,
    totalQuestions: 28,
    sections: ['Quantitative Aptitude', 'Verbal Ability', 'Coding', 'Essay Writing'],
    difficulty: 'Easy',
    description: 'Wipro NLTH style mock test with verbal, aptitude and coding rounds.',
  },
  {
    id: 'full-length',
    name: 'Full-Length Placement Test',
    company: 'General',
    duration: 120,
    totalQuestions: 60,
    sections: ['Aptitude', 'Reasoning', 'Verbal', 'DSA', 'Core CS'],
    difficulty: 'Hard',
    description: 'Comprehensive test covering all placement preparation areas for final readiness check.',
  },
]

export const aiFeedback = {
  weakTopics: [
    { topic: 'Dynamic Programming', accuracy: 42, suggestion: 'Revise memoization and tabulation patterns; practice classic problems like Knapsack and LCS.' },
    { topic: 'Data Interpretation - Caselets', accuracy: 50, suggestion: 'Practice multi-step caselet problems daily to build speed and accuracy.' },
    { topic: 'Computer Networks - Routing', accuracy: 55, suggestion: 'Focus on routing algorithms and protocol comparisons with diagrams.' },
  ],
  strongTopics: [
    { topic: 'Percentages', accuracy: 92 },
    { topic: 'OOP Concepts', accuracy: 88 },
    { topic: 'Arrays', accuracy: 85 },
  ],
  errorExplanations: [
    { question: 'Binary Search Complexity', yourAnswer: 'O(n)', correctAnswer: 'O(log n)', explanation: 'Binary search halves the search space each iteration, leading to logarithmic time complexity, not linear.' },
    { question: '3NF Definition', yourAnswer: '2NF', correctAnswer: '3NF', explanation: '3NF removes transitive dependencies between non-key attributes, which 2NF does not address.' },
  ],
}
