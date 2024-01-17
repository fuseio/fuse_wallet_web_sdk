import { ethers } from 'ethers';
import { FuseSDK } from '../src';
import { parseEther } from 'ethers/lib/utils';
import { AddressZero } from '@etherspot/prime-sdk/dist/sdk/common';
import { Variables } from '../src/constants/variables';

const main = async () => {
  const credentials = new ethers.Wallet(process.env.PRIVATE_KEY as string);
  const publicApiKey = process.env.PUBLIC_API_KEY as string;
  const fuseSDK = await FuseSDK.init(publicApiKey, credentials, { withPaymaster: true });

  // You can use any other "to" address and any other "value"
  const to = AddressZero;
  const value = parseEther("0.001");
  const data = Uint8Array.from([]);
  const txOptions = { ...Variables.DEFAULT_TX_OPTIONS, useNonceSequence: true };
  await fuseSDK.callContract(to, value, data, {...txOptions, customNonceKey: 1000});
  await fuseSDK.callContract(to, value, data, {...txOptions, customNonceKey: 184467440737});
};

main();
