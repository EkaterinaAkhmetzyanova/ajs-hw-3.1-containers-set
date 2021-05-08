/* eslint-disable no-undef */
import Team from '../team';
import Bowman from '../bowman';
import Daemon from '../daemon';

test('check add method', () => {
    const team = new Team();
    const bowman = new Bowman('blabla');
    team.add(bowman);
    const expected = [
    {
        name: 'blabla',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25
    }
];
    expect(team.toArray()).toEqual(expected);
});

test('adding existing character', () => {
    const team = new Team();
    const bowman = new Bowman('blabla');
    team.add(bowman);
    expect(() => team.add(bowman)).toThrowError('Выбранный персонаж уже добавлен.');
});

test('check addAll', () => {
    const team = new Team();
    const bowman = new Bowman('blabla');
    const daemon = new Daemon('lalala');
    team.addAll(bowman, daemon);
    const expected = [
        {
            name: 'blabla',
            type: 'Bowman',
            health: 100,
            level: 1,
            attack: 25,
            defence: 25
        },
        {
            name: 'lalala',
            type: 'Daemon',
            health: 100,
            level: 1,
            attack: 10,
            defence: 40
        }
    ];
    expect(team.toArray()).toEqual(expected);
});

test('check addAll - dublicate', () => {
    const team = new Team();
    const bowman = new Bowman('blabla');
    team.addAll(bowman, bowman);
    const expected = [
    {
        name: 'blabla',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25
    }
];
    expect(team.toArray()).toEqual(expected);
});