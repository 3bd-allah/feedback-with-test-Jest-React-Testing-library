import React, { useState } from "react";
import "./styles/feedbackform.css";

const FeedbackForm = ({ onSubmit }) => {
  const [score, setScore] = useState("10");
  const [comment, setComment] = useState("");

  const isDisabled = Number(score) < 5 && comment.length < 10;

  const textAreaPlaceholder = isDisabled
    ? "Please provide a comment explaining why the experience was not good. Minimum length is 10 characters."
    : "optional feedback";

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ score, comment });
  };

  return (
    <div>
      <form
        className=" container w-25 border border-3 m-3 p-3"
        onSubmit={handleSubmit}
      >
        <h2>Feedback Form</h2>
        <div>
          <label className="score label">
            Score: {score} ⭐ <br />
            <input
              name="score"
              className="col-12"
              type="range"
              value={score}
              onChange={(e) => setScore(e.target.value)}
              min={0}
              max={10}
            />
          </label>
        </div>
        <br />
        <div>
          <label className="comment label">
            Comments:
            <br />
            <textarea
              placeholder={textAreaPlaceholder}
              cols={30}
              rows={6}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </label>
        </div>
        <div className="row">
          <button
            type="submit"
            className="btn btn-primary col-8 m-auto"
            disabled={isDisabled}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;
