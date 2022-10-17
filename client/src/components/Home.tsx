import SideIndicator from './SideIndicator';
import MainScreen from './MainScreen';
import ArtworkScreen from './ArtworkScreen';
import InfoScreen from './InfoScreen';

export default function Home() {
  return (
    <div>
      <SideIndicator />
      <div style={{ scrollSnapAlign: 'start', fontFamily: 'poppins' }}>
        <MainScreen />
        <ArtworkScreen category={'late'} />
        <ArtworkScreen category={'mid'} />
        <ArtworkScreen category={'early'} />
        <InfoScreen />
      </div>
    </div>
  );
}
