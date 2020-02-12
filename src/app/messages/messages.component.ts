import { Component, OnInit } from "@angular/core";
import { MessageService } from "../message.service";

@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.scss"]
})
export class MessagesComponent implements OnInit {
  // MessageService を注入する
  // messageService をテンプレートでバインドして利用したいため public で宣言する
  constructor(public messageService: MessageService) {}

  ngOnInit() {}
}
