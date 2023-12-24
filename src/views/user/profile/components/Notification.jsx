import Card from "../../../../components/UserPanel/card";
import CardMenu from "../../../../components/UserPanel/card";
import Switch from "../../../../components/UserPanel/switch";
import React from "react";

function Notification() {
  return (
    <Card extra={"w-full h-full p-3"}>
      <div className="relative mb-3 flex items-center justify-between pt-1">
        <h4 className="text-navy-700 text-xl font-bold dark:text-white">
          Notifications
        </h4>
        <CardMenu />
      </div>
      <div className="flex flex-col">
        {/* the custom checkbox desing added in src/index.js */}
        <div className="mt-3 flex items-center gap-3">
          <Switch id="switch1" />
          <label
            for="checkbox1"
            className="text-navy-700 text-base font-medium dark:text-white"
          >
            Item comment notifications
          </label>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <Switch id="switch2" />
          <label
            for="checkbox2"
            className="text-navy-700 text-base font-medium dark:text-white"
          >
            Buyer review notifications
          </label>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <Switch id="switch3" />
          <label
            for="checkbox3"
            className="text-navy-700 text-base font-medium dark:text-white"
          >
            Rating reminders notifications
          </label>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <Switch id="switch4" />
          <label
            for="checkbox4"
            className="text-navy-700 text-base font-medium dark:text-white"
          >
            Meetups near you notifications
          </label>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <Switch id="switch5" />
          <label
            for="checkbox5"
            className="text-navy-700 text-base font-medium dark:text-white"
          >
            Company news notifications
          </label>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <Switch id="switch6" />
          <label
            for="checkbox6"
            className="text-navy-700 text-base font-medium dark:text-white"
          >
            New launches and projects
          </label>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <Switch id="switch7" />
          <label
            for="checkbox7"
            className="text-navy-700 text-base font-medium dark:text-white"
          >
            Monthly product changes
          </label>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <Switch id="switch8" />
          <label
            for="checkbox8"
            className="text-navy-700 text-base font-medium dark:text-white"
          >
            Subscribe to newsletter
          </label>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <Switch id="switch8" />
          <label
            for="checkbox8"
            className="text-navy-700 text-base font-medium dark:text-white"
          >
            Email me when someone follows me
          </label>
        </div>
      </div>
    </Card>
  );
}

export default Notification;
