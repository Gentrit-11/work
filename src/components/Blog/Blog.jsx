import React from "react";

import { Link } from "react-router-dom";
import "./Blog.css";
import Carousel from "react-elastic-carousel";
import { Data1 } from "./data";
import { BsArrowUpRight } from "react-icons/bs";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 600, itemsToShow: 2 },
  { width: 850, itemsToShow: 3 },
];

const Blog = () => {
  const carouselRef = React.useRef(null);
  const onNextStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      carouselRef.current.goTo(0);
    }
  };
  const onPrevStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      carouselRef.current.goTo("single-slide".length);
    }
  };

  return (
    <div className="our-blog-component" id="blog">
      <h1 className="h1-blog">Blog</h1>

      <Carousel
        className="slider styled-arrows"
        breakPoints={breakPoints}
        ref={carouselRef}
        onPrevStart={onPrevStart}
        onNextStart={onNextStart}
        disableArrowsOnEnd={false}
      >
        {Data1.map((props) => {
          return (
            <>
              <div className="slider-item">
                <div className="img-container-Blog">
                  <div
                    className="img-blog"
                    style={{ content: `url(${props.img})` }}
                  ></div>
                </div>
                <div className="category-blog">{props.category}</div>
                <div className="text-blog">
                  <div className="date-blog">{props.date}</div>
                  <Link to={props.to} className="inline">
                    <h6 className="h6-blog">{props.title}</h6>
                    <div className="circle-blog">
                      <BsArrowUpRight />
                    </div>
                  </Link>
                </div>
              </div>
            </>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Blog;
