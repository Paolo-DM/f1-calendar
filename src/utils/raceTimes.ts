import { formatLocaleDateTime } from "./formatDates";

type sessionData = {
  date: string;
  time: string;
};

export function getRaceTimes(sessionData: sessionData) {
  if (!sessionData || !sessionData.date || !sessionData.time) return;
  return `${formatLocaleDateTime(sessionData?.date + " " + sessionData?.time)}`;
}
