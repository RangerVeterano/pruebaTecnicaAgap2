import { TestBed } from '@angular/core/testing';

import { HeroesService as heroService } from './heroes.service';
import { heroesMock } from '../mocks/heroes.mock';

describe('ServicesService', () => {
    let service: heroService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(heroService);
        service.resetHeroes();
    });


    it('Conseguir heroe con id 1684747457309', () => {
        service.resetHeroes();
        const hero = service.getHeroeById(1684747457309);
        expect(hero).toEqual({
            id: 1684747457309,
            name: 'Superman'
        });
    });

    it('Conseguir heroe con id 1', () => {
        service.resetHeroes();
        const hero = service.getHeroeById(1);
        expect(hero).toBeUndefined();
    });

    it('Conseguir heroes con cadena man', () => {
        service.resetHeroes();
        const heroesSearch = service.getHeroesBySearch('man');
        expect(heroesSearch).toEqual([{
            id: 1684747435871,
            name: 'Spiderman'
        }, {
            id: 1684747457309,
            name: 'Superman'
        }, {
            id: 1684747474922,
            name: 'Manolito el fuerte'
        }, {
            id: 1684827181214,
            name: 'Iron man'
        }]);
    });

    it('Conseguir heroes con cadena el', () => {
        service.resetHeroes();
        const heroesSearch = service.getHeroesBySearch('el');
        expect(heroesSearch).toEqual([{
            id: 1684747474922,
            name: 'Manolito el fuerte'
        }, {
            id: 1684827149128,
            name: 'Paco el chocolatero'
        }, {
            id: 1684827168818,
            name: 'El mensajero'
        }]);
    });

    it('Conseguir heroes con cadena Alberto', () => {
        service.resetHeroes();
        const heroesSearch = service.getHeroesBySearch('Alberto');
        expect(heroesSearch).toEqual([{
            id: 1684827193402,
            name: 'Alberto'
        }]);
    });

    it('Conseguir heroes con cadena Cosa', () => {
        service.resetHeroes();
        const heroesSearch = service.getHeroesBySearch('cosa');
        expect(heroesSearch.length).toEqual(0);
    });

    it('Conseguir heroe con id 1', () => {
        service.resetHeroes();
        const hero = service.getHeroeById(1);
        expect(hero).toBeUndefined();
    });

    it('Añadir a ignacio', () => {
        service.resetHeroes();
        const newHero = {
            id: 72,
            name: 'Ignacio'
        };
        service.addHeroe(newHero);
        service.getHeroes().subscribe(data => {
            expect(data.length).toEqual(8);
            expect(data[7]).toEqual(newHero);
        });
    });

    it('Editar nuevo heroe', () => {
        service.resetHeroes();
        const editHero = {
            id: 1684827193402,
            name: 'Alba'
        };
        service.editHeroe(editHero);
        service.getHeroes().subscribe(data => {
            expect(data.length).toEqual(7);
            expect(data[6].name).toEqual('Alba');
        });
    });

    it('Borrar heroe alberto y paco', () => {
        service.resetHeroes();
        service.removeHeroe(1684827149128) //paco
        service.removeHeroe(1684827193402) //alberto
        service.getHeroes().subscribe(data => {
            expect(data.length).toEqual(5);
        });
    });
});
