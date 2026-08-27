export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/files");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  // src/CNAME is not copied until GoDaddy DNS is switched to GitHub Pages.
  eleventyConfig.addPassthroughCopy({ "src/assets/img/icon.png": "favicon.ico" });

  eleventyConfig.addFilter("year", (value) => {
    const date = value ? new Date(value) : new Date();
    return date.getFullYear();
  });

  eleventyConfig.addFilter("readableDate", (value) => {
    if (!value) return "";
    return new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(new Date(value));
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk", "html"],
  };
}
