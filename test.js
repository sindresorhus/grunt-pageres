import test from 'ava';
import pathExists from 'path-exists';

test('pageres', t => {
	t.true(pathExists.sync('temp/sindresorhus.com-1000x1000.png'));
	t.true(pathExists.sync('temp/sindresorhus.com-100x100.png'));
});

test('multiple URLs', t => {
	t.true(pathExists.sync('temp/github.com-1000x1000.png'));
	t.true(pathExists.sync('temp/google.com-1000x1000.png'));
});
