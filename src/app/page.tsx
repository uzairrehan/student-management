"use client";
import EditStudent from "@/components/EditStudent";
import NewStudent from "@/components/NewStudent";
import StudentList from "@/components/StudentList";

export let studentList = [{    
  "name": "John Doe",
  "fathername": "Michael Doe",
  "CNIC": "12345-6789012-0",
  "rollnum": "A001",
  "StudentClass": "10th Grade",
  "fees": 5000
},
{
  "name": "Jane Smith",
  "fathername": "David Smith",
  "CNIC": "12345-6789012-1",
  "rollnum": "A002",
  "StudentClass": "10th Grade",
  "fees": 5200
},
{
  "name": "Alice Johnson",
  "fathername": "Robert Johnson",
  "CNIC": "12345-6789012-2",
  "rollnum": "A003",
  "StudentClass": "11th Grade",
  "fees": 5500
},
{
  "name": "Bob Brown",
  "fathername": "James Brown",
  "CNIC": "12345-6789012-3",
  "rollnum": "A004",
  "StudentClass": "11th Grade",
  "fees": 5300
},
{
  "name": "Emily Davis",
  "fathername": "William Davis",
  "CNIC": "12345-6789012-4",
  "rollnum": "A005",
  "StudentClass": "12th Grade",
  "fees": 6000
},
{
  "name": "Michael Wilson",
  "fathername": "Richard Wilson",
  "CNIC": "12345-6789012-5",
  "rollnum": "A006",
  "StudentClass": "12th Grade",
  "fees": 6200
},
{
  "name": "Olivia Taylor",
  "fathername": "Charles Taylor",
  "CNIC": "12345-6789012-6",
  "rollnum": "A007",
  "StudentClass": "9th Grade",
  "fees": 4800
},
{
  "name": "Liam Anderson",
  "fathername": "Daniel Anderson",
  "CNIC": "12345-6789012-7",
  "rollnum": "A008",
  "StudentClass": "9th Grade",
  "fees": 4900
},
{
  "name": "Sophia Martinez",
  "fathername": "Matthew Martinez",
  "CNIC": "12345-6789012-8",
  "rollnum": "A009",
  "StudentClass": "10th Grade",
  "fees": 5100
},
{
  "name": "Jackson Lee",
  "fathername": "Joseph Lee",
  "CNIC": "12345-6789012-9",
  "rollnum": "A010",
  "StudentClass": "10th Grade",
  "fees": 5000
},
{
  "name": "Mia Harris",
  "fathername": "Ethan Harris",
  "CNIC": "12345-6789013-0",
  "rollnum": "A011",
  "StudentClass": "11th Grade",
  "fees": 5400
},
{
  "name": "James Clark",
  "fathername": "Andrew Clark",
  "CNIC": "12345-6789013-1",
  "rollnum": "A012",
  "StudentClass": "11th Grade",
  "fees": 5600
},
{
  "name": "Ava Lewis",
  "fathername": "Henry Lewis",
  "CNIC": "12345-6789013-2",
  "rollnum": "A013",
  "StudentClass": "12th Grade",
  "fees": 5800
},
{
  "name": "Ethan Walker",
  "fathername": "Thomas Walker",
  "CNIC": "12345-6789013-3",
  "rollnum": "A014",
  "StudentClass": "12th Grade",
  "fees": 5900
},
{
  "name": "Isabella Hall",
  "fathername": "Jackson Hall",
  "CNIC": "12345-6789013-4",
  "rollnum": "A015",
  "StudentClass": "9th Grade",
  "fees": 4700
},
{
  "name": "Alexander Young",
  "fathername": "Gabriel Young",
  "CNIC": "12345-6789013-5",
  "rollnum": "A016",
  "StudentClass": "9th Grade",
  "fees": 4800
},
{
  "name": "Charlotte King",
  "fathername": "Samuel King",
  "CNIC": "12345-6789013-6",
  "rollnum": "A017",
  "StudentClass": "10th Grade",
  "fees": 5100
},
{
  "name": "Benjamin Wright",
  "fathername": "Oliver Wright",
  "CNIC": "12345-6789013-7",
  "rollnum": "A018",
  "StudentClass": "10th Grade",
  "fees": 5200
},
{
  "name": "Amelia Scott",
  "fathername": "Elijah Scott",
  "CNIC": "12345-6789013-8",
  "rollnum": "A019",
  "StudentClass": "11th Grade",
  "fees": 5500
},
{
  "name": "Logan Adams",
  "fathername": "Jacob Adams",
  "CNIC": "12345-6789013-9",
  "rollnum": "A020",
  "StudentClass": "11th Grade",
  "fees": 5700
},
{
  "name": "Harper Nelson",
  "fathername": "Mason Nelson",
  "CNIC": "12345-6789014-0",
  "rollnum": "A021",
  "StudentClass": "12th Grade",
  "fees": 6000
},
{
  "name": "William Carter",
  "fathername": "Henry Carter",
  "CNIC": "12345-6789014-1",
  "rollnum": "A022",
  "StudentClass": "12th Grade",
  "fees": 6100
},
{
  "name": "Ella Mitchell",
  "fathername": "Liam Mitchell",
  "CNIC": "12345-6789014-2",
  "rollnum": "A023",
  "StudentClass": "9th Grade",
  "fees": 4600
},
{
  "name": "James Turner",
  "fathername": "Daniel Turner",
  "CNIC": "12345-6789014-3",
  "rollnum": "A024",
  "StudentClass": "9th Grade",
  "fees": 4700
},
{
  "name": "Grace Collins",
  "fathername": "Christopher Collins",
  "CNIC": "12345-6789014-4",
  "rollnum": "A025",
  "StudentClass": "10th Grade",
  "fees": 5000
},
{
  "name": "Lucas Ramirez",
  "fathername": "Ryan Ramirez",
  "CNIC": "12345-6789014-5",
  "rollnum": "A026",
  "StudentClass": "10th Grade",
  "fees": 5100
}]

export default function Home() {
  return (
    <>
    <NewStudent/>
    <StudentList/>
    <EditStudent />

    </>
  );
}
