const roles = [
  "Frontend Engineer",
  "Backend Engineer",
  "Blockchain Engineer",
  "AI Engineer",
  "Full Stack Developer",
];

const skills = [
  ["React", "Next.js", "Tailwind"],
  ["Node.js", "MongoDB", "Express"],
  ["Solidity", "Hardhat", "Rust"],
  ["Python", "FastAPI", "TensorFlow"],
  ["Flutter", "Firebase", "Dart"],
];

const cities = [
  "Delhi",
  "Mumbai",
  "Bengaluru",
  "Hyderabad",
  "Pune",
  "Noida",
  "Chennai",
];

const builders = Array.from({ length: 5000 }, (_, index) => ({
  id: index + 1,
  name: `Builder ${index + 1}`,
  role: roles[index % roles.length],
  location: cities[index % cities.length],
  skills: skills[index % skills.length],
  avatar: `https://api.dicebear.com/9.x/avataaars/svg?seed=Builder${index + 1}`,
}));

export default builders;