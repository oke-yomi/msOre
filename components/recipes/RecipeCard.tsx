"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import ButtonWithLink from "../Button";
import { RecipeProp } from "@/app/recipes/page";

interface RecipeCardProp {
  recipe: RecipeProp;
}

const RecipeCard = ({ recipe }: RecipeCardProp) => {
  const getRecipeIdFromUri = (uri: string) => {
    const parts = uri.split("#recipe_");
    if (parts.length === 2) {
      return parts[1];
    }
    return null;
  };

  const id = getRecipeIdFromUri(recipe.uri);

  return (
    <div className="w-64 border rounded-3xl overflow-hidden hover:shadow-xl ease-in-out transition duration-200 delay-150 hover:border-pink-200">
      <Image
        src={recipe.image}
        alt={""}
        width={256}
        height={320}
        className="object-contain"
      />
      <div className="px-5 py-6">
        <h3 className="text-lg font-medium h-14">{recipe.label}</h3>
        <p className="mb-3 mt-2 text-sm">
          Calorie count:{" "}
          <span className="font-medium text-custom-purple-500">
            {Math.floor(recipe.calories)}
          </span>
        </p>

        <div className="w-fit h-fit transition ease-in-out hover:translate-y-1 hover:scale-95 delay-150">
          <ButtonWithLink link={`/recipes/${id}`} btnText={"More details"} />
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
