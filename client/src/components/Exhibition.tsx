import styled from 'styled-components';
import moment from 'moment';

interface ExhibitionProps {
  title: string;
  begindate: number;
  enddate: number;
  venue: { name: string; address: string };
  homepageUrl: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 60px;
  padding-bottom: 15px;
  width: 700px;
  gap: 5px;
  border-bottom: 2px dashed black;
  /* border: 1px solid red; */
`;

const Title = styled.div`
  font-style: italic;
  font-size: 20px;
  text-shadow: 0.7px 1px 1px rgba(0, 0, 0, 0.4);
`;

const Date = styled.div`
  font-size: 13px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Venue = styled.div`
  font-size: 15px;
`;

const LinkToWebsite = styled.button`
  cursor: pointer;
  width: 100px;
  font-size: 10px;
  text-align: left;
  border: transparent;
  background-color: transparent;
`;

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
    <Container>
      <Title>{title}</Title>
      <Venue>
        <div>{venue.name}</div>
        <div>{venue.address}</div>
      </Venue>
      <Date>
        <div>{moment(begindate).format('MMM Do YY')}</div>
        <div>{moment(enddate).format('MMM Do YY')}</div>
      </Date>
      <LinkToWebsite onClick={handleClick}>FIND OUT MORE</LinkToWebsite>
    </Container>
  );
}
