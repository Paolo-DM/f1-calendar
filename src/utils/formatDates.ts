import dayjs from "dayjs";
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(timezone);
dayjs.extend(utc);

export const formatDate = (date: string) => {
  return dayjs(date).format("DD/MM/YYYY");
};

export const formatTime = (time: string) => {
  return dayjs(time).format("HH:mm");
};

export const formatDateTime = (dateTime: string) => {
  return dayjs(dateTime).format("DD/MM/YYYY, HH:mm");
};

export const formatLocaleDateTime = (dateTime: string) => {
  return dayjs(dateTime).tz(dayjs.tz.guess()).format("DD/MM/YYYY, HH:mm");
};
