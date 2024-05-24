import Image from "next/image";
import Star from "../../public/star.png";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface Question {
  id: number;
  tags: string;
  title: string;
  description: string;
}

const Question = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [filter, setFilter] = useState<string>("");
  const [visibleQuestions, setVisibleQuestions] = useState<Question[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (!loaded) {
      axios
        .get("api/questions")
        .then((res) => {
          setQuestions(res.data);
          setLoaded(true);
        })
        .catch((err) => {
          console.error("Error fetching questions:");
        });
    }
  }, [loaded]);

  useEffect(() => {
    let filtered = questions;
    if (filter !== "ALL") {
      filtered = questions.filter(
        (question) => question.tags.toLowerCase() === filter.toLowerCase()
      );
    }
    setVisibleQuestions([]);

    let timer: ReturnType<typeof setTimeout>;
    filtered.forEach((product, index) => {
      timer = setTimeout(() => {
        setVisibleQuestions((prevQuestions) => [...prevQuestions, product]);
      }, index * 300);
    });

    return () => clearTimeout(timer);
  }, [questions, filter]);

  const handleFilterClick = (tag: string) => {
    if (filter === tag) {
      setFilter("");
    } else {
      setFilter(tag);
    }
  };

  return (
    <div className="flex mt-[100px] w-full flex-col items-start rounded-[20px] border-2 border-dashed border-[#262626]">
      <div className="flex lg:pt-[80px] pt-[40px] relative lg:pr-[300px] pr-[40px] lg:pb-[80px] pb-[40px] lg:pl-[80px] pl-[40px] flex-col items-start gap-[50px] self-stretch border-b-2 border-solid border-[#262626]">
        <div className="flex flex-col items-start gap-[30px] self-stretch">
          <p className="self-stretch lg:whitespace-nowrap text-[#FFF] lg:text-[40px] text-[30px] z-10 not-italic font-[500] leading-normal uppercase">
            Elevate Your Style with Our Latest Collection
          </p>
          <p className="self-stretch text-[#676665] lg:text-[18px] text-[14px] not-italic font-[400] leading-[27px]">
            Each piece is crafted to enhance your fashion statement.
          </p>
        </div>
        <div className="lg:flex grid grid-cols-3 items-center justify-center text-center gap-[14px]">
          {["ALL", "Ordering", "Shipping", "Returns", "Support"].map((tag) => (
            <button
              key={tag}
              className={`flex  text-[#B3B3B2] text-center lg:text-[18px] text-[14px] not-italic font-[400] leading-[27px] lg:py-[18px] lg:px-[24px] py-[10px] px-[14px] items-center gap-[10px] rounded-[12px] border border-dashed border-[#333] hover:bg-[#C2B4A3] hover:text-black hover:duration-500 hover:transition-all cursor-pointer ${
                filter === tag ? "bg-[#C2B4A3] text-black" : ""
              }`}
              onClick={() => handleFilterClick(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
        <Image
          src={Star}
          alt="Star"
          className="w-[325px] lg:flex hidden opacity-75 h-[346px] transform absolute right-[25px] -top-[20px] overflow-hidden -z-[10]"
          style={{ transform: "rotate(20.356deg)" }}
          width={325}
          height={325}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        {visibleQuestions.map((question) => (
          <div
            key={question.id}
            className="flex flex-col p-4 gap-4 items-start border border-dashed border-gray-700 rounded-lg"
          >
            <p className="self-stretch text-[#FFF] text-[16px] sm:text-[18px] lg:text-[20px] not-italic font-[500] leading-[24px] sm:leading-[30px] lg:leading-[36px]">
              {question.title}
            </p>
            <p className="self-stretch text-[#81807E] text-[14px] sm:text-[16px] lg:text-[18px] not-italic font-[400] leading-[20px] sm:leading-[24px] lg:leading-[27px]">
              {question.description}
            </p>
            <div hidden>{question.tags}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
