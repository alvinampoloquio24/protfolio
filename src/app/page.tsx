/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import MoreHorizSharpIcon from "@mui/icons-material/MoreHorizSharp";
import DeblurSharpIcon from "@mui/icons-material/DeblurSharp";
import RocketLaunchSharpIcon from "@mui/icons-material/RocketLaunchSharp";
import QueryStatsSharpIcon from "@mui/icons-material/QueryStatsSharp";
import ColorLensSharpIcon from "@mui/icons-material/ColorLensSharp";
import MobileFriendlySharpIcon from "@mui/icons-material/MobileFriendlySharp";
import RoomPreferencesSharpIcon from "@mui/icons-material/RoomPreferencesSharp";
import Slider from "./slider";
import SendIcon from "@mui/icons-material/Send";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import RoomIcon from "@mui/icons-material/Room";

export default function Home() {
  const slides = [
    {
      img: "https://stories.isu.pub/61503582/images/1_original_file_I0.jpg",
      title: "My protfolio",
      description:
        "Explore my portfolio to discover a showcase of innovative projects,",
    },
    {
      img: "https://www.compliancequest.com/wp-content/uploads/2023/02/document-management-video.jpg",
      title: "Request System",
      description:
        "A= digital platform or software that facilitates the efficient and organized exchange of documents between individuals or entities. Users can submit requests for specific documents, such as contracts, reports, or forms, through the system.",
    },
    {
      img: "https://media.australian.museum/media/dd/images/background-black-bright-220618.ffbdd38.width-1600.d3034c9.jpg",
      title: "Death fund System",
      description:
        "A system offers efficient fund management, allowing users to designate beneficiaries, set up automatic contributions, and access funds seamlessly when needed. ",
    },
    {
      img: "https://assets-global.website-files.com/60d7425179713a663a575425/62c7c239cff30806e5b05e93_job-search-in-newspaper-vector.jpg",
      title: "Jobs Q",
      description:
        "A digital platform designed to connect job seekers with employers or recruiters. Users can create profiles, upload resumes, and search for job opportunities based on criteria such as location, industry, and job type.",
    },
  ];
  return (
    <>
      <div
        id="home"
        className="h-screen flex flex-col flex-grow"
        style={{ backgroundColor: "#29384F" }}
      >
        {/** header */}
        <div className="flex  items-center">
          <div className="py-6 basis-1/2">
            <div
              className="text-2xl px-10 font-extrabold k2d"
              style={{ color: "#00DFC3" }}
            >
              A L D E V
            </div>
          </div>
          {/* Ensure the parent div of the list and the hire me button stretches fully and justifies content */}
          <div className="flex justify-between items-center gap-9 k2d">
            <ul className="text-xl flex gap-9 text-white">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#service">Services</a>
              </li>

              <li>
                <a href="#project">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <div
              className="px-6 py-2 rounded-md text-black font-semibold flex items-center k2d"
              style={{ backgroundColor: "#00DFC3" }}
            >
              <a href="#contact">
                <p>Hire me</p>
              </a>
            </div>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-2  items-center justify-center">
          <div className="  flex" style={{ backgroundColor: "#29384F" }}>
            <div className=" flex basis-1/4 items-center py-32 justify-center">
              <ul className=" flex gap-9 flex-col ">
                <li>
                  <FacebookIcon sx={{ fontSize: 46, color: "#FFF" }} />
                </li>
                <li>
                  <GitHubIcon sx={{ fontSize: 46, color: "#FFF" }} />
                </li>
                <li>
                  <TelegramIcon sx={{ fontSize: 46, color: "#FFF" }} />
                </li>
                <li>
                  <TwitterIcon sx={{ fontSize: 46, color: "#FFF" }} />
                </li>
              </ul>
            </div>
            <div
              className=" flex  flex-1 flex-col justify-center gap-5 k2d"
              style={{ color: "#00DFC3" }}
            >
              <p className=" text-4xl">Hi I'am</p>
              <p className=" text-7xl font-bold ">ALVIN AMPOLOQUIO</p>
              <p className=" text-4xl">Junior Fullstack</p>
              <p className=" text-4xl">Web Developer</p>
            </div>
          </div>

          <div className="p-5  flex items-center justify-center ">
            <div className="relative p-14">
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-blur-icon">
                <DeblurSharpIcon sx={{ fontSize: 520, color: "#00DFC3" }} />
              </div>
              <img
                src="https://res.cloudinary.com/dpg0qrbxd/image/upload/v1710926297/Untitled_design_ff6sf8.png"
                alt=""
                className="w-80 rounded-full relative z-10"
              />
            </div>
          </div>
        </div>
        {/** footer */}
        <div className=" grid grid-cols-2 k2d">
          <div className="py-4 flex justify-center items-center">
            <div
              className="text-2xl px-10 font-extrabold flex items-center justify-center gap-5"
              style={{ color: "#00DFC3" }}
            >
              <p className=" text-6xl">2</p>
              <p className="font-thin">years of experience</p>
            </div>
            <div
              className="text-2xl px-10 font-extrabold flex items-center justify-center gap-5"
              style={{ color: "#00DFC3" }}
            >
              <p className=" text-6xl">7</p>
              <p className=" font-thin">projects</p>
            </div>
          </div>
          <div className=" flex items-center justify-center gap-6">
            <img
              src="https://www.svgrepo.com/show/303266/nodejs-icon-logo.svg"
              alt=""
              className=" w-12 h-12"
            />
            <img
              src="https://www.svgrepo.com/show/354259/react.svg"
              alt=""
              className=" w-12 h-12"
            />
            <img
              src="https://www.svgrepo.com/show/303301/postgresql-logo.svg"
              alt=""
              className=" w-12 h-12"
            />
            <img
              src="https://symbols.getvecta.com/stencil_261/25_mongodb.cef7d00b8a.svg"
              alt=""
              className=" w-12 h-12"
            />
            <img
              src="https://www.svgrepo.com/show/374146/typescript-official.svg"
              alt=""
              className=" w-12 h-12"
            />
            <img
              src=" https://www.svgrepo.com/show/448221/docker.svg"
              alt=""
              className=" w-12 h-12"
            />
          </div>
          {/* Ensure the parent div of the list and the hire me button stretches fully and justifies content */}
        </div>
      </div>
      {/* 2222222222222222222 */}
      <div
        id="about"
        className="h-screen flex flex-grow"
        style={{
          backgroundImage:
            'url("https://res.cloudinary.com/dpg0qrbxd/image/upload/v1710833406/Untitled-_1__nxhmj0.png")',
          backgroundColor: "#29384F",
          backgroundSize: "cover", // Optional: Adjust as needed
          backgroundPosition: "center", // Optional: Adjust as needed
        }}
      >
        {/* left sifd */}
        <div className=" flex-1 flex items-center justify-center flex-grow ">
          <div className="flex py-24 px-24 flex-col justify-center gap-5 k2d">
            <p
              className=" text-5xl font-extrabold"
              style={{ color: "#00606E" }}
            >
              About Me
            </p>
            <hr
              className=" h-1  w-1/2 rounded-md"
              style={{ backgroundColor: "#00606E" }}
            />

            <p className=" text-xl " style={{ color: "#00606E" }}>
              As a seasoned web developer with a passion for both backend and
              frontend development, I bring over two years of hands-on
              experience to every project I undertake. While I have a strong
              foundation in both areas, my expertise particularly shines in
              backend development, where I thrive on the intricacies of data
              management, server-side logic, and system architecture.
            </p>
          </div>
        </div>
        {/* right side */}
        <div className="  flex-1 flex py-24 flex-col items-center gap-6">
          <div className=" flex  flex-col">
            <p className=" text-5xl font-bold k2d" style={{ color: "#00606E" }}>
              Technologies
            </p>
            <hr
              className=" h-1  rounded-md mt-2"
              style={{ backgroundColor: "#00606E" }}
            />
          </div>
          <div className="grid grid-cols-5 gap-4">
            <img
              src="https://www.svgrepo.com/show/439290/react.svg"
              alt=""
              className="w-16 h-16"
            />
            <img
              src="https://www.svgrepo.com/show/303658/nodejs-1-logo.svg"
              alt=""
              className="w-16 h-16"
            />
            <img
              src="https://www.svgrepo.com/show/303301/postgresql-logo.svg"
              alt=""
              className="w-16 h-16"
            />
            <img
              src="https://symbols.getvecta.com/stencil_261/25_mongodb.cef7d00b8a.svg"
              alt=""
              className="w-16 h-16"
            />
            <img
              src="https://www.svgrepo.com/show/374146/typescript-official.svg"
              alt=""
              className="w-16 h-16"
            />
            <img
              src="https://www.svgrepo.com/show/448221/docker.svg"
              alt=""
              className="w-16 h-16"
            />
            <img
              src="https://symbols.getvecta.com/stencil_24/7_amazon-s3-bucket.b7a1cbdb89.svg"
              alt=""
              className="w-16 h-16"
            />
            <img
              src=" https://symbols.getvecta.com/stencil_9/7_ec2-instance-with-cloudwatch.edee660f2d.svg"
              alt=""
              className="w-16 h-16"
            />
            <img
              src=" https://symbols.getvecta.com/stencil_261/38_redis.ebcdb3d43b.svg"
              alt=""
              className="w-16 h-16"
            />
            <img
              src="https://symbols.getvecta.com/stencil_25/41_javascript.0ca26ec4ab.svg"
              alt=""
              className="w-16 h-16"
            />
            <img
              src=" https://symbols.getvecta.com/stencil_25/14_css3.d930bfb832.svg"
              alt=""
              className="w-16 h-16"
            />
            <img
              src="https://symbols.getvecta.com/stencil_25/37_html5.d4d8050235.svg"
              alt=""
              className="w-16 h-16"
            />
            <img
              src="https://www.svgrepo.com/show/303109/adobe-xd-logo.svg"
              alt=""
              className="w-16 h-16"
            />
            <img
              src="https://www.svgrepo.com/show/369457/nextjs.svg"
              alt=""
              className="w-16 h-16"
            />
            <img
              src="https://www.svgrepo.com/show/376367/express.svg"
              alt=""
              className="w-16 h-16"
            />
          </div>
        </div>
      </div>
      {/* 333333333333333 */}
      <div
        id="service"
        className=" h-screen  flex flex-col justify-between  k2d"
        style={{ backgroundColor: "#29384F" }}
      >
        <div className="flex items-center justify-center">
          {" "}
          <div className=" flex  flex-col gap-6 flex-1 p-24">
            <MoreHorizSharpIcon sx={{ fontSize: 100, color: "#00DFC3" }} />
            <p className=" text-6xl font-bold" style={{ color: "#FFF" }}>
              Dream.Plan.Create.
            </p>
            <p className=" text-3xl" style={{ color: "#FFF" }}>
              Turn you ideas into reality
            </p>
            <p className=" text-xl font-thin" style={{ color: "#FFF" }}>
              Your vision deserves more than just a place in your imagination.
              Whether it's a groundbreaking app, a transformative web project,
              or a digital masterpiece, let's collaborate to bring it to life.
              Tell us what you dream about, and together, we'll craft it into
              existence. With our combined expertise and dedication, we'll
              navigate the complexities and turn your vision into a tangible
              reality. Let's embark on this journey together, fueled by
              creativity and driven by passion, to shape a future where your
              dreams become achievements.
            </p>
          </div>
          <div className=" flex  justify-center p-24 flex-col gap-6 flex-1">
            <div className=" flex items-center gap-5">
              <RocketLaunchSharpIcon sx={{ fontSize: 42, color: "#00DFC3" }} />
              <p className=" text-2xl font-thin" style={{ color: "#FFF" }}>
                Free consultation to kickstart your project
              </p>
            </div>
            <div className=" flex items-center gap-5">
              <QueryStatsSharpIcon sx={{ fontSize: 42, color: "#00DFC3" }} />
              <p className=" text-2xl font-thin" style={{ color: "#FFF" }}>
                In-depth analysis and strategy development.
              </p>
            </div>
            <div className=" flex items-center gap-5">
              <ColorLensSharpIcon sx={{ fontSize: 42, color: "#00DFC3" }} />
              <p className=" text-2xl font-thin" style={{ color: "#FFF" }}>
                Custom designs that resonate with your brand.
              </p>
            </div>
            <div className=" flex items-center gap-5">
              <MobileFriendlySharpIcon
                sx={{ fontSize: 42, color: "#00DFC3" }}
              />
              <p className=" text-2xl font-thin" style={{ color: "#FFF" }}>
                Responsive and mobile-friendly websites.
              </p>
            </div>
            <div className=" flex items-center gap-5">
              <RoomPreferencesSharpIcon
                sx={{ fontSize: 42, color: "#00DFC3" }}
              />
              <p className=" text-2xl font-thin" style={{ color: "#FFF" }}>
                Robust and scalable web applications.
              </p>
            </div>
          </div>
        </div>
        <div className=" w-full flex flex-col ">
          <a href="#project">
            {" "}
            <div className="flex items-center justify-end ">
              <p
                className="  bg-black pt-2 pl-6 rounded-tl-lg k2d"
                style={{ backgroundColor: "#00DFC3" }}
              >
                Projects
              </p>

              <ExpandMoreIcon
                sx={{ fontSize: 32, color: "#29384F" }}
                style={{ backgroundColor: "#00DFC3" }}
                className=""
              />
            </div>
          </a>

          <hr
            style={{
              backgroundColor: "#00DFC3",
              height: "4px",
              border: "none",
            }}
          />
        </div>
      </div>
      {/* 444444444444444 */}
      <div
        id="project"
        className=" h-screen flex p-32  k2d flex-col gap-4"
        style={{ backgroundColor: "#29384F" }}
      >
        <p className=" text-7xl font-bold" style={{ color: "#FFF" }}>
          My Projects
        </p>
        <p className=" text-4xl" style={{ color: "#FFF" }}>
          Some of my projects i build so far.
        </p>

        <div className="flex p-12">
          <Slider slides={slides} />
        </div>
      </div>
      {/* 5555555555555 */}
      <div
        id="#more-contact"
        className="h-screen flex flex-col items-center gap-6 justify-between"
        style={{ backgroundColor: "#29384F" }}
      >
        <div className="flex  flex-col items-center mt-24">
          <p className="text-8xl font-bold text-white k2d text-center">
            Get in touch
          </p>
          <div
            className="w-full max-w-md p-6 rounded-md"
            style={{ color: "#00606E" }}
          >
            <p className="text-xl font-thin text-white k2d mb-2">Fullname</p>
            <input
              type="text"
              placeholder="Your Full Name"
              className="p-2 border rounded-md w-full mb-4"
            />
            <p className="text-xl font-thin text-white k2d mb-2">Email</p>

            <input
              type="email"
              placeholder="Your Email Address"
              className="p-2 border rounded-md w-full mb-4"
            />
            <p className="text-xl font-thin text-white k2d mb-2">Message</p>
            <textarea
              placeholder="Message"
              className="p-2 border rounded-md w-full mb-4"
            ></textarea>

            <button
              className="py-2 bg-slate-100 w-full flex items-center justify-center rounded-md"
              style={{ backgroundColor: "#00DFC3" }}
            >
              <SendIcon sx={{ fontSize: 32, color: "#29384F" }} />
              <p className="font-semibold text-lg" style={{ color: "#29384F" }}>
                Send
              </p>
            </button>
          </div>
        </div>

        <div className=" w-full flex flex-col">
          <a href="#more-contact">
            {" "}
            <div className="flex items-center justify-end">
              <p
                className="  bg-black pt-2 pl-6 rounded-tl-lg k2d"
                style={{ backgroundColor: "#00DFC3" }}
              >
                More Contact
              </p>
              <ExpandMoreIcon
                sx={{ fontSize: 32, color: "#29384F" }}
                style={{ backgroundColor: "#00DFC3" }}
                className=""
              />
            </div>
          </a>
          <hr
            style={{
              backgroundColor: "#00DFC3",
              height: "4px",
              border: "none",
            }}
          />
        </div>
      </div>
      <div
        id="more-contact"
        className="h-screen flex justify-end items-center"
        style={{
          backgroundColor: "#00DFC3",
        }}
      >
        <img
          src="https://i.postimg.cc/MKMXDqG6/Untitled-4.png"
          alt=""
          className=" h-full w-full absolute"
        />
        <img
          src="https://i.postimg.cc/hjKvcWPt/Untitled-8.png"
          alt=""
          className=" h-full w-full absolute"
        />
        <div className="flex flex-1 top-28 relative h-2/3 items-end">
          <p
            className="text-4xl px-6 "
            style={{
              color: "#00DFC3",
            }}
          >
            A L D E V
          </p>
        </div>
        <div className=" absolute px-8 abel flex justify-end flex-col items-end flex-1">
          <p
            className=" text-6xl font-semibold"
            style={{
              color: "#29384F",
            }}
          >
            ALVIN AMPOLOQUIO
          </p>
          <p
            className=" text-4xl "
            style={{
              color: "#29384F",
            }}
          >
            Junior Web developer
          </p>
          <div
            className="pb-1 my-10 w-full rounded-xl "
            style={{
              backgroundColor: "#29384F",
            }}
          ></div>
          <div className="flex gap-6 mb-4">
            <div className="flex flex-col -space-y-1 justify-center items-end">
              <p
                className=" text-3xl"
                style={{
                  color: "#29384F",
                }}
              >
                +639 1652 58823
              </p>
              <p
                className=" text-3xl "
                style={{
                  color: "#29384F",
                }}
              >
                +639 1652 58823
              </p>
            </div>
            <div
              className=" p-5"
              style={{
                backgroundColor: "#29384F",
              }}
            >
              <PhoneIcon sx={{ fontSize: 32, color: "#00DFC3" }} className="" />
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex flex-col -space-y-1 justify-center items-end">
              <p
                className=" text-3xl "
                style={{
                  color: "#29384F",
                }}
              >
                alvin.ampoloquio24@gmail.com
              </p>
              <p
                className=" text-3xl "
                style={{
                  color: "#29384F",
                }}
              >
                angrynissan5@gmail.com
              </p>
            </div>
            <div
              className=" p-5"
              style={{
                backgroundColor: "#29384F",
              }}
            >
              <EmailIcon sx={{ fontSize: 32, color: "#00DFC3" }} className="" />
            </div>
          </div>
          <div className="flex gap-6 mt-4">
            <div className="flex flex-col -space-y-1 justify-center items-end">
              <p
                className=" text-3xl "
                style={{
                  color: "#29384F",
                }}
              >
                Tubod, Candijay, Bohol
              </p>
              <p
                className=" text-3xl "
                style={{
                  color: "#29384F",
                }}
              >
                Philipines
              </p>
            </div>
            <div
              className=" p-5"
              style={{
                backgroundColor: "#29384F",
              }}
            >
              <RoomIcon sx={{ fontSize: 32, color: "#00DFC3" }} className="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
