export function getCountFromDate(date) {
  // Parse the input date string to a Date object
  const startDate = new Date(date);

  // Get the current date
  const currentDate = new Date();

  // Calculate the difference in milliseconds between the current date and the input date
  const differenceInMillis = currentDate - startDate;

  // Convert milliseconds to years, months, and remaining days
  const years = Math.floor(differenceInMillis / (1000 * 60 * 60 * 24 * 365));
  let months = Math.floor(
    (differenceInMillis % (1000 * 60 * 60 * 24 * 365)) /
      (1000 * 60 * 60 * 24 * 30)
  );
  const remainingDays = Math.floor(
    (differenceInMillis % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
  );

  // If remaining days are less than a month, consider it as a month
  if (remainingDays > 0 && remainingDays < 30) {
    months += 1;
  }

  // Construct the result string
  let result = "";
  if (years > 0) {
    result += `${years} Year${years > 1 ? "s" : ""} `;
  }
  if (months > 0) {
    result += `${months} Month${months > 1 ? "s" : ""}`;
  }

  return result.trim(); // Trim any extra spaces at the end
}

export const durationBetweenDates = (start, end) => {
  // Use calendar-aware difference to avoid month rounding issues.
  const startDate = new Date(start);
  const endDate = new Date(end);
  if (isNaN(startDate) || isNaN(endDate)) return "";

  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();
  const dayDiff = endDate.getDate() - startDate.getDate();

  // Count the end month as part of the duration when the end day is
  // the same or after the start day (inclusive counting).
  if (dayDiff >= 0) {
    months += 1;
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  // Normalize months >= 12 into years
  if (months >= 12) {
    years += Math.floor(months / 12);
    months = months % 12;
  }

  let result = "";
  if (years > 0) {
    result += `${years} Year${years > 1 ? "s" : ""} `;
  }
  if (months > 0) {
    result += `${months} Month${months > 1 ? "s" : ""}`;
  }

  return result.trim();
};

export const formatMonthYear = (dateStr) => {
  if (!dateStr) return "Present";
  const d = new Date(dateStr);
  if (isNaN(d)) return "";
  const formatted = d.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
  // Convert "Apr 2024" -> "Apr, 2024"
  return formatted.replace(" ", ", ");
};
