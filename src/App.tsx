import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { DiCss3, DiHtml5 } from 'react-icons/di';
import {
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiFirebase,
  SiHeroku,
} from 'react-icons/si';
import { FiFigma } from 'react-icons/fi';

import './App.css';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0.9,
  });
  const [ref2, inView2] = useInView({
    threshold: 0.9,
  });
  const [ref3, inView3] = useInView({
    threshold: 0.9,
  });
  const [ref4, inView4] = useInView({
    threshold: 0.5,
  });
  const [ref5, inView5] = useInView({
    threshold: 0.5,
  });
  const [ref6, inView6] = useInView({
    threshold: 0.5,
  });
  const animation = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();
  const animation4 = useAnimation();
  const animation5 = useAnimation();
  const animation6 = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: 'spring',
          duration: 1,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({
        x: '-100vw',
      });
    }
  }, [inView, animation]);

  useEffect(() => {
    if (inView2) {
      animation2.start({
        x: 0,
        transition: {
          type: 'spring',
          duration: 1,
          bounce: 0.3,
          delay: 0.25,
        },
      });
    }
    if (!inView2) {
      animation2.start({
        x: '-100vw',
      });
    }
  }, [inView2, animation2]);

  useEffect(() => {
    if (inView3) {
      animation3.start({
        x: 0,
        transition: {
          type: 'spring',
          duration: 1,
          bounce: 0.3,
          delay: 0.4,
        },
      });
    }
    if (!inView3) {
      animation3.start({
        x: '-100vw',
      });
    }
  }, [inView3, animation3]);

  useEffect(() => {
    if (inView4) {
      animation4.start({
        transition: {
          delay: 4.5,
        },
      });
      setIsVisible(true);
    }
    if (!inView4) {
      setIsVisible(false);
    }
  }, [inView4, animation4]);

  useEffect(() => {
    if (inView5) {
      setIsVisible2(true);
    }
    if (!inView6) {
      setIsVisible2(false);
    }
  }, [inView5, animation5]);

  useEffect(() => {
    if (inView6) {
      setIsVisible3(true);
    }
    if (!inView6) {
      setIsVisible3(false);
    }
  }, [inView5, animation5]);

  return (
    <div className="wrapper">
      <section className="welcome section">
        <div className="welcome-left">
          <h2>Andres Rodriguez</h2>
          <div className="h3-cont">
            <h3 className="h3-1">Full stack Developer</h3>
            <h3 className="h3-2">UI / UX Enthusiast.</h3>
          </div>
        </div>
        <div className="welcome-right">
          <div className="sections">
            <ul>
              <li>
                <Link to="01" smooth={true}>
                  <span>01</span> About Me
                </Link>
              </li>
              <li>
                <Link to="02" smooth={true}>
                  <span>02</span> Toolkit
                </Link>
              </li>
              <li>
                <Link to="03" smooth={true}>
                  <span>03</span> My Work
                </Link>
              </li>
              <li>
                <Link to="04" smooth={true}>
                  <span>04</span> Contact Me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="about section">
        <div className="num-name">
          <h1 id="01" className="section-num">
            01
          </h1>
          <h2>About Me</h2>
        </div>
        <div className="about-cont">
          <div className="p-wrapper">
            {' '}
            <div ref={ref} className="ap">
              <motion.p animate={animation}>
                <span>Full-stack Developer</span> currently based in Quito,
                Ecuador. I've had the wonderful chance to live, work, and study
                in places like Mexico, Ecuador, China, Spain and the United
                States.
              </motion.p>
            </div>
            <div ref={ref2} className="ap">
              <motion.p animate={animation2}>
                I massively enjoy creating <span>great user interfaces</span> &
                experiences. Passionate about helping companies and people
                establish a great online presence through{' '}
                <span>unique web experiences.</span>
              </motion.p>
            </div>
            <div ref={ref3} className="ap">
              <motion.p animate={animation3}>
                Outside of work I'm a huge fan of competitive paintball,
                E-sports, Music, and the great outdoors
                <span className="ap-dot">.</span>
              </motion.p>
            </div>
          </div>
        </div>
      </section>
      <section className="technologies section">
        <div className="num-name">
          <h1 id="02" className="section-num">
            02
          </h1>
          <h2>TOOLKIT</h2>
        </div>
        <div className="tool-cont">
          <motion.div className="tool-wrapper">
            <span>
              <SiExpress />
            </span>
            <span>
              <SiHeroku />
            </span>
            <span
              className="mdb-logo-wrap"
              data-logoIsVisible2={isVisible2}
              ref={ref5}
            >
              <SiMongodb className="mdb-logo" />
            </span>
            <span
              className="js-logo-wrap"
              data-logoIsVisible3={isVisible3}
              ref={ref6}
            >
              <SiJavascript className="js-logo" />
            </span>
            <span
              className="ts-logo-wrap"
              data-logoIsVisible={isVisible}
              ref={ref4}
            >
              <SiTypescript className="ts-logo" />
            </span>
            <span>
              <SiRedux />
            </span>
            <span>
              <SiFirebase />
            </span>
            <span>
              <FaNodeJs />
            </span>
            <span>
              <FaReact className="react-logo" />
            </span>
            <span>
              <DiHtml5 />
            </span>
            <span>
              <DiCss3 className="css-logo" />
            </span>
          </motion.div>
        </div>
      </section>
      <section className="work section">
        <h1 id="03" className="section-num">
          03
        </h1>
      </section>
      <section className="contact section">
        <h1 id="04" className="section-num">
          04
        </h1>
      </section>
    </div>
  );
}

export default App;
