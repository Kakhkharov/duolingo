"use client";

import Image from "next/image";
import { PlayIcon, SparklesIcon } from "lucide-react";
import { toast } from "sonner";

interface VideoCourse {
  id: string;
  title: string;
  imageSrc: string;
  badge: string;
}

const VIDEO_COURSES: VideoCourse[] = [
  {
    id: "computer-foundation",
    title: "Computer Foundation",
    imageSrc: "/computer.svg",
    badge: "Video",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX design for Beginner",
    imageSrc: "/uiux.svg",
    badge: "Video",
  },
  {
    id: "photoshop",
    title: "Photoshop",
    imageSrc: "/photoshop.svg",
    badge: "Video",
  },
];

export const VideoCourseList = () => {
  const handleClick = (course: VideoCourse) => {
    toast.info(`${course.title} video kursi tez kunda taqdim etiladi! 🎬`);
  };

  return (
    <div className="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
      {VIDEO_COURSES.map((course) => (
        <div
          key={course.id}
          className="h-full border-2 rounded-xl border-b-4 hover:bg-black/5 cursor-pointer active:border-b-2 flex flex-col items-center justify-between p-3 pb-6 min-h-54.25 min-w-50 transition"
          onClick={() => handleClick(course)}
        >
          <div className="min-h-6 w-full flex items-center justify-between">
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 flex items-center gap-1">
              <SparklesIcon className="size-3" />
              {course.badge}
            </span>
            <div className="rounded-md bg-blue-600 flex items-center justify-center p-1.5 shadow-sm">
              <PlayIcon className="text-white fill-white size-3" />
            </div>
          </div>
          <Image
            alt={course.title}
            className="rounded-lg drop-shadow-md border object-cover my-2"
            height={70}
            src={course.imageSrc}
            width={93.33}
          />
          <p className="text-neutral-700 text-center font-bold mt-3 leading-snug">
            {course.title}
          </p>
        </div>
      ))}
    </div>
  );
};
