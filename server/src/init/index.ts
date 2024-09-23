import './global.PdgUtil';
import path from 'path';
import dotenv from 'dotenv';

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
dotenv.config({ path: path.resolve(__dirname, './../../.env') }).parsed;

declare global {
  function getClientPath(): string;

  function ll(message?: any, ...optionalParams: any[]): void;
}

globalThis.getClientPath = () => path.join(__dirname, './../../client/dist');

globalThis.ll = function (message?: any, ...optionalParams: any[]) {
  console.log(message, ...optionalParams);
};

export {};
