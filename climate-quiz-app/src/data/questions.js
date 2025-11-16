const questions = [
  {
    category: "Transportation",
    text: "How do you usually get to school?",
    options: [
      { label: "A", text: "Walk or bike. Who needs a gym when you have your legs?", points: 1 },
      { label: "B", text: "School bus or public transportation. It gets me there, and I can zone out.", points: 2 },
      { label: "C", text: "Dropped off by car with my siblings. We call it “the family Uber.”", points: 3 },
      { label: "D", text: "Dropped off by car, just me. My parents are basically my chauffeur.", points: 4 },
    ],
  },
  {
    category: "Transportation",
    text: "How often do you travel long distances for vacations (like by plane or long road trips)?",
    options: [
      { label: "A", text: "Never.", points: 1 },
      { label: "B", text: "Once a year. It’s nice to get away sometimes.", points: 2 },
      { label: "C", text: "A couple of times a year. Travel is life.", points: 3 },
      { label: "D", text: "More than that. If I am not on a plane, am I even living?", points: 4 },
    ],
  },
  {
    category: "Food Choices",
    text: "How often do you eat meat or fast food?",
    options: [
      { label: "A", text: "Rarely. I’m all about home-cooked meals and veggies.", points: 1 },
      { label: "B", text: "A few times a week. It’s a treat, not a habit.", points: 2 },
      { label: "C", text: "Most days. My fries-to-veggies ratio is… questionable.", points: 3 },
      { label: "D", text: "Every day. If there’s no burger, it’s not a meal.", points: 4 },
    ],
  },
  {
    category: "Food Choices",
    text: "What happens to leftovers at your house?",
    options: [
      { label: "A", text: "We eat them or compost. Nothing goes to waste.", points: 1 },
      { label: "B", text: "We eat them eventually, unless they get forgotten in the fridge.", points: 2 },
      { label: "C", text: "They often get thrown away, but hey, out of sight, out of mind.", points: 3 },
      { label: "D", text: "Leftovers? What leftovers?", points: 4 },
    ],
  },
  {
    category: "Consumption",
    text: "How often do you buy new clothes, gadgets, or accessories?",
    options: [
      { label: "A", text: "Only when I truly need them. I am all about “less is more.”", points: 1 },
      { label: "B", text: "A few times a year. Gotta stay stylish, but responsibly.", points: 2 },
      { label: "C", text: "Monthly. Online shopping is my kryptonite.", points: 3 },
      { label: "D", text: "Weekly. If it’s trending, I need it now.", points: 4 },
    ],
  },
  {
    category: "Consumption",
    text: "What do you do with stuff you no longer need (like old clothes or school supplies)?",
    options: [
      { label: "A", text: "Donate or recycle. Someone else can use it.", points: 1 },
      { label: "B", text: "Repurpose or save it for later. DIY projects are fun.", points: 2 },
      { label: "C", text: "It usually sits around in my room, collecting dust.", points: 3 },
      { label: "D", text: "Toss it in the trash. It’s easier that way.", points: 4 },
    ],
  },
  {
    category: "Energy Use",
    text: "Do you turn off lights, chargers, or devices when you’re not using them?",
    options: [
      { label: "A", text: "Always. I am the light police at home.", points: 1 },
      { label: "B", text: "Most of the time. I try to remember.", points: 2 },
      { label: "C", text: "Sometimes. It depends on my mood.", points: 3 },
      { label: "D", text: "Rarely. Leaving stuff on is no big deal, right?", points: 4 },
    ],
  },
  {
    category: "Energy Use",
    text: "How energy-efficient is your home?",
    options: [
      { label: "A", text: "We have energy-efficient appliances and LED lights everywhere.", points: 1 },
      { label: "B", text: "We try to be energy-conscious, but it’s not perfect.", points: 2 },
      { label: "C", text: "I am not really sure, but probably not great.", points: 3 },
      { label: "D", text: "Energy-efficient? I don’t think that’s a priority.", points: 4 },
    ],
  },
];

export default questions;
