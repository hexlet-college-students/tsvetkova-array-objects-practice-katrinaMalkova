/* eslint-disable */
import fs from 'fs';
import path from 'path';
import { tableParsing, candidateAssessment, actorRating } from '../index.js';

const filePathTask1 = path.join(__dirname, '..', '__fixtures__', 'messengers.csv');
const contentTask1 = fs.readFileSync(filePathTask1, 'utf-8');

const filePathTask2 = path.join(__dirname, '..', '__fixtures__', 'job-resume.csv');
const contentTask2 = fs.readFileSync(filePathTask2, 'utf-8');

const filePathTask3 = path.join(__dirname, '..', '__fixtures__', 'nicolas-cage.csv');
const contentTask3 = fs.readFileSync(filePathTask3, 'utf-8');

const filePathTask3Check2 = path.join(__dirname, '..', '__fixtures__', 'leonardo-dicaprio.csv');
const contentTask3Check2 = fs.readFileSync(filePathTask3Check2, 'utf-8');

describe('Task 1 - Messengers', () => {
  const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  tableParsing(contentTask1);
  const [q1, q2, q3, q4, q5] = consoleSpy.mock.calls.map((args) => args[0]);
  test('Step 1', () => {
    expect(q1).toEqual('General top messenger: Signal, Owner: Signal Foundation');
  });
  test('Step 2', () => {
    expect(q2).toEqual('Download count: Max count: 50000000, Min count: 5000000');
  });
  test('Step 3', () => {
    expect(q3).toEqual('Top-3 Australia: Facebook Messenger, Telegram, WhatsApp');
  });
  test('Step 4', () => {
    expect(q4).toEqual('Top downloads: Signal, LINE, WeChat, Viber, Telegram, Snapchat, Facebook Messenger, WhatsApp');
  });
  test('Step 5', () => {
    expect(q5).toEqual('Top owner: Meta Platforms Inc.');
  });
  consoleSpy.mockRestore();
});

describe('Task 2 - Job resume', () => {
  const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  candidateAssessment(contentTask2);
  const [q1, q2, q3, q4, q5] = consoleSpy.mock.calls.map((args) => args[0]);
  test('Step 1', () => {
    expect(q1).toEqual('Job seeker: John Doe, Junior JavaScript Developer');
  });
  test('Step 2', () => {
    expect(q2).toEqual('Required stack: 5');
  });
  test('Step 3', () => {
    expect(q3).toEqual('GitHub nickname: doejohn');
  });
  test('Step 4', () => {
    expect(q4).toEqual('Experience: 7 years 5 months');
  });
  test('Step 5', () => {
    expect(q5).toEqual('Education: ABC Academy, DEF University, QRS College, XYZ Institute');
  });
  consoleSpy.mockRestore();
});

describe('Task 3 - Actor rating Nicolas Cage', () => {
  const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  actorRating(contentTask3);
  const [q1, q2, q3, q4, q5] = consoleSpy.mock.calls.map((args) => args[0]);
  test('Step 1', () => {
    expect(q1).toEqual('Awards: Rewards: 5, Nominations: 12');
  });
  test('Step 2', () => {
    expect(q2).toEqual('Movies 2003: Адаптация');
  });
  test('Step 3', () => {
    expect(q3).toEqual('Rewards percent: 29%');
  });
  test('Step 4', () => {
    expect(q4).toEqual('Most successful movie: Покидая Лас-Вегас');
  });
  test('Step 5', () => {
    expect(q5).toEqual('Awards statisctics: Award\'s pet: Премия Золотая малина, Award\'s outsider: Премия BAFTA');
  });
  consoleSpy.mockRestore();
});

describe('Task 3 - Actor rating Leonardo DiCaprio', () => {
  const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  actorRating(contentTask3Check2);
  const [q1, q2, q3, q4, q5] = consoleSpy.mock.calls.map((args) => args[0]);
  test('Step 1', () => {
    expect(q1).toEqual('Awards: Rewards: 14, Nominations: 34');
  });
  test('Step 2', () => {
    expect(q2).toEqual('Movies 2003: Банды Нью-Йорка, Поймай меня, если сможешь');
  });
  test('Step 3', () => {
    expect(q3).toEqual('Rewards percent: 29%');
  });
  test('Step 4', () => {
    expect(q4).toEqual('Most successful movie: Авиатор');
  });
  test('Step 5', () => {
    expect(q5).toEqual('Awards statisctics: Award\'s pet: Премия Золотой глобус, Award\'s outsider: Премия Ассоциации кинокритиков Лос-Анджелеса');
  });
  consoleSpy.mockRestore();
});
