"use client";

import { ButtonWithAction } from "@/components/Button";
import { SINGLE_URL, URI_HEAD } from "@/utils/constants";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { CSSProperties } from "react";
import { CircleLoader } from "react-spinners";

const baseUrl = SINGLE_URL;

const uri_head = URI_HEAD;

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};

const SingleRecipePage = () => {
  const params = useParams();
  const id = params.id as string;

  const fullRecipeUri = `${uri_head}${id}`;

  const encodedUri = encodeURIComponent(fullRecipeUri);

  // const isLoading = false;

  const getSingleRecipe = async ({ queryKey }: { queryKey: string[] }) => {
    const { data } = await axios.get(`${baseUrl}&uri=${encodedUri}`);
    const recipe = data?.hits[0].recipe;

    console.log(recipe);

    return recipe;
  };

  const { data, isLoading, isError } = useQuery(
    ["singleRecipeById", id],
    getSingleRecipe
  );

  if (isError) {
    return <p>Error ...</p>;
  }

  return (
    <div className=" py-11 w-full h-full">
      {isLoading ? (
        <div className="w-full h-full justify-center items-center text-center py-16">
          <CircleLoader
            color={"#1C4550"}
            loading={isLoading}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />

          <p className="font-medium text-xl mt-8">Loading Ingredients ...</p>
        </div>
      ) : (
        <div className="md:px-8 px-3">
          <div className="flex flex-col md:flex-row items-center justify-between gap-7">
            <div className="flex md:justify-end justify-center items-center md:w-1/2">
              <div className="relative h-52 w-52 md:h-80 md:w-80 overflow-hidden rounded-full">
                <Image
                  src={data.image}
                  alt={""}
                  fill
                  className="absolute top-0 left-0 right-0 object-cover"
                />
              </div>
            </div>

            <div className="md:w-1/2 flex md:justify-start justify-center text-center md:text-left">
              <div className="">
                <h3 className="font-semibold text-custom-purple-500 text-4xl">
                  {data.label}
                </h3>
                <p className="mt-2 text-lg">
                  Calorie count -{" "}
                  <span className="text-custom-purple-500 font-medium">
                    {Math.round(data.calories)}
                  </span>
                </p>

                <div className="md:flex mt-10 items-center justify-between gap-5">
                  <p className="">
                    Amount:{" "}
                    <span className="font-medium">
                      # {Math.round(data.totalWeight)}
                    </span>
                  </p>

                  <div className="group relative w-max">
                    <button className="font-medium border-none outline-none text-custom-green-400 underline cursor-pointer transition ease-in-out hover:translate-y-1 delay-150">
                      View in USD
                    </button>
                    <span className="pointer-events-none absolute -top-8 left-0 w-max opacity-0 transition-opacity group-hover:opacity-100 bg-custom-green-400 text-custom-white px-3 py-1 rounded-md">
                      $ {Math.round(data.totalWeight) * 950}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center flex flex-col justify-center items-center border-t py-2">
            <div className="w-3/4">
              <h4 className="text-xl font-medium text-custom-purple-500 mb-3">
                Ingredients
              </h4>
              <ul className="text-left">
                {data.ingredientLines.map((ing: string, index: number) => (
                  <li key={index} className="flex items-center">
                    <span className="h-1 w-1 rounded-full inline-block bg-custom-green-400 mr-2" />{" "}
                    <p className="text-lg">{ing}</p>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href={data.url}
              className="border-none bg-custom-green-400 px-3 py-2 rounded-lg text-custom-white cursor-pointer shadow-md mt-5 transition ease-in-out hover:translate-y-1 hover:scale-95 delay-150"
              target="_blank"
            >
              Click to view procedure
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleRecipePage;
