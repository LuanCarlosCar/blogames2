import { GameType } from "@/@types/game";
import Image from "next/image";

interface Props {
  item: GameType;
  small?: boolean;
}

const stylesImg = {
  minWidth: "100%",
  minHeigh: "100%",
  objectFit: "cover",
};

export default function CardImg(props: Props) {
  const { item, small } = props;

  const { name, released, background_image } = item;

  const normalizedCss = small ? "w-81" : "w-170";
  const normalizedColumn = small ? "" : "col-span-3";
  return (
    <div className={`relative h-120   ${normalizedColumn}`}>
      <Image
        src={background_image}
        alt="Picture of the author"
        width={500}
        height={500}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover", // cover, contain, none
        }}
      />
      <div className=" absolute bottom-0 p-5 shadow-3xl min-w-full ">
        <p className=" text-base font-semibold text-gray-50 mb-3">{released}</p>
        <p className=" text-2xl  font-semibold text-gray-50">{name}</p>
      </div>
    </div>
  );
}
