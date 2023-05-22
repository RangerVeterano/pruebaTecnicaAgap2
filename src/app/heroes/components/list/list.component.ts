import { Component, Input, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { heroe } from '../../interfaces/heroe.interface';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ModalConfirmComponent } from '../modal-confirm/modal-confirm.component';
import { HeroesService } from '../../services/heroes.service';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() heroes!: heroe[];
  @Output() emitBorrado = new EventEmitter<number>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  click$ = fromEvent(document, 'keyup');

  displayedColumns: string[] = ['id', 'name', 'acciones'];
  dataSource!: MatTableDataSource<heroe>;

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private hs: HeroesService) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<heroe>(this.heroes);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  editHero(hero: heroe) {
    this.router.navigate(['/heroes/edit/' + hero.id]);
  }

  aplicarFiltro(event: Event) {

    this.click$
      .pipe(
        debounceTime(500)
      )
      .subscribe(() => {
        const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
        this.dataSource.data = this.hs.getHeroesBySearch(filterValue);
      });
  }

  borrarHero(hero: heroe): void {
    const dialogRef = this.dialog.open(ModalConfirmComponent, {
      data: {
        text: `Estás seguro que quieres borrar a: ${hero.name}?`,
        heroId: hero.id
      },
    });

    dialogRef.afterClosed().subscribe(id => {
      if (id !== undefined) {
        this.heroes.splice(this.heroes.findIndex(heroL => heroL.id === id), 1);
        this.dataSource.data = this.heroes;
        this.emitBorrado.emit(id);
      }
    });
  }
}
