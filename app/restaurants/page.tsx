"use client";

import ButtonWithLink from "@/components/Button";
import MainText from "@/components/MainText";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GiRotaryPhone } from "react-icons/gi";
import { GoLocation } from "react-icons/go";

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
      duration: 0.2,
    },
  }),
};

const Restaurants = () => {
  const [latitude, setLatitude] = useState<number>();
  const [longitude, setLongitude] = useState<number>();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, []);

  return (
    <div className="py-5">
      <div className="flex justify-between items-center">
        <MainText text="Restaurants" />
      </div>

      <div className="mx-auto w-fit mt-9">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {data.map((restaurant, index) => (
            <motion.div
              key={index}
              className="border w-64 rounded-3xl shadow-md hover:shadow-xl ease-in-out transition duration-200 delay-150 hover:border-pink-200"
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              <div className="w-full h-60 flex justify-center items-center">
                <div className="w-44 h-44 relative overflow-hidden rounded-full">
                  <Image
                    src={restaurant.image}
                    alt={""}
                    fill
                    className="object-cover absolute top-0 left-0 right-0 "
                  />
                </div>
              </div>

              <div className="px-5 py-3">
                <h3 className="text-lg font-medium">{restaurant.name}</h3>
                <p className="mb-3 mt-2 text-sm flex items-center gap-3">
                  <GoLocation color="#BA175E" size={16} />
                  {restaurant.address}
                </p>

                <p className="mb-3 mt-2 text-sm flex items-center gap-3">
                  <GiRotaryPhone color="#BA175E" size={16} /> +2348144976291
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Restaurants;

const data = [
  { name: "La-vista", address: "Lekki, lagos", image: "/images/rest-1.jpg" },
  { name: "Lake side", address: "Ajah, lagos", image: "/images/rest-2.jpg" },
  {
    name: "Bela restaurante",
    address: "Ikeja, lagos",
    image: "/images/rest-3.jpg",
  },
  { name: "Grubs", address: "VI, lagos", image: "/images/rest-4.jpg" },
  {
    name: "Chicken Republic",
    address: "Shomolu, lagos",
    image: "/images/rest-5.jpg",
  },
  { name: "The place", address: "Ojota, Lagos", image: "/images/rest-5.jpg" },
  { name: "Hose Restaurant", address: "Berger", image: "/images/rest-1.jpg" },
];
