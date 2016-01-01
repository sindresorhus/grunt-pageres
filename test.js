import test from 'ava';
import pathExists from 'path-exists';

test('pageres', t => {
	t.true(pathExists.sync('tmp/yeoman.io-1000x1000.png'));
	t.true(pathExists.sync('tmp/yeoman.io-100x100.png'));
});

test('multiple URLs', t => {
	t.true(pathExists.sync('tmp/yeoman.io-1000x1000.png'));
	t.true(pathExists.sync('tmp/google.com-1000x1000.png'));
});
