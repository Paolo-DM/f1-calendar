import React from "react";
import Image from "next/image";
import CustomLink from "./custom-link";
import { Locale } from "../../i18n.config";
import { navLinks, footerIcons } from "@/utils/properties";
import { getDictionary } from "@/lib/dictionaries";
import { GitBranchIcon, Github, GithubIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";

type NavigationType = {
  [key: string]: string;
};

async function Footer({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang);

  const mapFooterLinks = (navLink: any, index: number) => {
    return (
      <li className="relative inline-block pe-8 before:absolute before:end-3 before:top-1/2 before:-translate-y-1/2 before:text-gray-300 before:content-['/'] last:pe-0 last-of-type:before:hidden dark:before:text-gray-600">
        <CustomLink
          lang={lang}
          key={index}
          href={navLink.url}
          className="text-white hover:text-gray-400"
        >
          {(navigation as NavigationType)[navLink.key]}
        </CustomLink>
      </li>
    );
  };

  const mapSocialIcons = (icon: any, index: number) => {
    return (
      <Link
        href={icon.url}
        key={index}
        className="inline-flex size-8 items-center justify-center gap-x-2 rounded-full border border-transparent text-sm font-semibold text-gray-500 hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      >
        <icon.icon className="text-white hover:text-gray-400" />
      </Link>
    );
  };

  return (
    <footer className="w-full bg-primaryBlue px-4 py-6 text-white sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 items-center gap-5 md:grid-cols-3 text-center ">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <CustomLink
            href="/"
            lang={lang}
            className="flex gap-2 text-xl justify-center md:justify-start font-semibold dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            <Image
              src="images/f1_logo.svg"
              alt="F1 Logo"
              width={128}
              height={32}
            />
            F1Calendar
          </CustomLink>
          {navigation.description}
        </div>

        <ul className="md:text-center">{navLinks.map(mapFooterLinks)}</ul>

        <div className="space-x-2 md:text-end">
          {footerIcons.map(mapSocialIcons)}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
