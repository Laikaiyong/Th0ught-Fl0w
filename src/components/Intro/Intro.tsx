"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { DirectionAwareHover } from "../ui/DirectionAwareHover";
import { SparklesPreview } from "../ui/SparklesText";
import { BackgroundGradient } from "../ui/BackgroundGradient";
import { IconAppWindow } from "@tabler/icons-react";


export const Intro = () => {
  const imageUrl =
    "/device.png";
  return (
    <>
    <div className="columns-2 mt-20 mb-4" id="about">
    <div className="justify-self-center	 h-full flex-col flex-row align-middle text-center w-full items-center justify-center">
      <DirectionAwareHover imageUrl={imageUrl}>
        <p className="font-bold text-xl">Monthly Subscription</p>
        <p className="font-normal text-sm">$ 149.99 / month</p>
      </DirectionAwareHover>
    </div>
    <div className="justify-self-center	 flex-col place-content-center flex-row h-full align-middle text-center w-full items-center justify-center">
     <SparklesPreview />
    </div>
    </div>
    <div className="w-full mt-10 mb-10">
      <BackgroundGradient className="rounded-[22px]">
        <img
          src={`/architecture.png`}
          className="h-full w-full rounded-3xl"
        />
      </BackgroundGradient>
  </div>
    </>
  );
}
