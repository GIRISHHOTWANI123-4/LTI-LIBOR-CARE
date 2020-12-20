import React, {useState} from "react";
import DataTable, {createTheme} from "react-data-table-component";
import Typography from "@material-ui/core/Typography";
import {Button} from "@material-ui/core";
import {ExcelRenderer} from "react-excel-renderer";
// import {excelToJson} from 'convert-excel-to-json';
const excelToJson = require('convert-excel-to-json');

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
const LiborData = () => {
    const [arr,setArr]=useState([]);
   let data1=[];
   let rows=[];
    const fetchExcelData=(e)=>{

        // let freader =new FileReader();
        // let fref=new File([1000],"src/LIBOR_for_UI.xlsx");
        // console.log("FileDetails = ",fref);

        let fref=e.target.files[0];
        ExcelRenderer(fref,(err,res)=>{
            if(err)
                console.log("Error = ",err);
            else {
                console.log("Response = ",res);
                rows=res.rows;
                for(var i=1;i<rows.length;i++)
                {
                     let temparr=rows[i];
                     let obj={
                         File_Name: temparr[0],
                         File_Status: temparr[1],
                         Contract_Type: temparr[2],
                         Libor_Flag: temparr[3],
                         Sofr_Flag: temparr[4],
                         Termination_Date: temparr[5],
                         Effective_Date: temparr[6],
                         Contract_Amount: temparr[7],
                         Fallback_Category: temparr[8],
                         Risk_Profile: temparr[9]
                     }
                     data1.push(obj);
                    // console.log("Obj  = ",obj);

                }
                setArr(data1);
                console.log("New Array Size = ",arr.length);
            }
            })
    }
    const columns = [
        {
            name: 'File Name',
            selector: 'File_Name',
        },
        {
            name: 'File Status',
            selector: 'File_Status',
        },
        {
            name: 'Contract Type',
            selector: 'Contract_Type',
        },
        {
            name: 'Libor Flag',
            selector: 'Libor_Flag',
        },
        {
            name: 'Sofr Flag',
            selector: 'Sofr_Flag',
        },
        {
            name: 'End Date',
            selector: 'Termination_Date',
        },
        {
            name: 'Effective Date',
            selector: 'Effective_Date',
        },
        {
            name: 'Contract Amount',
            selector: 'Contract_Amount',
        },
        {
            name: 'Fallback Category',
            selector: 'Fallback_Category',
        },
        {
            name: 'Risk Profile',
            selector: 'Risk_Profile',
        },
    ];

    // const data = [{
    //     File_Name: "Credit_Agreement_EARTHSTONE_ENERGY.pdf",
    //     File_Status: "Ready for Verification",
    //     Contract_Type: "Credit_Agreement",
    //     Libor_Flag: "Yes",
    //     Sofr_Flag: "Yes",
    //     Termination_Date: "November 21 ,2024",
    //     Effective_Date: "November 21, 2019",
    //     Contract_Amount: "325000000",
    //     Fallback_Category: "Fallback ARRC like",
    //     Risk_Profile: "Strong"
    // }, {
    //     File_Name: "Credit_Agreement_EARTHSTONE_ENERGY.pdf",
    //     File_Status: "Ready for Verification",
    //     Contract_Type: "Credit_Agreement",
    //     Libor_Flag: "Yes",
    //     Sofr_Flag: "Yes",
    //     Termination_Date: "November 21 ,2024",
    //     Effective_Date: "November 21, 2019",
    //     Contract_Amount: "325000000",
    //     Fallback_Category: "Fallback ARRC like",
    //     Risk_Profile: "Strong"
    // }, {
    //     File_Name: "Credit_Agreement_EARTHSTONE_ENERGY.pdf",
    //     File_Status: "Ready for Verification",
    //     Contract_Type: "Credit_Agreement",
    //     Libor_Flag: "Yes",
    //     Sofr_Flag: "Yes",
    //     Termination_Date: "November 21 ,2024",
    //     Effective_Date: "November 21, 2019",
    //     Contract_Amount: "325000000",
    //     Fallback_Category: "Fallback ARRC like",
    //     Risk_Profile: "Strong"
    // }, {
    //     File_Name: "Credit_Agreement_EARTHSTONE_ENERGY.pdf",
    //     File_Status: "Ready for Verification",
    //     Contract_Type: "Credit_Agreement",
    //     Libor_Flag: "Yes",
    //     Sofr_Flag: "Yes",
    //     Termination_Date: "November 21 ,2024",
    //     Effective_Date: "November 21, 2019",
    //     Contract_Amount: "325000000",
    //     Fallback_Category: "Fallback ARRC like",
    //     Risk_Profile: "Strong"
    // }]

    return (
        <div>
            <div>
                <input type={"file"} onChange={fetchExcelData}/>
                <Button variant="contained" color="primary" onClick={fetchExcelData}>
                    Primary
                </Button>
            </div>
            { arr.length!==0 &&
                <div>
                <Typography variant={"h4"} style={{color: "blue"}}>Details</Typography>
                < DataTable columns={columns} data={arr} pagination theme={"solarized"}/>
                </div>
            }
        </div>
    )

}

export default LiborData;
