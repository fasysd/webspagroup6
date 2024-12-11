import React, { useEffect, useState } from "react";
import "../../styles/adminPage/AdminHomePage.css"

const AdminHomePage = () => {


    const informationOfSpa = {
        logo: "/LAVIE-removebg-logo.png",/* tạm thời */
        name: "Tên Spa",
        description: "Spa thư giãn",
        userRating: "4.6/5",
        services: [
            { 
                image: [ "", "",],
                name: "Tắm trắng",
                userRating: "4.6/5",
                description: "Trắng",
            },
            { 
                image: [ "", "",],
                name: "Massage",
                userRating: "4.6/5",
                description: "Thoãi mái",
            }
        ],
        staff: [
            { 
                avatar: "/defaultAvatar.png",
                name: "Trần Thị Hương",
                sex: "Nữ",
                level: "Chuyên nghiệp",
                userRating: "4.6/5",
            },
            { 
                avatar: "/defaultAvatar.png",
                name: "Trần Thị Loan",
                sex: "Nữ",
                level: "Sơ cấp",
                userRating: "4.6/5",
            },
            {
                avatar: "/defaultAvatar.png",
                name: "Đỗ Lan Hương",
                sex: "Nữ",
                level: "Trung bình",
                userRating: "4.6/5",
            },
        ]
    }

    return(
        <div className="Spa__information">
        <header className="Spa_Header">
            <img src={informationOfSpa.logo} className="Spa_Header__logo"/>
            <div className="Spa_Header__information">
                <h1 className="Spa_Header__information__name">{informationOfSpa.name}</h1>
                <h2 className="Spa_Header__information__rating">{informationOfSpa.userRating}</h2>
                <h2 className="Spa_Header__information__description">{informationOfSpa.description}</h2>
            </div>
        </header>
        <div className="Spa__Services">
            <h1>Danh sách dịch vụ</h1>
            <ul>
                {informationOfSpa.services.map( item => {
                    return(
                        <li>
                            <button onClick={()=>{alert( "service information")}}>
                                <h1 className="Spa__Services__name">{item.name}</h1>
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
        <div className="Spa__Staffs">
            <h1>Danh sách nhân viên</h1>
            <ul>
                {informationOfSpa.staff.map( item => {
                    return(
                        <li>
                            <button onClick={()=>{alert( "Staff information")}}>
                                <img src={item.avatar} className="Spa__Staffs__avatar"></img>
                                <h1 className="Spa__Staffs__name">{item.name}</h1>
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
        </div>
    )
}

export default AdminHomePage;