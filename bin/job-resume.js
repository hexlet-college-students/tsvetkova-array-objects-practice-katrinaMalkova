#!/usr/bin/env node

import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';

import { candidateAssessment } from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, '..', '__fixtures__', 'job-resume.csv');
const content = fs.readFileSync(filePath, 'utf-8');

// console.log(content);

candidateAssessment(content);
