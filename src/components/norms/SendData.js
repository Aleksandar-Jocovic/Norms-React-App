export const endWeek = (day, sent, items, action, monthSent, last) => {
  let newNorms = [];

  if (day !== 0 && sent) {
    items.forEach((item) => {
      item.isDataSent = false;
      newNorms.push(item);
    });
    action(newNorms);
  } else if ((day === 0 && !sent) || (last && !monthSent)) {
    items.forEach((item) => {
      let newData = [...item.currentMonth];
      newData.push(item.prog);
      item.currentMonth = newData;
      item.prog = 0;
      item.comp = [false, false, false, false, false, false, false];
      item.isDataSent = true;

      newNorms.push(item);
    });

    action(newNorms);
  }
  return;
};

const date = new Date();
const newYear = date.getMonth === 0;

export const endMonth = (last, sent, items, action) => {
  // endWeek();
  if (!last && sent) {
    const newItems = items.map((item) => {
      item.isMonthDataSent = false;
      return item;
    });
    action(newItems);
  } else if (last && !sent) {
    let temp = [];
    items.forEach((item) => {
      //add month avreage to year
      if (newYear) {
        item.year = [];
      }
      const total = item.currentMonth.reduce((acc, cur) => acc + cur);
      const avg = Math.floor(total / item.currentMonth.length);
      item.year.push(avg);
      temp.push(item);
    });

    const newItems = temp.map((item) => {
      item.lastMonth = item.currentMonth;
      item.currentMonth = [];
      item.isMonthDataSent = true;
      return item;
    });

    action(newItems);
  }

  return;
};
