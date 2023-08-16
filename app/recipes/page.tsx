"use client";

import MainText from "@/components/MainText";
import React, { useState, CSSProperties } from "react";
import { useQuery } from "@tanstack/react-query";
import { BASEURL_EDAMAM } from "@/utils/constants";
import axios from "axios";
import RecipeCard from "@/components/recipes/RecipeCard";
import { BiSearchAlt } from "react-icons/bi";
import CircleLoader from "react-spinners/CircleLoader";
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
      duration: 0.2,
    },
  }),
};

const baseUrl = BASEURL_EDAMAM;

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};

export interface RecipeProp {
  uri: string;
  image: string;
  label: string;
  calories: number;
}

const getQueryRecipes = async ({ queryKey }: { queryKey: string[] }) => {
  const { data } = await axios.get(`${baseUrl}&q=${queryKey[1]}`);
  const recipes = data?.hits.map((hit: any) => hit.recipe);
  console.log(recipes);
  return recipes || [];
};

const Recipes = () => {
  const [searchText, setSearchText] = useState<string>("jollof");

  const { data, isLoading, isError } = useQuery({
    queryKey: ["recipeList", searchText],
    queryFn: getQueryRecipes,
    enabled: !!searchText,
  });

  const handleSearchQuery = (input: string) => {
    if (searchText === "") return;
    setSearchText(input);
  };

  if (isError) {
    return (
      <div className="w-full h-full items-center justify-center text-center">
        <p className="font-semibold text-5xl">Error!!! Try again Later</p>
      </div>
    );
  }

  return (
    <div className="py-5">
      <div className="flex justify-between items-center">
        <MainText text="Recipes" />

        <div className="">
          <div className="border border-custom-grey rounded-md w-60 flex items-center justify-between px-3 py-1">
            <input
              type="text"
              value={searchText}
              onChange={(e) => handleSearchQuery(e.target.value)}
              className="border-none outline-none flex-1"
              placeholder="Search recipes"
            />
            <BiSearchAlt size={24} color="#626262" />
          </div>

          <p className="text-xs text-custom-black">
            <span className="w-2 h-2 bg-custom-purple-500 rounded-full inline-block mr-1" />
            Search all our amazing recipes
          </p>
        </div>
      </div>

      <div className="mt-5 py-2 justify-center items-center">
        {isLoading && !data ? (
          <div className="w-full h-full justify-center items-center text-center py-16">
            <CircleLoader
              color={"#BA175E"}
              loading={isLoading}
              cssOverride={override}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />

            <p className="font-medium text-xl mt-8">Loading recipes ...</p>
          </div>
        ) : (
          <div className="mx-auto w-fit">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {data.map((recipe: RecipeProp, index: number) => (
                <motion.div
                  className="w-fit"
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={index}
                  key={recipe.uri}
                >
                  <RecipeCard recipe={recipe} />
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Recipes;
