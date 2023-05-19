import React from "react";
import { formatDistanceToNow, differenceInDays } from "date-fns";
import { tr } from "date-fns/locale";

const Task = ({ taskObj, onComplete }) => {
  const deadlineFunc = formatDistanceToNow(new Date(taskObj.deadline), {
    addSuffix: true,
    locale: tr,
  });
  const deadline = new Date(taskObj.deadline);
  const timer = differenceInDays(deadline, new Date()) <= 3;
  return (
    <div className="bg-white p-6 rounded leading-normal mt-4 shadow-md">
      <h3>{taskObj.title}</h3>
      <div className="text-xs pt1">
        son teslim:{" "}
        <span className={timer ? "bg-[#ffd9d4]" : "bg-[#d2d5fd]"}>
          {deadlineFunc}
        </span>
      </div>
      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span
            className="inline-block py-1 px-3 mr-1 mb-1.5 text-sm border border-solid border-gray-200 rounded-full"
            key={p}
          >
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button
          className="cursor-pointer block px-3 py-2 ml-auto bg-[#fecc91] rounded border-0 shadow-sm"
          onClick={() => onComplete(taskObj.id)}
        >
          Tamamlandı
        </button>
      )}
    </div>
  );
};

export default Task;
