import { Bookmark, ThumbsUp } from "lucide-react";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";

const BlogDescription = () => {
  return (
    <>
      <Heading
        level="3"
        fontWeight="bold"
        text="MERN stack for Web Development"
        className="mt-6 mb-2"
      />

      <div className="tags text-heading mb-2" id="lws-singleTags">
        <span>#python,</span> <span>#tech,</span> <span>#git</span>
      </div>
      <div className="flex items-center gap-6">
        <Button size="icon" className="font-bold gap-x-1">
          <ThumbsUp size={18} /> 100
        </Button>
        <Button size="icon" className="font-bold gap-x-1 text-teal-500">
          <Bookmark size={18} /> Saved
        </Button>
      </div>
      <div className="mt-6">
        <p className="text-heading">
          A MERN stack comprises a collection of four frameworks (MongoDB,
          ExpressJs, ReactJs and NodeJs) used to develop full-stack javascript
          solutions for rapid, scalable, and secure applications. Each framework
          serves a different purpose in creating successful web applications. It
          is an excellent choice for companies looking to develop high-quality
          responsive applications quickly using just one language.
        </p>
      </div>
    </>
  );
};

export default BlogDescription;
