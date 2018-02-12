import { Injectable } from '@angular/core';
import { HttpService } from '../common/http.server'; 
@Injectable()
export class AlbumService {
    private url = {
        getAlbumList: 'http://localhost:3000/album/getAlbumList',
        deleteAlbum:"http://localhost:3000/album/deleteAlbum",
        addAlbum: '/api/manage/addAlbum',
    };

    constructor(private httpService: HttpService) {}
    uploadPic(url,$event):Promise<any>{
        var file=$event.currentTarget.files[0];
        var that = this;
        var formData = new FormData();
        formData.append('imgFiles',file);
        return this.httpService.post(url,formData);
    }
    getAlbumList(_self):void{
        var http=this.httpService.post(this.url.getAlbumList,{page:_self._displayIndex});
        http.then((data)=>{
           _self._displayData=data.data;
           _self._displayTotal=data.total;
        }).catch((error)=>{
           console.log(error)
           return [];
        })
    }
    deleteAlbum(id:Number):void{
        var http=this.httpService.post(this.url.deleteAlbum,{id:id});
    }
}