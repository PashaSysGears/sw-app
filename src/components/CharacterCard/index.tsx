import { FC } from 'react';
import { CharacterType } from '../../types';
import { Col, Row, Image } from 'antd';

type PropTypes = {
  character: CharacterType;
};

const CharacterCard: FC<PropTypes> = ({ character }) => {
  return (
    <Row gutter={[12, 12]}>
      <Col>
        <Image
          style={{ objectFit: 'cover' }}
          width={100}
          height={100}
          preview={false}
          src={
            character.image ||
            'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'
          }
        />
      </Col>
      <Col>{character.name}</Col>
    </Row>
  );
};

export default CharacterCard;
