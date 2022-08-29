import React from "react";
import './Tables.css'


const IncomeTaxTable = ({props , title}) =>{


    return(
        <div>
            <h3>{title}</h3>
            <table class="styled-table">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Keys</th>
                        <th></th>
                        <th>Values</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="active-row">
                        <td>24</td>
                        <td>Salaries' (annex Schedule 24A) </td>
                        <td>S.21</td>
                        <td>{props[0]}</td>
                    </tr>
                </tbody>
                {/* <tbody>
                    <tr className="active-row">
                        <td>25</td>
                        <td>Interest on securities </td>
                        <td>S.22</td>
                        <td>{props.interest}</td>
                    </tr>
                </tbody> */}
                <tbody>
                    <tr className="active-row">
                        <td>25</td>
                        <td>Income from house property (annex Schedule 24B) </td>
                        <td>S.24</td>
                        <td>{props[1]}</td>
                    </tr>
                </tbody>
                {/* <tbody>
                    <tr className="active-row">
                        <td>27</td>
                        <td>Agricultural income </td>
                        <td>S.26</td>
                        <td>{props.agricultureIncome}</td>
                    </tr>
                </tbody> */}
                <tbody>
                    <tr className="active-row">
                        <td>26</td>
                        <td>Income from ivestments</td>
                        <td>S.28</td>
                        <td>{props[2]}</td>
                    </tr>
                </tbody>

                <tbody>
                    <tr className="active-row">
                        <td>27</td>
                        <td>Income from business or profession (annex Schedule 24C)</td>
                        <td>S.28</td>
                        <td>{props[3]}</td>
                    </tr>
                </tbody>


                {/* <tbody>
                    <tr className="active-row">
                        <td>29</td>
                        <td>Capital gains </td>
                        <td>S.31</td>
                        <td>{props.capitalGain}</td>
                    </tr>
                </tbody> */}
                {/* <tbody>
                    <tr className="active-row">
                        <td>30</td>
                        <td>Income from other sources </td>
                        <td>S.33</td>
                        <td>{props.otherIncome}</td>
                    </tr>
                </tbody> */}
                {/* <tbody>
                    <tr className="active-row">
                        <td>31</td>
                        <td>Share of income from firm or AOP </td>
                        <td></td>
                        <td>{props.firmShare}</td>
                    </tr>
                </tbody> */}
                {/* <tbody>
                    <tr className="active-row">
                        <td>32</td>
                        <td>Income of minor or spouse under section 43(4) </td>
                        <td>S.43</td>
                        <td>{props.minorIncome}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr className="active-row">
                        <td>33</td>
                        <td>Foreign income </td>
                        <td></td>
                        <td>{props.foreignIncome}</td>
                    </tr>
                </tbody> */}
                <tbody>
                    <tr className="active-row">
                        <td>28</td>
                        <td>Total income (aggregate of 24 to 27) </td>
                        <td></td>
                        <td>{props[4]}</td>
                    </tr>
                </tbody>
                
                
               
            </table>
        </div>
    );
};

export default IncomeTaxTable;