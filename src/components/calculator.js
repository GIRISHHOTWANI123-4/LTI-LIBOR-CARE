import React, {useState} from "react";
import Header from "../shared/header";
import ReactHtmlParser, {processNodes, convertNodeToElement, htmlparser2} from 'react-html-parser';
import DataTable, {createTheme} from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import Typography from "@material-ui/core/Typography";



{/*<script src="https://unpkg.com/html-react-parser@latest/dist/html-react-parser.min.js">*/}
{/*</script>*/}

{/*   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">*/}
{/*    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"/>*/}
{/*    <script language="JavaScript"/>*/}
{/*    </link>*/}
createTheme('solarized', {
    text: {
        primary: '#000f89',
        secondary: 'white',
    },
    background: {
        default: 'white',
    },
    context: {
        background: '#cb4b16',
        text: '#FFFFFF',
    },
    divider: {
        default: '#073642',
    },
    action: {
        button: 'rgba(0,0,0,.54)',
        hover: 'rgba(0,0,0,.08)',
        disabled: 'rgba(0,0,0,.12)',
    },
});

const Calculator = () => {

    const[arr,setArr]=useState([]);

    const columns=[
         {
           name:"Annualized Compunded ",
           selector:"AnnualizedCompoundedAllInRate",
           sortable:"true",
         },
         {
             name:"Base Rate",
             selector:"BaseRate",
             sortable:"true",
         },
         {
             name:"Day Count",
             selector:"DayCount",
             sortable:"true",
         },
         {
             name:"Earned Interest",
             selector:"EarnedInterest",
             sortable:"true",
         },
         {
             name:"Earned Insterest From Base Rate",
             selector:"EarnedInterestFromBaseRate",
             sortable:"true",
         },
         {
             name:"Earned Interest From Spread",
             selector:"EarnedInterestFromSpread",
             sortable:"true",
         },
         {
             name:"Earned Interest Running Balance",
             selector:"EarnedInterestRunningBalance",
             sortable:"true",
         },
         {
             name:"End Date",
             selector:"EndDate",
             sortable:"true",
         },
         {
             name:"Notional Amount",
             selector:"NotionalAmount",
             sortable:"true",
         },
         {
             name:"Notional Amount Compounded",
             selector:"NotionalAmountCompounded",
             sortable:"true",
         },
         {
             name:"Spread",
             selector:"Spread",
             sortable:"true",
         },
         {
            name:"Start Date",
            selector:"StartDate",
            sortable:"true",
         },
     ]

     const tableData={
        columns:columns,
         data:arr,
     };


        const fetchData = async () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var date = new Date(document.getElementById("StartDate").value);
        var startdate = ("0" + (date.getMonth() + 1)).slice(-2) + "/" + ("0" + date.getDate()).slice(-2) + "/" + date.getFullYear();
        var date2 = new Date(document.getElementById("EndDate").value);
        var enddate = ("0" + (date2.getMonth() + 1)).slice(-2) + "/" + ("0" + date2.getDate()).slice(-2) + "/" + date2.getFullYear();
        var notional1 = document.getElementById("Notional").value;
        var payholi = document.getElementById("PaymentHoliday").value;
        var dycount = document.getElementById("DayCount").value;
        var rfr1 = document.getElementById("RFR").value;
        var spread1 = document.getElementById("Spread").value;
        var adjustment1 = document.getElementById("Adjustment").value;
        var floor1 = document.getElementById("Floor").value;
        var lookback1 = document.getElementById("Lookback").value;
        var lockout1 = document.getElementById("Lockout").value;
        var intmethod = document.getElementById("InterestMethod").value;
        var observationshift1 = document.getElementById("ObservationShift").checked;
        var raw = JSON.stringify({
            "Ranges": [{
                "StartDate": startdate.toString(),
                "EndDate": enddate.toString(),
                "Notional": parseInt(notional1)
            }],
            "PaymentHolidays": [payholi.toString()],
            "DayCount": dycount.toString(),
            "Frequency": 360,
            "RFR": rfr1.toString(),
            "InterestMethod": intmethod.toString(),
            "Spread": parseInt(spread1),
            "Floor": parseInt(floor1),
            "Adjustment": parseInt(adjustment1),
            "Lookback": parseInt(lookback1),
            "Lockout": parseInt(lockout1),
            "ObservationShift": observationshift1,
            "Debug": false
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "https://api.rfrcalculator.com/rfr"; // site that doesn’t send Access-Control-*
        var data1 = [];
        var html = '';
        await fetch("http://localhost:3600/rfr_cal", requestOptions)
            .then(response => response.json())
            .then(result =>   result['CalcResponse']['AccrualResults'])
            .then(result1 => {setArr(result1)})
            .catch(error => console.log('error = ', error));

    }


    // const htmlToReact=()=>{
    // const html =`<html lang="en">
    // <head>
    //     <title>RFR Calculator</title>
    //     <meta charset="utf-8">
    //         <meta name="viewport" content="width=device-width, initial-scale=1">
    //
    //
    // </head>
    // <body>
    // </body>
    // </html>
    return (
        <div>
            <Header/>

            <div className="container">
            <h2>Risk Free Rate Calculator</h2>
            <form className="form-horizontal">
                <div className="form-group">
                    <label className="control-label col-sm-2">Initial Commitment:</label>
                    <div className="col-sm-3">
                        <input type="number" className="form-control" id="Notional" value="15000000"
                               placeholder="Enter Initial Commitment" name="init_commit"/>
                    </div>
                    <label className="control-label col-sm-2">Start Date:</label>
                    <div className="col-sm-3">
                        <input type="date" className="form-control" id="StartDate" placeholder="Enter Start Date"
                               value="2020-09-30" name="start_date"/>
                    </div>
                </div>


                <div className="form-group">
                    <label className="control-label col-sm-2">End Date:</label>
                    <div className="col-sm-3">
                        <input type="date" className="form-control" id="EndDate" placeholder="Enter End Date"
                               value="2020-10-30"
                               name="end_date"/>
                    </div>
                    <label className="control-label col-sm-2">Lookback:</label>
                    <div className="col-sm-3">
                        <select className="form-control" id="Lookback">
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option selected='selected'>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                        </select>
                        <div className="checkbox">
                            <label><input type="checkbox" id="ObservationShift"/>Observation Shift</label>
                        </div>
                    </div>
                </div>


                <div className="form-group">
                    <label className="control-label col-sm-2">Lock out:</label>
                    <div className="col-sm-3">
                        <select className="form-control" id="Lockout">
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                        </select>
                    </div>
                    <label className="control-label col-sm-2">Rounding:</label>
                    <div className="col-sm-3">
                        <select className="form-control" id="Rounding">
                            <option>0</option>
                            <option>1</option>
                            <option selected='selected'>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                        </select>
                    </div>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-2">Spread%:</label>
                    <div className="col-sm-3">
                        <input type="number" className="form-control" id="Spread" placeholder="Enter Spread %" name="Spread"
                               value="0.5"/>
                    </div>
                    <label className="control-label col-sm-2">Adjustment%:</label>
                    <div className="col-sm-3">
                        <input type="number" className="form-control" id="Adjustment" placeholder="Enter Adjustment %"
                               name="Adjustment" value="0"/>
                    </div>
                </div>


                <div className="form-group">
                    <label className="control-label col-sm-2">Floor%:</label>
                    <div className="col-sm-3">
                        <input type="number" className="form-control" id="Floor" placeholder="Enter Floor %" name="Floor"
                               value="0"/>
                    </div>
                    <label className="control-label col-sm-2">Day count:</label>
                    <div className="col-sm-3">
                        <select className="form-control" id="DayCount">
                            <option>ACT360</option>
                            <option selected='selected'>ACT365</option>
                            <option>ACTACT</option>
                        </select>
                    </div>
                </div>


                <div className="form-group">
                    <label className="control-label col-sm-2">Payment Holidays:</label>
                    <div className="col-sm-3">
                        <select multiple className="form-control" id="PaymentHoliday">
                            <option selected='selected'>USA</option>
                            <option>UK</option>
                            <option>EUR</option>
                            <option>JP</option>
                            <option>SG</option>
                            <option>CH</option>
                        </select>
                    </div>
                    <label className="control-label col-sm-2">RFR:</label>
                    <div className="col-sm-3">
                        <select className="form-control" id="RFR">
                            <option selected='selected'>SOFR</option>
                            <option>SONIA</option>
                            <option>ESTR</option>
                            <option>TONAR</option>
                            <option>SORA</option>
                            <option>SARON</option>
                        </select>
                    </div>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-2">Interest Method:</label>
                    <div className="col-sm-3">
                        <select className="form-control" id="InterestMethod">
                            <option selected='selected'>CompoundInArrears</option>
                            <option>SimpleInArrears</option>
                        </select>
                    </div>
                </div>


            </form>
            <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                    <input type="submit" className="btn btn-default" onClick={fetchData}/>
                </div>
            </div>

            {/*<p>*/}
            {/*    <span id='display11'></span>*/}
            {/*</p>*/}
            {/*<p>*/}
            {/*    <span id='display12'></span>*/}
            {/*</p>*/}

            {arr.length!==0 &&
                <div>
              <Typography variant={"h3"}> Details</Typography>
                    <DataTableExtensions  {... tableData}>
                       <DataTable
                        pagination
                        theme={"solarized"}
                        highlightOnHover
                       />

                    </DataTableExtensions>
                </div>
            }
        </div>
        </div>
    );

}

export default Calculator;
