Accounts.onCreateUser((options, user) => {
  console.log('options, user', options, user);

  const scheduleArrays = () => {
    let schedule = [];
    for (let i = 0; i < 52; i++) {
      let week = [0, 0, 0, 0, 0, 0, 0];
      schedule = [...schedule, week];
    }
    return schedule;
  };
  user.schedule = {
    rank: 0,
    section: 0,
    schedule: scheduleArrays()
  };
  return user;
});
