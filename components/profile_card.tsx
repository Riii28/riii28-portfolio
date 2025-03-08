"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import { AnimatedTooltip } from "./ui/animated-tooltip";

export default function ProfileCard() {
  return (
    <CardContainer>
      <CardBody className="relative group/card border-1 border-dashed border-dark-200 p-6 rounded-3xl bg-black">
        <CardItem translateZ="100">
          <AnimatedTooltip>
            <Image
              className="object-cover rounded-2xl group-hover/card:shadow-xl cursor-pointer md:w-70 md:h-70"
              src="/ridho.jpg"
              height="230"
              width="230"
              alt="thumbnail"
            />
          </AnimatedTooltip>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
