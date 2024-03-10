// Icons
import { HomeIcon, CalendarIcon, CarIcon, FlagIcon, PersonStandingIcon } from "lucide-react";

const navLinks = [
  {
    key: "home",
    url: "/",
    icon: HomeIcon,
  },
  {
    key: "standings",
    url: "/standings",
    icon: FlagIcon,
  },
  {
    key: "calendar",
    url: "/calendar",
    icon: CalendarIcon,
  },
];

const lateralNavLinks = [
  {
    key: "home",
    url: "/",
    icon: HomeIcon,
  },
  {
    key: "driverStandings",
    url: "/standings/driver-standings",
    icon: PersonStandingIcon,
  },
  {
    key: "constructorStandings",
    url: "/standings/constructor-standings",
    icon: CarIcon,
  },
  {
    key: "calendar",
    url: "/calendar",
    icon: CalendarIcon,
  },
];

export { navLinks, lateralNavLinks };
