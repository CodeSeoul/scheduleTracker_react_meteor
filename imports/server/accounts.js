Accounts.onCreateUser((options, user) => {
  console.log('options', options);
  console.log('user', user);

  const scheduleArrays = () => {
    let schedule = [];
    for (let i = 0; i < 52; i++) {
      let week = [0, 0, 0, 0, 0, 0, 0];
      schedule = [...schedule, week];
    }
    return schedule;
  };
  user.info = {
    rank: 0,
    section: 0,
    schedule: scheduleArrays()
  };
  return user;
});
