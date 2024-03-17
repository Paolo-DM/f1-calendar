//Next.js
import Image from "next/image";

// Components

// Internationalization
import { getDictionary } from "../../lib/dictionaries";
import { Locale } from "../../../i18n.config";

// Components
import ScheduleCarousel from "@/components/schedule-carousel";

// Utils
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
} from "@/utils/typhography";

// schedule fetch url: `https://ergast.com/api/f1/current.json`
async function getSchedule() {
  const response = await fetch(`https://ergast.com/api/f1/2024.json`);

  if (!response.ok) {
    throw new Error("Failed to fetch schedule");
  }

  const data = await response.json();
  return data;
}

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const scheduleData = await getSchedule();
  console.log("scheduleData", scheduleData);
  const { page } = await getDictionary(lang);

  return (
    <main className="flex flex-col items-center justify-center">
      <TypographyH1 classNames="mt-10">F1 schedule 2024 </TypographyH1>
      <p className="text-center">
        2024 FIA FORMULA ONE WORLD CHAMPIONSHIP™ RACE CALENDAR
      </p>
      <ScheduleCarousel scheduleData={scheduleData} />
    </main>
  );
}
