/* eslint-disable react/no-array-index-key */
import { FunctionComponent } from "react";

interface IProps {
  title: string;
  keyword?: string;
}

const HighlightKeyword: FunctionComponent<IProps> = ({ title, keyword }) => {
  if (keyword && !keyword.trim()) {
    return <span>{title}</span>;
  }
  const regex = new RegExp(`(${keyword})`, "gi");
  const parts = title.split(regex);

  return (
    <span>
      {parts.filter(String).map((part, i) => {
        return regex.test(part) ? (
          <span className="bg-[#FFF3C9] p-1 rounded" key={i}>
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        );
      })}
    </span>
  );
};

export default HighlightKeyword;
