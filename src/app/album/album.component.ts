import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlbumService } from './album.server';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
})
export class AlbumComponent implements OnInit{
  _allChecked = false;
  _indeterminate = false;
  _displayData = [];
  _displayTotal = 0;
  _displayIndex = 1;
  
  deleteData(value) {
    const arr = [];
    this._displayData.forEach((val, index) => {
      if (val.key !== value) {
        arr.push(val);
      }
    });
    this._displayData = arr;
  }
  constructor(private albumService: AlbumService) { }
  ngOnInit() {
    this.albumService.getAlbumList(this);
  }
  beforeUpload() {
    document.getElementById("file").click();
  }
  upload($event) {
    this.albumService.uploadPic("http://k.21cn.com/api/publish/uploadUserPic.do", $event)
      .then(
      data => {
        console.log(data);
        console.log("url为:" + data["list"][0]["url"])
      }
      )
      .catch(
      () => alert("网络信号不好，请稍后重试")
      )
  }



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
  _nzPageIndexChange(){
    this.albumService.getAlbumList(this);
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
}
