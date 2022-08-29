import React from "react";
import './Tables.css'

const Tables = ({props , title}) =>{
    return(
        <div>
            <h3>{title}</h3>
            <table class="styled-table">
                <thead>
                    <tr>
                        <th>Keys</th>
                        <th>Values</th>
                    </tr>
                </thead>
           { Object.entries(props).map(([key, value]) => (
                <tbody>
                    <tr className="active-row">
                        <td>{key}</td>
                        <td>{value}</td>
                    </tr>
                </tbody>
            ))};
                
                {/* <tbody>
                    <tr>
                        <td>Dom</td>
                        <td>6000</td>
                    </tr>
                    <tr class="active-row">
                        <td>Melissa</td>
                        <td>5150</td>
                    </tr>
                </tbody> */}
            </table>
        </div>
    );
};

export default Tables;