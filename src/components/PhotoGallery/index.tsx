"use client";

import { GameType } from "@/@types/game";
import { useEffect, useState } from "react";
import Image from "next/image";
import CardImg from "./components/CardImg";
import vector from "../../../public/Vector.svg";
import { Nunito } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  data: GameType[];
}

const styles = {
  // width: "100%",
  // height: "100%",
};
const nunito = Nunito({
  subsets: ["latin"],
  weight: "600",
  display: "swap",
});

export default function PhotoGallery(props: Props) {
  const { data } = props;

  const [photoList, setPhotoList] = useState<GameType[]>([]);
  const [currentNumberOfPhotos, setCurrentNumberOfPhotos] = useState(4);
  const [selectedId, setSelectedId] = useState("");

  useEffect(() => {
    if (data.length) {
      setPhotoList(data.slice(0, currentNumberOfPhotos));
    }
  }, [currentNumberOfPhotos]);

  const normalizedPhotoList = photoList.slice(0, currentNumberOfPhotos - 1);
  const lastItem = photoList[photoList.length - 1] || {};

  function renderButtonMore() {
    if (data.length <= currentNumberOfPhotos) {
      return <></>;
    }
    return (
      <div className=" mb-10 m-auto flex justify-center">
        <button
          onClick={() => setCurrentNumberOfPhotos(currentNumberOfPhotos + 3)}
          className="flex  gap-4 items-center cursor-pointer border border-transparent rounded-3xl hover:border-black p-4"
        >
          <p className={`${nunito.className} text-base  text-black`}>
            CARREGAR MAIS
          </p>
          <Image src={vector} alt="Picture of the author" />
        </button>
      </div>
    );
  }
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 2,
      },
    },
  };

  function renderMainImg() {
    if (!selectedId) {
      return <></>;
    }
    return (
      <motion.div
        className=" fixed left-0 w-full h-screen bg-black-opa5 top-0 flex justify-center items-center overflow-hidden "
        layoutId={selectedId}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div>
          <div className=" relative w-170 h-120   bg-white">
            <button
              onClick={() => setSelectedId("")}
              className="absolute top-0 right-2 z-10 text-red-600 text-2xl"
            >
              X
            </button>
            <CardImg
              item={data.find((item) => item.id.toString() === selectedId)!}
            />
          </div>
        </div>
      </motion.div>
    );
  }
  return (
    <div className=" px-80">
      <div className=" mb-10 grid grid-cols-3 gap-10">
        {normalizedPhotoList.map((item) => {
          return (
            <motion.div
              key={item.id}
              layoutId={item.id.toString()}
              onClick={() => setSelectedId(item.id.toString())}
            >
              <CardImg item={item} small />
            </motion.div>
          );
        })}
        {/* 
        <motion.div
          layoutId={lastItem.id?.toString()}
          onClick={() => setSelectedId(lastItem.id.toString())}
        > */}
        <CardImg item={lastItem} />
        {/* </motion.div> */}
      </div>
      <AnimatePresence>{renderMainImg()}</AnimatePresence>
      {renderButtonMore()}
    </div>
  );
}
