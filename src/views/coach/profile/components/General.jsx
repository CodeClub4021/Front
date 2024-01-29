import Card from "../../../../components/ManagerPanel/card/";
import EditProfileCard from "../../../../components/CoachPanel/Card/EditProfileCard";
import React, { Component } from "react";
import axios from "axios";

class General extends Component {
  state = { 
    coach: []
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
      this.setState({coach: response.data.coach})
    }
    catch(err){
      console.log('err')
      console.error(err);
    }
  }
  render() { 
    return (
      <Card extra={"w-full h-full p-3"}>
      {/* Edit Profile */}
      <div className="ml-auto">
        <EditProfileCard />
      </div>
      {/* Header */}
      <div className="mt-2 mb-5 w-full">
        <h4 className="px-2 text-2xl font-bold text-gray-900 dark:text-white">
          General Information
        </h4>
      </div>
      {/* Cards */}
      <div className="grid grid-cols-3 gap-4 px-2">

      <div className="flex flex-col justify-center rounded-2xl bg-gray-900 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
        <p className="text-base text-gray-500">Sex</p>
        <p className="text-lg font-medium text-white dark:text-white">
          {/* Male */}
          {this.state.coach.sex}
        </p>
      </div>

      <div className="flex flex-col justify-center rounded-2xl bg-gray-900 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
        <p className="text-base text-gray-500">Birthday</p>
        <p className="text-lg font-medium text-white dark:text-white">
          {/* 20 July 1966 */}
          {this.state.coach.birthday}
        </p>
      </div>

      <div className="flex flex-col items-start justify-center rounded-2xl bg-gray-900 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
        <p className="text-base text-gray-500">Education</p>
        <p className="text-lg font-medium text-white dark:text-white">
          {/* Stanford University */}
          {this.state.coach.education}
        </p>
      </div>

      <div className="flex flex-col justify-center rounded-2xl bg-gray-900 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
        <p className="text-base text-gray-500">Languages</p>
        <p className="text-lg font-medium text-white dark:text-white">
          {/* English - Spanish - Italian */}
          {this.state.coach.language}
        </p>
      </div>

      <div className="flex flex-col items-start justify-center rounded-2xl bg-gray-900 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
        <p className="text-base text-gray-500">Location</p>
        <p className="text-lg font-medium text-white dark:text-white">
        {/* USA - LA */}
        {this.state.coach.location}
        </p>
      </div>

      <div className="flex flex-col justify-center rounded-2xl bg-gray-900 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
        <p className="text-base text-gray-500">Work Experience</p>
        <p className="text-lg font-medium text-white dark:text-white">
          {/* 10 years */}
          {this.state.coach.work_experience}
        </p>
      </div>

            </div>

      <div className="mt-5 mb-8 w-full">
      <h4 className="px-2 text-2xl font-bold text-gray-900 dark:text-white">
      More Description
      </h4>
      <p className="ml-5 mt-2 px-2 text-xl text-gray-900">
      {/* Michael Gerard Tyson is an American former 
      professional boxer who competed from 1985 to 2005..... */}
      {this.state.coach.more_description}

      </p>
      </div>
    </Card>
    );
  }
}
export default General;