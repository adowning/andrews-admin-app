<template>
<div>
<link href="//netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">

<!------ Include the above in your HEAD tag ---------->

<div class="container">
      <div v-if="okShow" class="row">
      <!-- <div class="col-md-5  toppad  pull-right col-md-offset-3 ">
           <A href="edit.html" >Edit Profile</A>

        <A href="edit.html" >Logout</A>
       <br>
<p class=" text-info">May 05,2014,03:00 pm </p>
      </div> -->
        <div class="q-mt-xl col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xs-offset-0 col-sm-offset-0 col-md-offset-1 col-lg-offset-1 toppad" >
   
   
          <div class="panel panel-info">
            <div class="panel-heading">
              <h3 class="panel-title" >{{profile.basic.last_name}}, {{profile.basic.first_name}}</h3>
            </div>
            <div class="panel-body">
              <div class="row">
                <div class="col-md-3 col-lg-3 " align="center">    <img src ="http://0.0.0.0:83/uploads/avatars/ash-downing.jpg" class="avatar img-thumbnail hidden-print inline-block img-circle img-responsive"> </div>
                
               <!-- <div class="col-xs-10 col-sm-10 hidden-md hidden-lg"> <br>
                  <dl>
                    <dt>DEPARTMENT:</dt>
                    <dd>Administrator</dd>
                    <dt>HIRE DATE</dt>
                    <dd>11/12/2013</dd>
                    <dt>DATE OF BIRTH</dt>
                       <dd>11/12/2013</dd>
                    <dt>GENDER</dt>
                    <dd>Male</dd>
                  </dl>
                </div> -->
                <div class=" col-md-9 col-lg-9 "> 
                  <table class="table table-user-information">
                    <tbody>
                      <tr>
                        <td>Department:</td>
                        <td>Programming</td>
                      </tr>
                      <tr>
                        <td>Hire date:</td>
                        <td>{{profile.detail.hire_date}}</td>
                      </tr>
                      <tr>
                        <td>Date of Birth</td>
                        <td>{{profile.detail.hire_date}}</td>
                      </tr>
                   
                         <tr>
                          
                        <tr>
                        <td>Home Address</td>
               <td>123-4567-890(Landline)<br><br>555-4567-890(Mobile)</td>  
                      </tr>
                      <tr>
                        <td>Email</td>
                        <td><a href="mailto:"profile.email>{{profile.basic.email}}</a></td>
                      </tr>
                        <td>Phone Number</td>
                        <td>123-4567-890(Landline)<br><br>555-4567-890(Mobile)
                        </td>
                           
                      </tr>
                     
                    </tbody>
                  </table>
                  
                  <a href="#" class="btn btn-primary">My Sales Performance</a>
                  <a href="#" class="btn btn-primary">Team Sales Performance</a>
                </div>
              </div>
            </div>
                 <div class="panel-footer">
                        <a data-original-title="Broadcast Message" data-toggle="tooltip" type="button" class="btn btn-sm btn-primary"><i class="glyphicon glyphicon-envelope"></i></a>
                        <span class="pull-right">
                            <a href="edit.html" data-original-title="Edit this user" data-toggle="tooltip" type="button" class="btn btn-sm btn-warning"><i class="glyphicon glyphicon-edit"></i></a>
                            <a data-original-title="Remove this user" data-toggle="tooltip" type="button" class="btn btn-sm btn-danger"><i class="glyphicon glyphicon-remove"></i></a>
                        </span>
                    </div>
            
          </div>
        </div>
      </div>
    </div>
    </div>
    </template>
  <script src="//netdna.bootstrapcdn.com/bootstrap/3.1.0/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>


<script>
// import _api from '../utils/assets'
import auth from '../utils/auth'
// var api = axios.create({
//     baseURL: 'http://23.236.60.103',
//     timeout: 3000,
//     headers: {
//       "X-DreamFactory-API-Key": '867b722bfd2e45b460a97815b8b94f58924120bdfef26b56eec32732bb9e40f0',
//       "X-DreamFactory-Session-Token": localStorage.token
//   },
//   })
  export default {
    name: "Profile",
    data: () => ({
      profile: null,
      okShow: false,
      errors: []
    }),
    mounted() {
      if(localStorage.token){

        this.getUserProfile()
      }
    },
     methods: {
       
        getUserProfile() {
	auth.getProfile( _profile => {
				if (!_profile) {
					console.log(_profile)
					this.error = true
				} else {
          console.log(_profile)
          this.profile = _profile
          this.okShow = true
					// router.push({ path: "profile" })

					// this.$router.replace(
					// 	this.$route.query.redirect || "/profile",
					// )
				}
			})
//          api.getProfile(1, function (callback){
// console.log(callback)
// tableData = callback
// this.okShow = true
        //  })




//  _api.getProfile(1).then(({ data }) => {
        //         console.log(data)
        //             this.okShow = true
                   
        //         })
        //         .catch(err => this.isLoading = false)
        
//          api.getProfile(1, function (callback){
// console.log(callback)
// tableData = callback
// okShow = true
//          })
            // this.isLoading = true
            // axios.get(API_URL)
            //     .then(({ data }) => {
            //         var cocktail = data.drinks[0]
            //         this.cocktails.push(cocktail)
            //         cocktail.ingredients = this.createIngrediens(cocktail)
            //         this.isLoading = false
            //         // scroll it to bottom
            //         window.scrollTo(0,document.body.scrollHeight);
            //     })
            //     .catch(err => this.isLoading = false)
        },
     }
// async created() {
    //   try {
    //     const response = await axios.get(
    //       `http://23.236.60.103/api/v2/user/session`
    //     );
    //     this.tableData = response.data;
    //   } catch (e) {
    //     this.errors.push(e);
    //   }
    // }
  };
</script>

<style scoped>
img.avatar {
    width: 150px;
    height:150px;
    border-radius: 50%;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2), 0 1px 1px rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12);
    vertical-align: middle;
}
.panel-heading {
  background: #8fbcbb
}
.panel-footer {
  background: #ffffff
}
</style>
