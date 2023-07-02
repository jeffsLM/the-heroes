import CryptoJS from 'crypto-js';

interface IGetHashBySecrets {
  privateKey: string;
  publicKey: string;
}

interface IGetHashBySecretsDataReturn {
  timestamp: string;
  hash: string;
}

export const getHashBySecrets = ({ privateKey, publicKey }: IGetHashBySecrets): IGetHashBySecretsDataReturn => {
  const timestamp = new Date().getTime().toString();
  const hash = CryptoJS.MD5(timestamp + privateKey + publicKey).toString();

  return { timestamp, hash };
};
