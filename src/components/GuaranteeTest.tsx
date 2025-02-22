"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function GuaranteeTest(props: any) {
  const [reg, setReg] = useState<string>("");
  const { country, city, title, region } = props;

  useEffect(() => {
    if (region !== undefined) {
      setReg(region);
    } else {
      setReg("");
    }
  }, [region]);

  const data = [
    {
      header: "100% Plagiarism FREE",
      details: `When you avail Asy and the research of your work. Also, the Ph.D. certified online  ${
        title ? ` ${title}` : `Academic Assistance`
      } providers associated with us ensure they work on each document dedicatedly. Every scholar gets a document that is written from scratch to ensure it is original and unique. We understand that the documents go through rigorous scrutiny before evaluation in the universities. We take pride in assuring top grades to students by providing 100% original documents that are proofread and edited thoroughly.`,
      image: "/ss1.png",
    },
    {
      header: "100% Money Back Guarantee",
      details: `We want our customers to always be in a win-win situation. Although we rarely get complaints from the scholars, in case they have any, we ensure to refund the order amount. We make it a point to return all your money if the services you have availed from us fail to serve the purpose. College goers often take pride and say, “Onlineassignmentdesk.com is fair and affordable.” We understand it is extremely important for the students to trust the help service provider for a healthy business relationship.`,
      image: "/ss2.png",
    },
    {
      header: "100% Satisfaction",
      details: `We strive to deliver high-quality documents that lead to customer satisfaction. Our strict policies are designed to assure there are no compromises made with the quality of your documents. The expert  ${
        title ? ` ${title}` : `Academic Assistance`
      } ${city} providers associated with us aim to deliver high quality and well-researched documents that ensure excellent grades to the students availing Help from us. If in any case, you face difficulties, you can always reach to our customer care executives to get your problems solved.`,
      image: "/ss4.png",
    },
    {
      header: "Unlimited Revisions",
      details: `When you reach to our  ${
        title ? ` ${title}` : `Academic Assistance`
      } ${city} for your documents we deliver you comprehensive tasks. If in case you have any doubt in the tasks that are delivered to you, we offer unlimited revisions that too free of cost. We ensure to deliver the tasks before hand so that the scholars get enough time to research and review the complete work. With our free revisions you can always boast, “Onlineassignmentdesk.com is always there for me, even after delivery.”`,
      image: "/ss6.png",
    },
    {
      header: "Lowest Price",
      details: `With a transparent pricing structure, we ensure students do not feel cheated when they avail our online  ${
        title ? ` ${title}` : `Academic Assistance`
      }. We make it a point that the help services that one avails do not add burden to the pocket. With regular discounts and several freebies, we have designed our services to ensure they fit your budget.`,
      image: "/sideline1.png",
    },
  ];

  return (
    <div className="bg-white flex flex-col justify-center items-center text-center py-20 myContainer ">
      <h3 className="uppercase section-main-heading text-2xl md:text-4xl font-semibold">
        -OUR GUARANTEES
      </h3>
      <h4 className="section-sub-heading text-lg py-1 mt-2">
        Know Why Students Rely On Our help Services
      </h4>
      <p className="text-primary-orange  text-[13px] sm:text-[16px] mt-6">
        Onlineassignmentdesk.com promises every student to provide the best quality work and
        maximum satisfaction. Heres why you should trust us.
      </p>
      <div className="flex justify-center items-start gap-10 my-10 flex-wrap">
        {data.map((item: any, index: number) => (
          <div className="mt-4 w-[45%] max-sm:w-[100%]" key={index}>
            <img
              height={"100"}
              width={"100"}
              src={item.image}
              alt="img"
              className="self-center  h-[100px] w-[100px] max-w-[100px] mx-auto mb-2"
            ></img>
            <h3 className="text-[24px] text-[#292929] font-medium">
              {item.header}
            </h3>
            <p className=" text-base font-medium  leading-[20px] text-[#2A2A2A] mt-2">
              {item.details}
            </p>
          </div>
        ))}
      </div>
    

      <div className="relative w-[70%] md:w-[25%] mx-auto hover:scale-95 transition-all duration-300 ease-in-out">
          {" "}
          <Link
            href={`${reg}/order?coupon=GG-50%off`}
            // href={`https://api.whatsapp.com/send?phone=${number}&text=Hello Gogrades!`}
            className="bg-[#ff8e38] flex items-center justify-center text-center w-[300px] h-12 z-[11] text-xl text-white font-semibold absolute"
          >
          Order Now
          </Link>
          <div className="bg-[#383838] w-[300px] h-12 ml-1.5 mt-2.5 text-xl text-white font-semibold absolute"></div>
        </div>

    </div>
  );
}
