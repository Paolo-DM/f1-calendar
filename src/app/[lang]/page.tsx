//Next.js
import Image from "next/image";

// Components

// Internationalization
import { getDictionary } from "../../lib/dictionaries";
import { Locale } from "../../../i18n.config";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  console.log("lang", lang);
  const { page } = await getDictionary(lang);
  
  return (
    <main className="">
      <h1>F1 Calendar</h1>
    </main>
  );
}
