// Shadcn
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// Next
import Image from "next/image";
import Link from "next/link";
import CustomLink from "./custom-link";

// Internationlization
import { Locale } from "../../i18n.config";
import { getDictionary } from "@/lib/dictionaries";

// Utils
import { navLinks, lateralNavLinks } from "@/utils/properties";

// Icons
import { MenuIcon } from "lucide-react";

type NavigationType = {
  [key: string]: string;
};

export default async function Header({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang);

  const mapNavLinks = (navLink: any) => {
    return (
      <CustomLink
        lang={lang}
        key={navLink.key}
        href={navLink.url}
        className="flex items-center justify-center gap-2 text-white hover:text-gray-400"
      >
        {navLink.icon && <navLink.icon size={24} />}
        {(navigation as NavigationType)[navLink.key]}
      </CustomLink>
    );
  };

  return (
    <header className="z-50 flex h-24 w-full flex-wrap items-center bg-primaryBlue p-4 text-sm text-white sm:flex-nowrap sm:justify-start">
      <nav
        className="mx-auto w-full px-4 sm:flex sm:items-center sm:justify-between md:text-xl"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-x-2 text-xl font-semibold dark:text-white"
          >
            <Image
              src="/images/f1_logo.svg"
              alt="F1 Logo"
              width={128}
              height={32}
            />
            F1Calendar
          </Link>
          <div className="sm:hidden">
            <Sheet>
              <SheetTrigger
                className="hs-collapse-toggle inline-flex items-center justify-center gap-x-2 p-2 text-gray-800 shadow-sm disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-transparent dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                data-hs-collapse="#navbar-image-and-text-2"
                aria-controls="navbar-image-and-text-2"
              >
                <MenuIcon color="white" size={28} />
              </SheetTrigger>
              <SheetContent className="w-2/3 border-none bg-primaryBlue text-white">
                <SheetHeader>
                  <SheetTitle className="mb-8 flex gap-3 border-b-2 pb-4 text-white">
                    <Image
                      src="/images/f1_logo.svg"
                      alt="F1 Logo"
                      width={64}
                      height={16}
                    />
                    F1Calendar
                  </SheetTitle>
                  <SheetDescription>
                    <ol className="flex flex-col items-start gap-8 text-left">
                      {lateralNavLinks.map(mapNavLinks)}
                    </ol>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        <div
          id="navbar-image-and-text-2"
          className="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 sm:block"
        >
          <div className="mt-5 flex flex-col gap-5 sm:mt-0 sm:flex-row sm:items-center sm:justify-end sm:ps-5">
            {navLinks.map(mapNavLinks)}
            {/* <a
              className="font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
              aria-current="page"
            >
              Landing
            </a>
            <a
              className="font-medium hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
            >
              Account
            </a>
            <a
              className="font-medium  hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
            >
              Work
            </a>
            <a
              className="font-medium  hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
            >
              Blog
            </a> */}
          </div>
        </div>
      </nav>
    </header>
  );
}
