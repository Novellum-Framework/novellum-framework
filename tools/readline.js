import readline from 'node:readline';
import process from 'node:process';

export const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });