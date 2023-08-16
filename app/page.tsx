"use client";

import ButtonWithLink from "@/components/Button";
import Hero from "@/components/home/Hero";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
      ease: "easeIn",
      duration: 0.3,
    },
  }),
};

const OpacityAnimationVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.03,
      ease: "easeIn",
      duration: 0.3,
    },
  },
};

export default function Home() {
  return (
    <motion.div
      className=""
      variants={OpacityAnimationVariants}
      initial="initial"
      animate="animate"
    >
      <Hero />
      <div className="mt-4 py-5 flex justify-center items-center">
        <div className="w-full md:pl-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {data.map((item, index) => (
              <motion.div
                key={index}
                className="bg-orange-100 rounded-lg shadow-xl h-64 px-4 md:w-[450px] w-full relative"
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={index}
              >
                <div className="w-3/4 py-12">
                  <h4 className="font-medium text-lg text-custom-purple-500">
                    {item.title}
                  </h4>
                  <p className="mt-5">{item.description}</p>
                </div>

                <div className="cursor-pointer transition ease-in-out hover:translate-y-1 hover:scale-95 delay-150">
                  <ButtonWithLink btnText={"Explore"} link={"/recipes"} />
                </div>

                <div className="absolute -right-14 top-1/2 -translate-y-1/2 hidden md:block">
                  <div className="w-40 h-40 rounded-full border bg-custom-purple-500 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={""}
                      fill
                      className="absolute object-cover rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const data = [
  {
    title: "Get Personalized Recommendations",
    description:
      "Filter out recipes according to your prefernece. Get a step by step guide on how to prepare amazing dishes",
    image: "/images/Hero-img.jpg",
  },
  {
    title: "Get Personalized Recommendations",
    description:
      "Filter out recipes according to your prefernece. Get a step by step guide on how to prepare amazing dishes",
    image: "/images/menu-1.jpg",
  },
  {
    title: "Get Personalized Recommendations",
    description:
      "Filter out recipes according to your prefernece. Get a step by step guide on how to prepare amazing dishes",
    image: "/images/menu-2.jpg",
  },
  {
    title: "Get Personalized Recommendations",
    description:
      "Filter out recipes according to your prefernece. Get a step by step guide on how to prepare amazing dishes",
    image: "/images/menu-3.jpg",
  },
];
