import React, { useState } from "react";
import {
  MDBCol,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
  MDBTabs,
  MDBTabsContent,
  MDBTabsPane,
  MDBTabsItem,
  MDBTabsLink,
} from "mdb-react-ui-kit";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "../sections/partials/SectionHeader";
import UserProfile from "./UserProfile";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

const data = [
  {
    id: 4051,
    name: "Manoja",
    email: "manoj@gmail.com",
    password: "Test@123",
    about: null,
    token: "7f471974-ae46-4ac0-a882-1980c300c4d6",
    country: null,
    location: null,
    lng: 0,
    lat: 0,
    dob: null,
    gender: 0,
    userType: 1,
    userStatus: 1,
    profilePicture: "Images/9b291404-bc2e-4806-88c5-08d29e65a5ad.png",
    coverPicture: "Images/44af97d9-b8c9-4ec1-a099-010671db25b7.png",
    enablefollowme: false,
    sendmenotifications: false,
    sendTextmessages: false,
    enabletagging: false,
    createdAt: "2020-01-01T11:13:27.1107739",
    updatedAt: "2020-01-02T09:16:49.284864",
    livelng: 77.389849,
    livelat: 28.6282231,
    liveLocation:
      "Unnamed Road, Chhijarsi, Sector 63, Noida, Uttar Pradesh 201307, India",
    creditBalance: 127,
    myCash: 0,
  },
  {
    id: 4050,
    name: "Mat kate",
    email: "p1@gmail.com",
    password: "Test@123",
    about: null,
    token: "e269eeef-1de1-4438-885a-e30a9ad26106",
    country: null,
    location: null,
    lng: 0,
    lat: 0,
    dob: null,
    gender: 0,
    userType: 1,
    userStatus: 1,
    profilePicture: null,
    coverPicture: null,
    enablefollowme: false,
    sendmenotifications: false,
    sendTextmessages: false,
    enabletagging: false,
    createdAt: "2020-01-01T07:39:34.1618239",
    updatedAt: "2020-01-01T07:39:34.161824",
    livelng: 0,
    livelat: 0,
    liveLocation: null,
    creditBalance: 0,
    myCash: 0,
  },
  {
    id: 3050,
    name: "Knowles Spring",
    email: "Knowles.bing@adequateinfosoft.com",
    password: "286956",
    about: null,
    token: "562c2fb5-6799-4b51-8733-a60564c96adc",
    country: null,
    location: null,
    lng: 0,
    lat: 0,
    dob: null,
    gender: 0,
    userType: 1,
    userStatus: 1,
    profilePicture: null,
    coverPicture: null,
    enablefollowme: false,
    sendmenotifications: false,
    sendTextmessages: false,
    enabletagging: false,
    createdAt: "2019-12-27T10:16:05.6578091",
    updatedAt: "2019-12-27T10:22:30.8416992",
    livelng: 77.389849,
    livelat: 28.6282231,
    liveLocation:
      "Unnamed Road, Chhijarsi, Sector 63, Noida, Uttar Pradesh 201307, India",
    creditBalance: 0,
    myCash: 0,
  },
  {
    id: 3049,
    name: "Sophia",
    email: "sophia@gmail.com",
    password: "Test@123",
    about: "Yo",
    token: "f3bc9393-ad13-41a2-a69b-b607a42d829f",
    country: null,
    location: "18302 Lorance Trail, Little Rock, AR 72206, USA",
    lng: 0,
    lat: 0,
    dob: "2019-12-19T11:54:19",
    gender: 2,
    userType: 1,
    userStatus: 1,
    profilePicture: null,
    coverPicture: null,
    enablefollowme: false,
    sendmenotifications: false,
    sendTextmessages: false,
    enabletagging: false,
    createdAt: "2019-12-26T07:36:22.3481221",
    updatedAt: "2019-12-26T07:36:22.3481222",
    livelng: 77.3674236,
    livelat: 28.6260665,
    liveLocation:
      "35, Block A, Industrial Area, Sector 62, Noida, Uttar Pradesh 201309, India",
    creditBalance: 36,
    myCash: 0,
  },
];

const UserList = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const [user, setUser] = useState(null);
  const redirectToProfile = (value) => {
    setUser(value);
  };

  const outerClasses = classNames(
    "testimonial section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const sectionHeader = {
    title: "Users List",
    paragraph: "All the users that currently are with us!",
  };

  return user ? (
    <UserProfile user={user && user} />
  ) : (
    <>
      <Header navPosition="right" className="reveal-from-bottom" />
      <main className="site-content">
        <section {...props} className={outerClasses}>
          <div
            className="container"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <SectionHeader data={sectionHeader} className="center-content" />
            <MDBListGroup style={{ minWidth: "22rem" }} light>
              <MDBListGroupItem
                className="d-flex justify-content-between align-items-center"
                style={{ padding: "2rem 1rem" }}
                onClick={() => redirectToProfile(data[0])}
              >
                <div className="d-flex align-items-center">
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                    alt=""
                    style={{ width: "45px", height: "45px" }}
                    className="rounded-circle"
                  />
                  <div className="ms-3">
                    <p className="fw-bold mb-1">{data[0].name}</p>
                    <p className="text-muted mb-0">{data[0].email}</p>
                  </div>
                </div>
              </MDBListGroupItem>
              <MDBListGroupItem
                className="d-flex justify-content-between align-items-center"
                style={{ padding: "2rem 1rem" }}
                onClick={() => redirectToProfile(data[1])}
              >
                <div className="d-flex align-items-center">
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                    alt=""
                    style={{ width: "45px", height: "45px" }}
                    className="rounded-circle"
                  />
                  <div className="ms-3">
                    <p className="fw-bold mb-1">{data[1].name}</p>
                    <p className="text-muted mb-0">{data[1].name}</p>
                  </div>
                </div>
              </MDBListGroupItem>
              <MDBListGroupItem
                className="d-flex justify-content-between align-items-center"
                style={{ padding: "2rem 1rem" }}
                onClick={() => redirectToProfile(data[2])}
              >
                <div className="d-flex align-items-center">
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                    alt=""
                    style={{ width: "45px", height: "45px" }}
                    className="rounded-circle"
                  />
                  <div className="ms-3">
                    <p className="fw-bold mb-1">{data[2].name}</p>
                    <p className="text-muted mb-0">{data[2].name}</p>
                  </div>
                </div>
              </MDBListGroupItem>
            </MDBListGroup>
          </div>
        </section>{" "}
      </main>

      <Footer />
    </>
  );
};

UserList.propTypes = propTypes;
UserList.defaultProps = defaultProps;

export default UserList;
