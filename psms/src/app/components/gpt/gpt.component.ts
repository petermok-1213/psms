import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/api.service';

import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-gpt',
  templateUrl: './gpt.component.html',
  styleUrls: ['./gpt.component.scss']
})
export class GptComponent implements OnInit {

  prompt: string = "What can you do"
  gptResponse: string = "No response"

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log("Prompt submitted")
    this.apiService.submitPrompt(this.prompt)
    this.prompt = ""
  }

}
