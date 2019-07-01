import { Component, OnInit, ViewChild } from '@angular/core';
import { FormDetail } from "./../new-page/FormDetail";
import { AddEditPageService } from '../add-edit-page.service';
import { NewPageComponent } from '../new-page/new-page.component';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  @ViewChild(NewPageComponent) childComponent;

  articleList :FormDetail[];
  activeTab : boolean;
  editUrl : string;
  iframUrl;
  constructor(private adminPageService : AddEditPageService,private sanitizer: DomSanitizer) {
   
   }

  ngOnInit() {
    this.articleList=[];
    this.activeTab=true;
    this.fetchArticles();
  }
fetchArticles():void{
    this.adminPageService.getArticlesForEdit().subscribe(articleList=>this.articleList=articleList)
console.log("inside fetchArticles method"+this.articleList)
}

editArticle(url : String) : void{
  this.editUrl='http://localhost:8080/admin/'+url;
  this.iframUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.editUrl);

  this.activeTab=false;

// this.childComponent.editExisting(url);
}

addNewArticle():void{
  this.editUrl='http://localhost:8080/admin/angular-directive';
  this.activeTab=false;

}
viewArticle(){
  if(this.childComponent.formDataModificationInd){
   var confirmed= confirm("There are undaved changes!!Still wanna continue?")
   if(confirmed){
    this.activeTab=true;
   }
  }else{
    this.activeTab=true;
    this.editUrl=null;
  }
}
deleteArticle(articleUrl: String) : void{
  this.adminPageService.delteArticle(articleUrl).subscribe(status=>{

    if(status){
      this.fetchArticles();
    }else{
      alert("Delete failed.")
    }
  })
};

}
