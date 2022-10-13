import MainScreen from './MainScreen';
import ArtworkScreen from './ArtworkScreen';
import InfoScreen from './InfoScreen';

export default function Home() {
  return (
    <>
      <MainScreen />
      <ArtworkScreen category={'late'} />
      <ArtworkScreen category={'mid'} />
      <ArtworkScreen category={'early'} />
      <InfoScreen />
    </>
  );
}
