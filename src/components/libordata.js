import React, {useState} from "react";
import DataTable, {createTheme} from "react-data-table-component";
import Typography from "@material-ui/core/Typography";
import {Button} from "@material-ui/core";
import {ExcelRenderer} from "react-excel-renderer";
import * as XLSX from 'xlsx';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

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
    const [arr1, setArr1] = useState([]);
    const [arr2, setArr2] = useState([]);
    const [arr3, setArr3] = useState([]);
    const [arr4, setArr4] = useState([]);
    let data1 = [];
    let rows = [];
    const responsive = {
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    const fetchExcelData = (e) => {

        let fref = e.target.files[0];
        const freader = new FileReader();
        freader.readAsArrayBuffer(fref);

        freader.onload = (e) => {
            const result = e.target.result;
            const wb = XLSX.read(result, {type: 'buffer'});

            const wsName1 = wb.SheetNames[0];
            const wsName2 = wb.SheetNames[1];
            const wsName3 = wb.SheetNames[2];
            const wsName4 = wb.SheetNames[3];

            const ws1 = wb.Sheets[wsName1];
            const ws2 = wb.Sheets[wsName2];
            const ws3 = wb.Sheets[wsName3];
            const ws4 = wb.Sheets[wsName4];

            const data1 = XLSX.utils.sheet_to_json(ws1);
            const data2 = XLSX.utils.sheet_to_json(ws2);
            const data3 = XLSX.utils.sheet_to_json(ws3);
            const data4 = XLSX.utils.sheet_to_json(ws4);
            setArr1(data1);
            setArr2(data2);
            setArr3(data3);
            setArr4(data4);
            console.log("Data = ", data4);
        }

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

    const columns1 = [
        {
            name: "File Name",
            selector: "File_Name",
        },
        {
            name: "Borrower",
            selector: "Borrowers"
        }
    ];

    const columns2 = [
        {
            name: "File Name",
            selector: "File_Name",
        },
        {
            name: "Lender",
            selector: "Lender",
        },
        {
            name: "Commitment",
            selector: "Commitment",
        }
    ]

    const columns3 = [
        {
            name: "File Name",
            selector: "File_Name",
        },
        {
            name: "Fallback Clause",
            selector: "Fallback_Clause",
        },
        {
            name: "Fallback Paragraph",
            selector: "Fallback_Paragraph",
        },
        {
            name: "Page Number",
            selector: "Page_no",
        }

    ];

    return (
        <div>
            <div>
                <input type={"file"} onChange={fetchExcelData}/>
            </div>


            <Carousel responsive={responsive}>
                <Card>
                    <CardContent>
                        {arr1.length !== 0 &&
                        <div>
                            <Typography variant={"h4"} style={{color: "blue"}}>Libor Details</Typography>
                            < DataTable columns={columns} data={arr1} pagination theme={"solarized"}/>
                        </div>
                        }
                    </CardContent>

                </Card>

                <Card>
                <CardContent>
                    {arr1.length !== 0 &&
                    <div>
                        <Typography variant={"h4"} style={{color: "blue"}}>Borrowers Details</Typography>
                        < DataTable columns={columns1} data={arr2} pagination theme={"solarized"}/>
                    </div>
                    }
                </CardContent>

            </Card>

                <Card>
                <CardContent>
                    {arr1.length !== 0 &&
                    <div>
                        <Typography variant={"h4"} style={{color: "blue"}}>Lenders Details</Typography>
                        < DataTable columns={columns2} data={arr3} pagination theme={"solarized"}/>
                    </div>
                    }
                </CardContent>

            </Card>

                <Card>
                <CardContent>
                    {arr1.length !== 0 &&
                    <div>
                        <Typography variant={"h4"} style={{color: "blue"}}>Fallback Details</Typography>
                        < DataTable columns={columns3} data={arr4} pagination theme={"solarized"}/>
                    </div>
                    }
                </CardContent>

            </Card>


            </Carousel>
        </div>
    )

}

export default LiborData;
