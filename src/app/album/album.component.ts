import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlbumService } from './album.server';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
})
export class AlbumComponent implements OnInit {
  _allChecked = false;
  _indeterminate = false;
  _displayData = [];
  _displayDataChange($event) {
    this._displayData = $event;
    this._refreshStatus();
  }
  _refreshStatus() {
    const allChecked = this._displayData.every(value => value.checked === true);
    const allUnChecked = this._displayData.every(value => !value.checked);
    this._allChecked = allChecked;
    this._indeterminate = (!allChecked) && (!allUnChecked);
  }
  _checkAll(value) {
    if (value) {
      this._displayData.forEach(data => {
        data.checked = true;
      });
    } else {
      this._displayData.forEach(data => {
        data.checked = false;
      });
    }
    this._refreshStatus();
  }
  deleteData(value) {
    console.log('delete');
    const arr = [];
    this._displayData.forEach( (val, index) => {
      if ( val.key !== value) {
        arr.push(val);
      }
    });
    this._displayData = arr;
  }
  constructor(private albumService:AlbumService) {}
  ngOnInit() {
  /*  console.log('first:' + +new Date())
    this.http.get('./assets/album.json').subscribe(data => {
      console.log('second:' + +new Date())
      const arr = [];
      for (const i in data) {
        // this._displayData.push(data[i]);
        arr.push(data[i]);
      }
      this._displayData = arr;
    });
    console.log('third:' + +new Date());*/
  }
  beforeUpload(){
    document.getElementById("file").click();
  }
  upload($event){
    this.albumService.uploadPic("http://k.21cn.com/api/publish/uploadUserPic.do",$event)
    .then(
      data=>{
        console.log(data);
        console.log("url为:"+data["list"][0]["url"])
      }
    )
    .catch(
      ()=>alert("网络信号不好，请稍后重试")
    )
  }
  
}
