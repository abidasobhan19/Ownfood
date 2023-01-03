import * as React from "react";
import Box from "@mui/material/Box";
import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import "./drawerleft.css";

export default function BasicList() {
  const [open, setOpen] = useState(true);
  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <div class=" align-items-center align-items-sm-start  text-black  bg-white">
        <ul
          class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start bg-white w-100"
          id="menu"
        >
          <li class="w-100">
            <a href="#" class="nav-link align-middle px-0">
              <i class="fs-4 bi-house"></i>{" "}
              <span class="ms-1 d-none d-sm-inline">Home</span>
            </a>
          </li>

          <li className="w-100">
            <a
              href="#submenu3"
              data-bs-toggle="collapse"
              class="nav-link px-0 align-middle collapsed"
            >
              <i class="fs-4 bi-grid"></i>{" "}
              <span class="ms-1 d-none d-sm-inline">ALL FOOD</span>{" "}
            </a>
            <ul
              class="collapse nav flex-column ms-1"
              id="submenu3"
              data-bs-parent="#menu"
            >
              <li class="w-100">
                <a href="#" class="nav-link px-0">
                  {" "}
                  <span class="d-none d-sm-inline">POPULAR KITCHEN</span> 1
                </a>
              </li>
              <li>
                <a href="#" class="nav-link px-1">
                  {" "}
                  <span class="d-none d-sm-inline">INSTANT FOOD</span> 2
                </a>
              </li>
              <li>
                <a href="#" class="nav-link px-0">
                  {" "}
                  <span class="d-none d-sm-inline">PRE-ORDER FOOD</span> 3
                </a>
              </li>
              <li>
                <a href="#" class="nav-link px-0">
                  {" "}
                  <span class="d-none d-sm-inline">WISH ORDER</span> 4
                </a>
              </li>
              <li>
                <a href="#" class="nav-link px-0">
                  {" "}
                  <span class="d-none d-sm-inline">CATERING FOOD</span> 4
                </a>
              </li>
              <li>
                <a href="#" class="nav-link px-0">
                  {" "}
                  <span class="d-none d-sm-inline">
                    FIND US IN THIS STATE
                  </span>{" "}
                  4
                </a>
              </li>
            </ul>
          </li>
          <li className="w-100">
            <a href="#" class="nav-link px-0 align-middle">
              <i class="fs-4 bi-people"></i>{" "}
              <span class="ms-1 d-none d-sm-inline">CATERING</span>{" "}
            </a>
          </li>

          <li className="w-100">
            <a href="#" class="nav-link px-0 align-middle">
              <i class="fs-4 bi-people"></i>{" "}
              <span class="ms-1 d-none d-sm-inline">FAQ</span>{" "}
            </a>
          </li>
          <li className="w-100">
            <a href="#" class="nav-link px-0 align-middle">
              <i class="fs-4 bi-people"></i>{" "}
              <span class="ms-1 d-none d-sm-inline">BLOG</span>{" "}
            </a>
          </li>

          <li className="w-100">
            <a href="#" class="nav-link px-0 align-middle">
              <i class="fs-4 bi-people"></i>{" "}
              <span class="ms-1 d-none d-sm-inline">OPEN YOUR ACCOUNT</span>{" "}
            </a>
          </li>

          <li className="w-100">
            <a href="#" class="nav-link px-0 align-middle">
              <i class="fs-4 bi-people"></i>{" "}
              <span class="ms-1 d-none d-sm-inline">SIGN IN</span>{" "}
            </a>
          </li>
        </ul>
        <hr />
        {/* <div class="dropdown pb-4">
                    <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" class="rounded-circle"/>
                        <span class="d-none d-sm-inline mx-1">loser</span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                        <li><a class="dropdown-item" href="#">New project...</a></li>
                        <li><a class="dropdown-item" href="#">Settings</a></li>
                        <li><a class="dropdown-item" href="#">Profile</a></li>
                        <li>
                            <hr class="dropdown-divider"/>
                        </li>
                        <li><a class="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div> */}
      </div>
    </Box>
  );
}
