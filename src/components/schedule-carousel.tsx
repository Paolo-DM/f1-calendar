// Shadcn components
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

// Next
import Image from "next/image";

// Utils
import { getRaceTimes } from "@/utils/raceTimes";
import { formatLocaleDateTime } from "@/utils/formatDates";
import Link from "next/link";

type SessionTimes = {
  date: string;
  time: string;
};

type Race = {
  season: string;
  round: string;
  url: string;
  raceName: string;
  Circuit: {
    circuitId: string;
    url: string;
    circuitName: string;
    Location: {
      lat: string;
      long: string;
      locality: string;
      country: string;
    };
  };
  date: string;
  time: string;
  FirstPractice: SessionTimes;
  SecondPractice: SessionTimes;
  ThirdPractice: SessionTimes;
  Qualifying: SessionTimes;
};

type ScheduleData = {
  MRData: {
    xmlns: string;
    series: string;
    url: string;
    limit: string;
    offset: string;
    total: string;
    RaceTable: {
      season: string;
      Races: Race[];
    };
  };
};

type ScheduleDataProps = {
  scheduleData: ScheduleData;
};

function ScheduleCarousel({ scheduleData }: ScheduleDataProps) {
  console.log(
    "scheduleData dal carousel",
    scheduleData.MRData.RaceTable.Races[11],
  );
  const racesData = scheduleData?.MRData?.RaceTable?.Races;

  const mapCarouselContent = (race: Race) => {
    const {
      Circuit,
      FirstPractice,
      SecondPractice,
      ThirdPractice,
      Qualifying,
      date: raceDate = "",
      time: raceTime = "",
    } = race;
    const location = `${Circuit?.Location?.locality} (${Circuit?.Location?.country})`;

    return (
      <CarouselItem
        key={race.round}
        className="flex w-full flex-col items-center justify-center lg:flex-row gap-12 md:gap-0 my-10"
      >
        <Image
          src={`/images/circuits/${race?.Circuit?.circuitId}.avif`}
          alt="Circuit Image"
          width={1542}
          height={867}
          className="left-0 top-0 z-0 w-full lg:w-3/5"
        />

        <Card className="w-full mx-auto max-w-[400px] text-center shadow-xl lg:w-2/5 lg:text-left">
          <CardHeader>
            <CardTitle>{race.round}. {race.raceName}</CardTitle>
            <CardDescription>{Circuit.circuitName}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              <strong>Location:</strong> {location}
            </p>
            <ul className="[&>li]:ml-5">
              <strong>Free Practice Sessions:</strong>
              {FirstPractice && (
                <li>
                  <strong>FP1:</strong> {getRaceTimes(FirstPractice)}
                </li>
              )}
              {SecondPractice && (
                <li>
                  <strong>FP2:</strong> {getRaceTimes(SecondPractice)}
                </li>
              )}
              {ThirdPractice && (
                <li>
                  <strong>FP3:</strong> {getRaceTimes(ThirdPractice)}
                </li>
              )}
            </ul>
            {race.Qualifying && (
              <p>
                <strong>Qualifying:</strong> {getRaceTimes(Qualifying)}
              </p>
            )}
            {race.time && (
              <p>
                <strong>Race:</strong>{" "}
                {getRaceTimes({ date: raceDate, time: raceTime })}
              </p>
            )}
          </CardContent>
          <CardFooter>
            {Circuit.url && <Link href={Circuit.url}>Circuit Wiki</Link>}
          </CardFooter>
        </Card>
      </CarouselItem>
    );
  };

  return (
    <Carousel className="w-full md:w-10/12 lg:w-11/12">
      <CarouselContent>{racesData.map(mapCarouselContent)}</CarouselContent>
      <CarouselPrevious className="max-[768px]:absolute max-[768px]:left-1 max-[768px]:top-1/2" />
      <CarouselNext className="max-[768px]:absolute max-[768px]:right-1 max-[768px]:top-1/2 " />
    </Carousel>
  );
}

export default ScheduleCarousel;
