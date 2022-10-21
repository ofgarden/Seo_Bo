interface ExhibitionProps {
  title: string;
  begindate: number;
  enddate: number;
  venue: { name: string; address: string };
  homepageUrl: string;
}

export default function Exhibition({
  title,
  begindate,
  enddate,
  venue,
  homepageUrl,
}: ExhibitionProps) {
  const handleClick = () => {
    window.open(homepageUrl, '_blank');
  };

  return (
    <>
      <div>{title}</div>
      <div>{begindate}</div>
      <div>{enddate}</div>
      <div>{venue.name}</div>
      <div>{venue.address}</div>
      <div onClick={handleClick}>TO HOMPAGE</div>
    </>
  );
}
