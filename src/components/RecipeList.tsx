import { useState, useEffect, useRef } from "react";
import Card from "./Card";
import SkeletonCard from "./SkeletonCard";
import { Recipe } from "../lib/supabase/types";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type RecipeListProps = {
  title: string;
  fetchRecipes: (
    limit?: number
  ) => Promise<{ data: Recipe[] | null; error: Error | null }>;
  className?: string;
  limit?: number;
};

const RecipeList = ({
  title,
  fetchRecipes,
  className = "",
  limit = 3,
}: RecipeListProps) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const loadRecipes = async () => {
      setLoading(true);
      try {
        const { data, error } = await fetchRecipes(limit);

        if (error) {
          console.error("Fehler beim Laden der Rezepte:", error);
        } else {
          setRecipes(data || []);
        }
      } catch (err) {
        console.error("Unerwarteter Fehler:", err);
      } finally {
        setLoading(false);
      }
    };

    loadRecipes();
  }, [fetchRecipes, limit]);

  useGSAP(() => {
    if (!loading && recipes.length > 0) {
      const cards = gsap.utils.toArray<HTMLElement>(".recipe-card");

      if (cards.length > 0) {
        cards.forEach((card, index) => {
          ScrollTrigger.create({
            trigger: card,
            start: "top bottom-=100",
            onEnter: () => {
              gsap.fromTo(
                card,
                {
                  opacity: 0,
                  y: 50,
                },
                {
                  opacity: 1,
                  y: 0,
                  duration: 1,
                  delay: 0.3 * (index + 1),
                }
              );
            },
            once: true,
          });
        });
      }
    }
  }, [loading, recipes]);

  return (
    <section className={`flex-center flex-col ${className}`} ref={sectionRef}>
      <h1 className="headline-1 w-full my-12 pb-4 border-b-2 border-black">
        {title}
      </h1>
      {loading ? (
        <ul className="flex-center flex-row gap-4 flex-wrap">
          {[...Array(limit)].map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </ul>
      ) : (
        <ul className="flex-center flex-row gap-4 flex-wrap">
          {recipes.map((recipe) => (
            <li key={recipe.id} className="recipe-card ">
              <Card recipe={recipe} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default RecipeList;
