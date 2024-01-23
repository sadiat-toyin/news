import React from "react";
import BlogArticle from "./BlogArticle";
import retroImg from "../assets/images/image-retro-pcs.jpg";
import laptopImg from "../assets/images/image-top-laptops.jpg";
import growthImg from "../assets/images/image-gaming-growth.jpg";

const SecondSection = () => {
  return (
    <section className="second-section  flex">
      <BlogArticle
        image={retroImg}
        num={"01"}
        title={"Reviving Retro PCs"}
        body={"What happens when old PCs are given modern upgrades?"}
      />
      <BlogArticle
        image={laptopImg}
        num={"02"}
        title={"Top 10 Laptops of 2022"}
        body={"Our best picks for various needs and budgets."}
      />
      <BlogArticle
        image={growthImg}
        num={"03"}
        title={"The Growth of Gaming"}
        body={"How the pandemic has sparked fresh opportunities."}
      />
    </section>
  );
};
export default SecondSection;
