import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  content: any = {
    text: ""
  }
  fileUrls = [];

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  input(e) {
    var ele = document.getElementById("textarea");
    if (e.length > 35) {
      ele.style.transition = '0.4s';
      ele.style.fontSize = '20px';
    }
    else
      ele.style.fontSize = '32px';
  }

  dropContainerChange(event) {

    let fileList = event.target.files;
    for (var file of fileList) {
      if (this.fileUrls.length == 4)
        break;
      if (!this.isImage(file))
        continue;
      this.fileUrls.push(this.sanitizer.bypassSecurityTrustResourceUrl
        (URL.createObjectURL(file)));
    }
  }
  dragOver() {
    document.getElementById('imageDropContainer').className = 'dragHover imageDropContainer';
  }

  dropImage() {
    document.getElementById('imageDropContainer').className = 'imageDropContainer';
  }

  isImage(filename) {
    if (filename.type.split('/')[0].toLowerCase() == 'image') {
      return true;
    }
    return false;
  }

  dragleave() {
    document.getElementById('imageDropContainer').className = 'dragHoverimageDropContainer';
  }
}
