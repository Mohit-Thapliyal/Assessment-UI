/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  AddIcon,
  CandidateIcon,
  CrossIcon,
  FilterIcon,
  GlobeIcon,
  HamburgerIcon,
  HorizontalLinkIcon,
  LinkIcon,
  SearchIcon,
  StatsIcon,
  TotalAssessmentIcon,
  VerticalDots,
  WatchIcon,
  WorkIcon,
} from "../icons";
import { Form, useOutletContext } from "react-router-dom";

function Assessment() {
  const [isOverviewVisible, setIsOverviewVisible] = useState(false);
  const [isFormVisble, setIsFormVisble] = useState(false);
  const [setSidebarIsVisible] = useOutletContext();
  return (
    <>
      {/* Navbar */}
      <div className="flex flex-col bg-white fixed lg:relative w-full lg:rounded-t-xl lg:flex-row lg:pt-2 lg:items-center lg:border-b lg:border-b-stroke-light">
        <div className="flex items-center gap-2 px-4 py-2 lg:py-3">
          <span
            className="p-2 bg-blue-accent-light rounded-full lg:hidden"
            onClick={() => setSidebarIsVisible(true)}
          >
            <HamburgerIcon width={30} height={30} />
          </span>
          <span className="font-semibold text-primary lg:text-lg">
            Assessment
          </span>
        </div>
        <div className="h-10 w-[1px] bg-stroke-light mr-4 hidden lg:block" />
        <div className="flex font-medium text-sm lg:gap-3">
          <span className="flex-grow text-center text-blue py-2 border-b-2 border-b-blue lg:py-4">
            My Assessments
          </span>
          <span className="flex-grow text-center text-primary py-2 border-b-2 border-b-stroke-light lg:py-4">
            Unstop Assessments
          </span>
        </div>
      </div>
      {/* Main */}
      <div className="p-3 px-[14px] flex flex-col text-primary gap-2 bg-white mt-[6.3rem] lg:mt-0 lg:rounded-b-xl">
        {/* Overview */}
        <Overview isOverviewVisible={isOverviewVisible} />
        {/* Controls */}
        <Actions
          isOverviewVisible={isOverviewVisible}
          setIsOverviewVisible={setIsOverviewVisible}
        />
        {/* Add Assessments */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          <div
            onClick={() => setIsFormVisble(true)}
            className="flex cursor-pointer flex-col gap-3 items-center py-5 px-8 bg-blue-accent-lighter border border-stroke-light border-dashed rounded-xl"
          >
            <span className="bg-white p-2 rounded-full">
              <AddIcon color="#0073E6" height={30} width={30} />
            </span>
            <span className="text-sm font-semibold">New Assessment</span>
            <span className="text-xs text-center">
              From here you can add questions of multiple types like MCQs,
              subjective (text or paragraph)!
            </span>
          </div>
          {/* Assessments */}
          <AssessmentComponent hide={true} />
          <AssessmentComponent />
          <AssessmentComponent />
          <AssessmentComponent />
          <AssessmentComponent />
          <AssessmentComponent />
        </div>
      </div>
      <div
        onClick={() => setIsFormVisble(true)}
        className="fixed right-4 bottom-4 lg:hidden cursor-pointer bg-blue p-3 rounded-full"
      >
        <AddIcon color="#fff" height={30} width={30} />
      </div>
      <AssessmentForm
        isFormVisble={isFormVisble}
        setIsFormVisble={setIsFormVisble}
      />
    </>
  );
}

const Overview = ({ isOverviewVisible }) => {
  return (
    <div className="flex lg:flex-col lg:gap-3 w-full">
      <h1 className="text-lg font-medium hidden lg:block">
        Assessments Overview
      </h1>
      <div
        className={`flex-col w-full border border-stroke-light rounded-xl overflow-hidden mb-3 lg:flex lg:flex-row ${
          isOverviewVisible ? "flex" : "hidden"
        }`}
      >
        <div className="flex lg:flex-grow">
          <div className="w-1/2 lg:w-full px-3 py-2 flex flex-col gap-2 border-b border-r border-stroke-light lg:border-b-0">
            <span className="text-sm font-medium">Total Assessment</span>
            <div className="flex items-center gap-2">
              <span className="p-2 bg-purple-accent rounded-md">
                <TotalAssessmentIcon color="#6548EE" />
              </span>
              <span className="font-semibold">34</span>
            </div>
          </div>
          <div className="w-1/2 px-3 py-2 flex flex-col gap-2 border-b border-stroke-light lg:hidden">
            <span className="text-sm font-medium">Total Purpose</span>
            <div className="flex items-center gap-2">
              <span className="p-2 bg-blue-accent rounded-md">
                <HorizontalLinkIcon color="#0073E6" />
              </span>
              <span className="font-semibold">11</span>
            </div>
          </div>
        </div>
        <div className="px-3 py-2 flex flex-col gap-2 border-b border-stroke-light lg:border-r lg:border-b-0 lg:flex-grow">
          <span className="text-sm font-medium">Candidates</span>
          <div className="flex items-center">
            <span className="p-2 bg-purple-accent rounded-md">
              <CandidateIcon color="#6548EE" />
            </span>
            <div className="flex flex-col px-3">
              <div className="flex items-center gap-1">
                <span className="font-semibold">11,145</span>
                <span className="text-[10px] font-medium text-green">+89</span>
              </div>
              <span className="text-[10px] font-medium">Total Candidate</span>
            </div>
            <div className=" self-stretch w-[1px] bg-stroke-light" />
            <div className="flex flex-col px-3">
              <div className="flex items-center gap-1">
                <span className="font-semibold">114</span>
                <span className="text-[10px] font-medium text-green">+89</span>
              </div>
              <span className="text-[10px] font-medium">Who Attempted</span>
            </div>
          </div>
        </div>
        <div className="px-3 py-2 flex flex-col gap-2 lg:flex-grow lg:border-r lg:border-r-stroke-light">
          <span className="text-sm font-medium">Candidates Source</span>
          <div className="flex items-center">
            <span className="p-2 bg-pink-accent rounded-md">
              <GlobeIcon color="#E9407A" />
            </span>
            <div className="flex flex-col pl-3 px-2">
              <div className="flex items-center gap-1">
                <span className="font-semibold">11,000</span>
                <span className="text-[10px] font-medium text-green">+89</span>
              </div>
              <span className="text-[10px] font-medium">E-mail</span>
            </div>
            <div className=" self-stretch w-[1px] bg-stroke-light" />
            <div className="flex flex-col px-3">
              <div className="flex items-center gap-1">
                <span className="font-semibold">11,000</span>
                <span className="text-[10px] font-medium text-green">+89</span>
              </div>
              <span className="text-[10px] font-medium">Social Share</span>
            </div>
            <div className="self-stretch w-[1px] bg-stroke-light" />
            <div className="flex flex-col px-2">
              <div className="flex items-center gap-1">
                <span className="font-semibold">11,000</span>
                <span className="text-[10px] font-medium text-green">+89</span>
              </div>
              <span className="text-[10px] font-medium">Unique Link</span>
            </div>
          </div>
        </div>
        <div className="px-3 py-2 lg:flex flex-col gap-2 hidden flex-grow">
          <span className="text-sm font-medium">Total Purpose</span>
          <div className="flex items-center gap-2">
            <span className="p-2 bg-blue-accent rounded-md">
              <HorizontalLinkIcon color="#0073E6" />
            </span>
            <span className="font-semibold">11</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Actions = ({ isOverviewVisible, setIsOverviewVisible }) => {
  return (
    <div className="flex flex-col gap-2 lg:pb-2">
      <div className="flex justify-between">
        <h2 className="font-semibold">My Assessment</h2>
        <div className="flex items-center gap-3 px-2 lg:hidden">
          <span className="p-2">
            <SearchIcon />
          </span>
          <span className="p-2">
            <FilterIcon height={15} width={15} />
          </span>
          <button
            onClick={() => setIsOverviewVisible(!isOverviewVisible)}
            className={`p-2 rounded-full ${
              isOverviewVisible && "border border-blue bg-blue-accent-light"
            }`}
          >
            <StatsIcon
              color={isOverviewVisible ? "#0073E6" : "#1C4980"}
              height={15}
              width={15}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

const AssessmentComponent = ({ hide }) => {
  return (
    <div className="flex flex-col p-3 rounded-xl border-stroke-light border">
      <div className="flex justify-between pb-3 border-b border-dashed border-b-stroke-light">
        <div className="flex items-center gap-2 lg:flex-col lg:items-start">
          <span className="p-3 rounded-lg bg-purple-accent">
            <WorkIcon color="#6548EE" width={24} height={20} />
          </span>
          <div className="flex flex-col">
            <span className="text-sm font-semibold xl:text-base">
              Math Assessment
            </span>
            <span className="flex text-xs font-medium">
              <span className="pr-2 border-r border-r-stroke-light xl:text-sm">
                Job
              </span>
              <div className="flex items-center gap-2 pl-2 text-stroke">
                <WatchIcon color="#8DA4BF" width={12} height={13} />
                20 Apr 23
              </div>
            </span>
          </div>
        </div>
        <span>
          <VerticalDots width={4} height={13} />
        </span>
      </div>

      <div className="flex pt-3 justify-between">
        <div className="flex gap-2">
          <div className="flex flex-col">
            <span className="text-xs font-semibold xl:text-sm">00</span>
            <span className="text-[10px] font-medium xl:text-xs">Duration</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold xl:text-sm">00</span>
            <span className="text-[10px] font-medium xl:text-xs">Duration</span>
          </div>
        </div>
        <div className="flex gap-1 items-center">
          <button className="flex items-center gap-1 px-2 py-[6px] border border-primary rounded-full">
            <LinkIcon height={12} width={12} />
            <span className="text-xs font-medium">Share</span>
          </button>
          <div className="flex">
            <div className="text-xs font-bold text-white bg-purple p-[6px] rounded-full border border-white ">
              LP
            </div>
            {!hide && (
              <div className="text-xs font-bold text-white bg-blue p-[6px] rounded-full border border-white ml-[-14px]">
                LP
              </div>
            )}
            {!hide && (
              <div className="text-xs font-bold text-white bg-pink p-[6px] rounded-full border border-white ml-[-14px]">
                LP
              </div>
            )}
          </div>
          {!hide && <span className="text-xs font-semibold">+324</span>}
        </div>
      </div>
    </div>
  );
};

const AssessmentForm = ({ isFormVisble, setIsFormVisble }) => {
  return (
    <>
      <div
        className={`h-full w-full lg:h-screen lg:w-screen lg:fixed lg:top-0 lg:left-0 justify-center items-center 
        ${
          isFormVisble ? "lg:flex" : "lg:hidden"
        }
        `}
      >
        <div
          onClick={() => setIsFormVisble(false)}
          className={`fixed h-full w-full bg-black top-0 left-0 ease-in-out duration-300 opacity-50 ${
            isFormVisble ? "mt-0" : "mt-[-100vh]"
          }`}
        />
        <Form
          className={`bg-white lg:h-[90%] overflow-hidden text-primary rounded-t-lg lg:rounded-b-lg duration-300 ease-in-out fixed lg:w-[40%] bottom-0 w-full ${
            isFormVisble ? "mb-0 lg:bottom-auto " : "mb-[-100vh]"
          }`}
        >
          <div className="p-3 xl:px-6 flex justify-between items-center border-b border-b-stroke-light">
            <h4 className="text-sm font-semibold lg:text-xl">
              Create new assessment
            </h4>
            <button
              onClick={() => setIsFormVisble(false)}
              type="button"
              className="p-1 bg-red-accent rounded-full"
            >
              <CrossIcon height={30} width={30} color="#D63500" />
            </button>
          </div>
          <div className="flex flex-col gap-4 p-3 lg:h-[75%] xl:h-[80%] overflow-scroll xl:px-6 lg:gap-2 text-xs font-medium lg:text-base">
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="">
                Name of Assessment
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="p-3 py-4 lg:p-3 rounded-lg border border-stroke-light lg:text-sm"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="">
                Purpose of the test is
              </label>
              <div className="border rounded-lg overflow-hidden border-stroke-light">
                <select
                  type="text"
                  placeholder="Type here"
                  className="p-3 py-4 lg:p-3 w-full rounded-lg border-r-8 border-r-transparent lg:text-sm"
                >
                  <option value="">select</option>
                  <option value="0">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="">
                Description
              </label>
              <div className="border rounded-lg overflow-hidden border-stroke-light">
                <select
                  type="text"
                  placeholder="Type here"
                  className="p-3 py-4 w-full lg:p-3 rounded-lg border-r-8 border-r-transparent lg:text-sm"
                >
                  <option value="">select</option>
                  <option value="0">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="">
                Skills
              </label>
              <div className="border rounded-lg border-stroke-light">
                <div className="flex gap-3 p-3 py-4 rounded-t-lg border-b border-stroke-light flex-wrap lg:text-xs">
                  <div className="flex items-center bg-blue-accent w-fit px-3 py-2 rounded-full">
                    <span>UI/UX and Design</span>
                    <span>
                      <CrossIcon />
                    </span>
                  </div>
                  <div className="flex items-center bg-blue-accent w-fit px-3 py-2 rounded-full">
                    <span>Web Development</span>
                    <span>
                      <CrossIcon />
                    </span>
                  </div>
                  <div className="flex items-center bg-blue-accent w-fit px-3 py-2 rounded-full">
                    <span>UI/UX and Design</span>
                    <span>
                      <CrossIcon />
                    </span>
                  </div>
                  <div className="flex items-center bg-blue-accent w-fit px-3 py-2 rounded-full">
                    <span>No of Question</span>
                    <span>
                      <CrossIcon />
                    </span>
                  </div>
                  <div className="flex items-center bg-blue-accent w-fit px-3 py-2 rounded-full">
                    <span>Web Development</span>
                    <span>
                      <CrossIcon />
                    </span>
                  </div>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="p-3 py-4 rounded-b-lg w-full lg:p-3 lg:text-sm"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="">
                Duration of assessment
              </label>
              <input
                type="text"
                placeholder="HH:MM:SS"
                className="p-3 py-4 lg:p-3 rounded-lg border border-stroke-light lg:text-sm"
              />
            </div>
          </div>
          <div className="p-3 xl:px-6 xl:py-5 border-t border-stroke-light">
            <button
              type="button"
              className="text-sm font-semibold py-3 rounded-lg text-white bg-blue w-full"
            >
              Next
            </button>
          </div>
        </Form>
      </div>
    </>
  );
};
export default Assessment;
