import { useEffect, useState } from 'react';
import './App.css';
import { CharacterType } from './types';
import CharacterCard from './components/CharacterCard';
import { Button, Col, Row } from 'antd';
import { hpServices } from './services/hpServices';

function App() {
  const [characters, setCharacters] = useState<CharacterType[]>();

  useEffect(() => {
    (async () => {
      const res = await hpServices.getCharacters();
      setCharacters(res.data);
    })();
  }, []);

  const onRefetch = async () => {
    const res = await hpServices.getCharacters();
    setCharacters(res.data);
  };

  return (
    <Row gutter={[0, 12]}>
      <Col span={24}>
        <Button onClick={onRefetch}>refetch</Button>
      </Col>
      {characters?.map((character, index) => (
        <Col span={8} key={`${character.name}${index}`}>
          <CharacterCard character={character} />
        </Col>
      ))}
    </Row>
  );
}

export default App;
