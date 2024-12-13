import React, { useEffect, useState } from "react";
import "../../styles/clientPage/ClientSchedulePage.css"

const ClientSchedulePage = () => {
    const defaultSchedule = [ //cần sắp xếp thời gian trước
        {
            
            id: 1,
            WaitingForConfirmation: true,
            name: {
                nameService: "Dịch vụ không tên",
                nameSpa: "Spa không tên",
            },
            time: '12:45 2024-12-12',
            address: "Sao Hỏa",
            serviceStaff: [ "Hương", "Lan"],
        },
        {
            
            id: 2,
            WaitingForConfirmation: false,
            name: {
                nameService: "Dịch vụ không tên",
                nameSpa: "Spa không tên",
            },
            time: '15:45 2023-2-12',
            address: "Sao Hỏa",
            serviceStaff: [ "Hương", "Lan"],
        },
        {
            id: 3,
            WaitingForConfirmation: true,
            name: {
                nameService: "Dịch vụ không tên",
                nameSpa: "Spa không tên",
            },
            time: '19:45 2023-2-12',
            address: "Sao Hỏa",
            serviceStaff: [ "Hương", "Lan"],
        },
        {
            id: 4,
            WaitingForConfirmation: false,
            name: {
                nameService: "Dịch vụ không tên",
                nameSpa: "Spa không tên",
            },
            time: '17:25 2023-2-15',
            address: "Sao Hỏa",
            serviceStaff: [ "Hương", "Lan"],
        },
        {
            id: 5,
            WaitingForConfirmation: false,
            name: {
                nameService: "Dịch vụ không tên",
                nameSpa: "Spa không tên",
            },
            time: '12:45 2023-2-19',
            address: "Sao Hỏa",
            serviceStaff: [ "Hương", "Lan"],
        },
        {
            id: 6,
            WaitingForConfirmation: false,
            name: {
                nameService: "Dịch vụ không tên",
                nameSpa: "Spa không tên",
            },
            time: '12:45 2023-2-19',
            address: "Sao Hỏa",
            serviceStaff: [ "Hương", "Lan"],
        },
        {
            id: 7,
            WaitingForConfirmation: false,
            name: {
                nameService: "Dịch vụ không tên",
                nameSpa: "Spa không tên",
            },
            time: '02:05 2023-2-12',
            address: "Sao Hỏa",
            serviceStaff: [ "Hương", "Lan"],
        },
    ]

    const _Schedule__Option = () => {
        return(
            <>
                thanh tùy chọn
            </>
        )
    }
    const _Schedule__List = () => {
        const [_lastChoiceBox, set_lastChoiceBox] = useState(-1);

        let isToday = false;
        const _Schedule__List_headerTime = (date) => {
            if( isToday) {
                isToday = false;
                return(<>
                    <label className="_Schedule__List_headerTime">Hôm nay: {date.toDateString()}</label>
                </>)
            }
            return(<>
                <label className="_Schedule__List_headerTime">{date.toDateString()}</label>
            </>)
        };
        return(
            <>
            {Schedule.map( (item, index) => {
                    let date = new Date(item.time);
                    let _useHeader = false;
                    if( index !== 0)
                    {
                        let frontItem = new Date(Schedule.at(index - 1).time);
                        if( date.toDateString() != frontItem.toDateString()) {
                            _useHeader = true;
                        }
                    } else {
                        if( new Date().toDateString() == date.toDateString()) isToday = true;
                        _useHeader = true
                    }

                    const _Schedule__List__item__dropdownContent = (item, selectedByUser = true) => {
                        if( selectedByUser) return(
                            <div className="Schedule__List__item__dropdownContent--on">
                                {item.serviceStaff}
                            </div>
                        )
                        else{
                            return(
                                <div className="Schedule__List__item__dropdownContent--off">
                                    {item.serviceStaff}
                                </div>
                            )
                        }
                    }

                    const _settingScheduleForm = ( Schedule) =>{
                        return(
                            <>
                            <div className="_settingScheduleForm">

                            </div>
                            </>
                        )
                    }

                    return(
                        <>
                            {(_useHeader ? _Schedule__List_headerTime(date) : <></>)}
                            <label className="Schedule__List__item--normalStatus">
                                    <div className="Schedule__List__item__mainContent" 
                                    onDoubleClick={ () => ( _lastChoiceBox === index ? set_lastChoiceBox(-1) : set_lastChoiceBox(index))}
                                    >
                                        <div className="Schedule__List__item__timeContainer">
                                            
                                            <div className="Schedule__List__item__timeContainer__hour">{
                                                (date.getHours().toString().length === 1 ? '0' + date.getHours().toString() : date.getHours()) //+++:Chuân hóa thời gian
                                                + ':' + 
                                                (date.getMinutes().toString().length === 1 ? '0' + date.getMinutes().toString() : date.getMinutes()) //+++
                                            }</div>
                                            <div className="Schedule__List__item__dateContainer__hour">{
                                                (date.getDate().toString().length === 1 ? '0' + date.getDate().toString() : date.getDate()) //+++
                                                + '-' + 
                                                (((date.getMonth() + 1).toString().length === 1 ? '0' + (date.getMonth() + 1).toString() : (date.getMonth() + 1))) //+++
                                                + '-' + 
                                                date.getFullYear()
                                            }</div>
                                        </div>
                                        <div className="Schedule__List__item__informationContainer">
                                            <div className="Schedule__List__name">{item.name.nameSpa}</div>
                                            <div className="Schedule__List__address">Địa chỉ: {item.address}</div>
                                        </div>
                                        <div className="Schedule__List__item__settingButton">
                                            <img src="/settings.png" 
                                            onClick={()=>alert("setting form")}
                                            ></img>
                                        </div>
                                    </div>
                            {_Schedule__List__item__dropdownContent(item, _lastChoiceBox === index)}
                            </label>
                        </>
                    )
                })}
            </>
        )
    }

    const [Schedule, setSchedule] = useState(defaultSchedule);
    return(
        <>
            <div className="Schedule">
                <div className="Schedule__Option">
                    {_Schedule__Option()}
                </div>
                <div className="Schedule__List">
                    {_Schedule__List()}
                </div>
            </div>
        </>
    )
}

export default ClientSchedulePage;