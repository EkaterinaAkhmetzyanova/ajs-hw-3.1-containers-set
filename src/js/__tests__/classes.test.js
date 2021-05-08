/* eslint-disable no-undef */
import Character from '../character';
import Bowman from '../bowman';
import Daemon from '../daemon';

test('smallNameLength', () => {
  const received = () => new Character('O', 'Bowman', 100);
  expect(received).toThrowError('Имя героя должно состоять от 2 до 10 символов.');
});

test('bigNameLength', () => {
  const received = () => new Character('aaaaaaaaaaaaaa', 'Bowman', 100);
  expect(received).toThrowError('Имя героя должно состоять от 2 до 10 символов.');
});

test('typeError', () => {
  const received = () => new Character('Lala', 'Dambledore');
  expect(received).toThrowError('Выбранный тип не существует.');
});

test('Zombie parameters', () => {
  const daemon = new Daemon('Lala');
  expect([daemon.type, daemon.health, daemon.attack, daemon.defence]).toEqual(['Daemon', 100, 10, 40]);
});

test('Bowman parameters', () => {
  const bowman = new Bowman('nnnnn');
  expect([bowman.type, bowman.health, bowman.attack, bowman.defence]).toEqual(['Bowman', 100, 25, 25]);
});

test('Daemon parameters', () => {
  const daemon = new Daemon('pppppp');
  expect([daemon.type, daemon.health, daemon.attack, daemon.defence]).toEqual(['Daemon', 100, 10, 40]);
});

