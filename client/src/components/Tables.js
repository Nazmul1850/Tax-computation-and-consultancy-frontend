import React from "react";
import './Tables.css'

const Tables = ({props , title}) =>{


    return(
        <div>
            <h3>{title}</h3>
            <table class="styled-table">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Keys</th>
                        <th>Values</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="active-row">
                        <td>1</td>
                        <td>Assesment Year</td>
                        <td>{props.assessmentYear}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr className="active-row">
                        <td>2</td>
                        <td>Return Submitted under section 822B?</td>
                        <td>Yes</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr className="active-row">
                        <td>3</td>
                        <td>Name of the Assesse</td>
                        <td>{props.name}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr className="active-row">
                        <td>4</td>
                        <td>Gender</td>
                        <td>{props.gender}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr className="active-row">
                        <td>5</td>
                        <td>TIN</td>
                        <td>{props.tin}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr className="active-row">
                        <td>6</td>
                        <td>Old TIN</td>
                        <td></td>
                    </tr>
                </tbody>
                <tbody>
                    <tr className="active-row">
                        <td>7</td>
                        <td>Circle</td>
                        <td>{props.circle}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr className="active-row">
                        <td>8</td>
                        <td>Zone</td>
                        <td>{props.zone}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr className="active-row">
                        <td>9</td>
                        <td>Resident Status</td>
                        <td>{props.resident}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr className="active-row">
                        <td>10</td>
                        <td>Citizen Type</td>
                        <td>{props.citizen_type}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr className="active-row">
                        <td>11</td>
                        <td>Date of Birth</td>
                        <td>{props.birthdate}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr className="active-row">
                        <td>12</td>
                        <td>Income Year</td>
                        <td>{props.income_year}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr className="active-row">
                        <td>13</td>
                        <td>If emplyed, emplyers name</td>
                        <td></td>
                    </tr>
                </tbody>
                <tbody>
                    <tr className="active-row">
                        <td>14</td>
                        <td>Spouse Name</td>
                        <td></td>
                    </tr>
                </tbody>
                <tbody>
                    <tr className="active-row">
                        <td>15</td>
                        <td>Spouse TIN</td>
                        <td></td>
                    </tr>
                </tbody>
                <tbody>
                    <tr className="active-row">
                        <td>16</td>
                        <td>Father's Name</td>
                        <td></td>
                    </tr>
                </tbody>
                <tbody>
                    <tr className="active-row">
                        <td>17</td>
                        <td>Mother's Name</td>
                        <td></td>
                    </tr>
                </tbody> 
                <tbody>
                    <tr className="active-row">
                        <td>18</td>
                        <td>Present Address</td>
                        <td>{props.address}</td>
                    </tr>
                </tbody> 
                <tbody>
                    <tr className="active-row">
                        <td>19</td>
                        <td>Permanent Address</td>
                        <td></td>
                    </tr>
                </tbody> 
                <tbody>
                    <tr className="active-row">
                        <td>20</td>
                        <td>Contact Telephone</td>
                        <td>{props.phone}</td>
                    </tr>
                </tbody> 
                <tbody>
                    <tr className="active-row">
                        <td>21</td>
                        <td>Email</td>
                        <td>{props.email}</td>
                    </tr>
                </tbody> 
                <tbody>
                    <tr className="active-row">
                        <td>22</td>
                        <td>National Identification Number</td>
                        <td>{props.nid}</td>
                    </tr>
                </tbody> 
                <tbody>
                    <tr className="active-row">
                        <td>23</td>
                        <td>Business Identification Number</td>
                        <td></td>
                    </tr>
                </tbody> 
                
               
            </table>
        </div>
    );
};

export default Tables;