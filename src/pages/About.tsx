import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".about",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.5,
        ease: "power2.inOut",
      }
    );

    const tl = gsap.timeline();

    tl.fromTo(
      ".quote-span",
      {
        opacity: 0,
        y: 30,
        display: "inline-block",
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.2,
        ease: "power2.out",
      }
    );

    tl.fromTo(
      ".about-image-1",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.4"
    );

    ScrollTrigger.create({
      trigger: ".about-article-2",
      start: "top bottom-=100",
      onEnter: () => {
        gsap.fromTo(
          ".about-article-2",
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          }
        );
      },
      once: true,
    });

    ScrollTrigger.create({
      trigger: ".about-section-3",
      start: "top bottom-=100",
      onEnter: () => {
        gsap.fromTo(
          ".about-image-2",
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          }
        );

        gsap.fromTo(
          ".about-article-3",
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.3,
            ease: "power2.out",
          }
        );
      },
      once: true,
    });
  });

  return (
    <section className="md:max-w-7xl mt-12 w-full about">
      <div className="flex flex-col md:flex-row md:gap-12">
        <article className="text-3xl md:text-6xl">
          <span className="quote-span block"> "Rezeptwelt ist</span>
          <span className="quote-span block"> mehr als eine Sammlung</span>
          <span className="quote-span block"> von Kochanleitungen</span>
          <span className="quote-span block"> – es ist</span>
          <span className="quote-span block"> ein Ort der Inspiration </span>
          <span className="quote-span block">für Hobbyköche</span>
          <span className="quote-span block"> und Profis gleichermaßen."</span>
        </article>
        <figure className="w-full rounded-3xl overflow-hidden h-1/4 my-12 md:h-1/2 md:my-0 about-image-1">
          <img
            src="https://images.unsplash.com/photo-1675096000167-4b8a276b6187?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="man holding a dish filled with food"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </figure>
      </div>
      <article className="text-3xl md:text-5xl md:my-12 w-full md:h-fit bg-accent p-4 rounded-3xl font-light relative flex flex-col justify-end about-article-2">
        <div className="self-end max-w-2xl">
          Hier findest du eine bunte Vielfalt an Rezepten: von traditionellen
          Wohlfühlgerichten bis hin zu kreativen, modernen Kreationen. Jedes
          Rezept wird sorgfältig ausgewählt und getestet, damit du immer das
          beste Ergebnis erzielst.
        </div>
      </article>{" "}
      <div className="flex flex-col md:flex-row md:gap-12 md:my-12 about-section-3">
        <figure className="w-full rounded-3xl overflow-hidden my-12 md:my-0 about-image-2">
          <img
            src="https://images.unsplash.com/photo-1471478108131-9b2335c21611?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="a plate with pancakes"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </figure>

        <article className="text-3xl mt-12 md:mt-0 md:text-5xl md:w-1/2 about-article-3">
          {" "}
          Neben Rezepten bieten wir hilfreiche Tipps, Tricks und Inspiration für
          deine Küche – egal, ob es um die perfekte Zubereitungstechnik oder
          spannende Geschmackskombinationen geht.
        </article>
      </div>
    </section>
  );
};

export default About;
