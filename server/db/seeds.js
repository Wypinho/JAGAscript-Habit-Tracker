use habit_tracker;
db.dropDatabase();

db.habits.insertMany([
  {
    name: "Drink 3l Water",
    points: 20,
    timeStamps: ["2020-01-20", "2020-01-25", "2020-01-26", "2020-01-27"],
    period: "Daily"
  },
  {
    name: "Walk To Work",
    points: 25,
    timeStamps: ["2020-01-28"],
    period: "Daily"
  },
  {
    name: "Buy Takeaway For Dinner",
    points: -15,
    timeStamps: [],
    period: "Daily"
  },
  {
    name: "Play Football",
    points: 30,
    timeStamps: ["2020-01-22"],
    period: "Weekly"
  },
  {
    name: "Climb a Mountain",
    points: 50,
    timeStamps: ["2019-12-20"],
    period: "Monthly"
  }
]);

db.rewards.insertMany([
  {
    name: "Eat a Pizza"
  },
  {
    name: "Night Out"
  },
  {
    name: "Go On Holiday"
  }
]);
