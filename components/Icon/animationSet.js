import { TimelineMax, Power2, Bounce, Circ } from "gsap";

const animationSet = {
  guideBoarder: () => {
    var tl = new TimelineMax();
    tl.from('#bottomLeft', 0.5, { scaleY: 0, transformOrigin: "bottom", ease: Power2.easeOut })
      .from('#bottomRight', 0.2, { scaleX: 0, transformOrigin: "top", ease: Power2.easeOut })
      .from('#woodBc', 0.5, { scaleY: 0, transformOrigin: "center", ease: Bounce.easeOut })
      .from('#wood', 0.3, { scaleX: 0, transformOrigin: "center", ease: Bounce.easeOut })
      .from('#leftBc', 0.5, { scale: 0, transformOrigin: "center", ease: Bounce.easeOut })
      .from('#left', 0.2, { scaleX: 0, transformOrigin: "center", ease: Circ.easeOut })
      .from('#rightBc', 0.5, { scale: 0, transformOrigin: "center", ease: Bounce.easeOut })
      .from('#right', 0.2, { scaleX: 0, transformOrigin: "center", ease: Power2.easeOut })
  }
}

export default animationSet;