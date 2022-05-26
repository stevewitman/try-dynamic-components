import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Block } from '../models/block';
import { tap } from 'rxjs';

const BASE_URL = 'assets/blocks.json';

@Injectable({
  providedIn: 'root',
})
export class BlocksService {

  constructor(private httpClient: HttpClient) {}

  getAllBlocks() {
    return this.httpClient.get<Block[]>(BASE_URL);
  }
}
