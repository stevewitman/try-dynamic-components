import { Component, OnInit } from '@angular/core';
import { BlocksService } from "../../services/blocks.service";
import { Block } from "../../models/block";
import { Observable, of, tap } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  blocks: Observable<Block[]> = of([]);

  constructor(private blocksService: BlocksService) {}

  ngOnInit() {
    this.getBlocks();
  }

  getBlocks() {
    this.blocks = this.blocksService.getAllBlocks();
  }
}