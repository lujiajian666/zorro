import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css'],
})
export class TypeComponent implements OnInit {
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
  constructor(private http: HttpClient) {}
  ngOnInit() {
    console.log('first:' + +new Date())
    this.http.get('./assets/album.json').subscribe(data => {
      console.log('second:' + +new Date())
      const arr = [];
      for (const i in data) {
        // this._displayData.push(data[i]);
        arr.push(data[i]);
      }
      this._displayData = arr;
    });
    console.log('third:' + +new Date());
  }
}
