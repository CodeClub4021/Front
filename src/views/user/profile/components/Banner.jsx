import React, { Component } from "react";
import axios from "axios";
import avatar from "../../../../assets/img/avatars/default.jpg";
import Card from "../../../../components/UserPanel/card";
import ShowStars from "../../../..//components/UserPanel/ShowStars/ShowStars";
import Upload from "./Upload";
class Banner extends Component {
  state = { 
    customer: [],
    user:[]
   }
   async componentDidMount(){
    try{
      const response  = await axios.get('https://gymlist.liara.run/user/',
      {
        headers: {
          Authorization: 'Token ' + localStorage.getItem('token')
        }
      });
      console.log(response);
      this.setState({customer: response.data.customer})
      this.setState({user: response.data.user})
    }
    catch(err){
      console.log('err')
      console.error(err);
    }

  } 
  render() { 
    return (<Card extra={"items-center w-full h-full p-[16px] bg-cover"}>
    <ul className="mb-2 grid grid-cols-12">
      {/* Background and profile */}
      <li className="col-start-0 col-span-4 justify-center">
        <div className=" relative  mt-1 flex h-40 w-full justify-center rounded-2xl bg-cover pr-8">
          <div className="dark:!border-navy-700 absolute -bottom-3 flex h-[170px] w-[170px] items-center justify-center rounded-full border-[4px]  border-gray-800 bg-gray-800 ">
            <img className="h-full w-full rounded-full" src={avatar} alt="" />
          </div>
        </div>
        {/* Name */}
        <div className="mt-5 justify-items-center md:ml-24">
          <h4 className="text-3xl font-bold text-gray-800 dark:text-white">
            {/* Mike Tyson */}
            {this.state.customer.full_name}
          </h4>
        </div>
      </li>

      <li className="col-span-7 col-start-5">
        {/* Name and additional components */}
        <div className=" mt-2 flex flex-col md:flex-row md:items-start">
          {/* Additional components at the right */}
          <div className="mt-2 grid grid-cols-2 gap-8 md:mt-0">
            {/* Component 1 */}
            <div className="shadow-3xl shadow-shadow-500 dark:!bg-navy-700 flex flex-col rounded-2xl bg-gray-800 bg-clip-border px-4 py-6 pr-56 text-left dark:shadow-none">
              <p className="text-base text-gray-600">Username</p>
              <p className="text-lg font-medium text-white dark:text-white">
                {/* mike_tyson */}
                {this.state.user.username}
              </p>
            </div>

            {/* Component 2 */}
            <div className="shadow-3xl shadow-shadow-500 dark:!bg-navy-700 flex flex-col justify-center rounded-2xl bg-gray-800 bg-clip-border px-4 py-6 pr-56 dark:shadow-none">
              <p className="text-base text-gray-600">Email</p>
              <p className="text-lg font-medium text-white dark:text-white">
                {/* mike@example.com */}
              {this.state.user.email}
              </p>
            </div>

            {/* Component 3 */}
            <div className="shadow-3xl shadow-shadow-500 dark:!bg-navy-700 flex flex-col justify-center rounded-2xl bg-gray-800 bg-clip-border px-4 py-6 dark:shadow-none">
              <p className="text-base text-gray-600">height (cm)</p>
              <p className="text-lg font-medium text-white dark:text-white">
                {/* 175 cm */}            
                {this.state.customer.height}
              </p>
            </div>

            {/* Component 4 */}
            <div className="shadow-3xl shadow-shadow-500 dark:!bg-navy-700 flex flex-col justify-center rounded-2xl bg-gray-800 bg-clip-border px-4 py-6  dark:shadow-none">
              <p className="text-base text-gray-600">weight (kg)</p>
              <p className="text-lg font-medium text-white dark:text-white">
                {this.state.customer.weight}
                {/* 70 kg */}
              </p>
            </div>
          </div>
        </div>

        {/* ... (unchanged) */}
      </li>
    </ul>
  </Card>);
  }
}
 
export default Banner;
