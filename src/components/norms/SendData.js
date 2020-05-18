export const endWeek = (day, sent, users, currentUser, action, monthSent, last) => {

  if (day !== 0 && sent) {
    console.log("if endwees")
    let usersUpdated = []

    users.forEach(user => {
      if (user.userId === currentUser) {
        let normsUpdated = user.norms.map((norm) => {
          norm.isDataSent = false;
          return norm;
        });
        user.norms = normsUpdated
        usersUpdated.push(user);
      } else usersUpdated.push(user)
    })

    console.log("usersUpdated", usersUpdated)
    action(usersUpdated)

  } else if ((day === 0 && !sent) || (last && !monthSent)) {
    console.log('elseif endweek')
    let usersUpdated = []

    users.forEach(user => {
      if (user.userId === currentUser) {

        let normsUpdated = user.norms.map((norm) => {
          let newData = [...norm.currentMonth];
          newData.push(norm.prog);
          norm.currentMonth = newData;
          norm.prog = 0;
          norm.comp = [false, false, false, false, false, false, false];
          norm.isDataSent = true;
          return norm
        })
        user.norms = normsUpdated
        usersUpdated.push(user)
      } else usersUpdated.push(user)
    });

    action(usersUpdated);

  };
  console.log('end week is being run')
  return;
}


const date = new Date();
const newYear = date.getMonth === 0;

export const endMonth = (last, sent, users, currentUser, action) => {
  // endWeek();
  if (!last && sent) {
    let usersUpdated = [];
    users.forEach(user => {
      if (user.userId === currentUser) {
        const normsUpdated = user.norms.map((norm) => {
          norm.isMonthDataSent = false;
          return norm;
        });
        user.norms = normsUpdated
        usersUpdated.push(user)
      } else usersUpdated.push(user)
    })
    action(usersUpdated)
  } else if (last && !sent) {

    let usersUpdated = [];

    users.forEach(user => {
      if (user.userId === currentUser) {
        //all weeks values to calculate avg
        let temp = [];
        user.norms.forEach((norm) => {
          //year part
          if (newYear) {
            norm.year = [];
          }
          const total = norm.currentMonth.reduce((acc, cur) => acc + cur);
          const avg = Math.floor(total / norm.currentMonth.length);
          norm.year.push(avg);
          temp.push(norm);
        });

        const normsUpdated = temp.map((item) => {
          //month part
          item.lastMonth = item.currentMonth;
          item.currentMonth = [];
          item.isMonthDataSent = true;
          return item;
        });
        user.norms = normsUpdated;
        usersUpdated.push(user)
      } else usersUpdated.push(user)
    })
    action(usersUpdated);
  }
  return;
};
