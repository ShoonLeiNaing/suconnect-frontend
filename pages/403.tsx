import dynamic from "next/dynamic";

const Forbidden = dynamic(import("../components/Error/Forbidden"), {
  ssr: false,
});

const Custom403 = () => {
  return <Forbidden />;
};

export default Custom403;
