import { Injectable } from '@angular/core';
import { albumData } from './albumData';
@Injectable()
export class AlbumService {
  // 获得全部数据
  getAlbum() {
    return albumData;
  }

}
