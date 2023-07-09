import { GetServerSideProps } from "next";
import { GameType } from "@/@types/game";
import PhotoGallery from "@/components/PhotoGallery";

interface PageDataProps {
  gameList: GameType[];
}
export default function Page({ gameList }: PageDataProps) {
  // console.log("gameList25", gameList);
  return (
    <main>
      <PhotoGallery data={gameList} />
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  // Fetch data from external API
  const res = await fetch(
    `https://api.rawg.io/api/games?key=e5d5dcdf46884f878f3acde1beffcf49`
  );
  const data: { results: GameType[] } = await res.json();

  // Pass data to the page via props
  return { props: { gameList: data.results } };
};
