import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { FingerPrintIcon, UsersIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from 'emailjs-com';
import * as yup from 'yup';
import { PageTitle } from "../widgets/layout/page-title";
import { Footer } from "../widgets/layout/footer";
import { FeatureCard } from "../widgets/cards/feature-card";

import { contactData } from "../data/contact-data";

import { featuresData } from "../data/features-data";

const schema = yup.object().shape({
  first_name: yup.string().required("First Name is required"),
  last_name: yup.string().required("Last Name is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  message: yup.string().required("Message is required").min(10, "Message should be at least 10 characters").max(5000,"Message should be at most 5000 characters"),
});

export function Home() {
  const {
    register, // to register the input fields
    handleSubmit, // to handle form submission
    formState: { errors }, // to access errors from validation
  } = useForm({
    resolver: yupResolver(schema), // Integrate Yup with react-hook-form
  });
  
  const onSubmit = async (data) => {
    console.log(data)
    try {
      const response = await fetch(
        "http://172.20.10.9:8000/api/submit/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        const errorData = await response.json(); // Assuming server returns JSON error message
        throw new Error(
          `Server error: ${response.status} - ${errorData.message}`
        );
      }

      const responseData = await response.json();
      console.log("Success:", responseData);
      // Handle success (e.g., show a success message, redirect, etc.)
    } catch (error) {
      console.error("Error:", error);
      // Handle error (e.g., show an error message)
    }
  };


  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         "http://172.20.10.9:8000/api/submit/",
  //         {
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );

  //       const data = await response.json();
  //       console.log(data);

  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/background-6.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
            <Typography variant="h1" color="white" className="mb-6 font-black flex items-center justify-center">
            <img src="/img/logo.svg" alt="ByteLabs Logo" className="h-20 w-20 mr-4" />
                 Byte <span className="text-orange-500">Labs</span>
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
              Your Vision becomes reality
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-white px-4 pb-20 pt-4 overflow-hidden">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
              A dynamic tech landscape that grows with your needs. 
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
              Your business is one of a kind. When faced with challenges, the best technical solutions are those crafted specifically for you. At Bytelabs, we provide innovative web development services that empower you to achieve and surpass your objectives. If the ideal solution doesn’t exist yet, we’ll create it for you. 

 

              </Typography>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
                <CardHeader floated={false} className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/background-2.jpg"
                    className="w-fit h-fit object-cover"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    Enterprise
                  </Typography>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 mt-2 font-bold"
                  >
                    Top Notch Services
                  </Typography>
{    /*              <Typography className="font-normal text-blue-gray-500">
                  we prioritize open communication. Together, we’ll assess your current technology landscape and formulate a vision for future growth. With our extensive expertise in web solutions and system integrations, we lay a robust technological foundation that supports sustainable success. We measure our success by your ability to thrive, both now and in the years to come. 
                  </Typography>*/}
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
    
      <section className="relative bg-white py-24 px-4">
        <div className="container mx-auto">
          <PageTitle section="More-About-Us" heading="Grow With your Business">
          From the outset, we prioritize open communication, helping to train your team and foster collaboration. Together, we’ll assess your current technology landscape and formulate a vision for future growth. With our extensive expertise in web solutions and system integrations, we lay a robust technological foundation that supports sustainable success. We measure our success by your ability to thrive, both now and in the years to come. 

          </PageTitle>
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
          {contactData.map(({ title, Icon, description }) => (
            <Card
              key={title}
              color="transparent"
              shadow={false}
              className="text-center text-blue-gray-900"
            >
              <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-blue-gray-900 shadow-lg shadow-gray-500/20">
                <Icon className="w-6 h-6 text-black" /> {/* Use Icon directly */}
              </div>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {title}
              </Typography>
              <Typography className="font-normal text-blue-gray-500">
                {description}
              </Typography>
            </Card>
          ))}
          
          </div>
          <PageTitle section="Contact Us" heading="Want to work with us?">
            Complete this form and we will get back to you in 24 hours.
          </PageTitle>
          <form
          className="mx-auto w-full mt-12 lg:w-5/12"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-5 flex gap-8">
            <div className="w-full">
              <Input
                variant="outlined"
                size="lg"
                label="First Name"
                {...register("first_name")}
              />
              {errors.first_name && (
                <Typography color="red" className="mt-1">
                  {errors.first_name.message}
                </Typography>
              )}
            </div>

            <div className="w-full">
              <Input
                variant="outlined"
                size="lg"
                label="Last Name"
                {...register("last_name")}
              />
              {errors.last_name && (
                <Typography color="red" className="mt-1">
                  {errors.last_name.message}
                </Typography>
              )}
            </div>
          </div>

          <div className="mb-5">
            <Input
              variant="outlined"
              size="lg"
              label="Email Address"
              {...register("email")}
            />
            {errors.email && (
              <Typography color="red" className="mt-1">
                {errors.email.message}
              </Typography>
            )}
          </div>

          <div className="mb-5">
            <Textarea
              variant="outlined"
              size="lg"
              label="Message"
              rows={8}
              {...register("message")}
            />
            {errors.message && (
              <Typography color="red" className="mt-1">
                {errors.message.message}
              </Typography>
            )}
          </div>

          <Button type="submit" variant="gradient" size="lg" className="mt-8" fullWidth>
            Send Message
          </Button>
        </form>
        </div>
      </section>
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Home;
