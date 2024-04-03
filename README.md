# Описание репозитория:
Это тренировочная практика для отработки навыков работы с массивами и объектами. Добро пожаловать в мир агрегации и анализа :) Надеюсь, вам ~~не~~ понравится.

## Требования к выполнению работы:
1. Нельзя менять уже написанный код, тесты и другие файлы, добавленные в проект.
2. Выполняйте коммиты и пуши как можно чаще. Так вы будете видеть, какие из тестов сработают, а какие нет.
3. Во время работы не забывайте запускать линтер и тесты.
# Рекомендации:
1. Не забудьте перед началом работы изучить `Makefile` и выполнить установку зависимостей.
2. Старайтесь оптимизировать свой код: попробуйте использовать различные операторы и функции, заменяющие классические конструкции (циклы, условия).
3. Не забудьте грамотно выстраивать логику работы: одна функция выполняет одно действие.
4. Не забывайте разделять чистые функции и функции с побочками, если это возможно.
# Разрешенные ресурсы:
- [Javascript](https://developer.mozilla.org/ru/docs/Learn/JavaScript)
- [Web development](https://developer.mozilla.org/en-US/docs/Learn)
- [Node](https://nodejs.org/ru/docs)
- [NPM](https://docs.npmjs.com/)
- [lodash](https://lodash.com/docs)
- [Github](https://github.com/)
- [Github Classroom](https://classroom.github.com/)
- [Github Docs](https://docs.github.com/ru)
- [ESLint](https://eslint.org/docs/latest/)
# Из чего состоит репозиторий
![sheme: how is it work](./docs/Untitled%20Diagram.drawio.png)

Загляните в папку - [`bin`](./bin/) и файл - [`package.json`](./package.json). Как можно заметить, файлы для запуска кода уже созданы и добавлены в качестве команд.

Теперь давайте разберем структуру одного из файлов в директории **bin/**:
```javascript
#!/usr/bin/env node // шебанг, классика

// импорт необходимых библиотек и функций для чтения содержимого файлов .csv и присваивания его в переменную content
import { fileURLToPath } from 'url'; 
import fs from 'fs';
import path from 'path';

// импорт функции (ее как раз вам и нужно написать) из index.js 
import { tableParsing } from '../index.js';

// определение пути к файлу, чтение содержимого файла и сохранение в переменную content
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, '..', '__fixtures__', 'messengers.csv');
const content = fs.readFileSync(filePath, 'utf-8');

// вызов вашей функции с содержимым файла .csv
tableParsing(content);
```
Подытожим: все, что вам нужно сделать, написать функцию, выполняющую задачи каждого шага. Для проверки функции можно запустить сразу тесты (`make test`) или команду запуска кода (`messengers`, `job-resume` или `actors`).
# Задание №1
Ваша задача написать консольную утилиту, которая анализирует переданные данные из таблицы и показывает статистику по этим данным. Файлы хранятся в директории *\_\_fixtures\_\_* в формате CSV. Они используются для тестов и понадобятся вам, для запуска и проверки утилиты в терминале. Вся информация уже прочитана и содержится в константе content. Вам остается только написать и экспортировать функцию в файле index.js, которая принимает данные в виде строки и работает с ними. Программа выводит строки в консоль, каждая строка является решением определенного шага. Таким образом 5 шагов предполагает 5 строк в консоли.

Пример запуска утилиты:
```bash
bin/messengers.js __fixtures__/messengers.csv
General top messenger: VK Messenger, Owner: ВКонтакте, VK 
Download count: Max count: 1000, Min count: 23
Top-3 Australia: Vider, Signal, LINE
Top downloads: WhatsApp, Facebook Messenger, Telegram, Signal, Viber, Snapchat, WeChat, LINE
Top owner: Tencent
```

Каждая строчка в выводе утилиты, представляет собой небольшое отдельное вычислительное задание. Вам предстоит решать эти задачи по очереди. Ниже список этих заданий:
1. Выведите название приложения и название компании-разработчика для мессенджера, у которого самый высокий средний рейтинг в Google Play и App Store:
```bash
bin/messengers.js __fixtures__/messengers.csv
General top messenger: VK Messenger, Owner: ВКонтакте, VK 
```
2. Выведите самое большое и самое маленькое количество скачиваний приложений в Индии:
```bash
bin/messengers.js __fixtures__/messengers.csv
General top messenger: VK Messenger, Owner: ВКонтакте, VK   # Не забывайте что предыдущее решение остается работать
Download count: Max count: 1000, Min count: 23
```
3. Выведите в алфавитном порядке 3 самых популярных приложений в Австралии:
```bash
bin/messengers.js __fixtures__/messengers.csv
General top messenger: VK Messenger, Owner: ВКонтакте, VK 
Download count: Max count: 1000, Min count: 23
Top-3 Australia: Vider, Signal, LINE
```
4. Выведите список приложений в порядке возрастания среднего количетсва скачиваний по всем странам. *Среднее количество скачиваний* = Общее количество скачиваний приложения по всем странам / Количество стран
```bash
bin/messengers.js __fixtures__/messengers.csv
General top messenger: VK Messenger, Owner: ВКонтакте, VK 
Download count: Max count: 1000, Min count: 23
Top-3 Australia: Vider, Signal, LINE
Top downloads: WhatsApp, Facebook Messenger, Telegram, Signal, Viber, Snapchat, WeChat, LINE
```
5. Выведите название компании, которая владеет двумя или более приложениями из списка:
```bash
bin/messengers.js __fixtures__/messengers.csv
General top messenger: VK Messenger, Owner: ВКонтакте, VK 
Download count: Max count: 1000, Min count: 23
Top-3 Australia: Vider, Signal, LINE
Top downloads: WhatsApp, Facebook Messenger, Telegram, Signal, Viber, Snapchat, WeChat, LINE
Top owner: Tencent
```
# Задание №2
Ваша задача написать консольную утилиту, которая анализирует переданные данные из резюме и показывает статистику по его данным. Файлы хранятся в директории *\_\_fixtures\_\_* в формате CSV. Они используются для тестов и понадобятся вам, для запуска и проверки утилиты в терминале. Вся информация уже прочитана и содержится в константе content. Вам остается только написать и экспортировать функцию в файле index.js, которая принимает данные в виде строки и работает с ними. Программа выводит строки в консоль, каждая строка является решением определенного шага. Таким образом 5 шагов предполагает 5 строк в консоли.

Пример запуска утилиты:
```bash
bin/job-resume.js __fixtures__/job-resume.csv
Job seeker: John Doe, Junior JavaScript Developer
Required stack: 4
GitHub nickname: superProger3000
Experience: 3 years 0 months
Education: A place, B place, C place
```

Каждая строчка в выводе утилиты, представляет собой небольшое отдельное вычислительное задание. Вам предстоит решать эти задачи по очереди. Ниже список этих заданий:
1. Выведите имя и фамилию соискателя:
```bash
bin/job-resume.js __fixtures__/job-resume.csv
Job seeker: John Doe, Junior JavaScript Developer
```
2. Выведите количество фреймворков из списка, которыми владеет соискатель. Список фреймворков:  "React", "Angular", "Vue.js", "JQuery", "Backbone.js", "Node.js", "Ember.js", "Meteor":
```bash
bin/job-resume.js __fixtures__/job-resume.csv
Job seeker: John Doe, Junior JavaScript Developer
Required stack: 4
```
3. Выведите никнейм соискателя на GitHub:
```bash
bin/job-resume.js __fixtures__/job-resume.csv
Job seeker: John Doe, Junior JavaScript Developer
Required stack: 4
GitHub nickname: superProger3000
```
4. Выведите суммарный опыт работы соискателя в количестве полных лет и месяцев (перерывы между местами работы тоже пойдут в счет):
```bash
bin/job-resume.js __fixtures__/job-resume.csv
Job seeker: John Doe, Junior JavaScript Developer
Required stack: 4
GitHub nickname: superProger3000
Experience: 3 years 0 months
```
5. Выведите в алфавитном порядке список названий учебных заведений, в которых учился соискатель:
```bash
bin/job-resume.js __fixtures__/job-resume.csv
Job seeker: John Doe, Junior JavaScript Developer
Required stack: 4
GitHub nickname: superProger3000
Experience: 3 years 0 months
Education: A place, B place, C place
```
# Задание №3
Ваша задача написать консольную утилиту, которая анализирует переданные данные из списка о наградах и номинациях актера и выдает статистику по его данным. Файлы хранятся в директории *\_\_fixtures\_\_* в формате CSV. Они используются для тестов и понадобятся вам, для запуска и проверки утилиты в терминале. Вся информация уже прочитана и содержится в константе content. Вам остается только написать и экспортировать функцию в файле index.js, которая принимает данные в виде строки и работает с ними. Программа выводит строки в консоль, каждая строка является решением определенного шага. Таким образом 5 шагов предполагает 5 строк в консоли.

Пример запуска утилиты:
```bash
bin/actors.js __fixtures__/nicolas-cage.csv
Awards: Rewards: 15, Nominations: 24
Movies 2003: Плетёный человек, Покидая Лас-Вегас, Призрачный гонщик 2
Rewards percent: 27%
Most successful movie: Сумасшедшая езда
Annual counter: Success year: 1998, Bad year: 2008
```

Каждая строчка в выводе утилиты, представляет собой небольшое отдельное вычислительное задание. Вам предстоит решать эти задачи по очереди. Ниже список этих заданий:
1. Выведите количество премий и номинаций актера:
```bash
bin/actors.js __fixtures__/nicolas-cage.csv
Awards: Rewards: 15, Nominations: 24
```
2. Выведите в алфавитном порядке список фильмов, за которые актер получил награду или номинацию в 2003 году:
```bash
bin/actors.js __fixtures__/nicolas-cage.csv
Awards: Rewards: 15, Nominations: 24
Movies 2003: Плетёный человек, Покидая Лас-Вегас, Призрачный гонщик 2
```
3. Выведите процент наград по отношению к общему списку наград и номинаций (округление выполните по математическим правилам):
```bash
bin/actors.js __fixtures__/nicolas-cage.csv
Awards: Rewards: 15, Nominations: 24
Movies 2003: Плетёный человек, Покидая Лас-Вегас, Призрачный гонщик 2
Rewards percent: 27%
```
4. Выведите название фильма, за который актер получил больше всего наград и номинаций. Если таких фильмов несколько, то выведите первый в алфавитном порядке:
```bash
bin/actors.js __fixtures__/nicolas-cage.csv
Awards: Rewards: 15, Nominations: 24
Movies 2003: Плетёный человек, Покидая Лас-Вегас, Призрачный гонщик 2
Rewards percent: 27%
Most successful movie: Сумасшедшая езда
```
5. Выведите название премий, которые наминировали актера чаще всего и реже всего. Если таких премий несколько, то выведите первую в алфавитном порядке:
```bash
bin/actors.js __fixtures__/nicolas-cage.csv
Awards: Rewards: 15, Nominations: 24
Movies 2003: Плетёный человек, Покидая Лас-Вегас, Призрачный гонщик 2
Rewards percent: 27%
Most successful movie: Сумасшедшая езда
Awards statisctics: Award's pet: Премия Оскар, Award's outsider: Премия прайм-тайм Эмми
```