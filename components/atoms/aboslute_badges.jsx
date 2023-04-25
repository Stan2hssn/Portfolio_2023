import Container from "@templates/Container";
import { classNames } from "@utils/class_names";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

export default function AbsoluteBadges(props) {
  const container = useRef(null);

  const animationTextIn = "animationTextIn";
  const animationTextOut = "animationTextOut";
  const animationRound = "animationRound";

  useEffect(() => {
    const textInOut = gsap.timeline({ paused: true });
    const round = gsap.timeline({ paused: true });

    const badge = container.current;

    /*   round.to(".animationRound", {
      keyframes: {
        "0%": { scale: "1" },
        "40%": { scale: "1.5" },
        "50%": { scale: "1.2" },
      },
    });
 */

    function GsapIn() {
      textInOut.play();
      round.play();
      console.log("enter");
    }

    function GsapOut() {
      textInOut.reverse();
      round.reverse();
      console.log("out");
    }

    textInOut.to(".animationTextIn", {
      keyframes: {
        "0%": { y: 0 },
        "20%": { opacity: "1" },
        "50%": { y: "-1rem", opacity: "0", gap: "1.5rem" },
        "55%": { display: "none" },
      },
      duration: "600",
      ease: "power1.inOut",
    });

    textInOut.to(".animationTextOut", {
      keyframes: {
        "0%": { y: "1rem", display: "none", gap: "1.5rem", opacity: "0" },
        "5%": { display: "flex" },
        "50%": { gap: "0.5rem", opacity: "1", y: "0rem" },
      },
    });

    badge.addEventListener("mouseenter", () => {
      GsapIn();
    });

    badge.addEventListener("mouseleave", () => {
      GsapOut();
    });
  }, []);

  return (
    <Container
      size="lg"
      expend="fixed flex-row w-full mb-24 bottom-0 left-0 justify-start"
      intern="flex justify-start w-full"
    >
      <div
        className="relative flex flex-col group/main w-40 h-40 rounded-full items-center justify-center z-10 cursor-pointer"
        ref={container}
      >
        <div className="flex flex-col z-10">
          <div
            className={classNames(
              "relative flex flex-col gap-2 items-center",
              animationTextIn
            )}
          >
            <p
              className={classNames(
                "flex font-sans text-description_sm text-center text-content-grey_900 uppercase z-100",
                animationTextIn
              )}
            >
              Open <br /> to work
            </p>
            <p
              className={classNames(
                "flex font-sans text-body text-center text-content-grey_900 uppercase z-100",
                animationTextIn
              )}
            >
              -Aug 2023
            </p>
          </div>
        </div>
        <div className="flex flex-col z-10">
          <div
            className={classNames(
              "relative flex-col items-center hidden",
              animationTextOut
            )}
          >
            <p
              className={classNames(
                "flex font-sans text-description_sm text-center text-content-grey_900 uppercase",
                animationTextOut
              )}
            >
              stan.husson
              <br /> @edu.gobelins.fr
            </p>
            <p
              className={classNames(
                "flex font-sans text-body text-center text-content-grey_900 uppercase",
                animationTextOut
              )}
            >
              Click to copy
            </p>
          </div>
        </div>
        <span className="absolute flex self-center w-40 h-40 rounded-full z-0 pointer-events-none">
          <div
            className={classNames(
              "absolute flex items-center justify-center w-40 h-40",
              animationRound
            )}
          >
            <svg
              className="origin-center animate-spinSlow1"
              width="126"
              height="140"
              viewBox="0 0 176 190"
            >
              <ellipse
                cx="85.063"
                cy="96.6351"
                rx="85.063"
                ry="96.6351"
                transform="matrix(0.871356 0.490652 -0.48698 0.873413 60.8088 -31.3015)"
                fill="#EEEEEE"
                fillOpacity="0.3"
              />
            </svg>
          </div>

          <div
            className={classNames(
              "absolute flex items-center justify-center w-40 h-40",
              animationRound
            )}
          >
            <svg
              className="origin-center animate-spinSlow2"
              width="141"
              height="140"
              viewBox="0 0 251 220"
            >
              <ellipse
                cx="125.119"
                cy="109.937"
                rx="109.340"
                ry="125.119"
                transform="rotate(90 125.119 109.937)"
                fill="#EEEEEE"
                fillOpacity="0.5"
              />
            </svg>
          </div>

          <div
            className={classNames(
              "absolute flex items-center justify-center w-40 h-40",
              animationRound
            )}
          >
            <svg
              className="origin-center animate-spinSlow3"
              width="138"
              height="144"
              viewBox="0 0 248 224"
            >
              <ellipse
                cx="109.402"
                cy="125.339"
                rx="109.402"
                ry="125.339"
                transform="matrix(-0.340509 0.939515 -0.940418 -0.345502 278.621 52.5823)"
                fill="#EEEEEE"
                fillOpacity="0.7"
              />
            </svg>
          </div>

          <div
            className={classNames(
              "absolute flex items-center justify-center w-40 h-40",
              animationRound
            )}
          >
            <svg
              className="origin-center animate-spinSlow4"
              width="135"
              height="137"
              viewBox="0 0 237 250"
            >
              <ellipse
                cx="118.233"
                cy="124.904"
                rx="117.921"
                ry="124.904"
                fill="#EEEEEE"
              />
            </svg>
          </div>
        </span>
      </div>
    </Container>
  );
}
