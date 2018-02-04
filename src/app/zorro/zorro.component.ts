import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../service/album/album.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: ' app-zorro ',
  templateUrl: './zorro.component.html',
  styleUrls: ['./zorro.component.css'],
  providers: [AlbumService]
})
export class ZorroComponent implements OnInit {
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
     this._displayData.forEach( (val, index) => {
        if ( val.key === value) {
          this._displayData = this._displayData.slice(index + 1);
          console.log(this._displayData);
        }
     });
  }
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get('./assets/album.json').subscribe(data => {
      for (let i in data) {
          console.log(data[i]);
          this._displayData.push(data[i]);
      }
      console.log(this._displayData);
    });
  }
}
