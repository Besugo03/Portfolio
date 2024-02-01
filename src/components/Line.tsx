import { useMantineColorScheme } from "@mantine/core";
interface LineProps {
  height: number;
}

function Line({ height }: LineProps) {
  const { colorScheme } = useMantineColorScheme();
  return (
    <svg
      width="3"
      height={height}
      viewBox="0 0 3 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="1.5"
        x2="1.5"
        y2="75"
        stroke={colorScheme === "dark" ? "white" : "black"}
        stroke-width="3"
      />
    </svg>
  );
}

export default Line;
