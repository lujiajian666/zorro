import { Injectable } from '@angular/core';
import { HttpService } from '../common/http.server'; 
@Injectable()
export class AlbumService {
    private url = {
        listAlbum: '/api/manage/listAlbum',
        addAlbum: '/api/manage/addAlbum',
        listCategory: '/api/manage/listCategory',
        searchAlbumFromXimalaya: '/api/ximalaya/search/albums'
    };

    constructor(private httpService: HttpService) {}
    uploadPic(url,$event):Promise<any>{
        var file=$event.currentTarget.files[0];
        var that = this;
        var formData = new FormData();
        formData.append('imgFiles',file);
        return this.httpService.post(url,formData);
    }
}