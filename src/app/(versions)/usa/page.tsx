"use client";

import EveryStudentTest from "@/components/EveryStudentTest";
import FreeSample from "@/components/FreeSample";
import Guarantee from "@/components/Guarantee";
import Herosection from "@/components/Herosection";
import HowItWorks from "@/components/HowItWorks";
import MobileModal from "@/components/MobileModal";
import Modal from "@/components/Modal";
import OurServices from "@/components/OurServices";
import Reviews from "@/components/Reviews";
import Subjects from "@/components/Subjects";
import TrustedPartnerTest from "@/components/CustomDivider";
import Trusted from "@/components/Trusted";
import WhatsappTest from "@/components/WhatsappTest";
import WhyGoGradesTest from "@/components/WhyUs";
import { redirect, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
// import Footer from "../../components/Footer";
// import Navbar from "../../components/Navbar";
import { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import CustomDivider from "@/components/CustomDivider";

export const metalist = [
  {
    url: "aus",
    metatitle: "Best Academic Consultancy | Onlineassignmentdesk.com",
    metadescription:
      "Get online assessment editing services and help for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Academic Consultancy",
  },
  {
    url: "ca",
    metatitle: "Best Academic Consultancy | Onlineassignmentdesk.com",
    metadescription:
      "Get online assessment editing services and help for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Academic Consultancy",
  },
  {
    url: "eu",
    metatitle: "Best Academic Consultancy | Onlineassignmentdesk.com",
    metadescription:
      "Get online assessment editing services and help for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Academic Consultancy",
  },
  {
    url: "me",
    metatitle: "Best Academic Consultancy | Onlineassignmentdesk.com",
    metadescription:
      "Get online assessment editing services and help for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Academic Consultancy",
  },
  {
    url: "uk",
    metatitle: "Best Academic Consultancy | Onlineassignmentdesk.com",
    metadescription:
      "Get online assessment editing services and help for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Academic Consultancy",
  },
  {
    url: "/usa",
    metatitle: "Best Academic Consultancy | Onlineassignmentdesk.com",
    metadescription:
      "Get online assessment editing services and help for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Academic Consultancy",
  },
  {
    url: "essay-help",
    metatitle: "Best Essay Help Service | Onlineassignmentdesk.com",
    metadescription:
      "Essay Help Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Essay Help Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "dissertation-help",
    metatitle:
      "Best Dissertation Consultancy Service | Onlineassignmentdesk.com",
    metadescription:
      "Get online Dissertation help for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Dissertation Help Karachi All Subjects Are Accepted",
  },
  {
    url: "presentations",
    metatitle:
      "Best Presentations Consultancy Service | Onlineassignmentdesk.com",
    metadescription:
      "Get online Presentations help for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Presentation Help (PPT Slides) Karachi Unlimited Slides with Speaker notes",
  },
  {
    url: "coursework-help",
    metatitle: "Best Coursework Help Service | Onlineassignmentdesk.com",
    metadescription:
      "Coursework Help Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Coursework Help Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "homework-help",
    metatitle: "Best Homework Help Service | Onlineassignmentdesk.com",
    metadescription:
      "Homework Help Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Homework Help Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "articles",
    metatitle: "Best Articles Consultancy Service | Onlineassignmentdesk.com",
    metadescription:
      "Get online Articles help for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Articles Help Karachi All Subjects Are Accepted",
  },
  {
    url: "thesis",
    metatitle: "Best Thesis Consultancy Service | Onlineassignmentdesk.com",
    metadescription:
      "Get online Thesis Help for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Thesis Help Karachi  All Subjects Are Accepted",
  },
  {
    url: "pdf-ebook-writing",
    metatitle: "Best Ebook Consultancy Service | Onlineassignmentdesk.com",
    metadescription:
      "Get online Ebook help for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Ebook help Karachi All Subjects Are Accepted",
  },
  {
    url: "proofreading-editing",
    metatitle:
      "Best Proofreading & Editing Consultancy Service | Onlineassignmentdesk.com",
    metadescription:
      "Get online Proofreading & Editing help for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Proofreading & Editing help Karachi All Subjects Are Accepted",
  },
  {
    url: "cv-writing",
    metatitle:
      "Best CV / Resume Consultancy Service | Onlineassignmentdesk.com",
    metadescription:
      "Get online CV / Resume help for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best CV / Resume help Karachi  Highlights Your Skillset, Achievements & Education",
  },
  {
    url: "content-help-service",
    metatitle: "Best Content Consultancy Service | Onlineassignmentdesk.com",
    metadescription:
      "Get online Content help for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Content Help Karachi All Subjects Are Accepted",
  },
  {
    url: "research-paper",
    metatitle:
      "Best Research Paper Consultancy Service | Onlineassignmentdesk.com",
    metadescription:
      "Get online Research Paper Help for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Research Paper Help Karachi  All Subjects Are Accepted",
  },
  {
    url: "exam-help",
    metatitle: "Best Exam Help Service | Onlineassignmentdesk.com",
    metadescription:
      "Get online Exam help for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Exam Help Karachi All Subjects Are Accepted",
  },
  {
    url: "final-year-project-help",
    metatitle: "Best Final Year Project Help | Onlineassignmentdesk.com",
    metadescription:
      "Get online Final Year Project Help for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Final Year Project Help Karachi All Subjects Are Accepted",
  },
  {
    url: "quizzes-help",
    metatitle: "Best Quizzes Help | Onlineassignmentdesk.com",
    metadescription:
      "Get Online Quizzes Help for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Quizzes Help Karachi All Subjects Are Accepted",
  },
  {
    url: "book-report-help",
    metatitle: "Best Book Report Help | Onlineassignmentdesk.com",
    metadescription:
      "Get Online Book Report Help for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Book Report Help Karachi All Subjects Are Accepted",
  },
  {
    url: "book-analysis-help",
    metatitle: "Best Book Analysis Help | Onlineassignmentdesk.com",
    metadescription:
      "Get Online Book Analysis Help for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Book Analysis Help Karachi All Subjects Are Accepted",
  },
  {
    url: "online-courses-help",
    metatitle: "Best Online Courses Help | Onlineassignmentdesk.com",
    metadescription:
      "Get Online Courses Help for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Online Courses Help Karachi All Subjects Are Accepted",
  },
  {
    url: "online-classes-help",
    metatitle: "Best Online Classes Help | Onlineassignmentdesk.com",
    metadescription:
      "Get Online Online Classes Help for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Online Classes Help Karachi All Subjects Are Accepted",
  },
  {
    url: "research-proposal-help",
    metatitle: "Best Research Proposal Help Service | Onlineassignmentdesk.com",
    metadescription:
      "Research Proposal Help Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Research Proposal Help Service Karachi All Subjects Are Accepted",
  },
  {
    url: "research-publication-help",
    metatitle: "Best Research Publication Help | Onlineassignmentdesk.com",
    metadescription:
      "Research Publication Help for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Research Publication Help Karachi All Subjects Are Accepted",
  },
  {
    url: "assessment-help",
    metatitle: "Best Assessment Help Service | Onlineassignmentdesk.com",
    metadescription:
      "Assessment Help Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Assessment Help Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "casestudy-help",
    metatitle: "Best Casestudy Help Service | Onlineassignmentdesk.com",
    metadescription:
      "Casestudy Help Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Casestudy Help Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "literature-review-help",
    metatitle: "Best Literature Review Help Service | Onlineassignmentdesk.com",
    metadescription:
      "Literature Review Help Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Literature Review Help Service Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "tutoring",
    metatitle: "Best Tutoring Service | Onlineassignmentdesk.com",
    metadescription:
      "Tutoring Service for the students of UK and Australia. We have qualified and experienced educational consultants for all subjects.",
    h1: " Best Tutoring Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "help-with-assignment",
    metatitle: "Best Help with Assignment Service | Onlineassignmentdesk.com",
    metadescription:
      "Help with Assignment Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Help with Assignment Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "write-my-assignment",
    metatitle: "Best Write My Assignment Service | Onlineassignmentdesk.com",
    metadescription:
      "Write My Assignment Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Write My Assignment Service Karachi  All Subjects are Accepted",
  },
  {
    url: "assignment-writer",
    metatitle: "Best Assignment Writer Service | Onlineassignmentdesk.com",
    metadescription:
      "Assignment Writer Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Assignment Writer Karachi  All Subjects Are Accepted",
  },
  {
    url: "do-my-assignment",
    metatitle: "Best Do My Assignment Service | Onlineassignmentdesk.com",
    metadescription:
      "Do My Assignment Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Do My Assignment Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "pay-for-assignment",
    metatitle: "Best Pay for Assignment Service | Onlineassignmentdesk.com",
    metadescription:
      "Pay for Assignment Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Pay for Assignment Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "buy-assignment",
    metatitle: "Best Buy Assignment Service | Onlineassignmentdesk.com",
    metadescription:
      "Buy Assignment Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Buy Assignment Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "perdisco-assignment",
    metatitle: "Best Perdisco Assignment Service | Onlineassignmentdesk.com",
    metadescription:
      "Perdisco Assignment Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Perdisco Assignment Help Karachi  All Subjects Are Accepted",
  },
  {
    url: "assignment-service",
    metatitle: "Best Assignment Service | Onlineassignmentdesk.com",
    metadescription:
      "Assignment Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Assignment Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "assignment",
    metatitle: "Best Assignment Writer | Onlineassignmentdesk.com",
    metadescription:
      "Get online assessment editing services and help for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Assignment Help Karachi All Subjects Are Accepted",
  },
  {
    url: "assignment-maker",
    metatitle: "Best Assignment Maker Service | Onlineassignmentdesk.com",
    metadescription:
      "Assignment Maker Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Assignment Maker Karachi  All Subjects Are Accepted",
  },
  {
    url: "help-with-dissertation",
    metatitle: "Best Help with Dissertation Service | Onlineassignmentdesk.com",
    metadescription:
      "Help with Dissertation Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Help with Dissertation Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "academic-help",
    metatitle: "Best Academic Help Service | Onlineassignmentdesk.com",
    metadescription:
      "Academic Help Service for the students of UK, USA, UAE, NZ, Europe and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Academic Assistance Team Karachi  All Subjects Are Accepted",
  },
  {
    url: "write-my-dissertation",
    metatitle: "Best Write My Dissertation Service | Onlineassignmentdesk.com",
    metadescription:
      "Write My Dissertation Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Write My Dissertation Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "dissertation-writer",
    metatitle: "Best Dissertation Writer Service | Onlineassignmentdesk.com",
    metadescription:
      "Dissertation Writer Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Dissertation Writer Karachi  All Subjects Are Accepted",
  },
  {
    url: "do-my-dissertation",
    metatitle: "Best Do My Dissertation Service | Onlineassignmentdesk.com",
    metadescription:
      "Do My Dissertation Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Do My Dissertation Karachi  All Subjects Are Accepted",
  },
  {
    url: "pay-for-dissertation",
    metatitle: "Best Pay for Dissertation Service | Onlineassignmentdesk.com",
    metadescription:
      "Pay for Dissertation Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Pay for Dissertation Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "buy-dissertation",
    metatitle: "Best Buy Dissertation Service | Onlineassignmentdesk.com",
    metadescription:
      "Buy Dissertation Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Buy Dissertation Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "dissertation-writing-service",
    metatitle: "Best Dissertation Writing Service | Onlineassignmentdesk.com",
    metadescription:
      "Dissertation Writing Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Dissertation Writing Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "dissertation-help",
    metatitle:
      "Best Dissertation Consultancy Service | Onlineassignmentdesk.com",
    metadescription:
      "Get online Dissertation help for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Dissertation Help Karachi All Subjects Are Accepted",
  },
  {
    url: "dissertation-service",
    metatitle:
      "Best Dissertation Consultancy Service | Onlineassignmentdesk.com",
    metadescription:
      "Get online Dissertation Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Dissertation Service Karachi All Subjects Are Accepted",
  },
  {
    url: "dissertations",
    metatitle: "Best Dissertations | Onlineassignmentdesk.com",
    metadescription:
      "Get online Dissertations for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Dissertations Karachi All Subjects Are Accepted",
  },
  {
    url: "help-with-essay",
    metatitle: "Best Help With Essay | Onlineassignmentdesk.com",
    metadescription:
      "Help With Essay for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Help With Essay Karachi  All Subjects Are Accepted",
  },
  {
    url: "write-my-essay",
    metatitle: "Best Write My Essay Service | Onlineassignmentdesk.com",
    metadescription:
      "Write My Essay Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Write My Essay Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "essay-writer",
    metatitle: "Best Essay Writer Service | Onlineassignmentdesk.com",
    metadescription:
      "Essay Writer Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Essay Writer Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "do-my-essay",
    metatitle: "Best Do My Essay Service | Onlineassignmentdesk.com",
    metadescription:
      "Do My Essay Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Do My Essay Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "Pay For Essay Service",
    metatitle: "Best Pay For Essay Service | Onlineassignmentdesk.com",
    metadescription:
      "Pay For Essay Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Pay For Essay Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "buy-essay",
    metatitle: "Best Buy Essay | Onlineassignmentdesk.com",
    metadescription:
      "Buy Essay for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Buy Essay Karachi  All Subjects Are Accepted",
  },
  {
    url: "essay-writing-service",
    metatitle: "Best Essay Writing Service | Onlineassignmentdesk.com",
    metadescription:
      "Essay Writing Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Essay Writing Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "essay-help",
    metatitle: "Best Essay Help Service | Onlineassignmentdesk.com",
    metadescription:
      "Essay Help Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Essay Help Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "essays",
    metatitle: "Best Essays | Onlineassignmentdesk.com",
    metadescription:
      "Essays for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Essays Karachi  All Subjects Are Accepted",
  },
  {
    url: "help-with-homework",
    metatitle: "Best Help With Homework Service | Onlineassignmentdesk.com",
    metadescription:
      "Help With Homework Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Help With Homework Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "write-my-homework",
    metatitle: "Best Write My Homework Service | Onlineassignmentdesk.com",
    metadescription:
      "Write My Homework Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Write My Homework Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "homework-writer",
    metatitle: "Best Homework Writer Service | Onlineassignmentdesk.com",
    metadescription:
      "Homework Writer Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Homework Writer Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "do-my-homework",
    metatitle: "Best Do My Homework Service | Onlineassignmentdesk.com",
    metadescription:
      "Do My Homework Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Do My Homework Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "pay-for-homework",
    metatitle: "Best Pay For Homework Service | Onlineassignmentdesk.com",
    metadescription:
      "Pay For Homework Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Pay For Homework Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "buy-homework",
    metatitle: "Best Buy Homework Service | Onlineassignmentdesk.com",
    metadescription:
      "Buy Homework Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Buy Homework Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "homework-writing-service",
    metatitle: "Best Homework Writing Service | Onlineassignmentdesk.com",
    metadescription:
      "Homework Writing Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Homework Writing Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "homework-help",
    metatitle: "Best Homework Help Service | Onlineassignmentdesk.com",
    metadescription:
      "Homework Help Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Homework Help Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "homework",
    metatitle: "Best Assignment Writer | Onlineassignmentdesk.com",
    metadescription:
      "Get online assessment editing services and help for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best homework help Karachi All Subjects Are Accepted",
  },
  {
    url: "help-with-coursework",
    metatitle: "Best Help With Coursework Service | Onlineassignmentdesk.com",
    metadescription:
      "Help With Coursework Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Help With Coursework Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "write-my-coursework",
    metatitle: "Best Write My Coursework Service | Onlineassignmentdesk.com",
    metadescription:
      "Write My Coursework Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Write My Coursework Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "coursework-writer",
    metatitle: "Best Coursework Writer Service | Onlineassignmentdesk.com",
    metadescription:
      "Coursework Writer Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Coursework Writer Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "do-my-coursework",
    metatitle: "Best Do My Coursework Service | Onlineassignmentdesk.com",
    metadescription:
      "Do My Coursework Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Do My Coursework Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "pay-for-coursework",
    metatitle: "Best Pay For Coursework Service | Onlineassignmentdesk.com",
    metadescription:
      "Pay For Coursework Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Pay For Coursework Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "buy-coursework",
    metatitle: "Best Buy Coursework Service | Onlineassignmentdesk.com",
    metadescription:
      "Buy Coursework Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Buy Coursework Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "coursework-writing-service",
    metatitle: "Best Coursework Writing Service | Onlineassignmentdesk.com",
    metadescription:
      "Coursework Writing Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Coursework Writing Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "coursework-help",
    metatitle: "Best Coursework Help Service | Onlineassignmentdesk.com",
    metadescription:
      "Coursework Help Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Coursework Help Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "coursework",
    metatitle: "Best Coursework | Onlineassignmentdesk.com",
    metadescription:
      "Get online assessment editing services and help for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Coursework Help Karachi All Subjects Are Accepted",
  },
  {
    url: "help-with-ebook",
    metatitle: "Best Help With Ebook Service | Onlineassignmentdesk.com",
    metadescription:
      "Help With Ebook Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Help With Ebook Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "write-my-ebook",
    metatitle: "Best Write My Ebook Service | Onlineassignmentdesk.com",
    metadescription:
      "Write My Ebook Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Write My Ebook Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "ebook-writer",
    metatitle: "Best Ebook Writer Service | Onlineassignmentdesk.com",
    metadescription:
      "Ebook Writer Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Ebook Writer Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "do-my-ebook",
    metatitle: "Best Do My Ebook Service | Onlineassignmentdesk.com",
    metadescription:
      "Do My Ebook Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Do My Ebook Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "pay-for-ebook",
    metatitle: "Best Pay For Ebook Service | Onlineassignmentdesk.com",
    metadescription:
      "Pay For Ebook Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Pay For Ebook Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "buy-ebook",
    metatitle: "Best Buy Ebook Service | Onlineassignmentdesk.com",
    metadescription:
      "Buy Ebook Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Buy Ebook Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "ebook-writing-service",
    metatitle: "Best Ebook Writing Service | Onlineassignmentdesk.com",
    metadescription:
      "Ebook Writing Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Ebook Writing Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "ebook-help",
    metatitle: "Best Ebook Help Service | Onlineassignmentdesk.com",
    metadescription:
      "Ebook Help Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Ebook Help Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "help-with-article",
    metatitle: "Best Help With Article Service | Onlineassignmentdesk.com",
    metadescription:
      "Help With Article Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Help With Article Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "write-my-article",
    metatitle: "Best Write My Article Service | Onlineassignmentdesk.com",
    metadescription:
      "Write My Article Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Write My Article Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "article-writer",
    metatitle: "Best Article Writer Service | Onlineassignmentdesk.com",
    metadescription:
      "Article Writer Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Article Writer Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "do-my-article",
    metatitle: "Best Do My Article Service | Onlineassignmentdesk.com",
    metadescription:
      "Do My Article Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Do My Article Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "pay-for-article",
    metatitle: "Best Pay For Article Service | Onlineassignmentdesk.com",
    metadescription:
      "Pay For Article Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Pay For Article Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "buy-article",
    metatitle: "Best Buy Article Service | Onlineassignmentdesk.com",
    metadescription:
      "Buy Article Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Buy Article Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "article-writing-service",
    metatitle: "Best Article Writing Service | Onlineassignmentdesk.com",
    metadescription:
      "Article Writing Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Article Writing Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "article-help",
    metatitle: "Best Article Help Service | Onlineassignmentdesk.com",
    metadescription:
      "Article Help Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Article Help Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "articles",
    metatitle: "Best Articles Consultancy Service | Onlineassignmentdesk.com",
    metadescription:
      "Get online Articles help for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Articles Help Karachi All Subjects Are Accepted",
  },
  {
    url: "help-with-thesis",
    metatitle: "Best Help With Thesis Service | Onlineassignmentdesk.com",
    metadescription:
      "Help With Thesis Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Help With Thesis Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "write-my-thesis",
    metatitle: "Best Write My Thesis Service | Onlineassignmentdesk.com",
    metadescription:
      "Write My Thesis Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Write My Thesis Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "thesis-writer",
    metatitle: "Best Thesis Writer Service | Onlineassignmentdesk.com",
    metadescription:
      "Thesis Writer Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Thesis Writer Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "do-my-thesis",
    metatitle: "Best Do My Thesis Service | Onlineassignmentdesk.com",
    metadescription:
      "Do My Thesis Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Do My Thesis Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "pay-for-thesis",
    metatitle: "Best Pay For Thesis Service | Onlineassignmentdesk.com",
    metadescription:
      "Pay For Thesis Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Pay For Thesis Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "buy-thesis",
    metatitle: "Best Buy Thesis | Onlineassignmentdesk.com",
    metadescription:
      "Buy Thesis for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Buy Thesis Karachi  All Subjects Are Accepted",
  },
  {
    url: "thesis-writing-service",
    metatitle: "Best Thesis Writing Service | Onlineassignmentdesk.com",
    metadescription:
      "Thesis Writing Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Thesis Writing Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "thesis-help",
    metatitle: "Best Thesis Help Service | Onlineassignmentdesk.com",
    metadescription:
      "Thesis Help Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Thesis Help Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "thesis",
    metatitle: "Best Thesis Consultancy Service | Onlineassignmentdesk.com",
    metadescription:
      "Get online Thesis Help for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Thesis Help Karachi  All Subjects Are Accepted",
  },
  {
    url: "help-with-cv",
    metatitle: "Best Help With Cv Service | Onlineassignmentdesk.com",
    metadescription:
      "Help With Cv Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Help With Cv Service Karachi  Highlights Your Skillset, Achievements & Education",
  },
  {
    url: "write-my-cv",
    metatitle: "Best Write My Cv Service | Onlineassignmentdesk.com",
    metadescription:
      "Write My Cv Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Write My Cv Service Karachi  Highlights Your Skillset, Achievements & Education",
  },
  {
    url: "cv-writer",
    metatitle: "Best Cv Writer Service | Onlineassignmentdesk.com",
    metadescription:
      "Cv Writer Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Cv Writer Service Karachi   Highlights Your Skillset, Achievements & Education",
  },
  {
    url: "do-my-cv",
    metatitle: "Best Do My Cv Service | Onlineassignmentdesk.com",
    metadescription:
      "Do My Cv Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Do My Cv Service Karachi  Highlights Your Skillset, Achievements & Education",
  },
  {
    url: "pay-for-cv",
    metatitle: "Best Pay For Cv Service | Onlineassignmentdesk.com",
    metadescription:
      "Pay For Cv Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Pay For Cv Service Karachi  Highlights Your Skillset, Achievements & Education",
  },
  {
    url: "buy-cv",
    metatitle: "Best Buy Cv Service | Onlineassignmentdesk.com",
    metadescription:
      "Buy Cv Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Buy Cv Service Karachi  Highlights Your Skillset, Achievements & Education",
  },
  {
    url: "cv-writing-service",
    metatitle: "Best Cv Writing Service | Onlineassignmentdesk.com",
    metadescription:
      "Cv Writing Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Cv Writing Service Karachi   Highlights Your Skillset, Achievements & Education",
  },
  {
    url: "cv-help",
    metatitle: "Best Cv Help Service | Onlineassignmentdesk.com",
    metadescription:
      "Cv Help Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Cv Help Service Karachi  Highlights Your Skillset, Achievements & Education",
  },
  {
    url: "cv-writing",
    metatitle:
      "Best CV / Resume Consultancy Service | Onlineassignmentdesk.com",
    metadescription:
      "Get online CV / Resume help for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best CV / Resume help Karachi  Highlights Your Skillset, Achievements & Education",
  },
  {
    url: "help-with-research-paper",
    metatitle:
      "Best Help With Research Paper Service | Onlineassignmentdesk.com",
    metadescription:
      "Help With Research Paper Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Help With Research Paper Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "write-my-research-paper",
    metatitle:
      "Best Write My Research Paper Service | Onlineassignmentdesk.com",
    metadescription:
      "Write My Research Paper Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Write My Research Paper Service Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "research-paper-writer",
    metatitle: "Best Research Paper Writer Service | Onlineassignmentdesk.com",
    metadescription:
      "Research Paper Writer Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Research Paper Writer Service Karachi All Subjects Are Accepted",
  },
  {
    url: "do-my-research-paper",
    metatitle: "Best Do My Research Paper Service | Onlineassignmentdesk.com",
    metadescription:
      "Do My Research Paper Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Do My Research Paper Service Karachi All Subjects Are Accepted",
  },
  {
    url: "pay-for-research-paper",
    metatitle: "Best Pay For Research Paper Service | Onlineassignmentdesk.com",
    metadescription:
      "Pay For Research Paper Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Pay For Research Paper Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "buy-research-paper",
    metatitle: "Best Buy Research Paper Service | Onlineassignmentdesk.com",
    metadescription:
      "Buy Research Paper Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Buy Research Paper Service Karachi All Subjects Are Accepted",
  },
  {
    url: "research-paper-writing-service",
    metatitle: "Best Research Paper Writing Service | Onlineassignmentdesk.com",
    metadescription:
      "Research Paper Writing Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Research Paper Writing Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "research-paper-help",
    metatitle: "Best Research Paper Help Service | Onlineassignmentdesk.com",
    metadescription:
      "Research Paper Help Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Research Paper Help Service Karachi All Subjects Are Accepted",
  },
  {
    url: "research-paper",
    metatitle:
      "Best Research Paper Consultancy Service | Onlineassignmentdesk.com",
    metadescription:
      "Get online Research Paper Help for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Research Paper Help  Karachi  All Subjects Are Accepted",
  },
  {
    url: "pay-for-exam",
    metatitle: "Best Pay For Exam Service | Onlineassignmentdesk.com",
    metadescription:
      "Get online Pay For Exam Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Pay For Exam Service Karachi All Subjects Are Accepted",
  },
  {
    url: "take-my-exam",
    metatitle: "Best Take My Exam Service | Onlineassignmentdesk.com",
    metadescription:
      "Get online Take My Exam Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Take My Exam Service Karachi All Subjects Are Accepted",
  },
  {
    url: "write-my-exam",
    metatitle: "Best Write My Exam Service | Onlineassignmentdesk.com",
    metadescription:
      "Get online Write My Exam Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Write My Exam Service Karachi All Subjects Are Accepted",
  },
  {
    url: "exam-writer",
    metatitle: "Best Exam Writer Service | Onlineassignmentdesk.com",
    metadescription:
      "Get online Exam Writer Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Exam Writer Service Karachi All Subjects Are Accepted",
  },
  {
    url: "do-my-exam",
    metatitle: "Best Do My Exam Service | Onlineassignmentdesk.com",
    metadescription:
      "Get online Do My Exam Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Do My Exam Service Karachi All Subjects Are Accepted",
  },
  {
    url: "buy-exam",
    metatitle: "Best Buy Exam Service | Onlineassignmentdesk.com",
    metadescription:
      "Get online Buy Exam Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Buy Exam Service Karachi All Subjects Are Accepted",
  },
  {
    url: "exams",
    metatitle: "Best Exams Service | Onlineassignmentdesk.com",
    metadescription:
      "Get online Exams for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Exams Karachi All Subjects Are Accepted",
  },
  {
    url: "pay-for-final-year-project",
    metatitle:
      "Best Pay For Final Year Project Service | Onlineassignmentdesk.com",
    metadescription:
      "Get online Pay For Final Year Project Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Pay For Final Year Project Service Karachi All Subjects Are Accepted",
  },
  {
    url: "take-my-final-year-project",
    metatitle:
      "Best Take My Final Year Project Service | Onlineassignmentdesk.com",
    metadescription:
      "Get online Take My Final Year Project Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Take My Final Year Project Service Karachi All Subjects Are Accepted",
  },
  {
    url: "write-my-final-year-project",
    metatitle:
      "Best Write My Final Year Project Service | Onlineassignmentdesk.com",
    metadescription:
      "Get Online Write My Final Year Project Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Write My Final Year Project Service Karachi All Subjects Are Accepted",
  },
  {
    url: "final-year-project-writer",
    metatitle:
      "Best Final Year Project Writer Service | Onlineassignmentdesk.com",
    metadescription:
      "Get Online Final Year Project Writer Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Final Year Project Writer Service Karachi All Subjects Are Accepted",
  },
  {
    url: "do-my-final-year-project",
    metatitle:
      "Best Do My Final Year Project Service | Onlineassignmentdesk.com",
    metadescription:
      "Get Online Do My Final Year Project Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Do My Final Year Project Service Karachi All Subjects Are Accepted",
  },
  {
    url: "buy-final-year-project",
    metatitle: "Best Buy Final Year Project Service | Onlineassignmentdesk.com",
    metadescription:
      "Get Online Buy Final Year Project Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Buy Final Year Project Service Karachi All Subjects Are Accepted",
  },
  {
    url: "final-year-projects",
    metatitle: "Best Final Year Projects | Onlineassignmentdesk.com",
    metadescription:
      "Get online Final Year Projects for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Final Year Projects Karachi All Subjects Are Accepted",
  },
  {
    url: "pay-for-quizzes",
    metatitle: "Best Pay For Quizzes Service | Onlineassignmentdesk.com",
    metadescription:
      "Get Online Pay For Quizzes Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Pay For Quizzes Service Karachi All Subjects Are Accepted",
  },
  {
    url: "take-my-quizzes",
    metatitle: "Best Take My Quizzes Service | Onlineassignmentdesk.com",
    metadescription:
      "Get Online Take My Quizzes Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Take My Quizzes Service Karachi All Subjects Are Accepted",
  },
  {
    url: "write-my-quizzes",
    metatitle: "Best Write My Quizzes Service | Onlineassignmentdesk.com",
    metadescription:
      "Get Online Write My Quizzes Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Write My Quizzes Service Karachi All Subjects Are Accepted",
  },
  {
    url: "quizzes-writer",
    metatitle: "Best Quizzes Writer Service | Onlineassignmentdesk.com",
    metadescription:
      "Get Online Quizzes Writer Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Quizzes Writer Service Karachi All Subjects Are Accepted",
  },
  {
    url: "do-my-quizzes",
    metatitle: "Best Do My Quizzes Service | Onlineassignmentdesk.com",
    metadescription:
      "Get Online Do My Quizzes Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Do My Quizzes Service Karachi All Subjects Are Accepted",
  },
  {
    url: "buy-quizzes",
    metatitle: "Best Buy Quizzes Service | Onlineassignmentdesk.com",
    metadescription:
      "Get Online Buy Quizzes Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Buy Quizzes Service Karachi All Subjects Are Accepted",
  },
  {
    url: "quizzes",
    metatitle: "Best Quizzes | Onlineassignmentdesk.com",
    metadescription:
      "Get Online Quizzes for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Quizzes Karachi All Subjects Are Accepted",
  },
  {
    url: "pay-for-book-report",
    metatitle: "Best Pay For Book Report Service | Onlineassignmentdesk.com",
    metadescription:
      "Get Online Pay For Book Report Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Pay For Book Report Service Karachi All Subjects Are Accepted",
  },
  {
    url: "take-my-book-report",
    metatitle: "Best Take My Book Report Service | Onlineassignmentdesk.com",
    metadescription:
      "Get Online Take My Book Report Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Take My Book Report Service Karachi All Subjects Are Accepted",
  },
  {
    url: "write-my-book-report",
    metatitle: "Best Write My Book Report Service | Onlineassignmentdesk.com",
    metadescription:
      "Get Online Write My Book Report Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Write My Book Report Service Karachi All Subjects Are Accepted",
  },
  {
    url: "book-report-writer",
    metatitle: "Best Book Report Writer Service | Onlineassignmentdesk.com",
    metadescription:
      "Get Online Book Report Writer Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Book Report Writer Service Karachi All Subjects Are Accepted",
  },
  {
    url: "do-my-book-report",
    metatitle: "Best Do My Book Report Service | Onlineassignmentdesk.com",
    metadescription:
      "Get Online Do My Book Report Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Do My Book Report Service Karachi All Subjects Are Accepted",
  },
  {
    url: "buy-book-report",
    metatitle: "Best Buy Book Report Service | Onlineassignmentdesk.com",
    metadescription:
      "Get Online Buy Book Report Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Buy Book Report Service Karachi All Subjects Are Accepted",
  },
  {
    url: "book-reports",
    metatitle: "Best Book Reports | Onlineassignmentdesk.com",
    metadescription:
      "Get Online Book Reports for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Book Reports Karachi All Subjects Are Accepted",
  },
  {
    url: "pay-for-book-analysis",
    metatitle: "Best Pay For Book Analysis Service | Onlineassignmentdesk.com",
    metadescription:
      "Get Online Pay For Book Analysis Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Pay For Book Analysis Service Karachi All Subjects Are Accepted",
  },
  {
    url: "take-my-book-analysis",
    metatitle: "Best Take My Book Analysis Service | Onlineassignmentdesk.com",
    metadescription:
      "Get Online Take My Book Analysis Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Take My Book Analysis Service Karachi All Subjects Are Accepted",
  },
  {
    url: "write-my-book-analysis",
    metatitle: "Best Write My Book Analysis Service | Onlineassignmentdesk.com",
    metadescription:
      "Get Online Write My Book Analysis Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Write My Book Analysis Service Karachi All Subjects Are Accepted",
  },
  {
    url: "book-analysis-writer",
    metatitle: "Best Book Analysis Writer Service | Onlineassignmentdesk.com",
    metadescription:
      "Get Online Book Analysis Writer Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Book Analysis Writer Service Karachi All Subjects Are Accepted",
  },
  {
    url: "do-my-book-analysis",
    metatitle: "Best Do My Book Analysis Service | Onlineassignmentdesk.com",
    metadescription:
      "Get Online Do My Book Analysis Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Do My Book Analysis Service Karachi All Subjects Are Accepted",
  },
  {
    url: "buy-book-analysis",
    metatitle: "Best Buy Book Analysis Service | Onlineassignmentdesk.com",
    metadescription:
      "Get Online Buy Book Analysis Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Buy Book Analysis Service Karachi All Subjects Are Accepted",
  },
  {
    url: "book-analysis",
    metatitle: "Best Book Analysis | Onlineassignmentdesk.com",
    metadescription:
      "Get Online Book Analysis for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Book Analysis Karachi All Subjects Are Accepted",
  },
  {
    url: "online-courses-help",
    metatitle: "Best Online Courses Help | Onlineassignmentdesk.com",
    metadescription:
      "Get Online Courses Help for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Online Courses Help Karachi All Subjects Are Accepted",
  },
  {
    url: "buy-online-courses",
    metatitle: "Best Buy Online Courses Service | Onlineassignmentdesk.com",
    metadescription:
      "Get Online Buy Online Courses Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Buy Online Courses Service Karachi All Subjects Are Accepted",
  },
  {
    url: "pay-for-online-courses",
    metatitle: "Best Pay For Online Courses Service | Onlineassignmentdesk.com",
    metadescription:
      "Get Online Pay For Online Courses Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Pay For Online Courses Service Karachi All Subjects Are Accepted",
  },
  {
    url: "get-online-courses",
    metatitle: "Best Get Online Courses Service | Onlineassignmentdesk.com",
    metadescription:
      "Get Online Get Online Courses Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Get Online Courses Service Karachi All Subjects Are Accepted",
  },
  {
    url: "do-my-online-course",
    metatitle: "Best Do My Online Course Service | Onlineassignmentdesk.com",
    metadescription:
      "Get Do My Online Course Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Do My Online Course Service Karachi All Subjects Are Accepted",
  },
  {
    url: "take-my-online-course",
    metatitle: "Best Take My Online Course Service | Onlineassignmentdesk.com",
    metadescription:
      "Take My Online Course Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Take My Online Course Service Karachi All Subjects Are Accepted",
  },
  {
    url: "help-with-online-courses",
    metatitle:
      "Best Help With Online Courses Service | Onlineassignmentdesk.com",
    metadescription:
      "Get Help With Online Courses Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Help With Online Courses Service Karachi All Subjects Are Accepted",
  },
  {
    url: "online-courses",
    metatitle: "Best Online Courses | Onlineassignmentdesk.com",
    metadescription:
      "Get Online Courses for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Online Courses Karachi All Subjects Are Accepted",
  },
  {
    url: "buy-online-classes",
    metatitle: "Best Buy Online Classes Service | Onlineassignmentdesk.com",
    metadescription:
      "Get Online Buy Online Classes Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Buy Online Classes Service Karachi All Subjects Are Accepted",
  },
  {
    url: "pay-for-online-classes",
    metatitle: "Best Pay For Online Classes Service | Onlineassignmentdesk.com",
    metadescription:
      "Get Online Pay For Online Classes Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Pay For Online Classes Service Karachi All Subjects Are Accepted",
  },
  {
    url: "get-online-classes",
    metatitle: "Best Get Online Classes Service | Onlineassignmentdesk.com",
    metadescription:
      "Get Online Classes Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Get Online Classes Service Karachi All Subjects Are Accepted",
  },
  {
    url: "take-my-online-class",
    metatitle: "Best Take My Online Class Service | Onlineassignmentdesk.com",
    metadescription:
      "Take My Online Class Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Take My Online Class Service Karachi All Subjects Are Accepted",
  },
  {
    url: "online-class-help",
    metatitle: "Best Online Class Help Service | Onlineassignmentdesk.com",
    metadescription:
      "Get Online Class Help Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Online Class Help Service Karachi All Subjects Are Accepted",
  },
  {
    url: "do-my-online-class",
    metatitle: "Best Do My Online Class Service | Onlineassignmentdesk.com",
    metadescription:
      "Get Do My Online Class Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Do My Online Class Service Karachi All Subjects Are Accepted",
  },
  {
    url: "take-my-online-classes",
    metatitle: "Best Take My Online classes Service | Onlineassignmentdesk.com",
    metadescription:
      "Take My Online Classes Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Take My Online Classes Service Karachi All Subjects Are Accepted",
  },
  {
    url: "help-with-online-class",
    metatitle: "Best Help With Online Class Service | Onlineassignmentdesk.com",
    metadescription:
      "Get Help With Online Class Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Help With Online Class Service Karachi All Subjects Are Accepted",
  },
  {
    url: "online-classes",
    metatitle: "Best Online Classes | Onlineassignmentdesk.com",
    metadescription:
      "Get Online Classes for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Online Classes Karachi All Subjects Are Accepted",
  },
  {
    url: "tutoring",
    metatitle: "Best Tutoring Service | Onlineassignmentdesk.com",
    metadescription:
      "Tutoring Service for the students of UK and Australia. We have qualified and experienced educational consultants for all subjects.",
    h1: " Best Tutoring Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "do-my-research-proposal",
    metatitle:
      "Best Do My Research Proposal Service | Onlineassignmentdesk.com",
    metadescription:
      "Do My Research Proposal Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Do My Research Proposal Service Karachi All Subjects Are Accepted",
  },
  {
    url: "help-with-research-proposal",
    metatitle:
      "Best Help With Research Proposal Service | Onlineassignmentdesk.com",
    metadescription:
      "Help With Research Proposal Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Help With Research Proposal Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "research-proposal-writing-service",
    metatitle:
      "Best Research Proposal Writing Service | Onlineassignmentdesk.com",
    metadescription:
      "Research Proposal Writing Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Research Proposal Writing Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "buy-research-proposal",
    metatitle: "Best Buy Research Proposal Service | Onlineassignmentdesk.com",
    metadescription:
      "Buy Research Proposal Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Buy Research Proposal Service Karachi All Subjects Are Accepted",
  },
  {
    url: "research-proposal-writer",
    metatitle:
      "Best Research Proposal Writer Service | Onlineassignmentdesk.com",
    metadescription:
      "Research Proposal Writer Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Research Proposal Writer Service Karachi All Subjects Are Accepted",
  },
  {
    url: "write-my-research-proposal",
    metatitle:
      "Best Write My Research Proposal Service | Onlineassignmentdesk.com",
    metadescription:
      "Write My Research Proposal Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Write My Research Proposal Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "pay-for-research-proposal",
    metatitle:
      "Best Pay For Research Proposal Service | Onlineassignmentdesk.com",
    metadescription:
      "Pay For Research Proposal Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Pay For Research Proposal Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "research-proposals",
    metatitle: "Best Research Proposals | Onlineassignmentdesk.com",
    metadescription:
      "Research Proposals for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Research Proposal Help Service Karachi All Subjects Are Accepted",
  },
  {
    url: "research-publication-service",
    metatitle: "Best Research Publication Service | Onlineassignmentdesk.com",
    metadescription:
      "Research Publication Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Research Publication Service Karachi All Subjects Are Accepted",
  },
  {
    url: "buy-assessment",
    metatitle: "Best Buy Assessment Service | Onlineassignmentdesk.com",
    metadescription:
      "Buy Assessment Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Buy Assessment Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "get-assessment",
    metatitle: "Best Get Assessment Service | Onlineassignmentdesk.com",
    metadescription:
      "Get Assessment Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Get Assessment Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "do-my-assessment",
    metatitle: "Best Do My Assessment Service | Onlineassignmentdesk.com",
    metadescription:
      "Do My Assessment Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Do My Assessment Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "pay-for-assessment",
    metatitle: "Best Pay For Assessment Service | Onlineassignmentdesk.com",
    metadescription:
      "Pay For Assessment Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Pay For Assessment Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "write-my-assessment",
    metatitle: "Best Write My Assessment Service | Onlineassignmentdesk.com",
    metadescription:
      "Write My Assessment Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Write My Assessment Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "assessments",
    metatitle: "Best Assessments | Onlineassignmentdesk.com",
    metadescription:
      "Assessments for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Assessments Karachi  All Subjects Are Accepted",
  },
  {
    url: "buy-casestudy",
    metatitle: "Best Buy Casestudy Service | Onlineassignmentdesk.com",
    metadescription:
      "Buy Casestudy Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Buy Casestudy Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "get-casestudy",
    metatitle: "Best Get Casestudy Service | Onlineassignmentdesk.com",
    metadescription:
      "Get Casestudy Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Get Casestudy Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "do-my-casestudy",
    metatitle: "Best Do My Casestudy Service | Onlineassignmentdesk.com",
    metadescription:
      "Do My Casestudy Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Do My Casestudy Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "pay-for-casestudy",
    metatitle: "Best Pay For Casestudy Service | Onlineassignmentdesk.com",
    metadescription:
      "Pay For Casestudy Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Pay For Casestudy Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "write-my-casestudy",
    metatitle: "Best Write My Casestudy Service | Onlineassignmentdesk.com",
    metadescription:
      "Write My Casestudy Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Write My Casestudy Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "casestudies",
    metatitle: "Best Casestudies | Onlineassignmentdesk.com",
    metadescription:
      "Casestudies for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Casestudies Karachi  All Subjects Are Accepted",
  },
  {
    url: "buy-literature-review",
    metatitle: "Best Buy Literature Review Service | Onlineassignmentdesk.com",
    metadescription:
      "Buy Literature Review Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Buy Literature Review Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "get-literature-review",
    metatitle: "Best Get Literature Review Service | Onlineassignmentdesk.com",
    metadescription:
      "Get Literature Review Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Get Literature Review Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "do-my-literature-review",
    metatitle:
      "Best Do My Literature Review Service | Onlineassignmentdesk.com",
    metadescription:
      "Do My Literature Review Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Do My Literature Review Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "pay-for-literature-review",
    metatitle:
      "Best Pay For Literature Review Service | Onlineassignmentdesk.com",
    metadescription:
      "Pay For Literature Review Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Pay For Literature Review Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "write-my-literature-review",
    metatitle:
      "Best Write My Literature Review Service | Onlineassignmentdesk.com",
    metadescription:
      "Write My Literature Review Service for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Write My Literature Review Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "literature-reviews",
    metatitle: "Best Literature Reviews | Onlineassignmentdesk.com",
    metadescription:
      "Literature Reviews for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: " Best Literature Reviews Karachi  All Subjects Are Accepted",
  },
  {
    url: "writing-experts-services",
    metatitle:
      "Best  Writing, Editing & Proofreading Services | Onlineassignmentdesk.com",
    metadescription:
      " Writing, Editing & Proofreading Services UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Best Writing, Editing & Proofreading Services in Karachi  All Subjects Are Accepted",
  },
  {
    url: "pay-for-essay",
    metatitle: "Best Pay For Essay Service | Onlineassignmentdesk.com",
    metadescription:
      "Get top-quality essays at OnlineAssignmentDesk.com! Our expert writers deliver custom papers on time. Boost your grades with our reliable pay-for-essay service",
    h1: "Best Pay For Essay Service  Karachi  All Subjects Are Accepted",
  },
  {
    url: "article-publishing-service",
    metatitle: "Article Publishing Service | Fast & Reliable",
    metadescription:
      "Publish your articles with ease using our trusted publishing services. Quick, professional, and hassle-free support.",
    h1: "Best Article Publishing Service  Karachi  All Subjects Are Accepted",
  },
  {
    url: "best-ebook-writer",
    metatitle: "Hire the Best eBook Writers | Affordable & Reliable",
    metadescription:
      "Looking for the best eBook writer? Hire our top-rated professionals for high-quality, customized, and secure eBook writing services.",
    h1: "EBook Writer Karachi  All Subjects Are Accepted",
  },
  {
    url: "best-publishing-services",
    metatitle: "Best Publishing Services for Authors & Researchers",
    metadescription:
      "Get your work published with our reliable publishing services. High-quality assistance for books, articles, and research papers.",
    h1: "Publishing Services Karachi  All Subjects Are Accepted",
  },
  {
    url: "best-thesis-publication-service",
    metatitle: "Best Thesis Publication Services | Professional Help",
    metadescription:
      "Publish your thesis with our expert services. We ensure secure, professional, and high-quality publication support.",
    h1: "Thesis Publication Service Karachi  All Subjects Are Accepted",
  },
  {
    url: "book-writing-service",
    metatitle: "Professional Book Writing Service | Affordable Prices",
    metadescription:
      "Get premium book writing services by professionals. Affordable pricing, authentic content, and secure delivery with Onlineassignmentdesk.com.",
    h1: "Book Writing Service",
  },
  {
    url: "ebook-writing-expert",
    metatitle: "Best Book Writing Services | Onlineassignmentdesk.com",
    metadescription:
      "Transform your ideas into professionally written books with our expert book writing services. Affordable, secure, and delivered with perfection.",
    h1: "Book Writing Services",
  },
  {
    url: "book-writing-services",
    metatitle: "Best eBook Writing Experts | Onlineassignmentdesk.com",
    metadescription:
      "Hire experienced eBook writing experts to create unique, professional, and high-quality eBooks at affordable prices. Get 100% authentic services today!",
    h1: "Ebook Writing Expert",
  },
  {
    url: "book-writing-services",
    metatitle: "Best eBook Writing Experts | Onlineassignmentdesk.com",
    metadescription:
      "Hire experienced eBook writing experts to create unique, professional, and high-quality eBooks at affordable prices. Get 100% authentic services today!",
    h1: "Ebook Writing Expert",
  },
  {
    url: "ebook-writing-expert",
    metatitle: "Best eBook Writing Experts | Onlineassignmentdesk.com",
    metadescription:
      "Hire experienced eBook writing experts to create unique, professional, and high-quality eBooks at affordable prices. Get 100% authentic services today!",
    h1: "Ebook Writing Expert",
  },
  {
    url: "ghostwriting-services",
    metatitle: "Trusted Ghostwriting Services | Affordable Rates",
    metadescription:
      "Get high-quality ghostwriting services from experienced professionals. Fast, authentic, and confidential service tailored for you.",
    h1: "Ghostwriting Services",
  },
  {
    url: "hire-a-book-writer",
    metatitle: "Hire a Professional Book Writer Now | Onlineassignmentdesk.com",
    metadescription:
      "Need a book writer? Hire our experts for personalized, high-quality, and affordable book writing services.",
    h1: "Hire a Book Writer Now",
  },
  {
    url: "hire-best-ghostwriter",
    metatitle: "Hire the Best Ghostwriters | Onlineassignmentdesk.com",
    metadescription:
      "Collaborate with expert ghostwriters for personalized writing services. Secure, authentic, and affordable ghostwriting solutions.",
    h1: "Hire Best Ghostwriter Now",
  },
  {
    url: "hire-publication-experts",
    metatitle: "Hire Publication Experts | Onlineassignmentdesk.com",
    metadescription:
      "Need publishing assistance? Hire our experts for flawless publishing of books, articles, or research papers.",
    h1: "Hire Publication Experts",
  },
  {
    url: "premium-publishing-services",
    metatitle: "Premium Publishing Services | Hassle-Free Process",
    metadescription:
      "Publish your book or article effortlessly with our premium publishing services. Fast, professional, and stress-free publishing support.",
    h1: "Premium Publishing Services",
  },
  {
    url: "professional-book-writers",
    metatitle: "Hire Professional Book Writers | Onlineassignmentdesk.com",
    metadescription:
      "Work with skilled book writers to bring your ideas to life. Affordable, authentic, and perfect book writing services guaranteed.",
    h1: "Professional Book Writers",
  },
  {
    url: "we-can-publish-your-paper",
    metatitle: "We Can Publish Your Paper | Fast & Reliable",
    metadescription:
      "Get your research paper published with ease. Expert publishing services for seamless, professional, and stress-free results.",
    h1: "We can Publish your Paper",
  },
  {
    url: "write-ebook-for-you",
    metatitle: "We Can Write Your eBook | Fast & Authentic Service",
    metadescription:
      "Let us handle your eBook writing needs! Our expert team offers the fastest, affordable, and professional eBook writing services.",
    h1: "We can write eBook for you",
  },
  {
    url: "academic-helpers",
    metatitle: "Best Academic Assistance Team | Onlineassignmentdesk.com",
    metadescription:
      "Get online assessment editing services and help for the students of UK and Australia. We have qualified and experienced academic writers for all subjects.",
    h1: "Academic Assistance Team",
  },
];

export const slugs = [
  "essay-help",
  "dissertation-help",
  "presentations",
  "coursework-help",
  "homework-help",
  "articles",
  "thesis",
  "pdf-ebook-writing",
  "proofreading-editing",
  "cv-writing",
  "content-help-service",
  "research-paper",
  "exam-help",
  "final-year-project-help",
  "quizzes-help",
  "book-report-help",
  "book-analysis-help",
  "online-courses-help",
  "online-classes-help",
  "research-proposal-help",
  "research-publication-help",
  "assessment-help",
  "casestudy-help",
  "literature-review-help",
  "tutoring",
  "help-with-assignment",
  "write-my-assignment",
  "assignment-writer",
  "do-my-assignment",
  "pay-for-assignment",
  "buy-assignment",
  "perdisco-assignment",
  "assignment-service",
  "assignment",
  "assignment-maker",
  "help-with-dissertation",
  "academic-help",
  "write-my-dissertation",
  "dissertation-writer",
  "do-my-dissertation",
  "pay-for-dissertation",
  "buy-dissertation",
  "dissertation-writing-service",
  "dissertation-help",
  "dissertation-service",
  "dissertations",
  "help-with-essay",
  "write-my-essay",
  "essay-writer",
  "do-my-essay",
  "pay-for-essay",
  "buy-essay",
  "essay-writing-service",
  "essay-help",
  "essays",
  "help-with-homework",
  "write-my-homework",
  "homework-writer",
  "do-my-homework",
  "pay-for-homework",
  "buy-homework",
  "homework-writing-service",
  "homework-help",
  "homework",
  "help-with-coursework",
  "write-my-coursework",
  "coursework-writer",
  "do-my-coursework",
  "pay-for-coursework",
  "buy-coursework",
  "coursework-writing-service",
  "coursework-help",
  "coursework",
  "help-with-ebook",
  "write-my-ebook",
  "ebook-writer",
  "do-my-ebook",
  "pay-for-ebook",
  "buy-ebook",
  "ebook-writing-service",
  "ebook-help",
  "help-with-article",
  "write-my-article",
  "article-writer",
  "do-my-article",
  "pay-for-article",
  "buy-article",
  "article-writing-service",
  "article-help",
  "articles",
  "help-with-thesis",
  "write-my-thesis",
  "thesis-writer",
  "do-my-thesis",
  "pay-for-thesis",
  "buy-thesis",
  "thesis-writing-service",
  "thesis-help",
  "thesis",
  "help-with-cv",
  "write-my-cv",
  "cv-writer",
  "do-my-cv",
  "pay-for-cv",
  "buy-cv",
  "cv-writing-service",
  "cv-help",
  "cv-writing",
  "help-with-research-paper",
  "write-my-research-paper",
  "research-paper-writer",
  "do-my-research-paper",
  "pay-for-research-paper",
  "buy-research-paper",
  "research-paper-writing-service",
  "research-paper-help",
  "research-paper",
  "pay-for-exam",
  "take-my-exam",
  "write-my-exam",
  "exam-writer",
  "do-my-exam",
  "buy-exam",
  "exams",
  "pay-for-final-year-project",
  "take-my-final-year-project",
  "write-my-final-year-project",
  "final-year-project-writer",
  "do-my-final-year-project",
  "buy-final-year-project",
  "final-year-projects",
  "pay-for-quizzes",
  "take-my-quizzes",
  "write-my-quizzes",
  "quizzes-writer",
  "do-my-quizzes",
  "buy-quizzes",
  "quizzes",
  "pay-for-book-report",
  "take-my-book-report",
  "write-my-book-report",
  "book-report-writer",
  "do-my-book-report",
  "buy-book-report",
  "book-reports",
  "pay-for-book-analysis",
  "take-my-book-analysis",
  "write-my-book-analysis",
  "book-analysis-writer",
  "do-my-book-analysis",
  "buy-book-analysis",
  "book-analysis",
  "online-courses-help",
  "buy-online-courses",
  "pay-for-online-courses",
  "get-online-courses",
  "do-my-online-course",
  "take-my-online-course",
  "help-with-online-courses",
  "online-courses",
  "buy-online-classes",
  "pay-for-online-classes",
  "get-online-classes",
  "take-my-online-class",
  "online-class-help",
  "do-my-online-class",
  "take-my-online-classes",
  "help-with-online-class",
  "online-classes",
  "tutoring",
  "do-my-research-proposal",
  "help-with-research-proposal",
  "research-proposal-writing-service",
  "buy-research-proposal",
  "research-proposal-writer",
  "write-my-research-proposal",
  "pay-for-research-proposal",
  "research-proposals",
  "research-publication-service",
  "buy-assessment",
  "get-assessment",
  "do-my-assessment",
  "pay-for-assessment",
  "write-my-assessment",
  "assessments",
  "buy-casestudy",
  "get-casestudy",
  "do-my-casestudy",
  "pay-for-casestudy",
  "write-my-casestudy",
  "casestudies",
  "buy-literature-review",
  "get-literature-review",
  "do-my-literature-review",
  "pay-for-literature-review",
  "write-my-literature-review",
  "literature-reviews",
  "writing-experts-services",
  "article-publishing-service",
  "best-ebook-writer",
  "best-publishing-services",
  "best-thesis-publication-service",
  "book-writing-service",
  "book-writing-services",
  "ebook-writing-expert",
  "ghostwriting-services",
  "hire-a-book-writer",
  "hire-best-ghostwriter",
  "hire-publication-experts",
  "premium-publishing-services",
  "professional-book-writers",
  "we-can-publish-your-paper",
  "write-ebook-for-you",
  "academic-helpers",
  "/usa",
];

export default function Code(props: any) {
  const [locationDetails, setLocationDetails] = useState({});
  const [modal, setModal] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    const modalData = localStorage.getItem("modal");
    const storedTime = localStorage.getItem("modalTimestamp");

    if (modalData === "true" && storedTime) {
      const currentTime = new Date().getTime();
      const elapsedTime = currentTime - parseInt(storedTime, 10);
      const eightHours = 8 * 60 * 60 * 1000;

      if (elapsedTime >= eightHours) {
        localStorage.setItem("modal", "false");
      }
    }

    // If modalData is "false" (or missing after 8 hours), show modal
    if (!modalData || modalData === "false") {
      const timer = setTimeout(() => {
        setModal(true);
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (modal) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, [modal]);

  const slug = props?.slug || pathname;

  const isSlugInArray = slugs.includes(slug);
  if (!isSlugInArray) {
    redirect("/");
  }
  const matchedMetadata = metalist.find((meta) => meta.url === slug);
  matchedMetadata
    ? matchedMetadata
    : { metatitle: "Default Title", metadescription: "Default Description" };

  const metadata: Metadata = {
    title: matchedMetadata?.metatitle,
    description: matchedMetadata?.metadescription,
  };

  const heading = matchedMetadata?.h1;

  const mainHeading: any = heading?.split("Karachi")[0];

  const headd = mainHeading?.split("Best ");

  const headder = headd[1] || mainHeading;

  function unslugify(slug: any) {
    // Split the slug by hyphens and capitalize each words first letter
    const words = slug
      .split("-")
      .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1));

    // Join the words with a space between them
    const unslugified = words.join(" ");

    return unslugified;
  }

  const result = unslugify(slug);

  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [number, setNumber] = useState("");

  const fetchCity = async () => {
    let cityy = localStorage.getItem("city");
    let countryy = localStorage.getItem("country");
    if (cityy !== null) {
      setCity(cityy as any);
    }
    if (countryy !== null) {
      setCountry(countryy as any);
    }

    const ipUrl = "https://api.ipify.org?format=json";

    try {
      // Fetch the user's IP address
      const response = await fetch(ipUrl);
      const data = await response.json(); // Assuming the response is in JSON
      const userIp = data.ip;

      // Fetch location data based on the IP address
      const locationResponse = await fetch(
        `https://pro.ip-api.com/json/${userIp}?key=tRuJ0KuCug4wEHs&fields=status,message,continent,continentCode,country,countryCode,countryCode3,region,regionName,city,district,zip,lat,lon,timezone,offset,currentTime,currency,callingCode,isp,org,as,asname,reverse,mobile,proxy,hosting,query`
      );
      const locationData = await locationResponse.json();
      // CHANGES: im change the city to country
      let fetchedCity = locationData.country || "London"; // Set default value
      // let fetchedCity = locationData.country || "London"; // Set default value
      let fetchedCountry = locationData.countryCode || "GB"; // Set default value
      //
      // Store the city and country in local storage
      localStorage.setItem("city", fetchedCity);
      localStorage.setItem("country", fetchedCountry);

      // Assuming you have functions like setCity and setCountry to update your UI
      setCity(fetchedCity);
      setCountry(fetchedCountry);
      setLocationDetails(locationData);

      // console.log("locationDetails:", locationDetails);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const dynamicNumber: any = {
      US: "+19179331132",
      MX: "+19179331132",
      CA: "+19179331132",
      AU: "+61480004010",
      NZ: "+61480004010",
      UK: "+447593709971",
    };
    if (dynamicNumber[country]) {
      setNumber(dynamicNumber[country]);
    } else {
      setNumber("+447593709971");
    }
  }, [country]);

  useEffect(() => {
    fetchCity();
  }, []);

  useEffect(() => {
    if (city == "") {
      setCity("...");
    }
  }, [city]);
  return (
    <main>
      <title>Best Academic Consultancy | Onlineassignmentdesk.com</title>
      <meta
        name="description"
        content="Get online assessment editing services and help for the students of UK and Australia. We have qualified and experienced academic writers for all subjects."
        key="desc"
      />
      <link
        rel="canonical"
        href={`https://onlineassignmentdesk.com/usa/${slug}`}
      ></link>
      <meta name="robots" content="noindex, nofollow" />

      <Herosection
        title="Academic Consultancy"
        country={country}
        city={city}
        locationDetails={locationDetails}
        region={"/usa"}
      />
      {modal && (
        <Modal
          number={number}
          country={country}
          locationDetails={locationDetails}
          setModal={setModal}
        />
      )}
      {modal && (
        <MobileModal
          number={number}
          country={country}
          locationDetails={locationDetails}
          setModal={setModal}
        />
      )}

      <Trusted country={country} region={"/usa"} />
      <OurServices
        number={number}
        title="Academic Consultancy"
        region={"/usa"}
      />
      <WhyGoGradesTest
        country={country}
        city={city}
        title="Academic Consultancy"
        locationDetails={locationDetails}
        region={"/usa"}
      />
      <CustomDivider
        locationDetails={locationDetails}
        number={number}
        title="Academic Consultancy"
        mainHeadingPartOne="Your Trusted Partner for"
        mainHeadingPartTwo="Academic Excellence"
        subHeadingPartOne="We ensure premium "
        subHeadingPartTwo="tailored to meet your academic needs. Let our experienced team support you in achieving top-notch results at competitive prices."
        leftButton="Activate Discount Coupon"
        rightButton="Chat with Us Now"
bannerImageUrl="/random/serious-teacher-checking-assignment-two-students.jpg"
        region={"/usa"}
      />
      {/* <OurServices number={number} region={"/usa"} /> */}
      <Subjects
        country={country}
        city={city}
        title="Academic Consultancy"
        region={"/usa"}
      />
      <CustomDivider
        locationDetails={locationDetails}
        number={number}
        title="Academic Consultancy"
        mainHeadingPartOne="One Stop Solution to All"
        mainHeadingPartTwo="Academic Worries"
        subHeadingPartOne="OnlineAssignmentDesk.com ensures to deliver the world-class "
        subHeadingPartTwo="at prices that are best in the market. Our team always responds to the demands of the students quickly and fulfills them in the best possible way."
        leftButton="Get Free Quote"
        rightButton="Whatsapp Direct Chat"
 bannerImageUrl="/random/cheerful-students-celebrating.jpg"
        region={"/usa"}
      />
      <Guarantee
        country={country}
        city={city}
        title="Academic Consultancy"
        region={"/usa"}
      />
      <CustomDivider
        locationDetails={locationDetails}
        number={number}
        title="Academic Consultancy"
        mainHeadingPartOne="Reliable Academic Assistance Team for "
        mainHeadingPartTwo="Every Student"
        subHeadingPartOne="From tight deadlines to complex topics, we provide fast, reliable, and affordable assignment solutions. Connect with us to experience hassle-free academic success."
        subHeadingPartTwo=""
        leftButton="Order now"
        rightButton="Live Chat Support"
bannerImageUrl="/random/5-Reasons-to-go-to-uni-besides-boosting-your-career-prospects.jpg"
        region={"/usa"}
      />
      <Reviews />

      <HowItWorks title="Academic Consultancy" region={"/usa"} />
      <FreeSample
        country={country}
        title="Academic Consultancy"
        region={"/usa"}
      />
      <Footer number={number} region={"/ca"} title="Academic Consultancy" />
    </main>
  );
}
