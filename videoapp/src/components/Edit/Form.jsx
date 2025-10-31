import { useState } from "react";
import { useEditVideoMutation } from "@/features/api/apiSlice";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Success from "@/components/ui/Success";
import Button from "@/components/ui/Button";
import Error from "@/components/ui/Error";

export default function Form({ video }) {
  const {
    id,
    title,
    author,
    description,
    link,
    thumbnail,
    date,
    duration,
    views,
  } = video || {};

  const [editVideo, { data: editedVideo, isLoading, isError, isSuccess }] =
    useEditVideoMutation();

  const [videoData, setVideoData] = useState({
    title,
    author,
    description,
    link,
    thumbnail,
    date,
    duration,
    views,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    const payload = {
      ...videoData,
      [name]: value,
    };
    setVideoData(payload);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      ...videoData,
      duration: Number(videoData.duration),
      views: Number(videoData.views),
    };

    console.log(payload);

    editVideo({ id, data: payload });
  };

  return (
    <form onSubmit={handleSubmit} method="POST">
      <div className="shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 bg-white sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <Input
              required
              label="Video Title"
              name="title"
              error={isError}
              success={isSuccess}
              value={videoData.title}
              onChange={handleChange}
              className="col-span-6 sm:col-span-3"
            />
            <Input
              label="Author"
              name="author"
              error={isError}
              success={isSuccess}
              value={videoData.author}
              onChange={handleChange}
              required
              className="col-span-6 sm:col-span-3"
            />
            <Textarea
              label="Description"
              name="description"
              value={videoData.description}
              onChange={handleChange}
              className="col-span-6"
            />

            <Input
              label="YouTube Video link"
              name="link"
              value={videoData.link}
              onChange={handleChange}
              className="col-span-6"
            />

            <Input
              label="Thumbnail link"
              name="thumbnail"
              value={videoData.thumbnail}
              onChange={handleChange}
              className="col-span-6"
            />

            <Input
              label="Upload Date"
              type="date"
              name="date"
              value={videoData.date}
              onChange={handleChange}
              className="col-span-6 sm:col-span-6 lg:col-span-2"
            />
            <Input
              label="Video Duration"
              type="number"
              name="duration"
              value={videoData.duration}
              onChange={handleChange}
              className="col-span-6 sm:col-span-3 lg:col-span-2"
            />
            <Input
              label="Video no of views"
              type="number"
              name="views"
              value={videoData.views}
              onChange={handleChange}
              className="col-span-6 sm:col-span-3 lg:col-span-2"
            />
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <Button
            disabled={isLoading}
            type="submit"
            variant="primary"
            text="Save"
          />
        </div>

        {isSuccess && <Success message="Video was edited successfully" />}
        {isError && <Error message="There was an error editing video!" />}
      </div>
    </form>
  );
}
