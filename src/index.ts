import { timeStamp } from "console";
import * as CryptoJS from "crypto-js";
class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  static calculateBlockHash = (
    index: number,
    previousHash: string,
    data: string,
    timestamp: number
  ): string => CryptoJS.SHA256(index + previousHash + timestamp + data);

  constructor(
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timestamp: number
  ) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}
const genesisBlock: Block = new Block(0, "201010", "", "good", 23);

let blockchein: [Block] = [genesisBlock];

const getBlockchain = (): Block[] => blockchein;
const getLatesBlock = (): Block => blockchein[blockchein.length - 1];
const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);
console.log(getNewTimeStamp);
export {};
