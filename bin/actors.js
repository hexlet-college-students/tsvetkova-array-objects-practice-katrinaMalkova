#!/usr/bin/env node

import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';

import { actorRating } from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, '..', '__fixtures__', 'nicolas-cage.csv');
const content = fs.readFileSync(filePath, 'utf-8');

const filePath2 = path.join(__dirname, '..', '__fixtures__', 'leonardo-dicaprio.csv');
const content2 = fs.readFileSync(filePath2, 'utf-8');

// console.log(content);
// console.log(content2);

actorRating(content);
actorRating(content2);
