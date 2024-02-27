import { useState, useEffect } from "react";
import { gsap } from "gsap";

const Slider = () => {
  const [components, setComponents] = useState([
    <LifeItem key={1} imgCard="/img/case-blue.6568b466.png" imgAvatar="/img/avatar-example-1.efb6cc72.png" name="Component 1" />,
    <LifeItem key={2} imgCard="/img/case-violet.2050f5bf.png" imgAvatar="/img/avatar-example-1.efb6cc72.png" name="Component 2" />,
    <LifeItem key={3} imgCard="/img/case-pink.17c520f2.png" imgAvatar="/img/avatar-example-1.efb6cc72.png" name="Component 3" />,
    <LifeItem key={4} imgCard="/img/case-blue.6568b466.png" imgAvatar="/img/avatar-example-1.efb6cc72.png" name="Component 4" />,
    <LifeItem key={5} imgCard="/img/case-gold.dea4179e.png" imgAvatar="/img/avatar-example-1.efb6cc72.png" name="Component 5" />,
    <LifeItem key={6} imgCard="/img/case-violet.2050f5bf.png" imgAvatar="/img/avatar-example-1.efb6cc72.png" name="Component 6" />,
    <LifeItem key={7} imgCard="/img/case-pink.17c520f2.png" imgAvatar="/img/avatar-example-1.efb6cc72.png" name="Component 7" />,
    <LifeItem key={8} imgCard="/img/case-blue.6568b466.png" imgAvatar="/img/avatar-example-1.efb6cc72.png" name="Component 8" />,
    <LifeItem key={9} imgCard="/img/case-gold.dea4179e.png" imgAvatar="/img/avatar-example-1.efb6cc72.png" name="Component 9" />,
    <LifeItem key={10} imgCard="/img/case-violet.2050f5bf.png" imgAvatar="/img/avatar-example-1.efb6cc72.png" name="Component 10" />,
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const lastComponent = components[components.length - 1];
      const newComponents = [lastComponent, ...components.slice(0, components.length - 1)];
      setComponents(newComponents);

      const slider = document.getElementById("slider");
      const firstChild = slider.firstChild;

      gsap.to(firstChild, {
        x: "-100%",
        duration: 1,
        ease: "ease-in-out",
        onComplete: () => {
          slider.appendChild(firstChild);
        },
      });
    }, Math.floor(Math.random() * 3000 + 2000));

    return () => clearInterval(interval);
  }, [components]);

  return (
    <div className="slider-lite" id="slider">
      {components.map((component) => (
        <div className="lf-item-lite" key={component.key}>
          {component}
        </div>
      ))}
    </div>
  );
};

const LifeItem = ({ imgCard, imgAvatar, name }) => {
  return (
    <div className="life-item">
      <img src={imgCard} alt="" />
      <div className="avatar">
        <img src={imgAvatar} alt="" />
      </div>
      <div className="name">{name}</div>
    </div>
  );
};

export default Slider;
