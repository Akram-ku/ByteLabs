import PropTypes from "prop-types";
import { Typography, IconButton } from "@material-tailwind/react";

const year = new Date().getFullYear();

export function Footer({
  title = "Byte Labs",
  description = "Build A bright future",
  // socials = [
  //   {
  //     color: "gray",
  //     name: "twitter",
  //     path: "https://www.twitter.com/creativetim",
  //   },
  //   {
  //     color: "gray",
  //     name: "envelope",
  //     path: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
  //   },
  //   {
  //     color: "gray",
  //     name: "instagram",
  //     path: "https://www.instagram.com/creativetimofficial/",
  //   },
  //   {
  //     color: "black",
  //     name: "github",
  //     path: "https://github.com/creativetimofficial/material-tailwind",
  //   },
  // ],
  menus = [], // Set to an empty array
  copyright = (
    <>
      Copyright © {year} <span>Byte Labs</span>.
    </>
  ),
}) {
  return (
    <footer className="relative px-4 pt-8 pb-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap pt-6 text-center lg:text-left">
          <div className="w-full px-4 lg:w-6/12">
            <Typography variant="h4" className="mb-4" color="blue-gray">
              {title}
            </Typography>
            <Typography className="font-normal text-blue-gray-500 lg:w-2/5">
              {description}
            </Typography>
        { /*   <div className="mx-auto mt-6 mb-8 flex justify-center gap-2 md:mb-0 lg:justify-start">
              {socials.map(({ color, name, path }) => (
                <a
                  key={name}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton
                    color="black"
                    className="rounded-full shadow-none bg-transparent"
                  >
                    <Typography color={color}>
                      <i className={`fa-brands fa-${name}`} />
                    </Typography>
                  </IconButton>
                </a>
              ))}
            </div> */}
          </div>
          {/* The menus section will be skipped since `menus` is empty */}
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center">
            <Typography
              variant="small"
              className="font-normal text-blue-gray-500"
            >
              {copyright}
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  socials: PropTypes.arrayOf(PropTypes.object),
  menus: PropTypes.arrayOf(PropTypes.object),
  copyright: PropTypes.node,
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
