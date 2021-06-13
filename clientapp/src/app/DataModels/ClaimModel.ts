export class Claim {
    constructor(
      public userId: number = 0,
      public userDept: string  = '',
      public resourceLink: string = '',
      public resourcePrice: string  = '',
      public isApproved: boolean = false,
     
    ) {  }
  
  }

