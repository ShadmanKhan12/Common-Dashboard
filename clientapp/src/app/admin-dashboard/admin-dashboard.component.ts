import { Component, OnInit } from '@angular/core';
import { ClaimsServiceService } from '../claims-service.service';
import { Claim } from '../DataModels/ClaimModel';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  requests: Claim[];
  constructor(private claimService: ClaimsServiceService) { }

  ngOnInit(): void {
    this.claimService.getAllReuests().subscribe(data=>{
      console.log(data);
      this.requests = data;
      console.log(this.requests);
    })
  }

  onApprove(item: Claim){
    if(item){
      item.isApproved = true;
      this.claimService.approveClaim(item).subscribe(response=>{
        alert("Approved Claim");
      })
    }
  }

  onDelete(itemId : any){
    if(itemId){
      this.claimService.rejectClaim(itemId).subscribe(response=>{
      if(response){
        alert("Rejected Claim");
      }
      })
    }
  }
  
}
