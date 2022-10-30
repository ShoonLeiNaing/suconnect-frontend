import dynamic from "next/dynamic";

const NotFound = dynamic(import("../components/Error/NotFound"), {
  ssr: false,
});

const Custom404 = () => {
  return <NotFound />;
};

export default Custom404;
