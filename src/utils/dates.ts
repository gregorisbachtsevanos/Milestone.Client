export const remainingDays = (deadline: string): string => {
  const now = new Date();
  const deadlineDate = new Date(deadline);

  // Calculate the difference in milliseconds
  const timeDiff = deadlineDate.getTime() - now.getTime();

  // Convert milliseconds to days
  const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

  // Handle cases where it's more than 3 months
  const monthsDiff = Math.floor(daysDiff / 30); // Rough estimate for months

  if (monthsDiff >= 3) {
    return `${monthsDiff} months left`;
  } else if (daysDiff > 0) {
    return `${daysDiff} days left`;
  } else {
    return "Deadline has passed";
  }
};
