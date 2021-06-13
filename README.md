This app let's user to login and request to claim for reimbursement. And an admin can can approve/reject(delete) request upon checking the data.
Adding some sceenshots of the app for convenience. 

This app has been developed with ASP.NET Core 5.0.20, Angular 11.2.14 , MongoDB atlas. It uses MongoDB nuget Packages MongoDB Driver,Bson,Driver.Core, Angular HttpInterceptor,
HttpClient,RxJS,Boostrap etc.

The core pats of this application are:

**Role Based Basic Authentication :** This app uses Role Based Basic Authentication. Upon login a token is generated and that token is usesd by Angular HttpIntercptor.

**HttpInterceptor:** Uses token and adds in the Authorization header.

**Role Based Route Protection:** Auth guard uses angular canActivte which enables route protection based on user role.

**Component Based:** This app is component based. All componnets are developed with scalability and reusability in mind.

**Sigle Entry point:** The login page is for all users . Upon successful login based on user role the users are granted access to perform certain actions. Users are redirected to 
user-dashboard and admins are redirected to finance-dashboard route. 

*Functionalities*
Users/Admin can login form the login page. Upon login based on user role the user is redirected to the dashboard page. There are two dashboards. If the user is admin then 
the user is redirected to the finance-dashboard page, where oninit the component fetcthes all the data. Basic Authentication has been implemented for Authentication and Authorization
the angular interceptor intercepts the requests and places the token as requested. Users cannot access admin route in this case which is finance-dashboard, this is where 
AuthGuard comes. The routes are protected based on roles. Admin can approve/reject claims. 

Installation Guideline:
1. Clone repo to local :  git clone https://github.com/ShadmanKhan12/Common-Dashboard.git
2. cd to backend => click backend.sln file to open Visual Studio => open terminal => run command => "dotnet restore"
Backend Uses kestrel server. 
3. open the clientapp folder => open shell => type "code ." => open terminal => run command => npm install and then "ng s -o"








