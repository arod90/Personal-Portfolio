import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { DiCss3, DiHtml5 } from 'react-icons/di';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { BiHelpCircle } from 'react-icons/bi';
import {
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiFirebase,
  SiHeroku,
} from 'react-icons/si';
import { TbBrandVercel } from 'react-icons/tb';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import ReactTooltip from 'react-tooltip';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [orange, setOrange] = useState(false);
  const form: any = useRef();

  // ABOUT SECTION FIRST P TAG
  const [ref, inView] = useInView({
    threshold: 0.9,
  });
  // ABOUT SECTION SECOND P TAG
  const [ref2, inView2] = useInView({
    threshold: 0.9,
  });
  // ABOUT SECTION THIRD P TAG
  const [ref3, inView3] = useInView({
    threshold: 0.9,
  });
  // TS LOGO ANIMATION
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [ref4, inView4] = useInView({
    threshold: 0.5,
  });
  // MONGODB LOGO ANIMATION
  const [ref5, inView5] = useInView({
    threshold: 0.5,
  });
  // JS LOGO ANIMATION
  const [ref6, inView6] = useInView({
    threshold: 0.5,
  });
  // PROJECT 1 ANIMATION
  const [ref7, inView7] = useInView({
    threshold: 0.7,
  });
  // PROJECT 2 ANIMATION
  const [ref8, inView8] = useInView({
    threshold: 0.7,
  });
  // PROJECT 1 INFO
  const [ref9, inView9] = useInView({
    threshold: 0.7,
  });
  // PROJECT 2 INFO
  const [ref10, inView10] = useInView({
    threshold: 0.7,
  });

  // ABOUT SECTION FIRST P TAG
  const animation = useAnimation();
  // ABOUT SECTION SECOND P TAG
  const animation2 = useAnimation();
  // ABOUT SECTION THIRD P TAG
  const animation3 = useAnimation();
  // TS LOGO ANIMATION
  const animation4 = useAnimation();
  // MONGODB LOGO ANIMATION
  const animation5 = useAnimation();
  // JS LOGO ANIMATION
  const animation6 = useAnimation();
  // PROJECT 1 ANIMATION
  const animation7 = useAnimation();
  // PROJECT 2 ANIMATION
  const animation8 = useAnimation();
  // PROJECT 1 INFO
  const animation9 = useAnimation();
  // PROJECT 2 INFO
  const animation10 = useAnimation();

  // ABOUT SECTION FIRST P TAG
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

  // ABOUT SECTION SECOND P TAG
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

  // ABOUT SECTION THIRD P TAG
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

  // TS LOGO ANIMATION
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

  // MONGODB LOGO ANIMATION
  useEffect(() => {
    if (inView5) {
      setIsVisible2(true);
    }
    if (!inView5) {
      setIsVisible2(false);
    }
  }, [inView5, animation5]);

  // JS LOGO ANIMATION
  useEffect(() => {
    if (inView6) {
      setIsVisible3(true);
    }
    if (!inView6) {
      setIsVisible3(false);
    }
  }, [inView6, animation6]);

  // PROJECT 1 ANIMATION
  useEffect(() => {
    if (inView7) {
      animation7.start({
        y: '112%',
        transition: {
          type: 'spring',
          duration: 1,
          bounce: 0.3,
          delay: 0.6,
        },
      });
    }
    if (!inView7) {
      animation7.start({
        y: 0,
      });
    }
  }, [inView7, animation7]);

  // PROJECT 2 ANIMATION
  useEffect(() => {
    if (inView8) {
      animation8.start({
        y: '-112%',
        transition: {
          type: 'spring',
          duration: 1,
          bounce: 0.3,
          delay: 0.55,
        },
      });
    }
    if (!inView8) {
      animation8.start({
        y: 0,
      });
    }
  }, [inView8, animation8]);
  // PROJECT 1 INFO ANIMATION
  useEffect(() => {
    if (inView9) {
      animation9.start({
        opacity: 1,
        transition: {
          // delay: 1.55,
          delay: 1.45,
        },
      });
    }
    if (!inView9) {
      animation9.start({
        opacity: 0,
      });
    }
  }, [inView9, animation9]);

  // PROJECT 2 INFO ANIMATION
  useEffect(() => {
    if (inView10) {
      animation10.start({
        opacity: 1,
        transition: {
          // delay: 1.45,
          delay: 1.55,
        },
      });
    }
    if (!inView10) {
      animation10.start({
        opacity: 0,
      });
    }
  }, [inView10, animation10]);

  // FUNCTIONS

  const toggleOrange = () => {
    setOrange(true);
  };

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_0qfvivd',
        'template_mrfa2si',
        form.current,
        'x3mm8jhRARDdTOeBt'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const notify = () =>
    toast.success('Email sent, I will get back to you soon!', {
      position: 'top-right',
      autoClose: 2500,
      hideProgressBar: false,
    });

  return (
    <div id="top" className="wrapper">
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
          <h2>ABOUT ME</h2>
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
          <BiHelpCircle
            data-for="help-me"
            data-tip="Hover over the icons to see additional info"
            className="help-circle"
          />
          <ReactTooltip id="help-me" />
        </div>
        <div className="tool-cont">
          <motion.div className="tool-wrapper">
            <span
              data-for="ex"
              data-tip="<div class='tooltip-cont'><p><strong>Express</strong> </br></br> Back end framework designed for building web applications and APIs. It has been called the de facto standard server.</p></div>"
            >
              <SiExpress color="#EEEEEE" />
            </span>
            <span
              data-for="heroku"
              data-tip="<div class='tooltip-cont'><p><strong>Heroku</strong> </br></br> Cloud platform as a service supporting several programming languages.</p></div>"
            >
              <SiHeroku color="#430098" />
            </span>
            <span
              // className="ts-logo-wrap"
              // data-logoIsVisible={isVisible}
              // ref={ref4}
              data-for="ts"
              data-tip="<div class='tooltip-cont'><p><strong>TypeScript</strong> </br></br> Programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript.</p></div>"
            >
              <SiTypescript className="ts-logo" />
            </span>
            <span
              className="mdb-logo-wrap"
              data-logoIsVisible2={isVisible2}
              ref={ref5}
              data-for="mdb"
              data-tip="<div class='tooltip-cont'><p><strong>MongoDB</strong> </br></br> Open source cross-platform document-oriented database program. Classified as a NoSQL database.</p></div>"
            >
              <SiMongodb className="mdb-logo" />
            </span>
            <span
              className="js-logo-wrap"
              data-logoIsVisible3={isVisible3}
              ref={ref6}
              data-for="js"
              data-tip="<div class='tooltip-cont'><p><strong>JavaScript</strong> </br></br> Programming language that is one of the core technologies of the World Wide Web, 98% of websites use JS on the client side.</p></div>"
            >
              <SiJavascript className="js-logo" />
            </span>
            <span
              data-for="firebase"
              data-tip="<div class='tooltip-cont'><p><strong>FIREBASE</strong> </br></br> Firebase is a platform developed by Google for creating mobile and web applications.</p></div>"
            >
              <SiFirebase color="#FFA611" />
            </span>
            <span
              data-for="node"
              data-tip="<div class='tooltip-cont'><p><strong>Node.js</strong> </br></br> Open-source, cross-platform, back-end JavaScript runtime environment, executes JavaScript code outside a web browser.</p></div>"
            >
              <FaNodeJs color="#68A063" />
            </span>
            <span
              data-for="redux"
              data-tip="<div class='tooltip-cont'><p><strong>REDUX</strong> </br></br> Open-source JavaScript library for managing and centralizing application state.</p></div>"
            >
              <SiRedux color="#764ABC" />
            </span>
            <span
              data-for="react"
              data-tip="<div class='tooltip-cont'><p><strong>REACT</strong> </br></br> Free and open-source front-end JavaScript library for building user interfaces.</p></div>"
            >
              <FaReact className="react-logo" />
            </span>
            <span
              data-for="html"
              data-tip="<div class='tooltip-cont'><p><strong>HTML5</strong> </br></br> The standard markup language for documents designed to be displayed in a web browser.</p></div>"
            >
              <DiHtml5 color="#FF5733" />
            </span>
            <span
              data-for="css"
              data-tip="<div class='tooltip-cont'><p><strong>CSS3</strong> </br></br> Stylesheet language used to describe the presentation of a document written in HTML.</p></div>"
            >
              <DiCss3 className="css-logo" />
            </span>
            <span
              data-for="vercel"
              data-tip="<div class='tooltip-cont'><p><strong>VERCEL</strong> </br></br> Platform for frontend frameworks and static sites designed to develop, preview, and ship sites.</p></div>"
            >
              <TbBrandVercel color="#EEEE" />
            </span>
          </motion.div>
          <ReactTooltip html={true} id="vercel" />
          <ReactTooltip html={true} id="css" />
          <ReactTooltip html={true} id="html" />
          <ReactTooltip html={true} id="react" />
          <ReactTooltip html={true} id="redux" />
          <ReactTooltip html={true} id="node" />
          <ReactTooltip html={true} id="firebase" />
          <ReactTooltip html={true} id="js" />
          <ReactTooltip html={true} id="mdb" />
          <ReactTooltip html={true} id="ts" />
          <ReactTooltip html={true} id="heroku" />
          <ReactTooltip html={true} id="ex" />
        </div>
      </section>
      <section className="work section">
        <div className="num-name">
          {/* PARALLAX TNE NUM NAME! */}
          <h1 id="03" className="section-num">
            03
          </h1>
          <h2>MY WORK</h2>
        </div>
        <div className="project-cont">
          <div className="project1">
            <div className="project1-info">
              <motion.h1 animate={animation9}>TRVL Advisor</motion.h1>
              <motion.p animate={animation9}>
                Browse attractions, restaurant menus, and book hotels in major
                cities around the world.
              </motion.p>
              <motion.a
                animate={animation9}
                href="https://www.trvladvisor.me/"
                target="_blank"
              >
                Visit TRVL Advisor
              </motion.a>
            </div>
            <motion.div className="project1-cont" animate={animation7}>
              <div className="frame">
                <div className="red-ball"></div>
                <div className="yellow-ball"></div>
                <div className="green-ball"></div>
              </div>
              <div className="project1-screen"></div>
              <div className="laptop-bottom">
                <div className="dent"></div>
              </div>
            </motion.div>
          </div>
          <span ref={ref7} className="spacer"></span>
          <span ref={ref8} className="spacer"></span>
          <span ref={ref9} className="spacer"></span>
          <span ref={ref10} className="spacer"></span>
          <div className="project2">
            <div className="project2-info">
              <motion.h1 animate={animation10}>Arctic Desert</motion.h1>
              <motion.p animate={animation9}>
                Collaborative platform crafted with developer teams in mind,
                Kanban boards, chat functionality, and Git workflow all in one
                place.
              </motion.p>
              <motion.a
                animate={animation9}
                href="https://www.articdesert.click/"
                target="_blank"
              >
                Visit Arctic Desert
              </motion.a>
            </div>
            <motion.div animate={animation8} className="project2-cont">
              <div className="frame">
                <div className="red-ball"></div>
                <div className="yellow-ball"></div>
                <div className="green-ball"></div>
              </div>
              <div className="project2-screen"></div>
              <div className="laptop-bottom">
                <div className="dent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="contact section">
        <div className="num-name">
          <h1 data-isOrange={orange} id="04" className="section-num">
            04
          </h1>
          <h2 data-isOrange={orange}>CONTACT ME</h2>
        </div>
        <div className="contact-form">
          <form
            id="contact-form"
            autoComplete="off"
            ref={form}
            onSubmit={sendEmail}
          >
            <label>What's your name</label>
            <input onSelect={toggleOrange} type="text" name="from_name" />
            <label>where can I reach you</label>
            <input
              data-for="enter-email"
              data-tip="Enter your e-mail"
              onSelect={toggleOrange}
              type="email"
              name="from_contact"
            />
            <label>Leave me a message</label>
            <textarea onSelect={toggleOrange} name="message" rows={5} />
            <button onClick={notify} type="submit" value="Send">
              Lets connect
            </button>
            <ToastContainer toastClassName="email-toast" />
            <ReactTooltip id="enter-email" />
          </form>
        </div>
      </section>
      <Link to="top" smooth={true}>
        <BsFillArrowUpCircleFill
          data-for="to-top"
          data-tip="Back to top"
          className="back-to-top"
          data-place="left"
          size={60}
        />
      </Link>
      <ReactTooltip id="to-top" />
    </div>
  );
}

export default App;
