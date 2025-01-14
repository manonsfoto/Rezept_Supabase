import { FC } from "react";
import { Recipe } from "./Recipes";

interface TopCardProps {
  recipe: Recipe;
}

const TopCard: FC<TopCardProps> = ({ recipe }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="h-52">
        {recipe.imageUrl && <img src={recipe.imageUrl} alt={recipe.name} />}
      </figure>
      <div className="card-body">
        <h2 className="card-title">{recipe.name}</h2>
        <p>{recipe.description}</p>
        <div className="card-actions justify-start">
          <button className="btn btn-primary">Zum Rezept</button>
        </div>
      </div>
    </div>
  );
};

export default TopCard;