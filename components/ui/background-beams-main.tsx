"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "usehooks-ts";
import { useTheme } from "next-themes"; // Import useTheme hook

const gridSize = 32;
const pathCount = 20;

const generateGrid = () => {
  const element = document.getElementById("backgroundBeamsOuterMain");
  if (element === null) {
    console.error("no backgroundbeams found");
    return;
  }
  const elementInfo = element.getBoundingClientRect();
  const height = elementInfo.height;
  const width = elementInfo.width;

  return { maxX: width, maxY: height };
};

const generatePath = (maxX: number, maxY: number) => {
  const randomX = Math.floor(Math.random() * (maxX / gridSize)) * gridSize;
  const randomY = Math.floor(Math.random() * (maxY / gridSize)) * gridSize;
  let path = `M${randomX} ${randomY}`;
  let previousCoord = { x: randomX, y: randomY };
  let canContinue = true;

  while (canContinue === true) {
    let currentCoord;
    let lrq = Math.floor(Math.random() * 10);
    if (lrq % 2 === 0 || lrq === 0) {
      currentCoord = { ...previousCoord, x: previousCoord.x + gridSize };
    } else if (lrq === 1 || lrq === 3) {
      currentCoord = { ...previousCoord, y: previousCoord.y + gridSize };
    } else if (lrq === 5 || lrq === 7) {
      currentCoord = { ...previousCoord, y: previousCoord.y - gridSize };
    } else if (lrq === 9 || currentCoord === undefined) {
      currentCoord = { ...previousCoord, x: previousCoord.x + gridSize };
    }
    if (currentCoord === undefined) {
      return path;
    }
    path = path + ` L${currentCoord.x} ${currentCoord.y}`;
    if (
      currentCoord.x >= maxX ||
      currentCoord.y >= maxY ||
      currentCoord.y < 0
    ) {
      canContinue = false;
      return path;
    }
    previousCoord = { x: currentCoord.x, y: currentCoord.y };
  }

  return path;
};

export const BackgroundBeamsMain = 
  ({ className }: { className?: string }) => {
    const { theme } = useTheme(); // Get current theme

    const [paths, setPaths] = React.useState<any>([]);
    React.useEffect(() => {
      const grid = generateGrid();
      let t = [];
      if (grid === undefined) {
        return;
      }
      for (let i = 0; i < pathCount; i += 1) {
        t.push(generatePath(grid.maxX, grid.maxY));
      }
      setPaths(t);
    }, [theme]);

    // Define beam colors based on theme
    const beamColor = theme === "dark" ? "#d3d3d3" : "black";
    const beamOpacity = theme === "dark" ? "0.2" : "0.4"; // Adjust opacity for dark mode

    return (
      <>
        <div
          id={"backgroundBeamsOuterMain"}
          className={cn(
            "absolute z-[-1] h-full w-full inset-0 [mask-size:40px] [mask-repeat:no-repeat] flex items-center justify-center",
            className
          )}
        >
          <svg
            className="h-full w-full pointer-events-none absolute"
            width="100%"
            height="100%"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {paths.map((path: string, index: number) => (
              <motion.path
                key={`path-${index}`}
                d={path}
                stroke={`url(#linearGradient-${index})`}
                strokeOpacity={beamOpacity}
                strokeWidth="1"
                strokeLinecap="square"
              ></motion.path>
            ))}
            <defs>
              {paths.map((path: string, index: number) => (
                <motion.linearGradient
                  id={`linearGradient-${index}`}
                  key={`gradient-${index}`}
                  initial={{
                    x1: "0%",
                    x2: "0%",
                    y1: "0%",
                    y2: "0%",
                  }}
                  animate={{
                    x1: ["0%", "100%"],
                    x2: ["0%", "95%"],
                    y1: ["0%", "100%"],
                    y2: ["0%", `${93 + Math.random() * 8}%`],
                  }}
                  transition={{
                    duration: Math.random() * 10 + 10,
                    ease: "easeInOut",
                    repeat: Infinity,
                    delay: Math.random() * 10,
                  }}
                >
                  <stop
                    stopColor={beamColor}
                    opacity={0.5}
                    stopOpacity="0"
                  ></stop>
                  <stop stopColor={beamColor} opacity={0.9}></stop>
                  <stop offset="32.5%" stopColor={beamColor}></stop>
                  <stop
                    offset="100%"
                    stopColor={beamColor}
                    stopOpacity="0"
                  ></stop>
                </motion.linearGradient>
              ))}
            </defs>
          </svg>
        </div>
      </>
    );
  }

BackgroundBeamsMain.displayName = "BackgroundBeamsMain";
