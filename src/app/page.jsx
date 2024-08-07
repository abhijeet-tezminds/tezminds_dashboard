'use client'

import { profileImgUrl } from "../constants";
import { Avatar, Button, Chip, Divider, LinearProgress, Typography } from "@mui/material";
import { useState } from "react";

export const BoxHeader = ({ boxName }) => {
  return <div style={{
    display: "flex", justifyContent: "space-between",
    borderBottom: "1px solid #F0F1F2",
    paddingBottom: "0.5rem"
  }}>
    <Typography style={{
      fontSize: "16px", fontWeight: "550"
    }}>{boxName}</Typography>
    <Typography color={"#0064D9"} style={{
      fontSize: "13px", fontWeight: "400",
      cursor: "pointer"
    }}>View All</Typography>
  </div>
}

export const upcomingEvents = [
  {
    day: "10",
    month: "Dec",
    eventName: "John pup birthday - Team Member",
    eventType: "Happy Birthday",
    color: "#DFF3D5"
  },
  {
    day: "10",
    month: "Dec",
    eventName: "You have an announcement - Ipsu...",
    eventType: "Announcement",
    color: "#BCDEFF",
  },
  {
    day: "10",
    month: "Dec",
    eventName: "John pup birthday - Team Member",
    eventType: "Holiday",
    color: "#F3D5D5",
  },
];

const totalTasks = 23;

export const taskStatusLineBar = [
  {
    taskStatusName: "Completed",
    taskStatusValue: 20,
    color: "primary"
  },
  {
    taskStatusName: "Incomplete",
    taskStatusValue: 3,
    color: "error"
  },
  {
    taskStatusName: "Today tasks",
    taskStatusValue: 6,
    color: "success"
  },

]

export default function Home() {
  const [isPunchIn, setIsPunchIn] = useState(false);

  const handlePunchIn = () => {
    setIsPunchIn(prev => !prev);
  };

  return (
    <main className="flex w-full gap-4 py-4">
      {/* left side */}
      <div className="w-2/3">
        <div className="flex items-center gap-4 bg-[#0064D9] text-white rounded-2xl p-4">
          <Avatar sx={{ width: 78, height: 78 }} alt="Profile pic" src={profileImgUrl} />
          <div>
            <Typography className="text-3xl">
              Good Morning, Danny!
            </Typography>
            <Typography variant="caption" display="block">
              Monday, 05 Dec 2023
            </Typography>
          </div>
        </div>
        {/* Timesheet */}
        <div style={{
          padding: "1rem",
          background: "#fff",
          marginTop: "1rem",
          borderRadius: "8px",
        }}>
          <BoxHeader boxName={"Timesheet"} />
          <div style={{
            textAlign: "center",
            background: "#F0F1F2",
            // height: "200px",
            padding: "1.5rem",
            borderRadius: "8px",
            margin: "auto"
          }}>
            <div>
              <Typography style={{
                fontSize: "16px", fontWeight: "550"
              }}>
                Punch in at
              </Typography>
              <Typography style={{
                fontSize: "16px", fontWeight: "400"
              }}>
                {!isPunchIn ? new Date().toDateString() : `${new Date().toDateString()}, ${new Date().toLocaleTimeString()}`}
              </Typography>
              <div style={{
                border: "3px solid #D9D9D9",
                width: "89px",
                height: "89px",
                borderRadius: "50%",
                background: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "0.5rem auto",
              }}>
                <div>
                  <Typography style={{
                    fontSize: "16px", fontWeight: "550"
                  }}>
                    0
                  </Typography>
                  <Typography style={{
                    fontSize: "16px", fontWeight: "400"
                  }}>
                    HRS
                  </Typography>
                </div>
              </div>
              <Button variant="contained"
                style={{ background: isPunchIn ? "#19C27B" : "" }}
                onClick={handlePunchIn}
              >
                {isPunchIn ? "Punch Out" : "Punch In"}
              </Button>
            </div>
          </div>
        </div>
        {/* Your Leave */}
        <div style={{
          marginTop: "1rem",
          padding: "1rem",
          textAlign: "center",
          background: "#fff",
          borderRadius: "8px",
        }}>
          <BoxHeader boxName={"Your Leave"} />
          <div style={{
            display: "flex",
            justifyContent: "space-around",
            padding: "1rem",
          }}>
            <div>
              <Typography style={{
                fontSize: "16px", fontWeight: "550"
              }}>
                Taken
              </Typography>
              <Typography style={{
                fontSize: "16px", fontWeight: "400"
              }}>
                3
              </Typography>
            </div>
            <div>
              <Typography style={{
                fontSize: "16px", fontWeight: "550"
              }}>
                Balance
              </Typography>
              <Typography style={{
                fontSize: "16px", fontWeight: "400"
              }}>
                20
              </Typography>
            </div>
          </div>
          <Button variant="contained">Apply Leave</Button>
        </div>
      </div>
      {/* right side */}
      <div className="w-1/3">
        {/* Upcoming Events */}
        <div style={{
          padding: "1rem",
          background: "#fff",
          borderRadius: "8px",
        }}>
          <BoxHeader boxName={"Upcoming Events"} />
          <div>
            {
              upcomingEvents.map((event, i) => (
                <div key={i} style={{
                  display: "flex",
                  gap: "0.5rem",
                  alignItems: "center",
                  padding: "0.5rem"
                }}>
                  <div style={{ textAlign: "center" }}>
                    <Typography style={{
                      fontSize: "16px", fontWeight: "700"
                    }}>
                      {event.day}
                    </Typography>
                    <Typography style={{
                      fontSize: "16px", fontWeight: "400"
                    }}>
                      {event.month}
                    </Typography>
                  </div>
                  <Divider orientation="vertical" flexItem variant="middle" style={{ border: "1px solid #F0F1F2" }} />
                  <div>
                    <Typography style={{
                      fontSize: "16px", fontWeight: "500",
                    }}>
                      {event.eventName}
                    </Typography>
                    <Chip label={event.eventType} size="small" style={{ background: event.color }} />
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        {/* Tasks */}
        <div style={{
          padding: "1rem",
          background: "#fff",
          marginTop: "1rem",
          borderRadius: "8px",
        }}>
          <BoxHeader boxName={"Tasks"} />
          <div style={{
            border: "3px solid #D9D9D9",
            width: "89px",
            height: "89px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
            marginTop: "1rem",
          }}>
            <div style={{
              textAlign: "center",
            }}>
              <Typography style={{
                fontSize: "20px", fontWeight: "600"
              }}>
                {totalTasks}
              </Typography>
              <Typography style={{
                fontSize: "16px", fontWeight: "400"
              }}>
                Total
              </Typography>
            </div>
          </div>
          <div>
            {
              taskStatusLineBar.map((item, i) => (
                <div key={i} style={{
                  margin: "1.5rem 0",
                }}>
                  <Typography>
                    {item.taskStatusName}
                  </Typography>
                  <LinearProgress variant="determinate" value={item.taskStatusValue / totalTasks * 100} color={item.color}
                    style={{
                      background: "#D9D9D9",
                      borderRadius: "20px",
                      height: "5px",
                    }} />
                  <Typography style={{
                    float: "right",
                  }}>
                    {item.taskStatusValue}
                  </Typography>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </main>
  );
}