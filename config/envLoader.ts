import * as dotenv from 'dotenv';
import path from 'path';

export function loadEnv() {
  const envPath = path.resolve(process.cwd(), 'config/env/dev.env');
  dotenv.config({ path: envPath });

  console.log('Dev environment loaded');
}