import { hpApi } from '../../apis/hpApi';
import { CharacterType } from '../../types';

class HpServices {
  getCharacters = async () => {
    return hpApi.get<CharacterType[]>('characters');
  };
}

export const hpServices = new HpServices();
