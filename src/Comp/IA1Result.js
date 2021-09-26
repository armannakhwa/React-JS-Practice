import React, { useState, useEffect } from 'react'
import Swal from "sweetalert2";

export default function IA1Result() {

    document.title = "IA 1 Marks - Arman Nakhwa";

    let data =[{
        "Rollno": "1",
        "NAME": "ANERAO AMOGH HEMANT",
        "IP": "15",
        "CNS": "20",
        "EEB": "18",
        "SE": "18",
        "CGMS": "15"
    }, {
        "Rollno": "2",
        "NAME": "ARONDEKAR GANESH CHANDRAKANT",
        "IP": "19",
        "CNS": "19",
        "EEB": "18",
        "SE": "16",
        "CGMS": "15"
    }, {
        "Rollno": "3",
        "NAME": "BAGAVE RENUKA RAVINDRA",
        "IP": "20",
        "CNS": "20",
        "EEB": "17",
        "SE": "18",
        "CGMS": "16"
    }, {
        "Rollno": "4",
        "NAME": "BHAGWAT ATHARVA SANTOSH",
        "IP": "19",
        "CNS": "19",
        "EEB": "17",
        "SE": "16",
        "CGMS": "16"
    }, {
        "Rollno": "5",
        "NAME": "BIRJE AAKANKSHA ANIL",
        "IP": "19",
        "CNS": "18",
        "EEB": "18",
        "SE": "17",
        "CGMS": "13"
    }, {
        "Rollno": "6",
        "NAME": "BORKAR AFIYA AYUB",
        "IP": "20",
        "CNS": "20",
        "EEB": "19",
        "SE": "19",
        "CGMS": "19"
    }, {
        "Rollno": "7",
        "NAME": "CHOUDHARY AJIT CHANDRAPAL",
        "IP": "18",
        "CNS": "17",
        "EEB": "16",
        "SE": "13",
        "CGMS": "16"
    }, {
        "Rollno": "8",
        "NAME": "DANGE AARYA SANJAY",
        "IP": "20",
        "CNS": "18",
        "EEB": "17",
        "SE": "17",
        "CGMS": "16"
    }, {
        "Rollno": "9",
        "NAME": "DESAI SHRUTI SANTOSH",
        "IP": "20",
        "CNS": "20",
        "EEB": "17",
        "SE": "16",
        "CGMS": "18"
    }, {
        "Rollno": "10",
        "NAME": "DHANGAT PRIYANKA RAMESH",
        "IP": "20",
        "CNS": "20",
        "EEB": "16",
        "SE": "17",
        "CGMS": "17"
    }, {
        "Rollno": "11",
        "NAME": "DHURI NEHAL VASANT",
        "IP": "19",
        "CNS": "19",
        "EEB": "17",
        "SE": "16",
        "CGMS": "18"
    }, {
        "Rollno": "12",
        "NAME": "GARDE TANMAY PRAMOD",
        "IP": "19",
        "CNS": "20",
        "EEB": "16",
        "SE": "19",
        "CGMS": "16"
    }, {
        "Rollno": "13",
        "NAME": "GURAV PRANALI GAJANAN",
        "IP": "19",
        "CNS": "20",
        "EEB": "19",
        "SE": "19",
        "CGMS": "18"
    }, {
        "Rollno": "14",
        "NAME": "JADHAV PRAJAKTA DATTARAM",
        "IP": "19",
        "CNS": "20",
        "EEB": "16",
        "SE": "17",
        "CGMS": "13"
    }, {
        "Rollno": "15",
        "NAME": "JADHAV PRATIK JIVAN",
        "IP": "17",
        "CNS": "19",
        "EEB": "16",
        "SE": "16",
        "CGMS": "14"
    }, {
        "Rollno": "16",
        "NAME": "JANGLE SUSHAMA DEOO",
        "IP": "20",
        "CNS": "20",
        "EEB": "18",
        "SE": "17",
        "CGMS": "13"
    }, {
        "Rollno": "17",
        "NAME": "JAYGADE JANHAVI JEEVAN",
        "IP": "18",
        "CNS": "19",
        "EEB": "18",
        "SE": "17",
        "CGMS": "15"
    }, {
        "Rollno": "18",
        "NAME": "JOSHI MADHURA AVINASH",
        "IP": "19",
        "CNS": "20",
        "EEB": "17",
        "SE": "17",
        "CGMS": "17"
    }, {
        "Rollno": "19",
        "NAME": "KADAM RUSHIKESH DATTATRAY",
        "IP": "20",
        "CNS": "20",
        "EEB": "18",
        "SE": "17",
        "CGMS": "18"
    }, {
        "Rollno": "20",
        "NAME": "KAMBALE ASHISH ANIL",
        "IP": "19",
        "CNS": "18",
        "EEB": "16",
        "SE": "15",
        "CGMS": "15"
    }, {
        "Rollno": "21",
        "NAME": "KHAN TAUZ TANVEER",
        "IP": "19",
        "CNS": "19",
        "EEB": "17",
        "SE": "18",
        "CGMS": "17"
    }, {
        "Rollno": "22",
        "NAME": "KHEDASKAR SHREYA SANJAY",
        "IP": "20",
        "CNS": "19",
        "EEB": "18",
        "SE": "18",
        "CGMS": "17"
    }, {
        "Rollno": "23",
        "NAME": "KHEDEKAR SOHAM UDAY",
        "IP": "14",
        "CNS": "16",
        "EEB": "AB",
        "SE": "14",
        "CGMS": "14"
    }, {
        "Rollno": "24",
        "NAME": "KOLHATKAR ARPITA VILAS",
        "IP": "20",
        "CNS": "19",
        "EEB": "19",
        "SE": "18",
        "CGMS": "19"
    }, {
        "Rollno": "25",
        "NAME": "KORAVI SOURABH SHIVAJI",
        "IP": "18",
        "CNS": "20",
        "EEB": "17",
        "SE": "16",
        "CGMS": "18"
    }, {
        "Rollno": "26",
        "NAME": "KUMBHAR RUTUJA RAJENDRA",
        "IP": "20",
        "CNS": "19",
        "EEB": "17",
        "SE": "16",
        "CGMS": "15"
    }, {
        "Rollno": "27",
        "NAME": "LAKHAN YOGESHRI PRAKASH PRIYANKA",
        "IP": "18",
        "CNS": "19",
        "EEB": "18",
        "SE": "17",
        "CGMS": "18"
    }, {
        "Rollno": "28",
        "NAME": "LELE JANHAVI MAHESH",
        "IP": "18",
        "CNS": "19",
        "EEB": "17",
        "SE": "19",
        "CGMS": "18"
    }, {
        "Rollno": "29",
        "NAME": "MADKAIKAR HARSH MILIND",
        "IP": "20",
        "CNS": "19",
        "EEB": "17",
        "SE": "17",
        "CGMS": "19"
    }, {
        "Rollno": "30",
        "NAME": "MALJI ATHARVA BALKRISHNA",
        "IP": "20",
        "CNS": "20",
        "EEB": "16",
        "SE": "18",
        "CGMS": "17"
    }, {
        "Rollno": "31",
        "NAME": "MANE SUPRIYA NANDKUMAR",
        "IP": "14",
        "CNS": "18",
        "EEB": "16",
        "SE": "17",
        "CGMS": "12"
    }, {
        "Rollno": "32",
        "NAME": "MARAGALE TUSHAR NARAYAN",
        "IP": "20",
        "CNS": "20",
        "EEB": "17",
        "SE": "17",
        "CGMS": "14"
    }, {
        "Rollno": "33",
        "NAME": "MATKAR SAIRAJ SANJAY",
        "IP": "19",
        "CNS": "20",
        "EEB": "16",
        "SE": "18",
        "CGMS": "15"
    }, {
        "Rollno": "34",
        "NAME": "MESTRI ATHARVA CHANDRASHEKHAR",
        "IP": "19",
        "CNS": "19",
        "EEB": "17",
        "SE": "14",
        "CGMS": "15"
    }, {
        "Rollno": "35",
        "NAME": "MHADE NEHA ASHOK",
        "IP": "19",
        "CNS": "19",
        "EEB": "18",
        "SE": "17",
        "CGMS": "14"
    }, {
        "Rollno": "36",
        "NAME": "MHADGUT ASAVARI PRADEEPKUMAR",
        "IP": "20",
        "CNS": "19",
        "EEB": "18",
        "SE": "17",
        "CGMS": "15"
    }, {
        "Rollno": "37",
        "NAME": "MIRASHI PANKAJ SANTOSH",
        "IP": "19",
        "CNS": "18",
        "EEB": "18",
        "SE": "15",
        "CGMS": "12"
    }, {
        "Rollno": "38",
        "NAME": "MUKADAM AFRAH MUSHTAQ",
        "IP": "19",
        "CNS": "20",
        "EEB": "18",
        "SE": "19",
        "CGMS": "20"
    }, {
        "Rollno": "39",
        "NAME": "MUKADAM MARUFA IRFAN",
        "IP": "20",
        "CNS": "20",
        "EEB": "17",
        "SE": "19",
        "CGMS": "20"
    }, {
        "Rollno": "40",
        "NAME": "MUKADAM SUHA MOHAMED HUSAIN",
        "IP": "20",
        "CNS": "20",
        "EEB": "18",
        "SE": "19",
        "CGMS": "17"
    }, {
        "Rollno": "41",
        "NAME": "MUNGEKAR MANTHAN BHALCHANDRA",
        "IP": "18",
        "CNS": "19",
        "EEB": "17",
        "SE": "16",
        "CGMS": "17"
    }, {
        "Rollno": "42",
        "NAME": "NABAR PRADNYA KISHOR",
        "IP": "18",
        "CNS": "19",
        "EEB": "18",
        "SE": "17",
        "CGMS": "18"
    }, {
        "Rollno": "43",
        "NAME": "NACHANKAR GURUPRASAD SUBHASH SHUBHANGI",
        "IP": "19",
        "CNS": "19",
        "EEB": "17",
        "SE": "16",
        "CGMS": "16"
    }, {
        "Rollno": "44",
        "NAME": "NACHANKAR VAISHNAVI NILESH",
        "IP": "20",
        "CNS": "19",
        "EEB": "17",
        "SE": "16",
        "CGMS": "17"
    }, {
        "Rollno": "45",
        "NAME": "NAKHWA ARMAN ANIS",
        "IP": "20",
        "CNS": "20",
        "EEB": "17",
        "SE": "18",
        "CGMS": "18"
    }, {
        "Rollno": "46",
        "NAME": "NALAWADE SAYALI UMESH",
        "IP": "20",
        "CNS": "20",
        "EEB": "18",
        "SE": "17",
        "CGMS": "18"
    }, {
        "Rollno": "47",
        "NAME": "NARKAR RAJ VINOD",
        "IP": "19",
        "CNS": "20",
        "EEB": "18",
        "SE": "17",
        "CGMS": "17"
    }, {
        "Rollno": "48",
        "NAME": "NARVEKAR YASH NAGESH",
        "IP": "19",
        "CNS": "19",
        "EEB": "18",
        "SE": "14",
        "CGMS": "12"
    }, {
        "Rollno": "49",
        "NAME": "PALAV PRATHAMESH PRADEEP",
        "IP": "19",
        "CNS": "18",
        "EEB": "17",
        "SE": "16",
        "CGMS": "16"
    }, {
        "Rollno": "50",
        "NAME": "PANCHAL MRUNAL SANDIP",
        "IP": "19",
        "CNS": "19",
        "EEB": "17",
        "SE": "17",
        "CGMS": "17"
    }, {
        "Rollno": "51",
        "NAME": "PARAB SHANKAR SITARAM",
        "IP": "20",
        "CNS": "19",
        "EEB": "18",
        "SE": "16",
        "CGMS": "16"
    }, {
        "Rollno": "52",
        "NAME": "PARANJAPE NIVEDITA PRASHANT",
        "IP": "20",
        "CNS": "20",
        "EEB": "18",
        "SE": "20",
        "CGMS": "19"
    }, {
        "Rollno": "53",
        "NAME": "PARANJAPE PRATHAMESH VILAS",
        "IP": "20",
        "CNS": "19",
        "EEB": "17",
        "SE": "15",
        "CGMS": "17"
    }, {
        "Rollno": "54",
        "NAME": "PARDESHI ASHISH KISHORSING YOGITABAI",
        "IP": "17",
        "CNS": "18",
        "EEB": "18",
        "SE": "15",
        "CGMS": "12"
    }, {
        "Rollno": "55",
        "NAME": "PATANKAR PRIYANKA VIJAY",
        "IP": "20",
        "CNS": "18",
        "EEB": "18",
        "SE": "17",
        "CGMS": "16"
    }, {
        "Rollno": "56",
        "NAME": "PATIL MADHURA DATTATRAY",
        "IP": "20",
        "CNS": "19",
        "EEB": "18",
        "SE": "17",
        "CGMS": "18"
    }, {
        "Rollno": "57",
        "NAME": "PAWAR SAYALI DILIP",
        "IP": "20",
        "CNS": "19",
        "EEB": "17",
        "SE": "17",
        "CGMS": "17"
    }, {
        "Rollno": "58",
        "NAME": "PHADNIS ANTARA SUNIT",
        "IP": "20",
        "CNS": "20",
        "EEB": "17",
        "SE": "19",
        "CGMS": "18"
    }, {
        "Rollno": "59",
        "NAME": "PRABHU LAKSHITA RAJENDRAKUMAR",
        "IP": "20",
        "CNS": "20",
        "EEB": "18",
        "SE": "17",
        "CGMS": "15"
    }, {
        "Rollno": "60",
        "NAME": "RAHUL KAUSHAL PRASAD",
        "IP": "20",
        "CNS": "18",
        "EEB": "17",
        "SE": "18",
        "CGMS": "18"
    }, {
        "Rollno": "61",
        "NAME": "RAIN PRANJAL PRAVIN",
        "IP": "16",
        "CNS": "18",
        "EEB": "18",
        "SE": "18",
        "CGMS": "12"
    }, {
        "Rollno": "62",
        "NAME": "RAJAM BHUSHAN RATNAKAR",
        "IP": "20",
        "CNS": "19",
        "EEB": "17",
        "SE": "18",
        "CGMS": "19"
    }, {
        "Rollno": "63",
        "NAME": "RANE PRATHAMESH VILAS",
        "IP": "20",
        "CNS": "19",
        "EEB": "17",
        "SE": "18",
        "CGMS": "14"
    }, {
        "Rollno": "64",
        "NAME": "RANSHUR PRATIKSHA DILIP",
        "IP": "20",
        "CNS": "20",
        "EEB": "17",
        "SE": "18",
        "CGMS": "18"
    }, {
        "Rollno": "65",
        "NAME": "SALGAONKAR SHWETA SHARAD",
        "IP": "19",
        "CNS": "18",
        "EEB": "18",
        "SE": "16",
        "CGMS": "18"
    }, {
        "Rollno": "66",
        "NAME": "SAWANT ASAWARI SHAILENDRA",
        "IP": "20",
        "CNS": "19",
        "EEB": "17",
        "SE": "17",
        "CGMS": "15"
    }, {
        "Rollno": "67",
        "NAME": "SAWANT DNYANESH DHANANJAY",
        "IP": "19",
        "CNS": "19",
        "EEB": "18",
        "SE": "16",
        "CGMS": "16"
    }, {
        "Rollno": "68",
        "NAME": "SHINGARE PRANALI DILIP",
        "IP": "19",
        "CNS": "20",
        "EEB": "18",
        "SE": "19",
        "CGMS": "17"
    }, {
        "Rollno": "69",
        "NAME": "SHIRGAONKAR VED SAGAR",
        "IP": "19",
        "CNS": "20",
        "EEB": "18",
        "SE": "17",
        "CGMS": "19"
    }, {
        "Rollno": "70",
        "NAME": "SOLKAR RIFAH MUNAF",
        "IP": "20",
        "CNS": "20",
        "EEB": "18",
        "SE": "19",
        "CGMS": "19"
    }, {
        "Rollno": "71",
        "NAME": "SURVE SAKSHI DEEPAK",
        "IP": "20",
        "CNS": "19",
        "EEB": "17",
        "SE": "15",
        "CGMS": "15"
    }, {
        "Rollno": "72",
        "NAME": "TAMHANEKAR MAHADEV VIJAY",
        "IP": "20",
        "CNS": "19",
        "EEB": "17",
        "SE": "17",
        "CGMS": "15"
    }, {
        "Rollno": "73",
        "NAME": "TEMBE AKSHAY ANAND",
        "IP": "20",
        "CNS": "19",
        "EEB": "17",
        "SE": "16",
        "CGMS": "15"
    }, {
        "Rollno": "74",
        "NAME": "UPPARA KAKULA KAVYASHREE RAMESH",
        "IP": "18",
        "CNS": "19",
        "EEB": "16",
        "SE": "16",
        "CGMS": "15"
    }, {
        "Rollno": "75",
        "NAME": "VASKAR RUTIK RAVINDRA",
        "IP": "18",
        "CNS": "19",
        "EEB": "17",
        "SE": "18",
        "CGMS": "13"
    }, {
        "Rollno": "76",
        "NAME": "WANIVDEKAR TANVI PRASHANT PRANJALI",
        "IP": "19",
        "CNS": "18",
        "EEB": "17",
        "SE": "15",
        "CGMS": "10"
    }];

    let [IA1ResultData, setIA1ResultData] = useState([]);
    let [sname, setsname] = useState("");


    useEffect(() => {
        setIA1ResultData(data);
        // eslint-disable-next-line 
    }, [])

    function searchs(e) {

        setsname(e.target.value);
    }

    function rankwise() {
        setsname("");
        Swal.fire({
            title: 'Dont Worry..read below Quote',
            icon: "warning",
            dangerMode: true,
            text: "Study for Knowledge,not for marks.if you have the knowledge,you will get the success.",
        });

        let s3 = data.sort(function (a, b) {
            let d1 = parseInt(a.IP) + parseInt(a.CNS) + parseInt(a.EEB) + parseInt(a.SE) + parseInt(a.CGMS);
            let d2 = parseInt(b.IP) + parseInt(b.CNS) + parseInt(b.EEB) + parseInt(b.SE) + parseInt(b.CGMS);
            return d2 - d1;
        });
        setIA1ResultData(s3);

        var elmnt = document.getElementById("firstdata");
        elmnt.scrollTop = 0;
    }




    return (
        <div className="overflow-hidden mb-2" style={{ height: "90vh" }}>
            <div className="position-sticky text-center text-white bg-danger p-2">Result is already send in our WhatsApp Group

                <input className="form-control my-2" type="search" onChange={searchs} value={sname} placeholder="Enter your name" aria-label="Search" />

            </div>
            <div className="overflow-auto" id="firstdata" style={{ maxHeight: "80%" }}>
                {
                    // eslint-disable-next-line 
                    IA1ResultData.filter((val) => {
                        if (sname === "") {
                            return val
                        }
                        else if (val.NAME.toLowerCase().includes(sname.toLowerCase())) {
                            return val;
                        }

                    }).map((d, index) => {
                        return (
                            <div className="container p-3 my-3 bg-light text-dark" key={d.NAME}>
                                <h5 className="rankno">{index + 1}</h5>
                                <b>Name:</b> {d.NAME} <br />
                                <b>Roll No:</b> {d.Rollno}<br />
                                <b>IP:</b> {d.IP}<br />
                                <b>CNS:</b> {d.CNS}<br />
                                <b>EEB:</b> {d.EEB}<br />
                                <b>SE:</b> {d.SE}<br />
                                <b>CGMS:</b> {d.CGMS}<br />
                                <b>Total: </b>{parseInt(d.IP) + parseInt(d.CNS) + parseInt(d.EEB) + parseInt(d.SE) + parseInt(d.CGMS)}/100<br />
                            </div>
                        );
                    })}

            </div>
            <button type="button" className="btn btn-secondary rw" onClick={rankwise}>Rank Wise Result</button>


        </div>
    )
}
