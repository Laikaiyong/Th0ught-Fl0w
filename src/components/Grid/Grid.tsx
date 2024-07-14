
import React from "react";
import { cn } from '@/utils/cn';
import { BentoGrid, BentoGridItem } from "../ui/BentoGrid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function Grid() {
  return (
    <BentoGrid className="max-w-4xl mx-auto mt-10">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 0 || i === 3 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const HeaderImage = ({url} : {url: string}) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <img src={url} className="object-cover rounded-xl w-full" />
  </div>
);

const items = [
  {
    title: "Internet of Things (IoT)",
    description:
      "Integrate with different types of IoT devices (Sensors, Wearables, Smart Home, Cars, etc.)",
    header: <HeaderImage url="https://plus.unsplash.com/premium_photo-1661297461253-ae1968b5d46c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Glasses",
    description: "Computer Vision integration",
    header: <HeaderImage url="https://plus.unsplash.com/premium_photo-1661319134179-50e9552b63c0?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Brain waves",
    description: "Transmitted to the device for further processing",
    header: <HeaderImage url="https://plus.unsplash.com/premium_photo-1690297732590-b9875f77471d?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Artificial Intelligence",
    description: "Trains itself on-the-go to adapt to different situations",
    header: <HeaderImage url="https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
