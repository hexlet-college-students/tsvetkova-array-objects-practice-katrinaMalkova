install:
	npm ci
lint:
	npx eslint .
lint-fix:
	npx eslint . --fix
test:
	npm test __tests__/index.test.js
test-steps:
	npm test -- __tests__/index.test.js -t 'Task 1 - Messengers Step 1'
	npm test -- __tests__/index.test.js -t 'Task 1 - Messengers Step 2'
	npm test -- __tests__/index.test.js -t 'Task 1 - Messengers Step 3'
	npm test -- __tests__/index.test.js -t 'Task 1 - Messengers Step 4'
	npm test -- __tests__/index.test.js -t 'Task 1 - Messengers Step 5'
	npm test -- __tests__/index.test.js -t 'Task 2 - Job resume Step 1'
	npm test -- __tests__/index.test.js -t 'Task 2 - Job resume Step 2'
	npm test -- __tests__/index.test.js -t 'Task 2 - Job resume Step 3'
	npm test -- __tests__/index.test.js -t 'Task 2 - Job resume Step 4'
	npm test -- __tests__/index.test.js -t 'Task 2 - Job resume Step 5'
	npm test -- __tests__/index.test.js -t 'Task 3 - Actor rating Nicolas Cage Step 1'
	npm test -- __tests__/index.test.js -t 'Task 3 - Actor rating Nicolas Cage Step 2'
	npm test -- __tests__/index.test.js -t 'Task 3 - Actor rating Nicolas Cage Step 3'
	npm test -- __tests__/index.test.js -t 'Task 3 - Actor rating Nicolas Cage Step 4'
	npm test -- __tests__/index.test.js -t 'Task 3 - Actor rating Nicolas Cage Step 5'
	npm test -- __tests__/index.test.js -t 'Task 3 - Actor rating Leonardo DiCaprio Step 1'
	npm test -- __tests__/index.test.js -t 'Task 3 - Actor rating Leonardo DiCaprio Step 2'
	npm test -- __tests__/index.test.js -t 'Task 3 - Actor rating Leonardo DiCaprio Step 3'
	npm test -- __tests__/index.test.js -t 'Task 3 - Actor rating Leonardo DiCaprio Step 4'
	npm test -- __tests__/index.test.js -t 'Task 3 - Actor rating Leonardo DiCaprio Step 5'