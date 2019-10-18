// Get visible expenses

export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(({ createdAt, description }) => {
      const startDateMatch =
        typeof startDate !== "number" || createdAt >= startDate;
      const endDateMatch = typeof endDate !== "number" || createdAt <= endDate;
      const textMatch = description.toLowerCase().includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((expense1, expense2) => {
      switch (sortBy) {
        case "date":
          return expense1.createdAt < expense2.createdAt ? 1 : -1;
        case "amount":
          return expense2.amount - expense1.amount;
        default:
          return 0;
      }
    });
};
