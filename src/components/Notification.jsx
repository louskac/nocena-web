import React from "react";
import { notificationImages } from "../constants";

const Notification = ({ className, title, imageUrl, textValue }) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}
    >
      <div className="flex-1">
        <h6 className="mb-1 text-base font-extralight">{title}</h6>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={notificationImages[0]} // Display the first image (Nocenix)
              className="h-6 mr-1" // Set height to match the font size of the text
              alt="Nocenix token"
            />
            <span>{textValue}</span>
          </div>
          {imageUrl && ( // Conditional rendering for the right-side image
            <img
              src={imageUrl} // Display either Louskac.png or AI.png based on the prop
              className="h-7 w-auto ml-1" // Set height and width to match the font size of the text
              alt={title}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Notification;