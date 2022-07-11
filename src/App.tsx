import { useEffect } from 'react';
import { Link } from 'react-scroll';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { DiCss3 } from 'react-icons/di';
import { DiHtml5 } from 'react-icons/di';
import { SiMongodb } from 'react-icons/si';

import './App.css';

function App() {
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
  const animation = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();
  const animation4 = useAnimation();
  const animation5 = useAnimation();

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
        x: 0,
        transition: {
          type: 'spring',
          duration: 1,
          bounce: 0.3,
        },
      });
    }
    if (!inView4) {
      animation4.start({
        x: '-100vw',
      });
    }
  }, [inView4, animation4]);

  useEffect(() => {
    if (inView5) {
      animation5.start({
        x: 0,
        transition: {
          type: 'spring',
          duration: 1,
          bounce: 0.3,
        },
      });
    }
    if (!inView5) {
      animation5.start({
        x: '-100vw',
      });
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
                  <span>02</span> Technologies
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
                E-sports, Music, and the great outdoors<span>.</span>
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
        <div className="about-cont">
          <motion.div className="show"></motion.div>
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
