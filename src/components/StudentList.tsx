"use client";


import { studentList } from "@/app/page";
import { studentType } from "@/types/types";
import Link from "next/link";





export default function StudentList() {
    return (<>
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className=" text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Number
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Student Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Father Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            CNIC
                        </th>
                        <th scope="col" className="px-6 py-3">
                            roll num
                        </th>

                        <th scope="col" className="px-6 py-3">
                            Fees
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Class
                        </th>
                        <th scope="col" className="px-6 py-3">
                            open
                        </th>

                    </tr>
                </thead>
                <tbody>


                    {
                        studentList.map((student: studentType, index) => (

                            <tr key={student.CNIC} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th className="px-6 py-4">
                                    {index + 1}
                                </th>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {student.name}
                                </th>
                                <td className="px-6 py-4">
                                    {student.fathername}
                                </td>
                                <td className="px-6 py-4">
                                    {student.CNIC}
                                </td>
                                <td className="px-6 py-4">
                                    {student.rollnum}
                                </td>
                                <td className="px-6 py-4">
                                    {student.fees}
                                </td>
                                <td className="px-6 py-4">
                                    {student.StudentClass}
                                </td>
                                <Link href={student.rollnum} >
                                    <td className="px-6 py-4">
                                        <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Open</button>
                                    </td>
                                </Link>
                            </tr>
                        )

                        )

                    }



                </tbody>
            </table>
        </div>
    </>
    )
}