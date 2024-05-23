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
    if (filter !== "All") {
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
      <div className="flex pt-[80px] relative pr-[300px] pb-[80px] pl-[80px] flex-col items-start gap-[50px] self-stretch border-b-2 border-solid border-[#262626]">
        <div className="flex flex-col items-start gap-[30px] self-stretch">
          <p className="self-stretch whitespace-nowrap text-[#FFF] text-[40px] z-10 not-italic font-[500] leading-normal uppercase">
            Elevate Your Style with Our Latest Collection
          </p>
          <p className="self-stretch text-[#676665] text-[18px] not-italic font-[400] leading-[27px]">
            Each piece is crafted to enhance your fashion statement.
          </p>
        </div>
        <div className="flex items-center gap-[14px]">
          {["All", "Ordering", "Shipping", "Returns", "Support"].map((tag) => (
            <button
              key={tag}
              className={`flex text-[#B3B3B2] text-center text-[18px] not-italic font-[400] leading-[27px] py-[18px] px-[24px] items-center gap-[10px] rounded-[12px] border border-dashed border-[#333] hover:bg-[#C2B4A3] hover:text-black hover:duration-500 hover:transition-all cursor-pointer ${
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
          className="w-[325px] opacity-75 h-[346px] transform absolute right-[25px] -top-[20px] overflow-hidden -z-[10]"
          style={{ transform: "rotate(20.356deg)" }}
          width={325}
          height={325}
        />
      </div>

      <div className="grid grid-cols-2 px-[36px] py-[36px]">
        {visibleQuestions.map((question) => (
          <div
            key={question.id}
            className="flex flex-col px-[36px] py-[36px] p-4 gap-4 items-start border border-dashed border-gray-700 rounded-lg"
          >
            <p className="self-stretch text-[#FFF] text-[20px] not-italic font-[500] leading-[36px]">
              {question.title}
            </p>
            <p className="self-stretch text-[#81807E] text-[16px] not-italic font-[400] leading-[27px]">
              {question.description}
            </p>
            <div hidden>{question.tags}</div>{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
