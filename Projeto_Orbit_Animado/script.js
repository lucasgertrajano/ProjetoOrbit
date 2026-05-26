/* Projeto Orbit - animações com GSAP
   A ideia é simples: conforme a página rola, movemos o drone e os
   elementos decorativos para criar uma sensação de profundidade. */

if (window.gsap && window.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);

  const primeiraTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".two",
      start: "top 88%",
      end: "70% 50%",
      scrub: true,
      markers: false,
    },
  });

  // Todos os tweens com o rótulo "entrada" acontecem ao mesmo tempo.
  primeiraTimeline.to(
    "#Drone",
    {
      top: "126%",
      left: "20%",
      width: "28%",
      rotate: -12,
    },
    "entrada"
  );

  primeiraTimeline.to(
    "#Planeta",
    {
      top: "116%",
      left: "6%",
      width: "25%",
      rotate: 80,
    },
    "entrada"
  );

  primeiraTimeline.to(
    "#Spark1",
    {
      top: "112%",
      right: "10%",
      rotate: 180,
      scale: 0.85,
    },
    "entrada"
  );

  primeiraTimeline.to(
    "#Spark2",
    {
      top: "150%",
      left: "72%",
      rotate: -160,
      scale: 1.2,
    },
    "entrada"
  );

  primeiraTimeline.to(
    "#Orb1",
    {
      top: "146%",
      right: "72%",
      scale: 0.8,
    },
    "entrada"
  );

  const segundaTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".three",
      start: "top 88%",
      end: "30% 48%",
      scrub: true,
      markers: false,
    },
  });

  segundaTimeline.from(
    ".card-html",
    {
      y: 180,
      rotate: -5,
      opacity: 0,
    },
    "cards"
  );

  segundaTimeline.from(
    ".card-css",
    {
      y: 220,
      scale: 0.92,
      opacity: 0,
    },
    "cards"
  );

  segundaTimeline.from(
    ".card-js",
    {
      y: 180,
      rotate: 5,
      opacity: 0,
    },
    "cards"
  );

  segundaTimeline.to(
    "#Drone",
    {
      top: "223%",
      left: "50%",
      width: "22%",
      rotate: 8,
    },
    "cards"
  );

  segundaTimeline.to(
    "#Planeta",
    {
      top: "210%",
      left: "74%",
      width: "18%",
      rotate: 160,
    },
    "cards"
  );
} else {
  console.warn("GSAP não foi carregado. A página permanece com as animações CSS.");
}
