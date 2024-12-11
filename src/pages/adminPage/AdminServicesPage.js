import React, { useEffect, useState } from "react";
import "../../styles/adminPage/AdminServicesPage.css"

const adService = () => {
    const listService = []
    //dữ liệu mẫu
    listService.push( 
        {id: "1", name: "Tắm trắng", description : "Trắng bật tông 314.17%"},
    )
    listService.push(
        {id: "2", name: "Tắm đen", description : "Không có j"},
    )
    listService.push(
        {id: "3", name: "Massage thân", description : "Không có j"},
    )
    listService.push(
        {id: "4", name: "Massage đầu", description : "Không có j"},
    )
    listService.push(
        {id: "5", name: "Massage chân", description : "Không có j"},
    )

    return listService;
};

const AdminServicesPage = () => {
    const [Service, setServices] = useState(adService);
    const [newa, setnewa] = useState('');

    return(
        <>
            <ul className="services-container">
                {Service.map( item => {
                    return(
                        <li>
                            <div className="idServices">{item.id}</div>
                            <div className="nameServices">{item.name}</div>
                            <div className="descriptionServices">{item.description}</div>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default AdminServicesPage;